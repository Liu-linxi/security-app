<template>
	<view class="row2">
		<view class="" style="position: sticky;top: 44px;background-color: #ffffff; z-index: 1;">
			<row-tabs :activeIndex="activeIndex" @changeActive="changeActive" />
		</view>
		<row3 v-if="activeIndex==1"/>
		<faxian v-if="activeIndex==0"/>
	</view>
</template>

<script>
	import rowTabs from './row-tabs.vue';
	import row3 from './row3/row3.vue';
	import faxian from './faxian/faxian.vue';
	export default {
		components: {
			rowTabs,
			row3,
			faxian
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