import i18n from 'i18next';
import en from './language/en/en.json';
import tr from './language/tr/tr.json';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next).init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },

    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;