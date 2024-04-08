<template>
	<view class="row1">
		<view class="grid4 py-4">
			<view class="text-center" v-for="(item,index) in 4" :key="index">
				<image src="" style="width: 90rpx;height: 90rpx;" class="bg-red" mode=""></image>
				<view class="">
					阿数卡
				</view>
			</view>
		</view>
		<view class="grid5 bg-white">
			<view class="text-center" v-for="(item,index) in 5" :key="index">
				<image src="" style="width: 70rpx;height: 70rpx;" class="bg-red" mode=""></image>
				<view class="">
					阿数卡
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
		.grid4{
			 background: linear-gradient(to bottom, #ee6865, #fefffe); /* 渐变样式 */
		}
		.grid5{
			display: grid;
			grid-template-columns: repeat(5,1fr);
			grid-gap: 20rpx;
			align-items: center;
		}
	}
</style>