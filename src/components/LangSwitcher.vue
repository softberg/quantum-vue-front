<script>
    import { store } from "@/store";
    import { setLang, link, getQuery, getRouteName } from "@/helpers/helper";

    export default {
        data() {
            return {
                store,
                langs: [
                    { id: 'en', key: "Eng", text: 'English' },
                    { id: 'ru', key: "Рус", text: 'Russian' },
                    { id: 'am', key: "Հայ", text: 'Armenin' }
                ],
                current_lang: 'en',
            }
        },
        methods: {
            setLang,
            link,
            getQuery,
            getRouteName
        }
    }
</script>

<template>
    <a class="dropdown-trigger main-menu-link" href="javascript:;" data-target="dropdown2">
        <i class="material-icons dp48 left">language</i>
        <small class="hide-on-small-only show-on-medium-and-up">{{ $t('message.lang') }}</small>
    </a>
    <ul id="dropdown2" class="dropdown-content">
        <li v-for="lang in langs" :lang="lang.key" :id="lang.id">
            <router-link :to="link(getRouteName(), lang.id, getQuery())"
                @click="setLang(lang.id)">{{ lang.text }}</router-link>
        </li>
    </ul>
</template>
