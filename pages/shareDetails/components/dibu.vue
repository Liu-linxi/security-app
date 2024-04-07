<template>
	<view class="dibu">
		<view class="grid5 pt-1">
			<view class="text-center" @click="changePop1">
				<view class="d-flex j-sa">
					<u-icon :name="pop1?'arrow-down-fill':'arrow-up-fill'" color="#909399" size="14"></u-icon>
				</view>
				<view class="green">
					{{objList[objIndex].num}}
				</view>
				<view class="gray font-sm">
					{{objList[objIndex].name}}
				</view>
			</view>
			<view class="text-center" v-for="(li,index) in 4" @click="showPopup(index)">
				<image src="" style="width: 50rpx; height: 50rpx;" class="bg-red" mode=""></image>
				<view class="line">
					阿萨德
				</view>
			</view>
		</view>

		<uni-transition mode-class="fade" class="topPopup" :show="pop1" @click="pop1=false">
			<view class="pop1" @click.stop="">
				<view class="">
					图
				</view>
				<view class="d-flex flex-column j-sa mx-2">
					<view class="">
						<view class="text-center">
							<view class="">
								{{objList[objIndex].name}}
							</view>
							<view class="green">
								{{objList[objIndex].num}}
							</view>
							<view class="green ">
								-23.3 <text class="ml-2">43%</text>
							</view>
						</view>
					</view>
					<view class="text-center bttn" :class="{active:objIndex==index}" @click="objIndex=index" v-for="(item,index) in objList">
						{{item.name}}
					</view>
				</view>
			</view>
		</uni-transition>

		<uni-popup ref="popup" type="bottom" mask-background-color="rgba(0,0,0,0)">
			<view class="popup p-3">
				<view class="d-flex a-center j-sb">
					普通交易
					<uni-icons type="closeempty" size="18" @click="$refs.popup.close()" color="#c2c2c2"></uni-icons>
				</view>
				<view class="grid4 text-center mt-3">
					<view class="" v-for="(item,index) in 4">
						<image src="" style="width: 80rpx;height: 80rpx;" class="bg-red rounded-circle" mode=""></image>
						<view class="">
							测试1
						</view>
					</view>
				</view>
				<view class="grid2 py-2">
					<button type="default" class="w-100" size="mini" style="borderColor:#c2c2c2;padding: 10rpx 0;"  plain="true">按钮按钮按钮</button>
					<button @click="$refs.popup.close()" type="default" class="w-100" size="mini" style="borderColor:#c2c2c2;padding: 10rpx 0;"  plain="true">取消	</button>
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
				pop1: false,
				objList: [{ num: 2131.45, name: "测试1" }, { num: 12.45, name: "测试2" }, { num: 1.45, name: "测试3" }, { num: 4.45, name: "测试4" }, ],
				objIndex: 0
			}
		},
		mounted() {

		},
		methods: {
			showPopup(index) {
				switch (index) {
					case 0:
						this.$refs.popup.open();
						break;
					case 2:
						uni.showToast({
							title: "自选"
						})
						break;
					default:
						break;
				}
			},
			changePop1() {
				this.pop1 = !this.pop1;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dibu {
		.popup {
			background-color: #FFFFFF;
			padding-bottom: 30rpx;
			border-radius: 30rpx 30rpx 0 0;
			box-shadow: 0 0 10rpx #a2a2a2;
			.grid2{
				display: grid;
				grid-template-columns: repeat(2,1fr);
				grid-gap: 20rpx;
			}
		}

		.topPopup {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;

			.pop1 {
				position: fixed;
				width: 100%;
				bottom: calc(70px + env(safe-area-inset-bottom));
				height: 37vh;
				z-index: 2;
				background-color: #eaeaea;
				display: grid;
				grid-template-columns: 2fr 1fr;
				grid-gap: 20rpx;

				.bttn {
					background-color: #ffffff;
					box-shadow: 0 0 10rpx #000000;
					padding: 10rpx 0;
					border-radius: 10rpx;

					&.active {
						background-color: #c2c2c2;
					}
				}
			}
		}

		.grid5 {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-gap: 20rpx;
		}
	}
</style>