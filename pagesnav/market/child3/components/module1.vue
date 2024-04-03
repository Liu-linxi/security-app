<template>
	<view class="module1">
		<uni-swiper-dot :info="[0,1]" :current="current" mode="dot" :dotsStyles="dotsStyles">
			<swiper class="swiper-box" @change="change" style="height: 340rpx;">
				<swiper-item v-for="(item ,index) in 2" :key="index">
					<view class="d-flex a-center j-sb px-2 pt-3">
						<view class="font32">
							行业主力净流入 (亿)
						</view>
						<view class="gray d-flex a-center">
							更多<uni-icons type="right" size="12" class="ml-1" color="#c2c2c2"></uni-icons>
						</view>
					</view>
					<echars-block />
				</swiper-item>
			</swiper>
		</uni-swiper-dot>

	</view>
</template>

<script>
	import echarsBlock from './echars-block.vue';
	export default {
		components: {
			echarsBlock
		},
		data() {
			return {
				dotsStyles: {
					// bottom: 30,
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
change(e) {
			this.current = e.detail.current;
		}
		}
	}
</script>

<style scoped lang="scss">
	.module1 {
		background-color: #FFFFFF;
	}
</style>