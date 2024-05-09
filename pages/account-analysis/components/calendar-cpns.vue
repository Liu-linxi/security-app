<template>
	<view class="calendar">
		<view class="controls">
			<view class="d-flex a-center ml-2 banner">
				<view class="checker">
					月
				</view>
				<view class="px-2">
					年
				</view>
			</view>
			<view class="d-flex a-center">
				<view class="uni-calendar__header-btn-box border mr-1" style="width: 25px;height: 20px;border-radius:  20px 0 0 20px ;" @click.stop="prevMonth">
					<view class=" uni-calendar-l"></view>
				</view>
				<view>{{ currentYear }} 年{{ months[currentMonth - 1] }}月</view>
				<view class="uni-calendar__header-btn-box border ml-1" style="width: 25px;height: 20px;border-radius: 0 20px 20px 0;" @click.stop="nextMonth">
					<view class=" uni-calendar-t"></view>
				</view>
			</view>
		</view>
		<view class="days-header">
			<view class="day" v-for="(day, index) in weekdays" :key="index">{{ day }}</view>
		</view>
		<view class="days">
			<view v-for="(week,inde) in calendar" :key="inde" class="week">
				<view v-for="day in weekdays" :key="day" class="day">
					<view class="text-center" v-if="week.find(d => d.dayOfWeek === day)">
						<view>{{ week.find(d => d.dayOfWeek === day).day }}</view>
						<view class="font-sm line-h">{{ week.find(d => d.dayOfWeek === day).num }}%</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentYear: new Date().getFullYear(),
				currentMonth: new Date().getMonth() + 1,
				weekdays: ['一', '二', '三', '四', '五'],
				months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
				calendar: []
			};
		},
		methods: {
			prevMonth() {
				if (this.currentMonth === 1) {
					this.currentYear--;
					this.currentMonth = 12;
				} else {
					this.currentMonth--;
				}
				this.generateCalendar();
				this.$emit("getMounth",this.currentMonth)
			},
			nextMonth() {
				if (this.currentMonth === 12) {
					this.currentYear++;
					this.currentMonth = 1;
				} else {
					this.currentMonth++;
				}
				this.generateCalendar();
				this.$emit("getMounth",this.currentMonth)
			},
			generateCalendar() {
				const firstDay = new Date(this.currentYear, this.currentMonth - 1, 1);
				const lastDay = new Date(this.currentYear, this.currentMonth, 0);
				const calendar = [];

				let currentDate = new Date(firstDay);
				let currentWeek = [];
				while (currentDate <= lastDay) {
					const day = currentDate.getDate();
					const dayOfWeek = this.weekdays[currentDate.getDay() - 1];
					currentWeek.push({ day, date: new Date(currentDate), dayOfWeek, num: 0.00 });
					if (dayOfWeek === '五') {
						calendar.push(currentWeek);
						currentWeek = [];
					}

					currentDate.setDate(day + 1);
				}

				if (currentWeek.length > 0) {
					let index = currentWeek.findIndex(item => item.dayOfWeek != undefined);
					if (index > -1) calendar.push(currentWeek);
				}

				this.calendar = calendar;
				console.log(calendar);
			}
		},
		mounted() {
			this.generateCalendar();
		}
	}
</script>

<style scoped lang="scss">
	.banner{
		border-radius: 30rpx;
		line-height: 38rpx;
		background-color: #f6f6f6;
		color: #909090;
		border: 6rpx solid #f6f6f6;
		.checker{
			background-color: #fff;
			color: #333;
			line-height: 38rpx;
			border-radius: 30rpx;
			padding:0 30rpx;
			box-shadow: 2rpx 0rpx 3rpx 1rpx #f6f6f6;
		}
	}
	.calendar {
		font-family: Arial, sans-serif;
	}

	.controls {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		align-items: center;
	}

	.days-header {
		display: flex;
		background: #f4f4f6;
	}

	.day {
		flex: 1;
		text-align: center;
		border: 1px solid #fff;
		padding: 5px;
	}

	.days {
		display: flex;
		flex-wrap: wrap;
	}

	.week {
		display: flex;
		width: 100%;
		background: #f8f8f8;
	}

	.day span {
		flex: 1;
	}

	.weekend {
		background-color: #f7f7f7;
	}

	.uni-calendar__header-btn-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
	}

	.uni-calendar__header-btn {
		width: 10px;
		height: 10px;
		border-left-color: $uni-text-color-placeholder;
		border-left-style: solid;
		border-left-width: 2px;
		border-top-color: $uni-color-subtitle;
		border-top-style: solid;
		border-top-width: 2px;
	}

	.uni-calendar--left {
		transform: rotate(-45deg);
	}

	.uni-calendar--right {
		transform: rotate(135deg);
	}
	.uni-calendar-l{
		-webkit-clip-path: polygon(100% 0, 0 50%, 100% 100%);
		clip-path: polygon(100% 0, 0 50%, 100% 100%);
		background-color: #8e8e8e;
		width: 18rpx;
		height: 18rpx;
	}
	.uni-calendar-t{
		-webkit-clip-path: polygon(0 0, 0 100%, 100% 50%);
		clip-path: polygon(0 0, 0 100%, 100% 50%);
		background-color: #8e8e8e;
		width: 18rpx;
		height: 18rpx;
	}
</style>