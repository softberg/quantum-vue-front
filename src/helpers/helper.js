export const Helper = {
    link(name, lang, query = {}) {
        return {
            name,
            params: {
                lang
            },
            query
        };
    }
};