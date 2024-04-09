<template>
	<view class="row1 pt-3">
		<view class="pb-3 " v-if="login">
			<view class="bg-white">
				<view class="top d-flex a-center border-bottom">
					<image src="" style="width: 100rpx;height: 100rpx;" class="bg-red rounded-circle" mode=""></image>
					<view class="ml-1">
						<view class="d-flex a-center">
							<text class="font32"> XX证券</text>
							 <uni-icons type="eye" class="mx-1" size="18"></uni-icons>
							 <view class="tags font-sm">
							 	增强安全通道
							 </view>
							 <text class="red">多账号登录</text>
						</view>
						<view class="gray font-sm mt-1">
							资金账户:****8765 **雨
						</view>
					</view>
				</view>
			</view>
			<view class="mx-2 bg-white py-3 px-5 btm">
				<view class="d-flex a-center j-sb w-100">
					<view class="">
						总资产 <text class="font-lg font-weight ml-1">￥10000.00</text>
					</view>
					<view class="redbtn">
						账户分析
					</view>
				</view>
				<view class="grid3 mt-2">
					<view v-for="(item,index) in dataList" :key="index" :class="{'border-right':index<2}">
						<view class="gray font-sm">
							{{item.name}}
							<uni-icons type="info" v-show="index==2" color="#c2c2c2" size="18"></uni-icons>
						</view>
						<view class="font32 mt-2">
							{{item.num}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white py-4 mx-3 mb-3 rounded-md" v-else>
			<view class="text-center gray font">
				啊对为群殴诶去
			</view>
			<view class="bg-red text-white login">
				交易登录
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
				login:true,
				dataList:[
					{name:"总市值",num:"0.00"},
					{name:"持仓总盈亏",num:"0.00"},
					{name:"当日参考盈亏",num:"0.00"},
				]
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
		.login{
			width: 300rpx;
			margin: 20rpx auto;
			text-align: center;
			padding: 10rpx;
			border-radius: 60rpx;
		}
		.top{
			padding: 30rpx 0;
			margin: 0 60rpx;
			background-color: #FFF;
			.tags{
				background: linear-gradient(to right, #efaf57,#e8823d);
				border-radius: 10rpx 0 10rpx 0;
				color: #FFF;
				padding: 5rpx 10rpx;
			}
			
		}
		.btm{
			border-radius: 0 0 15rpx 15rpx;
			.redbtn{
				border-radius: 30rpx;
				border: 1rpx solid #d4322c;
				padding: 10rpx 24rpx;
				color: #d4322c;
			}
		}
	}
</style>