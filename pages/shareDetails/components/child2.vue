<template>
	<view class="child2">
		<view class="position-relative" :style="{height:`${height}px`}">
			<top-panel />
			<view class="bg-red" :style="{height:`${height-130}px`}">
				统计图
			</view>
			<view class="bottom-abs">
				<child2-dibu />
			</view>
		</view>
	</view>
</template>

<script>
	import topPanel from './top-panel.vue';
	import child2Dibu from './child2-dibu.vue';
	export default {
		props: ["height"],
		components: {
			topPanel,
			child2Dibu
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
			width: 100%;
			height: 60px;
			position: fixed;
			bottom: 0;
			padding-bottom: calc(10px + env(safe-area-inset-bottom));
			background-color: #FFFFFF;
		}
	}
</style>