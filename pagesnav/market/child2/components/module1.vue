<template>
	<view class="module1" >
		<view class="title">
			<image src="" class="img bg-red" mode=""></image>
			<text class="font32 font-weight">已收盘</text>
		</view>
		<view class="gray font22 mt-1">
			2024-04-02 星期二
		</view>
		<view class="mt-3">
			<scroll-view :scroll-x="true" class="text-nowrap w-100">
				<view class="mx-1 my-1 rounded-md text-center" v-for="li in 5">
					<view class="mt-3">
						上证指数
					</view>
					<view class="green mt-2 font-weight">
						3074.96
					</view>
					<view class="green font24 mt-1">
						-2.42 -0.08%
					</view>
				</view>
			</scroll-view>
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
	.module1{
		background-color: #FFFFFF;
		padding: 60rpx 30rpx 30rpx;
		.title{
			display: flex;
			align-items: center;
			.img{
				width: 40rpx;
				height: 40rpx;
				margin-right: 10rpx;
			}
		}
		.rounded-md{
			display: inline-block;
			width: 210rpx;
			height: 210rpx;
			box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.2);
			background: linear-gradient(to bottom, #ffffff, #f3fcf3);
		}
	}
</style>