// let formData = new FormData()
// formData.append('key1', 'value1')
// formData.append('key2', 'value2')

// // 列出 key/value 对
// for (let [name, value] of formData) {
//   alert(`${name} = ${value}`) // key1 = value1，然后是 key2 = value2
// }

const countSalaries = salaries => {
  let sum = 0
  if (!Object.keys.length) return sum
  for (const key in salaries) {
    sum += salaries[key]
  }

  return sum
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// console.log(countSalaries(salaries))
// console.log(countSalaries({}))

const multiplyNumeric = menu => {
  const temp = {}
  for (const key in menu) {
    if (typeof menu[key] === 'number') {
      temp[key] = menu[key] * 2
    } else {
      temp[key] = menu[key]
    }
  }
  return temp
}

console.log(
  multiplyNumeric({
    width: 400,
    height: 600,
    title: 'My menu'
  })
)
