<script>
    import Form from "@/components/post/Form.vue";
    import { PostAPI } from "@/helpers/post";

    export default {
        data() {
            return {
                post: {}
            }
        },
        components: {
            Form
        },
        async mounted() {
            let response = await PostAPI.getPost(this.$route.params.id);

            if (response?.status == 'success') {
                this.post = response.data;
            }
        }
    }
</script>

<template>
    <Form :title="post.title" :content="post.content" :image="post.image" :post="post" />
</template>