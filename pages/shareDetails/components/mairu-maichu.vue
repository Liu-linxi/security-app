<template>
	<view class="mairumaichu">
		<uni-popup ref="mairu" type="bottom" mask-background-color="rgba(0,0,0,0)">
			<view class="popup p-3 " :class="typeColor==0?'redblock':'blueblock'">
				<view class="d-flex a-center j-sb">
					<view class="d-flex a-center">
						<uni-icons type="left" size="18" @click="$refs.mairu.close()" color="#c2c2c2"></uni-icons>
						普通交易 ****4536
					</view>
					<uni-icons type="closeempty" size="18" @click="$refs.mairu.close()" color="#c2c2c2"></uni-icons>
				</view>
				<view class="d-flex a-center mt-3">
					<view class="border">
						<u-number-box v-model="numberValue">
							<view slot="minus" class="minus bg-light-secondary p-2">
								<u-icon name="minus" size="16" :color="typeColor==0?'#d4322c':'#2979ff'"></u-icon>
							</view>
							<uni-easyinput slot="input" v-model="numberValue" :inputBorder="false" style="text-align: center;" :clearable="false" placeholderStyle="font-size:14px;text-align: center;" placeholder="价格"></uni-easyinput>
							<view slot="plus" class="plus bg-light-secondary p-2">
								<u-icon name="plus" :color="typeColor==0?'#d4322c':'#2979ff'" size="16"></u-icon>
							</view>
						</u-number-box>
					</view>
					<view class="border ml-3">
						<u-number-box v-model="numberValue1">
							<view slot="minus" class="minus bg-light-secondary p-2">
								<u-icon name="minus" size="16" :color="typeColor==0?'#d4322c':'#2979ff'"></u-icon>
							</view>
							<uni-easyinput slot="input" v-model="numberValue1" :inputBorder="false" style="text-align: center;" :clearable="false" placeholderStyle="font-size:14px;text-align: center;" placeholder="数量"></uni-easyinput>
							<view slot="plus" class="plus bg-light-secondary p-2">
								<u-icon name="plus" :color="typeColor==0?'#d4322c':'#2979ff'" size="16"></u-icon>
							</view>
						</u-number-box>
					</view>
				</view>
				<view class="d-flex a-center j-sb mt-2 font-sm">
					<view class="">
						<text class="bg-light-secondary px-1">跌停<text class="green"> 10.53</text></text>
						<text class="bg-light-secondary ml-2 px-1">涨停<text class="green"> 15.79</text></text>
					</view>
					<view class="">
						可买<text class="u-warning">700</text>股
					</view>
				</view>
				<view class="grid5 mt-2">
					<view class="font-sm rounded-sm text-center" style="border:1rpx solid #c2c2c2;" v-for="(item,index) in 5" :key="index">
						全仓
					</view>
				</view>
				<view class="text-center my-2 text-white rounded-sm py-2 btnDisa" @click="toClick" :class="{btn:numberValue && numberValue1}">
					{{typeColor==0?'买入':'卖出'}}
				</view>
			</view>
		</uni-popup>


		<uni-popup ref="cums" type="bottom" mask-background-color="rgba(0,0,0,0)">
			<view class="popup p-3" style="min-height: 380rpx;">
				<view class="d-flex a-center j-sb">
					<view class="d-flex a-center">
						<uni-icons type="left" size="18" @click="$refs.mairu.close()" color="#c2c2c2"></uni-icons>
						普通交易 ****4536
					</view>
					<view class="d-flex a-center">
						<uni-icons type="refreshempty" size="18" @click="$refs.mairu.close()" class="mr-2" color="#c2c2c2"></uni-icons>
						<uni-icons type="closeempty" size="18" @click="$refs.mairu.close()" color="#c2c2c2"></uni-icons>
					</view>
				</view>
				<view class="grid4 pt-1">
					<view class="text-center text-light-muted" v-for="(item,index) in list" :key="index">
						{{item}}
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				typeColor: 0,
				numberValue: 0,
				numberValue1: null,
				list: ["委托时间", "委托/均价", "委托/成交", "状态"]
			}
		},
		mounted() {

		},
		methods: {
			toClick() {
				if (!this.numberValue && !this.numberValue1) return
				if (this.typeColor == 0) {
					uni.showToast({
						title: "买入"
					})
				} else {
					uni.showToast({
						title: "卖出"
					})
				}
			},
			mariShow(type = 0) {
				this.numberValue = 0;
				this.numberValue1 = null;
				this.typeColor = type;
				this.$refs.mairu.open()
			},
			cumsShow() {
				this.$refs.cums.open()
			},

		}
	}
</script>

<style lang="scss" scoped>
	.mairumaichu {
		.popup {
			background-color: #FFFFFF;
			padding-bottom: 30rpx;
			border-radius: 30rpx 30rpx 0 0;
			box-shadow: 0 0 10rpx #a2a2a2;

			.grid5 {
				@include grid-layout(5)
			}
		}

		.redblock {
			.border {
				border: 1rpx solid #d4322c;
				border-radius: 10rpx;
			}

			.btnDisa {

				background-color: rgba(212, 50, 44, 0.7);
			}

			.btn {
				background-color: #d4322c;
			}
		}

		.blueblock {
			.border {
				border: 1rpx solid #2979ff;
				border-radius: 10rpx;
			}

			.btnDisa {
				background-color: rgba(41, 121, 255, 0.7);
			}

			.btn {
				background-color: #2979ff;
			}
		}
	}
</style>