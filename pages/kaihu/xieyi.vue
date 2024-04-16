<template>
	<view class="xieyi">
		协议,供三方共同遵守,如甲乙丙三方之前签署的协议与本协议不一致的,以本协议为准。
		<view class="font-weight">
			第一章 三方声明
		</view>
		<view class="">
			第一条 甲方声明如下:
		</view>
		<view>(一)甲方具有相应合法的证券投资资格,不存在法律、法规、规章和证券交易所交易规则禁止或限制其投资证券市场的情形。</view>
		<view>(二)甲方保证其向乙方、丙方提供的所有证件、资料均合法、真实、准确、完整和有效。甲方资料发生变化时,甲方必须按照约定的要求,及时通知乙方和丙方。</view>
		<view>(三)甲方保证其资金来源合法。</view>
		<view>(四)乙方已向甲方清楚揭示证券市场投资风险,甲方清楚认识并愿意承担证券市场投资风险。</view>
		<view>(五)甲方同意遵守证券市场有关的法律法规及证券交易所交易规则。</view>
		<view>(六)甲方已详细阅读本协议所有条款,准确理解其含义,特别是其中有关乙方、丙方的</view>
		<view class="position-absolute left-0 right-0 bg-red text-letter1" @click="toback">
			我已阅读并同意签署
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
			toback(){
				const eventChannel = this.getOpenerEventChannel();
				uni.navigateBack({
					delta:1,
					success() {
						eventChannel.emit('isCheck', true);
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.xieyi{
		.position-absolute{
			bottom: 0;
			padding: 32rpx 0;
			color: #FFF;
			text-align: center;
		}
	}
</style>