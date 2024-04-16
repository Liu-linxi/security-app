<template>
	<view class="kaihu1">
		<uni-nav-bar fixed :border="false" leftWidth="140rpx" rightWidth="140rpx" backgroundColor="#e72f2f" color="#FFFFFF">
			<view class="center">
				三方存管
			</view>
			<block slot="right">
				<view class="rightbloc">
					开户进度
				</view>
			</block>
		</uni-nav-bar>
		<view class="gray font-sm p-2">
			请绑定本人借记卡用于资金存取
		</view>
		<view class="bg-white px-2">
			<view class="d-flex border-bottom j-sb a-center py-2 text-nowrap">
				<view class="d-flex a-center w-100">
					<view class="gray w-24">持卡人</view>
					持卡人
				</view>
				<view class="">
					<uni-icons type="info" size="30" color="#a9a9a9"></uni-icons>
				</view>
			</view>
			<view class="d-flex j-sb a-center py-2 text-nowrap">
				<view class="d-flex a-center w-100">
					<view class="gray w-24">银行名称</view>
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view class="uni-input">{{array[index]}}</view>
					</picker>
				</view>
				<view class="">
					<uni-icons type="right" size="30" color="#a9a9a9"></uni-icons>
				</view>
			</view>
		</view>
		<view class="p-2 font-sm" style="color: #e59346;">
			请输入银行卡号和密码完成第三方存管签约;如自动识别错误，请手工修改。
		</view>

		<view class="p-2 d-flex a-center bg-white">
			<view class="d-flex a-center w-100">
				<view class="gray w-24">银行卡号</view>
				6217002440004319919
			</view>
			<view class="">
				<uni-icons type="scan" size="30" color="#a9a9a9"></uni-icons>
			</view>
		</view>
		<view class="p-2">
			<label @tap="change" class="d-flex a-center">
				<checkbox :checked="checkbox1" style="transform:scale(0.7)" />
				本人已仔细阅读<text class="red" @click.stop="toxieyi">《建设银行存管协议》</text>
			</label>
		</view>

		<view class="mx-2 mt-2 bggray" :class="{active:checkbox1}" @click="tonext">
			下一步
		</view>
		<view class="bg-white p-2 mt-2">
			<view class="d-flex a-center j-sb">
				支持的银行借记卡
				<uni-icons type="right" size="20" color="#a9a9a9"></uni-icons>
			</view>
			<view class="grid3 mt-4">
				<view class="d-flex a-center text-nowrap" v-for="(item,index) in 19" :key="index">
					<image src="" style="width: 40rpx;height: 40rpx;" class="bg-red mr-1" mode=""></image>
					测试银行
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['中国银行', '建设银行', '邮政银行'],
				index: 0,
				checkbox1: false
			}
		},
		mounted() {

		},
		methods: {
			tonext(){
				if(!this.checkbox1)return
				uni.navigateTo({
					url:"kaihu2"
				})
			},
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			change() {
				this.checkbox1 = !this.checkbox1
			},
			toxieyi() {
				uni.navigateTo({
					url: "xieyi",
					events: {
						isCheck: (data) => {
							this.checkbox1 = true;
						},
					},
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.kaihu1 {
		.center {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			color: rgba(255, 255, 255, 1);
			font-size: 32rpx;
		}

		.rightbloc {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.bggray {
			text-align: center;
			padding: 20rpx 0;
			background-color: #d4827c;
			letter-spacing: 8rpx;
			border-radius: 10rpx;
			color: #fff;

			&.active {
				background-color: #d4322c;
			}
		}

	}
</style>