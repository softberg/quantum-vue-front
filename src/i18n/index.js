import { createI18n } from "vue-i18n";
import en from "@/i18n/en/en.json";
import ru from "@/i18n/ru/ru.json";
import am from "@/i18n/am/am.json";
import en_V from "@/i18n/en/validation.json";
import ru_V from "@/i18n/ru/validation.json";
import am_V from "@/i18n/am/validation.json";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: { ...en, ...en_V },
        ru: { ...ru, ...ru_V },
        am: { ...am, ...am_V }
    }
});

export default i18n;