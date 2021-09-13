import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 引入各个语言配置文件
import zh from './config/zh'
import en from './config/en'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  messages: {
    zh,
    en
  }
})

export default i18n
