<template>
	<view class="top-panel">
		<view class="grid3 px-2" @click="topPopup=!topPopup">
			<view class="d-flex a-center text-nowrap">
				<view class="red">
					<view class="font36 font-weight">
						3.23
					</view>
					<view class="font-sm">
						<text class="mr-1">0.23</text>
						23.23%
					</view>
				</view>
				<view class="gray-color ml-1">
					<view class=" ">
						高
					</view>
					<view class="">
						低
					</view>
					<view class="">
						请
					</view>
				</view>
			</view>
			<view class="text-right pl-2 text-nowrap">
				<view class="d-flex a-center j-sb">
					<text class="red">2.33</text>
					<text class="ml-2 gray-color mr-1">测试</text>
					45%
				</view>
				<view class="d-flex a-center j-sb">
					<text class="green">2.33</text>
					<text class="ml-2 gray-color mr-1">测试</text>
					34撒
				</view>
				<view class="d-flex a-center j-sb">
					<text class="green">2.33</text>
					<text class="ml-2 gray-color mr-1">测试</text>
					34撒3212
				</view>
			</view>
			<view class="text-nowrap">
				<view class="d-flex a-center j-sb">
					<view class="gray-color">测试</view>
					<view class="red">2.33</view>
				</view>
				<view class="d-flex a-center j-sb">
					<view class="gray-color">测试</view>
					<view class="red">12.22阿</view>
				</view>
				<view class="d-flex a-center j-sb">
					<view class="gray-color">测试TTM</view>
					<view class="red">2.33</view>
				</view>
			</view>
		</view>
		<uni-transition mode-class="slide-top" class="topPopup" :show="topPopup" @click="topPopup=false">
			<view class="bg-white font-sm p-2" @click.stop="">
				<view class="grid2">
					<view class="gray d-flex a-center j-sb" v-for="li in 4">
						测试
						<text class="red">23.3</text>
					</view>
				</view>
				<view class="grid2 mt-2">
					<view class="gray d-flex a-center j-sb" v-for="li in 5">
						测试
						<text class="green">23.3</text>
					</view>
				</view>
				<view class="grid2 mt-2">
					<view class="gray d-flex a-center j-sb" v-for="li in 12">
						<view class="d-flex a-center">
							测试
							<uni-icons v-if="li==4" type="help" size="14" color="#c2c2c2" @click="changePop(1)"></uni-icons>
						</view>
						<text class="text-dark">23.3</text>
					</view>
				</view>
				<view class="d-flex a-center j-sb font mt-2">
					<view class="gray">
						测试
						<uni-icons type="help" @click="changePop(2)" size="14" color="#c2c2c2"></uni-icons>
					</view>
					<view class="">
						暗色阿萨德
					</view>
				</view>
			</view>
		</uni-transition>
		
		<uni-popup ref="popup" type="center">
			<view class="popupTips">
				<view class="border-bottom" >
					<view class="p-4"  v-if="popType==2">
						我去额与诶Yui撒谎度萨博的卡死机USA华东科技阿山东矿机
					</view>
					<view class="p-4" v-else>
						<view class="d-flex mt-2" v-for="li in 3">
							<view class="gray w-41 mr-3">
								阿萨德群
							</view>
							<view class="">
								阿萨德撒大所多撒啊实打实大大所所多撒多
							</view>
						</view>
					</view>
				</view>
				<view class="text-center line-h-big" @click="$refs.popup.close()">
					我知道了
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
				topPopup: false,
				popType:2
			}
		},
		mounted() {

		},
		methods: {
			changePop(e){
				this.popType=e;
				this.$refs.popup.open()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-panel {
		background-color: #f2f1ef;
		.grid3{
			grid-template-columns: 1fr 2fr 1fr;
		}
		.popupTips{
			background-color: #FFFFFF;
			width: 80vw;
			border-radius: 20rpx;
		}
		.topPopup {
			position: fixed;
			top: 60px;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: rgba(0, 0, 0, 0.3);
			z-index: 12;

			.grid2 {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 10rpx 150rpx;
			}
		}


		.grid3 {
			height: 60px;
			grid-template-columns: 2fr 2fr 1.5fr;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				display: block;
				right: 6rpx;
				bottom: 6rpx;
				background-color: #d0cfce;
				width: 20rpx;
				height: 20rpx;
				-webkit-clip-path: polygon(100% 0, 0% 100%, 100% 100%);
				clip-path: polygon(100% 0, 0% 100%, 100% 100%);
			}
		}

		.gray-color {
			color: #605f5d;
		}
	}
</style>