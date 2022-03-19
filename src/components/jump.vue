<template>
	<div>
		<h1>注册成功，将在3秒后跳转</h1>
	</div>
</template>

<script>
	export default{
		name:'jump',
		mounted(){
			setTimeout(()=>{
				this.$router.push('/')
			},3000)
		}
	}
</script>

<style>
</style>
