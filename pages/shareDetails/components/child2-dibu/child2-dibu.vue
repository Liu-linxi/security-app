<template>
	<view class="child2dibu">
		<view class="grid2 font">
			<view class="text-nowrap d-flex a-center">
				<rowTabs :num="4" @changeActive="changeActive" :activeIndex="current1" :list="list1" borderShow/>
				<view class="d-flex a-center ml-2 position-relative" :class="{redBtm:pop1||popIndex>-1,borBtm:popIndex>-1}" @click="pop1=!pop1">
					{{pop1||popIndex==-1?'更多':popList[popIndex]}}
					<u-icon :name="pop1?'arrow-down-fill':'arrow-up-fill'" class="ml-1" :color="pop1||popIndex>-1?'#e72f2f':'#c3c7cf'" size="14"></u-icon>
				</view>
			</view>
			<view class="d-flex a-center j-end pr-2">
				<view class="d-flex a-center mr-4" @click="pop2=!pop2" :class="{red:pop2}">
					{{popList2[popIndex2]}}
					<u-icon :name="pop2?'arrow-down-fill':'arrow-up-fill'" class="ml-1" :color="pop2?'#e72f2f':'#c3c7cf'" size="14"></u-icon>
				</view>
				<view class="text-center">
					<image src="" style="width:10rpx; height: 20rpx;" class="bg-red" mode=""></image>
					<view class="line-h">
						更多
					</view>
				</view>
			</view>
		</view>

		<uni-transition mode-class="fade" class="topPopup" :show="pop1" @click="pop1=false">
			<view class="pop1 border-bottom pt-1" @click.stop="">
				<rowTabs :num="8" @changeActive="changepopIndex" :activeIndex="popIndex" :list="popList" height="30px" />
			</view>
		</uni-transition>
		<uni-transition mode-class="fade" class="topPopup" :show="pop2" @click="pop2=false">
			<view class="pop1 border-bottom pt-1" @click.stop="">
				<rowTabs :num="7" @changeActive="changepopIndex2" :activeIndex="popIndex2" :list="popList2" height="30px" />
			</view>
		</uni-transition>
	</view>
</template>

<script>
	import rowTabs from './row-tabs.vue';
	export default {
		components: {
			rowTabs
		},
		props: {

		},
		data() {
			return {
				list1: ["日K", "周K", "月K"],
				current1: 0,
				popList: ["120分", "2", "3", "123分", "34", "546", "768分","5"],
				popIndex: -1,
				pop1: false,
				popList2: ["asd", "213", "er", "wer", "3df", "hgj", "kjkl"],
				popIndex2: 0,
				pop2: false
			}
		},
		watch: {
			current1(val) {
				if (val > -1) this.popIndex = -1;
			},
			popIndex(val){
				if (val > -1) this.current1 = -1;
			}
		},
		mounted() {

		},
		methods: {
			changeActive(e) {
				this.current1 = e;
			},
			changepopIndex(e){
				this.popIndex = e;
			},
			changepopIndex2(e){
				this.popIndex2= e;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.child2dibu {
		.grid2 {
			@include grid-custom(5fr 4fr);
			padding: 0 30rpx;

			.redBtm {
				color: #e72f2f;
			}
			.borBtm{
				position: relative;
				&::after{
					content:"";
					display: block;
					background-color: #e72f2f;
					width: 30rpx;
					height: 2rpx;
					position: absolute;
					bottom: -10rpx;
					left: 50%;
					transform: translate(-50%,0 );
					
					
				}
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
				height: 70rpx;
				z-index: 2;
				background-color: #ffffff;

			}
		}
	}
</style>