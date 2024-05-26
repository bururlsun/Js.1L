// object
// {}

// let obj = {
//     id: 1,
//     name: "Burulsun",
//     age: 19,
//     job: "Developer",
//     addres: {
//         street: "Dolon",
//         homeNum: 1,
//         city: "Bishkek",
//     },
//     "motion web": "It academy",
// };

// obj.name = "Baku";
// obj.hobby = "sport";
// console.log(obj);
// delete obj.job;

/// МЕТОД object{}

// console.log(Object.freeze(obj));-заморозка
// console.log(Object.keys(obj));-только ключтарын чыгарып берет
// console.log(Object.values(obj));-значенияларынгана чыгарып берет
// console.log(Object.entries(obj));-ключту дагы значениясын дагы отделный массивге салып берип коет

///
// console.log(obj.name.toUpperCase().slice(0, 2));
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.addres.city);

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// console.log(Object.keys(obj).length);

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };
// console.log(obj.a);
// console.log(obj["b"]);

// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.

// let obj = {
//     Ширин: "1000",
//     Айжан: "500",
//     Атай: "200",
// };

// console.log(obj.Ширин, obj.Атай);

// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// let obj = { Ширин: "1000", Айжан: "500", Атай: "200" };
// obj.Атай = "500";
// console.log(obj);

// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.

// let obj = {
//     Ширин: "1000",
//     Айжан: "500",
//     Атай: "200",
// };
// obj.Медет = "1500";
// console.log(obj);

// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.
// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(obj.Атай.salary);

// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// let obj = {
//     1: "ponedelnik",
//     2: "vtornik",
//     3: "sreda",
//     4: "chetverg",
//     5: "pytnisa",
//     6: "subbota",
//     7: "voskreseniya",
// };
// console.log(obj[7]);

// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// let obj = {
//     ponedelnik: "1",
//     vtornik: "2",
//     sreda: "3",
//     chetverg: "4",
//     pytnisa: "5",
//     subbota: "6",
//     voskreseniya: "7",
// };
// console.log(obj);

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.

// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.keys(obj));

//     10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.
// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.values(obj));

// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.
// let obj = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(Object.entries(obj));

// 12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// function obj(a) {
//     if (a.name.legth % 2 === 0) {
//         return "1";
//     } else {
//         return "0";
//     }
// }
// console.log(obj({ name: "Igor" }));

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.

// function obj(arr) {
//     return arr.map((el) => {
//         return el.id;
//     });
// }

// console.log(obj([{ id: 3 }, { id: 5 }, { id: 6 }, { id: 7 }]));

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.

// function obj(a, b) {
//     a.age = 25;
//     a.name = "Azat";
//     return a;
// }
// console.log(obj({ name: "Igor" }));

////////////

// let arrUser = [
//     {
//         id: 1,
//         name: "Azat",
//         age: 23,
//         job: "Developer",
//     },
//     {
//         id: 2,
//         name: "Amantur",
//         age: 19,
//         job: "Developer",
//     },
//     {
//         id: 3,
//         name: "Nurgazy",
//         age: 22,
//         job: "Developer",
//     },
//     {
//         id: 4,
//         name: "Uson",
//         age: 17,
//         job: "Developer",
//     },
//     {
//         id: 5,
//         name: "Nurdan",
//         age: 20,
//         job: "Developer",
//     },
//     {
//         id: 6,
//         name: "Aziret",
//         age: 16,
//         job: "Developer",
//     },
// ];

// console.log(
//     arrUser.map((el) => {
//         if (el.id === 4) {
//             el.name = "Asan";
//             return el;
//         } else {
//             return el;
//         }
//     })
// );

// console.log(
//     arrUser.map((el, idx) => {
//         if (idx % 2 === 0) {
//             el.hobby = "sport";
//             return el;
//         } else {
//             return el;
//         }
//     })
// );

// console.log(
//     arrUser.filter((el) => {
//         return el.age > 20;
//     })
// );
