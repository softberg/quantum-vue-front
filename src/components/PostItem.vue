<script>
    import { getLang } from "@/helpers/helper";

    export default {
        props: {
            post: Object
        },
        data() {
            return {
                base_url: import.meta.env.VITE_BASE_URL
            }
        },
        methods: {
            getLang
        }
    }
</script>

<template>
    <div class="card post-card hoverable">
        <router-link :to="{ name: 'post', params: { id: post.uuid, lang: getLang(), route: 'posts' } }"
            className="post-item-link">
            <div class="card-image card-image-box">
                <img v-if="post.image" :src="this.base_url + '/uploads/' + post.image" class="content_img">
                <img v-else src="@/assets/images/no-image.png" class="content_no_img">
            </div>

            <div class="card-action card-action-custom">
                <div class="row">
                    <div class="col s12">
                        <div class="post-date">
                            {{ post.date }}
                        </div>
                        <div class="post-author">
                            {{ post.author }}
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
        <div class="card-content white teal-text text-darken-4">
            <span class="card-title post-title" title="{{ title }}">
                <router-link :to="{ name: 'post', params: { id: post.uuid, lang: getLang() } }" class="teal-text">
                    {{ post.title }}
                </router-link>
            </span>
            <p class="truncate">
                {{ post.content }}
            </p>
        </div>
    </div>
</template>

<style scoped>
    .post-item-link {
        position: relative;
    }

    .card-action-custom {
        position: absolute;
        width: 100%;
        bottom: 0;
        backdrop-filter: blur(3px);
        border: 0 none;
    }
</style>