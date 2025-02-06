<script>
    import Bubbles from "@/components/Bubbles.vue";
    import { QUANTUM_PHP_FRAMEWORK, LEARN_MORE_LINK } from "@/constants";
    import { link, getLang } from "@/helpers/helper";

    export default {
        data() {
            return {
                QUANTUM_PHP_FRAMEWORK,
                LEARN_MORE_LINK
            }
        },
        components: {
            Bubbles
        },
        methods: {
            link,
            getLang
        }
    }
</script>

<template>
    <div class="main-wrapper teal accent-4 full-height">
        <div class="container wrapper center-align white-text">
            <div class="logo-block">
                <img :alt="QUANTUM_PHP_FRAMEWORK" class="logo" src="@/assets/images/quantum-logo-white.png" />
            </div>
            <h1>{{ QUANTUM_PHP_FRAMEWORK }}</h1>
            <div class="card teal accent-4">
                <div class="card-content">
                    <h5>{{ $t('message.description') }}</h5>
                </div>
            </div>
            <div class="index-links">
                <router-link :to="link('about', getLang())" class="white-text">{{
                    $t('message.about') }}</router-link>
                <a :href="LEARN_MORE_LINK" target="_blank" class="white-text">{{ $t('message.learn_more') }}</a>
            </div>
        </div>
    </div>
    <Bubbles />
</template>