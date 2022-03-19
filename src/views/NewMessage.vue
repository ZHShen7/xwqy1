<template>
	<div>
		<!-- <h1 v-for="message in messages" :key="message.id">您好，您收到了来自{{message.username}}的一条调用申请，<router-link
				to="/ReceiveForm">点此查看</router-link>
		</h1> -->
		<el-breadcrumb class="crumb" separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item><a href="/">消息通知</a></el-breadcrumb-item>
			<el-breadcrumb-item>消息中心</el-breadcrumb-item>
		</el-breadcrumb>
		<el-table class="table" :data="tableData" border style="width: 58.5%">
			<el-table-column fixed prop="name" label="发件人" width="150">
			</el-table-column>
			<el-table-column prop="thing" label="事项" width="120">
			</el-table-column>
			<el-table-column prop="date" label="时间" width="300">
			</el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		data() {
			return {
				messages: [{
						id: '001',
						username: 'wsj'
					},
					{
						id: '002',
						username: 'szh'
					}
				],
				tableData: [{
						date: '2016-05-02 20:00:00',
						name: 'szh2',
						thing: '背调'
					}
				]
			}
		},
		methods: {
			handleClick(row) {
				console.log(row);
				this.$router.push('/ReceiveForm');
			}
		},
		mounted() {
			console.log(this)
			const path = 'http://192.168.1.102:5000/users'
			// axios.get(path)
			// 	.then((response) => {
			// 		// handle success
			// 		if (response.data.NewMessage) {
			// 			this.messages = return.data.messages
			// 		}
			// 	})
			// 	.catch((error) => {

			// 	})
		},
		beforeDestroy() {
			pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.table {
		margin-left: 20px;
		margin-top: 20px;
	}
	.crumb{
		margin-left: 20px;
		margin-top:20px;
	}
</style>
