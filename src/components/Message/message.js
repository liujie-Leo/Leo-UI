import { getType } from 'utils/common'

const $message = function (options) {
  message({ ...formatOptions(options) })
}

// icon type
const icon = {
  error: 'icon-icon_4',
  info: 'icon-icon_6',
  warn: 'icon-icon_6',
  success: 'icon-icon_3'
}

// icon color
const color = {
  error: 'text-red-500',
  info: 'text-gray-500',
  warn: 'text-yellow-500',
  success: 'text-green-500'
}

// message show default duration
const defaultDuration = 2000
// message stack
const messageArray = []

let messageWrapperDOM = null

const message = function (options) {
  if (!options.message) {
    console.error('Error: message is required in message component properties.')
    return
  }
  const duration = options.duration ? options.duration : defaultDuration

  // message wrapper
  // current stack have no data
  if (messageArray.length <= 0) {
    messageWrapperDOM = document.createElement('div')
    messageWrapperDOM.className = 'fixed transform -translate-x-1/2 left-1/2 top-2'
    messageWrapperDOM.id = 'message-wrapper'
    document.body.appendChild(messageWrapperDOM)
  }

  // in to the stack
  messageArray.push(options)

  // message item
  const messageDOM = document.createElement('div')
  messageDOM.className = 'rounded-sm shadow-md px-3 py-1 mt-4  message-entrance flex items-center bg-white'
  messageDOM.id = 'l-message-wrraper'

  // icon DOM
  const iconDOM = document.createElement('div')
  iconDOM.className = `iconfont mr-1 text-xs ${icon[options.type]} ${color[options.type]}`
  messageDOM.appendChild(iconDOM)

  // text DOM
  const textDOM = document.createElement('div')
  textDOM.innerText = options.message
  textDOM.className = 'text-gray-500 text-xs text-nowrap'
  messageDOM.appendChild(textDOM)

  // messageDOM mount
  messageWrapperDOM.appendChild(messageDOM)

  // out animation && remove DOM
  setTimeout(() => {
    messageDOM.classList.add('message-leave')
    setTimeout(() => {
      messageDOM.parentNode.removeChild(messageDOM)
      // out stack
      messageArray.shift()
    }, 200)
  }, duration)
}

// success
$message.success = function (options) {
  message({ type: 'success', ...formatOptions(options) })
}

// info
$message.info = function (options) {
  message({ type: 'info', ...formatOptions(options) })
}

// warn
$message.warn = function (options) {
  message({ type: 'warn', ...formatOptions(options) })
}

// error
$message.error = function (options) {
  message({ type: 'error', ...formatOptions(options) })
}

const formatOptions = function (options) {
  if (getType(options) == 'object') {
    return options
  } else if (getType(options) == 'string') {
    return { message: options }
  } else {
    console.error(
      `Error：Options expect type of object,string or number, but aceept a ${getType(options)} type.`
    )
    return {}
  }
}

export default $message
