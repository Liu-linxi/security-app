<template>
	<view class="login">
		<view class=" text-center pt-5">
			<image src="" style="width: 150rpx;height: 150rpx;" class="bg-red mt-5 " mode=""></image>
		</view>
		<view class="px-5 mt-5 pt-4">
			<view class="border-bottom d-flex a-center py-2">
				<image src="" style="width: 50rpx;height:50rpx;" class="bg-red mr-1" mode=""></image>
				<uni-easyinput v-model="username" :inputBorder="false" style="background-color: #f6f6f6;" :clearable="false" maxlength="20" placeholder="请输入您的资金账号"></uni-easyinput>
				<u-icon name="arrow-down" size="16"></u-icon>
			</view>
			<view class="border-bottom d-flex a-center py-2">
				<image src="" style="width: 50rpx;height:50rpx;" class="bg-red mr-1" mode=""></image>
				<uni-easyinput v-model="password" type="password" :inputBorder="false" :clearable="false" placeholder="请输入交易密码"></uni-easyinput>
			</view>
			<view class="border-bottom d-flex a-center py-2" v-show="showCode">
				<image src="" style="width: 50rpx;height:50rpx;" class="bg-red mr-1" mode=""></image>
				<uni-easyinput v-model="code"  :inputBorder="false" :clearable="false" placeholder="无动态口令可以不输入"></uni-easyinput>
			</view>
		</view>
		<view class="d-flex px-5 font-sm gray a-center j-sb my-3">
			<view class="d-flex a-center">
				<image src="" style="width: 50rpx;height:50rpx;" class="bg-red mr-1" mode=""></image>
				增强安全通道
			</view>
			
			<view class="blue">
				证书管理
			</view>
		</view>
		<view class="d-flex j-end">
			<label class="gray" @click="showCode=!showCode" style="transform: scale(0.7);" >
				动态口令
				<switch :checked="showCode" class="ml-1" />
			</label>
		</view>
		<view class="bg-red mx-5 rounded-circle shadow text-center py-2 mt-2 text-white">
			普通交易登录
		</view>
		<view class="d-flex a-center j-sb mt-3 blue mx-5">
			登录遇到问题
			<view class="">
				保持在线：<text class="border blueBord">10分钟</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				code:"",
				showCode:false
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.login {
		::v-deep .uni-easyinput__content-input {
			background-color: #f6f6f6;
		}
		.blue {
			color: #498cdb;
		}
		.blueBord{
			border-color: #498cdb;
			padding: 5rpx 10rpx;
		}
	}
</style>