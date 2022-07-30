// // - Є змінна х, якій ви надаєте довільне числове значення.
// //   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let number = +prompt("Enter number from -3 to 1");                    //// отримуємо з промпту число в потрібному нам діапазоні, та перевіряємо код
//
// if (number !== 0) {
//     console.log("Вірно");
// } else {
//     console.log("Невірно")
// }
//
//
// //- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число(в першу, другу, третю или четверту частину години).
//
// let time = Math.floor(Math.random() * 60) - 1;         //// отримуємо рандомне число в діапазоні від 0 до 59.
//
// let time = new Date().getMinutes()                    //// або використовуємо медот new Date().getMinutes() і отримуємо від JS поточну хвилину для ношої годинни
//
// if (time >= 0 && time <= 15) {
//     console.log(`Ми отримали число: ${time} і це перша чверть години`);
// } else if (time >= 16 && time <= 30) {
//     console.log(`Ми отримали число: ${time} і це друга чверть години`);
// } else if (time >= 31 && time <= 45) {
//     console.log(`Ми отримали число: ${time} і це третя чверть години`);
// } else {
//     console.log(`Ми отримали число: ${time} і це четверта чверть години`);
//
// }
//
//
// //- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = Math.round(Math.random() * (31 - 1) + 1)          //// отримуємо рандомне число в діапазоні від 1 до 31
//
// let day = new Date().getDate()                                //// або використовуємо медот new Date().getDate()  і отримуємо від JS поточну хвилину для ношої годинни
//
// if (day >= 1 && day <= 10) {
//     console.log(`Сьогодні ${day} число і це перша декада місяця`);
// } else if (day >= 11 && day <= 20) {
//     console.log(`Сьогодні ${day} число і це друга декада місяця`);
// } else {
//     console.log(`Сьогодні ${day} число і це третя декада місяця`);
//
// }
//
//
// //- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let day = +prompt("Please enter number of the day in week from 1 - to 7");                        //// варіант коли з промпту отримуємо нумерацію дня
//
// switch (day) {
//     case 1 :
//         console.log("Today is Monday");
//         break;
//     case 2 :
//         console.log("Today is Tuesday");
//         break;
//     case 3 :
//         console.log("Today is Wednesday");
//         break;
//     case 4 :
//         console.log("Today is Thursday");
//         break;
//     case 5 :
//         console.log("Today is Friday");
//         break;
//     case  6 :
//         console.log("Today is Saturday it's Weekend!!! Have a rest!!!");
//         break;
//     case  7:
//         console.log("Today is Sunday it's Weekend!!! Have a rest!!!");
//         break;
//     default:
//         console.log("OOPS INCORECT NUMBER OF DAY");
// }
//                                                                                         /// трохи інший варіант, коли просто запитуємо в користувача чи хоче він дізнатись, який сьогодні день
//
// let questionAboutDay = confirm("Do you want to know what day it is today?");            /// тут конфірмом отримуємо від клієнта чи хоче він знати який сьогодні день
//
// let day = questionAboutDay ? new Date().getDay() : day = null;                          //// тернаркою присвоюємо значення змінній day за допомогою new Date().getDay()
//
// switch (day) {                                                                          //// запускаємо switch, котрий відпрацьовує відповідно до значення day
//     case 0 :
//         console.log("Today is Sunday it's Weekend!!! Have a rest!!!");
//         break;
//     case 1 :
//         console.log("Today is Monday");
//         break;
//     case 2 :
//         console.log("Today is Tuesday");
//         break;
//     case 3 :
//         console.log("Today is Wednesday");
//         break;
//     case 4 :
//         console.log("Today is Thursday");
//         break;
//     case  5 :
//         console.log("Today is Friday");
//         break;
//     case  6:
//         console.log("Today is Saturday it's Weekend!!! Have a rest!!!");
//         break;
//     default:
//         console.log("Bye-Bye, Yes man it's your business");
// }
//
//
// //- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числа.
//
// let numberOne = 10;                                          //// варіант коли маємо два числа
// let numberTwo = 1;
//
// if (numberOne > numberTwo) {
//     console.log(numberOne)
// } else if (numberOne < numberTwo) {
//     console.log(numberTwo)
// } else if (numberOne === numberTwo) {
//     console.log(` number one: ${numberOne} = number two: ${numberTwo}`)
// }
//
// let firstNumber = +prompt("Enter first number");                    //// варіант коли отримуємо два числа з промпту
// let secondNumber = +prompt("Enter second number");
//
// if (firstNumber > secondNumber) {
//     console.log(firstNumber)
// } else if (firstNumber < secondNumber) {
//     console.log(secondNumber)
// } else if (firstNumber === secondNumber) {
//     console.log(`first number: ${firstNumber} = second number: ${secondNumber}`)
// } else {
//     console.log("wrong number")
// }
//
//
// //- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
//
// let x = -1;                //// 0;"",null,undefined,NaN ітд, все що дасть false, присвоїть х значення "default"
// x = x || "default"
// console.log(x);
//
//
// if (!x) {                   //// інший варіант, тільки з використанням if
//     x = x || "default";
// }
// console.log(x)