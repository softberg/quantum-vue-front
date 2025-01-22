<script>
    import DeletePost from '../components/post/DeletePost.vue';
    import MyPostItem from '../components/post/MyPostItem.vue';
    import { PostAPI } from '@/helpers/post';

    export default {
        components: {
            MyPostItem,
            DeletePost
        },
        props: {
            id: {
                type: String,
                default: () => ("")
            }
        },
        data() {
            return {
                myPosts: [],
                id: '',
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
            update(id) {
                this.myPosts = this.myPosts.filter(myPost => { return myPost.id != id });
            }
        }
    }
</script>

<template>
	<div class="main-wrapper posts-container">
		<h1 class="center-align teal-text">{{ $t('message.my_posts') }}</h1>
		<div class="row container">
			<ul class="collection" v-if="myPosts.length">
                <MyPostItem v-for="post in myPosts" :key="post.id" :post="post" @update:modelValue="(postId) => id = postId" />
			</ul>
            <h4 class="center-align grey-text" v-if="!myPosts.length">{{ $t('message.no_posts') }}... {{ $t('message.try_creating') }}</h4>
		</div>
		<div class="fixed-action-btn">
            <router-link 
                :to="{ name: 'create', params: { lang: this.$i18n.locale } }"
                class="btn-floating btn-large waves-effect waves-light blue-grey darken-1 hoverable">
                <i class="material-icons">add</i>
            </router-link>
		</div>
	</div>

    <DeletePost :id="id" @update:modelValue="update" />
</template>