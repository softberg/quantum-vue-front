<script>
    import { store } from '@/store';
    import Posts from '@/views/Posts.vue';

    export default {
        data() {
            return {
                timeOut: null,
                searchText: '',
                store,
                Posts,
                autofocus: false
            }
        },
        mounted() {
            this.searchText = this.$route.query.q;
            this.autofocus = this.searchText ? true : false;
            delete this.$route?.query?.page;
            delete this.$route?.query?.per_page;

            if (this.autofocus) {
                document.querySelector('.search-bar').focus();
            }
        },
        updated() {
            if (this.timeOut) {
                clearTimeout(this.timeOut);
            }

            this.timeOut = setTimeout(() => {
                store.setSearchText(this.searchText);

                this.$router.push({
                    name: 'posts',
                    params: {
                        lang: this.$i18n.locale
                    },
                    query: {
                        page: this.$route?.query?.page,
                        per_page: this.$route?.query?.per_page,
                        q: this.searchText
                    }
                });
            }, 1000)
        }
    }
</script>

<template>
    <li>
        <a class="search-tab">
            <div>
                <input 
                    class="search-bar" 
                    type="search" 
                    placeholder="Search"
                    autocomplete="off"
                    v-model="searchText">
            </div>
            <i class="material-icons search-bar-img"></i>
        </a>
    </li>
</template>

<style scoped>
    .search-tab {
        display: flex;
    }

    .search-bar {
        border: none !important;
        outline: none !important;
        width: 30px !important;
        font-size: 0 !important;
        cursor: pointer;
        position: absolute;
        margin: 0;
    }

    .search-bar:focus{
        width: 300px !important;
        position: relative;
        font-size: 16px !important;
        cursor: auto;
        color: #fff;
        border-bottom: 1px solid #fff !important;
        height: 30px !important;
    }

    .search-bar-img:before {
        content: "\e8b6";
    }
</style>