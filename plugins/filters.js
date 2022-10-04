
import Vue from 'vue'
Vue.filter('percentage', function (value) {
  if (value == null) { return '' }
  value = value.toString()
  return value + '.00%'
})

Vue.filter('currency', function (value) {
  if (value == null) { return '' }
  value = value.toString()
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
})

Vue.filter('dateformat', function (value) {
  if (!value) { return '' }
  return new Date(value).toUTCString()
})
Vue.filter('simpledateformat', function (value) {
  if (!value) { return '' }
  const dateString = value[2] + '-' + value[1] + '-' + value[0]
  return dateString
})
