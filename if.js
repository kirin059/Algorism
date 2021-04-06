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


// 3) 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요. 첫번째 입력으로 제한 무게,두번째 입력으로는 함께한 친구들의 수 n, 그 다음 차례대로 탑승할 친구들의 몸무게(랜덤)가 주어집니다.
function weightLimit(limit, people, ...weights) {
    // ...weights 는 나머지매개변수로서, 배열의 형태로 값이 담긴다
    console.log(limit)  // 80
    console.log(people)  // 5
    console.log(...weights)  // [20 , 20, 20, 20, 20]  >> 배열 형태

    let weightPlus = 0;

    for (let i = 0; i < weights.length; i++) {
        weightPlus += weights[i];
        console.log(weightPlus)  // 20, 40, 60, 80, 100

        if (weightPlus >= limit) {
            console.log(weightPlus) // 100
            console.log(i - 1)  // 3
            // i는 0부터 시작하므로 weightPlus가 100이면 i는 4가 된다. 
            // limit은 80이므로 weights는 20, 20, 20이 되어야 한다. 즉 i-1은 3명이 된다
        }
    }

}

weightLimit(80, 5, 20, 20, 20, 20, 20)



// 나머지 매개변수(...)
function sumAll(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    console.log(sum)  //  15(1 + 2 + 3 + 4 + 5)
}

sumAll(1, 2, 3, 4, 5)



// 4) 소수 판별하기, 소수이면 yes 출력, 아니면 no 출력
function sosu(n) {
    if (n <= 1) {
        console.log('no')
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log('no')
        }
    }
    console.log('yes')
}

sosu(3)
