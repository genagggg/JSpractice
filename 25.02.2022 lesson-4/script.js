// 1 Float
//console.log(0.4 + 0.2)//0.6
// console.log((2 / 5) + 2)
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))
//===============================================

// 2 BigInt
// console.log(typeof 90719999999999999999999999999999999999999999n)
// console.log(99999999999999999999999999999999n - 7777777777777777777777777777777777777777n)
// //console.log(99999999999999999999999999999.99999n)//error
// //console.log(10n-4)//error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// 3 Math
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(34, 55, 66, 77))
// console.log(Math.floor(4.9))
// console.log(Math.round(4.9))
// console.log(Math.random())
// console.log(Math.sin(5))

// 4 Example
// function getRandomBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandomBetween(10, 5))
//================================================

// String

// const name = 'Vladilen'
// const age = 26
// function getAge() {
//     return age
// }
// // console.log(typeof name)
// // const output = 'Привет меня зовут' + name + ' и меня зовут ' + age + ' лет. '
// // console.log(output) 
// const output = `Привет я ${name} и мой возрас ${age < 20 ? 'A' : 'B'}`
// console.log(output)

// const output = `
// <div> This is div</div>
// <p>this is p</p>
// `
// console.log(output)

// const name = 'Vladilen'
// new String()
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('en'))
// console.log(name.startsWith('Vl'))
// console.log(name.endsWith('en'))
// console.log(name.repeat(3))
// const string = '   password    '
// console.log(string.trim())

// function logPerson(s, name, age) {
//     if (age < 0) {
//         age = 'Ещё не родился'
//     }

//     console.log(s, name, age)
//     return `${s[0]}${name[1]}${age[2]}`

// }

// const personName = 'Vladilen'
// const personName2 = 'Maxim'
// const personAge = 26
// const personAge2 = -10
// const outPut = logPerson`Имя: ${personName}, Возраст: ${personAge} !`
// const outPut2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2} !`

// console.log(outPut)
// console.log(outPut2)
//===========================================

// 1 Функции
//Function Declaration

// function greet(name) {
//     console.log('Привет - ', name)
// }
// //Function Expression
// const greet2 = function greet2() {
//     console.log('Привет 2-', name)
// }
// // greet('Лена')
// // greet2('Лена')

// // console.log(typeof greet)
// // console.dir(greet)

// // 2 Анонимные фунуции
// let counter = 0
// const interval = setTimeout(function () {//анонимная функция
//     if (counter === 5) {
//         clearInterval(interval)
//     }

//     console.log(++counter)
// }, 1000)
//===========================================================

// 3 Стрелочные функции

// const arrow = (name) => {
//     console.log('Привет', name)
// }

// const arrow2 = name => console.log('Hello', name)

// arrow('Vladilen')
// arrow2('Thather')

// const pow = num => {
//     return num ** 2
// }

// const pow2 = num => num ** 2

// console.log(pow(5))
// console.log(pow2(7))
//====================================================

//Параметры по умолчанию
// const sum = (a, b) => a + b
// console.log(sum(43,))//NaN

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result

// }
// const res = sumAll(1, 2, 3)
// console.log(res)
//================================================
// 5 Замыкания
// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }

// const logWithLastName = createMember('vladilen')
// console.log(logWithLastName('Minin'))
//===============================================
// Массивы
// const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседс']
// // const people = [
// //   {name: 'Vladilen', budget: 4200},
// //   {name: 'Elena', budget: 3500},
// //   {name: 'Victoria', budget: 1700}
// // ]
// const fib = [1, 1, 2, 3, 5, 8, 13]

// // Function
// function addItemToEnd() {

// }

// Method
// cars.push('Рено')
// cars.unshift('Волга')
//
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person
//   }
// }

// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//   return person.budget === 3500
// })
// const person = people.find(function(person) {
//   return person.budget === 3500
// })
// console.log(person)
// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Мазда!'))

// const upperCaseCars = cars.map(car => {
//   return car.toUpperCase()
// })
//
//const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)


// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

// const people = [
//     { name: 'Vladilen', budget: 4200 },
//     { name: 'Elena', budget: 3500 },
//     { name: 'Victoria', budget: 1700 }
// ]

// const allBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//         acc += person.budget
//         return acc
//     }, 0)

// console.log(allBudget)

// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1)

//=====================================================

// Обьекты
// const person = {
//     name: 'Vladilen',
//     age: 26,
//     isProgrammer: true,
//     languages: ['ru', 'en', 'de'],
//     // 'complex key': 'Complex Value',
//     // ['key_' + (1 + 3)]: 'Computed Key', // key_4
//     greet() {
//       console.log('greet from person')
//     },
//     info() {
//       // console.log('this:', this)
//       console.info('Информация про человека по имени:', this.name)
//     }
//   }

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()
//
// person.age++
// person.languages.push('by')
// // person['key_4'] = undefined
// delete person['key_4']
//
// console.log(person)
// console.log(person['key_4'])

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person
// console.log(person)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log('key:', key)
//     console.log('value:', person[key])
//   }
// }
// Object.keys(person).forEach((key) => {
//   console.log('key:', key)
//   console.log('value:', person[key])
// })

// Context
// person.info()

//   const logger = {
//     keys() {
//       console.log('Object Keys: ', Object.keys(this))
//     },

//     keysAndValues() {
// "key": value
// Object.keys(this).forEach(key => {
//   console.log(`"${key}": ${this[key]}`)
// })
// const self = this
//   Object.keys(this).forEach(function(key) {
//     console.log(`"${key}": ${this[key]}`)
//   }.bind(this))
// },

//     withParams(top = false, between = false, bottom = false) {
//       if (top) {
//         console.log('------- Start -------')
//       }
//       Object.keys(this).forEach((key, index, array) => {
//         console.log(`"${key}": ${this[key]}`)
//         if (between && index !== array.length - 1) {
//           console.log('--------------')
//         }
//       })

//       if (bottom) {
//         console.log('------- End -------')
//       }
//     }
//   }
// const bound = logger.keys.bind(person)
// bound()
// logger.keysAndValues.call(person)
//   logger.withParams.call(person, true, true, true)
//   logger.withParams.apply(person, [true, true, true])
//===========================================================

//Осинхронность
// Event Loop

// const timeout = setTimeout(() => {
//   console.log('After timeout')
// }, 2500)
//
// clearTimeout(timeout)
//
// const interval = setInterval(() => {
//   console.log('After timeout')
// }, 1000)
//
// // clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait)
// }
//
// delay(() => {
//   console.log('After 2 seconds')
// }, 2000)


// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve()
//             reject('Что-то пошло не так. Повторите попытку')
//         }, wait)
//     })
//     return promise
// }

//
// delay(2500)
//   .then(() => {
//     console.log('After 2 seconds')
//   })
//   .catch(err => console.error('Error:', err))
//   .finally(() => console.log('Finally'))

// const getData = () => new Promise(resolve => resolve([
//     1, 1, 2, 3, 5, 8, 13
// ]))

// getData().then(data => console.log(data))

// async function asyncExample() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log('Data', data)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }
// }

// asyncExample()