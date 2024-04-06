<template>
	<view class="module3">
		<view class="d-flex bg-white a-center py-2 mx-2 border-bottom" style="position: sticky;top: 0;z-index: 10;">
			<view class="item mr-3" v-for="(li,index) in tags" :class="{red:tagsIndex==index}" :key="li" @click="tagsIndex = index">
				{{li}}
			</view>
		</view>
		<view class="">
			<son1 :nameList="name1" v-if="tagsIndex==0" />
			<son1 :nameList="name2" v-if="tagsIndex==1" sort />
			<son2 v-if="tagsIndex>1" />
		</view>
	</view>
</template>

<script>
	import son1 from './son1.vue';
	import son2 from './son2.vue';
	export default {
		components: {
			son1,
			son2
		},
		data() {
			return {
				tags: ["24H最热", "AH股", "快速涨幅", "成交额"],
				tagsIndex: 0,
				name1: ["名称代码", "最新", "涨幅", "关注度"],
				name2: ["名称代码", "最新", "涨幅", "溢价(A/H)"],
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.module3 {
		background-color: #FFFFFF;

		.item {
			text-align: center;
			background-color: #f6f6f6;
			border: 1px solid #f6f6f6;
			padding: 15rpx;
			border-radius: 8rpx;

			&.red {
				background-color: #FFFFFF;
				border-color: #d4322c;
			}
		}
	}
</style>