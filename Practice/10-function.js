// quiz #1
/*

  < Function basic 1 >

	๐ฌ ๋ฅผ ์ ์ ํ ๊ฐ์ผ๋ก ๊ณ ์ณ์ฃผ์ธ์!

*/

function sayHello(name) {
  return `Hello, ${name}`;
}

const result = sayHello('Jett');

if (result === 'Hello, Jett') {
  alert('๐');
}

//quiz #2
/*

  < Function basic 2 >

	๐ฌ ๋ฅผ ์ ์ ํ ๊ฐ์ผ๋ก ๊ณ ์ณ์ฃผ์ธ์!

*/

function greetingMaker(greet, name) {
  return `${greet}, ${name}`;
}

const hello = greetingMaker('Hello', 'Jett');
const goodBye = greetingMaker('Goodbye', 'Justin');

const result = hello === 'Hello, Jett' && goodBye === 'Goodbye, Justin';

if (result) {
  alert('๐');
}

//quiz #3
/*

  < Function basic 3 >

	๐ฌ ๋ฅผ ์ ์ ํ ๊ฐ์ผ๋ก ๊ณ ์ณ์ฃผ์ธ์!

*/

function findStaff(name) {
  if (name === 'Jett') {
    return 'Staff';
  }

  if (name === 'Leo') {
    return 'Staff';
  }

  return 'Spy';
}

const isFound1 = findStaff('Leo');
const isFound2 = findStaff('Jett');

const result = isFound1 === isFound2;

if (result === true) {
  alert('๐');
}

//quiz #4
/*

  < Making Hamburger with Functions >

  ํ๋ฒ๊ฑฐ๋ฅผ ๋ง๋ค์ด ๋จน์ผ๋ ค๊ณ  ํฉ๋๋ค. ํ์ฌ๋ ํ ๋งํ ๊ฐ ๋น ์ ธ์๋ค์ ๐

  ์์ฑ๋ ํ๋ฒ๊ฑฐ์ ๋์ผํ๋๋ก ๐ฌ ๋ฅผ ์ ์ ํ ๋ด์ฉ์ผ๋ก ๊ณ ์ณ์ฃผ์ธ์!

*/

let myBurger = 'Hamburger';

const addCheese = function (burger) {
  const cheese = ' with Cheese';

  return burger + cheese;
};

const addPatty = function (burger) {
  const patty = ' with Patty';

  return burger + patty;
};

const addTomato = function (burger) {
  const tomato = ' and Tomato';

  return burger + tomato;
};

myBurger = addCheese(myBurger);
myBurger = addPatty(myBurger);
myBurger = addTomato(myBurger);

if (myBurger === 'Hamburger with Cheese with Patty and Tomato') {
  alert('๐');
}

//quiz #5
/*

  < Simple subtraction function >
  
  ๋ ๊ฐ์ง ์ธ์๋ฅผ ๋ฐ์ ํฐ ์์์ ์์ ์๋ฅผ ๋นผ์ฃผ๋ ํจ์๋ฅผ ์์ฑํด์ฃผ๋ ค๊ณ  ํฉ๋๋ค. 

  ์๋ ์กฐ๊ฑด์ด ํต๊ณผํ  ์ ์๋๋ก ๐ฌ ๋ฅผ ์ ์ ํ ๋ด์ฉ์ผ๋ก ๊ณ ์ณ์ฃผ์ธ์!

*/

const subtraction = function (a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
};

const sum1 = subtraction(10, 3);
const sum2 = subtraction(7, 12);

const result = sum1 + sum2;

if (result === 12) {
  alert('๐');
}
