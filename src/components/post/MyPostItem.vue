<script>
    import moment from "moment";
    import { getLang } from "@/helpers/helper";

    export default {
        name: 'my-post-item',
        props: {
            post: Object,
            id: {
                type: String
            }
        },
        data() {
            return {
                base_url: import.meta.env.VITE_BASE_URL,
                moment,
                postDateTime: moment(this.post.date).format('MM/DD/YYYY HH:mm')
            }
        },
        methods: {
            getLang
        }
    }
</script>

<template>
    <li class="collection-item avatar">
        <img v-if="post.image" :src="this.base_url + '/uploads/' + post.image" class="circle img-my-post">
        <img v-else :src="this.base_url + '/assets/images/no-image.png'" class="circle img-my-post">

        <router-link :to="{ name: 'post', params: { id: post.id, lang: getLang(), route: 'my-post-list' } }"
            :title="post.title" class="title post-title teal-text">
            {{ post.title }}
        </router-link>

        <p>{{ postDateTime }}</p>

        <router-link :to="{ name: 'amend', params: { id: post.id, lang: getLang() } }"
            :title="$t('message.edit')" class="secondary-content edit-my-post" style="right: 50px;">
            <i class="material-icons dp48">edit</i>
        </router-link>

        <a href="#modal_post_delete" class="secondary-content modal-trigger" :id="post.id" :title="$t('message.delete')"
            @click="$emit('update:modelValue', post.id)">
            <i class="material-icons dp48">delete</i>
        </a>
    </li>
</template>