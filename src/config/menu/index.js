import basic from './basic'
import form from './form'
import data from './data'
import notification from './notification'
import other from './other'

const menus = [
  {
    title: 'Basic',
    children: basic
  },
  {
    title: 'Form',
    children: form
  },
  {
    title: 'Data',
    children: data
  },
  {
    title: 'Notification',
    children: notification
  },
  {
    title: 'Other',
    children: other
  }
]

export default menus
