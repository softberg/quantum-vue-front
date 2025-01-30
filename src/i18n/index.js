import { createI18n } from "vue-i18n";
import en from "@/i18n/en.json";
import ru from "@/i18n/ru.json";
import am from "@/i18n/am.json";

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: { en, ru, am }
});

export default i18n;