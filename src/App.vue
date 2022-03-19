<template>
	<div class="layout" :style="{width:'100%',height:'100%'}">
		
<!-- 		<login></login> -->
		<router-view></router-view>
	</div>
</template>

<script>
	// import Navigation from './components/navigation.vue'
	// import login from './views/login.vue'
	//import Vmine from './components/Vmine.vue'
	//import Ping from './components/ping.vue'
	//import Vaction from './components/Vaction.vue'
	//import VPersonalCenter from './components/VPersonalCenter.vue'
	//import mainheader from './components/mainheader.vue'

	export default {
		name: 'App',
		components: {
			//mainheader
		},
		methods: {}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.navigation_viewui {
		float: left;
		position: absolute;
		top: 0px;
	}

</style>
