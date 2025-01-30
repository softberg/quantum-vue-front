<script>
    import LangSwitcher from "@/components/LangSwitcher.vue";
    import { AuthAPI } from "@/helpers/auth";
    import { store } from "@/store";
    import Search from "@/components/Search.vue";
    import { Helper } from "@/helpers/helper";

    export default {
        components: {
            LangSwitcher,
            Search
        },

        data() {
            return {
                store,
                Helper
            }
        },

        mounted() {
            M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
        },

        updated() {
            M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
        },

        methods: {
            async signout() {
                let response = await AuthAPI.signout(localStorage.getItem('refreshToken'));

                if (response) {
                    this.store.setUser(null);

                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');

                    this.$router.push({ name: 'home', params: { lang: this.$i18n.locale } });
                }
            }
        }
    }
</script>

<template>
    <nav class="teal accent-4">
        <div class="nav-wrapper row">
            <span class="navbar-logo" v-show="$route.name !== 'home'">
                <router-link :to="Helper.link('home', this.$i18n.locale)">
                    <img :alt="$C.QUANTUM_PHP_FRAMEWORK" class="logo" src="@/assets/images/quantum-logo-white.png" />
                </router-link>
            </span>

            <ul class="right">
                <Search v-if="$route.name == 'posts'" />

                <li>
                    <router-link :to="Helper.link('posts', this.$i18n.locale, this.$route.query)" class="white-text">
                        {{ $t('message.posts') }}
                    </router-link>
                </li>

                <template v-if="store.user">
                    <li>
                        <a class="dropdown-trigger login-list" href="javascript:;" data-target="dropdown1">
                            <span class="hide-on-small-only show-on-medium-and-up">
                                <i class="material-icons left">person</i>
                                {{ store.user.firstname }} {{ store.user.lastname }}
                                <i class="material-icons right">arrow_drop_down</i>
                            </span>
                        </a>
                        <ul id="dropdown1" class="dropdown-content">
                            <li>
                                <router-link :to="Helper.link('my-post-list', this.$i18n.locale)">
                                    {{ $t('message.my_posts') }}
                                </router-link>
                            </li>
                            <li>
                                <a href="javascript:;" @click.prevent="signout">
                                    {{ $t('message.signout') }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </template>

                <template v-else>
                    <li v-if="$route.name != 'signup'">
                        <router-link :to="Helper.link('signup', this.$i18n.locale)" class="white-text">{{
                            $t('message.signup') }}</router-link>
                    </li>
                    <li v-if="$route.name != 'signin'">
                        <router-link :to="Helper.link('signin', this.$i18n.locale)" class="white-text">{{
                            $t('message.signin') }}</router-link>
                    </li>
                </template>

                <li class="auth-lang-switcher">
                    <LangSwitcher />
                </li>

            </ul>
        </div>
    </nav>
</template>