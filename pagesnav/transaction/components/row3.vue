<template>
	<view class="row3">
		<view class="bg-white px-3 py-2 mt-3 d-flex a-center j-sb">
			<view class="">
				阿萨德赛
			</view>
			<view class="d-flex a-center font-sm">
				全文及物或军
				<uni-icons type="right" size="16" color="#c2c2c2"></uni-icons>
			</view>
		</view>
		<view class="grid2">
			<view class="d-flex a-center pl-2 " :class="{'border-left':item%2==0}" v-for="(item,index) in 4">
				<image src="" style="width: 80rpx;height: 80rpx;" class="bg-red mr-1" mode=""></image>
				大师傅i和第三
			</view>
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
		.grid2 {
			margin-top: 20rpx;
			padding: 50rpx 20rpx;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			background-color: #FFF;
			grid-gap: 20rpx;
		}
	}
</style>