<template>
	<view class="row1">
		<view class="top">
			<view class="d-flex a-center pl-2" style="padding-top: 100rpx;">
				<image src="" style="width: 80rpx;height: 80rpx;" class="bg-white flex-shrink rounded-circle" mode=""></image>
				<view class="text-white ml-2" v-if="login==0">
					<view class="font36">
						登录/注册
					</view>
					<view class="font36">
						欢迎来到证券
					</view>
				</view>
				<view class="d-flex text-white a-center j-sb mx-3 w-100" v-if="login==1||login==2">
					<view class="">
						183****6982
					</view>
					<view class="border border-white rounded-circle d-flex a-center px-3 py-1">
						<image src="" style="width: 40rpx;height: 40rpx;" class="bg-white mr-1" mode=""></image>
						签到
					</view>
				</view>
			</view>
		</view>
		<view class="panel">
			<view v-if="login==0||login==1">
				<view class="d-flex j-sb a-center pb-5">
					<view class="font32 font-weight">
						总览
					</view>
					<view class="gray">
						尚未开户，<text class="red">立即开户</text>
						<uni-icons type="right" size="14" color="#d4322c"></uni-icons>
					</view>
				</view>
				
				<view class="mt-5">
					<view class="gray text-center">
						请登录后查看资产详倩
					</view>
					<view class="btn bg-red text-white m-auto py-1 text-center rounded-circle my-2 mt-3">
						交易登录
					</view>
				</view>
			</view>
			<view v-if="login==2">
				<view class=" font36 font-weight">
					资产总览 <uni-icons type="eye" class="ml-2" size="18"></uni-icons>
				</view>
				<view class="grid2 mt-3">
					<view class="" v-for="(item,index) in 4">
						<view class="gray">
							总资产(元)
						</view>
						<view class="font36">
							10000.00
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="grid4 mt-2  mx-2  p-2 bg-white rounded-lg">
			<view class="text-center" v-for="(item,index) in 4" :key="index">
				<image src="" style="width: 90rpx;height: 90rpx;" class="bg-red" mode=""></image>
				<view class="">
					爱上大
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			
		},
		data(){
			return{
				login:2
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.row1{
		.top{
			background: linear-gradient(to right, #ed4b3c, #fe705c);
			height: 450rpx;
		}
		.panel{
			margin:  0 20rpx;
			border-radius: 20rpx;
			background-color: #FFF;
			margin-top: -100rpx;
			padding: 30rpx 30rpx 50rpx;
			.btn{
				width: 200rpx;
			}
		}
		.grid2{
			@include grid-layout(2)
		}
	}
</style>