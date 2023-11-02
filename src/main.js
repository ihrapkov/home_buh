import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dateFilter from './filters/date.filter'
import '../node_modules/materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
