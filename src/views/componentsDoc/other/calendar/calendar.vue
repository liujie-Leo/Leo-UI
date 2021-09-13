<template>
  <div :class="['l-button','p-12 pt-4']">
    <l-title>Calendar日历</l-title>
    <l-parag>按照日历形式展示数据的容器。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>当数据是日期或按照日期划分时，例如日程、课表、价格日历等，农历等。目前支持年/月切换。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-calendar-full />
        </div>
      </div>
    </l-component-display>
    <!-- 日历卡片 -->
    <l-component-display title="日历卡片" :code="baseCode" language="html" description="最简单的用法。">
      <div slot="component-display">
        <div>
          <l-calendar />
        </div>
      </div>
    </l-component-display>
  </div>
</template>
<script>
import Prism from 'prismjs'
import buttonTypeCode from './code/baseUse'
import registerCode from './code/register'
import LCalendar from 'components/Calendar/calendar.vue'
import LCalendarFull from 'components/Calendar/calendarFull.vue'
export default {
  components: { LCalendar, LCalendarFull },
  data () {
    return {
      code: buttonTypeCode,
      baseCode: buttonTypeCode,
      registerCode,
      value: false
    }
  },
  mounted () {
    // 高亮渲染
    Prism.highlightAll()
  }
}
</script>
<style lang="less" scoped>
code{
  font-size: 12px;
}
pre{
  background-color: #fff;
  border: 1px solid #ccc;
}
pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
    background: #ccc;
}
</style>
