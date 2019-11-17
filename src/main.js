import Vue from 'vue';
import App from './App.vue';

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueCompositionApi from '@vue/composition-api';
import router from './router';


Vue.config.productionTip = false;
Vue.use(VueCompositionApi);
Vue.use(Buefy);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
