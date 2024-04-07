<template>
	<view class="home">
		<row-header />
		<row1 />
		<row2 />
	</view>
</template>

<script>
	import rowHeader from './components/row-header.vue';
	import row1 from './components/row1.vue';
	import row2 from './components/row2.vue';
	export default {
		components: {
			rowHeader,
			row1,
			row2
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
	.home {}
</style>