const { mergeRight } = require('ramda')

const obj1 = { a: 1, b: 2, d: 6 }
const obj2 = { b: 3, c: 4, a: 5 }

// mergeRight :: {k: v} -> {k: v} -> {k: v}
// 中文解释 如果两个对象有相同的key，后面的对象的值会覆盖前面的对象的值
const result = mergeRight(obj1, obj2)

console.log('result: ', result)
