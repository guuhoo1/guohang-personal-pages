const R = require('ramda')
const permission = {
  'group1-perm1': true,
  'group-perm2': false,
  'group-perm1': false,
  'group-perm2': true,
  perm3: true,
  perm4: false
}

// const addLabel =R.chain()
const toPairs = R.toPairs(permission)

console.log(toPairs)

/**
 * Adds a label to an array using a composition of functions.
 *
 * @param {string[]} arr - The array to add the label to.
 * @returns {string[]} - The modified array with the label added.
 */
const addLabel = R.chain(
  R.compose(
    R.ifElse(str => str.indexOf('-') === 6, R.compose(R.last, R.splitAt(7)), R.identity),
    R.head
  ),
  R.append
)

const fn = R.compose(R.map(addLabel), R.toPairs)(permission)
console.log(fn)
