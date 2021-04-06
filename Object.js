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