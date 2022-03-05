import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueCookie from 'vue-cookies';
import Vuelidate from 'vuelidate';
import VueAlert from '@vuejs-pt/vue-alert';
import yarn from '@vuejs-pt/vue-alert';
//import SweetAlertIcons from 'vue-sweetalert-icons';
import VueMaterial from 'vue-material';
import  'vue-material/dist/vue-material.min.css';
import VueTheMask from 'vue-the-mask';

import {
  Routes
} from './Routes';
import {
  store
} from './Store/Store';
Vue.use(VueCookie);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuelidate);
Vue.use(VueAlert);
Vue.use(yarn);
//Vue.use(SweetAlertIcons);
Vue.use(VueMaterial)
Vue.use(VueTheMask);

//Vue.http.options.root = "https://gxapi.ahanjosh.ir/";
Vue.http.options.root = "https://localhost:44325/";

export const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})

/* Help
npm install -g vue-cli
vue init webpack-simple
npm install
npm install @vuejs-pt/vue-alert
npm install --save vue-router
npm install --save vue-cookie
npm install --save vue-resource
npm install --save vuex
npm install --save vuelidate
npm i -S vue-the-mask
npm install vue-material --save
npm install sweetalert2
npm install vue-slide-bar --save
npm install vue-paginatron --save
npm install vue-plain-pagination
npm install --save regenerator-runtime
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
*/