/* function hello(name, message="안녕?") {
  console.log(`${name}님, ${message}`)
}
hello("도레미", "반갑스비다");
hello("백두산") */
/* 
function addNum(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;

  }
  return sum;
}

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3, 4, 5)); */

/* const animal = ["bird", "cat"];
const fruits = ["apple", "banana", "cherry"]

let sum1 = animal.concat(fruits)
let sum2 = [...animal, ...fruits]

console.log(sum1)
console.log(sum2) */

/* const fruits = ["apple", "banana", "cherry"]
const favorite = fruits;
favorite[1] = "grape";
console.log(fruits);
 */
/* const fruits = ["apple", "banana", "cherry"];
const mine = [...fruits];
mine[1] = "orange";
console.log(fruits);
console.log(mine); */

/* 
const book = {
  title : "Javascript",
  pages : 500
}
book["pubilshed date"] = "2022-01";
console.log(book) */

/* function fn() {
  return "result"
}
const obj = {
  [fn()] : "함수 키"
}
console.log(obj) */

/* function fn() {
  return "result"
}

function add(a, b) {
  return a + b;
}
const obj = {
  [fn()] : "함수 키",
  [`${add(10, 20)} key`] : "계산식 키"
}
console.log(obj); */

/* let user = {
  name : "도레미"
}

user.age = 25
console.log(user)
 */

/* function makeUser(name, age) {
  return {
    name : name,
    age : age
  }
}
let user1 = makeUser("백두산", 20);
console.log(user1) */

/* function makeUser(name, age) {
  return {
    name,
    age : age
  }
}
let user1 = makeUser("백두산", 20);
console.log(user1) */

/* let id1 = Symbol()
let id2 = Symbol()
console.log(id1 === id2) */

/* 
const id = Symbol("id")
const tel = Symbol("telephone number")

const member = {
  name : "kim",
  age : 25,
  [id] : 1235,
  [tel] : function() {
    alert(prompt("전화번호 : "));
  }
}

for(item in member) {
  console.log(`${item} : ${member[item]}`)
}

console.log(member[id])
console.log(member[tel]()) */

/* let tel = Symbol.for("tel");
let phone = Symbol.for("tel")
console.log(tel === phone);

let a = Symbol.keyFor(phone);
console.log(a) */

/* const fruits = ["사과", "복숭아"];
// let apple = fruits[0];
// let peach = fruits[1];
let [apple, peach] = fruits
console.log(fruits)
console.log(apple) */

/* let [spring, , fall, ] = ["봄", "여름", "가을", "겨울"]
console.log(spring) */

/* let [teacher, ...students] = ["kim", "Lee", "Park", "Choi"];
console.log(teacher);
console.log(students) */

let x = 10;
let y = 20;

[x, y] = [y, x];
