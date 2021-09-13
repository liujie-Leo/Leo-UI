<template>
  <div class="fixed top-24">
    <div v-for="item in menus" :key="item.title">
      <div
        class="inline-block text-gray-800 cursor-pointer pt-2 text-sm title relative hover:text-blue-500"
        @click="onScrollTo(item)"
      >
        {{ item.title }}
      </div>
      <div
        v-for="subItem in item.children"
        :key="subItem.title"
        class="text-gray-500 text-xs   pt-2 cursor-pointer subtitle relative hover:text-blue-500"
        @click="onScrollTo(subItem)"
      >
        {{ subItem.title }}
      </div>
    </div>
  </div>
</template>
<script>
import { scrollTop } from 'utils/common'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({ menus: state => state.menus.menus })
  },
  methods: {
    onScrollTo (item) {
      scrollTop(item.top, 'smooth')
    }
  }
}
</script>
<style lang="less" scoped>
.title::before{
  content: '';
  position: absolute;
  top: 16px;
  left: -18px;
  height: 4px;
  width: 14px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .5);
}
.title:hover.title::before{
  background-color: #4E81EE;
}
.subtitle::before{
  content: '';
  position: absolute;
  top: 13px;
  left: -15px;
  height: 4px;
  width: 10px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .2);
}
.subtitle:hover.subtitle::before{
  background-color: #4E81EE;
}
</style>
