'use strict';

// 1) 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하시오.

let candidates = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'

function pickOne(n) {
    let arrayPeople = n.split(' ')
    console.log(arrayPeople)  // ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"]

    let obj = {};
    for (let i = 0; i < arrayPeople.length; i++) {
        obj[arrayPeople[i]] ? obj[arrayPeople[i]] += 1 : obj[arrayPeople[i]] = 1
    }
    console.log(obj)  // {원범: 2, 혜원: 4, 유진: 2}

    // 객체를 배열로 변환하기 (Object.entries())
    let arrToObj = Object.entries(obj);
    console.log(arrToObj) // [['원범', 2], ["혜원", 4], ["유진", 2]]

    arrToObj.sort((a, b) => b[1] - a[1])
    console.log(arrToObj) // [["혜원", 4], ['원범', 2], ["유진", 2]]

    console.log(`${arrToObj[0][0]}이가 ${arrToObj[0][1]}표로 반장이 되었습니다 `)
}

pickOne(candidates)



// Object.entries(obj)   >>  객체를 배열(키:값)의 형태로 변환
const animal1 = { tiger: 1, lion: 2 }
console.log(Object.entries(animal1))  // [[tiger : 1], [lion : 2]]

const animal2 = { tiger: 'a', lion: 'b', rabbit: 'c' }
console.log(Object.entries(animal2))  //  [[tiger : 'a'], [lion : 'b'], [rabbit : 'c']]



// 2) 학생들의 점수를 공백으로 구분하여 입력을 받고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 받을 학생의 수를 출력하세요.

let score = '97 86 75 66 55 97 85 97 97 95'

function top3(n) {
    let arrScore = n.split(' ');
    console.log(arrScore)  // ["97", "86", "75", "66", "55", "97", "85", "97", "97", "95"]

    let scoreObj = {};
    for (let i = 0; i < arrScore.length; i++) {
        scoreObj[arrScore[i]] ? scoreObj[arrScore[i]] += 1 : scoreObj[arrScore[i]] = 1
    }
    console.log(scoreObj)  //{55: 1, 66: 1, 75: 1, 85: 1, 86: 1, 95: 1, 97: 4}

    // 객체를 배열로 변환하기 (Object.entries())
    let arrToObj1 = Object.entries(scoreObj)
    console.log(arrToObj1)  // [["55", 1], ["66", 1], ["75", 1], ["85", 1], ["95", 1], ["97", 4]]

    arrToObj1.sort((a, b) => b[0] - a[0])
    console.log(arrToObj1)  // [ ["97", 4], ["95", 1], ["85", 1], ["75", 1], ["66", 1], ["55", 1] ]

    console.log(arrToObj1[0][1] + arrToObj1[1][1] + arrToObj1[2][1]);
}

top3(score)