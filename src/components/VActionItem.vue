<template>
	<div class="BigPageContainer">
		<div id="page-container1">
			<div id="butf"></div>
			<div id="wenzi">Butterfly</div>
			<div id="yuedu">阅读量</div>
			<div id="pinglun">评论量</div>
			<div id="shuzi1">23万</div>
			<div id="shuzi2">4,345</div>
		</div>
		<div id="page-container2">
			<div id="xz"></div>
			<div id="line1"></div>
			<div id="gg"></div>
			<div id="line2"></div>
			<div id="lj"></div>
			<div id="line3"></div>
			<div id="gd"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'VActionItem',
	}
</script>

<style scoped>
	.BigPageContainer{
		width: 250px;
		height:160px;
		float: left;
		margin-left: 10px;
		margin-top: 25px;
	}
	#page-container1{width:250px;
	height: 120px;
	margin: 0;
	border: 1px solid rgb(225, 225, 225);
	border-radius:5px 5px 0px 0px;
	}

	#page-container2 {
		width: 250px;
		height: 40px;
		margin: 0;
		border: 1px solid rgb(225, 225, 225);
		border-radius: 0px 0px 5px 5px;
		background-color: rgb(240, 242, 245);
	}

	html,
	body {
		margin: 0;
		padding: 0;
	}

	body {}

	#butf {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/butf.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 10px;
		margin-left: 25px;

	}

	#wenzi {
		margin-top: 6px;
		margin-left: 70px;
		font-size: 20px;
	}

	#yuedu {
		float: left;
		margin-top: 10px;
		margin-left: 50px;
		font-size: 15px;
		color: rgb(154, 154, 154)
	}

	#pinglun {
		margin-top: 10px;
		margin-left: 150px;
		font-size: 15px;
		color: rgb(154, 154, 154)
	}

	#shuzi1 {
		float: left;
		margin-top: 10px;
		margin-left: 50px;
		font-size: 18px;
		color: rgb(89, 89, 89)
	}

	#shuzi2 {
		margin-top: 10px;
		margin-left: 150px;
		font-size: 18px;
		color: rgb(89, 89, 89)
	}

	#xz {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/xz.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 10px;
		margin-left: 25px;

	}

	#line1 {
		float: left;
		width: 3px;
		height: 20px;
		background-image: url("../assets/photoes/line.png");
		background-size: 3px 20px;
		background-repeat: no-repeat;
		margin-top: 10px;
		margin-left: 15px;

	}

	#gg {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/edit.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 10px;
		margin-left: 25px;

	}

	#line2 {
		float: left;
		width: 3px;
		height: 20px;
		background-image: url("../assets/photoes/line.png");
		background-size: 3px 20px;
		background-repeat: no-repeat;
		margin-top: 10px;
		margin-left: 15px;

	}

	#lj {
		float: left;
		width: 20px;
		height: 20px;
		background-image: url("../assets/photoes/sharealt.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 10px;
		margin-left: 25px;

	}

	#line3 {
		float: left;
		width: 3px;
		height: 20px;
		background-image: url("../assets/photoes/line.png");
		background-size: 3px 20px;
		background-repeat: no-repeat;
		margin-top: 10px;
		margin-left: 15px;

	}

	#gd {
		float: left;
		width: 20px;
		height: 5px;
		background-image: url("../assets/photoes/slh.png");
		background-size: 20px 20px;
		background-repeat: no-repeat;
		margin-top: 17px;
		margin-left: 23px;

	}
</style>
