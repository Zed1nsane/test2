import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import APlayer from '@moefe/vue-aplayer';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// Vue.use(APlayer, {
//   defaultCover: '../assets/logo.png',
//   productionTip: true,
// });