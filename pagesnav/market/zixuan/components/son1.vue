<template>
	<view class="son1">
		<view class="grid5 text-center">
			<view class="d-flex a-center px-2" @click="$refs.son1Popup.showPopup()">
				<view class="mr-1">
					<view class="font32">
						北 <text class="green">234.33</text>
					</view>
					<view>
						<text class="green">-8.34</text>
						<text class="red ml-2"> 0.23%</text>
					</view>
				</view>
				<u-icon name="arrow-down-fill" color="#c2c2c2" size="12"></u-icon>
			</view>
			<view class="gray" v-for=" li in staticList" :key="li.name">
				<image src="" style="width: 50rpx; height: 50rpx;" class="bg-red" mode=""></image>
				<view class="">
					{{li.name}}
				</view>
			</view>
		</view>
		<view class="" style="height: 170rpx;"></view>
		<son1-popup ref="son1Popup"/>
	</view>
</template>

<script>
	import son1Popup from './son1-popup.vue';
	export default {
		components:{
			son1Popup
		},
		data() {
			return {
				staticList: [{ name: "资金", icon: "" }, { name: "新闻", icon: "" }, { name: "公告", icon: "" }, { name: "研报", icon: "" }, ]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.son1 {
		background-color: #FFFFFF;
		.grid5 {
			display: grid;
			grid-template-columns: 2fr repeat(4, 1fr);
			align-items: center;
			grid-gap: 20rpx;
			padding: 20rpx 0;
			border-bottom: 20rpx solid  #f6f6f6;;
			position: fixed;
			background-color: #FFFFFF;
			.gray{
				color: #8f8f8f;
			}
		}
	}
</style>