<template>
	<view class="kaihu2">
		<uni-nav-bar fixed :border="false" leftWidth="140rpx" rightWidth="140rpx" backgroundColor="#e72f2f" color="#FFFFFF">
			<view class="center">
				开户结果
			</view>
			<block slot="right">
				<view class="rightbloc">
					开户进度
				</view>
			</block>
		</uni-nav-bar>
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
	.kaihu2 {
		.center {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			color: rgba(255, 255, 255, 1);
			font-size: 32rpx;
		}

		.rightbloc {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

	}
</style>