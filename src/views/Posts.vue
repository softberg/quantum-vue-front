<script>
    import { ContentLoader } from 'vue-content-loader';
    import PostItem from '@/components/PostItem.vue';
    import { PostAPI } from '@/helpers/post';
    import Pagination from '@/components/PaginationBlock.vue';
    import { store } from '@/store';

    export default {
        data() {
            return {
                posts: [],
                pagination: null,
                page: this.$route?.query?.page,
                per_page: this.$route?.query?.per_page,
                store,
                hidden: false,
                mounted: true

            }
        },
        components: {
            ContentLoader,
            PostItem,
            Pagination
        },
        async mounted() {
            if (this.$route?.query.q == '' || this.$route.params.fromBack) {
                let params = {};

                if (this.page) {
                    params['page'] = this.page;
                }

                if (this.per_page) {
                    params['per_page'] = this.per_page;
                }

                this.postsAction(params);
            }
        },
        methods: {
            async postsAction(params) {
                this.posts = [];

                let response = await PostAPI.getPosts(params);

                if (response) {
                    this.posts = response.data;
                    this.pagination = response?.pagination;
                }

                if (!this.posts?.length) {
                    this.hidden = true;
                }

                store.params = params;
            },
            update(e) {
                let params = {
                    'page': e?.page,
                    'per_page': e?.per_page
                };

                if (this.$route.query.q) {
                    params['q'] = this.$route.query.q;
                }
                
                this.postsAction(params);
            },
            showPagination() {
                if (this.pagination && 
                    this.posts?.length && 
                    (this.pagination.total_records > (this.per_page || 8))) {
                        return true;
                }

                return false;
            }
        },
        watch: {
            'store.searchText': function (e) {
                let params = {};

                if (this.mounted) {
                    if (this.page) {
                        params['page'] = this.page;
                    }

                    if (this.per_page) {
                        params['per_page'] = this.per_page;
                    }

                    this.mounted = false;
                }

                params['q'] = e;

                const updatedQuery = { ...this.$route.query };
                delete updatedQuery.page;
                delete updatedQuery.per_page;
                updatedQuery.q = e;
                
                this.$router.replace({ query: updatedQuery });

                this.postsAction(params);
            }
        }
    }
</script>

<template>
	<div class="main-wrapper">
		<h1 class="center-align teal-text">{{ $t('message.posts') }}</h1>
        <TransitionGroup name="list" tag="div" className="row post_container">
            <template v-if="!posts?.length">
				<div class="col s12 m3 post-item" v-for="index in 8" :key="index" :class="{ hide: hidden }">
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

        <Pagination
            v-if="showPagination()"
            :pagination="pagination"
            :page="page"
            :per_page="per_page"
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