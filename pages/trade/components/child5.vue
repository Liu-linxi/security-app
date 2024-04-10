<template>
	<view class="child5">
		<view class="bg-white px-3 py-2 d-flex a-center j-sb border-bottom" v-for="(item,index) in staticArr" :key="index">
			<view class="">
				{{item}}
			</view>
			<uni-icons type="right" size="16" color="#c2c2c2"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			
		},
		data(){
			return{
				staticArr: ["港股通", "新三板", "网络投票", "OTC", "天天汇利", "可转债转股", "要约收购", "盘后固定价格交易", "债券交易", "现金行权", "修改密码"],
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.child5{
		
	}
</style>