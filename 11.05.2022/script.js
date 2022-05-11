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

// ================================================
// Promise
// console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)
// =====================================================
// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data ...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve()
//     }, 2000)
// })

// p.then(() => {
//     console.log('Promise resolve')
// })
// =======================================================
// console.log('Request Data ....')

// setTimeout(function () {
//     console.log('Preparing Data ...')
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(function () {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     }, 2000)
// }, 2000)
// ======================================================
// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modifide = true
//             resolve(data)
//         }, 2000)
//     })
//     p2.then(
//         clientData => {
//             console.log('Data received', clientData)
//         }
//     )
// 

// =========================================================
// console.log('Request Data')

// setTimeout(() => {
//     console.log('Respons Data...')
//     const backendData = {
//         name: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modifined = true
//         console.log('Received Data...', backendData, 'hhhhh')
//     }, 2000)
// }, 2000)
// ====================================================================
// const p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Preparing Data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve()
//     }, 2000)
// }, 2000)

// p.then(() => {
//     setTimeout(() => {
//         console.log('Promise Resolve')
//     }, 2000)
// })
// ============================================================================

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing Data')
//         const backendData = {
//             server: 'aws0',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// }, 2000)

// p.then(data => {
//     const p2 = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//     p2.then(function (resData) {
//         console.log('Received Data...', resData)
//     })
// })

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing Data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// })
//     .catch(err => console.error('Error...', err))
//     .then(modata => {
//         console.log('Received Data', modata)
//         modata.fromPromise = true
//         return modata
//     }).then(data => {
//         console.log('ModifiedData...', data)
//     })
//     .finally(() => console.log('Finally'))

// const sleep = ms => {
//     return new Promise(resolve => setTimeout(() => resolve(), ms))
// }

// // sleep(2000).then(() => console.log('After 2 sec'))
// // sleep(3000).then(() => console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(3000)])
//     .then(() => {
//         console.log('All promises')
//     })

// Promise.race([sleep(2000), sleep(3000)])
//     .then(() => {
//         console.log('Race promises')
//     })

// const person = Object.create({}, {
//     name: {
//         value: 'Vladilen',
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     birthYear: {
//         value: 1993
//     },

//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear
//         },

//         set(value) {
//             console.log('Set age', value)
//         }
//     }
// })

// const person2 = {
//     name: 'yura',
//     age: 23
// }

// console.log(person, person2)

// for (let key in person) {
//     console.log('Key:', key, person[key])
// }