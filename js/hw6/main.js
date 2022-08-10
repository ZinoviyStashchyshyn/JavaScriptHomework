// //- Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// const stringOne ='hello world';                             // варіант коли це окремі стрінги, оскільки не зрозуміло
// const stringTwo ='lorem ipsum';
// const stringThree ='javascript is cool';
//
// console.log(stringOne.length,stringTwo.length,stringThree.length);
//
//
//                                                          // варіант коли це масив окремої стрінги, оскільки не зрозуміло
//
// const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
// const joinStreeng = strings.join(", ");
// console.log(joinStreeng.length);
//
//
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// const stringOne ='hello world';
// const stringTwo ='lorem ipsum';
// const stringThree ='javascript is cool';
//
// console.log(stringOne.toUpperCase(), stringTwo.toUpperCase(), stringThree.toUpperCase());
//
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// const stringOne ='HELLO WORLD';
// const stringTwo ='LOREM IPSUM';
// const stringThree ='JAVASCRIPT IS COOL';
//
// console.log(stringOne.toLowerCase(), stringTwo.toLowerCase(), stringThree.toLowerCase());
//
//
// // - Є "брудна" стрінга let str = ' dirty string   '. Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.trim());
//
// //- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
// let str = 'Ревуть воли як ясла повні';                                     // ТУТ МАЄ БУТИ СЛОВО ХІБА))))))))
//
// let stringToarray = str => str.split(" ");
//
// console.log(stringToarray(str));                                       // ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//
// // - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// let stingNumbers = numbers.map(value => value.toString());
// console.log(stingNumbers);
//
//
// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//
// let nums = [11, 21, 3];
//
// const sortNums = (nums, direction) => {
//
//     switch (direction) {
//
//         case 'ascending' :
//             console.log(nums.sort((a, b) => a - b));
//             break;
//         case "descending" :
//             console.log(nums.sort((a, b) => b - a));
//             break;
//         default :
//             console.log("WRONG AVTION!!!!");
//     }
// }
//
// sortNums(nums, 'ascending');                               // [3,11,21];
// sortNums(nums, 'descending');                             // [21,11,3];
// sortNums(nums, 'deng')
//
//
// // - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
//
// console.log(coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration));
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// console.log(coursesAndDurationArray.filter(value =>value.monthDuration>5));
//
// //описати колоду карт
//
// let cardSuit = [
//     {mast: 'cherva', value: 6, color: 'red'},
//     {mast: 'cherva', value: 7, color: 'red'},
//     {mast: 'cherva', value: 8, color: 'red'},
//     {mast: 'cherva', value: 9, color: 'red'},
//     {mast: 'cherva', value: 10, color: 'red'},
//     {mast: 'cherva', value: 'J', color: 'red'},
//     {mast: 'cherva', value: 'Q', color: 'red'},
//     {mast: 'cherva', value: 'K', color: 'red'},
//     {mast: 'cherva', value: 'A', color: 'red'},
//     {mast: 'cherva', value: 'Joker', color: 'red'},
//     {mast: 'khresta', value: 6, color: 'black'},
//     {mast: 'khresta', value: 7, color: 'black'},
//     {mast: 'khresta', value: 8, color: 'black'},
//     {mast: 'khresta', value: 9, color: 'black'},
//     {mast: 'khresta', value: 10, color: 'black'},
//     {mast: 'khresta', value: 'J', color: 'black'},
//     {mast: 'khresta', value: 'Q', color: 'black'},
//     {mast: 'khresta', value: 'K', color: 'black'},
//     {mast: 'khresta', value: 'A', color: 'black'},
//     {mast: 'khresta', value: 'Joker', color: 'black'},
//     {mast: 'pika', value: 6, color: 'red'},
//     {mast: 'pika', value: 7, color: 'red'},
//     {mast: 'pika', value: 8, color: 'red'},
//     {mast: 'pika', value: 9, color: 'red'},
//     {mast: 'pika', value: 10, color: 'red'},
//     {mast: 'pika', value: 'J', color: 'red'},
//     {mast: 'pika', value: 'Q', color: 'red'},
//     {mast: 'pika', value: 'K', color: 'red'},
//     {mast: 'pika', value: 'A', color: 'red'},
//     {mast: 'pika', value: 'Joker', color: 'red'},
//     {mast: 'bubna', value: 6, color: 'black'},
//     {mast: 'bubna', value: 7, color: 'black'},
//     {mast: 'bubna', value: 8, color: 'black'},
//     {mast: 'bubna', value: 9, color: 'black'},
//     {mast: 'bubna', value: 10, color: 'black'},
//     {mast: 'bubna', value: 'J', color: 'black'},
//     {mast: 'bubna', value: 'Q', color: 'black'},
//     {mast: 'bubna', value: 'K', color: 'black'},
//     {mast: 'bubna', value: 'A', color: 'black'},
//     {mast: 'bubna', value: 'Joker', color: 'black'}
// ];
// // - знайти піковий туз
//
// console.log(cardSuit.find(value => value.mast === 'pika' && value.value === "A"));
//
// // - всі шістки
//
// console.log(cardSuit.filter(value => value.value === 6));
//
// // - всі червоні карти
//
// console.log(cardSuit.filter(value => value.color === "red"));
//
// // - всі буби
//
// console.log(cardSuit.filter(value => value.mast === "bubna" ));
//
// // - всі трефи від 9 та більше
//
// console.log(cardSuit.filter(value => (value.mast === "khresta" ) && (value.value !== 6) && (value.value !== 7) && (value.value !== 8) && (value.value !== 9) ));
// console.log(cardSuit.filter(value => (value.mast === "khresta" && value.value > 9 + "")));
//
// //Додатково по reduce
// //Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
//
// let reduceCard = cardSuit.reduce((accumulator, card) => {
//
//     if (card.mast === "cherva") {
//         accumulator.cherva.push(card)
//     } else if (card.mast === "khresta") {
//         accumulator.khresta.push(card);
//
//     } else if (card.mast === "pika") {
//         accumulator.pika.push(card)
//     } else {
//         accumulator.bubna.push(card)
//     }
//     return accumulator;
//
// }, {cherva: [], khresta: [], pika: [], bubna: []});
//
// console.log(reduceCard);