<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<template>
    <router-link 
        className="back-btn"
        title="Back"
        :to="{ name: 'my-posts', params: { lang: this.$i18n.locale } }">
        <i class="material-icons">arrow_back</i>
    </router-link>
</template>