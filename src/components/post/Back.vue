<script>
    export default {
        props: {
            route: {
                type: String
            }
        }
    }
</script>

<template>
    <router-link 
        className="back-btn"
        title="Back"
        :to="{ name: route, params: { lang: this.$i18n.locale, fromBack: true } }">
        <i class="material-icons">arrow_back</i>
    </router-link>
</template>