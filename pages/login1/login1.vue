<template>
	<view class="login1">
		<uni-nav-bar fixed :border="false" leftText="关闭" title="注册登录" @clickLeft="back" rightWidth="140rpx" backgroundColor="#e72f2f" color="#FFFFFF">
		</uni-nav-bar>
		<view class="bg-white px-5 mt-4">
			<view class="border-bottom d-flex a-center py-2">
				<image src="" style="width: 30rpx;height:40rpx;" class="bg-red mr-1" mode=""></image>
				<uni-easyinput v-model="phone" :inputBorder="false" :clearable="false" placeholderStyle="font-size:14px;" maxlength="11" placeholder="请输入手机号码"></uni-easyinput>
			</view>
			<view class="border-bottom d-flex a-center py-2">
				<image src="" style="width: 30rpx;height:40rpx;" class="bg-red mr-1" mode=""></image>
				<uni-easyinput v-model="code" :inputBorder="false" :clearable="false" placeholderStyle="font-size:14px;" placeholder="请输入短信验证码"></uni-easyinput>
				<view class="wrap">
					<!-- <u-code :seconds="seconds"  ref="uCode" @change="codeChange"></u-code> -->
					<u-code :seconds="seconds" changeText="获取验证码(X)" @start="start" @end="end" ref="uCode" @change="codeChange"></u-code>
				</view>
				<view :class="phone.length==11&&!showRed?'red':'gray'" @tap="getCode">
					{{tips}}
				</view>
			</view>
		</view>
		<view class="gray font-sm pl-5 my-2">
			* 根据监管规定，首次登路需进行和手机验证*
		</view>
		<view class="rounded-md py-2 text-center mx-4 text-white" :class="phone.length==11&&!code?'bg-red':'bgdark'">
			登 录
		</view>
		<view class="mx-3 mt-2 font-sm gray">
			<label class="radio" @click="radio=!radio">
				<radio value="r1" color="#d4322c" :checked="radio" style="transform: scale(0.7);" />我已阅读
				<text class="uni-primary" @click.stop="">《asdiohjasih1hiuh按实际刁俊》</text>和
				<text class="uni-primary" @click.stop="">《asdiohjasih1hiuh按实际刁俊》</text>
			</label>
		</view>
		<view class="font gray text-center mt-2">
			收不到验证码，<text class="red"> 试试语音验证码</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				phone: "",
				code: "",
				seconds: 10,
				tips: '',
				showRed: false,
				radio: false,
			}
		},
		mounted() {

		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					if (!this.phone || this.phone.length < 11) return;
					// 模拟向后端请求验证码
					this.$refs.uCode.start();
				} else {
					// uni.$u.toast('倒计时结束后再发送');
				}
			},
			end() {
				uni.$u.toast('倒计时结束');
				this.showRed = false;
			},
			start() {
				uni.$u.toast('倒计时开始');
				this.showRed = true;
			},
			back() {
				uni.navigateBack()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.login1 {
		.bgdark {
			background-color: #7d7d7d;
		}
		.uni-primary{
			text-decoration: underline;
		}
	}
</style>