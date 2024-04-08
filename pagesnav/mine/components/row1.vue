<template>
	<view class="row1">
		<view class="top">
			<view class="d-flex a-center pl-2" style="padding-top: 100rpx;">
				<image src="" style="width: 80rpx;height: 80rpx;" class="bg-white rounded-circle" mode=""></image>
				<view class="text-white ml-2">
					<view class="font36">
						登录/注册
					</view>
					<view class="font36">
						asdasdcxscaskjl
					</view>
				</view>
			</view>
		</view>
		<view class="panel">
			<view class="d-flex j-sb a-center pb-5">
				<view class="font32 font-weight">
					总览
				</view>
				<view class="gray">
					按时给大，<text class="red">萨达胡撒</text>
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
			padding: 30rpx 30rpx 60rpx;
			.btn{
				width: 200rpx;
			}
		}
		
	}
</style>