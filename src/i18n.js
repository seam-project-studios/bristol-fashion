import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const defaultLocale = process.env.VUE_APP_DEFAULT_LOCALE;
export const locales = [];

const messages = {};
const webpackedLocales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
for (const key of webpackedLocales.keys()) {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i);
  /* istanbul ignore else */
  if (matched && matched.length > 1) {
    const locale = matched[1];
    messages[locale] = webpackedLocales(key);
    locales.push(locale);
  }
};

const locale = defaultLocale;
// logic to work out locale

const i18n = new VueI18n({
  locale,
  messages
});

export default i18n;
