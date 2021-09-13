(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ed4bf90"],{"063a":function(t,n,e){"use strict";e("51d3")},3407:function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["l-button","p-12 pt-4"],attrs:{id:"button-doc"}},[e("l-title",[t._v("Message消息")]),e("l-parag",[t._v("全局展示操作反馈信息。")]),e("l-title",[t._v("何时使用")]),e("l-parag",[t._v("以轻量级的方式提供成功、警告和错误等反馈信息。")]),e("l-title",[t._v("组件注册")]),e("l-code",{attrs:{language:"js",code:t.registerCode}}),e("l-title",[t._v("代码演示")]),e("l-component-display",{attrs:{title:"基本用法",code:t.baseUseCode,language:"html",description:"使用type、round属性来定义 Button 的样式。"}},[e("div",{attrs:{slot:"component-display"},slot:"component-display"},[e("l-button",{attrs:{type:"success"},on:{click:function(n){return t.onClick("success")}}},[t._v("成功信息")]),e("l-button",{attrs:{type:"info"},on:{click:function(n){return t.onClick("info")}}},[t._v("普通信息")]),e("l-button",{attrs:{type:"warn"},on:{click:function(n){return t.onClick("warn")}}},[t._v("警告信息")]),e("l-button",{attrs:{type:"danger"},on:{click:function(n){return t.onClick("error")}}},[t._v("错误信息")])],1)]),e("l-component-display",{attrs:{title:"自定义持续时间",code:t.customDurationCode,language:"html",description:"通过 duration 参数设置 Message 持续时间。"}},[e("div",{attrs:{slot:"component-display"},slot:"component-display"},[e("l-button",{attrs:{type:"success"},on:{click:function(n){return t.onClickCustomDuration("success")}}},[t._v("成功信息")])],1)])],1)},o=[],c=e("8c7a"),i=e.n(c),a=(e("cb55"),e("6cf3"),e("416b"),e("6605"),e("4e93"),e("c0f1"),e("13c4"),"\n<template>\n  <div>\n    <l-button type=\"success\" @click=\"onClick('success')\">成功信息</l-button>\n    <l-button type=\"info\" @click=\"onClick('info')\">普通信息</l-button>\n    <l-button type=\"warn\" @click=\"onClick('warn')\">警告信息</l-button>\n    <l-button type=\"danger\" @click=\"onClick('error')\">错误信息</l-button>\n  </div>\n</template>\n<script>\nexport default {\n  methods: {\n    onClick (type) {\n      switch (type) {\n        case 'success':\n          this.$message.success('成功信息')\n          break\n        case 'info':\n          this.$message.info('普通信息')\n          break\n        case 'warn':\n          this.$message.warn('警告信息')\n          break\n        case 'error':\n          this.$message.error('错误信息')\n          break\n      }\n    },\n  },\n};\n<\/script> "),r=a,l="\nimport { Message } from 'l-component';\nVue.use(Message);",u=l,p="\n<template>\n  <div>\n    <l-button type=\"success\" @click=\"onClickCustomDuration('success')\">成功信息</l-button>\n  </div>\n</template>\n<script>\nexport default {\n  methods: {\n    onClickCustomDuration () {\n      this.$message({\n        type: 'success',\n        duration: 5000,\n        message: '成功信息'\n      })\n    }\n  },\n};\n<\/script> ",d=p,m={data:function(){return{baseUseCode:r,registerCode:u,customDurationCode:d}},mounted:function(){i.a.highlightAll()},methods:{onClick:function(t){switch(t){case"success":this.$message.success("成功信息");break;case"info":this.$message.info("普通信息");break;case"warn":this.$message.warn("警告信息");break;case"error":this.$message.error("错误信息");break}},onClickCustomDuration:function(){this.$message({type:"success",duration:5e3,message:"成功信息"})}}},k=m,b=(e("063a"),e("2877")),g=Object(b["a"])(k,s,o,!1,null,"4daed1c0",null);n["default"]=g.exports},"51d3":function(t,n,e){}}]);