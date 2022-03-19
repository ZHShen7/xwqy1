<template>
	<div class="content">
		<div class="eduexp">
			<p style="float: left;"> 基本信息</p>
			<button style="float: right; margin-right: 20px;margin-top: 5px;"> 保存</button>
			<button style="float: right; margin-right: 10px;margin-top: 5px;"> 修改</button>
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
		</div>
		<div class="workexp">
			<p style="float: left;">教育经历</p>
			<button style="float: right; margin-right: 20px;margin-top: 5px;"> 保存</button>
			<button style="float: right; margin-right: 10px;margin-top: 5px;"> 修改</button>
			<Table :style="{marginLeft:'20px',marginRight:'20px',width:'760px',float:'left'}" stripe :columns="columns1" :data="data.edu"></Table>
		</div>
		<div class="hearttest">
			<p>心理测试</p>
			<div class="littlew">此处为心理测试</div>
		</div>
		<div class="bestans">
			<p>话题优质回答</p>
			<div class="littlew">此处为话题优质回答</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'VArchive',
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
						date:'2016~2019',
						school:'无锡一中',
						major:'蛇学',
						school_type:'高中',
						rank:'50/52',
					},{
						date:'2019~2020',
						school:'西南交通大学',
						major:'通信工程',
						school_type:'本科',
						rank:'85/85',
					}],
					exp: [],
					address:'天佑斋3栋033027',
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
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		height: 550px;
	}

	.margin-top {
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 20px;
	}

	.eduexp {
		flex: 1;
		border-bottom: 1px solid rgb(225, 225, 225);
	}

	.workexp {
		flex: 1;
		border-bottom: 1px solid rgb(225, 225, 225);
	}

	.hearttest {
		flex: 1;
		border-bottom: 1px solid rgb(225, 225, 225);
	}

	.bestans {
		flex: 1;
	}
	.icon{
		margin-left:300px;
	}
	.littlew{
		text-align: center;
		margin-top: 10px;
	}
	p {
		padding-left: 10px;
		font-size: 22px;
	}
</style>
