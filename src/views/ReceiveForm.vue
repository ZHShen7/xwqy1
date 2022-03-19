<template>
	<div>
		<h1>调查员工信息</h1>
		<el-descriptions :style="{marginLeft:'20px',marginRight:'20px'}" class="form11" :column="3" border>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-user"></i>
					用户名
				</template>
				{{this.data.name}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-user"></i>
					性别
				</template>
				{{this.data.gender}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-mobile-phone"></i>
					手机号
				</template>
				{{this.data.phone}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-location-outline"></i>
					户籍
				</template>
				{{this.data.address_org}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-tickets"></i>
					职位
				</template>
				{{this.data.role}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-office-building"></i>
					联系地址
				</template>
				{{this.data.address}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-office-building"></i>
					QQ号
				</template>
				{{this.data.QQ}}
			</el-descriptions-item>
			<el-descriptions-item>
				<template slot="label">
					<i class="el-icon-office-building"></i>
					微信号
				</template>
				{{this.data.Wechat}}
			</el-descriptions-item>
		</el-descriptions>
		<h1>对方备注信息</h1>
		<span style="margin-left: 20px;font-size: 20px;">我想问下szh喜欢玩蛇吗</span>
		<h1>是否同意调用详细绩效考核结果</h1>
		<RadioGroup style="margin-left: 20px;" v-model="button7" type="button" button-style="solid">
			<Radio label="是"></Radio>
			<Radio label="否"></Radio>
		</RadioGroup>
		<h1>反馈</h1>
		<el-form style="margin-top:30px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"
			class="demo-ruleForm">
			<el-form-item label="反馈信息" prop="desc">
				<el-input style="width: 600px;" type="textarea" v-model="ruleForm.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm()">提交</el-button>
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
				data: {
					id: '',
					QQ: '1145720179',
					name: 'szh',
					gender: '男',
					phone: '18115779285',
					email: '123@qq.com',
					Wechat: 'purewhite_rabbit',
					role: 'HR',
					edu: [{
						date: '2016~2019',
						school: '无锡一中',
						major: '蛇学',
						school_type: '高中',
						rank: '50/52',
					}, {
						date: '2019~2020',
						school: '西南交通大学',
						major: '通信工程',
						school_type: '本科',
						rank: '85/85',
					}],
					exp: [],
					address: '天佑斋3栋033027',
					address_org: '江苏无锡',
				},
				ruleForm: {
					desc: ''
				},
				rules: {
					desc: [{
						required: true,
						message: '请填写备注',
						trigger: 'blur'
					}]
				},
				button7: '是',
			};
		},
		methods: {
			submitForm() {
				this.$Modal.info({
					title:'提交成功'}
				)

			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			goback() {
				this.$router.push('/Callinterface');
			}
		},
		mounted() {
			const path = 'http://192.168.43.76:5000/receive_chart'
			const payload = {
				id: '1'
			}
			axios.post(path, payload)
				.then((response) => {
					console.log(response);
					this.data = response.data.type
				})
				.catch((error) => {

				})

		}
	}
</script>

<style>
</style>
