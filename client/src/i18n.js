import i18n, {Callback, TFunction} from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from "i18next";

i18n
    .use(Backend) // load translations using http (default public/assets/locals/en/translations)
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        backend: {
            // for all available options read the backend's repository readme file
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        lng: 'ru',
        fallbackLng: 'en', // fallback language is english.
        debug: true,
        keySeparator: false,
        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
            formatSeparator: ','
        },
        react: {
            useSuspense: false,
            wait: false,
        }
    });

export const languages = ['en', 'ru'];

export default i18n;