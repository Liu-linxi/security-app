<template>
	<view class="son2">
		<view class="grid">
			<view class="ml-2">
				<scroll-view scroll-y :style="{height:`${height}px`}" @scroll="comHeight" :scroll-top="scollTop">
					<view class="height-item d-flex a-center font-sm gray">
						编辑<image src="" style="width: 40rpx;height: 40rpx; vertical-align: text-bottom;" class="bg-red ml-1" mode=""></image>
					</view>
					<view class="height-item" v-for="li in 13">
						<view class="">
							阿松大水
						</view>
						<view class="gray">
							{{li}}
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="">
				<swiper :style="{height:`${height}px`}">
					<swiper-item>
						<!-- 1 -->
						<scroll-view scroll-y :style="{height:`${height}px`}" @scroll="comHeight" :scroll-top="scollTop">
							<view class="grid2">
								<view class="height-item gray  d-flex a-center j-sa">
									分时预览
								</view>
								<view class="height-item gray d-flex a-center j-end pr-1">
									涨幅
								</view>
							</view>
							<view class="grid2" v-for="li in 13">
								<view class="height-item">
									<echars-block/>
								</view>
								<view class="height-item">
									<view class="" style="height: 10rpx;"></view>
									<view class="bg-green text-center rounded-xs btn text-white line-h">
										-0.44%
									</view>
									<view class="gray font-sm line-h text-right pr-2">
										2323.33
									</view>
								</view>
							</view>
							
						</scroll-view>
					</swiper-item>
					<swiper-item>
						<scroll-view scroll-y :style="{height:`${height}px`}" @scroll="comHeight" :scroll-top="scollTop">
							<son2-table></son2-table>
						</scroll-view>
					</swiper-item>
				</swiper>
				

			</view>
		</view>
	</view>
</template>

<script>
	import son2Table from './son2-table.vue';
	import echarsBlock from './echars-block.vue';
	export default {
		components: {
			son2Table,
			echarsBlock
		},
		data() {
			return {
				height: 0,
				scollTop:0,
			}
		},
		mounted() {
			const info = uni.getWindowInfo();
			console.log(info);
			this.height = info.windowHeight - 130;
		},
		methods: {
			rowClick() {},
			comHeight(e) {
				this.scollTop = e.detail.scrollTop;
			}
		}
	}
</script>

<style scoped lang="scss">
	.son2 {
		background-color: #FFFFFF;

		.grid {
			display: grid;
			grid-template-columns: 1fr 4fr;
			grid-area: 20rpx;
		}

		.height-item {
			height: 78rpx;
			vertical-align: middle;
			border-bottom: 1rpx solid #dee2e6;
		}
		.grid2{
			display: grid;
			grid-template-columns: 3fr 2fr;
			grid-area: 20rpx;
		}
		.gray{
			color: #797979;
		}
		.btn{
			padding: 9rpx 0;
			
			margin: 0 20rpx;
		}
	}
</style>