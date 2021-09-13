<!--
  组件名称：日期选择器
  作者：Leo
-->
<template>
  <div :class="['l-calendar','w-64','border','rounded']">
    <div :class="['l-calendar-header','border-b','py-2','flex','justify-end']">
      <l-select v-model="currentYear" width="84px" @change="onSelectYearChange">
        <l-option v-for="item in year" :key="item" :value="item" :label="item+'年'" />
      </l-select>
      <l-select v-model="currentMonth" width="64px" @change="onSelectMonthChange">
        <l-option v-for="item in month" :key="item" :value="item" :label="item+'月'" />
      </l-select>
    </div>
    <div class="l-calendar-date py-1 px-2">
      <div class="l-calendar-week flex mb-2">
        <div v-for="item in weeks" :key="item" class="flex-1 text-center text-sm text-gray-500">{{ item }}</div>
      </div>
      <div class="l-calendar-date grid grid-cols-7 grid-rows-5 gap-y-4 gap-x-1">
        <div
          v-for="item in date"
          :key="item.fullDate"
          :class="['text-center','py-1', 'cursor-pointer','rounded','text-sm',{'border-blue-500 border':isNowDay(item.fullDate)},{'bg-blue-500 active':item.fullDate == active},{'hover:bg-blue-100':item.fullDate != active},{'text-gray-500':!item.isGray},{'text-gray-300':item.isGray}]"
          @click="onClickDate(item)"
        >
          {{ item.date }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computeDate } from 'utils/date.js'
import LSelect from 'components/Select/select'
import LOption from 'components/Select/option'
export default {
  components: { LSelect, LOption },
  data () {
    return {
      weeks: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      year: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      date: [],
      active: '',
      nowDate: '',
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear()
    }
  },
  mounted () {
    this.initDate()
    this.getNowDate()
  },
  methods: {
    // 生成日期数据
    initDate () {
      this.createMonthDay()
    },
    onClickDate (item) {
      this.active = item.fullDate
    },
    // 获取本月的日期数据
    createMonthDay () {
      const date = this.currentYear + '-' + this.currentMonth + '-' + '01'
      const newDate = new Date(date)
      const daysOfMonth = []
      const fullYear = newDate.getFullYear()
      let month = newDate.getMonth() + 1
      month = month < 10 ? '0' + month : month
      const lastDayOfMonth = new Date(fullYear, month, 0).getDate()
      for (var i = 1; i <= lastDayOfMonth; i++) {
        const date = i < 10 ? '0' + i : i
        const fullDate = fullYear + '-' + month + '-' + date
        daysOfMonth.push({ fullDate, year: fullYear, month, date, week: new Date(fullDate).getDay() })
      }
      return this.createAllMonthDay(daysOfMonth)
    },
    // 获取本月前后的日期数据
    createAllMonthDay (daysOfMonth) {
      const preNum = daysOfMonth[0].week
      const nextNum = 6 - daysOfMonth[daysOfMonth.length - 1].week
      const firstDay = daysOfMonth[0]
      const lastDay = daysOfMonth[daysOfMonth.length - 1]
      // 显示在本月的上月日期
      for (let i = 0; i < preNum; i++) {
        const day = computeDate(firstDay.fullDate, 'days', -1 - i)
        daysOfMonth.unshift({ fullDate: day.formatDate, year: day.year, month: day.month, date: day.date, week: day.week, isGray: true })
      }
      // 显示在本月的下月日期
      for (let j = 0; j < nextNum; j++) {
        const day = computeDate(lastDay.fullDate, 'days', j + 1)
        daysOfMonth.push({ fullDate: day.formatDate, year: day.year, month: day.month, date: day.date, week: day.week, isGray: true })
      }
      this.date = daysOfMonth
    },
    // 获取今天的日期
    getNowDate () {
      const nowDate = new Date()
      const year = nowDate.getFullYear()
      let month = nowDate.getMonth() + 1
      let date = nowDate.getDate()
      date = date < 10 ? '0' + date : date
      month = month < 10 ? '0' + month : month
      this.nowDate = year + '-' + month + '-' + date
    },
    // 判断是否为今天
    isNowDay (date) {
      return this.nowDate == date
    },
    onSelectYearChange () {
      this.createMonthDay()
      this.active = ''
    },
    onSelectMonthChange () {
      this.createMonthDay()
      this.active = ''
    }
  }
}
</script>
<style lang="less" scoped>
.active{
  color: white;
}
</style>
