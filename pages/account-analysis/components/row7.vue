<template>
	<view class="row7">
		<view class=" bg-white px-4 pb-3">
			<!-- <uni-calendar class="uni-calendar--hook" :selected="selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" /> -->
			<view class="d-flex a-center j-sb py-2">
				<view class=" font36">
					我的投资能力<uni-icons type="info" size="20" class="ml-1" color="#ccc"></uni-icons>
				</view>
				<view class="gray font-sm d-flex a-center">
					<uni-icons type="loop" size="16" class="mr-1" color="#c2c2c2"></uni-icons>
					切换为收益金额
				</view>
			</view>
			<calendarCpns ref="calend" @getMounth="getMounth" />
			<view class="d-flex j-sb a-center text-light-muted my-2">
				<view class="">
					{{initMounth}}月累计收益：0.00元
				</view>
				<view class="">
					沪深300:
					<text class="green ml-2">-0.11%</text>
				</view>
			</view>
			<view class="d-flex a-center j-center gray">
				查看日对账账单<u-icon name="arrow-right-double" class="ml-2"></u-icon>
			</view>
		</view>

		<view class="text-light-muted p-3">
			免责声明：
			<view class="" style="text-indent: 2em;">
				暗室逢灯咯改见识到了开个房间了开始对方了解到了第三方弗兰克没你说的分类科目
			</view>
		</view>
	</view>
</template>

<script>
	import uniCalendar from './components/uni-calendar/uni-calendar.vue';
	import calendarCpns from './calendar-cpns.vue';
	export default {
		components: {
			uniCalendar,
			calendarCpns
		},
		props: ["uniCalendar"],
		data() {
			return {
				selected: [{
					date: "2024-04-11",
					info: '打卡',
				}],
				initMounth:new Date().getMonth() + 1,
			}
		},
		mounted() {

		},
		methods: {
			getMounth(e) {
				this.initMounth = e
			},

			change(e) {
				console.log('change 返回:', e)
				// 模拟动态打卡
				this.selected.push({
					date: e.fulldate,
					info: '打卡'
				})
			},
			monthSwitch(e) {
				console.log('monthSwitchs 返回:', e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row7 {}
</style>