let n = prompt("1보다 큰 숫자를 입력하세요.");
let sum = 0;

if (n !== null && n > 1) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      continue;
    }
    sum += i;
    document.write(`${i} ----- ${sum} <br>`);
  }
}

/* const number = parseInt(prompt("1보다 큰 수를 입력하시오"));

let sum = 0;

if (number == null || number === 0) {
  document.write("숫자를 입력을 안했거나 0을 입력했습니다");
} else {
  for (let i = 0; i < number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  document.write(sum);
} */
