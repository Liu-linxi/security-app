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
				<uni-easyinput v-model="code" :inputBorder="false" :clearable="false" placeholder="无动态口令可以不输入"></uni-easyinput>
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
			<label class="gray" @click="showCode=!showCode" style="transform: scale(0.7);">
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
				保持在线：<text class="border blueBord" @click="show = true">{{colArray[colIndex]}}</text>
			</view>
		</view>
		<view class="fixed">
			<view class="gray">
				不是XX证券客户
			</view>
			<view class="blue">
				立即开户
			</view>
		</view>
		<u-picker :show="show" :columns="columns" @confirm="confirm" @cancel="show=false" title="选择时长"></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				code: "",
				showCode: false,
				show: false,
				columns: [
					['10分钟自动退出', '30分钟自动退出', '60分钟自动退出', '180分钟自动退出']
				],
				colIndex: 0,
				colArray: ["10分钟", "30分钟", "60分钟", "180分钟"]
			}
		},
		onShow() {
			uni.showModal({
				content: "检测到未登录",
				success(res) {
					if (res.confirm) {
						// 数据对接判断后自动导航过去
						uni.navigateTo({
							url: "/pages/login1/login1"
						})
					}


				}
			})
		},
		methods: {
			confirm({ indexs }) {
				this.colIndex = indexs[0];
				this.show = false;
				console.log(indexs);
			}
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

		.blueBord {
			border-color: #498cdb;
			padding: 5rpx 10rpx;
		}

		.fixed {
			position: fixed;
			bottom: 40rpx;
			left: 0;
			right: 0;
			text-align: center;

		}
	}
</style>