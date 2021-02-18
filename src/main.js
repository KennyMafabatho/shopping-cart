// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store/index'
import router from '@/router/index'

import {currency} from "@/currency";
import {products} from './store/modules/products';
Vue.config.productionTip = false
Vue.filter('currency', currency)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
