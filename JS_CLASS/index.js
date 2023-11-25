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
  // 父类的constructor
  constructor(name) {
    this.name = name
  }
  // 公共方法
  run() {
    // 都会跑
    console.log('Running')
  }
}

// 兔子 rabbit继承Animal的方法
class Rabbit extends Animal {
  // 利用 super 關鍵字，在Rabbit的constructor內，呼叫母類別Animal的constructor：
  // 因為Animal母類別已經有 this.name = name; 的邏輯了，不需要在Rabbit子類別重寫一次
  /**
   *注意 呼叫 super 要在使用 this.earLength = earLength; 出現之前。
   * 一般沒有繼承的情況下，在constructor裡面會先建立一個物件，然後把 this 指向這個物件。
   * 相反地，有繼承的情況下，在子類別的constructor裏就不會有建立物件的動作
   * 為什麼呢？因為建立物件的動作只需要做一次就好了。
   *所以我們會預期，物件已經在母類別的constructor裏建立了，否則就會在子物件裡重複動作。
   * 所以，我們要在子類別呼叫 super()，
   * 在母類別建立好物件，確保執行到 this.earLength = earLength; 這一行時，this 不是空的。
   * @param {*} name
   * @param {*} earLength
   */
  constructor(name, earLength) {
    super(name)
    this.earLength = earLength
  }
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
