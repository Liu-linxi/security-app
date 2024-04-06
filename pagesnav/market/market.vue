<template>
	<view>
		<row-header @headerChange="headerChange" />
		<template v-if="headerBool==1">
			<row-tabs :activeIndex="activeIndex" @changeActive="changeActive" />
			<swiper :current="activeIndex" @change="animationfinish" :style="{height:`${height}px`}">
				<swiper-item class="swiper-item" v-for="(item, index) in componentList" :key="index">
					<scroll-view scroll-y :style="{height:`${height}px`}" @scrolltolower="onreachBottom" @scroll="comHeight" :scroll-top="scollTop">
						<component :is="item" />
						<view class="position-fixed" v-if="4&&scollTop>300" @click="scollTop=0">
							<u-icon name="download" color="#c2c2c2" size="26"></u-icon>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</template>
		<template v-else>
			<zixuan/>
		</template>
	</view>
</template>

<script>
	import rowHeader from './components/row-header.vue';
	import zixuan from './zixuan/zixuan.vue';
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
			zixuan,
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
				componentList: [child1, child2, child3, child4, child5, child6],
				scollTop: 0,
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
			onreachBottom() {},
			comHeight(e) {
				this.scollTop = e.detail.scrollTop;
			}
		}
	};
</script>

<style scoped lang="scss">
	.position-fixed {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		right: 20rpx;
		bottom: 50rpx;
		background-color: #ffffff;
		box-shadow: 0 0 20rpx #CCCCCC;
		transform: rotate(180deg);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>