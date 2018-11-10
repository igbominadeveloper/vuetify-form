import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { store } from './store';
window.axios = require('axios');
Vue.use(Vuetify);


Vue.config.productionTip = false;

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
