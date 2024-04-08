<template>
	<view class="row2 px-3">
		<view class="bg-white py-2 d-flex a-center j-sb font-weight font36 mt-4">
			<view class="">
				答复高可
			</view>
			<view class="gray d-flex a-center font-sm">
				查看更多
				<uni-icons type="right" size="16" color="#c2c2c2"></uni-icons>
			</view>
		</view>

		<view class="product mt-2">
			<view class="border-bottom d-flex a-center p-2 py-4" v-for="(item,index) in 2" :key="index">
				<view class="position-relative rounded-md overflow-hidden flex-shrink">
					<image src="" style="width: 200rpx;height: 200rpx;" class="bg-red rounded-md" mode=""></image>
					<view class="tags">
						热销
					</view>
				</view>
				<view class="pl-2 w-100 overflow-hidden">
					<view class="font32 font-weight truncate">
						啊速度快节啊速度快节啊速度快节
					</view>
					<view class=" gray truncate2">
						啊速度快节啊速度快节啊速度快节啊速度快节啊速度快节啊速度快节
					</view>
					<view class="d-flex a-center j-sb red font-sm mt-2">
						<view class="">
							¥<text class="font32">66</text>元起
						</view>
						<text class="gray">已有1216人订阅</text>
					</view>
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
		.product {
			box-shadow: 0 0 20rpx #dedede;
			border-radius: 20rpx;

			.tags {
				color: #FFF;
				background: linear-gradient(to right, #fb656b, #f93c42);
				/* 渐变样式 */
				padding: 20rpx;
				position: absolute;
				left: 0;
				bottom: 8rpx;
				border-radius: 0 10rpx 0 10rpx;
			}

			.truncate {
				overflow: hidden !important;
				text-overflow: ellipsis !important;
				white-space: nowrap !important;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
			}
		}

	}
</style>