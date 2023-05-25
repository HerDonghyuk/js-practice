/* let hi = "hello";

for (let ch of hi) {
  console.log(ch);
}

let chArray = [...hi];
console.log(chArray);

let [ch1, ch2] = hi;
console.log(ch1);
console.log(ch2);
 */

/* let arr = [1, 2, 3, 4, 5]
let it = arr[Symbol.iterator]()
console.log(it)

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next()) */

function fnc() {
  console.log("1");
  console.log("2");
  console.log("3");
}

fnc();

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g1 = gen();
console.log(g1);
console.log(g1);
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1);

let g2 = gen();
for (let i of g2) console.log(i);

let g3 = gen();
g3.next();
for (let i of g3) console.log(i);
