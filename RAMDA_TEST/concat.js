const { curry, concat } = require('ramda')

/**
 * Concatenate two dataframes.
 *
 * @func
 * @memberOf Z
 * @category Manipulation
 * @param {df} dataframe1 Zebras dataframe
 * @param {df} dataframe2 Zebras dataframe
 * @return {df} Zebras dataframe
 * @example
 *
 * const df1 = [{"label": "A", "value": 7}, {"label": "B", "value": 2}]
 * const df2 = [{"label": "C", "value": 17}, {"label": "D", "value": 2}]
 * Z.concat(df1, df2)
 * // [{"label": "A", "value": 7}, {"label": "B", "value": 2}, {"label": "C", "value": 17}, {"label": "D", "value": 2}]
 */

const myConcat = curry((df1, df2) => concat(df1, df2))

console.log(
  myConcat(
    [
      { label: 'A', value: 7 },
      { label: 'B', value: 2 }
    ],
    [
      { label: 'C', value: 17 },
      { label: 'D', value: 2 }
    ]
  )
)
