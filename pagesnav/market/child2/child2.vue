<template>
	<view class="child2">
		<view class="mb-3" v-for="(item, index) in list" :style="{order: index}" :key="index" >
			 <component :is="item" @orderChange="orderChange" :index="index"/>
		</view>
	</view>
</template>

<script>
	import module1 from './components/module1.vue';
	import module2 from './components/module2.vue';
	import module3 from './components/module3.vue';
	import module4 from './components/module4.vue';
	export default {
		components:{
			module1,
			module2,
			module3,
			module4
		},
		props: {

		},
		data() {
			return {
				list: [module1, module2, module3, module4],
				// list: [module4]
			}
		},
		mounted() {

		},
		methods: {
			orderChange(index){
				console.log(index);
				const { list } = this
				list.unshift(...list.splice(index, 1))
				this.list = list
			},
		}
	}
</script>

<style lang="scss" scoped>
	.child2 {
		background-color: #f6f6f6;
		display: flex;
		flex-direction: column;
	}
</style>