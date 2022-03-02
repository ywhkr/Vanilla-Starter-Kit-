/*

  < Arrays basic 1 >

	💬 를 적절한 값으로 고쳐주세요!

*/

const fruitList = ['Apple', 'Lemon', 'Banana', 'Melon'];
const fruitLength = fruitList.length;

if (fruitLength === 4) {
  alert('🎉');
}

/*

  < Arrays basic 2 >

	💬 를 적절한 값으로 고쳐주세요!

*/

const foodList = ['Pizza', 'Hamburger', 'Chicken', 'Steak'];

const food1 = foodList[0];
const food2 = foodList[foodList.length - 1];

const result = food1 + food2;

if (result === 'PizzaSteak') {
  alert('🎉');
}

/*

  < Arrays basic 3 >

	💬 를 적절한 값으로 고쳐주세요!

*/

const fruitList = ['Apple'];

fruitList.push('Lemon');
fruitList.push('Mango');

const fruit1 = fruitList[1];
const fruit2 = fruitList.pop();

const result = fruit1 + fruit2;

if (result === 'LemonMango') {
  alert('🎉');
}

/*

  < Arrays basic 4 >

	💬 를 적절한 값으로 고쳐주세요!

*/

const animalList = ['Dog', 'Cat', 'Lion', 'Koala'];
let result = '';

for (let i = 0; i < animalList.length; i++) {
  result += animalList[i];
}

if (result === 'DogCatLionKoala') {
  alert('🎉');
}

/*

  음료 자판기(machine)에 4가지 종류의 음료 중에 "Sprite"가 빠져있네요

  창고(storage)에서 부족한 음료의 종류를 찾아 자판기의 마지막 요소로 채워질 수 있도록

  💬 를 적절한 값으로 고쳐주세요!

*/

const machine = ['Coke', 'Pepsi', 'Fanta'];
const storage = ['Pepsi', 'Coke', 'Sprite', 'Fanta'];

for (let i = 0; i < storage.length; i++) {
  if (machine.indexOf(storage[i]) === -1) {
    machine.push(storage[i]);
  }
}

const result = machine[machine.length - 1];

if (result === 'Sprite') {
  alert('🎉');
}
