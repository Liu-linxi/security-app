<template>
	<view class="row2">
		<view class="" style="position: sticky;top: 44px;background-color: #ffffff;">
			<row-tabs :activeIndex="activeIndex" @changeActive="changeActive" />
		</view>
		<view class="" v-for="(item,index) in 50">
			{{item}}
		</view>
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

<style scoped lang="scss">
	.row2 {}
</style>