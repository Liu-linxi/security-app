<template>
	<view>
		<uni-nav-bar left-icon="left" fixed :border="false" leftWidth="140rpx" rightWidth="140rpx" backgroundColor="#e72f2f" color="#FFFFFF">
			<view class="center">
				<u-icon name="play-left-fill" color="#ffffff" size="18"></u-icon>
				<view class="text-center">
					<view class="font26">
						行情行情
					</view>
					<view class="font-sm">
						行情行情
					</view>
				</view>
				<u-icon name="play-right-fill" color="#ffffff" size="18"></u-icon>
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
		data() {
			return {
				active:0
			};
		},
		methods: {
		}
	};
</script>

<style scoped lang="scss">
.center{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: rgba(255, 255, 255, 1);
	padding: 0 30rpx;
	
}
.rightbloc{
	width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.img{
			display: inline-block;
			width: 50rpx;
			height: 50rpx;
			background-color: rgba(255, 255, 255, 1);
		}
	}
</style>