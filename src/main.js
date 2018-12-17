import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import './assets/scss/app.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue);


new Vue({
  router,
  store,
  ...App
})
