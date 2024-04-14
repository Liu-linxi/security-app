<template>
	<view>
		<u-sticky bgColor="#fff">
			<view class="border-bottom text-nowrap pt-2">
				<u-tabs :list="list1" @click="clickCahnge" :current="current" activeStyle="color:#d4322c;" inactiveStyle="color:#909090;" lineColor="#d4322c" :scrollable="false"></u-tabs>
			</view>
		</u-sticky>
		<view class="bg-white p-2 d-flex a-center j-sb">
			<view class="">
				<view class="gray font-sm">
					区间盈亏(元)
				</view>
				<view class="font36 font-weight red line-h-md">
					+24,172.97
				</view>
			</view>
			<view class="gray">
				<text class="mr-1">数据更新日期</text> 2024-03-21
			</view>
		</view>
		<row1 />
		<row2 />
	</view>
</template>

<script>
	import row1 from './components/row1.vue';
	import row2 from './components/row2.vue';
	export default {
		components: {
			row1,
			row2
		},
		data() {
			return {
				list1: [{
					name: '近一月',
				}, {
					name: '近三月',
				}, {
					name: '近半年'
				}, {
					name: '近一年'
				}, {
					name: '今年'
				}],
				current: 0,
			}
		},
		methods: {
			clickCahnge({ index }) {
				this.current = index
			}
		}
	}
</script>

<style>

</style>