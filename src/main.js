import Vue from 'vue';
import i18n from './i18n';
import '@/registerServiceWorker';
import Index from '@/views/Index';

require('dotenv-flow').config();

Vue.config.productionTip = false;

window.app = new Vue({
  created () {
    const html = document.documentElement;
    html.setAttribute('lang', 'en');
  },
  i18n,
  render: h => h(Index)
}).$mount('#app');

window.validateReturn = (predicate, i18nPath, payload) => predicate && window.app && window.app.$t(i18nPath, payload);
