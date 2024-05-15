<template>
	<view>
		<uni-nav-bar :statusBar="true" fixed :border="false"  backgroundColor="#e72f2f" color="#FFFFFF">
			<view class="center">
				<view :class="{opWhite:active==0}"  @click="change(0)">
					普通交易
				</view>
				<view :class="{opWhite:active==1}" @click="change(1)">
					融资融券
				</view>
				<view :class="{opWhite:active==2}" @click="change(2)">
					股票期权
				</view>
			</view>
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