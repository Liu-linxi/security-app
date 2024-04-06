<template>
	<view class="son1-popup">
		<uni-popup ref="popup" type="top">
			<view class="popupconTant">
				<view class="pl-1">
					深
					<text class="green mx-1">76867.23</text>
					<text class="green">-87.23</text>
					<text class="green mx-1">-76.23%</text>
					213.23亿
				</view>
				<view class="grid mx-1">
					<view class="">
						<uni-swiper-dot :info="[0,1]" :current="current" mode="dot" :dotsStyles="dotsStyles">
							<swiper class="swiper-box" @change="change" style="height: 42vh;">
								<swiper-item v-for="(item ,index) in 2" :key="index">
									<view class="" style="height: 28vh;">
										顶部{{item}}
									</view>
									<view class="" style="height: 14vh;">
										底部统计{{item}}
									</view>
								</swiper-item>
							</swiper>
						</uni-swiper-dot>

					</view>
					<view class="d-flex flex-column j-sa mr-1" style="height: 42vh;">
						<view class="panel  py-2 rounded-sm bg-red text-center px-1" v-for=" (li,index) in 4" :key="li" @click="tabIndex=index" :class="tabIndex==index?'bg-red text-white':'bg-white'">
							<view class="">
								沪
							</view>
							<view class="font-sm " :class="tabIndex==index?' text-white':'green'">
								-23.45%
							</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				dotsStyles: {
					bottom: 2,
					backgroundColor: '#c2c2c2',
					border: '1px #c2c2c2 solid',
					color: '#ffaa00',
					selectedBackgroundColor: ' rgba(212 ,50, 44, 0.3)',
					selectedBorder: '1px  rgba(212 ,50, 44, 0.3) solid'
				},
				current:0,
			}
		},
		methods: {
			showPopup() {
				this.$refs.popup.open()
			},
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style scoped lang="scss">
	.son1-popup {
		.grid {
			display: grid;
			grid-template-columns: 9fr 1fr;
			align-items: center;
			grid-area: 20rpx;

			.panel {}
		}

		.popupconTant {
			padding-top: 100rpx;
			height: 45vh;
			background-color: #e8e8e8;
		}
	}
</style>