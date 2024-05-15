<template>
	<view class="mine">
		<uni-nav-bar :statusBar="true" v-if="scollTop>0" fixed :border="false" backgroundColor="rgba(231,47,47,1)" color="#FFFFFF" rightIcon="gear" @clickRight="rightClick" :style="{opacity}">
		</uni-nav-bar>
		<view class="top-0 text-right" v-else>
			<uni-icons type="gear" size="24" color="#FFF" class="mr-2" @clickRight="rightClick" ></uni-icons>
		</view>
		<scroll-view scroll-y :style="{height:`${height}px`}" @scroll="comHeight" :scroll-top="scollTop" style="background-color: #f3f3f3;">
			<row1 />
			<row2 />
			<row3 />

		</scroll-view>
	</view>
</template>

<script>
	import row1 from './components/row1.vue';
	import row2 from './components/row2.vue';
	import row3 from './components/row3.vue';
	export default {
		components: {
			row1,
			row2,
			row3,
		},
		props: {

		},
		data() {
			return {
				height: 0,
				scollTop: 0,
				opacity: 0
			}
		},
		async onLoad() {
			const info = uni.getWindowInfo();
			this.height = info.windowHeight - 50;
		},
		methods: {
			comHeight(e) {
				this.scollTop = e.detail.scrollTop;
				if(this.opacity<1)this.opacity = e.detail.scrollTop / 103;
				
			},
			rightClick() {
				uni.showToast({
					icon: "none",
					title: "设置内容"
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.mine {
		.top-0 {
			background: linear-gradient(to right, #ed4b3c, #fe705c);
			height: 88rpx;
			line-height: 88rpx;
			padding-right: 200rpx;
			width: 100%;
		}
	}
</style>