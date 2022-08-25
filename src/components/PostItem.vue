<script>
export default {
	props: {
		post: Object
	}
}
</script>
<template>
	<div class="col s12 m3 post-item">
		<div class="card post-card hoverable">
			<router-link :to="{ name: 'post', params: { id: post.id } }">
				<div class="card-image card-image-box">
					<img v-if="post.image" :src="post.image" class="content_img">
					<img v-else src="@/assets/images/no-image.png" class="content_no_img">
				</div>
			</router-link>
			<div class="card-content white teal-text text-darken-4">
				<span class="card-title post-title" title="{{ title }}">
					<router-link :to="{ name: 'post', params: { id: post.id } }" class="teal-text">
						{{ post.title }}
					</router-link>
				</span>
				<p class="truncate">
					{{ post.content }}
				</p>
			</div>
			<div class="card-action teal accent-4">
				<div class="row">
					<div class="col s8">
						<div class="post-date">
							{{ post.date }}
						</div>
						<div class="post-author">
							{{ post.author }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>