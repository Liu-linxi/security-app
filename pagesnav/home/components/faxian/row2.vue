<template>
	<view class="row2">
		<view class="my-2 bg-white pb-5 pt-3">
			<view class="p-2">
				热门专区
			</view>
			<scroll-view scroll-x="true" class="text-nowrap px-2" style="width: 94%;">
				<image src="" class="bg-red mx-2 imgs" v-for="li in 3" mode=""></image>
			</scroll-view>
		</view>
		<view class="my-2 bg-white pb-5 pt-3">
			<view class="p-2">
				热门专区
			</view>
			<view class="grid4 text-center mt-2">
				<view v-for="(item,index) in 4" :key="index">
					<image src="" style="width: 80rpx;height:80rpx;" class="bg-red rounded-circle" mode=""></image>
					<view class="">
						汕股宝
					</view>
				</view>
			</view>
		</view>
		
		<view class="my-2 bg-white pb-5 pt-3">
			<view class="p-2">
				理财专区
			</view>
			<scroll-view scroll-x="true" class="text-nowrap px-2" style="width: 94%;">
				<image src="" class="bg-red mx-2 imgs" v-for="li in 3" mode=""></image>
			</scroll-view>
		</view>
		<view class="text-center bg-white py-3">
			<image src="" style="height: 200rpx;" class="bg-red rounded-md" mode=""></image>
		</view>
		<view class="text-center pb-2 bg-white">
			我是有底线的~
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
	.row2 {
		.imgs {
			width: 38%;
			height: 170rpx;
			display: inline-block;
			border-radius: 10rpx;
			margin-right: 20rpx;
		}
	}
</style>