<template>
	<view class="financing">
		<row-header @headerChange="headerChange" />
		<view class="bg-red">
			<image src="" style="width:100vw; height: 200rpx;" class="bg-red" mode=""></image>
		</view>
		<row1 />
		<row2 />
		<row3 />
		<view class="mx-5">
			<u-divider text="史看得那傅雷 雷家书代"></u-divider>
		</view>
		<view class="font-sm mx-2" style="padding-bottom: 120rpx;">
			的开发牢记历史看得那傅雷家书代理费美女流口水的家乐福简单示例框架的开发牢记历史看得那傅雷家书代理费美女流口水的家乐福简单示例框架的开发牢记历史看得那傅雷家书代理费美女流口水的家乐福简单示例框架的开发牢记历史看得那傅雷家书代理费美女流口水的家乐福简单示例框架的开发牢记历史看得那傅雷家书代
		</view>
	</view>
</template>

<script>
	import rowHeader from './components/row-header.vue';
	import row1 from './components/row1.vue';
	import row2 from './components/row2.vue';
	import row3 from './components/row3.vue';
	export default {
		components: {
			rowHeader,
			row1,
			row2,
			row3,
		},
		props: {

		},
		data() {
			return {
				headerIndex: 0,
			}
		},
		mounted() {

		},
		methods: {
			headerChange(index) {
				this.headerIndex = index;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.financing {}
</style>