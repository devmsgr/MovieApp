/* eslint-disable prettier/prettier */
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

const resources = {
  ar: {
    translation: {
      // eslint-disable-next-line prettier/prettier
      Email: 'بريد إلكتروني',
      Password: 'كلمة المرور',
      Login: 'تسجيل الدخول',
      'Popular Movies': 'أفلام شعبية',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: I18nManager.isRTL ? 'ar' : 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
