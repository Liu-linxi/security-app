<template>
	<view class="bg-white">
		<u-sticky bgColor="#fff">
			<view class="border-bottom text-nowrap pt-2">
				<u-tabs :list="list1" @click="clickCahnge" :current="current" activeStyle="color:#d4322c;" inactiveStyle="color:#909090;" lineWidth="80" lineColor="#d4322c" :scrollable="false"></u-tabs>
			</view>
			<view class="grid4 pt-1 font-weight py-1 border-bottom mx-2">
				<view class="text-center" v-for="(item,index) in list" :key="index">
					{{item}}
				</view>
			</view>
		</u-sticky>


		<view class="grid4 border-bottom mx-2 text-nowrap" v-for="(item,index) in 40" :key="index" :class="item%2==0?'red':'blue'">
			<view class="py-2">
				<view class="">
					Cesdhi1科技
				</view>
				<view class="">
					<uni-tag text="买" v-if="item%2==0" size="small" custom-style="background-color: #f7dedc; border: none; color: #fff;"></uni-tag>
					<uni-tag text="卖" v-else size="small" custom-style="background-color: #dfecfb; border: none; color: #fff;"></uni-tag>
					12321
				</view>
			</view>
			<view class="text-center">
				<view>11.230</view>
				<view>0.230</view>
			</view>
			<view class="text-center">
				<view>230</view>
				<view>0</view>
			</view>
			<view class="text-right">
				<view>证券{{item%2==0?'买入':'卖出'}}</view>
				<view>{{item%2==0?'已成':'已撤'}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
					name: '近7日',
				}, {
					name: '近30日',
				}, {
					name: '自定义'
				}],
				current: 0,
				list: ["委托时间", "委托/均价", "委托/成交", "状态"]
			}
		},
		methods: {
			clickCahnge({ index }) {
				this.current = index
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		background-color: #fff;
	}
</style>