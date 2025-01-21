<script>
    import DeletePost from '../components/post/DeletePost.vue';
    import MyPostItem from '../components/post/MyPostItem.vue';
    import { PostAPI } from '@/helpers/post';

    export default {
        components: {
            MyPostItem,
            DeletePost
        },
        data() {
            return {
                myPosts: [],
                id: null,
            }
        },
        mounted() {
            this.getMyPosts();
        },
        methods: {
            async getMyPosts() {
                let accessToken = localStorage.getItem('accessToken');

                if (accessToken) {
                    let response = await PostAPI.getMyPosts(accessToken);

                    if (response?.data) {
                        this.myPosts = response?.data;
                    }
                }
            },
            update() {
                this.getMyPosts();
            }
        }
    }
</script>

<template>
	<div class="main-wrapper posts-container">
		<h1 class="center-align teal-text">{{ $t('message.my_posts') }}</h1>
		<div class="row container">
			<!-- <?php if (count($posts)): ?> -->
			<ul class="collection" v-if="myPosts.length">
                <MyPostItem v-for="post in myPosts" :key="post.id" :post="post" @update:modelValue="(postId) => id = postId" />
				<!-- <?php foreach ($posts as $post): ?> -->
				<!-- <?php echo partial('post/partials/my-post-item', ['post' => $post]) ?> -->
				<!-- <?php endforeach; ?> -->
			</ul>
            <h4 class="center-align grey-text" v-if="!myPosts.length">{{ $t('message.no_posts') }}... {{ $t('message.try_creating') }}</h4>
		</div>
		<!-- <?php else: ?>
		<h4 class="center-align">
			No new posts...
			Try creating one
		</h4>
		<?php endif; ?> -->

		<!-- <?php echo partial('post/partials/modal', ['item' => t('common.the_post')]) ?> -->

		<!-- <?php if (auth()->check()): ?> -->
		<div class="fixed-action-btn">
            <router-link 
                :to="{ name: 'create', params: { lang: this.$i18n.locale } }"
                class="btn-floating btn-large waves-effect waves-light blue-grey darken-1 hoverable">
                <i class="material-icons">add</i>
            </router-link>
		</div>
		<!-- <?php endif; ?> -->
	</div>

    <DeletePost :id="id" @update:modelValue="update" />
</template>