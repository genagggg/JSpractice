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

// // const person = {
// //     name: 'Vladilen',
// //     age: 23,
// //     greet: function () {
// //         console.log('Hello every body')
// //     }
// // }

// // const person = new Object({
// //     name: 'Vladilen',
// //     age: 23,
// //     greet: function () {
// //         console.log('Hello every body')
// //     }
// // })

// // Object.prototype.sayHello = function () {
// //     console.log('ezy')
// // }



// // const lena = Object.create(person)

// // ================================================================
// // This

// function hello() {
//     console.log('hello', this)
// }

// const person = new Object({
//     name: 'Vladilen',
//     age: 20,
//     sayHello: hello.bind(this),
//     logInfo: function (job, phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
// })


// const lena = {
//     name: 'Lena',
//     age: 22
// }

// // const fnLena = person.logInfo.bind(lena, 'Frontend', '909000000')
// // fnLena()

// // person.logInfo.bind(lena, 'Frontend', '909000000')()
// // person.logInfo.call(lena, 'Frontend', '909000000')
// person.logInfo.apply(lena, ['Frontend', '909000000'])

// const array = [1, 2, 3, 4, 5]

// // function multBy(arr, n) {
// //     return arr.map(function (i) {
// //         return i * n
// //     })
// // }

// Array.prototype.multBy = function (n) {
//     return this.map(function (i) {
//         return i * n
//     })
//     // console.log('multBy', this)
// }

// array.multBy(3)

// =========================================================

function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}


