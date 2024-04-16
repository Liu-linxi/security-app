<template>
	<view class="kanlishi">
		<u-sticky>
			<view class="d-flex j-sb a-center bg-white">
				<view class="px-2">
					{{showShort?stat:short}}
					<text class="blue ml-1" @click="showShort=!showShort">{{showShort?"收起":"更多"}}</text>
				</view>
				<view class="border-left px">
					<view class="blue" style="transform:  rotate(45deg);">
						<uni-icons type="plus" color="#498cdb" size="28"></uni-icons>
					</view>
				</view>
			</view>
			<view class="bg-white">
				<u-tabs :list="list1" @click="clickCahnge" :current="current" activeStyle="color:#d4322c;" inactiveStyle="color:#909090;" lineColor="#d4322c" :scrollable="false"></u-tabs>
			</view>
		</u-sticky>

		<component :is="comList[current]"></component>
	</view>
</template>

<script>
	import row1 from './components/row1.vue';
	export default {
		components: {
			row1
		},
		data() {
			return {
				stat: "啊实打实精雕机欧力王企鹅无群啊实打实精雕机欧力王企鹅无群啊实打实精雕机欧力王企鹅无群",
				short: "啊实打实精雕机欧力王企鹅无群啊实打实精雕机欧力王企",
				showShort: false,
				list1: [{
					name: '自选',
				}, {
					name: '沪深京',
				}, {
					name: '行业'
				}, {
					name: '概念'
				}],
				current: 1,
				comList: ["", row1, ""]
			}
		},
		mounted() {

		},
		methods: {
			clickCahnge({ index }) {
				this.current = index
			},

		}
	}
</script>

<style lang="scss" scoped>
	.kanlishi {}
</style>