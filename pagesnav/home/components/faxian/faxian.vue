<template>
	<view class="faxian">
		<view class="bg-white p-3 d-flex a-center mt-2">
			<image src="" style="width: 200rpx;height: 100rpx;" class="bg-red" mode=""></image>
			<view class="overflow-hidden w-100 ml-4">
				<view class="truncate">
					啊实打实大所多啊实打实大所大所啊实打实大所多啊实打实大所大所
				</view>
				<view class="truncate">
					啊实打实大所多啊实打实大所大所啊实打实大所多啊实打实大所大所
				</view>
			</view>
		</view>
		<view class="bg-white pb-5">
			<view class="d-flex a-center j-sb m-2">
				<view class="py-3">
					风口掘金 <text class="pl-2 font-sm line-h border-left ml-2">洞口提前布局</text>
				</view>
				<view class="">
					更多 <uni-icons type="right" size="14" color="#c2c2c2"></uni-icons>
				</view>
			</view>
			<scroll-view scroll-x="true" class="text-nowrap px-2 w-100" style="width: 94%;">
				<image src="" class="bg-red mx-2 imgs" v-for="li in 3" mode=""></image>
			</scroll-view>
		</view>


		<row1 />
		<row2 />
	</view>
</template>

<script>
	import row1 from './row1.vue';
	import row2 from './row2.vue';
	export default {
		components: {
			row1,
			row2
		},
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
	.faxian {
		padding-bottom: 110rpx;

		.imgs {
			width: 70%;
			height: 700rpx;
			display: inline-block;
			border-radius: 10rpx;
			box-shadow: 0 0 20rpx #ccc;
		}
	}
</style>