<template>
	<view class="child2">
		<scroll-view scroll-y="true" class="position-relative" :style="{height:`${height}px`}">
			<top-panel />
			<view class="bg-red" :style="{height:`${height-60}px`}">
				统计图
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import topPanel from './top-panel.vue';
	export default {
		props: ["height"],
		components: {
			topPanel
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
	.child2 {
		.bottom-abs {
			height: 30px;
			position: absolute;
			bottom: 0;
			padding-bottom: calc(10px + env(safe-area-inset-bottom));
			background-color: #FFFFFF;
		}
	}
</style>