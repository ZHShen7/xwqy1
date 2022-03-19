<template>
	<div class="container">
		<div style="width: 30px;"></div>
		<div class="charts1">
			<h2>考核人数</h2>
			<span class="bignum">{{this.number}}</span>
		</div>
		<div style="width: 50px;"></div>
		<div class="charts2">
			<h2>绩效等级分布</h2>
			<ve-pie width="400px" height="300px" :extend="extend" :data="chartData2" :settings="chartSettings1">
			</ve-pie>
		</div>
		<div style="width: 50px;"></div>
		<div class="charts3">
			<h2>绩效得分排名</h2>
			<ve-bar width="400px" height="300px" :extend="extend" :data="chartData3" :settings="chartSettings2">
			</ve-bar>
		</div>
		<div style="width: 20px;"></div>
		<div style="width: 30px;"></div>
		<div style="width: 30px;"></div>
		<div class="charts5">
			<h2>各指标得分</h2>
			<ve-histogram width="500px" height="300px" :extend="extend" :data="chartData4" :settings="chartSettings4">
			</ve-histogram>
		</div>
		<div style="width: 50px;"></div>
		<div class="charts4">
			<h2>自评核定对比</h2>
			<ve-line width="500px" height="300px" :extend="extend" :colors="chartColors" :settings="chartSettings3"
				:data="chartData1">
			</ve-line>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			this.chartSettings2 = {
					metrics: ["绩效得分"],
					dataOrder: {
						label: "绩效得分",
						order: 'desc'
					},
					axisSite: {
						top: ['绩效得分']
					}
				},
				this.extend = {
					series: {
						label: {
							normal: {
								show: true
							}
						}
					}
				}
			return {
				chartColors: ["red", "blue"],
				chartSettings1: {
					type: 'pie',
					offsetY: 120,
					radius: 60
				},
				number:'',
				chartData1: {
					columns: ["姓名", "自评总分", "核定总分"],
					rows: [{
							姓名: "沈之航",
							自评总分: 10,
							核定总分: 5.8,
						},
						{
							姓名: "汪世季",
							自评总分: 10,
							核定总分: 10,
						},
						{
							姓名: "何彪瑞",
							自评总分: 5.8,
							核定总分: 9.8,
						},
						{
							姓名: "吴诗语",
							自评总分: 8.5,
							核定总分: 7.9,
						},
						{
							姓名: "周佳怡",
							自评总分: 8.8,
							核定总分: 9.6,
						},
					]
				},
				chartData2: {
					columns: ["类别", "人数"],
					rows: [{
							类别: "普通",
							人数: 2,
						},
						{
							类别: "不合格",
							人数: 1,
						},
						{
							类别: "优秀",
							人数: 2,
						},
					]
				},
				chartData3: {
					columns: ["姓名", "绩效得分"],
					rows: [{
							姓名: "沈之航",
							绩效得分: 5.8,
						},
						{
							姓名: "汪世季",
							绩效得分: 10,
						},
						{
							姓名: "何彪瑞",
							绩效得分: 9.8,
						},
						{
							姓名: "吴诗语",
							绩效得分: 7.9,
						},
						{
							姓名: "周佳怡",
							绩效得分: 9.6,
						},
					]
				},
				chartData4: {
					columns: ["姓名", "工作态度", "工作效率", "团队精神", "专业知识"],
					rows: [{
							姓名: "沈之航",
							工作态度: 5.2,
							工作效率: 4.9,
							团队精神: 1.3,
							专业知识: 1.4,
						},
						{
							姓名: "汪世季",
							工作态度: 10.0,
							工作效率: 10.0,
							团队精神: 10.0,
							专业知识: 10.0,
						}, {
							姓名: "何彪瑞",
							工作态度: 3.3,
							工作效率: 10,
							团队精神: 4.3,
							专业知识: 10,
						}, {
							姓名: "吴诗语",
							工作态度: 8.4,
							工作效率: 7.9,
							团队精神: 9.1,
							专业知识: 8.5,
						}, {
							姓名: "周佳怡",
							工作态度: 8.8,
							工作效率: 9.1,
							团队精神: 8.2,
							专业知识: 9.0,
						},
					]
				}
			}
		},
		mounted() {
			const path = 'http://192.168.43.76:5000/performance'
			const payload = {
				perf_id: '1',
			}
			console.log(payload)
			axios.post(path, payload)
				.then((response) => {
					console.log(response);
					this.number = response.data.length+1
					let name = response.data[0].map(x => {return x.user_name})
					let score = response.data[0].map(x => {return x.score})
					let score_self = response.data[0].map(x => {return x.score_self})
					let tuandui = response.data[0].map(x => {return x.tuandui})
					let tuidu = response.data[0].map(x => {return x.tuidu})
					let xiaolv = response.data[0].map(x => {return x.xiaolv})
					let zhishi = response.data[0].map(x => {return x.zhishi})
					let leibie = ['普通','不合格','优秀']
					const result = name.map((value, i) => ({ 绩效得分:score[i], 姓名: name[i]}))
					const result1 = name.map((value, i) => ({ 自评总分:score_self[i], 姓名: name[i],核定总分:score[i] }))
					const result2 = name.map((value, i) => ({ 姓名: name[i],工作态度:tuidu[i], 工作效率: xiaolv[i],团队精神:tuandui[i],专业知识:zhishi[i] }))
					const result3 = leibie.map((value, i) => ({ 类别:leibie[i], 人数:response.data[1][i] }))
					this.chartData3.rows = result;
					this.chartData1.rows = result1;
					this.chartData4.rows = result2;
					this.chartData2.rows = result3;
					})
				.catch((error) => {})
		},
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.charts1 {
		border: solid 1px rgb(225, 225, 225);
		width: 100px;
		height: 300px;
		text-align: center;
		margin-top: 20px;
	}

	.charts2 {
		border: solid 1px rgb(225, 225, 225);
		width: 400px;
		height: 300px;
		text-align: center;
		margin-top: 20px;
	}

	.charts3 {
		border: solid 1px rgb(225, 225, 225);
		width: 450px;
		height: 300px;
		text-align: center;
		margin-top: 20px;
	}

	.charts4 {
		border: solid 1px rgb(225, 225, 225);
		width: 500px;
		height: 300px;
		text-align: center;
		margin-top: 20px;
	}

	.charts5 {
		border: solid 1px rgb(225, 225, 225);
		width: 500px;
		height: 300px;
		text-align: center;
		margin-top: 20px;
	}

	.bignum {
		font-size: 100px;
	}
</style>
