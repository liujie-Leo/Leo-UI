<template>
  <div id="button-doc" :class="['l-button','p-12 pt-4']">
    <l-title>Table表格</l-title>
    <l-parag>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</l-parag>
    <l-title>何时使用</l-title>
    <l-parag>当有大量结构化的数据需要展现时。</l-parag>
    <l-title>组件注册</l-title>
    <l-code language="js" :code="registerCode" />
    <l-title>代码演示</l-title>
    <!-- 基本用法 -->
    <l-component-display title="基本用法" :code="baseUseCode" language="html" description="当l-table元素中注入data对象数组后，在l-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。">
      <div slot="component-display">
        <l-table :data="data">
          <l-table-column label="姓名" prop="name" />
          <l-table-column label="年龄" prop="age" />
          <l-table-column label="学校" prop="school" />
        </l-table>
      </div>
    </l-component-display>
    <!-- 带斑马纹的表格 -->
    <l-component-display title="带斑马纹的表格" :code="stripeCode" language="html" description="stripe属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。">
      <div slot="component-display">
        <l-table :data="data" stripe>
          <l-table-column label="姓名" prop="name" />
          <l-table-column label="年龄" prop="age" />
          <l-table-column label="学校" prop="school" />
        </l-table>
      </div>
    </l-component-display>
    <!-- 带边框的表格 -->
    <l-component-display title="带边框的表格" :code="borderCode" language="html" description="默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用border属性，它接受一个Boolean，设置为true即可启用。">
      <div slot="component-display">
        <l-table :data="data" border>
          <l-table-column label="姓名" prop="name" />
          <l-table-column label="年龄" prop="age" />
          <l-table-column label="学校" prop="school" />
        </l-table>
      </div>
    </l-component-display>
    <!-- 表格对齐方式 -->
    <l-component-display title="表格内容对其方式" :code="baseUseCode" language="html" description="l-table的默认对其方式是左对齐，你可以通过align属性设置你自己想要的对齐方式，该属性的值可以为 left/center/right">
      <div slot="component-display">
        <div class="mb-2">
          <l-button @click="toggleAlign('left')">Left</l-button>
          <l-button @click="toggleAlign('center')">Center</l-button>
          <l-button @click="toggleAlign('right')">Right</l-button>
        </div>
        <l-table :data="data" :align="tableAlign" border>
          <l-table-column label="姓名" prop="name" />
          <l-table-column label="年龄" prop="age" />
          <l-table-column label="学校" prop="school" />
        </l-table>
      </div>
    </l-component-display>
    <!-- 固定表头 -->
    <l-component-display title="固定表头" :code="fixHeaderCode" language="html" description="只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。">
      <div slot="component-display">
        <l-table :data="dataLots" height="300">
          <l-table-column label="姓名" prop="name" />
          <l-table-column label="年龄" prop="age" />
          <l-table-column label="学校" prop="school" />
        </l-table>
      </div>
    </l-component-display>
  </div>
</template>
<script>
import Prism from 'prismjs'
import baseUseCode from './code/baseUse'
import stripeCode from './code/stripe'
import registerCode from './code/register'
import borderCode from './code/border'
import fixHeaderCode from './code/fix-header'
import customDurationCode from './code/customDuration'
import LTable from 'components/data/Table/table'
import LTableColumn from 'components/data/Table/tableColumn'
export default {
  components: { LTable, LTableColumn },
  data () {
    return {
      baseUseCode: baseUseCode,
      registerCode,
      stripeCode,
      borderCode, //
      fixHeaderCode,
      customDurationCode,
      dataObj: {
        name: 'Leo',
        age: 23,
        school: 'Hunan Argricature University'
      },
      data: [],
      dataLots: [],
      tableAlign: 'center'
    }
  },
  mounted () {
    // 高亮渲染
    Prism.highlightAll()
    this.initData()
  },
  methods: {
    initData () {
      for (let i = 0; i < 5; i++) {
        this.data.push(this.dataObj)
      }
      for (let j = 0; j < 10; j++) {
        this.dataLots.push(this.dataObj)
      }
    },
    toggleAlign (type) {
      this.tableAlign = type
    }
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
