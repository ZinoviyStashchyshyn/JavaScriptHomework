
//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//  Вивести кожну змінну за допомогою: console.log , alert, document.write

// let greeting, okten, web, country, numberOne, numberTwo, numberThree, numberFour, numberPi, numberFive, numberSix, booleanTrue, booleanFalse;

// greeting= "okten";
// console.log(greeting);
// alert(greeting);
// document.write(greeting);

// web = "owu";
// console.log(web);
// alert(web);
// document.write(web);

// country = "ua";
// console.log(country);
// alert(country);
// document.write(country);

// numberOne = 1;
// console.log(numberOne);
// alert(numberOne);
// document.write(numberOne);

// numberTwo = 10;
// console.log(numberTwo);
// alert(numberTwo);
// document.write(numberTwo);

// numberThree = -999;
// console.log(numberThree);
// alert(numberThree);
// document.write(numberThree);

// numberFour = 123;
// console.log(numberFour);
// alert(numberFour);
// document.write(numberFour);

// numberPi = 3.14;
// console.log(numberPi);
// alert(numberPi);
// document.write(numberPi);

// numberFive = 2.7;
// console.log(numberFive);
// alert(numberFive);
// document.write(numberFive);

// numberSix = 16;
// console.log(numberSix);
// alert(numberSix);
// document.write(numberSix);

// booleanTrue = !!1;
// console.log(booleanTrue);
// alert(booleanTrue);
// document.write(booleanTrue);

// booleanFalse = !!"";
// console.log(booleanFalse);
// alert(booleanFalse);
// document.write(booleanFalse);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person

// let firstName = "Zinoviy";
// let middlename = "Zinoviyovych";
// let lastName = "Stashchyshyn";
//
// let person = `${lastName} ${firstName} ${middlename} `;    //// інтерполяція
// let person = lastName +" "+ firstName +" "+ middlename;   ////  конкатинація
// console.log(person)

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

// let a = 100; let b = '100'; let c = true;
// console.log(typeof(a),typeof(b),typeof(c));

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let lastName = prompt("Please enter your lastname");
let firstName = prompt("Please enter your firsname");
let middleName = prompt("Please enter your middleName");
let person =`Hello my name is: ${lastName} ${firstName} ${middleName}`;
console.log(person);


