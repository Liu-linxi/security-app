<template>
	<view class="child3">
		<view class="grid4 pt-1">
			<view class="text-center text-light-muted" v-for="(item,index) in list" :key="index">
				{{item}}
			</view>
		</view>
		<view class="grid4 "  v-for="(item,index) in 4" :key="index">
			<view class="text-center">
				模拟{{item}}
			</view>
			<view class="text-center">
				模拟{{item}}
			</view>
			<view class="text-center">
			模拟	{{item}}
			</view>
			<view class="text-center">
			模拟	{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			
		},
		data(){
			return{
				list:["委托时间","委托/均价","委托/成交","状态"]
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.child3{
		
	}
</style>