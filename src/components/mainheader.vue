<template>
	<div class="pageheader">
		<div>
			<Icon size="18" type="ios-search" />
		</div>
		<div>
			<Icon size="18" type="ios-notifications-outline" />
		</div>
		<div class="badge">
			<Badge :count="0">
				<Avatar size="small" shape="square" icon="ios-person" />
			</Badge>
		</div>
		<div>{{this.username}}</div>
		<div>
			<Icon size="18" type="ios-globe" />
		</div>
		<div>
			<Icon size="18" type="ios-exit" @click="handlelogout()"/>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import store from '../../store/index.js'
	export default{
		name:'mainheader',
		data() {
			return {
				username:window.localStorage.getItem('username')
			}
		},
		methods:{
			handlelogout(){
				window.localStorage.removeItem('token');
				window.localStorage.removeItem('username');
				this.$router.push('/');
			}
		},
		computed:{
			
		}
	}
</script>

<style>
	.pageheader {
		height: 40px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-bottom: 1px solid rgb(225,225,225);
	}
	.pageheader div {
		height: 20px;
		margin-right: 12px;
		box-sizing: border-box;
	}
	
	.pageheader div:last-child {
		margin-right: 20px;
	}
</style>
