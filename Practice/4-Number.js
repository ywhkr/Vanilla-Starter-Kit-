//quiz #1
const one = 1;
const five = 5;
const six = 6;
const ten = 10;

const sum = six - one + ten * five;

if (sum === 55) {
  alert('π');
}

//quiz #2
let myNumber = 10;

myNumber = myNumber + 10;

if (myNumber === 20) {
  alert('π');
}

//quiz #3
let myNumber = 10;

myNumber += 10;

if (myNumber === 20) {
  alert('π');
}

//quiz #4
let myNumber = 10;

myNumber += 10;
myNumber++;

if (myNumber === 21) {
  alert('π');
}

//quiz #5
const remainder = 5 % 2;

if (remainder === 1) {
  alert('π');
}

//quiz #6

/*

  2049λ, ν΅μ΅ν© μμ€μ μ€νμ΄κ° μ μν΄ ν­νμ΄ μ€μΉλμμ΅λλ€.

  ν­νμ ν΄μ²΄νκΈ° μν΄μλ μλ ₯λ μνΈκ° NaN κ°μ΄μ΄μΌλ§ ν©λλ€.

  π¬ λ₯Ό μ μ ν μ°μ°μ(+, -, *, /) μ€ νλλ‘ κ³ μ³μ£ΌμΈμ!

*/

const password = 0 / 0;
const result = isNaN(password);

if (result === true) {
  alert('π');
}
