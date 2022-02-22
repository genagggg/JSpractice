const person = Object.create( //Обьявили обьект, синтаксис конструктор обьекта
    {
        calculateAge() {
            console.log('age:', new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Vladilen',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            value: 1993,
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear //Вернёт полное количество лет
            },
            set(value) {
                document.body.style.background = "red"
                console.log('set age', value)
            }
        }
    }
)

// console.log(person)

// person.name = 'Maxim'

for (let key in person) {

    if (person.hasOwnProperty(key)) {
        console.log('key', key, person[key])
    }


}