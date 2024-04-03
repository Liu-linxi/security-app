<template>
	<view class="child1">
		<row-panel title="国内股指" :list="6" class="mb-2"/>
		<row-panel title="股指期货" :list="3" class="mb-2"/>
		<row-panel title="其他指数" :list="4" class="mb-2"/>
	</view>
</template>

<script>
	import rowPanel from './components/row-panel.vue';
	export default {
		components:{
			rowPanel
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.child1 {
		background-color: #f6f6f6;
	}
</style>