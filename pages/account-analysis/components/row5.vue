<template>
	<view class="row5 mt-2">
		<view class="d-flex a-center j-sb px-3 py-2">
			<view class="font36">
				股票交易分析
			</view>
			<view class="gray">
				详情
			</view>
		</view>
		<view class="p-2 mx-1 mt-3">
			<view class="grid4 rounded-sm">
				<view v-for="(item,index) in 4" class="text-center my-2" :class="{'border-right':index<3}" :key="index">
					<view class="">
						0个
					</view>
					<view class="" style="color:#999999 ;">
						交易股票
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
	.row5 {
		background-color: #FFF;
		.grid4{
			background-color: #f6f6f6;
		}
	}
</style>