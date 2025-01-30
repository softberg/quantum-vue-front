<script>
    import NavBar from "@/components/Navbar.vue";
    import FooterBar from "@/components/Footerbar.vue";
    import { AuthAPI } from "@/helpers/auth";
    import { store } from "@/store";
    import i18n from "@/i18n/index";

    export default {
        components: {
            NavBar,
            FooterBar
        },

        data() {
            return {
                store
            }
        },

        mounted() {
            this.checkUser();
            this.setLang();
            this.updatePageTitle();
        },

        updated() {
            this.checkUser();
        },

        methods: {
            async checkUser() {
                const accessToken = localStorage.getItem('accessToken');

                if (accessToken && !this.store.user) {
                    let user = await AuthAPI.getUser(accessToken);

                    if (user) {
                        this.store.setUser(user);
                    }
                }
            },
            setLang() {
                this.$i18n.locale = this.$route.params.lang;
            },

            updatePageTitle() {
                if (this.$route.meta.title) {
                    document.title = i18n.global.t(this.$route.meta.title) + ' | ' + this.$C.DEFAULT_PAGE_TITLE;

                } else {
                    document.title = this.$C.DEFAULT_PAGE_TITLE;
                }
            }
        },

        watch: {
            '$route': function () {
                this.updatePageTitle();
            }
        }
    }
</script>

<template>
    <header>
        <NavBar />
    </header>
    <main>
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
                <div :key="route.name" class="post-form full-height main-inner">
                    <component :is="Component"></component>
                </div>
            </transition>
        </router-view>
    </main>
    <footer class="page-footer">
        <FooterBar />
    </footer>
</template>