// quiz #1
const seven = 7;
const trueOrFalse = !!'';

const result = seven && trueOrFalse;

if (result === false) {
  alert('๐');
}

//quiz #2
const empty = null;
const trueOrFalse = !0;
const str = 'Vanillacoding';

const result = empty || trueOrFalse || str;

if (result === true) {
  alert('๐');
}

//quiz #3
const trueOrFalse = !null;
const zero = 0;
const str = 'Vanillacoding';

const result = trueOrFalse && zero && str;

if (result === 0) {
  alert('๐');
}

//quiz #4

/*

  Ken์ ํ ๋ก ํ์ ์ฐธ์ํ์์ต๋๋ค.

  ๋ ๊ฐ์ง ์๊ฒฌ์ ํ ๋ก  ๊ฒฐ๊ณผ๋ logical operator์ ๋ฐ๋ผ ๊ฒฐ์ ๋ฉ๋๋ค.

  ํ ๋ก ์ ์ต์ข ๊ฒฐ๊ณผ๊ฐ truthy ๊ฐ์ด ๋๋๋ก ๐ฌ ๋ฅผ ์ ์ ํ ๊ฐ์ผ๋ก ๊ณ ์ณ์ฃผ์ธ์!

*/

const Ryan = false;
const Blake = true;
const Scott = false;
const Ken = true;

const result = Ryan || Blake || (Scott && Ken);

if (result) {
  alert('๐');
}
