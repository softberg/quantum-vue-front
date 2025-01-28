<script>
    import { store } from '@/store';

    export default {
        data() {
            return {
                pageCount: 0,
                store
            }
        },
        props: {
            pagination: {
                type: Object,
                required: true
            },
            page: {
                type: Number,
                required: true,
                default: 1
            },
            per_page: {
                type: Number,
                required: true,
                default: 8
            },
            posts: {
                type: Array
            }
        },
        mounted() {
            this.pageCount = Math.ceil(this.pagination?.total_records / this.per_page);
        },
        methods: {
            prevLink() {
                return {
                    name: this.$route.name,
                    params: {
                        lang: this.$i18n.locale,
                        q: store.searchText || this.$route?.query?.q
                    },
                    query: {
                        page: this.pagination?.prev_page,
                        per_page: this.per_page,
                        q: store.searchText || this.$route?.query?.q
                    }
                };
            },
            currentLink(index) {
                return {
                    name: this.$route.name,
                    params: {
                        lang: this.$i18n.locale,
                        q: store.searchText || this.$route?.query?.q
                    },
                    query: {
                        page: index + 1,
                        per_page: this.per_page,
                        q: store.searchText || this.$route?.query?.q
                    }
                };
            },
            nextLink() {
                return {
                    name: this.$route.name,
                    params: {
                        lang: this.$i18n.locale,
                        q: store.searchText || this.$route?.query?.q
                    },
                    query: { 
                        page: this.pagination?.next_page,
                        per_page: this.per_page,
                        q: store.searchText || this.$route?.query?.q
                    }
                };
            },
            
            prevClickEvent() {
                this.$emit('update:modelValue', {
                    page: this.pagination?.prev_page,
                    per_page: this.per_page,
                    q: store.searchText || this.$route?.query?.q
                });
            },
            currentClickEvent(index) {
                this.$emit('update:modelValue', {
                    page: index + 1,
                    per_page: this.per_page,
                    q: store.searchText || this.$route?.query?.q
                })
            },
            nextClickEvent() {
                this.$emit('update:modelValue', {
                    page: this.pagination?.next_page,
                    per_page: this.per_page,
                    q: store.searchText || this.$route?.query?.q
                })
            }
        }
    }
</script>

<template>
    <div class="center-align">
        <ul class="pagination">
            <li v-if="pagination?.current_page > pagination?.prev_page">
                <router-link :to="prevLink()" @click="prevClickEvent()"
                    v-html="$t('message.pagination.prev')">
                </router-link>
            </li>

            <li v-for="(item, index) in pageCount" :class="{ active: (index + 1) == pagination?.current_page }">
                <router-link @click="currentClickEvent(index)" :to="currentLink(index)">
                    {{ index + 1 }}
                </router-link>
            </li>

            <li v-if="pagination?.current_page < pagination?.next_page">
                <router-link :to="nextLink()" @click="nextClickEvent()"
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