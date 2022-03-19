<template>
	<div :style="{width:'100%',height:'120%',float:'left',backgroundColor:'rgb(240,242,245)'}">
		<div :style="{float:'left',width:'280px'}">
			<Vmine></Vmine>
		</div>
		<div :style="{float:'left',width:'600px',marginLeft:'20px'}">
			<Vaction></Vaction>
		</div>
	</div>
</template>

<script>
	import Vmine from './Vmine.vue'
	import Vaction from './Vaction.vue'
	//import Ping from './ping.vue'
	
	export default {
		name: 'VPersonalCenter',
		components:{
			Vmine,Vaction,
			//Ping
		}
	}
</script>

<style>
</style>
