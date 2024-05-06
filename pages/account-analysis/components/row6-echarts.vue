<template>
	<view class="charts-box">
		<qiun-data-charts type="radar" :opts="opts" :chartData="chartData" />
		<view class="data1 line-h-sm">
			<view class="">
				盈利能力
			</view>
			<u-rate  allowHalf v-model="value" size="14" inactiveColor="#FA3534"></u-rate>
		</view>
		<view class="data2 line-h-sm">
			<view class="">
				择时能力
			</view>
			<u-rate  allowHalf v-model="value" size="14" inactiveColor="#FA3534"></u-rate>
		</view>
		<view class="data3 line-h-sm">
			<view class="">
				选股能力
			</view>
			<u-rate  allowHalf v-model="value" size="14" inactiveColor="#FA3534"></u-rate>
		</view>
		<view class="data4 line-h-sm">
			<view class="">
				交易纪律
			</view>
			<u-rate  allowHalf v-model="value" size="14" inactiveColor="#FA3534"></u-rate>
		</view>
		<view class="data5 line-h-sm">
			<view class="">
				风控能力
			</view>
			<u-rate  allowHalf v-model="value" size="14" inactiveColor="#FA3534"></u-rate>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:3.5,
				chartData: {},
				//您可以通过修改 config-ucharts.js 文件中下标为 ['radar'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
					padding: [5, 5, 5, 5],
					dataLabel: false,
					dataPointShape: false,
					enableScroll: false,
					legend: {
						show: false,
					},
					extra: {
						tooltip: {
							showBox: false
						},
						radar: {
							gridType: "radar",
							gridColor: "#fce2e4",
							gridCount: 3,
							opacity: 1,
							border: true,
						}
					}
				}
			};
		},
		mounted() {
			this.getServerData();
		},
		methods: {
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						categories: ["盈利能力", "选股能力", "交易纪律", "风控能力", "择时能力"],
						series: [{
								name: "盈利能力",
								data: [90, 110, 165, 195, 187],
							},
							{
								name: "选股能力",
								data: [190, 210, 105, 35, 27]
							},
							{
								name: "选股能力",
								data: [65, 210, 105, 35, 27]
							},
							{
								name: "选股能力",
								data: [32, 210, 105, 35, 27]
							},
							{
								name: "选股能力",
								data: [200, 123, 45, 35, 27]
							}

						]
					};
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
			},
		}
	};
</script>

<style scoped lang="scss">
	/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
	.charts-box {
		width: 95%;
		margin: 0 auto;
		height: 300px;
		position: relative;
		.data1{
			position: absolute; 
			top: 25rpx;
			left: 50%;
			transform: translate(-50% ,0);
			text-align: center;
			background-color: #FFFFFF;
		}
		.data2{
			position: absolute;
			top: 100px;
			left:-10rpx;
			text-align: center;
			background-color: #FFFFFF;
		}
		.data3{
			right: -10rpx;
			position: absolute;
			top: 100px;
			text-align: center;
			background-color: #FFFFFF;
		}
		.data4{
			position: absolute;
			bottom: 80rpx;
			left:50rpx;
			text-align: center;
			background-color: #FFFFFF;
		}
		.data5{
			position: absolute;
			bottom: 80rpx;
			right:50rpx;
			text-align: center;
			background-color: #FFFFFF;
		}
	}
</style>