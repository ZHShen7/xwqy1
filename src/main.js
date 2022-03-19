import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//引入elementui
import ElementUI from 'element-ui';
import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VCharts)


new Vue({
	render: h => h(App),
	router: router,
	beforeCreate() {
		Vue.prototype.$bus = this
	},
}).$mount('#app')
