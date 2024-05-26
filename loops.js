// loops

// начало; условие; шаг;
// increment +1;++
// decrement -1;--

// 1. Выведите столбец чисел от 1 до 50.

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = "X";
//     arr.push("X");
// }
// console.log(arr);

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль
// let arr = [5, 3, 1, 2, 7];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr);
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2];
// let num = 1;
// for (let i = 0; i < arr.length; i++) {
//     num = num * arr[i];
// }
// console.log(num);

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     } else {
//         console.log();
//     }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let num = 0;
// for (i = 0; i < 100; i++) {
//     num = num + i;
// }
// console.log(num);

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// let num = [2, 4, 5, 6, 8];
// let result = 0;
// for (i = 0; i < num.length; i++) {
//     result = result + num[i];
// }
// console.log(result);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let num = [3, 4, 6, 12, 3, 5];
// for (i = 0; i < num.length; i++) {
//     if (num[i] > 3 && num[i] < 10) {
//         console.log(num[i]);
//     }
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [12, -12, 23, 43, -234, 232];
// let num = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         num = num + arr[i];
//     }
// }
// console.log(num);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let num = [5, 1, 3, 7, 4, 6, 15, 3, 20];
// for (i = 0; i < num.length; i++) {
//     if (num[i] === 4) {
//         console.log("Есть!");
//     } else {
//         console.log(num[i]);
//     }
// }
//
// 11. Вам дан массив числами [10, 20,55, 30, 40, 135, 2000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 55, 30, 40, 135, 2000];
// for (let i = 0; i < arr.length; i++) {
//     let changeStr = String(arr[i]);
//     if (changeStr[0] === "1" || changeStr[0] === "2" || changeStr[0] === "5") {
//         console.log(arr[i]);
//     }
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = "";
// for (i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//         str = str + "-" + arr[i] + "-";
//     } else {
//         str = str + "-" + arr[i];
//     }
// }
// console.log(str);

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let num = 0;
// for (let n = 1000; n > 50; n /= 2) {
//     ++num;
//     console.log(n, num);
// }

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// let arr = [1, 2, 3, 7, 6, 9];
// let result = 0;
// for (i = 0; i < arr.length; i++) {
//     result = result + arr[i] / arr.length;
// }
// console.log(arr);

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива
// let num = [1, 2, 3, 4, 5];
// let arr = 0;
// for (let i = 0; i < num.length; i++) {
//     arr = arr + num[i] ** 2;
// }
// console.log(arr);

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только
// те элементы массива, которые больше нуля и меньше 10-ти.
// let num = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// for (i = 0; i < num.length; i++) {
//     if (num[i] > 0 && num[i] < 10) {
//         console.log(num[i]);
//     }
// }

// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// let num = [];
// for (i = 0; i < 10; i++) {
//     num.push(Math.floor(Math.random() * 10) + 1);
// }
// console.log(num);

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.

// let arr = [25, 3, 50, 6, 10, 100];
// let num = 0;
// for (let i = 0; i < arr.length; i++) {
//     num = num + arr[i];
// }
// console.log(num);

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
// 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.
// let num = [
//     2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
// ];
// for (i = 0; i < num.length; i++) {
//     if (num[i] % 2 !== 0 && num[i] > 10) {
//         console.log(num[i]);
//     }
// }

// 2. Вывод чисел в диапазоне от 1 до 100 с шагом 2:
// for (let i = 0; i < 100; i = i +2) {
//     console.log(i);
// }

// 3. Вывод таблицы умножения для числа 5:
// let n = 5;
// for (let i = 0; i <= 10; i++) {
//     console.log(n + " x " + i + "=" + n * i);
// }

// 4. Вывод букв строки в обратном порядке: let str = "JavaScript";
// let str = "JavaScript";
// for (let i = str.length; i >= 0; i--) {
//     console.log(str[i]);
// }

// let str = "JavaScript";
// reverse = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
// }
// console.log(reverse);

// 5. Подсчет количества пробелов в строке: let str = "Это строка с пробелами";
// let str = "Это строка с пробелами";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//         count++;
//     }
// }
// console.log(count);

// while
// do while

// let i = 0;
// while (i < 50) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     i++;
//     console.log(i);
// } while (i < 40);

// 1. Выведите столбец чисел от 1 до 50.
// let i = 0;
// do {
//     i++;
//     console.log(i);
// } while (i < 50);

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// let arr = [];
// let i = 0;
// while (i < 10) {
//     arr[i] = "X";
//     i++;
// }
// console.log(arr);

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// let num = [5, 3, 1, 2, 7];
// let i = 0;
// while (i < num.length) {
//     console.log(num[i]);
//     i++;
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2];
// let num = 1;
// let i = 0;
// while (i < arr.length) {
//     num = num * arr[i];
//     i++;
// }
// console.log(num);

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// let i = 0;
// while (i < 100) {
//     i++;
//     if (i % 2 === 0) console.log(i);
// }
// for (i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0 && num[i]) {
//         console.log(num[i]);
//     }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let i = 0;
// while (i < 100) {
//     i++;
//     if (i % 2 === 0) console.log(i);
// }

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let num = [2, 4, 5, 6, 8];
// let result = 0;
// let i = 0;
// while (i < num.length) {
//     result = result + num.length;
//     i++;
// }
// console.log(result);

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 9, 12, 3, 5];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [12, -12, 23, 43, -234, 232];
// let num = 0;
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] > 0) {
//         num = num + arr[i];
//     }
//     i++;
// }
// console.log(num);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let num = [5, 1, 3, 7, 4, 6, 15, 3, 20];
// let i = 0;
// while (i < num.length) {
//     if (num[i] === 4) {
//         console.log("Есть!");
//     } else {
//         console.log(num[i]);
//     }
//     i++;
// }

// let arr = [5, 1, 3, 7, 6, 15, 3, 20];
// let i = 0;
// do {
//     if (arr[i] === 5) {
//         console.log("Есть!");
//     }
//     i++;
// } while (i < arr.length);

// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 55, 40, 135, 2000];
// let i = 0;
// while (i < arr.length) {
//     let changeStr = String(arr[i]);
//     if (changeStr[0] === "1" || changeStr[0] === "2" || changeStr[0] === "5") {
//         console.log(arr[i]);
//     }
//     i++;
// }

// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = "";
// let i = 0;
// while (i < arr.length) {
//     if (i === arr.length - 1) {
//         str = str + "-" + arr[i] + "-";
//     } else {
//         str = str + "-" + arr[i];
//     }
//     i++;
// }
// console.log(str);

// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let n = 1000;
// let num = 0;
// while (n > 50) {
//     n /= 2;
//     ++num;
//     console.log(n);
// }

// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// let arr = [1, 2, 3, 7, 6, 9];
// let result = 0;
// let i = 0;
// while (i < arr.length) {
//     result = result + arr[i] / arr.length;
//     i++;
// }
// console.log(result);

// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5];
// let num = 0;
// let i = 0;
// while (i < arr.length) {
//     num = num + arr[i] ** 2;
//     i++;
// }
// console.log(num);

// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только
// те элементы массива, которые больше нуля и меньше 10-ти.
// let num = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// let i = 0;
// while (i < num.length) {
//     if (num[i] > 3 && num[i] < 10) {
//         console.log(num[i]);
//     }
//     i++;
// }

// 17. Создайте переменную с пустым массивом, заполните массив 10-ю
// случайными числами от 1 до 10 с
// помощью цикла.
// let arr = [];
// let i = 0;
// while (i < 10) {
//     arr.push(Math.floor(Math.random() * 10) + 1);
//     i++;
// }
// console.log(arr);

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// let arr = [25, 3, 50, 6, 10, 100];
// let num = 0;
// let i = 0;
// while (i < arr.length) {
//     num = num + arr[i];
//     i++;
// }
// console.log(num);

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
// 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.

// let arr = [
//     2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
// ];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 !== 0 && arr[i] > 10) {
//         console.log(arr[i]);
//     }
//     i++;
// }

// let arr = [
//     2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
// ];
// let i = 0;
// do {
//     if (arr[i] % 2 !== 0 && arr[i] > 10) {
//         console.log(arr[i]);
//     }
//     i++;
// } while (i < arr.length);

// 2. Вывод чисел в диапазоне от 1 до 100 с шагом 2:
// let i = 0;
// while (i < 100) {
//     console.log(i);
//     i++;
// }

// 3. Вывод таблицы умножения для числа 5:
// let n = 3;
// let i = 0;
// while (i <= 10) {
//     console.log(n + " X " + i + " = " + n * i);
//     i++;
// }

// 4. Вывод букв строки в обратном порядке: let str = "JavaScript";

// 5. Подсчет количества пробелов в строке: let str = "Это строка с пробелами";
// let str = "Это строка с пробелами";
// let count = 0;
// let i = 0;
// while (i < str.length) {
//     if (str[i] === " ") {
//         count++;
//     }
//     i++;
// }
// console.log(count);

//  каждый 2 элемент будет большим буквом
// let arr = ["Burulsun", "Askar", "Bill", "Umar", "Ulan", "Bob", "Asan"];
// for (let i = 1; i < arr.length; i += 2) {
//     arr[i] = arr[i].toUpperCase();
// }

// console.log(arr);

// Найдите самый длинный элемент массива и вывeдите в консоль
// let arr = ["pen", "pineapple", "apple", "pen"];
// let element = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > element.length) {
//         element = arr[i];
//     }
// }

// console.log(element);

// Создайте функцию которая принимает строку, удаляет все гласные буквы из строки,
// а согласные буквы в свою очередь переводит в заглавные и возвращает новую строку.
// Например: ввод - 'hello', функция должна возвратить 'HLL'

// let str = ["apple", "banana", "Cherry", "date"];
// console.log(
//     str.find((el) => {
//         return el.includes("a");
//     })
// );

// function processString(str) {
//     const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (vowels.indexOf(char) === -1) {
//             result += char.toUpperCase();
//         }
//     }

//     return result;
// }

// const inputString = "hello";
// const processedString = processString(inputString);
// console.log(processedString);

//////////////// 2-l  //////////////////////

// Дан массив с объектами
// let users = [
//     { name: "Jack", age: 35, work: "IT-backend developer" },
//     { name: "Helen", age: 35, work: "Nurse" },
//     { name: "Bob", age: 35, work: "Driver" },
//     { name: "Jessica", age: 35, work: "IT-frontend developer" },
//     { name: "Hel'ga", age: 35, work: "IT-HR" },
// ];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].work.includes("IT")) {
//         users[i].sale = "MacBook";
//         console.log(users[i]);
//     } else {
//         console.log(users[i]);
//     }
// }
// задача, создать функцию, которая будет рассылать сообщения пользователям, сообщая о акции в магазине компьютерной техники, отправлять сообщения нужно только тем людям, которые тем или иным образом относятся к IT-сфере

///

//TODO4  Дан массив let lengthName = [Patricia , William , Barbara , James , Chloe , Elizabeth ]; Преобразуйте каждый элемент в его длину и выведите в console. Используйте метод map().
// let lengthName = [
//     "Patricia",
//     "William",
//     "Barbara",
//     "James",
//     "Chloe",
//     "Elizabeth",
// ];
// console.log(
//     lengthName.map((el, idx, arr) => {
//         return el.length;
//     })
// );

//TODO5  Дан массив с объектами:
// let cars = [
//     { mark: "Wolksvagen", year: 2005, price: 8000, sale: 0 },
//     { mark: "Audi", year: 1996, price: 2500, sale: 0 },
//     { mark: "Mercedes", year: 2001, price: 5000, sale: 0 },
//     { mark: "BMW", year: 2015, price: 18000, sale: 0 },
//     { mark: "Porsche", year: 2020, price: 120000, sale: 0 },
// ];
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year > 2007) {
//         cars[i].sale = (cars[i].price / 100) * 20;
//         console.log(cars[i]);
//     } else {
//         console.log(cars[i]);
//     }
// }

// , задача: на все автомобили, которые старше 2007 года, поставить скидку 20%(для скидки использовать свойство 'sale')

//////

//  TODO 4. Напишите функцию, чтобы она нашла среднее значение трех переданных ей баллов и вернула буквенное значение, связанное с этой оценкой.
//  90 <= оценка <= 100 «А»
//  80 <= оценка < 90 «В»
//  70 <= оценка < 80 «С»
//  60 <= оценка < 70 «D»
//  0 <= оценка < 60  «F»
// function task4(ball) {
//     if (ball > 0 && ball <= 60) {
//         return "F";
//     } else if (ball > 60 && ball <= 70) {
//         return "D";
//     } else if (ball > 70 && ball <= 80) {
//         return "C";
//     } else if (ball > 70 && ball <= 90) {
//         return "B";
//     } else if (ball > 90 && ball <= 100) {
//         return "A";
//     } else {
//         return "0";
//     }
// }
// console.log(task4(100));

// Напишите функцию для преобразования имени в инициалы. Аргумент в видес строки  строго состоит из двух слов с одним пробелом между ними. На выходе должны быть две заглавные буквы с точкой, разделяющей их. Это должно выглядеть так:

// Sam Harris => S.H
// patrick feeney => P.F

// function task5(a, b) {
//     return a[0].toUpperCase() + "." + b[1].toUpperCase();
// }
// console.log(task5("burulsun.", " talantbekova"));

///////////////////////////////////////////////

// spread-полный  rest-калдыгын
// ...  все что изнутри

// Разделение строки по пробелам
// Разделите строку на массив слов, используя пробел в качестве разделителя.
// let sentence = "Это пример разделения строки на слова";
// console.log(sentence.split(" "));

// Разделение строки по запятой
// Разделите строку, содержащую перечень элементов, разделенных запятыми, на массив элементов.
// let items = "apple, banana, cherry, date";
// console.log(items.split(","));

// Извлечение чисел:
// Напишите функцию, которая принимает строку, содержащую числа, разделенные запятыми. Используя split(), извлеките числа и верните их в виде массива.
// function str(arr) {
//     return arr.split(",");
// }
// console.log(str("12,34,5,66,7,4"));

// Разбиение предложения:
// Создайте функцию, которая принимает предложение и разбивает его на отдельные фразы, используя split(). Затем выведите каждую фразу на новой строке.
// function task(str) {
//     return str.split(" ");
// }
// console.log(task("Это пример разделения строки на слова"));

// Объединение элементов массива:
// Напишите функцию, которая принимает массив строк и объединяет их в одну строку с помощью метода join(). Например, объедините массив ['Hello', 'world'] в строку 'Hello world'.
// function task(arr) {
//     return arr.join(" ");
// }
// console.log(task(["Hello", "world"]));

// Форматирование времени:
// Напишите функцию, которая принимает время в виде отдельных часов, минут и секунд, а затем использует join() для объединения этих данных в строку времени в формате “часы:минуты:секунды”.
// function task(arr) {
//     return arr.join(":");
// }
// console.log(task([12, 23, 43]));

// Создание строки номеров телефонов:
// Представьте, что у вас есть массив номеров телефонов. Напишите функцию, которая преобразует эти номера в строку, используя метод join(), чтобы объединить их, разделив запятыми.
// function task(arr) {
//     return arr.join(",");
// }
// console.log(task([0, 505, 234, 554]));

// Формирование названий:
// Создайте функцию, которая принимает массив строк и формирует новую строку, объединяя первую букву каждого элемента в верхнем регистре с остальной частью слова. Используйте join() для объединения измененных строк в одну.
// function str(arr) {
//     return arr
//         .map((el, idx) => {
//             return el[0].toUpperCase() + el.slice(1);
//         })
//         .join("");
// }
// console.log(str(["apple", "banana", "cherry"]));

// Объединение элементов массива с определенным разделителем
// Используйте метод reduce() для объединения элементов массива с определенным разделителем.

// let items = ["apple", "banana", "cherry"];
// console.log(
//     items.reduce((acc, el, idx, arr) => {
//         return acc + ", " + el;
//     })
// );

///

// Удалить свойство 'year' из объекта
// { brand: 'HP', model: 'Pavilion' }

// let laptop = {
//     brand: "HP",
//     model: "Pavilion",
//     year: 2020,
// };
// delete laptop.year;
// console.log(laptop);

// Отсортировать пользователей по возрасту по возрастанию
// [
//   { name: 'Мария', age: 20 },
//   { name: 'Анна', age: 25 },
//   { name: 'Иван', age: 30 }
// ]

// let users = [
//     { name: "Анна", age: 25 },
//     { name: "Иван", age: 30 },
//     { name: "Мария", age: 20 },
// ];
// console.log(users.sort((a, b) => a.age - b.age));

// Отсортировать массив строк по их длине
// ['киви', 'груша', 'яблоко', 'банан', 'апельсин']
// let words = ["яблоко", "апельсин", "груша", "банан", "киви"];
// console.log(words.sort((a, b) => a.length - b.length));

// Сортировка массива объектов по оценкам (grade) в порядке убывания

// [
//   { name: 'Иван', grade: 92 },
//   { name: 'Петр', grade: 90 },
//   { name: 'Анна', grade: 85 },
//   { name: 'Мария', grade: 78 }
// ]

// let students = [
//     { name: "Анна", grade: 85 },
//     { name: "Иван", grade: 92 },
//     { name: "Мария", grade: 78 },
//     { name: "Петр", grade: 90 },
// ];
// console.log(students.sort((a, b) => b.grade - a.grade));

// let color = "red";
// switch (color) {
//     case "red":
//         console.log("Tokto!");
//         break;
//     case " yellow":
//         console.log("Dayardan");
//         break;
//     case "green":
//         console.log("Otober");
//         break;
//     default:
//         console.log("404");
// }

// break
// continue

// 1.Что, если нам нужно добавить длину слов, разделенных пробелом, в конце того же слова и вернуть ее в виде массива?```
// "apple ban" --> ["apple 5", "ban 3"]

// let task1 = ["apple", "ban", "red"];
// console.log(
//     task1.map((el) => {
//         return el + el.length;
//     })
// );

// 2. Подсчет четных чисел:
// let numbers = [2, 7, 12, 5, 8, 10];
// Output: 4

// function number(numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             result++;
//         }
//     }
//     return result;
// }
// console.log(number([2, 7, 12, 5, 8, 10]));

// 3; Напишите функцию, которая принимает массив с числами и выводит количество отрицательных чисел в этом массиве
// Вывод: //4
// Пример: [7, -5, -29, 0, 62, 4, 5, -6, -27]

// function task3(num) {
//     let result = 0;
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] < 0) {
//             result++;
//         }
//     }
//     return result;
// }
// console.log(task3([7, -5, -29, 0, 62, 4, 5, -6, -27]));

// 4. Найдите самое длинное слово в строке
// const str = "I am a Megalodon, oceans feeling like a pond";

// const str = "I am a Megalodon, oceans feeling like a pond";
// const words = str.split(" ");
// let longestWord = "";
// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//     }
// }
// console.log(longestWord);
