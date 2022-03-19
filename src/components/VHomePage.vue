<template>
	<div class="PageContainer">
		<div class="header">
			<img loading="lazy" src="../assets/photoes/Bitmap.png" alt="Smiley face" width="100%" height="600px">
		</div>
		<div class="content">
			<VHomepagecard v-for="CardWordsObj in this.CardWords" :key="CardWordsObj.id" :cardskk="CardWordsObj"/>
		</div>
		<div class="footer"></div>
	</div>
</template>

<script>
	import VHomepagecard from './VHomepagecard.vue'
	export default {
		name: 'VHomePage',
		data() {
			return{
			CardWords: [{
					id: '1',
					name: '个人日程'
				},
				{
					id: '2',
					name: '事项审批'
				},
				{
					id: '3',
					name: '公司公告'
				},
				{
					id: '4',
					name: '考勤打卡'
				},
				{
					id: '5',
					name: '绩效考核'
				},
				{
					id: '6',
					name: '文档管理'
				},
				{
					id: '7',
					name: '员工档案'
				},
				{
					id: '8',
					name: '更多'
				},
			],
			}
		},
		components: {
			VHomepagecard
		}
	}
</script>

<style scoped>
	.PageContainer {
		width: 100%;
		height: 100%;
	}

	.pageheader {
		height: 40px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.header {
		background-color: rgb(223, 240, 252);
	}

	

	.content {
		height: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 20px;
	}
</style>
