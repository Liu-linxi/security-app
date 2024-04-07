<template>
	<view class="">
		<row-header />
		<row1/>
		<row2/>
		<row3/>
		<row4/>
	</view>
</template>

<script>
	import rowHeader from './components/row-header.vue';
	import row1 from './components/row1.vue';
	import row2 from './components/row2.vue';
	import row3 from './components/row3.vue';
	import row4 from './components/row4.vue';
	export default {
		components: {
			rowHeader,
			row1,
			row2,
			row3,
			row4,
		},
		onPullDownRefresh(){
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},1000)
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
