<template>
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
		<el-form-item label="" prop="name">
			<el-input type="text" autocomplete="off" v-model="ruleForm.name" prefix-icon="el-icon-user-solid"
				placeholder="请输入用户名"></el-input>
		</el-form-item>
		<el-form-item label="" prop="email">
			<el-input type="text" autocomplete="off" v-model="ruleForm.email" prefix-icon="el-icon-lock"
				placeholder="请输入邮箱"></el-input>
		</el-form-item>
		<el-form-item label="" prop="pass">
			<el-input type="password" autocomplete="off" v-model="ruleForm.pass" prefix-icon="el-icon-lock"
				placeholder="请输入密码"></el-input>
		</el-form-item>
		<el-form-item label="" prop="checkPass">
			<el-input type="password" autocomplete="off" v-model="ruleForm.checkPass" prefix-icon="el-icon-lock"
				placeholder="请再次输入密码"></el-input>
		</el-form-item>
		<el-form-item class="btns">
			<el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
			<el-button @click="resetForm('ruleForm')">重置</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入密码"));
				} else {
					if (this.ruleForm.checkPass !== "") {
						this.$refs.ruleForm.validateField("checkPass");
					}
					callback();
				}
			};

			var validatePass2 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error("两次输入密码不一致!"));
				} else {
					callback();
				}
			};

			return {
				activeName: "second",
				ruleForm: {
					name: "",
					pass: "",
					checkPass: "",
					email:"",
					usernameError:null,
					emailError:null,
					passwordError:null,
					
				},
				rules: {
					name: [{
							required: true,
							message: "请输入您的名称",
							trigger: "blur"
						},
						{
							min: 2,
							max: 10,
							message: "长度在 2 到 10 个字符",
							trigger: "blur"
						},
					],
					pass: [{
						required: true,
						validator: validatePass,
						trigger: "blur"
					}],
					checkPass: [{
						required: true,
						validator: validatePass2,
						trigger: "blur"
					}, ],
				},
			};
		},

		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						const path = 'http://192.168.43.76:5000/users'
						const payload = {
							username: this.ruleForm.name,
							email: this.ruleForm.email,
							password: this.ruleForm.pass,
						}
						axios.post(path, payload)
							.then((response) => {
								// handle success
								this.$router.push('/jump')
							})
							.catch((error) => {
								// handle error
								for (var field in error.response.data.message) {
									if (field == 'username') {
										this.ruleForm.usernameError = error.response.data.message.username
									} else if (field == 'email') {
										this.ruleForm.emailError = error.response.data.message.email
									} else if (field == 'password') {
										this.ruleForm.passwordError = error.response.data.message.password
									}
								}
							})
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},

			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
		},
	};
</script>
<style scoped>
	.btns {
		display: flex;
		justify-content: flex-end;
	}
</style>
