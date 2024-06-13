// console.log(typeof []);

// const id = Symbol('9876');
// const newId = Symbol('9876');

// console.log(typeof id);
// console.log(typeof newId);

// const bigNum = 2345678923567832678n;

// console.log(typeof bigNum);

// const name = 'himanshu';
// let newName = name;

// newName = 'gullu';

// console.log(newName);
// console.log(name);

// let user = {
//   name: 'himu',
// };

// let newUser = user;
// newUser.name = 'golu';

// console.log(user.name);
// console.log(newUser.name);

// const myArr = [1, 2, 3, 4, 5, 5, 6];
// myArr.push(122);
// console.log('added value in last', myArr);

// myArr.pop();
// console.log('delte from last', myArr);

// myArr.unshift(99);
// console.log('added in front ', myArr);

// console.log(myArr.indexOf(6));

// // const newArray = myArr.join();

// console.log(typeof myArr);
// // console.log(typeof newArray);

// const newArray = myArr.slice(0, 4);
// console.log('slice used', newArray);

// const spliceArr = myArr.splice(1, 4);
// console.log('splice array', spliceArr);

// const marvel_heros = ['thor', 'hulk', 'ironman', 'spiderman'];
// const dc_heros = ['batman', 'superman', 'flash'];

// const mergeArr = [...marvel_heros, ...dc_heros];
// const newHero = marvel_heros.concat(dc_heros);

// console.log(mergeArr);

// console.log(newHero);

// const mix_array = [
//   12,
//   2,
//   4,
//   5,
//   [77, 5, 3, 2],
//   2,
//   3,
//   98,
//   [4, 5, 6, [33, 2, 11, 222]],
// ];

// const arrangArr = mix_array.flat(Infinity);
// console.log(arrangArr);

// const myObj = {
//   name: 'preeti',
//   login: true,
// };
// myObj.name = 'kabir'; //value overwirte

// // Object.freeze(myObj);
// // myObj.name = 'hello';

// // console.log(myObj.name);

// myObj.greeting = function () {
//   console.log('hello bro');
// };

// console.log(myObj.greeting());
// //object with diffrent key
// const firstObj = { 1: 'A', 2: 'B', 3: 'C' };
// const secondObj = { 4: 'd', 5: 'e', 6: 'f' };

// const diffKeyObj = { ...firstObj, ...secondObj };
// console.log(diffKeyObj);

// //object with same key

// const obj1 = { name: 'Raju', rollNo: 37, isAvailable: true };
// const obj2 = { name: 'pinki', rollNo: 13, isAvailable: false };

// const sameKeyObj = Object.assign({}, obj1, obj2);
// console.log(sameKeyObj);

// //combine with same key

// const combinedObj = {
//   name: [obj1.name, obj2.name],
//   rollNo: [obj1.rollNo, obj2.rollNo],
//   isAvailable: [obj1.isAvailable, obj2.isAvailable],
// };

// console.log(combinedObj);

function myName(name1, name2) {
  return name1 + name2;
}

console.log(myName('himu', 'golu'));

function userLog(name3 = 'hello user') {
  if (name3 === undefined) {
    console.log('user not found');
  } else {
    return `${name3} logged in`;
  }
}

console.log(userLog());

function totalVal(...num1) {
  return num1;
}

console.log(totalVal(12, 23, 4, 55, 666, 767, 76));

// const user = {
//   name: 'kittu',
//   rollNo: 88,
// };

// function handleObj(anyObj) {
//   console.log(`${anyObj.name}`);
// }

// console.log(handleObj(user));

// let a = 100;
// if (true) {
//   let a = 12;
//   const b = 77;
//   console.log('block scope value', a);
// }

// console.log('global scope value', a);

// function one() {
//   const userName = 'chintu';

//   function two() {
//     const website = ' facebook.com';
//     console.log(userName + website);
//   }
//   // console.log(website);
//   two();
// }
// one();

// console.log(addOne(33)); // here we access out of the scope its gives output bcoz it automatic make it hoisted
// function addOne(num) {
//   return num + 1;
// }

// const addTwo = function (num) {
//   // this is also method to define function
//   return num + 2;
// };

// console.log(addTwo(34));

// const user = {
//   username: 'himansh',
//   price: 5,
//   welcomeMsg: function () {
//     console.log(`Hey ${this.username} welcome to our website`); // here 'this' keyword is usefull in current context of the code like here it is refer to object keys
//     console.log(this); // So 'this' keyword here gives the whole context of current scope or inside function
//   },
//   // "this" keyword checks only that context of current scope of the code if it is not responsible for outside scope
// };

// // user.welcomeMsg(); // function inside object is executed here
// // user.username = 'tinku'; // now the value is overwrite
// // user.welcomeMsg(); // so now the new value is executed and the 'this' keyword gives the old value of that context
// console.log(this);

// function one() {
//   console.log('one');
//   two();
// }

// function two() {
//   console.log('two');
//   three();
// }

// function three() {
//   console.log('three');
// }

// one();
// two();
// three();

// const month = 3;

// switch (month) {
//   case 1:
//     console.log('its jan');
//     break;
//   case 2:
//     console.log('its feb');
//     break;
//   case 3:
//     console.log('its march');
//     break;

//   default:
//     console.log('its default state');
//     break;
// }

// //Now with string

// const newMonth = 'march';

// switch (newMonth) {
//   case 'jan':
//     console.log('hey its jan');
//     break;
//   case 'feb':
//     console.log('hey its feb');
//     break;
//   case 'march': // string should be strict checked while putting value in case key
//     console.log('hey its march');
//     break;

//   default:
//     console.log('no month found');
//     break;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (const val of arr) {
//   console.log(val);
// }

// const greetings = 'Hello himanshu'; // works for string

// for (const val of greetings) {
//   console.log(val);
// }

// const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNums = newNum.filter((item) => item > 6);

// console.log(myNums);

// const myNewNums = newNum.filter((item) => {
//   return item > 5;
// });

// console.log(myNewNums);

// const books = [
//   { title: 'one', genre: 'fiction', publish: 2000, edition: 2009 },
//   { title: 'two', genre: 'Science', publish: 2012, edition: 2013 },
//   { title: 'three', genre: 'fiction', publish: 2000, edition: 2012 },
//   { title: 'four', genre: 'non-fiction', publish: 2002, edition: 2009 },
//   { title: 'five', genre: 'Science', publish: 1800, edition: 2009 },
//   { title: 'six', genre: 'history', publish: 2011, edition: 2023 },
//   { title: 'seven', genre: 'non-fiction', publish: 1900, edition: 2014 },
//   { title: 'eight', genre: 'history', publish: 2012, edition: 2011 },
//   { title: 'nine', genre: 'non-fiction', publish: 2009, edition: 1998 },
// ];

// const myBooks = books.filter((item) => item.edition == 2009);
// console.log(myBooks);

// const newNames = ['isha', 'tinku', 'sneha', 'shreya', 'golu', 'naman', 'sonu'];

// newNames.forEach((item) => {
//   console.log(item.length < 5);
// });

// let myArray = ['saktiman', 'barbie', 'flash', 'spiderman'];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let index = 0;

// let intervalId = setInterval(() => {
//   if (index < numArray.length) {
//     console.log(numArray[index]);
//     index++;
//   } else {
//     clearInterval(intervalId);
//   }
// }, 2000);

// let newAr = [3, 4, 5, 6];
// let index = 0;

// const newInterval = setInterval(() => {
//   if (index < newAr.length) {
//     console.log(newAr[index]);
//     index++;
//   } else {
//     clearInterval(newInterval);
//   }
// }, 1000);

const myObj = {
  js: 'javascript',
  cpp: 'c++',
  py: 'python',
  rb: 'ruby',
};

for (const key in myObj) {
  console.log(key);
}

const newArray = [1, 2, 3, 4, 5, 6];

const myArray = newArray.map((val) => {
  if (val > 3) {
    console.log('arrasy are', val);
  }
  console.log(myArray);
});
