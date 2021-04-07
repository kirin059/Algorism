'use strict';

let users = [
    { id: 10, name: 'id', age: 36 },
    { id: 20, name: 'sd', age: 32 },
    { id: 30, name: 'gs', age: 32 },
    { id: 40, name: 'ir', age: 38 },
    { id: 50, name: 'yh', age: 27 },
    { id: 60, name: 'wf', age: 26 },
    { id: 70, name: 'cx', age: 31 },
    { id: 80, name: 'ih', age: 13 },
]

// 1) 30세 이상인 users를 거른다
let temp_users = [];

for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 30) {
        temp_users.push(users[i])
    }
}

console.log(temp_users)

// 2) 30세 이상인 users의 names를 수집한다
let names = [];
for (let i = 0; i < temp_users.length; i++) {
    names.push(temp_users[i].name)
}

console.log(names)

// 3) 30세 미만인 users를 거른다
let temp_users1 = [];

for (let i = 0; i < users.length; i++) {
    if (users[i].age < 30) {
        temp_users1.push(users[i])
    }
}

console.log(temp_users1)

// 4) 30세 미만인 users의 ages를 수집한다
let ages = [];
for (let i = 0; i < temp_users1.length; i++) {
    ages.push(temp_users1[i].age)
}

console.log(ages)


// filter, map 으로 리팩토링
// if문 내 조건인 "users[i].age >= 30" 과 "users[i].age < 30" 부분을 predi함수로 만들어서 중복을 없앤다 (응용형 함수, 함수 안에 함수를 적용한다, 함수를 인자로 받아서 원하는 시점에 평가한다)
function _filter(users, predi) {
    let temp_users = [];

    for (let i = 0; i < users.length; i++) {
        if (predi(users[i])) {
            temp_users.push(users[i])
        }
    }
    return temp_users
}

// predi함수는 인자를 받을 때, 함수 조건을 설정해준다
console.log(_filter(users, function (user) { return user.age >= 30 }));
console.log(_filter(users, function (user) { return user.age < 30 }));