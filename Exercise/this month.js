/*

  다음과 같은 조건을 만족하는 월간 달력을 만들어 주세요!
  
  📌 일요일 부터 토요일까지 차례대로 보여져야 합니다.
  📌 현재 날짜를 기준으로, 이번 달의 일수가 1일부터 표시되어야 합니다.
  📌 이번 달의 1일 부터 마지막 일수 까지 표시되어야 합니다.
  
  🚨 HTML, CSS와 JS 모두 스스로 작성해주세요.
  

  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
  |      |      |  1  |   2  |  3  |   4  |  5  |
  +---------------------------------------------+
  |   6  |  7   |  8  |   9  |  10  |  11 |  12 |
  +---------------------------------------------+
  |  13  |  14  |  15 |  16  |  17  |  18 |  19 |
  +---------------------------------------------+
  |  20  |  21  |  22 |  23  |  24  |  25 |  26 |
  +---------------------------------------------+
  |  27  |  28  |  29 |  30  |      |     |     |
  +---------------------------------------------+

*/
const body = document.querySelector('body');
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr = [];
const th = [];
const date = new Date();
const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const days = ['일', '월', '화', '수', '목', '금', '토'];


body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);
tr.push(document.createElement('tr'));
thead.appendChild(tr[0]);


for (let i = 0; i < 7; i++) {
    th.push(document.createElement('th'));
    tr[0].appendChild(th[i]);
    //css
    th[i].style.border = '1px solid black';
    th[i].style.width = '90px';
    th[i].style.height = '40px';
}


for (let i = 1; i < 6; i++) {
        tr.push(document.createElement('tr'));
        tbody.appendChild(tr[i]);
        for (let j = i * 7; j < 7 + i * 7; j++) {
            th.push(document.createElement('th'));
            tr[i].appendChild(th[j]);
            //css
            th[j].style.border = '1px solid black';
            th[j].style.width = '90px';
            th[j].style.height = '40px';
        }
    }


for (let i = 0; i < 7; i++) {
    th[i].textContent = days[i];
}


for (let i = 0; i < lastDay.getDate(); i++) {
    th[firstDay.getDay() + 7 + i].textContent = i + 1;
}

