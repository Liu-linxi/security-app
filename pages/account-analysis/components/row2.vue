<template>
	<view class="row2 bg-white">
		<view class="py-3">
			<view class="d-flex j-sb a-center mt-2 px-3">
				<view class="font36">
					账户盈亏<uni-icons type="info" size="20" class="ml-1" color="#c2c2c2"></uni-icons>
				</view>
				<view class="red">
					查看月度对账单
				</view>
			</view>

			<view class="mt-4 ">
				<view class="mx-5 px-1">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#d4322c"></uni-segmented-control>
				</view>
				<view class="mt-3">
					<template v-if="current==0">
						<view class="border-bottom pb-3 px-2">
							<view class="text-center mb-2">
								<view class="">
									{{name!='自定义'?name:''}}普通账户盈亏
								</view>
								<view class="font-big mt-2">
									10000.00
								</view>
								<view class="gray mt-2 font-sm">
									注：盈亏分析的计算日期截止至上一个交易日
								</view>
							</view>
							<u-grid border col="4">
								<u-grid-item v-for="(baseListItem,baseListIndex) in 4" :key="baseListIndex">
									<view class="text-center">
										<image src="" style="width: 40rpx;height: 40rpx;" class="bg-red" mode=""></image>
										<view class="">
											股票盈亏<uni-icons type="right" size="14" class="ml-1" color="#c2c2c2"></uni-icons>
										</view>
										0.00
									</view>
								</u-grid-item>
							</u-grid>
						</view>
					</template>
					<template v-else>
						<view class="d-flex px-5">
							<view class="ml-3 my-4" style="width: 4rpx;background-color: #CCC;">
							</view>
							<view class=" w-100">
								<view class="d-flex a-center j-sb borderdash position-relative" v-for="(li,index) in 5" :key="index" :class="{circle:index!=0&&index!=4}">
									<view class="">
										期初资产
									</view>
									<view class="">
										0.00
									</view>
									<view class="borderTasgs" v-show="index==0||index==4">
										02-11
									</view>
								</view>
							</view>
						</view>
					</template>
				</view>
			</view>

			<view class="d-flex j-sb px-3 a-center mt-3">
				<view class="blue">
					查看日账单
				</view>
				<view class="gray font-sm">
					更新时间：2024/12/10
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	export default {
		props: ["name"],
		data() {
			return {
				items: ['区间盈亏', '资产变动'],
				current:0,
				steps: ['步骤一', '步骤二', '步骤三', '步骤四'] // 步骤条的步骤数组
			}
		},
		mounted() {

		},
		methods: {
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.current = e.currentIndex;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row2 {
		.borderdash{
			border-bottom:1rpx dashed #d9d9d9 ;
			margin-left: 70rpx;
			padding: 20rpx 0;
		}
		.borderTasgs{
			width: 100rpx;
			background-color: #CCC;
			text-align: center;
			color: #FFF;
			position: absolute;
			left: -127rpx;
			border-radius: 4rpx;
		}
		.circle{
			&::after{
				content: "";
				display: block;
				width: 18rpx;
				height: 18rpx;
				border-radius: 50%;
				background-color:#CCC ;
				left: -82rpx;
				position: absolute;
			}
		}
	}
</style>