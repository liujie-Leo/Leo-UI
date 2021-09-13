(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6c74bf4"],{"15b4":function(t,e,i){"use strict";i("bf53")},b265:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["l-button","p-12 pt-4"]},[i("l-title",[t._v("Swiper轮播图")]),i("l-parag",[t._v("一个让现实内容轮流播放的区域。")]),i("l-title",[t._v("何时使用")]),i("l-parag",[t._v("常用于一组图片或卡片轮播。")]),i("l-title",[t._v("组件注册")]),i("l-code",{attrs:{language:"js",code:t.registerCode}}),i("l-title",[t._v("代码演示")]),i("l-component-display",{attrs:{title:"基本用法",code:t.baseCode,language:"html",description:"最简单的用法。"}},[i("div",{attrs:{slot:"component-display"},slot:"component-display"},[i("div",{staticClass:"w-full h-48 bg-gray-300"},[i("l-swiper",{attrs:{arrow:"never"}},t._l(3,(function(e){return i("l-swiper-item",{key:e},[i("div",{staticClass:"bg-gray-500 h-full flex justify-center items-center"},[i("div",[t._v(t._s(e))])])])})),1)],1)])]),i("l-component-display",{attrs:{title:"切换箭头",code:t.toggleArrowCode,language:"html",description:"你可以使用arrow属性控制箭头的显示方式，常用的值有hover、never以及always。"}},[i("div",{attrs:{slot:"component-display"},slot:"component-display"},[i("div",{staticClass:"mb-2"},[i("l-button",{on:{click:function(e){return t.toggleArrow("hover")}}},[t._v("hover")]),i("l-button",{on:{click:function(e){return t.toggleArrow("never")}}},[t._v("never")]),i("l-button",{on:{click:function(e){return t.toggleArrow("always")}}},[t._v("always")])],1),i("div",{staticClass:"w-full h-48 bg-gray-300"},[i("l-swiper",{attrs:{arrow:t.arrowType}},t._l(3,(function(e){return i("l-swiper-item",{key:e},[i("div",{staticClass:"bg-gray-500 h-full flex justify-center items-center"},[i("div",[t._v(t._s(e))])])])})),1)],1)])]),i("l-component-display",{attrs:{title:"指示器",code:t.toggleIndicatorCode,language:"html",description:"指示器也可以切换显示，属性为indicator，它接收一个布尔值。"}},[i("div",{attrs:{slot:"component-display"},slot:"component-display"},[i("l-button",{staticClass:"mb-2",on:{click:t.toggleIndicator}},[t._v("切换")]),i("div",{staticClass:"w-full h-48 bg-gray-300"},[i("l-swiper",{attrs:{arrow:"hover",indicator:t.isShowIndicator}},t._l(3,(function(e){return i("l-swiper-item",{key:e},[i("div",{staticClass:"bg-gray-500 h-full flex justify-center items-center"},[i("div",[t._v(t._s(e))])])])})),1)],1)],1)])],1)},r=[],l=i("8c7a"),o=i.n(l),s=(i("cb55"),i("6cf3"),i("416b"),i("6605"),i("4e93"),i("c0f1"),i("13c4"),'\n<template>\n  <div>\n    <l-swiper arrow="never">\n      <l-swiper-item v-for="i in 3" :key="i">\n        <div class="bg-gray-500 h-full flex justify-center items-center">\n          <div>{{ i }}</div>\n        </div>\n      </l-swiper-item>\n    </l-swiper>\n  </div>\n</template>'),a=s,c="\nimport { Swiper } from 'l-component';\nVue.use(Swiper);",d=c,u='\n<template>\n  <div class="mb-2">\n    <l-button @click="toggleArrow(\'hover\')">hover</l-button>\n    <l-button @click="toggleArrow(\'never\')">never</l-button>\n    <l-button @click="toggleArrow(\'always\')">always</l-button>\n  </div>\n  <div class="w-full h-48 bg-gray-300">\n    <l-swiper :arrow="arrowType">\n      <l-swiper-item v-for="i in 3" :key="i">\n        <div class="bg-gray-500 h-full flex justify-center items-center">\n          <div>{{ i }}</div>\n        </div>\n      </l-swiper-item>\n    </l-swiper>\n  </div>\n</template>\n<script>\nexport default {\n  methods: {\n    toggleArrow (type) {\n      this.arrowType = type\n    }\n  }\n};\n<\/script>',h=u,p='\n<template>\n  <div>\n    <l-button class="mb-2" @click="toggleIndicator">切换</l-button>\n    <div class="w-full h-48 bg-gray-300">\n      <l-swiper arrow="hover" :indicator="isShowIndicator">\n        <l-swiper-item v-for="i in 3" :key="i">\n          <div class="bg-gray-500 h-full flex justify-center items-center">\n            <div>{{ i }}</div>\n          </div>\n        </l-swiper-item>\n      </l-swiper>\n    </div>\n  </div>\n</template>\n<script>\nexport default {\n  data(){\n    return {\n      isShowIndicator:false\n    }\n  },\n  methods: {\n    toggleIndicator () {\n      this.isShowIndicator = !this.isShowIndicator\n    }\n  }\n};\n<\/script>',f=p,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"l-swiper w-full h-full flex overflow-hidden relative"},[i("div",{staticClass:"flex transition w-full duration-300"},[t._t("default")],2),i("div",{class:["arrow left-arrow-animation top-1/2 left-6 transform -translate-y-1/2 absolute bg-opacity-30 bg-gray-500 h-8 w-8 rounded-full flex justify-center items-center text-gray-300 cursor-pointer",{hidden:"always"!=t.arrow},{"arrow-hover":"hover"==t.arrow}],on:{click:t.onLeft}},[i("div",{staticClass:"iconfont icon-zuofan"})]),i("div",{class:["arrow right-arrow-animation top-1/2 right-6 transform -translate-y-1/2 absolute bg-opacity-30 bg-gray-500 h-8 w-8 rounded-full flex justify-center items-center text-gray-300 cursor-pointer",{hidden:"always"!=t.arrow},{"arrow-hover":"hover"==t.arrow}],on:{click:t.onRight}},[i("div",{staticClass:"iconfont icon-youfan"})]),t.indicator?i("div",{staticClass:"absolute bottom-4 left-1/2 transform -translate-x-1/2 flex"},t._l(t.swiperItemNums,(function(e){return i("div",{key:e,class:["h-2","bg-gray-300","w-2","cursor-pointer","rounded-full","hover:bg-white","mx-1",{inditor:e-1==t.index}],on:{click:function(i){return t.onClickInditor(e-1)}}})})),0):t._e()])},v=[],g=(i("a9e3"),{props:{autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3},arrow:{type:String,default:"hover"},indicator:{type:Boolean,default:!0}},data:function(){return{swiperHeight:"",swiperWidth:"",index:0,swiperItemNums:null}},mounted:function(){this.initData(),this.autoPlay&&this.startAutoPaly()},methods:{initData:function(){var t=this.$el;this.swiperHeight=t.clientHeight,this.swiperWidth=t.clientWidth,this.swiperItemNums=t.children[0].children.length},startAutoPaly:function(){var t=this;setInterval((function(){t.onRight()}),this.interval)},onLeft:function(){this.index--,this.index<0&&(this.index=this.swiperItemNums-1),this.translate()},onRight:function(){this.index++,this.index>this.swiperItemNums-1&&(this.index=0),this.translate()},onClickInditor:function(t){this.index=t,this.translate()},translate:function(){var t=this.$el.children[0],e=-this.swiperWidth*this.index;t.style.transform="translateX(".concat(e,"px)"),this.$emit("change",this.index)}}}),m=g,y=(i("15b4"),i("2877")),b=Object(y["a"])(m,w,v,!1,null,"31c1113a",null),x=b.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"l-swiper-item w-full h-full flex-shrink-0"},[t._t("default")],2)},k=[],C={},I=C,S=Object(y["a"])(I,_,k,!1,null,"50252149",null),A=S.exports,j={components:{LSwiper:x,LSwiperItem:A},data:function(){return{code:a,baseCode:a,registerCode:d,toggleArrowCode:h,toggleIndicatorCode:f,isShowIndicator:!0,arrowType:"hover"}},mounted:function(){o.a.highlightAll()},methods:{toggleIndicator:function(){this.isShowIndicator=!this.isShowIndicator},toggleArrow:function(t){this.arrowType=t}}},N=j,$=Object(y["a"])(N,n,r,!1,null,"153a5772",null);e["default"]=$.exports},bf53:function(t,e,i){}}]);