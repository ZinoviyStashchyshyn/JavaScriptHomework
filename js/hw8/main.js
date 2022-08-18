// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function CreateUser(id, name, surname, email, phone) {
//
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
//
// const user = [];
//
// user.push(new CreateUser(1, "Svyat", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(2, "Oleg", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(3, "Vasya", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(4, "Petya", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(5, "Olya", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(6, "Kolya", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(7, "Roma", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(8, "Romana", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(9, "Taras", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
// user.push(new CreateUser(10, "Volodymyr", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567));
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// const filteredUser = user.filter(value => value.id % 2 === 0)
// console.log(filteredUser)
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// const sortedUser = user.sort((a, b) => b.id - a.id);
// console.log(sortedUser);
//
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, ...order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order || [];
//
//     }
//
// }
//
// const client = [];
//
// client.push(new Client(1, "Svyat", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "iiihihih", "ihihihihi"));
// client.push(new Client(2, "Oleg", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "hiiihhihihi"));
// client.push(new Client(3, "Vasya", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "ihihihhi", "ihihiihi", "ojojojoj"));
// client.push(new Client(4, "Petya", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "iihihihihi", "iihihiohi", "popojpojpoj", "liiihiohioh"));
// client.push(new Client(5, "Olya", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "iiicinincnn"));
// client.push(new Client(6, "Kolya", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "ouuhuhihihhi", "oioiooih"));
// client.push(new Client(7, "Roma", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "iiihihih"));
// client.push(new Client(8, "Romana", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "lihihrih", "ojojoj", ";ooojo", "iiiioio", "ilnikniviniivig", "lkklnining", "plpkpkpk"));
// client.push(new Client(9, "Taras", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "kkjg"));
// client.push(new Client(10, "Volodymyr", "uuiiuuiiug", "uuhu@lhioiohhioi", +3806745373567, "pktojtjogjootgotjogotj"));
// console.log(client)
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// const sortClientOrder = client.sort((a, b) => a.order.length - b.order.length);
// console.log(sortClientOrder)
//
//
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// // function CreatCar(model, producer, year, maxSpeed, volumeEngine) {
// //     this.model = model;
// //     this.producer = producer;
// //     this.year = year;
// //     this.maxSpeed = maxSpeed;
// //     this.volumeEngine = volumeEngine;
// //
// //     this.drive = function () {
// //         console.log(`Ми їдемо з швидкістю ${this.maxSpeed} км/год`)
// //
// //     }
// //     this.info = function () {
// //         console.log(this)
// //
// //     }
// //     this.increaseMaxSpeed = function (newSpeed) {
// //         this.maxSpeed += +newSpeed
// //
// //     }
// //     this.changeYear = function (newValue) {
// //         this.year = newValue
// //     }
// //     this.addDriver = function (driver) {                  // такий варіан прийме любий обєкт з любою кількістю полів, ще можливо прописати імя, вік, тобто обмежену кількість полів
// //         this.driver = driver
// //
// //     }
// //
// // }
// //
// // const laguna = new CreatCar("laguna", "renault", 2014, 210, 1.5);
// // laguna.drive();
// // laguna.increaseMaxSpeed(210)
// // laguna.changeYear(2015)
// // laguna.addDriver({name:"Vasya", age:22})             // такий варіан прийме любий обєкт з любою кількістю полів, ще можливо прописати імя, вік, тобто обмежену кількість полів
// // laguna.info()                                       // ставлю цю функцію в кінці, щоб бачити всі зміни
//
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class CreatCar {
//
//     constructor(model, producer, year, maxSpeed, volumeEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volumeEngine = volumeEngine;
//     }
//
//
//     drive() {
//         console.log(`Ми їдемо з швидкістю ${this.maxSpeed} км/год`)
//
//     }
//
//     info() {
//         console.log(this)
//
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += +newSpeed
//
//     }
//
//     changeYear(newValue) {
//         this.year = newValue
//     }
//
//     addDriver(driver) {                                       // такий варіан прийме любий обєкт з любою кількістю полів, ще можливо прописати імя, вік, тобто обмежену кількість полів
//         this.driver = driver
//
//     }
//
// }
//
// const laguna = new CreatCar("laguna", "renault", 2014, 210, 1.5);
// laguna.drive();
// laguna.increaseMaxSpeed(210)
// laguna.changeYear(2015)
// laguna.addDriver({name: "Vasya", age: 22})             // такий варіан прийме любий обєкт з любою кількістю полів, ще можливо прописати імя, вік, тобто обмежену кількість полів
// laguna.info()
//
//
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class ConstructorCingarella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//
// }
//
// const cingarella = [];
//
// cingarella.push(new ConstructorCingarella("Olya", 20, 35));
// cingarella.push(new ConstructorCingarella("Katya", 21, 36));
// cingarella.push(new ConstructorCingarella("Vira", 22, 37));
// cingarella.push(new ConstructorCingarella("Sasha", 23, 38));
// cingarella.push(new ConstructorCingarella("Ulya", 24, 39));
// cingarella.push(new ConstructorCingarella("Solomiya", 25, 40));
// cingarella.push(new ConstructorCingarella("Luba", 26, 41));
// cingarella.push(new ConstructorCingarella("Sveta", 27, 42));
// cingarella.push(new ConstructorCingarella("Valya", 28, 43));
// cingarella.push(new ConstructorCingarella("Dorota", 29, 44));
//
// class Prince {
//
//     constructor(name, age, shoesSize) {
//         this.name = name;
//         this.age = age;
//         this.shoesSize = shoesSize;
//     }
//
//     findMyCindarela(cingarella) {                                  // зробив зразу метод, який шукає попелюшку, хоча намахався на рівному місці хв 30, this не спрацьовувало.
//         for (const itemCindarela of cingarella) {
//           if (itemCindarela.footSize === this.shoesSize){
//               console.log(`My cingarela is ${itemCindarela.name}`)
//           }
//
//         }
//     }
//
//     // findMyCindarela(cingarella) {                                  //  варіант з find
//     //
//     //     const findCingarela = cingarella.find((value, index) => value.footSize === this.shoesSize)
//     //     console.log(findCingarela)
//     //
//     // }
//
//
// }
//
// let svyat = new Prince("Svyatoslav", 30, 37);
// svyat.findMyCindarela(cingarella)
//
//
//
//
