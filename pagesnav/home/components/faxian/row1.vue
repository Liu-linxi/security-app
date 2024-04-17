<template>
	<view class="row1 bg-white">
		<view class="d-flex a-center j-sb m-2">
			<view class="py-3">
				早报 <text class="pl-2 font-sm line-h border-left ml-2">实时掌握现在</text>
			</view>
			<view class="">
				更多 <uni-icons type="right" size="14" color="#c2c2c2"></uni-icons>
			</view>
		</view>
		<view class="px-5 d-flex ">
			<view class="text-center">
				<image src="" style="width: 200rpx;height: 130rpx;" class="bg-red" mode=""></image>
				<view class="red ">
					<text class="font36">5</text>%
				</view>
				<view class="font-sm ">
					时长情绪弱
				</view>
				<view class="font-sm gray ">
					2023-09-09
				</view>
			</view>
			<view class="truncate3 w-100 overflow-hidden ml-3 pt-2" style="height: 130rpx;">
				阿萨德拉莫斯考虑到蒙娜丽莎开发能力跨境电商南方科技独守空房辽宁大厦看来你卡萨发电量可能圣诞快乐愤怒地说李开复哪里看是否离开你发了可是对方离开你
			</view>
		</view>
		<view class="mt-4 mx-3 pb-5	" v-for="(item,index) in 3" :key="index">
			<view class="truncate2">
				工信部发布《减免车辆购置税的新能源汽车车型目录》(第四批)
			</view>
			<view class="truncate2 gray">
				工信部发布《减免车辆购置税的新能源汽车车型目录》(第四批)，小米SU7、比亚迪海豹、智界S7等在列。
			</view>
			<view class="d-flex a-center j-sb mt-3">
				<view class="font-sm gray">
					2024-04-17 00:27
				</view>
				<view class="">
					<text class="tags mr-2">凯众股份</text>
					<text class="tags">祥鑫科技</text>
				</view>
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
	.row1 {
		.tags {
			border: 1rpx solid #e8e7d3;
			background-color: #fef7ed;
			color: #dd5247;
			font-size: 20rpx;
			padding: 6rpx 20rpx;
		}
	}
</style>