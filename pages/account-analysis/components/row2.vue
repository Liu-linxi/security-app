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
				<view class="mx-5 px-3">
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
						<view>
							Ceshi
						</view>
					</template>
				</view>
			</view>

			<view class="d-flex j-sb px-3 a-center mt-3">
				<view class="blue">
					查看账单
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
				current: 0
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
	.row2 {}
</style>