<template>
	<div>
		<el-form style="margin-top:30px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"
			class="demo-ruleForm">
			<el-form-item label="申请人" prop="name">
				<el-input style="width: 200px;" v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="申请公司" prop="company">
				<el-input style="width: 200px;" v-model="ruleForm.company"></el-input>
			</el-form-item>
			<el-form-item label="查询员工姓名" prop="name2">
				<el-input style="width: 200px;" v-model="ruleForm.name2"></el-input>
			</el-form-item>
			<el-form-item label="查询内容" prop="QueryContent">
				<el-checkbox-group v-model="ruleForm.QueryContent">
					<el-checkbox label="工作业绩类" name="QueryContent"></el-checkbox>
					<el-checkbox label="工作技能类" name="QueryContent"></el-checkbox>
					<el-checkbox label="工作态度类" name="QueryContent"></el-checkbox>
					<el-checkbox label="团队合作类" name="QueryContent"></el-checkbox>
					<el-checkbox label="考勤情况类" name="QueryContent"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="备注" prop="desc">
				<el-input style="width: 600px;" type="textarea" v-model="ruleForm.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
				<el-button @click="goback()">返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				ruleForm: {
					name: '',
					company: '',
					delivery: false,
					name2: '',
					QueryContent: [],
					desc: ''
				},
				rules: {
					name: [{
							required: true,
							message: '请输入姓名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 6,
							message: '长度在 2 到 6 个字符',
							trigger: 'blur'
						}
					],
					company: [{
							required: true,
							message: '请输入您的公司',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 20,
							message: '长度在 1 到 20 个字符',
							trigger: 'blur'
						}
					],
					name2: [{
							required: true,
							message: '请输入姓名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 6,
							message: '长度在 2 到 6 个字符',
							trigger: 'blur'
						}
					],
					QueryContent: [{
						type: 'array',
						required: true,
						message: '请至少选择一个查询内容',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写备注',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						const path = 'http://192.168.43.76:5000/sendchart'
						const payload = {
							sender: this.ruleForm.name,
							receiver: this.ruleForm.company,
							type: this.ruleForm.QueryContent,
							content: this.ruleForm.desc,
							name: this.ruleForm.name2,
							company:'aaa',
						}
						console.log(payload)
						axios.post(path, payload)
							.then((response) => {
								
								console.log(response)
							})
							.catch((error) => {

							})

					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			goback() {
				this.$router.push('/Callinterface');
			}
		}
	}
</script>

<style>
</style>
