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

ff