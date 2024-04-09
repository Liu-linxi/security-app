<template>
	<view class="child1">
		<view class="top">
			<view class="bg-red" v-for="(item,index) in 8" :key="index">
				{{item}}
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
	.child1 {
		.top {
			@include grid-custom(3fr 2fr);
			background-color: #FFF;
			padding: 20rpx;
		}
	}
</style>