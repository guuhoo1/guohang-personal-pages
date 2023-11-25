// import { curry, assoc } from 'ramda'
const { curry, assoc } = require('ramda')

/**
 * const df = [{"label": "A", "value": 7}, {"label": "B", "value": 2}]
 * const series = ["2010-12-15", "2010-12-16"]
 * Z.addCol("date", series, df)
 *  [{"date": "2010-12-15", "label": "A", "value": 7}, {"date": "2010-12-16", "label": "B", "value": 2}]
 */

// assoc用法
// R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
const addCol = curry((col, arr, df) => {
  if (df.length !== arr.length) return 'Arrays are not of equal length'
  return df.map((row, i) => assoc(col, arr[i], row))
})

const series = ['2010-12-15', '2010-12-16']
const df = [
  { label: 'A', value: 7 },
  { label: 'B', value: 2 }
]
console.log(addCol('data', series, df))
// 运行结果
// [
//     { label: 'A', value: 7, data: '2010-12-15' },
//     { label: 'B', value: 2, data: '2010-12-16' }
//   ]
