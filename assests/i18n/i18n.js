import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import hi from './hi.json';
import mr from './mr.json';

i18n.use(initReactI18next).init({
lng: 'en',
fallbackLng: 'en',
compatibilityJSON: 'v3',
resources: {
	en: en,
	hi: hi,
    mr:mr,
},
interpolation: {
	escapeValue: false // react already safes from xss
},
shouldUseIntlApi() {
    return !deprecatedJsonVersions.includes(this.options.compatibilityJSON) && Intl && Intl.PluralRules;
  }
});

export default i18n;
