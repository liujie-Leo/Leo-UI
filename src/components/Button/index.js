import Button from './button.vue'

const buttonComponent = {
  install: function (Vue) {
    Vue.component('l-button', Button)
  }
}
export default buttonComponent
