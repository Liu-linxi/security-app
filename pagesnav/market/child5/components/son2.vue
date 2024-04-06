<template>
	<view class="son1">
		<view class=" border-bottom mx-2 bg-white" style="position: sticky;	top: 112rpx;background-color: #FFFFFF; z-index: 10;">
			<view class="d-flex py-2  text-center bg-white">
				<view class="gray flex-shrink">
					名称代码
				</view>
				<scroll-view class="scroll-view_H bg-white" scroll-x="true" @scroll="scroll" :scroll-left="scrollT">
					<view class="d-flex a-center bg-white">
						<view class="gray" v-for="(li,index) in nameList" :key="li" @click="sortChange">
							{{li}}
							<image src="" style="width: 15rpx; height: 30rpx;vertical-align: middle;" class="bg-red ml-1" mode=""></image>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

		<!-- <view class="d-flex  mx-2 heigh-item border-bottom" v-for="li in 150">
			<view class="name flex-shrink wid24">
				<view class="font32">腾讯控股</view>
				<view class="font-sm line-h-md mt-1 text-nowrap">
					<text class="tags">沪深</text>
					<text>HK7899</text>
				</view>
			</view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll"  :scroll-left="scrollT">
				<view class="d-flex a-center">
					<view class="red wid24">
						321.000
					</view>
					<view class="red  wid24">
						0.34%
					</view>
					<view class="gray wid24">
						7897892
					</view>
					<view class="gray wid24">
						7897892
					</view>
					<view class="gray wid24">
						7897892
					</view>
					<view class="gray wid24">
						7897892
					</view>
					<view class="gray wid24">
						7897892
					</view>
					<view class="gray wid24">
						7897892
					</view>
				</view>
			</scroll-view>
		</view> -->
		<view class="d-flex">
			<view class="">
				<view class="ml-2 border-bottom wid24" v-for="li in 50">
					<view class="name ">
						<view class="font32">腾讯控股</view>
						<view class="font-sm line-h-md mt-1 text-nowrap">
							<text class="tags">沪深</text>
							<text>HK7899</text>
						</view>
					</view>
				</view>
			</view>
			<view class="">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" :scroll-left="scrollT">
					<view class="d-flex a-center" v-for="li in 50">
						<view class="red wid24 border-bottom">
							321.000
						</view>
						<view class="red  wid24 border-bottom">
							0.34%
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
						<view class="gray wid24 border-bottom">
							7897892
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: [],
		data() {
			return {
				nameList: ["最新", "涨幅", "涨跌", "涨速", "换手", "量比", "总量", "金额", "市盈(动)", "市净率", "总市值"],
				nameShowTip: true,
				scrollT: 0,
			}
		},
		methods: {
			sortChange() {
				uni.showToast({
					icon: "none",
					title: "切换图片排序"
				})
			},
			scroll: function(e) {
				this.scrollT = e.detail.scrollLeft;
			},
		}
	}
</script>

<style scoped lang="scss">
	.son1 {
		background-color: #FFFFFF;

		.tags {
			background-color: #4052d9;
			color: #FFFFFF;
			padding: 4rpx;
			font-size: 10rpx;
			border-radius: 4rpx;
			margin-right: 10rpx;
		}

		.gray {
			width: 24vw;
			flex-shrink: 0;
			display: inline-block;
		}
		.wid24 {
			width: 24vw;
			height: 110rpx;
			text-align: center;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
		.scroll-view_H {
			width: 72vw;
			text-wrap: nowrap;
			align-items: center;
			background-color: #FFFFFF;
		}
	}
</style>