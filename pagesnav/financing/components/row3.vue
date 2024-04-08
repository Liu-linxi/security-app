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

		<view class="product mt-2 p-2">
			<u-tabs :list="list1" @click="click" lineColor="#d4322c"></u-tabs>
			<view class="border-bottom d-flex a-center py-4" v-for="(item,index) in 3" :key="index">
				<view class="pr-2 w-100 overflow-hidden d-flex flex-column j-sb">
					<view class="font32 font-weight truncate2">
						啊速度快节啊速度快节啊速度快节
					</view>
					<view class="gray d-flex j-sb a-center font-sm">
						<view class="">
							<image src="" style="width: 30rpx;height: 30rpx;" class="bg-red" mode=""></image>
						</view>
						<view class="">
							22:32
						</view>
					</view>
				</view>
				<image src="" style="width: 230rpx;height: 130rpx;" class="bg-red rounded-md" mode=""></image>
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
				list1: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}]
			}
		},
		mounted() {

		},
		methods: {
			click(item) {
				console.log('item', item);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row2 {
		.product {
			box-shadow: 0 0 20rpx #e2e2e2;
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