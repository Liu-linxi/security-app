<template>
	<view class="child1">
		<view class="top">
			<view class="left pl-2 pr-1 py-1 ">
				<view class="borderred">
					<uni-easyinput v-model="value1" :inputBorder="false" placeholderStyle="font-size:14px;text-align: center;" placeholder="代码/简拼" :clearable="false"></uni-easyinput>
				</view>
				<view class="d-flex mt-2">
					<view class="bg-red text-white px-1 mr-2">
						<view class="">
							限
						</view>
						<view class="">
							价
						</view>
					</view>
					<view class="borderred px-2">
						<u-number-box v-model="numberValue" >
							<view slot="minus" class="minus">
								<u-icon name="minus" size="16" color="#d4322c"></u-icon>
							</view>
							<uni-easyinput slot="input" v-model="numberValue" :inputBorder="false" style="text-align: center;" :clearable="false" placeholderStyle="font-size:14px;text-align: center;" placeholder="价格"></uni-easyinput>
							<view slot="plus" class="plus">
								<u-icon name="plus" color="#d4322c" size="16"></u-icon>
							</view>
						</u-number-box>
					</view>
				</view>
				<view class="d-flex j-sb a-center my-1">
					<view>--</view>
					<view>--</view>
				</view>
				<view class="borderred px-2">
					<u-number-box v-model="numberValue1" >
						<view slot="minus" class="minus">
							<u-icon name="minus" size="16" color="#d4322c"></u-icon>
						</view>
						<uni-easyinput slot="input" v-model="numberValue1" :inputBorder="false" style="text-align: center;" :clearable="false" placeholderStyle="font-size:14px;text-align: center;" placeholder="数量"></uni-easyinput>
						<view slot="plus" class="plus">
							<u-icon name="plus" color="#d4322c" size="16"></u-icon>
						</view>
					</u-number-box>
				</view>
				<view class="  gray font-sm my-1">
					可买--股
				</view>
				<view class="grid4 mt-2">
					<view class="font-sm rounded-sm text-center" style="border:1rpx solid #c2c2c2;" v-for="(item,index) in 4" :key="index">
						全仓
					</view>
				</view>
				<view class="bg-red text-center my-2 text-white rounded-sm py-2">
					买入
				</view>
			</view>
			<view class="right">
				<view class="row1  d-flex flex-column j-sa">
					<view class="grid3 text-center text-nowrap" v-for="(item,index) in 5" :key="index">
						<view class="text-left">
							卖{{item}}
						</view>
						<view>
							--
						</view>
						<view>
							--
						</view>
					</view>

				</view>
				<view class="row2  d-flex flex-column j-sa">
					<view class="grid3 text-center text-nowrap" v-for="(item,index) in 5" :key="index">
						<view class="text-left">
							买{{item}}
						</view>
						<view>
							--
						</view>
						<view>
							--
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
				value1: "",
				numberValue: null,
				numberValue1:null,
			}
		},
		mounted() {

		},
		methods: {
			changeValue(value) {
				this.numberValue = value
			},
		}
	}
</script>

<style lang="scss" scoped>
	.child1 {
		.top {
			@include grid-custom(3fr 2fr);
			background-color: #FFF;
			padding: 20rpx;
			height: 600rpx;
			background-color: #FFF;

			.left {
				height: 600rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.borderred{
					border:  1rpx solid #d4322c;
					border-radius: 8rpx;
				}
				.grid4{
					
				}
			}


			.right {
				border: 1px solid #e7e5e6;

				.row1 {
					height: 299rpx;
					border-bottom: 1px solid #e7e5e6;
				}

				.row2 {
					height: 300rpx;
				}
			}
		}
	}
</style>