import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Vue.config.js = {
//   devServer: {open:'chrome'}
// }

new Vue({
  render: h => h(App),
  data: {
    chart: '../assets/vue-modifiers.jpg',
  }
}).$mount('#app')

