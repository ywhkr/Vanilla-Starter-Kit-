// quiz #1
/*

  < Function basic 1 >

	💬 를 적절한 값으로 고쳐주세요!

*/

function sayHello(name) {
  return `Hello, ${name}`;
}

const result = sayHello('Jett');

if (result === 'Hello, Jett') {
  alert('🎉');
}

//quiz #2
/*

  < Function basic 2 >

	💬 를 적절한 값으로 고쳐주세요!

*/

function greetingMaker(greet, name) {
  return `${greet}, ${name}`;
}

const hello = greetingMaker('Hello', 'Jett');
const goodBye = greetingMaker('Goodbye', 'Justin');

const result = hello === 'Hello, Jett' && goodBye === 'Goodbye, Justin';

if (result) {
  alert('🎉');
}

//quiz #3
/*

  < Function basic 3 >

	💬 를 적절한 값으로 고쳐주세요!

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
  alert('🎉');
}

//quiz #4
/*

  < Making Hamburger with Functions >

  햄버거를 만들어 먹으려고 합니다. 현재는 토마토가 빠져있네요 🍅

  완성된 햄버거와 동일하도록 💬 를 적절한 내용으로 고쳐주세요!

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
  alert('🎉');
}

//quiz #5
/*

  < Simple subtraction function >
  
  두 가지 인자를 받아 큰 수에서 작은 수를 빼주는 함수를 작성해주려고 합니다. 

  아래 조건이 통과할 수 있도록 💬 를 적절한 내용으로 고쳐주세요!

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
  alert('🎉');
}
