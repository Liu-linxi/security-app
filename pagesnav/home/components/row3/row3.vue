<template>
	<view class="home">
		<view class="topbg">
			暂无更新
		</view>
		<row-tabs :activeIndex="activeIndex" @changeActive="changeActive" />
		<view class="bg-white mt-3" style="padding-bottom: 110rpx;">
			<view class="gray pl-2">XX年XX月XX日</view>
			<view class="d-flex flex_list my-2">
				<view class="left">
				</view>
				<view class="right pl-1 " style="width: 690rpx;">
					<view class="" v-for="(item,index) in 29" :class="item==1?'red':''">
						<view class="time my-2" :class="item==1?'redCircle':'grayCircle'">
							11.23
						</view>
						<view class="">
							<view class="font-weight font36 truncate3">
								暗色调哈十多年的VN升宽带发你的开始你房间看电视金风科技黄金时代客服很快的流口水的卡萨饿我去啊暗色调哈十多年的VN升宽带发你的开始你房间看电视金风科技黄金时代客服很快的流口水的卡萨饿我去啊
							</view>
							<view class="truncate3">
								暗色调哈十多年的VN升宽带发你的开始你房间看电视金风科技黄金时代客服很快的流口水的卡萨饿我去啊暗色调哈十多年的VN升宽带发你的开始你房间看电视金风科技黄金时代客服很快的流口水的卡萨饿我去啊暗色调哈十多年的VN升宽带发你的开始你房间看电视金风科技黄金时代客服很快的流口水的卡萨饿我去啊
							</view>
						</view>
						<view class="d-flex my-2">
							<view class="tags text-dark mr-2" v-for="li in 2">
								萨的痕迹<text class="green ml-1">-0.89%</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import rowTabs from './components/row-tabs.vue';
	export default {
		components: {
			rowTabs
		},
		data() {
			return {
				activeIndex: 0
			}
		},
		mounted() {

		},
		methods: {
			changeActive(index) {
				this.activeIndex = index;
			},
		}
	}
</script>
<!-- -->
<style lang="scss" scoped>
	.home {
		.topbg {
			color: #498cdb;
			text-align: center;
			line-height: 2.4;
			background-color: rgba(73, 140, 219, 0.3)
		}

		.flex_list {
			padding: 0 10rpx;

			.left {
				width: 4rpx;
				margin: 0 20rpx;
				background-color: #c2c2c2;
			}

			.right {
				.time {
					font-size: 28rpx;
					color: #c2c2c2;
					position: relative;

					&::after {
						content: "";
						display: block;
						width: 8rpx;
						height: 8rpx;
						border-radius: 8rpx;
						position: absolute;
						left: -40rpx;
						top: 50%;
						transform: translate(0, -50%);
					}
				}

				.grayCircle {
					&::after {
						background-color: #c2c2c2;
						border: 4rpx solid #dadada;
					}
				}

				.redCircle {
					&::after {
						background-color: #d4322c;
						border: 4rpx solid rgba(212, 108, 90, 0.4);
					}
				}
				.tags{
					background-color: #eeeeee;
					padding: 0 20rpx;
					border-radius: 4rpx;
				}
			}
		}
	}
</style>