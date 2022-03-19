<template>
	<div>
		<div class="info">
			<h2>基本信息</h2>
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
				<!-- <el-descriptions-item>
					<template slot="label">
						<i class="el-icon-location-outline"></i>
						户籍
					</template>
					{{this.data.address_org}}
				</el-descriptions-item> -->
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
					{{this.data.WeChat}}
				</el-descriptions-item>
			</el-descriptions>
		</div>
		<div class="eduexp">
			<h2>教育经历</h2>
			<Table :style="{marginLeft:'20px',marginRight:'20px'}" stripe :columns="columns1" :data="data.edu"></Table>
		</div>
		<div class="workexp">
			<h2>工作经历</h2>
			<Table :style="{marginLeft:'20px',marginRight:'20px'}" stripe :columns="columns2" :data="data.exp">
				<template slot-scope="{ index }" slot="action">
					<Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">调用</Button>
				</template>
			</Table>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Searchinfo',
		data() {
			return {
				data: {
					id: '',
					QQ: '',
					name: '',
					gender: '',
					phone: '',
					email: '',
					WeChat: '',
					role: '',
					edu: [],
					exp: [],
					address_org:'江苏无锡',
				},
				columns1: [{
						title: '时间',
						key: 'date'
					},
					{
						title: '学校',
						key: 'school'
					},
					{
						title: '专业',
						key: 'major'
					},
					{
						title: '学校类型',
						key: 'school_type'
					},
					{
						title: '排名',
						key: 'rank'
					},
				],
				columns2: [{
						title: '公司名称',
						key: 'name'
					},
					{
						title: '工作时间',
						key: 'date'
					},
					{
						title: '是否在职',
						key: 'state'
					},
					{
						title: '工作技能',
						key: 'jineng'
					},
					{
						title: '工作业绩',
						key: 'yeji'
					},
					{
						title: '工作态度',
						key: 'taidu'
					},
					{
						title: '考勤情况',
						key: 'kaoqing'
					},
					{
						title: '团队合作',
						key: 'hezuo'
					},
					{
						title: 'Action',
						slot: 'action',
						width: 100,
						align: 'center'
					}
				]
			}
		},
		methods: {
			show(index) {
				this.$router.push({
					name:'Callinterface',
					query:{
						user_id:this.$route.query.id,
						exp_id:this.data.exp[index].id
					}
				})
				
			},

		},
		mounted() {
			const path = 'http://192.168.43.76:5000/user_doc'
			const payload = {
				id: this.$route.query.id
			}
			axios.post(path, payload)
				.then((response) => {
					console.log(response);
					this.data = response.data;
				})
				.catch((error) => {})
		},
	}
</script>

<style scoped>
	.form11 el-descriptions {
		margin-left: 20px;
		margin-right: 20px;
	}
</style>
