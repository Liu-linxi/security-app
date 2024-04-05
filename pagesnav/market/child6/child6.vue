<template>
	<view class="child6">
		<module title="全球市场" grid="grid3" :list="3"/>
		<module title="基金" grid="grid3" :list="6"/>
		<module title="个股" grid="grid4" :list="10"/>
		<module title="债券" grid="grid3" :list="5">
			<view class="btn">
				国债逆回购
			</view>
		</module>
	</view>
</template>

<script>
	import module from './components/module.vue';
	export default {
		components:{
			module
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.child6 {
		background-color: #f6f6f6;
		.btn{
			background-color: #d4322c;
			color: #FFFFFF;
			text-align: center;
			border-radius: 10rpx;
			line-height: 3.5;
			margin: 35rpx 0 25rpx;
		}
	}
</style>