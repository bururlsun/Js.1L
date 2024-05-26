// if else
// if (){

// } else{

// }

// if если - эгерде
// else иначе - же болбосо

// =
// ==
// === -строгий
// !==
// !
// >
// >=
// <
// <=

// -5 -4 -3 -2 -1 < 0 > 1 2 3 4 5

// console.log(typeof "e");

// console.log(5 > 3);

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 6;
// if (a === 10) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// let a = 50;
// b = 100;
// if (a > b) {
//     console.log("a больше b");
// } else {
//     console.log("a меньше b");
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// let a = -2;
// if (a > 0) {
//     console.log("positive");
// } else if (a === 0){
//     console.log("равно");
// } else{
//     console.log("negative");
// }

// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".
// let number = 45;
// if (number % 2 === 0) {
//     console.log("Четное число");
// } else {
//     console.log("Нечетное число");
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
// let a = 10;
// b = 2;
// if (a % b === 0) {
//    console.log("Четное число");
// } else {
//    console.log("Нечетное число");
// }

// 6.   Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
// let s = "true";
// if (typeof s === "number") {
//     console.log(typeof s);
// } else if (typeof s === "string") {
//     console.log(typeof s);
// } else if (typeof s === "boolean") {
//     console.log(typeof s);
// } else {
//     console.log(404);
// }

/////////////////////////////////////////

// логическая сумма || - или - же
// логическая умножения && -и  жана

// console.log(true || true || true || true || true);
// console.log(true && true && true && true && true && true);
// console.log(true || true || false);
// console.log(false || false || false || true || true || true);
// console.log(false && true);

// let num = 50;
// if (num >= 20 && num <= 60) {
//     console.log("Hello");
// } else {
//     console.log(404);
// }

// let age = 0
// if (age >= 0 && age <= 3){
//     console.log("Malysh");
// } else if (age >= 4 && age <= 6){
//     console.log("Sadik");
// }else if(ag >= 7 && age <= 18){
//     console.log("Mektep");
// }else if(age >= 19 && age <= 25){
//     console.log("Student");
// }else if ( age >= 26 && age >= 31){
//     console.log("Semya");
// }else if (age >= 32 && age >= 45){
//     console.log("Jeke ishker");
// }else if (age >= 46 && age >= 60){
//     console.log("Chon kishi");
// }else if (age >= 61){
//     console.log("Pensionnyi");
// }else{
//     console.log("Sen poka joksun");
// }

// let akcha = true
// let bilim = true
// let mashina = true

// if (akcha === true && bilim === true && mashina === true){
//     console.log("мен за границу кетем!");
// }else if (akcha === false && bilim === true && mashina === true){
//     console.log("Мен за границу 2 айдан кийин кетем");
// }else if (akcha === true || bilim === true || mashina === true){
//     console.log("Мен за границу возможно кетем!");
// }else{
//     console.log("Russia!");
// }

// let akcha = true;
// let nout = true;
// let ubakyt = true;

// if (akcha === true && nout === true && ubakyt === true) {
//     console.log("Men IT okuim");
// } else if (akcha === false && nout === true && ubakyt === true) {
//     console.log("it 2 aidan kiin okuim");
// } else if (akcha === true || nout === true || ubakyt === true) {
//     console.log("vozmojno okuim");
// } else {
//     console.log("okubaim");
// }

// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти,
// или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно',
// в противном случае выведите 'Неверно'

// let a = 5;
// b = 14;
// if ((a > 4 && a < 10) || (b >= 7 && b <= 17)) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 11. Вам дана переменная month. В ней лежит какое-то число из интервала от
// 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето,
// весна, осень).

// let month = 3;
// if (month > 0 && month <= 2) {
//     console.log("winter");
// } else if (month > 2 && month <= 5) {
//     console.log("spring");
// } else if (month > 5 && month <= 8) {
//     console.log("summer");
// } else if (month > 8 && month <= 11) {
//     console.log("autumn");
// } else if (month > 11 && month <= 12) {
//     console.log("winter");
// } else {
//     console.log("Myndai san jok");
// }

// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1
// до 31. Определите в какую декаду месяца попадает это число (в первую, вторую
// или третью).

// let day = 32;
// if (day >= 1 && day <= 10) {
//     console.log(" первую");
// } else if (day >= 11 && day <= 20) {
//     console.log("вторую");
// } else if (day >= 21 && day <= 31) {
//     console.log("третью");
// } else {
//     console.log("jok");
// }

// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой
// переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в
// противном случае выведите ‘нет’.

// let a = "12345";
// if(a[0] === "1" || a[0] === "2" || a[0] === 3){
//     console.log("да");
// }else{
//     console.log("нет");
// }
