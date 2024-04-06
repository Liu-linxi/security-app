<template>
	<view class="son1">
		<view class=" border-bottom mx-2" style="position: sticky;	top: 110rpx;">
			<view class="grid4 py-2  text-center">
				<view class="gray" v-for="(li,index) in nameList" :key="li">
					{{li}}
					<image src="" style="width: 15rpx; height: 30rpx;vertical-align: middle;" class="bg-red ml-1" v-if="sort&&index==3" mode=""></image>
				</view>
			</view>
		</view>
		
		<template  v-if="sort">
			<view class="font-sm d-flex a-center mx-2 py-3 border-bottom" v-if="nameShowTip">
				阿什杜哈空间和时间可是不能分别是大部分大好时机开发和深刻觉得很烦
				<view class="w-20 flex-shrink text-right" @click="nameShowTip=!nameShowTip">
					<uni-icons type="closeempty" size="22" color="#c2c2c2"></uni-icons>
				</view>
			</view>
			<!-- AH股份 -->
			<view class="grid4 font32 mx-2 heigh-item2 border-bottom" v-for="li in 10">
				<view class="name text-left">
					<view class="text-nowrap">
						<uni-tag text="A" inverted circle type="primary" size="small" custom-style=" border-color: #4335d6; color: #4335d6;" class="mr-1"/>
						腾讯控股
					</view>
					<view class="text-nowrap gray mt-1">
						<uni-tag text="A" inverted circle type="primary" size="small" custom-style=" border-color: #ffaa00; color: #ffaa00;" class="mr-1"/>
						Hk7899
					</view>
				</view>
				<view class="">
					<view class="green">
						321.000
					</view>
					<view class="red mt-1">
						321.000
					</view>
				</view>
				<view class="">
					<view class="green">
						0.34%
					</view>
					<view class="red mt-1">
						0.34%
					</view>
				</view>
				<view class="red">
					0.34%
				</view>
			</view>
		</template>
		<template  v-else>
			<view class="grid4  mx-2 heigh-item border-bottom" v-for="li in 10">
				<view class="name">
					<view class="font32">腾讯控股</view>
					<view class="font-sm line-h-md mt-1">
						<text class="tags">沪深</text> 
						<text>HK7899</text>
					</view>
				</view>
				<view class="red">
					321.000
				</view>
				<view class="red">
					0.34%
				</view>
				<view class="">
					7897892
				</view>
			</view>
		</template>
		
	</view>
</template>

<script>
	export default {
		props:["nameList","sort"],
		data() {
			return {
				nameShowTip:true,
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.son1 {
		background-color: #FFFFFF;

		.grid4 {
			background-color: #FFFFFF;
		}
		.heigh-item{
			height: 110rpx;
			text-align: center;
		}
		.tags{
			background-color: #4052d9;
			color: #FFFFFF;
			padding: 4rpx;
			font-size: 10rpx;
			border-radius: 4rpx;
			margin-right: 10rpx;
		}
		.heigh-item2{
			height: 140rpx;
			text-align: center;
		}
	}
</style>