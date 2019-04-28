import Vue from 'vue'
import App from './App.vue'
// import router from './router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

