<template>
	<div class="rage" >
		<img src="../assets/photoes/Group12.png">
		<h3>{{cardskk.name}}</h3>
	</div>
</template>

<script>
	export default {
		name: 'VHomepagecard',
		props:['cardskk']
	}
</script>

<style scoped>
	.rage{
		width: 250px;
		text-align: center;
		margin-bottom: 20px;
	}
</style>
