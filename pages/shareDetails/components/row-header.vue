<template>
	<view>
		<uni-nav-bar left-icon="left" fixed :border="false" leftWidth="140rpx" rightWidth="140rpx" backgroundColor="#e72f2f" color="#FFFFFF" @clickLeft="back">
			<view class="center">
				<u-icon name="play-left-fill" color="#ffffff" size="18" @click="dataChange(0)"></u-icon>
				<view class="text-center">
					<view class="font26">
						行情行情
					</view>

					<view class="font-sm" v-if="showHeader>60&&current==0">
						234 <text class="ml-1">23%</text>
					</view>
					<view class="font-sm" v-else>
						123122 <text style="background-color: #ffaa00;" class="px rounded-xs ml-1">融</text>
					</view>
				</view>
				<u-icon name="play-right-fill" color="#ffffff" size="18" @click="dataChange(1)"></u-icon>
			</view>
			<block slot="right">
				<view class="rightbloc">
					<image src="" class="img" mode=""></image>
					<image src="" class="img" mode=""></image>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		props: ["current"],
		data() {
			return {
				active: 0,
				showHeader: 0
			};
		},
		mounted() {
			uni.$on("scrollTopDEtail", (data) => {
				this.showHeader = data
			})
		},
		beforeDestroy() {
			uni.$off("scrollTopDEtail")
		},
		methods: {
			dataChange(index) {
				uni.showToast({
					icon: "none",
					title: index ? "下一条数据" : "上一条数据"
				})
			},
			back(){
				uni.navigateBack()
			}
		}
	};
</script>

<style scoped lang="scss">
	.center {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		color: rgba(255, 255, 255, 1);
		padding: 0 30rpx;

	}

	.rightbloc {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.img {
			display: inline-block;
			width: 50rpx;
			height: 50rpx;
			background-color: rgba(255, 255, 255, 1);
		}
	}
</style>