<template>
	<div>
		<div :style="{width:'15%' ,position:'fixed',height: '100vh',backgroundColor:'rgb(78,90,110)'}">
			<Navigation></Navigation>
		</div>
		<mainheader></mainheader>
		<div :style="{position:'absolute',width:'85%',left:'205px',height:'100%'}">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Navigation from '../components/navigation.vue'
	import mainheader from '../components/mainheader.vue'
	export default{
		name:'homepage',
		components:{
			Navigation,mainheader
		}
	}
</script>

<style>
</style>
