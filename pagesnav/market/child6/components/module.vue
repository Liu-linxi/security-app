<template>
	<view class="module">
		<view class="title mb-4">
			{{title}}
		</view>
		<view class="">
			<slot></slot>
		</view>
		<view :class="grid">
			<view class="item border text-center rounded-sm py-3 position-relative overflow-hidden" v-for="(li,index) in list" :key="index">
				{{li}}
				<view class="tags font-sm" v-if="li==4">
					new
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["title","grid","list"],
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.module {
		background-color: #FFFFFF;
		padding: 30rpx;
		margin-bottom: 20rpx;
		.tags{
			position: absolute;
			right: 0;
			top: 0;
			padding: 2rpx 10rpx 8rpx;
			color: #FFFFFF;
			background-color: #d4322c;
			line-height: 1;
		}
	}
</style>