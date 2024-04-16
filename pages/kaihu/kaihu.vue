<template>
	<view class="kaihu">
		<view class="" v-if="step==1">
			<image src="" style="height: 300rpx;" class="bg-red w-100" mode=""></image>
			<view class="bg-white">
				<view class="border-bottom d-flex a-center py-2 ml-2">
					<uni-easyinput v-model="phone" :inputBorder="false" style="background-color: #f6f6f6;" :clearable="false" maxlength="11" placeholder="请输入您的资金账号"></uni-easyinput>
				</view>
				<view class="d-flex a-center py-1 ml-2 pr-2">
					<uni-easyinput v-model="code" :inputBorder="false" style="background-color: #f6f6f6;" :clearable="false" maxlength="11" placeholder="请输入图形验证码"></uni-easyinput>
					<image src="" style="width: 160rpx; height: 70rpx;" class="bg-red" mode="" @click="tochangeImg"></image>
				</view>
			</view>
			<view class="bg-reds" :class="{diab:!code&&!phone}" @click="tochange">
				开始开户
			</view>
			<view class="gray font-sm text-center my-2">
				请输入您本人实名登记的手机号
			</view>
			<view class="mx-4 border rounded-md pb-3">
				<view class="my-2 d-flex a-center  j-center">
					<image src="" style="width:60rpx;height: 28rpx;" class="bg-red mr-2" mode=""></image>
					开户前请准备好
					<image src="" style="width:60rpx;height: 28rpx;" class="bg-red mlr-2" mode=""></image>
				</view>
				<view class="mx-3 d-flex a-center mt-1 gray" v-for="(item,index) in tipsList" :key="index">
					<image src="" style="width: 40rpx; height: 30rpx;" class="bg-red" mode=""></image>
					<text class="ml-2">{{item.name}}</text>
				</view>
			</view>
			<view class="gray  text-center my-2">
				支持银行
			</view>
			<view class="mx-3">
				<uni-swiper-dot :info="[0,1,2,3]" :current="current" mode="dot" :dotsStyles="dotsStyles">
					<swiper class="swiper-box" @change="change" style="height: 200rpx;">
						<swiper-item v-for="(item ,index) in 4" :key="index">
							<view class="grid4">
								<view class="text-center" v-for="(item,index) in 4" :key="index">
									<image src="" style="width: 100rpx;height: 100rpx;" class="bg-red rounded-circle" mode=""></image>
									<view class="">
										测试银行
									</view>
								</view>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
			<view class="py-3 d-flex a-center j-center">
				<view class="rounded-circle border px-1 mr-2">
					<uni-icons type="phone-filled" size="14" color="#c2c2c2"></uni-icons>
				</view>
				客服热线 <text class="ml-1">3242</text>
				<image src="" style="width: 40rpx;height: 30rpx;" class="bg-red ml-2" mode=""></image>
			</view>
		</view>

		<view class="  p-3" v-if="step==2">
			<view class="bg-white">
				<view class="gray text-center mx-5">
					已向{{phone}}发送送验证带哦的环境很好sdjhasuk，阿桑的歌把手机还给
				</view>
				<view class="d-flex j-center mt-2">
					<u-code-input v-model="phonercode" :maxlength="4" :space="0" focus @finish="tonext"></u-code-input>
				</view>
				<view class="text-right mr-5 red py-2" v-if="showCode" @click="toconfired">
					收不到验证码？
				</view>
			</view>
			<view class="text-center mt-2 red" v-if="showCode" @click="secondeStatt">
				重新获取验证码
			</view>
			<view class="gray text-center mt-2" v-else>
				{{seconed}}秒重新获取
			</view>
		</view>
	</view>
</template>

<script>
	import section from '../../uni_modules/uview-ui/libs/config/props/section';
	let timer = null;
	export default {
		data() {
			return {
				step: 1,
				phone: "1354646",
				code: "",
				tipsList: [
					{ name: "标题", icon: "" },
					{ name: "标题", icon: "" },
					{ name: "标题", icon: "" },
				],
				dotsStyles: {
					bottom: 2,
					backgroundColor: '#c2c2c2',
					border: 'none',
					color: '#ffaa00',
					selectedBackgroundColor: ' rgba(212 ,50, 44, 0.3)',
					selectedBorder: 'none'
				},
				current: 0,
				phonercode: "",
				seconed: 3,
				showCode: false,
			}
		},
		onLoad() {},
		methods: {
			tonext(){
				uni.$u.toast("开始验证成功跳转 ")
				uni.navigateTo({
					url:"kaihu1"
				})
				console.log(12321);
			},
			
			
			toconfired() {
				console.log(uni.$u);
				uni.showModal({
					content: "测试",
					showCancel: false,
					success(res) {
						if (res.confirm) {
							uni.$u.toast("点击了 ")
						}
					}
				})
			},

			change(e) {
				this.current = e.detail.current;
			},
			tochange() {
				if (!this.phone || !this.code) return
				uni.$u.toast("切换下一个 ")
				this.secondeStatt()
				this.step = 2;
			},
			secondeStatt() {
				console.log(123);
				if (timer) clearInterval(timer);
				this.showCode = false;
				timer = setInterval(() => {
					if (this.seconed == 1) {
						this.seconed = 10;
						this.showCode = true;
						return
					}
					this.seconed--;
				}, 1000)
			},
			tochangeImg() {
				uni.$u.toast("切换图片")
			},
		}
	}
</script>

<style scoped lang="scss">
	.kaihu {

		.bg-reds {
			margin: 40rpx 20px;
			color: #FFF;
			line-height: 3;
			text-align: center;
			border-radius: 8rpx;
			background-color: #d4322c;

			&.diab {
				background-color: #d48476;
			}
		}
	}
</style>