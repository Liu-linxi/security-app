<template>
	<view class="echars-block">
		<qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData: {},
				//您可以通过修改 config-ucharts.js 文件中下标为 ['line'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
					padding: [0, 0, 0, 0],
					dataLabel: false,
					dataPointShape: false,
					enableScroll: false,
					legend: {
						show: false,
					},
					xAxis: {
						disabled: true,
					},
					yAxis: {
						disabled: true,
						disableGrid: true
					},
					extra: {
						tooltip: {
							showBox: false
						},
						line: {
							type: "straight",
							width: 1,
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
						categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
						series: [{
								name: "成交量A",
								data: [35, 8, 25, 37, 4, 20]
							},
							{
								name: "成交量B",
								data: [70, 40, 65, 100, 44, 68]
							},
						]
					};
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
			},
		}
	};
</script>

<style lang="scss" scoped>
	.echars-block {
		width: 220rpx;
		height: 70rpx;
	}
</style>