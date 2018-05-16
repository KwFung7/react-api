import i18n from 'i18n-js'
import localesJson from '../../locales'
import { DEFAULT_LOCALE } from '../../constants'

export const setLocale = (locale) => {
  const currentLocale = locale || DEFAULT_LOCALE;
  i18n.defaultLocale = currentLocale;
  i18n.locale = currentLocale;
  i18n.translations = localesJson;
};

export const currentLocale = () => {
  return i18n.locale || DEFAULT_LOCALE;
};

export const t = (str, options) => {
  return i18n.t(str, options);
};