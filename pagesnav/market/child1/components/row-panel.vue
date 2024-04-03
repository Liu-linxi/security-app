<template>
	<view class="row-panel">
		<view class="border-bottom pb-2 d-flex a-center j-sb">
			<view class="d-flex a-center">
				{{title}}
				<u-icon v-if="title=='股指期货'" name="info-circle" size="14" class="ml-1" color="#c2c2c2"></u-icon>
			</view>
			<view class="gray d-flex a-center">
				更多<uni-icons type="right" size="12" class="ml-1" color="#c2c2c2"></uni-icons>
			</view>
		</view>
		<view class="grid3">
			<view class="text-center pt-2" v-for="li in list">
				<view class="font32">
					上证指数
				</view>
				<view class="font36 green">
					234.32
				</view>
				<view class="font-sm" :class="li==2?'red':'green'">
					-10.0 -0.78%
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["title","list"],
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.row-panel {
		background-color: #FFFFFF;
		padding: 20rpx 30rpx;

	}
</style>