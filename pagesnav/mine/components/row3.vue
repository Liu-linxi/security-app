<template>
	<view class="row3">
		<view v-for="(item,index) in 8" :key="index" class="d-flex a-center j-sb py-2 border-bottom">
			<view class="d-flex a-center">
				<image src="" style="width: 40rpx;height: 40rpx;" class="bg-red mr-2" mode=""></image>
				测试名
			</view>
			<uni-icons type="right" size="16" color="#c2c2c2"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.row3 {
		background-color: #FFF;
		margin: 20rpx;
		border-radius: 20rpx;
		padding: 20rpx 20rpx 30rpx;
	}
</style>