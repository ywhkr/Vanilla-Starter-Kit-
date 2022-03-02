// quiz #1
const slogan = 'Progress Not Perfection';

for (let i = 0; i < slogan.length; i++) {
  console.log(slogan[i]);
}

alert('🎉');

//quiz #2
/*

  < Breaking out of the loop >

  바닐라코딩의 슬로건에서 문자 n을 찾아내려고 합니다.

  n을 발견하면 반복문을 멈춰주기 위해 💬 를 적절한 값으로 고쳐주세요!

*/

const slogan = 'Progress, not perfection';
let result = null;

for (let i = 0; i < slogan.length; i++) {
  result = slogan[i];

  if (slogan[i] === 'n') {
    break;
  }
}

if (result === 'n') {
  alert('🎉');
}

//quiz #3
/*

  < Skipping the for loop >

  이번에는 n, o, t 가 나오면 반복문 실행을 건너뛰어서

  결과에 추가되지 않도록 하려고 합니다.

  💬 를 적절한 값으로 고쳐주세요!

*/

const slogan = 'Progress, not perfection';
let result = '';

for (let i = 0; i < slogan.length; i++) {
  if (slogan[i] === 'n' || slogan[i] === 'o' || slogan[i] === 't') {
    continue;
  }

  result += slogan[i];
}

if (result === 'Prgress,  perfeci') {
  alert('🎉');
}
