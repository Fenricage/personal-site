import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируйте файлы переводов напрямую
import translationEN from '../../locales/en/translation.json';
import translationRU from '../../locales/ru/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(initReactI18next) // передаем i18n в react-i18next
    .init({
        resources,
        fallbackLng: 'ru', // язык по умолчанию
        debug: true, // включите для отладки - увидите в консоли что загружается

        interpolation: {
            escapeValue: false, // не нужно для React
        },

        // // настройки детектора языка
        // detection: {
        //     order: ['path', 'localStorage', 'navigator'],
        //     lookupFromPathIndex: 0,
        //     checkWhitelist: true,
        // },

        // доступные языки
        whitelist: ['ru', 'en'],
        react: {
            useSuspense: false
        }
    });

export default i18n;