<template>
	<view class="row3">
		<view class="grid px-3 text-nowrap font">
			<view class="d-flex a-center">
				<text class="blue mr-3">我的</text>
				<image src="" style="width: 40rpx;height: 40rpx;" class="bg-red" mode=""></image>
			</view>
			<view v-for="(item,index) in changeData" @click="changeCli(index)" :key="index" class="item" :class="{active:changeIndex==index}">
				{{item}}
			</view>
		</view>
		<row3-echars ref="echars"/>
	</view>
</template>

<script>
	import row3Echars from './row3-echars.vue';
	export default {
		components: {
			row3Echars
		},
		data() {
			return {
				changeData: ["沪深300", "上证", "深证", "创业板"],
				changeIndex: 0
			}
		},
		methods: {
			changeCli(index) {
				this.changeIndex = index;
				this.$refs.echars.changeData([0.2, -1.4, 0.7, -0.6,1.8, -1.4])
			}
		}
	}
</script>

<style scoped lang="scss">
	.row3 {
		background-color: #FFFFFF;

		.grid {
			@include grid-custom(2fr repeat(4, 1fr)) .blue {
				width: 100rpx;
				line-height: 1.5;
				border: 1rpx solid #498cdb;
				border-radius: 10rpx;
				background-color: #f8f7fe;
				text-align: center;
			}

			.item {
				width: 100rpx;
				text-align: center;
				line-height: 1.5;
				border: 1rpx solid #7c7c7c;
				border-radius: 10rpx;
				color: #7c7c7c;

				&.active {
					border-color: #d4322c;
					background-color: #fcf5f3;
					color: #d4322c;
				}
			}
		}
	}
</style>