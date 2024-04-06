<template>
	<view class="module1">
		<view class="grid3 bg-white p-2">
			<view class="text-center" v-for="li in 2" :key="li">
				<view class=" font32">
					恒生指数
				</view>
				<view class="font32 green">
					1232.23
				</view>
				<view class="green font-sm">
					-124.2 <text class="ml-2">-0.34%%</text>
				</view>
			</view>
			<view class="text-center a-center">
					坏事单位 <uni-icons type="right" size="12" class="" color="#c2c2c2"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.module1 {
		padding: 20rpx 0;
	}
</style>