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
// })

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
// =================================================================

// console.log('Request Data...')

// setTimeout(() => {
//     console.log('Preparing Data...')
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Received Data...', backendData)
//     }, 2000)
// }, 2000)

// =====================================================================
// console.log('Request Data ...')

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing Data...')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'Working'
//         }
//     }, 2000)
//     resolve()
// }, 2000)

// p.then(() => {
//     console.log('Promise resolve...')
// }, 5000)
// ============================================================================

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('Whoops!'), 1000)
//     }, 2000)
// })

// promise.then(
//     resulte => alert(resulte),
//     error => alert(error)
// )

// function delay(ms) {
//     setTimeout(() => {
//         return new Promise((resolve, reject) => {
//             resolve()
//         })
//     }, ms)
// }

// console.log('Request Data...')

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'Working'
//         }
//         reject()
//     }, 2000)
// })
// p.catch(err => console.error('Error', err))
//     .then(res => console.log(res))
//     .finally(() => { console.log('Finally') })

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// // sleep(2000).then(() => console.log('After 2 sec'))
// // sleep(3000).then(() => console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(3000)]).then(() => {
//     console.log('All promises')
// })

// Promise.race([sleep(2000), sleep(3000)]).then(() => {
//     console.log('Race promises')
// })

// const person = Object.create({
//     calculateAge() {
//         console.log('Age: ', new Date().getFullYear() - this.birthYear)
//     }
// }, {
//     name: {
//         value: 'Vladilen',
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     age: {
//         get() {
//             return new Date().getFullYear() - this.birthYear
//         },
//         set(value) {
//             document.body.style.background = value
//             console.log('Set age', value)
//         }
//     },
//     birthYear: {
//         value: 1994,
//         enumerable: true
//     }
// })

// person.name = 'Maxim'

// for (let key in person) {
//     if (person.hasOwnPropert(key)) {
//         console.log('Key', key, person[key])
//     }
//     console.log('Key', key, person[key])
// }

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }
// // ==========================================================
// class Animal {
//     static type = 'ANIMAL'
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('I am Animal!')
//     }
// }

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cat extends Animal {
//     static type = 'CAT'

//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }

//     voice() {
//         super.voice()
//         console.log('I am cat')
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })
// =====================================================================================

// Классы в ES6

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }
// 'use strict'
// class Animal {

//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }

//     voice() {
//         console.log('I am Animal')
//     }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // }
// // )

// class Cat extends Animal {
//     static type = 'Cat'

//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }

//     voice() {
//         super.voice()
//         console.log('I am cat')
//     }

//     get ageInfo() {
//         return this.age * 7
//     }
//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 3,
//     hasTail: true,
//     color: 'black'
// })

// const cat2 = new Cat({
//     name: 'Cat',
//     age: 24,
//     hasTail: true,
//     color: 'black'
// })

// ===============================================================

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = 'none'
//     }

//     show() {
//         this.$el.style.display = 'block'
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })

// class Circle extends Box {
//     constructor(options) {
//         super(options)

//         this.$el.style.borderRadius = '50%'
//     }
// }

// const c = new Circle({
//     selector: '#circle',
//     size: 90,
//     color: 'green'
// })
// ================================================================================

// Async, Await 


