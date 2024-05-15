<template>
	<view>
		<uni-nav-bar :statusBar="true" fixed :border="false" leftWidth="140rpx" rightWidth="140rpx" backgroundColor="#e72f2f" color="#FFFFFF">
			<block slot="left">
				<view class="" v-if="active==1">
					看资金
				</view>
				<u-icon v-if="active==0" name="list" color="#FFFFFF" size="24"></u-icon>
			</block>
			<view class="center">
				<view :class="{opWhite:active==0}"  @click="change(0)">
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
				active:0
			};
		},
		methods: {
			change(e){
				this.$emit("headerChange",e)
				this.active=e;
			}
		}
	};
</script>

<style scoped lang="scss">
.center{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: rgba(255, 255, 255, 0.7);
	.opWhite{
		color:rgba(255, 255, 255, 1);
	}
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