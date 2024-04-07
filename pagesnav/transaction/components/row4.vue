<template>
	<view class="row4 mt-2 pb-5">
		<view class="bg-white px-3 py-2 d-flex a-center j-sb border-bottom" v-for="(item,index) in staticArr" :key="index">
			<view class="">
				{{item}}
			</view>
			<uni-icons type="right" size="16" color="#c2c2c2"></uni-icons>
		</view>
		<view class="pb-5 bg-white">
			<view class="px-3 py-2 mt-2 d-flex a-center j-sb">
				<view class="">
					理财商城
				</view>
				<view class="d-flex a-center gray font-sm">
					我的理财
					<uni-icons type="right" size="16" color="#c2c2c2"></uni-icons>
				</view>
			</view>
			<view class="grid4 pb-4 pt-3">
				<view class="text-center" v-for="(item,index) in gridArr">
					<image :src="item.icon" style="width: 70rpx;height: 70rpx;" class="bg-red" mode=""></image>
					<view class="">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				staticArr: ["港股通", "新三板", "网络投票", "OTC", "天天汇利", "可转债转股", "要约收购", "盘后固定价格交易", "债券交易", "现金行权", "修改密码"],
				gridArr: [
					{ name: "活期产品", icon: "" },
					{ name: "定期产品", icon: "" },
					{ name: "基金专区", icon: "" },
					{ name: "高端理财", icon: "" },
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.row4 {}
</style>