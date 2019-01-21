import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Binding from './components/Binding.vue';



Vue.use(VueRouter);

const routes = [
  { path : '/binding', component: Binding},
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false
// Vue.config.js = {
//   devServer: {open:'chrome'}
// }

new Vue({
  render: h => h(App),
  router,
  data: {
    chart: '../assets/vue-modifiers.jpg',
  }
}).$mount('#app')