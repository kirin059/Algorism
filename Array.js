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



// 3) 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
// reverse()   >>  array 메서드
function reverse(n) {
    let _arr = n.split(' ');
    console.log(_arr)  //  ["1", "2", "3", "4", "5"]

    console.log(_arr.reverse())  // ["5", "4", "3", "2", "1"]
}

reverse('1 2 3 4 5')


// 4) 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// sort()   >>  array 메서드
// join()   >>  배열을 문자열로 합친다
let result1 = '176 156 155 165 166 169'
let result2 = '155 156 165 166 169 176'

function height(n) {
    let arrToString = n.split(' ').sort().join(' ')
    console.log(arrToString)   // 155 156 165 166 169 176

    arrToString === n ? console.log('YES') : console.log('NO')
}

height(result1) // NO
height(result2) // YES


// 5) 문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.
let inputStr1 = 'querty'
let inputStr2 = 'hqllo my namq is hyqwon'

function change(n) {
    let changeStr = n.split('');
    console.log(changeStr) // ["q", "u", "e", "r", "t", "y"]

    for (let i = 0; i < changeStr.length; i++) {
        if (changeStr[i] === 'q') {
            changeStr[i] = 'e'
        }
    }
    const result = changeStr.join('')
    console.log(result)  // euerty
}

change(inputStr1)


// split()과 join() 을 활용하여 다른 방식으로 문제 풀이

function change2(n) {
    let changeStr = n.split('q');
    console.log(changeStr)  // ["", "uerty"]   >> q를 기준으로 쪼개서 배열에 담는다

    let joinStr = changeStr.join('e')
    console.log(joinStr)  // 배열의 모든 요소를 합해서 하나의 문자열로 출력하므로, ["", "uerty"]를 'e'로 연결하여 출력하므로, euerty가 됨
}

change2(inputStr1)

console.clear()


