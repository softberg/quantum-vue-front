import { createI18n } from 'vue-i18n';
import en from './en.json';
import ru from './ru.json';
import am from './am.json';

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: { en, ru, am }
});

export default i18n;