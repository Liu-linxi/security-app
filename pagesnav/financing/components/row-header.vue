<template>
	<view>
		<uni-nav-bar fixed :border="false" leftWidth="160rpx" rightWidth="160rpx" backgroundColor="#e72f2f" color="#FFFFFF">
			<block slot="left">
				<view class="d-flex a-center text-nowrap">
					 <uni-icons type="contact" size="28" color="#FFF"></uni-icons>
					 登录/开户
				</view>

			</block>
			<view class="center">
				<view :class="{opWhite:active==0}" @click="change(0)">
					自选
				</view>
				<view :class="{opWhite:active==1}" @click="change(1)">
					行情
				</view>
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
				active: 0
			};
		},
		methods: {
			change(e) {
				this.$emit("headerChange", e)
				this.active = e;
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
		color: rgba(255, 255, 255, 0.7);

		.opWhite {
			font-size: 30rpx;
			color: rgba(255, 255, 255, 1);
			position: relative;
			&::after{
				content: '';
				display: block;
				position: absolute;
				bottom: -25rpx;
				width: 40rpx;
				height: 4rpx;
				border-radius: 4rpx;
				background-color: #fff;
				left: 50%;
				transform: translate(-50%,0);
			}
			
		}
	}

	.rightbloc {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}

	.img {
		display: inline-block;
		width: 50rpx;
		height: 50rpx;
		background-color: rgba(255, 255, 255, 1);
	}
</style>