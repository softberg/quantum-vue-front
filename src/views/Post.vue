<script>
    import { ContentLoader } from 'vue-content-loader';
    import { PostAPI } from '@/helpers/post';
    import Back from '../components/post/Back.vue';

    export default {
        data() {
            return {
                post: null,
                base_url: import.meta.env.VITE_BASE_URL
            }
        },
        components: {
            ContentLoader,
            Back
        },
        props: {
            route: {
                type: String
            }
        },
        async mounted() {
            let response = await PostAPI.getPost(this.$route.params.id);

            if (response) {
                this.post = response.data;

                document.title = this.post.title + ' | ' + this.$router.options.defaultPageTitle;
            } else {
                this.$router.push({
                    name: 'not-found',
                    params: { pathMatch: this.$route.path.substring(1).split('/') },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        }
    }
</script>

<template>
	<div class="main-wrapper">
		<div class="center-align container">
			<div class="polaroid">
				<div v-if="!post">
					<ContentLoader viewBox="0 0 400 420" :speed="2" :animate="true">
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="40" />
						<rect x="0" y="45" rx="0" ry="0" width="100%" height="150" />
						<rect x="0" y="200" rx="0" ry="0" width="100%" height="120" />
					</ContentLoader>
				</div>
				<div v-else>
                    <Back :route="this.$route.params.route" />

					<h1 class="single-blog-title">
						{{ post.title }}
					</h1>
					<div class="row">
						<div class="col s12 center-align post-date teal-text text-accent-4">
							{{ post.date }}
						</div>
						<div class="col s12 center-align post-author teal-text text-accent-4">
							{{ post.author }}
						</div>
					</div>
					<img v-if="post.image" :src="this.base_url + '/uploads/' + post.image" class="single_page_img">
					<p class="left-align single-blog-txt">
						{{ post.content }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>