import Vue from 'vue';
import '@/registerServiceWorker';
import Index from '@/views/Index';

Vue.config.productionTip = false;

window.app = new Vue({
  render: h => h(Index)
}).$mount('#app');
