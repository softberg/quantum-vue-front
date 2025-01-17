<script>
import { ContentLoader } from 'vue-content-loader';
import PostItem from '@/components/PostItem.vue';
import { PostAPI } from '@/helpers/post';

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

	async mounted() {
		let response = await PostAPI.getPosts();

		if (response) {
			this.posts = response.data;
		}
	}
}
</script>
<template>
	<div class="main-wrapper">
		<h1 class="center-align teal-text">{{ $t('message.posts') }}</h1>
		<div class="row post_container">
			<template v-if="!posts">
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
				<div v-for="post in posts" :key="post.id">
					<PostItem :post="post" />
				</div>
			</template>
		</div>
	</div>
</template>
