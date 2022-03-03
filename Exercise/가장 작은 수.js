/*

  < 가장 작은 수 >

  숫자 요소로 이루어진 배열이 인자로 주어졌을 때, 다음과 같은 조건을 만족하는 함수를 작성해 주세요!

  📌 각 배열의 숫자 중 가장 작은 숫자를 반환해야 합니다.
  📌 배열 내의 숫자가 중복되는 경우는 없습니다.
  📌 빈 배열이 주어질 경우는 고려하지 않아도 됩니다.


  +--------------------------------------------------------------------+
  |                arr                   |            리턴 값            |
  +--------------------------------------------------------------------+  
  |           [5, 4, 3, 2, 1]            |              1              |
  +--------------------------------------------------------------------+                   
  |           [4, 5, 1, 2, 3]            |              1              |
  +--------------------------------------------------------------------+  
  |          [10, 7, 13, 2, 6]           |              2              |
  +--------------------------------------------------------------------+

*/

const arr1 = [10];
const arr2 = [4, 10, 1, 5];
const arr3 = [13, 5, 7, 3, 10, 9];

function findMinNumber(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min >= arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

const result1 = findMinNumber(arr1) === 10;
const result2 = findMinNumber(arr2) === 1;
const result3 = findMinNumber(arr3) === 3;

if (result1 && result2 && result3) {
  alert('🎉');
}
