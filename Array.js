'use strict'

// 1) 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.  >> [200, 100, 10000, 300]
// splice(index, delete, add) / 기존 배열 변경
let arr = [200, 100, 300]

arr.splice(2, 0, 1000)
console.log(arr)

let fruits = ['apple', 'banana', 'orange', 'grape'];

fruits.splice(2, 1, 'mango');
console.log(fruits)
// ["apple", "banana", "mango", "grape"]

fruits.splice(1, 0, 'kiwi');
console.log(fruits)
// ["apple", "kiwi", "banana", "mango", "grape"]


// 2) slice(startIndex, deleteIndex) / 새로운 배열 생성
// deleteIndex는 바로 앞 index까지를 뜻한다.
let color = ['red', 'blue', 'kaki', 'green'];

color.slice(2, 3);
console.log(color) // ['red', 'blue', 'kaki', 'green']

let oneColor = color.slice(2, 3);
console.log(oneColor)  // ['kaki']

let twoColor = color.slice(1, 3);
console.log(twoColor)  // ['blue', 'kaki']

let sliceColor = color.slice(1);
console.log(sliceColor) // ["blue", "kaki", "green"]