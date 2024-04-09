<template>
	<view class="tabs text-nowrap" :class="{num4:num==4,num8:num==8,num7:num==7}" :style="{height}">
		<view class="item" v-for="(li,index) in list" :class="{active:activeIndex==index,borderShow:borderShow&&activeIndex==index}" :key="li" @click="changeActive(index)">
			{{li}} 
		</view>
	</view>
</template>

<script>
	export default {
		props:["activeIndex","list","num","borderShow","height"],
		data(){
			return{
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
		font-size: 24rpx;
		height: 55px;
		&.num4{
			@include grid-layout(3);
		}
		&.num8{
			@include grid-layout(8);
		}
		&.num7{
			@include grid-layout(7);
		}
		.item{
			text-align: center;
			padding: 10rpx 0;
		}
		.active{
			color: #e72f2f;
		}
		.borderShow{
			border-bottom: 2rpx solid #e72f2f;
		}
	}
</style>