// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// }

// const person = new Object({
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// })

// Object.prototype.sayHello = function () {
//     console.log('hello')
// }

// const lena = Object.create(person)
// lena.name = 'Lena'

// const str = new String('I am string')

// for (key in str) {
//     console.log(str[key])
// }

// const person = {
//     name: 'Gennady',
//     age: 31,
//     greet: function () {
//         console.log('Hello every body!')
//     }
// }

const person = new Object({
    name: 'Gennady',
    age: 31,
    greet: function () {
        console.log('Hello every body!')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello!')
}

const lena = Object.create(person)

lena.name = 'Lena'

const stri = 'Hello world'
const str = new String(stri)
