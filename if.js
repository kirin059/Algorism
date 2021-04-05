'use strict';

// 1) 입력으로 랜덤한 숫자 n이 주어집니다. 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요
function multiple(n) {
    if (n % 3 === 0) {
        console.log('짝')
    }
    else {
        console.log(n)
    }
}

multiple(6)

// 2) 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.
function alphabet(n) {
    if (n.toUpperCase() === n) {
        console.log('yes')
    }
    else {
        console.log('no')
    }
}

alphabet('A')