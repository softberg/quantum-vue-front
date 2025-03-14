<script>
    import { AccountSettings } from "@/helpers/AccountSettings";
    import { store } from '@/store';

    export default {
        props: {
            firstname: {
                type: String,
                required: '',
            },
            lastname: {
                type: String,
                required: '',
            }
        },

        data() {
            return {
                alertMessages: {}
            }
        },

        methods: {
            async submit() {
                let userData = {
                    firstname: this.firstname,
                    lastname: this.lastname
                };

                let response = await AccountSettings.update(userData);

                if (response.status == 'success') {
                    store.user.firstname = this.firstname;
                    store.user.lastname = this.lastname;

                } else {
                    this.inProgress = false;
                }

                this.$emit('update:modelValue', {
                    type: response.status,
                    message: response.message
                });
            }
        }
    }
</script>

<template>
    <div id="account_profile" class="card teal accent-4">
        <div class="card-content">
            <div class="row">
                <div class="input-field col s12">
                    <label class="auth-form-label active">{{ $t('message.firstname') }}</label>
                    <input type="text" v-model="firstname">
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <label class="auth-form-label active">{{ $t('message.lastname') }}</label>
                    <input type="text" v-model="lastname">
                </div>
            </div>
            <div class="row">
                <button @click="submit" class="btn btn-large waves-effect waves-light">
                    {{ $t('message.save') }}
                </button>
            </div>
        </div>
    </div>
</template>