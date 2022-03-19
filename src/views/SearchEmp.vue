<template>
	<div class="container">
		<div class="nmsl">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/' }">行业观测</el-breadcrumb-item>
				<el-breadcrumb-item><a href="/">调用档案</a></el-breadcrumb-item>
			</el-breadcrumb>
			<h2 class="testinnmsl"> 搜索员工</h2>
		</div>
		<div class="classsearch">
			<div class="idsearch">
				<span :style="{paddingLeft:'20px',marginRight:'10px'}">按ID搜索:</span>
				<el-input placeholder="请输入id" class="input2" v-model="value1">
					<el-button slot="append" icon="el-icon-search" @click="Searchid()"></el-button>
				</el-input>
			</div>
			<div class="namesearch">
				<span :style="{paddingLeft:'20px',marginRight:'10px'}">按姓名搜索:</span>
				<el-input placeholder="请输入姓名" class="input2" v-model="value2">
					<el-button slot="append" icon="el-icon-search" @click="Searchname()"></el-button>
				</el-input>
			</div>
		</div>
		<div class="searchcontent">
			<List class="list" item-layout="vertical">
				<ListItem v-for="item in data" :key="item.id">
					<ListItemMeta :title="item.name" :description="item.company"
						:avatar="'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar'" />
						id:{{item.id}}
					<router-link :style="{marginLeft:'20px'}" :to="{
						path:'/Searchinfo',
						query:{
							id:item.id
						}
					}">查看详情
					</router-link>
				</ListItem>
			</List>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'SearchEmp',
		data() {
			return {
				value: '',
				data: [
				],
				value1: '',
				value2:'',
			}
		},
		methods: {
			Searchid() {
				const path = 'http://192.168.43.76:5000/submit_query_id'
				const payload = {
					id:this.value1,
				}
				axios.post(path,payload)
					.then((response) => {
						console.log(response);
						this.data = response.data;
						console.log(this.data)
					})
					.catch((error) => {
						console.log(error)
					})
			},
			Searchname() {
				const path = 'http://192.168.43.76:5000/submit_query_name'
				const payload = {
					name:this.value2,
				}
				axios.post(path,payload)
					.then((response) => {
						console.log(response);
						this.data = response.data;
						console.log(this.data)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		}
	}
</script>

<style scoped>
	.container {
		background-color: rgb(225, 225, 225);
		height: 100%;
		width: 100%;
		padding-top: 10px;
	}

	.input1 {
		width: 300px;
		margin-left: 420px;
	}

	.input2 {
		width: 200px;
	}

	.nmsl {
		background-color: white;
		padding-top: 10px;
		padding-left: 10px;
		margin-left: 20px;
		margin-right: 20px;
	}

	.header {
		margin-right: 20px;
		margin-left: 20px;
	}

	.testinnmsl {
		margin-top: 20px;
	}

	.classsearch {
		width: 1105px;
		background-color: white;
		margin-left: 20px;
		margin-right: 2000px;
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
	}

	.namesearch {
		margin-right: 30px;
	}

	.citysearch {
		margin-right: 30px;
	}

	.searchcontent {
		height: auto;
		background-color: white;
		margin-top: 20px;
		margin-left: 20px;
		margin-right: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.list {
		margin-left: 20px;
	}
</style>
