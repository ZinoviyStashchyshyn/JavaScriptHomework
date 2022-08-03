// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i <=10; i++) {                                   /// оскільки є знання DOM, вирішив це зробити нормально. Не через document.write()
//
//     let div = document.createElement("div");
//     div.innerHTML="Create div"
//     document.body.appendChild(div);
//
// }
//
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {                                 /// оскільки є знання DOM, вирішив це зробити нормально. Не через document.write()
//
//     let div = document.createElement("div");
//     div.innerHTML = `Div number ${i+1}`;
//     document.body.appendChild(div)
//
// }
//
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;                                                    /// оскільки є знання DOM, вирішив це зробити нормально. Не через document.write()
// while (i <= 20) {
//     let h1 = document.createElement("h1");
//     h1.innerHTML="Create h1"
//     document.body.appendChild(h1);
//     i++;
// }
//
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i < 20) {
//     let h1 = document.createElement("h1");
//     h1.innerHTML=`h1 number ${i+1}`;
//     document.body.appendChild(h1);
//     i++;
// }
//
//
// //- Використовуючи данні з масиву, за допомоги document.write та циклу
// // побудувати структуру по шаблону
// // Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// let ul = document.createElement("ul");                     //// оскільки є знання DOM, вирішив це зробити нормально. Не через document.write()
//                                                                   ////варінт з використанням циклу for
// for (let i = 0; i < listOfItems.length; i++) {
//     let li = document.createElement("li");
//     li.innerHTML = `${listOfItems[i]}`
//     ul.appendChild(li);
//
// }
// document.body.appendChild(ul);
//
//
// // оскільки є знання DOM, вирішев це зробити нормально. Не через document.write()
// // варінт з використанням циклу for of
//
// for (let item of listOfItems ) {
//     let li = document.createElement("li");
//     li.innerHTML = `${item}`;
//     ul.appendChild(li);
//
// }
// document.body.appendChild(ul);
//
//
//
// document.write("</ul>");
//
// //ШАБЛОН:
// //    <ul>
// //        <li>ITEM OF ARRAY</li>
// //        <!--
// //            і тд інші об'єкти масиву
// //             ...
// //            ...
// //             ...
// //        -->
// //    </ul>
//
// //замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
// //-----------------------------------------------
//
//
// //Використовуючи данні з масиву, за допомоги document.write та циклу
// //побудувати структуру по шаблону  Зробити адекватну стилізацію
// //Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
//                                                                           // оскільки є знання DOM, вирішив це зробити нормально. Не через document.write()
//
// for (let product of products) {
//     let div = document.createElement("div");                              //  створюємо div
//     if (product.price || product.title) {                                // за певної умови створюємо h3
//         let h3 = document.createElement("h3");
//         h3.innerHTML = `${product.title}, price - ${product.price}`;     // заповнюємо потрібним значення h3
//         h3.classList="product-title";                                   //  додаємо клас до тегу h3
//         div.appendChild(h3);                                           // додаємо в div елемент h3
//     }
//     if (product.image){                                              // все те саме проробляємо для img, якщо воно присутнє
//         let img = document.createElement("img");
//         img.src = `${product.image}`;
//         img.classList ="product-image";
//         div.appendChild(img);
//     }
//     document.body.appendChild(div)                                 // вставляємо div body
//
// }
//
// //ШАБЛОН
// //<div class="product-card">
// //    <h3 class="product-title">TITLE. Price - PRICE</h3>
// //<img src="IMAGE" alt="" class="product-image">
// //</div>
// //Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// //--------------------
//
//
//                                                                    //є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//                                                             //за допомоги циклу вивести:
//                                                            // варінт з двома цклами for + for in, більш динамічний, але більш ресурсо затратний, оскільки запускаємо два цикл
//                                                           // Але!!! Він нам дає змогу працювати без знання назви ключа, а тільки з значення поля. Тобто в сліпу
// for (let user of users) {                                // - користувачів зі статусом false
//     for (let userKey in user) {
//         if (user[userKey] === false) {
//             console.log(user)
//         }
//     }
// }
//
// for (let user of users) {                                // - користувачів зі статусом true
//     for (let userKey in user) {
//         if (user[userKey] === true) {
//             console.log(user)
//         }
//     }
// }
//
//
// for(let user of users){                                 // - користувачів які старші за 30 років
//     for (let userKey in user){
//         if (user[userKey]>30){
//             console.log(user)
//
//         }
//     }
// }
//
//
//                                                            // варінт з циклами for
// for (let user of users) {                                 // - користувачів зі статусом false
//
//     if (user.status === false) {
//         console.log(user)
//     }
//
// }
//
// for (let user of users) {                                // - користувачів зі статусом true
//
//     if (user.status === true) {
//         console.log(user)
//     }
//
// }
//
//
// for (let user of users) {                                 // - користувачів які старші за 30 років
//
//     if (user.age > 30) {
//         console.log(user)
//     }
// }