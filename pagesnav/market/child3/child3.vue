<template>
	<view class="child3">
		<module1 class="mb-2"/>
		<module2 title="行业板块" :list="6" class="mb-2"/>
		<module2 title="概念板块" :list="6" class="mb-2"/>
		<module2 title="快速涨幅" :list="6" showli class="mb-2"/>
	</view>
</template>

<script>
	import module1 from './components/module1.vue';
	import module2 from './components/module2.vue';
	export default {
		components:{
			module1,
			module2
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
	.child3 {
		background-color: #f6f6f6;
	}
</style>