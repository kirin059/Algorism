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

// 4) 30세 미만인 users의 ages를 수집한다

