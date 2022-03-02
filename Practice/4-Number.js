//quiz #1
const one = 1;
const five = 5;
const six = 6;
const ten = 10;

const sum = six - one + ten * five;

if (sum === 55) {
  alert('🎉');
}

//quiz #2
let myNumber = 10;

myNumber = myNumber + 10;

if (myNumber === 20) {
  alert('🎉');
}

//quiz #3
let myNumber = 10;

myNumber += 10;

if (myNumber === 20) {
  alert('🎉');
}

//quiz #4
let myNumber = 10;

myNumber += 10;
myNumber++;

if (myNumber === 21) {
  alert('🎉');
}

//quiz #5
const remainder = 5 % 2;

if (remainder === 1) {
  alert('🎉');
}

//quiz #6

/*

  2049년, 핵융합 시설에 스파이가 잠입해 폭탄이 설치되었습니다.

  폭탄을 해체하기 위해서는 입력된 암호가 NaN 값이어야만 합니다.

  💬 를 적절한 연산자(+, -, *, /) 중 하나로 고쳐주세요!

*/

const password = 0 / 0;
const result = isNaN(password);

if (result === true) {
  alert('🎉');
}
