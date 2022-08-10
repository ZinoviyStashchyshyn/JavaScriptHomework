// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function rectangleArea(a, b) {                                                  // function declaration
//     return a*b;
//
// }
//
// const s = rectangleArea(5, 5);
// console.log(s)
//
// const rectangleArea = function (a, b) {                                        // function expression
//     return a *b;
// }
// console.log(rectangleArea(5,5));
//
// const rectangleArea = (a,b)=>a*b;                                             // arrow function
// console.log(rectangleArea(5,5));
//
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// const circleArea =r=>3.14*r**2;                                             // варіант, коли користувач передає лише радіус
// console.log(circleArea(5));
//
// const circleArea =(pi,r)=>pi*r**2;                                         // варіант, коли користувач вводить радіус та число pi
// console.log(circleArea(3.14,5));
//
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// const cylinderArea =(h,r)=>2*Math.PI*h*r;                                  // варіант з використанням Math.PI
// console.log(cylinderArea(5,5));
//
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function printArray(array) {
//
//     for (const item of array) {
//         console.log(item);
//     }
// }
// printArray(numbers);
//
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function createParagraph(text) {
//
//     const p = document.createElement("p");
//     p.innerHTML = text;
//     document.body.appendChild(p);
//
// }
// createParagraph("lorem ipsum)))))");
//
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий        ЗРОБИВ ОДНЕ ЗАВДАННЯ БО ВОНИ ОДНАКОВІ ПРАКТИЧНО))))))
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function createUl(quantity, text) {
//
//     const ul = document.createElement("ul");
//
//     for (let i = 0; i <= quantity; i++) {
//         const li = document.createElement("li");
//         li.innerHTML = text;
//         ul.appendChild(li);
//     }
//
//     document.body.appendChild(ul);
//
// }
// createUl(3, "ogiogiothgihtigiothgithig");
//
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// const primitiveTypes = [1, "string", true, undefined, null, false];
//
// function createList(array) {
//
//     const ul = document.createElement("ul");
//
//     for (const arrayElement of array) {
//         const li = document.createElement("li");
//         li.innerHTML = `${arrayElement}`;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(ul);
//
// }
// createList(primitiveTypes);
//
//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// const users = [
//     {id: 1, name: "OLEG", age: 44},
//     {id: 2, name: "MARYAN", age: 45},
//     {id: 3, name: "ROMAN", age: 46}
// ];
//
// function printUsers(array) {
//
//     for (const arrayElement of array) {
//         const div = document.createElement("div");
//         div.innerHTML = `id:${arrayElement.id} || name:${arrayElement.name} || age:${arrayElement.age}`;
//         document.body.appendChild(div);
//     }
//
// }
//
// printUsers(users);
//
//
// // - створити функцію яка повертає найменьше число з масиву
//
// const numbers = [-10, 2, 3, 5, 6, 7, -78, 9];
//
// function printMinNumber(array) {
//
//   let minNumber = array[0]
//     for (const number of array) {
//         if (number<minNumber){
//             minNumber=number
//
//         }
//     }
//     return minNumber;
//
// }
// console.log(printMinNumber(numbers));
//
//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function sumNumberOfArray(array) {
//
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//
//     return sum;
// }
//
// console.log(sumNumberOfArray(numbers));

