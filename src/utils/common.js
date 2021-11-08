// 判断类型
export const getType = function (change) {
  if (arguments.length == 0) {
    return '0' // 无参数传入
  }
  if (change === null) {
    return 'null'
  }
  if (change === undefined && arguments.length > 0) {
    return 'undefined'
  }
  if (change.constructor && change.constructor == Object) {
    return 'object'
  }
  if (change instanceof Function) {
    return 'function'
  }
  if (change instanceof Array) {
    return 'array'
  }
  if (change instanceof Number || typeof change == 'number') {
    return 'number'
  }
  if (change instanceof String || typeof change == 'string') {
    return 'string'
  }
  if (change instanceof Boolean || typeof change == 'boolean') {
    return 'boolean'
  }
}

// 移动滚动条
export const scrollTop = function (top = 0, behavior = 'instant', domId = 'doc-content') {
  const DOM = document.getElementById(domId)
  DOM && DOM.scrollTo({ top, behavior })
}

// 收集文档页面的标题和top信息
export const computeTop = function () {
  const menus = []
  const titleDOMs = document.getElementsByClassName('doc-title')
  console.log(titleDOMs)

  titleDOMs.forEach(item => {
    const top = item.offsetTop - 64
    menus.push(
      {
        level: 1,
        top,
        title: item.textContent,
        children: []
      })
  })
  const subTitleDOMs = document.getElementsByClassName('doc-subtitle')
  subTitleDOMs.forEach(item => {
    const top = item.offsetTop - 54
    menus[menus.length - 1].children.push({ level: 2, top, title: item.textContent })
  })
  return menus
}
