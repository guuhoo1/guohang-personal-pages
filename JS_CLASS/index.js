// ES5 创建对象

function User(name) {
  this.name = name
}

User.prototype.sayHi = function () {
  console.log(this.name)
}

const user = new User('GUOHANG')

user.sayHi()
