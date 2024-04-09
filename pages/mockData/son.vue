<template>
	<view class="son">
		<view v-for="(item,index) in dataList.stock" :key="index">
			{{item.name}}1
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState({
				dataList: state => state.mockData.dataList,
			}),
		},
		mounted() {
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.son {
		
	}
</style>