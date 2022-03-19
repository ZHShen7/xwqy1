<template>
	<div>
		jhkjhkhj
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Ping',
		data() {
			return {
				book: {
					id:0,
					data:''
				}
			}
		},
		methods: {
			getMessage() {
				const path = 'http://192.168.1.105:5000/ping'
				axios.get(path)
					.then((res) => {
						this.book.id = res.data.id;
						this.book.name = res.data.name;
						console.log(res)
					})
					.catch((error) => {
						// eslint-disable-next-line
						console.error(error);
						console.log('请求失败了')
					})
			}
		},
		created() {
			this.getMessage()
		}
	}
</script>
