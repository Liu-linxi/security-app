<template>
  <view class="calendar">
    <view class="controls">
      <button @click="prevMonth">Previous Month</button>
      <span>{{ currentYear }} {{ months[currentMonth - 1] }}</span>
      <button @click="nextMonth">Next Month</button>
    </view>
    <view class="days-header">
      <view class="day" v-for="(day, index) in weekdays" :key="index">{{ day }}</view>
    </view>
    <view class="days">
      <view v-for="week in calendar" :key="week[0].date" class="week">
        <view v-for="day in weekdays" :key="day" class="day">
          <span v-if="week.find(d => d.dayOfWeek === day)">{{ week.find(d => d.dayOfWeek === day).day }}</span>
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
      weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
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
    },
    nextMonth() {
      if (this.currentMonth === 12) {
        this.currentYear++;
        this.currentMonth = 1;
      } else {
        this.currentMonth++;
      }
      this.generateCalendar();
    },
    generateCalendar() {
      const firstDay = new Date(this.currentYear, this.currentMonth - 1, 1);
      const lastDay = new Date(this.currentYear, this.currentMonth, 0);
      const calendar = [];

      let currentDate = new Date(firstDay);
      let currentWeek = [];
      while (currentDate <= lastDay) {
        const day = currentDate.getDate();
        const dayOfWeek = this.weekdays[currentDate.getDay()-1];
        currentWeek.push({ day, date: new Date(currentDate), dayOfWeek });
        if (dayOfWeek === 'Fri') {
          calendar.push(currentWeek);
          currentWeek = [];
        }

        currentDate.setDate(day + 1);
      }

      // if (currentWeek.length > 0) {
      //   calendar.push(currentWeek);
      // }

      this.calendar = calendar;
			console.log(calendar);
    }
  },
  mounted() {
    this.generateCalendar();
  }
}
</script>

<style scoped>
.calendar {
  font-family: Arial, sans-serif;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.days-header {
  display: flex;
}

.day {
  flex: 1;
  text-align: center;
  border: 1px solid #ccc;
  padding: 5px;
}

.days {
  display: flex;
  flex-wrap: wrap;
}

.week {
  display: flex;
  width: 100%;
}

.day span {
  flex: 1;
}

.weekend {
  background-color: #f7f7f7;
}
</style>
