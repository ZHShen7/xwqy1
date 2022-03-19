<template>
	<div class='PageContainer'>
		<div class="header">
			<el-menu :default-active="dynamic" router="true" @open="dynamic" class="el-menu-demo" mode="horizontal">
				<el-menu-item index="dynamic">动态</el-menu-item>
				<el-menu-item index="VArchive">我的档案</el-menu-item>
			</el-menu>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	// import VActionItem from './VActionItem.vue'
	//import Vdynamic from './VDynamic.vue'
	export default {
		name: 'Vaction',
		components: {
			//Vdynamic
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.PageContainer {
		margin-top: 20px;
		margin-left: 20px;
		width: 800px;
		height: 650px;
		border: 1px solid rgb(225, 225, 225);
		border-radius: 5px 5px 5px 5px;
		background-color: white;
	}

	.header {
		font-size: 22px;
		border-bottom: 1px solid rgb(225, 225, 225);
	}

	.dt {
		width: 60px;
		border-bottom: 1px solid blue;
		margin-left: 10px;
		padding-left: 10px;
		padding-top: 10px;
	}
</style>
