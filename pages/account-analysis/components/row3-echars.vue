<template>
	<view class="charts-box">
		<qiun-data-charts type="line" :opts="opts" :chartData="chartData" @getIndex="getIndex" />
		<view class="cums font-sm" v-if="showSelect" :style="{top:`${posiEvent.y}px`,left:`${posiEvent.x}px`}">
			<view class="font-sm  border-bottom gray">
				{{categories[selectIndex]}}
			</view>
			<view class="grid3 font-sm gray text-nowrap">
				<view></view>
				<view>当日收益率</view>
				<view>累计收益率</view>
			</view>
			<view class="grid3 font-sm gray" v-for="(li,index) in series">
				<view :class="index==0?'red':'blue'">{{li.name}}</view>
				<view class="text-center red">{{li.data[selectIndex]}}%</view>
				<view class="text-center red">{{li.data[selectIndex]}}%</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData: {},
				//您可以通过修改 config-ucharts.js 文件中下标为 ['line'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					color: ["#1890FF", "#d4322c", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
					padding: [15, 10, 5, 5],
					dataLabel: false,
					dataPointShape: false,
					enableScroll: false,
					legend: { show: false },
					xAxis: {
						disableGrid: true
					},
					yAxis: {
						gridType: "dash",
						dashLength: 8,
						data: [{
							axisLine: false,
							unit: "%"
						}]
					},
					extra: {
						tooltip: {
							showBox: false
						},
						line: {
							type: "straight",
							width: 2,
							activeType: "solid",
							onShadow: true,
							animation: "horizontal",

						}
					}
				},

				categories: ["05-14", "05-15", "05-16", "05-17", "05-18", "05-19","05-14", "05-15"],
				series: [{
						name: "我的",
						data: [0, 0, 0, 0, 0, 0]
					},
					{
						name: "沪深",
						data: [1.2, 0.4, 0.2, -0.6, 0, 2]
					},
				],
				selectIndex: 0,
				showSelect: false,
				posiEvent: {}
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
						categories: this.categories,
						series: this.series
					};
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
			},
			changeData(data) {
				let res = {
					categories: this.categories,
					series: [{
							name: "我的",
							data: [0, 0, 0, 0, 0, 0]
						},
						{
							name: "沪深",
							data
						},
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			},
			getIndex(e) {
				let currentIndex = e.currentIndex.index;
				this.selectIndex = currentIndex;
				this.posiEvent = e.event;
				let width = e.opts.width;
				let cutWidth = width - e.event.x;
				if (cutWidth < 180) this.posiEvent.x = e.event.x - 180
				this.showSelect = true
				console.log(e);
			}

		}
	};
</script>

<style scoped lang="scss">
	/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
	.charts-box {
		width: 100%;
		height: 300px;
		position: relative;

		.cums {
			width: 180px;
			position: absolute;
			top: 129px;
			left: 120px;
			background-color: rgba(255, 255, 255, 0.93);
			box-shadow: 0 0 50rpx #949494;
			border-radius: 8rpx;
			padding: 10rpx;
		}
	}
</style>