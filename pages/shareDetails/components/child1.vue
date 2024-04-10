<template>
	<view class="child1">
		<scroll-view scroll-y="true" class="position-relative" :style="{height:`${height}px`}" @scroll="comHeight" :scroll-top="scrollTop">
			<top-panel />
			<view class="grid2" :style="{height:`${height-250}px`}">
				<view class="bg-red">
					统计图
				</view>
				<view class="mx-1">
					<view class="border-left border-bottom">
						<view class="d-flex a-center text-center title " style="height: 20px;">
							<view class="flex-1 line-h position-relative" :class="{borderR:index==0,active:chaoosIndex==index}" v-for="(li,index) in chaoosData" :key="li" @click="chaoosIndex=index">
								{{li}}
							</view>
						</view>
						<template v-if="chaoosIndex==0">
							<view class="d-flex flex-column" :style="{height:`${height-305}px`}">
								<view class="flex-1 border-bottom d-flex flex-column j-sa">
									<view class="grid3" v-for="li in 5">
										<view class="">
											去1
										</view>
										<view class="text-right">
											--
										</view>
										<view class="text-right blue">
											0
										</view>
									</view>
								</view>
								<view class="flex-1 d-flex flex-column j-sa">
									<view class="grid3" v-for="li in 5">
										<view class="">
											去1
										</view>
										<view class="red text-right">
											2.22
										</view>
										<view class="text-right blue">
											0
										</view>
									</view>
								</view>
							</view>
						</template>
						<template v-else>
							<scroll-view scroll-y="true" :style="{height:`${height-305}px`}">
								<view class="grid3" v-for="li in  30">
									<view class="">
										12:12
									</view>
									<view class="text-right red">
										23.2
									</view>
									<view class="text-right green">
										23
									</view>
								</view>
							</scroll-view>
						</template>


					</view>
					<image src="" style="width: 100%;height: 30px;" class="bg-red mt-1" mode=""></image>
				</view>
			</view>

			<view class="d-flex a-center my-3">
				<view class="border rounded-sm ml-2 py px-2" v-for="(item,index) in 4">
					请问大家
				</view>
			</view>

			<xinwen />
			<view class="bottom-abs">
				<dibu />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import topPanel from './top-panel.vue';
	import xinwen from './xinwen.vue';
	import dibu from './dibu.vue';
	export default {
		props: ["height"],
		components: {
			topPanel,
			xinwen,
			dibu
		},
		data() {
			return {
				chaoosData: ["阿萨", "阿的"],
				chaoosIndex: 0,
				scrollTop: 0,
			}
		},
		mounted() {
			uni.$on("scrollTopSon", (data) => {
				this.scrollTop = data;
			})
		},
		beforeDestroy() {
			uni.$off("scrollTopSon")
		},
		methods: {
			comHeight(e) {
				let scollTop = e.detail.scrollTop;
				uni.$emit("scrollTopDEtail", scollTop)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.child1 {
		.grid2 {
			display: grid;
			grid-template-columns: 2fr 1fr;
			border-color: #00ff7f;

			.title {
				background-color: #e4e4e4;

				.borderR {
					border-right: 2rpx solid #c3c3c3;
				}

				.active {
					&:after {
						content: "";
						display: block;
						width: 100%;
						height: 6rpx;
						position: absolute;
						bottom: -10rpx;
						background-color: #d4322c;
					}
				}
			}

			.blue {
				color: #498cdb;
			}

		}

		.bottom-abs {
			width: 100%;
			height: 60px;
			position: fixed;
			bottom: 0;
			padding-bottom: calc(10px + env(safe-area-inset-bottom));
			background-color: #FFFFFF;
		}
	}
</style>