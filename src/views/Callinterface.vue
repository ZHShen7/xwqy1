<template>
	<div>
		<el-breadcrumb class="crumb" separator="/">
			<el-breadcrumb-item :to="{ path: '/VHomePage' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>行业观测</el-breadcrumb-item>
			<el-breadcrumb-item>员工搜索</el-breadcrumb-item>
			<el-breadcrumb-item>查看详情</el-breadcrumb-item>
		</el-breadcrumb>


		<Table :style="{marginTop:'20px',marginLeft:'20px',marginRight:'20px'}" stripe :columns="columns1"
			:data="this.data.exp">
			<template slot="ryze">
				<Input v-model="value" placeholder="备注" style="width: 100px" />
			</template>
			<template slot="action">
				<Button type="primary" size="small" style="margin-right: 5px" @click="alerta()">调用</Button>
			</template>
		</Table>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				data: {
					exp: []
				},
				movieList: [{
						id: '001',
						name: '工作业绩类',
						rate: 9.6
					},
					{
						id: '002',
						name: '工作技能类',
						rate: 9.4
					},
					{
						id: '003',
						name: '工作态度类',
						rate: 9.5
					},
					{
						id: '004',
						name: '团队合作',
						rate: 9.4
					},
					{
						id: '005',
						name: '考勤情况',
						rate: 9.5
					},
				],
				columns1: [{
						title: '时间',
						key: 'date'
					},
					{
						title: '内容',
						key: 'name'
					},
					{
						title: '考核人数',
						key: 'num'
					},
					{
						title: '排名',
						key: 'performance'
					},
					{
						title: '备注',
						slot: 'ryze',
						width: 200,
						align: 'center'
					},
					{
						title: '操作',
						slot: 'action',
						width: 100,
						align: 'center'
					}
				],
			}
		},
		methods: {
			tothis() {
				this.$router.push('/VQueryForm')
			},
			alerta() {
				this.$Modal.info({
					title:'申请成功'}
				)
			}
		},
		mounted() {
			const path = 'http://192.168.43.76:5000/submit_show_perf'
			const payload = {
				user_id: this.$route.query.user_id,
				exp_id: this.$route.query.exp_id
			}
			console.log(payload)
			axios.post(path, payload)
				.then((response) => {
					console.log(response);
					this.data.exp = response.data
				})
				.catch((error) => {
					console.log(error)
				})
		}
	}
</script>

<style>
	.card1 {
		margin-top: 20px;
		margin-left: 20px;
	}
</style>
