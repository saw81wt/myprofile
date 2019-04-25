import Vue from 'vue'
// import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.config.productionTip = false

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
import Home from "./components/Home.vue"

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

new Vue({
  router,
  component: {Home},
  template: 'Home'
}).$mount('#app')
