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
				list:["测试","测试1","测试2","测试3","测试4","测试5"]
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
		padding: 20rpx 20rpx;
		height: 90rpx;
		line-height: 60rpx;
		display: grid;
		grid-template-columns: repeat(6,1fr);
		font-size: 28rpx;
		background-color: #FFFFFF;
		.item{
			text-wrap: nowrap;
			text-align: center;
			background-color: #e3e3e3;
			margin: 10rpx;
		}
		.active{
			color: #ffffff;
			background-color: #e72f2f;
		}
	}
</style>