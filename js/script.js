const time = document.querySelector(".time");
function hour() {
  let data = new Date();
  let hour = data.getHours().toString().padStart(2, "0");
  let minutes = data.getMinutes().toString().padStart(2, "0");
  let seconds = data.getSeconds().toString().padStart(2, "0");
  let milliySeconds = data.getMilliseconds();
  time.innerHTML = `${hour}:${minutes}:${seconds}:${milliySeconds}`;
}
hour();
setInterval(() => {
  hour();
}, 100);

const displayedDay = document.querySelector(".day");
function kun() {
  let data = new Date();
  let day = data.getDay();
  displayedDay.innerHTML = `${day}`;
}
kun();

const displayedWeek = document.querySelector(".week");
function hafta() {
  let data = new Date();
  let week = data.getDate();
  displayedWeek.innerHTML = `${week}`;
}
hafta();

const displayedMonths = document.querySelector(".months");
function oy() {
  let data = new Date();
  let months = data.getMonth() + 1;
  displayedMonths.innerHTML = `${months}`;
}
oy();

const displayedYear = document.querySelector(".year");
function yil() {
  let data = new Date();
  let year = data.getFullYear();
  displayedYear.innerHTML = `${year}`;
}
yil();

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// 1-------------
// function between(a, b) {
//     let result = '';
//     for (let i = a; i <= b; i++) {
//     result += i + ' ';
//     }
//     return result.trim().split(' ').map(Number);
// }
// 2----------------------
// function arrayPlusArray(arr1, arr2) {
//     const sum1 = arr1.reduce((acc, num) => acc + num, 0);
//     const sum2 = arr2.reduce((acc, num) => acc + num, 0);
//     return sum1 + sum2;
//   }
// 3------------------------
// const smash = (words) => words.join(" ");
// 4-----------------------------
// function sayHello(name) {
//   return `Hello, ${name}`;
// }
// console.log(sayHello("Mr. Spock"));
// 5---------------------------
// function greet(name, owner) {
//   return name === owner ? "Hello boss" : "Hello guest";
// }
