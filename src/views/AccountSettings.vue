<script>
    import ErrorMessage from "@/components/messages/ErrorMessage.vue";
    import Password from '@/components/account/Password.vue';
    import Account from '@/components/account/Account.vue';
    import { store } from '@/store';

    export default {
        components: {
            Account,
            Password,
            ErrorMessage
        },

        data() {
            return {
                store,
                alert: {
                    type: null,
                    message: ''
                },
            }
        },

        mounted() {
            this.initTabs();
        },

        methods: {
            initTabs() {
                let element = document.querySelector('.account-tabs');
                M.Tabs.init(element);
            },

            update(alert) {
                this.alert = alert;
            }
        }
    }
</script>

<template>
    <div class="main-wrapper">
        
        <div class="container">
            <div class="row">
                <div class=" col s12 l8 offset-l2 center-align white-text">
                    <ErrorMessage v-if="alert.message" :message="alert.message" :type="alert.type" />

                    <ul class="tabs teal account-tabs card accent-4">
                        <li class="tab col s3">
                            <a href="#account_profile" class="active">
                                <h6 class="white-text">{{ $t('message.profile') }}</h6>
                            </a>
                        </li>
                        <li class="tab col s3">
                            <a href="#account_password">
                                <h6 class="white-text">{{ $t('message.password') }}</h6>
                            </a>
                        </li>
                    </ul>
    
                    <Account :firstname="store?.user?.firstname" :lastname="store?.user?.lastname" @update:modelValue="update" />
                    <Password @update:modelValue="update"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .account-tabs .tab a {
        color: rgba(38, 166, 154, 0.7);
    }
    
    .account-tabs .tab a:hover {
        color:#26a69a;
    }
    
    .account-tabs .tab a:focus.active {
        color:#26a69a;
        background-color: rgba(38, 166, 154, 0.2);
    }
    
    .account-tabs .indicator {
        background-color:#FFFFFF;
    }

    #account_profile,
    #account_password {
        margin: 0;
    }
</style>
