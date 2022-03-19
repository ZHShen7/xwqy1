//import Vue from 'vue'
import Router from 'vue-router'
import VPersonalCenter from '../components/VPersonalCenter.vue'
import VHomePage from '../components/VHomePage.vue'
import VAppraisalSys from '../components/VAppraisalSys.vue'
import VDynamic from '../components/VDynamic.vue'
import login from '../views/login.vue'
import homepage from '../views/homepage.vue'
import register from '../views/register.vue'
import VArchive from '../components/VArchive.vue'
import SearchEmp from '../views/SearchEmp.vue'
import Callinterface from '../views/Callinterface.vue'
import VQueryForm from '../components/VQueryForm.vue'
import NewMessage from '../views/NewMessage.vue'
import NewMessage1 from '../views/NewMessage1.vue'
import ReceiveForm from '../views/ReceiveForm.vue'
import jump from '../components/jump.vue'
import Searchinfo from '../views/Searchinfo.vue'
import Chart from '../views/Chart.vue'

const router = new Router({
	routes: [{
			path: '/',
			name: 'login',
			component: login,
		},
		{
			path: '/register',
			component: register,
		},
		{
			path: '/jump',
			component: jump,
		},
		{
			path: '/homepage',
			name: 'homepage',
			component: homepage,
			redirect: 'VHomePage',
			children: [{
					path: '/VHomePage',
					name: 'VHomePage',
					component: VHomePage
				},
				{
					path: '/VPersonalCenter',
					name: 'VPersonalCenter',
					component: VPersonalCenter,
					redirect: '/dynamic',
					children: [{
							path: '/dynamic',
							name: 'dynamic',
							component: VDynamic
						},
						{
							path: '/VArchive',
							name: 'VArchive',
							component: VArchive
						}
					]
				},
				{
					path: '/VAppraisalSys',
					name: 'VAppraisalSys',
					component: VAppraisalSys
				},
				{
					path: '/SearchEmp',
					name: 'SearchEmp',
					component: SearchEmp
				},
				{
					path: '/Callinterface',
					name: 'Callinterface',
					component: Callinterface
				},
				{
					path: '/VQueryForm',
					name: 'VQueryForm',
					component: VQueryForm
				},
				{
					path: '/NewMessage',
					name: 'NewMessage',
					component: NewMessage
				},
				{
					path: '/NewMessage1',
					name: 'NewMessage1',
					component: NewMessage1
				},
				{
					path: '/ReceiveForm',
					name: 'ReceiveForm',
					component: ReceiveForm
				},
				{
					path:'/Searchinfo',
					name:'Searchinfo',
					component:Searchinfo
				},
				{
					path:'/Chart',
					name:'Chart',
					component:Chart
				}
			],
			meta: {
				requiresAuth:false
			}
		},
	],

}, )

router.beforeEach((to, from, next) => {
			const token = window.localStorage.getItem('token')
			if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
				next({
					path: '/',
					query: {
						redirect: to.fullPath
					}
				})}
				else if (token && to.name == 'login') {
					// 用户已登录，但又去访问登录页面时不让他过去
					next({
						path: from.fullPath
					})
				} else {
					next()
				}
			})

export default router
