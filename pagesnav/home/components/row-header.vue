<template>
	<view>
		<uni-nav-bar fixed :border="false" backgroundColor="#e72f2f" color="#d8d8d8">
			<block slot="left">
				<image src="" class="img" mode=""></image>
			</block>
			<view class="input-view">
				<view class="">
					股票/基金/资讯/问答
				</view>
				<uni-icons class="input-uni-icon" type="search" size="18" color="#FFF" />
			</view>
			<block slot="right">
				<image src="" class="img" mode=""></image>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {}
	};
</script>

<style scoped lang="scss">
	.input-view{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20rpx;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 5rpx;
		height: 50rpx;
		margin-top: 17rpx;
		width: 100%;
	}
	.img {
		width: 50rpx;
		height: 50rpx;
		background-color: rgba(255, 255, 255, 1);
	}
</style>