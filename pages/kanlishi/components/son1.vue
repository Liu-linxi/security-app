<template>
	<view class="module3">
		<view class="grid4 my-2 px-2">
			<view class="">
				<view class="d-flex a-center text-nowrap" @click="$emit('changeBool')">
					<image src="" style="width: 30rpx;height: 30rpx;" class="bg-red mr-1" mode=""></image> 收起分析
				</view>
			</view>
			<view class=" gray text-right">
				最新
			</view>
			<view class=" gray text-right">
				涨幅
			</view>
			<view class=" gray text-right">
				涨跌
			</view>
		</view>

		<view class="shadow p-3 mb-2 rounded-sm" v-for="li in 8">
			<view class="grid4 mt-1 pb-2">
				<view class="font32">
					N广合新
					<view class="d-flex a-center font-sm gray">
						<text class="tagsmall">新</text>
						001389
					</view>
				</view>
				<view class="red text-right">
					51.88
				</view>
				<view class=" red text-right">
					197.65%
				</view>
				<view class="font26 text-right">
					印制电路板
				</view>
			</view>
			<view class="">
				<view class="truncate3">
					是对方还不包括就是不能房价肯定是不能发豆腐你说的那是对方还不包括就是不能房价肯定是不能发豆腐你说的那个发是对方还不包括就是不能房价肯定是不能发豆腐你说的那个发个发v里看到你付款了好伐
				</view>
				<view class="mt-2">
					<text class="redtags">
						贵金属
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['index'],
		data() {
			return {
			}
		},
		methods: {


		}
	}
</script>

<style lang="scss" scoped>
	.module3 {
		background-color: #FFFFFF;
		padding: 30rpx;

		.img {
			width: 15rpx;
			height: 20rpx;
			background-color: #41b13e;
		}

		.item {
			text-align: center;
			background-color: #f6f6f6;
			border: 1px solid #f6f6f6;
			padding: 15rpx 0;
			border-radius: 8rpx;

			&.red {
				background-color: #FFFFFF;
				border-color: #d4322c;
			}
		}

		.tagsmall {
			background-color: #d28041;
			color: #FFFFFF;
			font-size: 14rpx;
			padding: 0 10rpx;
			border-radius: 6rpx;
			margin-right: 6rpx;
		}

		.redtags {
			color:rgba(212 ,50, 44, 1);
			background-color: rgba(212 ,50, 44, 0.3);
			font-size: 24rpx;
			padding: 5rpx 10rpx;
			border-radius: 6rpx;
		}
	}
</style>