<template>
	<view class="row1">
		<view class="grid5">
			<view class="text-center" v-for="(item,index) in 10" :key="index">
				<image src="" style="width: 60rpx;height: 60rpx;" class="bg-red" mode=""></image>
				<view class="line-h">
					测试
				</view>
			</view>
		</view>
		<view class="px-3 bg-white">
			<u-swiper :list="list5" @change="e => current = e.current" :autoplay="false">
				<view slot="indicator" class="indicator">
					<view class="indicator__dot" v-for="(item, index) in list5" :key="index" :class="[index === current && 'indicator__dot--active']">
					</view>
				</view>
			</u-swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list5: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				current:0
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.row1 {
		background-color: #e72f2f;
		padding-top: 50rpx;

		.grid5 {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-gap: 60rpx 20rpx;
			align-items: center;
			background-color: #FFFFFF;
			border-radius: 30rpx 30rpx 0 0;
			padding: 40rpx;
		}

		.indicator {
			@include flex(row);
			justify-content: center;

			&__dot {
				height: 6px;
				width: 6px;
				border-radius: 100px;
				background-color: rgba(255, 255, 255, 0.35);
				margin: 0 5px;
				transition: background-color 0.3s;

				&--active {
					background-color: #d4322c;
				}
			}
		}
	}
</style>u