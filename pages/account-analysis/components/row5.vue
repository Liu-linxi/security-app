<template>
	<view class="row5 mt-2">
		<view class="bg-white">
			<view class="d-flex a-center j-sb px-3 py-2">
				<view class="font36">
					股票交易分析
				</view>
				<view class="gray">
					详情
				</view>
			</view>
			<view class="p-2 mx-1 mt-3">
				<view class="grid4 rounded-sm">
					<view v-for="(item,index) in 4" class="text-center my-2" :class="{'border-right':index<3}" :key="index">
						<view class="">
							0个
						</view>
						<view class="" style="color:#999999 ;">
							交易股票
						</view>
					</view>
				</view>
			</view>
			<view class="pb-5 mt-2">
				<view class="pb-3 ">
					<view class="orange">
						盈利TOP3
					</view>
					<view class="text-center mt-2">
						<image src="" style="width: 120rpx;height: 120rpx;" class="bg-red" mode=""></image>
						<view class="gray">
							您没有盈利的股票
						</view>
					</view>
				</view>
				<view class="">
					<view class="blue">
						亏损TOP3
					</view>
					<view class="text-center mt-2">
						<image src="" style="width: 120rpx;height: 120rpx;" class="bg-red" mode=""></image>
						<view class="gray">
							您没有亏损的股票
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white mt-2">
			<view class="d-flex a-center j-sb px-3 py-2">
				<view class="font36">
					理财交易分析
				</view>
				<view class="gray">
					详情
				</view>
			</view>
			<view class="p-2 mx-1 mt-2">
				<view class="grid3 rounded-sm">
					<view v-for="(item,index) in 3" class="text-center my-2" :class="{'border-right':index<3}" :key="index">
						<view class="">
							0个
						</view>
						<view class="" style="color:#999999 ;">
							交易数量
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg-white mt-2">
			<view class="d-flex a-center j-sb px-3 py-2">
				<view class="font36">
					债券交易分析
				</view>
				<view class="gray">
					详情
				</view>
			</view>
			<view class="p-2 mx-1 mt-2">
				<view class="grid3 rounded-sm">
					<view v-for="(item,index) in 3" class="text-center my-2" :class="{'border-right':index<3}" :key="index">
						<view class="">
							0个
						</view>
						<view class="" style="color:#999999 ;">
							交易数量
						</view>
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
	.row5 {

		.grid4,
		.grid3 {
			background-color: #f6f6f6;
		}

		.orange {
			text-align: center;
			line-height: 2.5;
			color: #ffaa00;
			background: radial-gradient(circle at center, #ffe5a6, #ffffff);
		}

		.blue {
			text-align: center;
			line-height: 2.5;
			color: #2979ff;
			background: radial-gradient(circle at center, #75bfff, #ffffff);
		}
	}
</style>