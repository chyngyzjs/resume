//логические операторы
// console.log(true && false) // И
// console.log(true || false) // ИЛИ
// console.log(true || false && true)
// console.log(false || false)
// console.log(!!!true)
// console.log(true && !true || !false && !true)
// console.log(true && true && false || !!false && true)
// console.log(false || !false && !!true || true)

//операторы сравнения
// console.log(10 > 10)
// console.log(10 >= 10)
// console.log(20 < 30)
// console.log(30 <= 20)

// console.log(10 == "10") //не строгое равенство
// console.log(10 === "10") //строгое равенство
// console.log("nike" == "adidas")
// console.log("nike" == "nike")
// let nike
// console.log("nike" == nike)

// условные операторы
// let num1 = 140
// let num2 = 140

// //условный оператор IF (If идет первым, предлагая задачу, else if предлагает ЕЩЕ вариант, else предлагает третий, последний вариант)

// if (num1 > num2) {
//     console.log("num2 > num2")
//     // alert("aaa")
// }

// else if (num1 < num2) {
//     console.log("num1 меньше num2")
// }

// else {
//     console.log("Они равны")
// }

// else if (num1 > 100) {
//     console.log("num1 > 100")
// }

// let value = +prompt("enter your age")
// if (value > 6) {
//     alert("YES")
// }
// else {
//     alert("NO")
// }

// let adminName = "admin@admin.com"
// let adminPassword = "admin1"

// let camdidate = prompt("enter login")
// let candidatePassword = prompt('enter password')

// let maxCount = 3
// let count = 0
// console.log(count)

// if (maxCount >= count) {
//     alert('Обратитесь в службу поддержки')
// }

// else if (candidateName === adminName && candidatePassword === adminPassword) {
//     alert('Доступ разрешён')
// }
// else if (candidateName !== adminName && candidatePassword !== adminPassword) {
//     count++
//     alert('Логин и пароль не верны')
// }
// else if (candidatePassword !== adminPassword) {
//     count++
//     alert('Вы ввели неверный пароль')
// }
// else if (candidateName !== adminName) {
//     count++
//     alert('Вы введи неверный логин')
// }

//Тернарный оператор

// let val = 'name'
// let val1 = 'name`'

// val === val1 || 10 > 20 ? console.log('сработал true') : console.log('сработал false')

// 0 || 1 && -1 ? console.log('true') : console.log('false')

// Оператор SWITCH

// let str = 'Буткемп'
// switch (str) {
//     case "Школа":
//         console.log("{Хорошо")
//         break;
//     case "Буткемп":
//         console.log("Идеально")
//         break;
//     case "ВУЗ":
//         console.log("пойдет")
//         break;
//     default:
//         console.log("Не подошло по условиям")
//         break;
// }

//ПОСМОТРИ СЮДА СУКА (отсюда)
// let code = prompt('введи тег h1')
// switch (code) {
//     case "<h1></h1>":
//         alert('Правильно ввели тег H1')
//         break;
//     case "<h1>":
//         alert('Почти')
//         break;
//     default:
//         alert("Ввели неверно")
//         break;
// }
// (до сюда!!!)

// Используя тернарный оператор выведите в консоли прогноз погоды.К примеру, если переменная temperature равна - 10, вывести "Температура воздуха опустится до -10 градусов".

// let temperature = +prompt("Enter")
// if (temperature >= 0) {
//     alert("temperature bigger 0");
// }
// else if (temperature < 0) {
//     alert("temperature lower 0");
// }

//Массивы

// let arr = [1, 2, 3, 4, 5]
// console.log(arr[arr.length - 2])
// console.log(arr[0])
// let newArr = ["string", { name: "Ilyas" }, null, 0]
// console.log(newArr)

// let products = [
//     {
//         title: "Puma",
//         gender: "male"
//     },
//     {
//         title: "Puma",
//         gender: "male"
//     },
//     {
//         title: "Puma",
//         gender: "male"
//     },
//     {
//         title: "Puma",
//         gender: "male"
//     },
//     {
//         title: "Puma",
//         gender: "male"
//     },
//     {
//         title: "Puma",
//         gender: "male"
//     },
// ]
// console.log(products)

// Задача.В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает это число
// (в первую, вторую, третью или четвертую).

//мой вариант
// let num = +prompt("Введите число от 1 до 59")
// if (num < 15) {
//     alert("1")
// }
// else if (num < 30) {
//     alert("2")
// }
// else if (num < 45) {
//     alert("3")
// }
// else if (num < 59) {
//     alert("4")
// }

//другой вариант
// let min = +prompt("Введите число от 1 до 59")

// if (min >= 1 && min <= 15) {
//     console.log('1 четверть')
// }
// else if (min >= 16 && min <= 30) {
//     console.log('2 четверть')
// }
// else if (min >= 31 && min <= 45) {
//     console.log('3 четверть')
// }
// else if (min >= 46 && min <= 60) {
//     console.log('4 четверть')
// }
// else if (min >= 16 && min <= 30) {
//     console.log('2четверть')
// }
// else {
//     console.log('нет такого')
// }

let x = 10,
    y = 7;
if (x > y) {
    alert("x bigger than y");
}
