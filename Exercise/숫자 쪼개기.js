/*

  < 숫자 쪼개기 >

  숫자가 인자로 주어졌을 때, 다음과 같은 조건을 만족하는 함수를 작성해 주세요!

  📌 주어진 정수 각 자릿수의 "숫자"를 요소로 가지는 배열을 반환해야 합니다.
  📌 반환된 배열의 요소는 "문자열"이 아닌 "숫자"가 되어야 합니다.


  +--------------------------------------------------------------------+
  |                num                   |            리턴 값            |
  +--------------------------------------------------------------------+  
  |               2854                   |         [2, 8, 5, 4]        |
  +--------------------------------------------------------------------+                   
  |               96586                  |       [9, 6, 5, 8, 6]       |
  +--------------------------------------------------------------------+  
  |               136326                 |      [1, 3, 6, 3, 2, 6]     |
  +--------------------------------------------------------------------+

*/

const n1 = 370;
const n2 = 1357;
const n3 = 33333;

function splitNumber(num) {
  num = String(num);
  let result = [];
  for (let i = 0; i < num.length; i++) {
    result.push(Number(num[i]));
  }
  return result;
}

const result1 = splitNumber(n1); // [3, 7, 0]를 반환해야 합니다.
const result2 = splitNumber(n2); // [1, 3, 5, 7]를 반환해야 합니다.
const result3 = splitNumber(n3); // [3, 3, 3, 3, 3]를 반환해야 합니다.

if (
  checkResult(result1, [3, 7, 0]) &&
  checkResult(result2, [1, 3, 5, 7]) &&
  checkResult(result3, [3, 3, 3, 3, 3])
) {
  alert('🎉');
}

// 결과값 확인을 위한 함수이니 신경쓰지 않으셔도 됩니다.

function checkResult(result, answer) {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== result[i]) {
      return false;
    }
  }

  return true;
}
