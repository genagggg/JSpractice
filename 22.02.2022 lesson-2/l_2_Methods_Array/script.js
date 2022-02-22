const people = [
    { name: 'Vladilen', age: 25, budget: 40000 },
    { name: 'Elena', age: 17, budget: 3400 },
    { name: 'Igor', age: 49, budget: 50000 },
    { name: 'Mihail', age: 15, budget: 1800 },
    { name: 'Vasilisa', age: 24, budget: 25000 },
    { name: 'Viktoria', age: 38, budget: 2300 }
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }

// for (let person of people) {
//     console.log(person)
// }

//ForEach
// people.forEach(function (person, index, pArr) {
//     console.log(person)
//     console.log(index)
//     console.log(pArr)
// })

// people.forEach(person => console.log(person))


//Map
// const newPeople = people.map(person => {
//     return person.name
// })

// const newPeople = people.map(person => {
//     return `${person.name} (${person.age})`
// })

// const newPeople = people.map(person => `${person.name} (${person.age})`)

//const newPeople = people.map(person => person.age * 3)
// console.log(newPeople)

//Filter

// const adult = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adult.push(people[i])
//     }
// }
// console.log(adult)

// const adult = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })
// console.log(adult)

//Reduce
// let amount = 0
// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget
// }

// const amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)
// console.log(amount)

//Find
// const igor = people.find(person => person.name === 'Igor')
// console.log(igor)

//FindIndex
// const igorIndex = people.findIndex(person => person.name === 'Igor')
// console.log(igorIndex)
//==========================

// const newPeople = people.filter(person => person.budget > 3000)
//     .map(person => {
//         return {
//             info: `${person.name} (${person.age})`,
//             budget: person.budget
//         }
//     })

// console.log(newPeople)

const amount = people.filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: Math.sqrt(person.budget)
        }
    }).reduce((total, person) => total + person.budget, 0)

console.log(amount)
