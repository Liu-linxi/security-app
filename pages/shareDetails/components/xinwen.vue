<template>
	<view class="xinwen position-relative">
		<view class="" style="position: sticky;top: 0;background-color: #f3f3f3;">
			<row-tabs :activeIndex="activeIndex" @changeActive="changeActive" />
		</view>
		<template v-if="activeIndex==0">
			<view class="p-3" v-for="(item,index) in 30">
				<view class="">
					撒到付款哈萨克了解到哈萨克较好的扩散上课了大家撒离开家
				</view>
				<view class="d-flex a-center j-sb gray">
					<view class="">
						啊实打实
					</view>
					<view class="21">
						21321s
					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import rowTabs from './row-tabs.vue';
	export default {
		components: {
			rowTabs
		},
		props: {

		},
		data() {
			return {
				activeIndex: 0,
			}
		},
		mounted() {

		},
		methods: {
			changeActive(index) {
				this.activeIndex = index;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.xinwen {
		background-color: #f3f3f3;
		padding-bottom: calc(70px + env(safe-area-inset-bottom));
	}
</style>