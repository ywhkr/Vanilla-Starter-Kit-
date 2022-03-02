// quiz #1
const seven = 7;
const trueOrFalse = !!'';

const result = seven && trueOrFalse;

if (result === false) {
  alert('🎉');
}

//quiz #2
const empty = null;
const trueOrFalse = !0;
const str = 'Vanillacoding';

const result = empty || trueOrFalse || str;

if (result === true) {
  alert('🎉');
}

//quiz #3
const trueOrFalse = !null;
const zero = 0;
const str = 'Vanillacoding';

const result = trueOrFalse && zero && str;

if (result === 0) {
  alert('🎉');
}

//quiz #4

/*

  Ken은 토론회에 참석하였습니다.

  두 가지 의견의 토론 결과는 logical operator에 따라 결정됩니다.

  토론의 최종 결과가 truthy 값이 되도록 💬 를 적절한 값으로 고쳐주세요!

*/

const Ryan = false;
const Blake = true;
const Scott = false;
const Ken = true;

const result = Ryan || Blake || (Scott && Ken);

if (result) {
  alert('🎉');
}
