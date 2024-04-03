<template>
	<view class="module4">
		<view class="title font32 font-weight d-flex j-sb a-center">
			热点板块
			<image src="" class="img" mode="" @click="tochange"></image>
		</view>
		
		<view class=" mt-3">
			<scroll-view :scroll-x="true" class="text-nowrap w-100">
				<view class="item" v-for="(li,index) in list1" :class="{red:listIndex==index}" :key="li" @click="listIndex=index">
					{{li}}
				</view>
			</scroll-view>
		</view>
		<view class="mt-3">
			<scroll-view :scroll-x="true" class="text-nowrap w-100">
				<view class="rounded-md text-center" v-for="li in 5">
					<view class="pt-3">
						染料
					</view>
					<view class="red mt-1 font-weight">
						0.08%
					</view>
				</view>
				<view class="rounded-md text-center" style="box-shadow: none;">
					<view class="pt-5 gray">
						更多 <uni-icons type="right" size="12" class="ml-1" color="#c2c2c2"></uni-icons>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['index'],
		data(){
			return{
				list1:["今日涨幅最大","资金流入最多","5日涨幅最大"],
				listIndex:0,
			}
		},
		mounted() {
			
		},
		methods:{
			async tochange(){
				const [err, res] = await uni.showModal({
					content: "确定将热点板块置顶吗"
				})
				if (res.confirm) this.$emit("orderChange", this.index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.module4{
		background-color: #FFFFFF;
		padding: 30rpx;
		.img {
			width: 15rpx;
			height: 20rpx;
			background-color: #41b13e;
		}
		.item {
			display: inline-block;
			text-align: center;
			background-color: #f6f6f6;
			border: 1px solid #f6f6f6;
			padding: 15rpx 30rpx;
			border-radius: 8rpx;
			margin-right: 30rpx;
			&.red {
				background-color: #FFFFFF;
				border-color: #d4322c;
			}
		}
		.rounded-md{
			display: inline-block;
			width: 210rpx;
			height: 140rpx;
			margin: 20rpx 15rpx;
			box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.2);
			vertical-align: middle;
		}
	}
</style>