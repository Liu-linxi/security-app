// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

import store from './store'

Vue.prototype.$store = store

const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif