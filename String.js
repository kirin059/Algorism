'use strict';

// 1) 문자열 속에 숨어있는 문자를 찾아보려고 합니다. 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다. "그 문자가 시작하는 index를 반환하는 프로그램"을 만들어 주세요
function string(s1, s2) {
    console.log(s1.indexOf(s2))
}

string('pineapple is yummy', 'apple')

// string과 array에 모두 쓰인다

let arr1 = [1, 2, 3, 4, 5]

console.log(arr1.indexOf(3))  // 2


// 2) 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 'Javascript'를 입력하여 2-gram으로 반복해주세요
function gram(n) {
    let str = n.split('')
    // console.log(str)
    for (let i = 0; i < str.length - 1; i++) {
        console.log(str[i] + str[i + 1])
    }
}

gram('javascript')

// 3) 문자열을 입력 받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.
// split  >>  "문자열"을 분해해서 "배열"에 담아주는 메서드
function makeStr(n) {
    let piece = n.split(' ');
    // console.log(piece)

    let word = piece.length
    console.log(word)  // 5
}

makeStr('안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다')


let word1 = 'abcdefg'
console.log(word1.split(''))  // ["a", "b", "c", "d", "e", "f", "g"]

let word2 = '123 456 789'
console.log(word2.split(' '))  // ["123", "456", "789"]

let word3 = '가, 나, 다, 라, 마, 바, 사'
console.log(word3.split(','))  // ["가", " 나", " 다", " 라", " 마", " 바", " 사"]



console.clear()