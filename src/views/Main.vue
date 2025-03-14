<script>
    import NavBar from "@/components/Navbar.vue";
    import FooterBar from "@/components/Footerbar.vue";
    import { AuthAPI } from "@/helpers/auth";
    import { store } from "@/store";
    import i18n from "@/i18n/index";
    import { DEFAULT_PAGE_TITLE } from "@/constants";
    import { setLang } from "@/helpers/helper";

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
        },

        updated() {
            this.checkUser();
        },

        methods: {
            setLang,
            async checkUser() {
                const accessToken = localStorage.getItem('accessToken');
                const refreshToken = localStorage.getItem('refreshToken');

                if (accessToken && !this.store.user) {
                    let user = await AuthAPI.getUser(accessToken, refreshToken);

                    if (user) {
                        this.store.setUser(user);
                    }
                }
            },

            updatePageTitle() {
                if (this.$route.meta.title) {
                    document.title = i18n.global.t(this.$route.meta.title) + ' | ' + DEFAULT_PAGE_TITLE;

                } else {
                    document.title = DEFAULT_PAGE_TITLE;
                }
            }
        },

        watch: {
            '$route': {
                handler() {
                    this.setLang(this.$route.params.lang);
                    this.updatePageTitle();
                },
                immediate: true
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