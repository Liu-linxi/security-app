<template>
	<view class="child4">
<view class="module3">
		<view class="title font32 font-weight d-flex j-sb a-center">
			股票排行
		</view>
		<view class="grid4 mt-3">
			<view class="item" v-for="(li,index) in tags" :class="{red:tagsIndex==index}" :key="li" @click="tagsIndex = index">
				{{li}}
			</view>
		</view>
		<view class="grid4 my-2">
			<view class="">
			</view>
			<view class=" gray text-right">
				最新
			</view>
			<view class=" gray text-right">
				{{showName}}
			</view>
			<view class=" gray text-right">
				行业板块
			</view>
		</view>

		<view class="" v-for="li in 8">
			<view class="grid4 mt-1 pb-2 border-bottom">
				<view class="font32">
					N广合新
					<view class="d-flex a-center font-sm gray">
						<text class="tagsmall">新</text>
						001389
					</view>
				</view>
				<view class="red text-right">
					51.88
				</view>
				<view class=" red text-right">
					197.65%
				</view>
				<view class="font26 text-right">
					印制电路板
				</view>
			</view>
		</view>
		<view class="text-center mt-3 gray">
			更多 <uni-icons type="right" size="12" class="ml-2" color="#c2c2c2"></uni-icons>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tags: ["涨幅榜", "跌幅榜", "快速涨幅", "成交额", "大单净量", "量比榜", "换手率", "主力净流入"],
				tagsIndex: 0,
				showName: "涨幅",
			}
		},
		mounted() {
	
		},
		watch: {
			tagsIndex(val) {
				switch (val) {
					case 2:
						this.showName = "涨速";
						break;
					case 3:
						this.showName = "金额";
						break;
					case 4:
						this.showName = "大单净量";
						break;
					case 5:
						this.showName = "量比";
						break;
					case 6:
						this.showName = "换手";
						break;
					case 7:
						this.showName = "主力净流入";
						break;
					default:
						this.showName = "涨幅";
						break;
				}
			}
		},
		methods: {
	
	
		}
	}
</script>

<style scoped lang="scss">
	.child4 {
		.module3 {
			background-color: #FFFFFF;
			padding: 30rpx;
		
			.img {
				width: 15rpx;
				height: 20rpx;
				background-color: #41b13e;
			}
		
			.item {
				text-align: center;
				background-color: #f6f6f6;
				border: 1px solid #f6f6f6;
				padding: 15rpx 0;
				border-radius: 8rpx;
		
				&.red {
					background-color: #FFFFFF;
					border-color: #d4322c;
				}
			}
		
			.tagsmall {
				background-color: #d28041;
				color: #FFFFFF;
				font-size: 14rpx;
				padding: 0 10rpx;
				border-radius: 6rpx;
				margin-right: 6rpx;
			}
		
			.redtags {
				color:rgba(212 ,50, 44, 1);
				background-color: rgba(212 ,50, 44, 0.3);
				font-size: 24rpx;
				padding: 5rpx 10rpx;
				border-radius: 6rpx;
			}
		}
	}
</style>