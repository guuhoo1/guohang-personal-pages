const R = require('ramda')

// 使用ramda 来处理控制params 如果params对象里面的值为undefined则删除该属性

const params = {
  a: 1,
  b: undefined,
  c: 3,
  d: '',
  f: null
}

// 删除params里面值为undefined  null和空字符串的属性
const removeUndefined = R.curry(obj => {
  // 返回一个新的对象
  const temp = {}
  // 获取对象的key
  const keys = R.keys(obj)
  // 遍历key
  R.forEach(key => {
    // 如果key对应的值不是undefined  null和空字符串
    if (obj[key]) {
      // 则将该key和对应的值放入新的对象中
      temp[key] = obj[key]
    }
  }, keys)
  return temp
})
// R.pickBy(Boolean, params) 会返回一个新的对象，该对象里面的值不为undefined  null和空字符串
console.log(R.pickBy(Boolean, params))

// 写一个函数获取文件的后缀名
const getSuffix = R.curry(fileName => {
  // 获取文件名
  const name = R.split('.', fileName)
  // 获取文件后缀名
  const suffix = R.last(name)
  return suffix
})

// 使用ramda校验是否为手机号
const isPhone = R.curry(phone => {
  // 定义校验规则
  const reg = /^1[3456789]\d{9}$/
  // 返回校验结果
  return reg.test(phone)
})

// 校验是否为图片
const isImg = R.curry(img => {
  // 定义校验规则
  const reg = /\.(png|jpg|jpeg|gif|webp)$/
  // 返回校验结果
  return reg.test(img)
})
