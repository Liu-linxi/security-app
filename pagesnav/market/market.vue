<template>
	<view>
		<row-header @headerChange="headerChange" />
		<template v-if="headerBool==1">
			<row-tabs :activeIndex="activeIndex" @changeActive="changeActive" />
			<swiper :current="activeIndex" @change="animationfinish" :style="{height:`${height}px`}">
				<swiper-item class="swiper-item" v-for="(item, index) in componentList" :key="index">
					<scroll-view scroll-y :style="{height:`${height}px`}" @scrolltolower="onreachBottom">
						<component :is="item" />
					</scroll-view>
				</swiper-item>
			</swiper>
		</template>

	</view>
</template>

<script>
	import rowHeader from './components/row-header.vue';
	import rowTabs from './components/row-tabs.vue';
	import child1 from './child1/child1.vue';
	import child2 from './child2/child2.vue';
	import child3 from './child3/child3.vue';
	import child4 from './child4/child4.vue';
	import child5 from './child5/child5.vue';
	import child6 from './child6/child6.vue';
	export default {
		components: {
			rowHeader,
			rowTabs,
			child1,
			child2,
			child3,
			child4,
			child5,
			child6,
		},
		data() {
			return {
				height: 0,
				activeIndex: 0,
				headerBool: 0,
				componentList: [child1, child2,child3,child4,child5,child6]
			};
		},
		async onLoad() {
			const info = uni.getWindowInfo();
			this.height = info.windowHeight - 90;
		},
		methods: {
			headerChange(index) {
				this.headerBool = index;
			},
			changeActive(index) {
				this.activeIndex = index;
			},
			animationfinish(e) {
				let current = e.detail.current;
				this.activeIndex = current;
			},
			onreachBottom() {}
		}
	};
</script>

<style scoped lang="scss">
</style>