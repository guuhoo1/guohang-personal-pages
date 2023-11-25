const { compose, find, propOr, propEq } = require('ramda')

const temp = [
  { name: 'james', age: 38 },
  { name: 'curry', age: 35 },
  { name: 'durant', age: 35 },
  { name: 'porter', age: 25 }
]

// compose => 从右边往左依次执行
const ageOfJames = compose(
  propOr(0, 'age'),
  find(item => item.name === 'james')
)(temp)
console.log(ageOfJames)
