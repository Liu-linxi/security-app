<template>
	<view class="child1">
		<view class="top">
			<view class="left">
				
			</view>
			<view class="right">
				<view class="row1  d-flex flex-column j-sa">
					<view class="grid3 text-center text-nowrap" v-for="(item,index) in 5" :key="index">
						<view class="text-left">
							卖{{item}}
						</view>
						<view >
							--
						</view>
						<view >
							--
						</view>
					</view>
					 
				</view>
				<view class="row2  d-flex flex-column j-sa">
					<view class="grid3 text-center text-nowrap" v-for="(item,index) in 5" :key="index">
						<view class="text-left">
							买{{item}}
						</view>
						<view >
							--
						</view>
						<view >
							--
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
	.child1 {
		.top {
			@include grid-custom(3fr 2fr);
			background-color: #FFF;
			padding: 20rpx;
			height: 600rpx;
			background-color: #FFF;
			.right{
				border: 1px solid #e7e5e6;
				.row1{
					height: 299rpx;
					border-bottom: 1px solid #e7e5e6;
				}
				.row2{
					height: 300rpx;
				}
			}
		}
	}
</style>