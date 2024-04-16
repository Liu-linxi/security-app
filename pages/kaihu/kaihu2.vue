<template>
	<view class="kaihu2">
		<uni-nav-bar fixed :border="false" leftWidth="140rpx" rightWidth="140rpx" backgroundColor="#e72f2f" color="#FFFFFF">
			<view class="center">
				开户结果
			</view>
			<block slot="right">
				<view class="rightbloc">
					开户进度
				</view>
			</block>
		</uni-nav-bar>

		<view class="bg-white p-3 px-5">
			<view class="d-flex row1">
				<view class="flex-shrink left"></view>
				<view class="flex-shrink right">
					<view class="position-relative">
						开户申请已提交成功
						<view class="gray font-sm">
							2024-04-02 16:05:11
						</view>
						<view class="pofix">
							<u-icon name="checkmark-circle-fill" color="#f33f3c" size="28"></u-icon>
						</view>
					</view>
					<view class="mt-5 position-relative">
						预计一个工作日内反馈结果
						<view class="gray font-sm">
							您的开启姿料正在审核中
						</view>
						<view class="pofix">
							<image src="" style="width: 28px;height: 28px;" class="bg-light-secondary rounded-circle" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="d-flex a-center j-center mt-5">
				<view class="bg-red text-white text-center  btn">
					刷新进度
				</view>
				<view class="red ml-2  text-center btn">
					联系客服
				</view>
			</view>
		</view>

		<view class="btm bg-white px-3">
			<view class="border-bottom py-2 d-flex a-center j-sb" v-for="(item,index) in dataArray" :key="index">
				<view class="" style="color: #727272;">
					{{item.name}}
				</view>
				<view class="">
					{{item.val}}
				</view>
			</view>
			<view class="py-1 red  d-flex a-center j-center font-sm" @click="shordata=!shordata">
				{{shordata?"收起":"更多信息"}}
				<u-icon :name="shordata?'arrow-up':'arrow-down'" color="#d4322c" size="12"></u-icon>
			</view>
		</view>
		<view class="bg-red text-white text-center mt-5 mx-4 btn">
			退出开户
		</view>
	</view>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
				dataList: [
					{ name: "客户姓名", val: "张三" },
					{ name: "客户号", val: "受理中" },
					{ name: "一码通账号", val: "234234234" },
					{ name: "资金账户", val: "32423423" },
					{ name: "客户号", val: "受理中" },
					{ name: "一码通账号", val: "234234234" },
					{ name: "资金账户", val: "32423423" },
				],
				shordata: false,
			}
		},
		computed: {
			dataArray() {
				if (this.shordata) return this.dataList;
				return this.dataList.slice(0, 4)
			},
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.kaihu2 {
		.btn {
			padding: 15rpx 70rpx;
			border-radius: 8rpx;
			border: 1rpx solid #d4322c;
		}

		.row1 {
			.left {
				margin: 20rpx 0 40rpx;
				width: 2rpx;
				background-color: #d4d4d4;
			}

			.right {
				margin-left: 60rpx;
			}

			.pofix {
				position: absolute;
				top: 0;
				left: -88rpx;
			}
		}

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

	}
</style>