import moment from 'moment'
import 'babel-polyfill'
import store from './store'
import router from './router'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/layout'
import VueSentry from 'vue2-sentry'
import dot from 'dot-object'
import Security from './mixin/Security'
import StoreModule from './mixin/StoreModule'

Vue.use(VueSentry, {
  enable: process.env.VUE_APP_SENTRY_PUBLIC_KEY !== '',
  key: process.env.VUE_APP_SENTRY_PUBLIC_KEY,
  project: process.env.VUE_APP_SENTRY_PROJECT_ID,
  server: process.env.VUE_APP_SENTRY_SERVER,
  protocol: process.env.VUE_APP_SENTRY_PROTOCOL,
  config: {}
})

Vue.mixin(Security)
Vue.mixin(StoreModule)

window.moment = moment
Vue.prototype.$dot = dot
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
