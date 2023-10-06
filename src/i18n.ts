import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import translationSK from './locales/sk/translation.json';
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

export const resources = {
  sk: {
    translation: translationSK
  },
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
} as const;

i18n
  .use(
    new detector({
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage']
    })
  )
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'sk',
    debug: false,
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    },
    fallbackLng: 'sk'
  });

export default i18n;
