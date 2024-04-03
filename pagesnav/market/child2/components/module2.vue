<template>
	<view class="module2">
		<view class="title font32 font-weight">
			市场概况
		</view>
		<view class="d-flex a-center row flex-nowrap">
			<view class="left d-flex a-center">
				<image src="" class="img" mode=""></image>
				<text class="mx-2">2132</text>
				<view class="bar" :style="{width:`${width1}rpx`}"></view>
			</view>
			<view class="center"></view>
			<view class="right d-flex a-center">
				<view class="bar" :style="{width:`${width2}rpx`}"></view>
				<text class="mx-2">2132</text>
				<image src="" class="img" mode=""></image>
			</view>
		</view>
		<view class="grid3 mt-2">
			<view class="shadow text-center py-2 rounded-md" v-for="(item,index) in 3">
				<view class="mt-1">
					昨日涨停表现
				</view>
				<view class="red mt-1" v-if="index!=0">
					3.02%
				</view>
				<view class="" v-else>
					<text class="green mr-1">11</text> : <text class="ml-1 red">65</text>
				</view>
				<view class="mt-1" v-if="index!=0">
					海泰科
				</view>
				<view class="" v-else>
					<echars-block/>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import echarsBlock from './echars-block.vue';
	export default {
		components:{
			echarsBlock
		},
		props: {

		},
		data() {
			return {
				width1: 220,
				width2: 220
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.module2 {
		background-color: #FFFFFF;
		padding: 30rpx;

		.row {
			.img {
				width: 15rpx;
				height: 20rpx;
				background-color: #41b13e;
			}

			.left {
				.bar {
					border-radius: 10rpx 0 0 10rpx;
					height: 20rpx;
					background: linear-gradient(to right, #76c874, #41b23e);
					-webkit-clip-path: polygon(0 0, 100% 0%, 97% 100%, 0% 100%);
					clip-path: polygon(0 0, 100% 0%, 97% 100%, 0% 100%);
				}
			}

			.right {
				.bar {
					border-radius: 0 10rpx 10rpx 0;
					height: 20rpx;
					background: linear-gradient(to right, #f2908f, #ee686b);
					-webkit-clip-path: polygon(3% 0%, 100% 0%, 100% 100%, 0% 100%);
					clip-path: polygon(3% 0%, 100% 0%, 100% 100%, 0% 100%);
				}
			}

			.center {
				-webkit-clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);
				clip-path: polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%);
				background-color: #656565;
				width: 20rpx;
				height: 20rpx;
			}
		}

	}
</style>