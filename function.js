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


// filter, map 으로 리팩토링(1)

// if문 내 조건인 "users[i].age >= 30" 과 "users[i].age < 30" 부분을 predi함수로 만들어서 중복을 없앤다 
// 응용형 함수, 함수 안에 함수를 적용한다, 함수를 인자로 받아서 원하는 시점에 평가한다.
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


//temp_users1 부분을 첫 번째 인자로 받고, 두 번째 인자는 predi함수로 만들어서 중복을 없앤다 
function _map(temp_users1, predi) {
    let ages = [];

    for (let i = 0; i < temp_users1.length; i++) {
        ages.push(predi(temp_users1[i]))
    }
    return ages;
}

console.log(_map(temp_users1, function (user) { return user.age })); // 30세 미만 users의 나이 출력
console.log(_map(temp_users, function (user) { return user.age }));  // 30세 이상 users의 나이 출력


// filter, map 으로 리팩토링(2)
// _filter함수로 만든 부분을 첫 번째 인자로 받고, 두 번째 인자는 predi함수로 만들어서 중복을 없앤다 (map함수에 filter함수를 첫번째 인자로 받는다(filtering))
console.log(
    _map(
        _filter(users, function (user) { return user.age >= 30 }), // 첫 번째 인자
        function (user) { return user.name }
    )
)

// 컬렉션 중심 프로그래밍의 유형별 함수 만들기

// 1) 수집하기 - map
console.log(
    _map(users, function (user) {
        return user.name;
    })
);

// 1-1) values
function _values(data) {
    return _map(data, function (val) { return val; });
}

console.log(users[0]);
console.log(_values(users[1]));

console.clear()



// 17. 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
let numbers = '18234'

function addNum(n) {
    let nums = n.split('');
    console.log(nums)  // ["1", "8", "2", "3", "4"]

    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += Number(nums[i])
    }
    console.log(result)
}

addNum(numbers)


// 18. 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
let strs = 'AAABBBcccddd';

function changeStr(n) {
    let splitStr = n.split('')
    // console.log(splitStr);

    let empty = [];
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] === splitStr[i].toUpperCase() ? empty.push(splitStr[i].toLowerCase()) : empty.push(splitStr[i].toUpperCase())
    }
    console.log(empty.join(''));
}
changeStr(strs)