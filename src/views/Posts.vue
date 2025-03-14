<script>
    import { ContentLoader } from "vue-content-loader";
    import PostItem from "@/components/PostItem.vue";
    import { PostAPI } from "@/helpers/post";
    import PaginationBlock from "@/components/PaginationBlock.vue";
    import { DEFAULT_PER_PAGE } from "@/constants";

    export default {
        data() {
            return {
                posts: [],
                pagination: null,
                loading: true
            };
        },

        components: {
            ContentLoader,
            PostItem,
            PaginationBlock,
        },

        async mounted() {
            this.postsAction(this.$route.query);
        },

        methods: {
            async postsAction(params) {
                this.loading = true;
                this.posts = [];
                let response = await PostAPI.getPosts(params);

                if (response) {
                    this.posts = response.data;
                    this.pagination = response?.pagination;
                }

                this.loading = false;
            },

            showPagination() {
                if (this.pagination &&
                    this.posts?.length &&
                    this.pagination.total_records > (this.$route.query?.per_page || DEFAULT_PER_PAGE))  {
                        return true;
                }

                return false;
            },

            pageUpdate() {
                this.postsAction(this.$route.query);
            }
        },

        watch: {
            '$route.query.q': function () {
                this.postsAction(this.$route.query);
            }
        }
    }
</script>

<template>
    <div class="main-wrapper">
        <h1 class="center-align teal-text">{{ $t('message.posts') }}</h1>
        
        <TransitionGroup name="list" tag="div" className="row post_container">
            <template v-if="posts?.length">
                <div v-for="post in posts" :key="post.uuid" className="col s12 m3 post-item">
                    <PostItem :post="post" />
                </div>
            </template>

            <template v-else>
                <h4 v-if="!loading && !posts?.length" class="center-align grey-text">
                    {{ $t('message.no_posts') }}... {{ $t('message.try_creating') }}
                </h4>

                <div class="'col s12 m3 post-item'" v-for="index in DEFAULT_PER_PAGE" :key="index">
                    <content-loader viewBox="0 0 476 536" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb">
                        <rect x="0" y="0" rx="5" ry="5" width="100%" height="349" />
                        <rect x="5%" y="383" rx="10" ry="10" width="90%" height="20" />
                        <rect x="5%" y="423" rx="10" ry="10" width="90%" height="15" />
                        <rect x="0" y="465" rx="5" ry="5" width="100%" height="72" />
                    </content-loader>
                </div>
            </template>
        </TransitionGroup>

        <PaginationBlock v-if="showPagination()" :pagination="pagination" @click="pageUpdate" />
    </div>
</template>

<style scoped>
    .list-enter-active {
        transition: opacity 0.5s ease-in;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
    }

    .post-item {
        margin-bottom: 20px;
    }
</style>