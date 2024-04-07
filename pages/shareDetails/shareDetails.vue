<template>
	<view class="">
		<row-header :current="current"/>
		<uni-swiper-dot :info="[0,1]" :current="current" field="content">
			<swiper class="swiper-box" @change="change" :style="{height:`${height}px`}">
				<swiper-item>
					<child1 :height="height" />
				</swiper-item>
				<swiper-item>
					<child2 :height="height" />
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script>
	import rowHeader from './components/row-header.vue';
	import child1 from './components/child1.vue';
	import child2 from './components/child2.vue';
	export default {
		components: {
			rowHeader,
			child1,
			child2
		},
		data() {
			return {
				current: 0,
				height: 0
			};
		},
		onLoad() {
			const info = uni.getWindowInfo();
			this.height = info.windowHeight - 44;
		},
		methods: {

			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style lang="scss">

</style>