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

// Class的静态方法（Static Method)
class Article {
  constructor(article) {
    this.article = article
  }
  static compare(a, b) {
    return a.date < b.date ? -1 : 1
  }
}
// 等同于
// Article.compare = function (a, b) {
//   return a.date < b.date ? -1 : 1
// }

const goods_Article = new Article([
  {
    name: '斗罗大陆',
    date: 2024
  },
  {
    name: '西游记',
    date: 2023
  }
])

console.log(goods_Article.article.sort(Article.compare))

// extends 继承Class
// 构造一个 Animal Class
class Animal {
  // 公共方法
  run() {
    // 都会跑
    console.log('Running')
  }
}

// 兔子 rabbit继承Animal的方法
class Rabbit extends Animal {
  run() {
    // 在Rabbit子類別的 run() 方法內呼叫Animal類別的 run() 方法：
    super.run()
    console.log('Rabbit jump!')
  }
}

const rabbit = new Rabbit()
rabbit.run()

// 背後運作的原理是，JavaScript Engine會幫你把 Rabbit.prototype 的 [[Prototype]] 設為 Animal.prototype，

// 亦即 Rabbit.prototype.__proto__ = Animal.prototype;
