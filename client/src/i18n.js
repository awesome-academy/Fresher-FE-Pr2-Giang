import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './translations/en.json';
import common_vie from './translations/vie.json';

const resources = {
  en: {
    translation: common_en
  },
  vie: {
    translation: common_vie
  }
}

i18n.use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
