<template>
	<view class="trade">
		<uni-nav-bar :statusBar="true" fixed :border="false" leftIcon="left" @clickLeft="back" rightWidth="140rpx" backgroundColor="#e72f2f" color="#FFFFFF">
			<view class="center">
				<view class="text-center">
					{{list1[list1Index].name}}
				</view>
			</view>
			<block slot="right">
				<view class="rightbloc">
					<image src="" class="img" mode=""></image>
					<image src="" class="img" mode=""></image>
				</view>
			</block>
		</uni-nav-bar>
		<u-tabs :list="list1" @click="click" :scrollable="false" class="border-bottom" lineColor="#d4322c"></u-tabs>
		<component :is="coms[list1Index]" />
	</view>
</template>

<script>
	import child1 from './components/child1.vue';
	import child2 from './components/child2.vue';
	import child3 from './components/child3.vue';
	import child4 from './components/child4.vue';
	import child5 from './components/child5.vue';
	export default {
		components: {
			child1,
			child2,
			child3,
			child4,
			child5
		},
		data() {
			return {
				list1Index: 0,
				list1: [{
					name: '买入',
				}, {
					name: '卖出',
				}, {
					name: '撤单'
				}, {
					name: '持仓'
				}, {
					name: '查询'
				}],
				coms: [child1, child2, child3, child4, child5]

			}
		},
		mounted() {

		},
		methods: {
			click(item) {
				console.log('item', item);
				this.list1Index = item.index;
			},
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.trade {
		.center {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			color: rgba(255, 255, 255, 0.7);

			.opWhite {
				color: rgba(255, 255, 255, 1);
			}
		}

		.rightbloc {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.img {
				display: inline-block;
				width: 50rpx;
				height: 50rpx;
				background-color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>