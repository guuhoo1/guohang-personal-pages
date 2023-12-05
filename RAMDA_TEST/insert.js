const insert = (idx, elt, list) => {
  let result = Array.prototype.slice.call(list, 0)
  result.splice(idx, 0, elt)
  return result
}

const list = [1, 2, 3, 4]

console.log(insert(2, 'demo', list))

console.log(list, 'list')
