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
		
		<view class="bg-white p-3">
			<view class="d-flex row1">
				<view class="flex-shrink left"></view>
				<view class="flex-shrink right">
					<view class="">
						开户申请已提交成功
						<view class="gray font-sm">
							2024-04-02 16:05:11
						</view>
					</view>
					<view class="mt-2">
						开户申请已提交成功
						<view class="gray font-sm">
							2024-04-02 16:05:11
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
		.row1{
			.left{
				margin: 20rpx 0;
				width: 2rpx;
				// background-color: #f2f2f2;
			}
			.right{
				margin-left: 60rpx;
			}
		}
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