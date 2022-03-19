<template>
	<div id="page-container">
		<div id="touxiang"></div>
		<div id="nicheng">{{this.user.name}}</div>
		<div id="youxiang">{{this.user.mail}}</div>
		<div id="zj"></div>
		<div id="jieshao1">{{this.user.profile}}</div>
		<div id="bm"></div>
		<div id="jieshao2">{{this.user.position}}</div>
		<div id="gs"></div>
		<div id="dizhi">{{this.user.company}}</div>
		<div id="biaoqian">标签</div>
		<div id="biaoqian1">很有想法</div>
		<div id="biaoqian2">专精麻醉</div>
		<div id="biaoqian3">好评如潮</div>
		<div id="biaoqian4">有创造力</div>
		<div id="biaoqian5">海纳百川</div>
		<div id="gd"></div>
		<div id="shezhi">设置</div>
		<div id="ys"></div>
		<div id="yinsi">隐私设置</div>
		<div id="jt1"></div>
		<div id="sm"></div>
		<div id="shiming">实名认证</div>
		<div id="jt2"></div>
		<div id="sz"></div>
		<div id="xitong">系统设置</div>
		<div id="jt3"></div>
	</div>
</template>

<script>
	import store from '../../store/index.js'
	import axios from 'axios'
	export default {
		name: 'Vmine',
		data() {
			return {
				user: {
					id: 0,
					name:window.localStorage.getItem('username'),
					position: '学生',
					company: '西南交通大学',
					mail: window.localStorage.getItem('email'),
					date: 'a',
					profile: 'HR用户',
				}
			}
		},
		methods: {
			getMessage() {
				const path = 'http://192.168.43.76:5000/ping'
				axios.get(path)
					.then((res) => {
						this.user.id = res.data.id;
						this.user.name = res.data.name;
						this.user.position = res.data.position;
						this.user.date = res.data.date;
						this.user.mail = res.data.mail;
						this.user.company = res.data.company;
						this.user.profile = res.data.profile;
						console.log(res)
					})
					.catch((error) => {
						// eslint-disable-next-line
						console.error(error);
						console.log('请求失败了')
					})
			}
		},
		computed:{
		},
		created(){
			// this.getMessage()
		},
		beforeDestroy() {
			store.state.username = this.user.name
		}
	}
</script>

<style scoped>
	#page-container {
		width: 280px;
		height: 650px;
		margin-top: 20px;
		margin-left: 20px;
		background-color: white;
		border: 1px solid rgb(225, 225, 225);
		border-radius: 5px 5px 5px 5px;
	}

	html,
	body {
		margin: 0;
		padding: 0;
	}

	body {}

	#touxiang {
		width: 120px;
		height: 120px;
		background-image: url("../assets/photoes/tx.png");
		background-size: 120px 120px;
		background-repeat: no-repeat;
		margin-top: 20px;
		margin-left: 80px;
	}

	#nicheng {
		margin-top: 15px;
		text-align: center;
		font-size: 20px;
	}

	#youxiang {
		margin-top: 10px;
		text-align: center;
		font-size: 8px;
	}

	#zj {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/zj.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 16px;
		margin-left: 55px;
	}

	#jieshao1 {
		margin-top: 15px;
		margin-left: 80px;
		font-size: 15px;
	}

	#bm {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/bm.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 16px;
		margin-left: 55px;
	}

	#jieshao2 {
		margin-top: 15px;
		margin-left: 80px;
		font-size: 15px;
	}

	#gs {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/gs.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 16px;
		margin-left: 55px;
		z-index: 1000;
	}

	#dizhi {
		margin-top: 15px;
		margin-left: 80px;
		font-size: 15px;
	}

	#biaoqian {
		margin-top: 15px;
		margin-left: 10px;
		font-size: 20px;
	}

	#biaoqian1 {
		float: left;
		width: auto;
		height: 20px;
		margin-top: 15px;
		margin-left: 20px;
		font-size: 10px;
		border: 1px solid rgb(225, 225, 225);
		border-radius: 5px 5px 5px 5px;
		height: 20px;
		background-color: rgb(245, 245, 245);
		text-align: center;
		line-height: 20px;
	}

	#biaoqian2 {
		float: left;
		width: 60px;
		height: 20px;
		margin-top: 15px;
		margin-left: 10px;
		font-size: 10px;
		border: 1px solid rgb(225, 225, 225);
		border-radius: 5px 5px 5px 5px;
		height: 20px;
		background-color: rgb(245, 245, 245);
		text-align: center;
		line-height: 20px;
	}

	#biaoqian3 {
		float: left;
		width: 60px;
		height: 20px;
		margin-top: 15px;
		margin-left: 10px;
		font-size: 10px;
		border: 1px solid rgb(225, 225, 225);
		border-radius: 5px 5px 5px 5px;
		height: 20px;
		background-color: rgb(245, 245, 245);
		text-align: center;
		line-height: 20px;
	}

	#biaoqian4 {
		float: left;
		width: 60px;
		height: 20px;
		margin-top: 15px;
		margin-left: 20px;
		font-size: 10px;
		border: 1px solid rgb(225, 225, 225);
		border-radius: 5px 5px 5px 5px;
		height: 20px;
		background-color: rgb(245, 245, 245);
		text-align: center;
		line-height: 20px;
	}

	#biaoqian5 {
		float: left;
		width: 60px;
		height: 20px;
		margin-top: 15px;
		margin-left: 10px;
		font-size: 10px;
		border: 1px solid rgb(225, 225, 225);
		border-radius: 5px 5px 5px 5px;
		height: 20px;
		background-color: rgb(245, 245, 245);
		text-align: center;
		line-height: 20px;
	}

	#gd {
		float: left;
		width: 18px;
		height: 18px;
		background-image: url("../assets/photoes/gd.png");
		background-size: 18px 18px;
		background-repeat: no-repeat;
		margin-top: 17px;
		margin-left: 12px;
	}

	#shezhi {
		clear: both;
		margin-top: 100px;
		margin-left: 10px;
		font-size: 20px;
	}

	#ys {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/ys.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 20px;
		margin-left: 50px;
	}

	#yinsi {
		margin-top: 20px;
		margin-left: 80px;
		font-size: 15px;
	}

	#jt1 {
		float: right;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/jt.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: -18px;
		margin-right: 60px;
	}

	#sm {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/sm.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 25px;
		margin-left: 50px;
	}

	#shiming {
		margin-top: 25px;
		margin-left: 80px;
		font-size: 15px;
	}

	#jt2 {
		float: right;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/jt.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: -18px;
		margin-right: 60px;
	}

	#sz {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/sz.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 25px;
		margin-left: 50px;
	}

	#xitong {
		margin-top: 25px;
		margin-left: 80px;
		font-size: 15px;
	}

	#jt3 {
		float: right;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/jt.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: -18px;
		margin-right: 60px;
	}
</style>
