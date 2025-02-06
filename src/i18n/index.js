import { createI18n } from "vue-i18n";
import en_C from "@/i18n/en/common.json";
import ru_C from "@/i18n/ru/common.json";
import am_C from "@/i18n/am/common.json";
import en_V from "@/i18n/en/validation.json";
import ru_V from "@/i18n/ru/validation.json";
import am_V from "@/i18n/am/validation.json";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: { ...en_C, ...en_V },
        ru: { ...ru_C, ...ru_V },
        am: { ...am_C, ...am_V }
    }
});

export default i18n;