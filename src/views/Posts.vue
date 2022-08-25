<script>
import PostItem from '@/components/PostItem.vue';
import { ContentLoader } from 'vue-content-loader';
import axiosInstance from '@/axiosInstance'

export default {
	data() {
		return {
			posts: null
		}
	},

	components: {
		ContentLoader,
		PostItem
	},

	mounted() {
		axiosInstance.get('/api-posts').then((response) => {
			let result = response.data;
			if (result.status == 'success') {
				this.posts = result.data;
			}
		});
	}
}
</script>
<template>
	<div class="main-wrapper">
		<h1 class="center-align teal-text">Posts</h1>
		<div class="row post_container">
			<div class="col s12 m3 post-item" v-if="!posts" v-for="index in 8" :key="index">
				<ContentLoader viewBox="0 0 400 420" :speed="2" :animate="true">
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="300" />
					<rect x="0" y="305" rx="0" ry="0" width="100%" height="40" />
					<rect x="0" y="350" rx="0" ry="0" width="100%" height="50" />
				</ContentLoader>
			</div>
			<div v-else v-for="post in posts" :key="post.id">
				<PostItem :post="post" />
			</div>
		</div>
	</div>
</template>
