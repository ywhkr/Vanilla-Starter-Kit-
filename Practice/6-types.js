// quiz #1
const empty = '';

const result = typeof empty;

if (result === 'string') {
  alert('🎉');
}

// quiz #2
let empty;

const result = typeof empty;

if (result === 'undefined') {
  alert('🎉');
}

// quiz #3
const num = 3;

const result = isNaN(num);

if (result === false) {
  alert('🎉');
}

// quiz #4
const numberABC = Number('ABC');

const result = isNaN(numberABC);

if (result === true) {
  alert('🎉');
}

// quiz #5
const ten1 = 10;
const ten2 = '10';

const result = typeof ten1 === typeof ten2;

if (result === false) {
  alert('🎉');
}
