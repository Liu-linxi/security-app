<template>
	<view class="">
		<row-header />
		<scroll-view scroll-y :style="{height:`${height}px`}" @scroll="comHeight" :scroll-top="scollTop">
			<view class="" v-for="li in 100">
				{{li}}
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import rowHeader from './components/row-header.vue';
	export default {
		components: {
			rowHeader,
		},
		data() {
			return {
				scollTop: 0,
				height: 0
			};
		},
		onLoad() {
			const info = uni.getWindowInfo();
			this.height = info.windowHeight - 44;
		},
		methods: {
			comHeight(e) {
				this.scollTop = e.detail.scrollTop;
			}
		}
	}
</script>

<style lang="scss">

</style>