<template>
	<view class="tabs">
		<view class="item" v-for="(li,index) in list"  :key="li" @click="changeActive(index)">
			<text class="" :class="{active:activeIndex==index}">
				{{li}}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		props:["activeIndex"],
		data(){
			return{
				list:["新闻","阿萨1","阿萨2","阿萨3","阿萨4"]
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
		display: grid;
		grid-template-columns: repeat(5,1fr);
		font-size: 28rpx;
		
		.item{
			text-align: center;
			// width: 125rpx;
		}
		.active{
			padding-bottom: 20rpx;
			// color: #e72f2f;
			font-size: 34rpx;
			font-weight: bold;
			border-bottom:8rpx solid #ec9a49;
		}
	}
</style>