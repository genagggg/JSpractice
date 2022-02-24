// 1 Переменные
// variable -переменная
// var name = 'Vladilen'
//cammelCase style gaide
// const firstName = 'Vladilen'
// //const lastName = 'Minin'// string
// //let age = 26 // number
// const isProgramer = true // boolean
// //age = 'String'
// const _privat = "privat"
// const _ = "privat"
// const $ = "some value"
// //const if = 'mkef'//err
// const withNum5 = '5'
// //const 5withNum = 5//err

//age = 28
//lastName = 'Min'
//name = 'Vlad'
//console.log(name)
//console.log(lastName)
// console.log(age)
// console.log(isProgramer)
//============================

//2 Мутирование

//console.log('Имя человека ' + firstName + ' , а возраст человека ' + age)
// console.log(age.toString())
//alert('Имя человека ' + firstName + ' , а возраст человека ' + age)
//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

//======================================

// 3 Операторы
// let currentYear = 2020
// const birthYear = 1993
// //const age = currentYear + birthYear
// const a = 10
// const b = 5
// let c = 32
// //c = c + a
// c += a
// c -= a
// c *= a
// //console.log(age)
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(currentYear++)
// console.log(c)
//=================================

// 4 Типы данных
// const isProgrammer = true
// const name = 'Vladilen'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(x)
// console.log(null)
//==================================

// 5 Приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
// // > < >= <= 
// const isFullAge = currentYear - birthYear >= fullAge //26>=27
// console.log(isFullAge)

//==================================

// // 6 Условные операторы
// // const courseStatus = 'read' // redy, fail, pending

// // if (courseStatus === 'ready') {
// //     console.log('Курс уже готов и его можно проходить')
// // } else if (courseStatus === 'pending') {
// //     console.log('Курс пока находится в процесе разработки')
// // }
// // else {
// //     console.log('Курс не получился')
// // }

// // const isReady = false
// // // if (isReady === true) {
// // //     console.log('Всё готово')
// // // } else {
// // //     console.log('Всё не готово')
// // // }
// // // Тернарное выражение
// // isReady ? console.log('Всё готово') : console.log('Всё не готово')
// // // const num1 = 42 //number
// // // const num2 = '42' //string 
// // //console.log(num1==num2)//true
// // // console.log(num1 === num2) //false
// //============================================
// // // 7 Булевая логика
// // true&&true//true
// // false&&false//false

// // 8 Функции

// function calculateAge(year) {
//     return 2020 - year
// }

// // const myAge = calculateAge(1993)
// // console.log(myAge)

// // console.log(calculateAge(1993))
// // console.log(calculateAge(2019))
// // console.log(calculateAge(1999))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' Сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вобщето это уже будущее')
//     }

// }

// logInfoAbout('Владилен', 1993)
// logInfoAbout('Елена', 1990)
// logInfoAbout('Kum', 2022)
//===========================================

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Лада']
// //console.log(cars)

// //const cars = new Array('Мазда', 'Мерседес', 'Лада')
// console.log(cars)
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3])
// console.log(cars.length)
// cars[0] = 'Порше'
// console.log(cars)
// cars[3] = 'Mazda'
// console.log(cars)
//============================================

// 10 Циклы Итерация массива
// const cars = ['Мазда', 'Мерседес', 'Лада', 'Porsche']

// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }

// for (car of cars) {
//     console.log(car)
// }
//============================================
// // 11 Обьекты
// // const person=new Object({})
// const person = {
//     firstName: 'Vladilen',
//     lastName: 'Minin',
//     year: 1993,
//     languages: [
//         'Ru', 'En', 'De'
//     ],
//     hasWife: true,
//     greet: function () {
//         console.log('greet')
//     }

// }
// console.log(person.firstName)
// person.greet()
// const key = 'languages'
// const key = 'year'
// person.hasWife = true
// person.isProgrammer = true
// console.log(person[key])
//========================================

//Number
// const num = 42 // integer
// const float = 42.42 //float
// const pow = 10e3
// console.log(pow)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('MAX_VALUE', Number.POSITIVE_INFINITY)
// console.log('MAX_VALUE', Number.NEGATIVE_INFINITY)
// console.log(1 / 0)
// console.log(Number.NaN) //Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(2 / undefined)
// console.log(isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(Number.parseInt(stringInt) + 2)// Преобразование строки в число
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(parseInt(stringFloat))
// console.log(parseFloat(stringFloat)) //Парсит флоаты
//====================================================
