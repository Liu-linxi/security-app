<template>
	<view class="child5">
		<module1/>
		<module2/>
		<module3/>
	</view>
</template>

<script>
	import module1 from './components/module1.vue';
	import module2 from './components/module2.vue';
	import module3 from './components/module3.vue';
	export default {
		components:{
			module1,
			module2,
			module3
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
	.child5 {
		background-color: #f6f6f6;
	}
</style>