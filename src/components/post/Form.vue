<script>
    import Back from "@/components/post/Back.vue";
    import { PostAPI } from "@/helpers/post";
    import { store } from "@/store";
    import DeleteImage from "@/components/post/DeleteImage.vue";
    import ErrorMessage from "@/components/messages/ErrorMessage.vue";
    import moment from "moment";
    import { link, getLang } from "@/helpers/helper";

    export default {
        data() {
            return {
                base_url: import.meta.env.VITE_BASE_URL,
                store,
                moment,
                alert: {
                    type: null,
                    message: ''
                },
            }
        },
        props: {
            post: {
                type: Object,
                default: () => ({})
            },
            title: {
                type: String,
                default: ""
            },
            content: {
                type: String,
                default: ""
            },
            image: {
                type: String,
                default: ""
            }
        },
        components: {
            Back,
            DeleteImage,
            ErrorMessage
        },
        mounted() {
            this.initPlugins();
        },
        methods: {
            link,
            getLang,
            initPlugins() {
                let textarea = document.getElementById('content');

                if (textarea) {
                    M.CharacterCounter.init(textarea);
                }
            },
            async submit() {
                let response = {};
                let postData = new FormData();
                postData.append('title', this.title);
                postData.append('content', this.content);
                postData.append('image', this.image);
                postData.append('updated_at', moment().format('DD/MM/YYYY HH:mm:ss'));

                if (this.post.id) {
                    response = await PostAPI.amendPost(postData, this.post.id);

                } else {
                    response = await PostAPI.createPost(postData);
                }

                if (response.status == 'success') {
                    this.$router.push({ name: 'my-post-list', params: { lang: getLang() } });

                } else {
                    this.inProgress = false;
                    this.alert.type = response.response.data.status
                    this.alert.message = response.response.data.message;
                }
            }
        }
    }
</script>

<template>
    <div class="polaroid">
        <Back :route="'my-post-list'" />
        <div class="row">
            <div class="col s12">
                <h1 class="center-align teal-text">{{ post.id ? $t('message.update_post') : $t('message.new_post') }}</h1>

                <ErrorMessage v-if="alert.message" :message="alert.message" :type="alert.type" />

                <div class="card teal accent-4">
                    <div class="card-content">
                        <form method="post" @submit.prevent="submit" enctype="multipart/form-data">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input v-model="title" name="title" id="title" type="text" class="validate">
                                    <label for="title">{{ $t('message.title') }}</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea v-model="content" name="content" id="content" data-length="1000"
                                        class="materialize-textarea"></textarea>
                                    <label for="content">{{ $t('message.content') }}</label>
                                </div>
                            </div>
                            <div class="file-field input-field upload-btn">
                                <div class="btn">
                                    <span>Image</span>
                                    <input type="file" name="image" @change="image = $event.target.files[0]">
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text">
                                </div>
                            </div>

                            <div class="post-image" v-if="(post && post.image)">
                                <a class="waves-effect waves-light btn modal-trigger image_delete"
                                    href="#modal_post_image" :title="$t('message.delete')">
                                    <i class="material-icons">close</i>
                                </a>
                                <img :src="this.base_url + '/uploads/' + post.image" class="update_page_img">
                            </div>

                            <div class="center-align">
                                <input type="hidden" name="csrf-token" value="<?php echo csrf_token() ?>" />
                                <button class="btn btn-large waves-effect waves-light submit-btn" type="submit">
                                    {{ $t('message.save') }}
                                </button>
                                <router-link :to="link('my-post-list', getLang())"
                                    class="btn btn-large waves-effect waves-teal btn-flat white-text cancel-btn">
                                    {{ $t('message.cancel') }}
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <DeleteImage v-if="post" :id="post.id" />
</template>

<style scoped>
    .polaroid {
        margin-top: 50px;
    }

    .cancel-btn {
        margin-left: 4.7px;
    }
</style>