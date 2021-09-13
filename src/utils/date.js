import moment from 'moment'

export const computeDate = function (date, type, num, format = 'YYYY-MM-DD') {
  const computedDate = moment(date).add(num, type)._d
  const dateObject = {
    Date: computedDate,
    year: computedDate.getFullYear(),
    month: Number(
      computedDate.getMonth() < 10
        ? '0' + computedDate.getMonth()
        : computedDate.getMonth()
    ),
    date: Number(
      computedDate.getDate() < 10
        ? '0' + computedDate.getDate()
        : computedDate.getDate()
    ),
    week: computedDate.getDay(),
    formatDate: moment(computedDate).format(format)
  }
  return dateObject
}
