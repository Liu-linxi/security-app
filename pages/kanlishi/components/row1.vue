<template>
	<view class="module3">
			<son1 :nameList="name1" v-if="showBool" @changeBool="changeBool"/>
			<son2 v-else @changeBool="changeBool"/>
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
				showBool:false,
				tagsIndex: 0,
				name1: ["收起分析", "最新", "涨幅", "涨跌"],
			}
		},
		methods: {
			changeBool(){
				this.showBool=!this.showBool;
			}
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