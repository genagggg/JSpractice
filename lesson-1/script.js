/*let userInfo = new Object();//синтаксис "конструктор обьекта"
let userInfo = {};//синтаксис "литерала обьекта"

let userInfo = {
    name: "Выся",
    age: 30,  //Висячая запятая
    "likes javascript": true
}
console.log(userInfo);
//console.log(userInfo.name)
console.log(userInfo["likes javascript"]);

let userInfo ={
    name: "Вася",
    age: 30,
    "like javascript": true
}

console.log(userInfo);

delete userInfo.age;

console.log(userInfo);
delete userInfo["like javascript"];
console.log(userInfo);




//Копирование обьекта

//Прикопировании обьекта в другую пременную
//сам обьект не дублируется, а копируется только ссылкана него

let userInfo={
    name: "Вася",
    age: 30,
}

console.log(userInfo);

let user =userInfo;
console.log(user);
user.age=18;
console.log(userInfo);


//Дублирование обьектов (Object.assign)

let userInfo = {
    name: "Вася",
    age: 30,
}

let user = Object.assign({}, userInfo);

user.age = 18;

console.log(userInfo);//{name: "Вася", age: 30}
console.log(user);//{name:"Вася", age:18}


// Еще про Object.assign

let userInfo ={
    name: "Вася",
    age: 30,
}

Object.assign(userInfo, {['like javascript']: true, city: "Uzhhorod"})
console.log(userInfo);

//проверка существования свойства

let userInfo ={
    name: "Вася",
    age: 30,
}

if(userInfo.age){
    console.log(userInfo.age);
}

//Проверка существования свойства

// Опциональная цепочка
let userInfo ={
    name: "Вася",
    age: 30,
    //address: {
        //city: "Uzhhorod",
        //street: "Freedom",
    }
}

console.log(userInfo?.addres?.street);

//Проверка существования свойства

// Оператор "in"
let userInfo ={
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod",
        street: "Freedom",
    }
}

if ("name" in userInfo) {
    console.log(userInfo.name);
}

//Цикл "for_in"
*/

// let userInfo = {
//     name: "Gena",
//     age: 31,
//     address: {
//         city: "V_Salda",
//         street: "Evstigneeva"
//     }
// }
// for (let key in userInfo) {
//     console.log(key)
//     console.log(userInfo[key])
// }

// for (let key in userInfo.address) {
//     console.log(key);
//     console.log(userInfo.address[key]);
// }

// const person = {
//     name: "Andrey",
//     age: 28,
//     greet: function () {
//         console.log('Greet!')
//     }
// }

// const person = new Object({


//     name: "Andrey",
//     age: 28,
//     greet: function () {
//         console.log('Greet!')
//     }
// }
// )

// Object.prototype.sayHello = function () {
//     console.log('muuuu')
// }

// const lena = Object.create(person)

const person = new Object({
    name: 'eee',
    age: 23,
    greet: function () {
        console.log('hello')
    }
})

Object.prototype.sayHello = function () {
    console.log('sayHe')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')
