<template>
	<view class="row2 px-3 ">
		<view class="grid4">
			<view class="item" v-for="(item,index) in 8">
				<image src="" style="width: 120rpx;height:120rpx;" class="bg-red" mode=""></image>
				<view class="gray">
					阿萨德
				</view>
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
				
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.row2{
		.grid4{
			grid-gap: 15rpx 20rpx;
			.item{
				background-color: #FFFFFF;
				text-align: center;
				padding: 20rpx 0;
			}
		}
	}
</style>