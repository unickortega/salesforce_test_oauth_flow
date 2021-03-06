import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'

import Chart from 'chart.js'
import './assets/scss/app.scss'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue);

Window.jQuery = require('jquery')

require('@/components/')
  
new Vue({
  router,
  store,
  ...App
})
