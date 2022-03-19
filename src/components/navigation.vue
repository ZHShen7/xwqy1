<template>
	<div>
	<div class='pic'>人才管理</div>
	<Menu theme="dark" active-name="首页" width="auto" accordion="true">
		<Submenu name="首页">
			<template slot="title">
				<Icon type="ios-keypad"></Icon>
				首页
			</template>
			<MenuItem name="0-1" to="/VHomePage">首页</MenuItem>
		</Submenu>
		<Submenu name="1">
			<template slot="title">
				<Icon type="ios-keypad"></Icon>
				评议系统
			</template>
			<MenuItem name="1-1">员工简介</MenuItem>
			<MenuItem name="1-2">评议问卷</MenuItem>
			<MenuItem name="1-3">匿名留言</MenuItem>
			<MenuItem name="1-4">结果查改</MenuItem>
		</Submenu>
		<Submenu name="2">
			<template slot="title">
				<Icon type="ios-analytics"></Icon>
				消息通知
			</template>
			<MenuItem name="2-1" to="/NewMessage">消息中心</MenuItem>
			<MenuItem name="2-2">Option 2</MenuItem>
		</Submenu>
		<Submenu name="3">
			<template slot="title">
				<Icon type="ios-analytics"></Icon>
				动态发布
			</template>
			<MenuItem name="3-1">Option 1</MenuItem>
			<MenuItem name="3-2">Option 2</MenuItem>
		</Submenu>
		<Submenu name="4">
			<template slot="title">
				<Icon type="ios-analytics"></Icon>
				行业观测
			</template>
			<MenuItem name="4-1" to="/SearchEmp">调用档案</MenuItem>
			<MenuItem name="4-2">公司会话</MenuItem>
		</Submenu>
		<Submenu name="5">
			<template slot="title">
				<Icon type="ios-analytics"></Icon>
				个人中心
			</template>
			<MenuItem name="5-1" to="/VpersonalCenter">个人中心</MenuItem>
			<MenuItem name="5-2">资料编辑</MenuItem>
		</Submenu>
		</Menu>
		</div>
</template>
<script>
    export default {
        name:'Navigation',
    }
</script>

<style scoped>
	.pic {
		padding-top: 20px;
		padding-left: 25px;
		background-image: url("../assets/photoes/Group11.png");
		background-repeat: no-repeat;
		width: 100%;
		height: 50px;
		margin-bottom: 10px;
		font-size: 27px;
		color: white;
		letter-spacing: 10px;
		font-family: 华文彩云;
	}
</style>