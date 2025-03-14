import i18n from "@/i18n";

export function link(name, lang, query = {}) {
    return {
        name,
        params: {
            lang
        },
        query
    };
}

export function setLang(lang) {
    i18n.global.locale.value = lang;
}

export function getLang() {
    return i18n.global.locale.value || 'en';
}

export function getQuery() {
    return this.$route.query;
}

export function getRouteName() {
    return this.$route.name;
}