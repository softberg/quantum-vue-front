<script>
    import { AccountSettings } from "@/helpers/AccountSettings";
    import { getLang } from "@/helpers/helper";

    export default {
        props: {
            currentPassword: {
                type: String,
                required: '',
            },
            newPassword: {
                type: String,
                required: '',
            },
            confirmPassword: {
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
            getLang,
            async submit() {
                let passwordData = {
                    current_password: this.currentPassword,
                    new_password: this.newPassword,
                    confirm_password: this.confirmPassword
                };
                
                let response = await AccountSettings.updatePassword(passwordData);

                this.$emit('update:modelValue', {
                    type: response.status,
                    message: response.message
                });
            }
        }
    }
</script>

<template>
    <div id="account_password" class="card teal accent-4">
        <div class="card-content">
            <div class="row">
                <div class="input-field col s12">
                    <label class="auth-form-label">{{ $t('message.current_password') }}</label>
                    <input type="text" name="current_password" v-model="currentPassword">
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <label class="auth-form-label">{{ $t('message.new_password') }}</label>
                    <input type="password" name="new_password" v-model="newPassword">
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <label class="auth-form-label">{{ $t('message.confirm_password') }}</label>
                    <input type="password" name="confirm_password" v-model="confirmPassword">
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