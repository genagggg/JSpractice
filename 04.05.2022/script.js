// const person = {
//     name: 'Vladilen',
//     age: 31,
//     gre: function () {
//         console.log('hello world')
//     }

// }

// const person = new Object({

//     name: 'Vladilen',
//     age: 31,
//     gre: function () {
//         console.log('hello world')
//     }


// })

// Object.prototype.sayHello = function () {
//     console.log('Hello')
// }

// const lena = Object.create(person)

// const str = 'I am string'

// const str = new String('I am string ')


// ============== Урок 2 Что такое контекст this. Как работает call bind apply ========================

// function hello() {
//     console.log('hello', this)
// }

// const person = {
//     name: 'Vladilen',
//     age: 25,
//     sayHello: hello
// }

// ++++++++++++++++++++++++++
// Zamikanya

// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)

// const addTen = createIncrementor(10)

// console.log(addOne(13))

// console.log(addTen(2))

// ===================================================================
// Zamikanya

// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)

// console.log(addOne(10))
// console.log(addOne(56))

// console.log(addTen(20))

// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(ruUrl('netflix'))

// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, args)
//     }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = {
//     name: 'Mihail',
//     age: 22,
//     job: 'Frontend'
// }

// const person2 = {
//     name: 'Elena',
//     age: 19,
//     job: 'SMM'
// }

// bind(person1, logPerson)()
// bind(person2, logPerson)

// Asinhronnost

// console.log('Statrt')

// console.log('Start2')

// function timeout2sec() {
//     console.log('timeout2sec')
// }

// window.setTimeout(function () { console.log('Inside timeout, after two seconds') }, 5000)

// setTimeout(timeout2sec, 2000)

// console.log('End')