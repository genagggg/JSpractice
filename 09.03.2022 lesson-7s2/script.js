function hello() {
    console.log('hello', this)
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// const fnLenaInfoLog = person.logInfo.bind(lena, 'Frontend', '9-999-123-12-23')

// fnLenaInfoLog()

// person.logInfo.bind(lena, 'Frontend', '9-999-123-12-23')()
// person.logInfo.call(lena, 'Frontend', '9-999-123-12-23')
person.logInfo.apply(lena, ['Frontend', '9-999-123-12-23'])

//============================================

const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.multBy(2))

// console.log(multBy(array, 5))