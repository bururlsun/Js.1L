// function:
// expression
// declaration

// function func() {
//     return "hello";
// }
// console.log(func());

// function task1(a, b) {
//     return 5 + b;
// }
// console.log(task1(5, 10));

// function task(a, b) {
//     if (a === b) {
//         return "Tuura";
//     } else {
//         return "tuura emes";
//     }
// }
// console.log(task(6, 6));

// 1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// function task1(str) {
//     return str.slice(0, 5).length;
// }
// console.log(task1("Nevis ITDB TECH"));

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО,

// function task2(str) {
//     return str.length, str.slice(12, 19);
// }
// console.log(task2("Максимально УЖАСНО"));

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально,
// только верхним регистром.
// function task3(str) {
//     return str.clice(0, 11).toUpperCase();
// }
// console.log(task3("максимально УЖАСНО"));

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно',
// используя метод slice.
// function task3(str) {
//     return str.slice(5);
// }
// console.log(task3("Максимально Ужасно"));

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод
// charAt.
// function task4(str) {
//     return str.charAt("12");
// }
// console.log(task4("Максимально Ужасно"));

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные
// строки, используя метод concat.
// function task8(str, str2) {
//     return str.concat(str2);
// }
// console.log(task8("Максимально", " Ужасно"));

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1
// раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// function task10(str) {
//     if (str.includes()) {
//         return " встречается более 1 раза";
//     } else {
//         return "встречается менее одного раза";
//     }
// }
// console.log(task10("Максимально Ужасно"));

// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// function task11(str) {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }
// console.log(task11("макСИМАЛЬН   О ужаСНО"));

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// function task12(str) {
//     return str.charAt(1);
// }
// console.log(task12("Максимально Ужасно"));

// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// function task13(str) {
//     return str.lastIndexOf("o");
// }
// console.log(task13("Максимально Ужасно"));

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// function task14(str) {
// return str.substr(4, 3);
// return str.substring(4, 7);
// return str.slice(4, 7);
// }
// console.log(task14("aaa bbb ccc"));

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// function task1(a) {
//     if (a === 10) {
//         return "Верно";
//     } else {
//         return "Неверно";
//     }
// }
// console.log(task1(10));

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// function work(a, b) {
//     if (a > b) {
//         return "a больше b";
//     } else {
//         return "a меньше b";
//     }
// }
// console.log(work(50, 100));

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// function work(a) {
//     if (a > 0) {
//         return "positive";
//     } else if (a === 0) {
//         return "равно";
//     } else {
//         return "negative";
//     }
// }
// console.log(work(-2));

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".
// function task4(num) {
//     if (num % 2 === 0) {
//         return "Четное число";
//     } else {
//         return "Нечетное число";
//     }
// }
// console.log(task4(45));

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// function work5(a, b) {
//     if (a % b === 0) {
//         return "Четное число";
//     } else {
//         return "Нечетное число";
//     }
// }
// console.log(work5(10, 2));

// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// function work6(s) {
//     if (typeof s === "number") {
//         return typeof s;
//     } else if (typeof s === "string") {
//         return typeof s;
//     } else if (typeof s === "boolean") {
//         return typeof s;
//     } else {
//         return 404;
//     }
// }
// console.log(work6("asd"));

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'

// function work1(a, b) {
//     if ((a > 4 && a < 10) || (b >= 7 && b <= 17)) {
//         return "Верно";
//     } else {
//         return "Неверно";
//     }
// }
// console.log(work1(5, 14));

//11. Вам дана переменная month. В ней лежит какое-то число из интервала от
//1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
//весна, осень).

// function month(month) {
// if (month > 0 && month <= 2) {
// return "зима";
// } else if (month > 2 && month <= 5) {
// return "весна";
// } else if (month > 5 && month <= 8) {
// return "лето";
// } else if (month > 8 && month <= 11) {
// return "осень";
// } else if (month > 11 && month <= 12) {
// return "зима";
// } else {
// return "Myndai san jok";
// }
// }
// console.log(month(3));

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).

// function day(day) {
//     if (day > 1 && day <= 10) {
//         return "первую";
//     } else if (day >= 11 && day <= 20) {
//         return "вторую";
//     } else if (day >= 21 && day <= 31) {
//         return "третью";
//     } else {
//         return "Myndai san jok";
//     }
// }
// console.log(day(11));

// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой
// переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в
// противном случае выведите ‘нет’.

// function a(b) {
//     if (b[0] === "1" || b[0] === "2" || b[0] === "3") {
//         return "Da";
//     } else {
//         return "Net";
//     }
// }
// console.log(a("1234"));
