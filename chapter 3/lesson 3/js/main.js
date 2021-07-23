//Циклы

//while, do while

// let i = 1
// while (i <= 100) {
//     console.log(i, "с помощью цикла while")
//     i++
// }

// let i = 10
// do {
//     console.log(i, "сработает один раз по любому")
// } while (i < 5);

// let num = 100
// while (num >= 50) {
//     console.log(num)
//     num--
// }

// let arr = [20, 30, 40, 100, 50]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// let i = 0
// while (i < arr.length) {
//     console.log(arr[i], "с помощью цикла")
//     i++

// }

// let arr = ["Футболка", "Мяч", "Обувь"]
// let word = prompt("Введите категорию(Футболка, Мяч, Обувь)")
// let i = 0
// let result = "no"
// while (i < arr.length) {
//     if (arr[i] === word) {
//         result = "Yes"
//         break;
//     }
//     // else {
//     //     result = "no"
//     //     break;
//     // }
//     i++
// }
// alert(result)

//for цикл (синтаксический сахар)

// let arr = [1, 2, 3]
// for (let i = 0; i < arr.length; i++) {
//     console.log(i, "это индексы")
// }


// for (let i = 50; i <= 200; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

//for in-----------
// let arr = [10, 20, 30, 40, 50]

// for (const key in arr) {
//     console.log(arr[key])
// }

// let obj = {
//     name: "Chyngyz",
//     age: 32,
//     car: "tesla"
// }
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.car)

// for (const key in obj) {
//     console.log(obj[key])
// }


//for off-------------
// let array = ["Ilyas", "Nurbek", "Aziz", "Aizada", "Leon"]

// for (const value of array) {
//     console.log(value)
//     if (value == "Nurbek") {
//         alert("Nurbek")
//     }
// }

//Простые методы массивов

// let arr = [1, 2, 3]
// // arr.push("askat")
// arr.push(4) //добавляет конец
// console.log(arr)
// // arr.pop() //удаляет с конца
// let deletedElem = arr.pop()
// console.log(deletedElem)
// console.log(arr)


// console.log(window)
// let newArray = ["Beks", nurbek = []]
// console.log(window)
// newArray.unshift(1, 2, 3)
// console.log(newArray)
// let num = newArray.shift()
// console.log(num)
// console.log(newArray)

// let array = [10, 20, 30]
// // array.reverse()
// let str = array.join("-")
// console.log(str)
// console.log(array)
// let newArray = str.split("-")
// console.log(newArray)

// let nums = [1, 2, 30, 11, 101, 222, 27, 86]
// console.log(nums)
// nums.sort((a, b) => a - b)
// // nums.sort((a, b) => b - a)
// console.log(nums)

// let products = [
//     {
//         title: "Телефон"
//     },
//     {
//         title: "Сумка"
//     },
//     {
//         title: "Обувь"
//     },
//     {
//         title: "Аружка"
//     },
//     {
//         title: "Ноутбук"
//     },
// ]
// console.log(products)
// //сортировка от а-я
// products.sort((a, b) => {
//     if (a.title > b.title) {
//         return -1
//     }
// })

// //сортировка я-а
// products.sort((a, b) => {
//     if (a.title < b.title) {
//         return -1
//     }
// })
// console.log(products)

//Азиз
// let products = [
//     {
//         title: 'Телефон'
//     },
//     {
//         title: 'Сумка'
//     },
//     {
//         title: 'Обувь'
//     },
//     {
//         title: 'Ноутбук'
//     },
//     {
//         title: 'Одежда'
//     },
// ]
// console.log(products)
// products.sort((a, b) => {
//     if (a.title > b.title) {
//         return -1
//     }
// })
// products.sort((a, b) => {
//     if (a.title < b.title) {
//         return -1
//     }
// })
// console.log(products)

//slice, splice

// let array = [10, 22, 31, 47, 55]
// let res = array.slice(2)
//массив.slice(с какого начать, по какой не включительно)
// console.log(array)
// console.log(res)

let array = [10, 22, 31, 47, 55]
let res = array.splice(0)
//массив.splice(с какого начать, сколько вырезать, что вставить(кол-во не ограничено))
console.log(array)
console.log(res)

//Есть 4 цикла: While (do while в нем же), For, For in, For off

//Push добавляет в конец
//Pop

//
