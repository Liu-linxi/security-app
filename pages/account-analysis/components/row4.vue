<template>
	<view class="row4">
		<view class="flex mt-1">
			<view class="width1 text-right pr-1">
				我的收益率
			</view>
			<view class="width1 width2">
				<view class="bar1 bg-green"></view>
			</view>
			<view style="height: 38rpx;background-color: #d4322c; width: 2rpx;"></view>
			<view class="width1 width2">
				<view class="bar1 bg-red"></view>
			</view>
			<view class="width1 width3 pl-1">
			</view>
		</view>
		<view class="text-center gray font-sm my-1">
			{{name!='自定义'?name:''}}跑赢{{txt}}指数<text :class="true?'red':'green'">{{true?'+':'-'}}1.09% </text>
		</view>
		<view class="flex mt-1" v-for="li in dataList">
			<view class="width1 text-right pr-1 gray">
				{{li.name}}
			</view>
			<view class="width1 width2 widthL">
				<view class="bar1 bg-green" v-show="!li.red" :style="{width:`${li.precent}%`}"></view>
			</view>
			<view style="height: 26rpx;background-color: #d4322c; width: 2rpx;"></view>
			<view class="width1 width2  widthL">
				<view class="bar1 bg-red" v-show="li.red" :style="{width:`${li.precent}%`}"></view>
			</view>
			<view class="width1 width3 pl-1">
				<text :class="li.red?'red':'green'">{{li.red?'+':'-'}}{{li.num}}</text>%
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["name"],
		data() {
			return {
				txt: "沪深300",
				dataList: [
					{ name: "上证", precent: "20", num: 0.87, red: true },
					{ name: "深证", precent: "30", num: 0.87, red: false },
					{ name: "创业板", precent: "40", num: 0.87, red: true },
					{ name: "沪深300", precent: "60", num: 0.87, red: false },
				]
			}
		},
		mounted() {
			uni.$on("row4Change", (txt) => {
				this.txt = txt;
			})
		},
		destroyed() {
			uni.$off("row4Change");
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.row4 {
		padding: 25rpx;
		background-color: #FFF;

		.flex {
			display: flex;
			align-items: center;

			.width1 {
				width: 175rpx;
				flex-shrink: 1;
			}

			.width2 {
				width: 200rpx;
				height: 30rpx;
				background-color: #e6e6e6;
				position: relative;
			}

			.widthL {
				height: 20rpx;

				.bar1 {
					position: absolute;

					&.bg-green {
						right: 0;
						top: 0;
						bottom: 0;
					}

					&.bg-red {
						left: 0;
						top: 0;
						bottom: 0;
					}
				}
			}

			.width3 {
				width: 125rpx;
			}
		}

	}
</style>