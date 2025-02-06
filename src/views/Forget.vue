<script>
    import { AuthAPI } from "@/helpers/auth";
    import ErrorMessage from "@/components/messages/ErrorMessage.vue";
    import { link, getLang } from "@/helpers/helper";

    export default {
        data() {
            return {
                email: '',
                alert: {
                    type: null,
                    message: ''
                },
            }
        },
        components: {
            ErrorMessage
        },
        methods: {
            link,
            getLang,
            async submit() {
                let response = {};
                let postData = new FormData();
                postData.append('email', this.email);

                response = await AuthAPI.forget(postData);

                if (response.status == 'success') {
                    this.alert.type = response.status;
                    this.alert.message = response.message;
                } else {
                    this.inProgress = false;
                    this.alert.type = response.response.data.status;
                    this.alert.message = response.response.data.message;
                }
            }
        }
    };
</script>

<template>
    <div class="main-wrapper teal accent-4">
        <div class="container">
            <div class="row">
                <div class=" col s12 l8 offset-l2 center-align white-text">
                    <h1>{{ $t('message.forget_password') }}</h1>

                    <ErrorMessage v-if="alert.message" :message="alert.message" :type="alert.type" />

                    <div class="card teal accent-4">
                        <div class="card-content">
                            <form method="post" @submit.prevent="submit" enctype="multipart/form-data">
                                <div class="input-field col s12">
                                    <input type="text" name="email" id="email" v-model="email" />
                                    <label for="email" class="white-text">{{ $t('message.email') }}</label>
                                </div>
                                <div class="row">
                                    <div class="col s12 right-align">
                                        <router-link :to="link('signin', getLang())"
                                            class="white-text">{{ $t('message.signin') }}</router-link>
                                    </div>
                                </div>
                                <div>
                                    <button class="btn btn-large waves-effect waves-light">{{
                                        $t('message.send') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>