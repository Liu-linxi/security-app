<template>
	<view class="row1">
		<view class="bg-white p-3 border-bottom">
			<view class="gray">
				账户资产<uni-icons type="info" size="16"></uni-icons>
			</view>
			<view class="red font36">
				10000.00
			</view>
		</view>
		<uni-transition :mode-class="['fade', 'slide-top']" :show="show">
			<view class="grid2 text-nowrap bg-white border-bottom">
				<view v-for="(item,index) in datd" :key="index" class="p-2 pl-3" :class="{'border-bottom':index<4,'border-right':index%2==0}">
					<view class="gray">
						<text>{{item.name}}</text>{{item.precent}}
					</view>
					<view class="">
						{{item.num}}
					</view>
				</view>
			</view>
		</uni-transition>
		<view class="bg-white d-flex j-sa py-1" @click="show=!show">
			<u-icon :name="show?'arrow-left-double':'arrow-right-double'" color="#c2c2c2" size="28" style=" transform: rotate(90deg);"></u-icon>
		</view>

	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				show: false,
				datd: [
					{ name: "现金", precent: "100.00%", num: "10000.00" },
					{ name: "股票", precent: "0.00%", num: "0.00" },
					{ name: "理财类", precent: "0.00%", num: "0.00" },
					{ name: "债券", precent: "0.00%", num: "0.00" },
					{ name: "其他", precent: "0.00%", num: "0.00" },
				]
			}
		},
		mounted() {

		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.row1 {
		.grid2 {
			@include grid-layout(2);
			grid-gap: 0;
		}
	}
</style>