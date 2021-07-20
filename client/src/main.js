// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'
import VueEvents from 'vue-events'
import apiService from "../src/services";

Vue.config.productionTip = false

Vue.use(VueEvents)
Vue.use(Vuetify)
Vue.use(Vuelidate)

Vue.prototype.$api = apiService;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify : new Vuetify(),
  components: { App },
  template: '<App/>'
})