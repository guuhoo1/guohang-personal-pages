// 带我学习一下js class 的用法

// 1. class get set用法
class Person {
  constructor(name) {
    this.name = name
  }
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }
}

const person = new Person('小明')
console.log(person.name)
person.name = '小红'
console.log(person.name)
