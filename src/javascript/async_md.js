/*
This is a code explanation for Promise and Async Function
*/

// Real Promise
let p1 = new Promise((resolve, reject) => {
    resolve('成功')
    reject('失败')
})
console.log('p1', p1)

let p2 = new Promise((resolve, reject) => {
    reject('失败')
    resolve('成功')
})
console.log('p2', p2)

let p3 = new Promise((resolve, reject) => {
    throw('报错')
})
console.log('p3', p3)

/* Output:
p1 Promise { '成功' }
p2 Promise { <rejected> '失败' }
p3 Promise { <rejected> '报错' }
*/

// Self Define Promise Function
class MyPromise {
    // 构造方法
    constructor(executor) {

        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()
        try{
        // 执行传进来的函数
        executor(this.resolve, this.reject)
        }
        catch(e){
            // 捕捉到错误直接执行reject
            this.reject(e)
        }
    }

    initBind() {
        // 初始化this
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        // 初始化值
        this.PromiseResult = null // 终值
        this.PromiseState = 'pending' // 状态
    }

    resolve(value) {
        // state是不可变的
        if (this.PromiseState !== 'pending') return
        // 如果执行resolve，状态变为fulfilled
        this.PromiseState = 'fulfilled'
        // 终值为传进来的值
        this.PromiseResult = value
    }

    reject(reason) {
        // state是不可变的
        if (this.PromiseState !== 'pending') return
        // 如果执行reject，状态变为rejected
        this.PromiseState = 'rejected'
        // 终值为传进来的reason
        this.PromiseResult = reason
    }
}

// Test the MyPromise Function
// 马上输出 ”成功“
const p1 = new Promise((resolve, reject) => {
    resolve('成功')
}).then(res => console.log(res), err => console.log(err))



const test2 = new MyPromise((resolve, reject) => {
    reject('失败')
})
console.log(test2) 

/* Output
    MyPromise { PromiseState: 'fulfilled', PromiseResult: '成功' }
    MyPromise { PromiseState: 'rejected', PromiseResult: '失败' }
*/

/* 
1、Promise的初始状态是pending
2、执行了resolve，Promise状态会变成fulfilled
3、执行了reject，Promise状态会变成rejected
4、Promise只以第一次为准，第一次成功就永久为fulfilled，第一次失败就永远状态为rejected
5、Promise中有throw的话，就相当于执行了reject
*/


//Promise中有throw的话，就相当于执行了reject。这就要使用try catch了

/* website:
1. https://juejin.cn/post/6994594642280857630
2. https://juejin.cn/post/7007031572238958629

*/