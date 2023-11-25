// ES5 创建对象

function User(name) {
  this.name = name
}

User.prototype.sayHi = function () {
  console.log(this.name)
}

const user = new User('GUOHANG')

user.sayHi()

// ES6 Class 创建对象

class NewUser {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(this.name)
  }
}

const user1 = new NewUser('James')

user1.sayHi()
