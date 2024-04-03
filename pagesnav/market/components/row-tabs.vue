<template>
	<view class="tabs">
		<view class="item" v-for="(li,index) in list" :class="{active:activeIndex==index}" :key="li" @click="changeActive(index)">
			{{li}}
		</view>
	</view>
</template>

<script>
	export default {
		props:["activeIndex"],
		data(){
			return{
				list:["股指","沪深京"," 板块","科创板","港股","其他"]
			}
		},
		methods:{
			changeActive(index){
				this.$emit("changeActive",index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tabs{
		height: 90rpx;
		line-height: 90rpx;
		border-bottom: 1rpx solid #e2e2e2;
		display:  flex; 
		align-items: center;
		font-size: 28rpx;
		.item{
			text-align: center;
			width: 125rpx;
		}
		.active{
			color: #e72f2f;
			border-bottom: 2rpx solid #e72f2f;
		}
	}
</style>