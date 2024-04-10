<template>
	<view class="child4">
		<view class="bg-white">
			<uni-swiper-dot :info="[0,1,2]" :current="current" mode="dot" :dotsStyles="dotsStyles">
				<swiper class="swiper-box" @change="change" style="height: 400rpx;">
					<swiper-item v-for="(item ,index) in 3" :key="index" style="height: 400rpx;">
						<view class="d-flex a-center j-sb py-2 px-3 border-bottom">
							<view class="d-flex a-center ">
								<image src="" style="width: 40rpx;height: 25rpx;" class="bg-red" mode=""></image>
								人民币账号
							</view>
							<view class="border line-h rounded-xs" style="padding: 5rpx 10rpx;">
								仓位
							</view>
						</view>
						<view class="grid3 px-2 pt-2">
							<view v-for="(item,index) in gridData" :key="index" class="pt-2">
								<view class="d-flex a-center text-light-muted">
									{{item.name}}
									<uni-icons type="eye" size="16" v-show="index==0"></uni-icons>
									<uni-icons type="info" size="16" v-show="index==5"></uni-icons>
									<view class="text-warning ml-1 line-h" v-show="index==4" @click="zhuanzhang">
										转账<uni-icons type="right" size="16" color="#f7a500"></uni-icons>
									</view>
								</view>
								<view class="font32">
									{{item.num}}
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="mt-2 bg-white">
			<child4-table />
		</view>
	</view>
</template>

<script>
	import child4Table from './child4-table.vue';
	export default {
		components: {
			child4Table
		},
		props: {

		},
		data() {
			return {
				dotsStyles: {
					bottom: 2,
					backgroundColor: '#dadada',
					border: '1px #dadada solid',
					selectedBackgroundColor: '#9e9e9e',
					selectedBorder: '1px  #878787 solid'
				},
				current: 0,
				gridData: [
					{ name: "总资产", num: "100.00" },
					{ name: "总盈亏", num: "0.00" },
					{ name: "总市值", num: "0.00" },
					{ name: "可用", num: "100.00" },
					{ name: "可取", num: "100.00" },
					{ name: "当日参考盈亏", num: "100.00" },
				]
			}
		},
		mounted() {

		},
		methods: {
			zhuanzhang() {
				uni.showToast({
					icon: 'none',
					title: '转账'
				})
			},
			change(e) {
				this.current = e.detail.current;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.child4 {
		.text-warning {
			color: #f7a500;
			border: 1rpx solid #f7a500;
		}
	}
</style>