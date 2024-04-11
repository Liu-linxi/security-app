<template>
	<view class="row6 mt-2 bg-white">
		<view class="d-flex a-center j-sb px-3 py-2">
			<view class=" font36">
				我的投资能力<uni-icons type="info" size="20" class="ml-1"></uni-icons>
			</view>
			<view class="gray">
				详情
			</view>
		</view>
		<view class="text-center mt-2">
			<image src="" style="width: 300rpx;height: 340rpx;" class="bg-red" mode=""></image>
		</view>
		<view class="flex">
			<view class="block">
				<view class="gray">我的表现</view>
				<view class="d-flex j-sa mt-1">
					<u-rate  allowHalf v-model="value" size="14" inactiveColor="#FA3534"></u-rate>
				</view>
			</view>
			<image src="" style="width: 80rpx;height: 80rpx;" class="bg-red mx-2" mode=""></image>
			<view class="block">
				<view class="gray">全民股民</view>
				<view class="d-flex j-sa mt-1">
					<u-rate allowHalf v-model="value" size="14" activeColor="#6381f7" inactiveColor="#6381f7"></u-rate>
				</view>
			</view>
		</view>
		<row6-echarts />

	</view>
</template>

<script>
	import row6Echarts from './row6-echarts.vue';
	export default {
		components: {
			row6Echarts
		},
		props: {

		},
		data() {
			return {
				value: 3.5
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.row6 {
		.flex {
			display: flex;
			align-items: center;
			margin: 20rpx 60rpx;

			.block {
				padding: 14rpx 0;
				width: 270rpx;
				background-color: #ececec;
				border-radius: 8rpx;
				text-align: center;

				.gray {
					color: #7d7d7d;
				}
			}
		}
	}
</style>