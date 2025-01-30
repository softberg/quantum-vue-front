<script>
    import { store } from "@/store";
    import { Helper } from "@/helpers/helper";

    export default {
        data() {
            return {
                pageCount: 0,
                store,
                page: this.$route.query?.page || this.$C.DEFAULT_PAGE,
                per_page: this.$route.query?.per_page || this.$C.DEFAULT_PER_PAGE,
                Helper
            }
        },
        props: {
            pagination: {
                type: Object,
                required: true
            }
        },
        mounted() {
            this.pageCount = Math.ceil(this.pagination.total_records / this.per_page);
        },
        methods: {
            params(page) {
                return {
                    page,
                    per_page: this.per_page,
                    q: this.$route.query.q
                }
            }
        }
    }
</script>

<template>
    <div class="center-align">
        <ul class="pagination">
            <li v-if="pagination?.current_page > pagination?.prev_page">
                <router-link
                    :to="Helper.link(this.$route.name, this.$i18n.locale, this.params(this.pagination.prev_page))"
                    v-html="$t('message.pagination.prev')">
                </router-link>
            </li>

            <li v-for="(item, index) in pageCount" :class="{ active: (index + 1) == pagination?.current_page }">
                <router-link :to="Helper.link(this.$route.name, this.$i18n.locale, this.params(index + 1))">
                    {{ index + 1 }}
                </router-link>
            </li>

            <li v-if="pagination?.current_page < pagination?.next_page">
                <router-link
                    :to="Helper.link(this.$route.name, this.$i18n.locale, this.params(this.pagination.next_page))"
                    v-html="$t('message.pagination.next')">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .pagination .active {
        background-color: #00bfa5;
    }

    .pagination li {
        margin: 0 4px;
    }
</style>