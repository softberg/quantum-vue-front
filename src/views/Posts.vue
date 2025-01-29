<script>
    import { ContentLoader } from 'vue-content-loader';
    import PostItem from '@/components/PostItem.vue';
    import { PostAPI } from '@/helpers/post';
    import PaginationBlock from '@/components/PaginationBlock.vue';

    export default {
        data() {
            return {
                posts: [],
                pagination: null,
                defaultPage: 1,
                defaultPerPage: 8,
                page: this.$route.query?.page || this.defaultPage,
                per_page: this.$route.query?.per_page || this.defaultPerPage,
                q: this.$route?.query?.q,
                hidden: false,
            }
        },

        components: {
            ContentLoader,
            PostItem,
            PaginationBlock
        },

        async mounted() {
            this.postsAction({
                page: this.page,
                per_page: this.per_page,
                q: this.q,
            });
        },

        methods: {
            async postsAction(params) {
                this.posts = [];
                let response = await PostAPI.getPosts(params);

                if (response) {
                    this.posts = response.data;
                    this.pagination = response?.pagination;
                }
            },

            update(query) {
                this.postsAction(query);
            },

            showPagination() {
                if (this.pagination && 
                    this.posts?.length && 
                    (this.pagination.total_records > (this.per_page || this.defaultPerPage))) {
                        return true;
                }

                return false;
            }
        },

        watch: {
            '$route.params.render': function(render) {
                if (render) {
                    this.postsAction({});
                }
            },

            '$route.query': function() {
                this.q = this.$route?.query?.q;

                this.postsAction(this.$route.query);
            }
        }
    }
</script>

<template>
	<div class="main-wrapper">
		<h1 class="center-align teal-text">{{ $t('message.posts') }}</h1>
        <TransitionGroup name="list" tag="div" className="row post_container">
            <template v-if="!posts.length">
				<div class="col s12 m3 post-item" v-for="index in 8" :key="index">
					<content-loader viewBox="0 0 476 536" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb">
						<rect x="0" y="0" rx="5" ry="5" width="100%" height="349" />
						<rect x="5%" y="383" rx="10" ry="10" width="90%" height="20" />
						<rect x="5%" y="423" rx="10" ry="10" width="90%" height="15" />
						<rect x="0" y="465" rx="5" ry="5" width="100%" height="72" />
					</content-loader>
				</div>
			</template>
			<template v-else>
				<div v-for="post in posts" :key="post.id" className="col s12 m3 post-item">
					<PostItem :post="post" />
				</div>
			</template>
            <template v-if="!posts?.length">
				<h4 class="center-align grey-text">{{ $t('message.no_posts') }}... {{ $t('message.try_creating') }}</h4>
			</template>
        </TransitionGroup>

        <PaginationBlock
            v-if="showPagination()"
            :pagination="pagination"
            :q="this.q"
            @update:modelValue="update"/>
	</div>
</template>

<style>
    .list-enter-active,
    .list-leave-active {
        transition: opacity 0.5s ease-out;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
    }
</style>