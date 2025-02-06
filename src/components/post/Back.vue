<script>
    import { getLang, link } from "@/helpers/helper";

    export default {
        props: {
            route: {
                type: String
            }
        },
        methods: {
            getLang,
            link
        }
    }
</script>

<template>
    <router-link className="back-btn" title="Back"
        :to="link(route, getLang())">
        <i class="material-icons">arrow_back</i>
    </router-link>
</template>