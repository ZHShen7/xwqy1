<template>
	<div class="login">
		<div class="login_form">
			<p>小微企业跨组织人才管理系统</p>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="登录" name="first">
					<el-form :model="loginForm" :rules="rules" ref="loginForm">
						<el-form-item label="" prop="account" class="elItem">
							<el-input type="text" autocomplete="off" v-model="loginForm.account"
								prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
						</el-form-item>
						<el-form-item label="" prop="password">
							<el-input type="password" autocomplete="off" v-model="loginForm.password"
								prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item class="btns">
							<el-button type="primary" @click="goToLogin">登录</el-button>
							<el-button @click="resetLoginForm">重置</el-button>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="注册" name="second">
					<register></register>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	//引入注册组件
	import pubsub from 'pubsub-js'
	import register from './register.vue';
	import axios from 'axios'
	import store from '../../store/index.js'
	export default {
		data() {
			var validateAccount = (rule, value, callback) => {
				if (value === "") {
					return callback(new Error("账号不能为空"));
				} else {
					callback();
				}
			};
			var validatePassword = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				} else {
					callback();
				}
			};
			return {
				loginForm: {
					account: '',
					password: '',
				},
				activeName: 'first', //默认显示登录页面
				rules: {
					account: [{
						validator: validateAccount,
						trigger: "blur",
					}, ],
					password: [{
						validator: validatePassword,
						trigger: "blur",
					}, ],
				},
			};
		},
		methods: {
			//固定的账户密码判断实现简单的登录跳转功能，只能测试用
			goToLogin() {
				this.$refs["loginForm"].validate((valid) => {
					if (valid) {
						console.log(this);
						this.$bus.$emit('hello',this.loginForm.account)
						const path = 'http://192.168.43.76:5000/login'
						const payload = {
							username: this.loginForm.account,
							password: this.loginForm.password,
						}
						axios.post(path, payload)
							.then((response) => {
								if (response.data.statecode == '1')
								{
									console.log(response)
									this.$message({
										message: "登陆成功",
										type: "success"
									});
									window.localStorage.setItem('token',1);
									// console.log(this)
									store.state.username = this.loginForm.account
									window.localStorage.setItem('username',this.loginForm.account)
									window.localStorage.setItem('email',response.data.thisuser.email)
									this.$router.push('/homepage');
								}
								// handle success
								
							})
							.catch((error) => {
								for (var field in error.response.data.message) {
									if (field == 'username') {
										this.$message.error(error.response.data.message.username);
										return false;
									} else if (field == 'password') {
										this.$message.error(error.response.data.message.password);
										return false;
									} 
								}
							})
					} else {
						this.$message.error("登陆失败");
						return false;
					}
				});
			},
			resetLoginForm() {
				this.$refs["loginForm"].resetFields();
			},
			handleClick() {}
		},
		components: {
			register
		},
		mounted() {
			pubsub.publish('hello',666);
		},

	};
</script>

<style scoped>
	.login {
		width: 100%;
		height: 100vh;
		background-size: 100% 100%;
		background-image: url("../assets/photoes/background.jpg");
		background-position: center center;
		overflow: auto;
		position: relative;
	}

	.login_form {
		width: 440px;
		height: 380px;
		position: absolute;
		left: 78%;
		top: 50%;
		margin-left: -200px;
		margin-top: -150px;
		padding: 30px;
		background: #fff;
		border-radius: 10px;
		box-shadow: 0 0 10px #ddd;

	}

	p {
		font-size: 24px;
		text-align: center;
		font-weight: 600;
	}
</style>
