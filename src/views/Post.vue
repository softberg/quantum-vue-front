<script>
import { ContentLoader } from 'vue-content-loader';
import axiosInstance from '@/axiosInstance'

export default {
	data() {
		return {
			post: null
		}
	},

	components: {
		ContentLoader,
	},

	mounted() {
		axiosInstance.get('/api-post/' + this.$route.params.id).then((response) => {
			let result = response.data;
			if (result.status == 'success') {
				this.post = result.data;
			}
		});
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
				<router-link :to="{ name: 'posts' }" title="Back" class="back-btn">
					<i class="material-icons">arrow_back</i>
				</router-link>

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
				<img v-if="post.image" :src="post.image" class="single_page_img">
				<p class="left-align single-blog-txt">
					{{ post.content }}
				</p>
			</div>
		</div>
	</div>
	</div>
</template>
