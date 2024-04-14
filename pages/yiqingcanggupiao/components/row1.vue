<template>
	<view class="row1 mt-2 bg-white px-2">
		<view class="grid4 text-center text-light-muted border-bottom">
			<view v-for="(item,index) in dataList" :key="index">
				{{item}}
			</view>
		</view>
		<view class="grid4 text-center border-bottom py-1" v-for="(item,index) in list" :key="index">
			<view class="">
				克来桃电
				<view class="gray">
					643560
				</view>
			</view>
			<view class="red">
				+438.055.25
			</view>
			<view class="">
				4
			</view>
			<view class="">
				2024-02-
				29
			</view>
		</view>
		<view class="text-center blue d-flex a-center j-center py-2" @click="changeList">
			{{showDe?'收起':'查看'}} <u-icon :name="showDe?'arrow-up':'arrow-down'" size="16" color="#498cdb" class="ml-2"></u-icon>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				dataList: ["股票名称", "区同盈亏", "持仓天教", "消仓时间"],
				list: 3,
				showDe: false
			}
		},
		mounted() {

		},
		methods: {
			changeList() {
				this.showDe = !this.showDe;
				this.list = this.showDe ? 7 : 3;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row1 {}
</style>