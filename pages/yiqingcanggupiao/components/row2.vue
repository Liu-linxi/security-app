<template>
	<view class="row2 mt-2 bg-white p-3">
		<view class="font36 font-weight">
			交易数据统计 <uni-icons type="info" size="18" color="#c2c2c2"></uni-icons>
		</view>
		<view class="item d-flex a-center text-center py-2">
			<view class="w-50 flex-shrink border-right">
				<view class="">
					12
				</view>
				<view class="gray">
					交易殷票数
				</view>
			</view>
			<view class="w-50 flex-shrink">
				<view class="">
					12
				</view>
				<view class="gray">
					平均持股天数
				</view>
			</view>
		</view>
		<view class="item d-flex a-center text-center py-2 mt-2">
			<view class="w-50 flex-shrink border-right">
				<view class="">
					41.67%
				</view>
				<view class="gray">
					胜率
				</view>
			</view>
			<view class="w-50 flex-shrink">
				<view class="red">
					2.39%
				</view>
				<view class="gray">
					区问收益事
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.row2 {
		.item{
			background-color: #f6f6f6;
			border-radius: 8rpx;
		}
		.gray{
			color: #c2c2c2;
		}
	}
</style>