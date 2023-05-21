const num1 = parseInt(prompt("숫자1 입력: "));
const num2 = parseInt(prompt("숫자2 입력: "));
let maxDivisor;

for (let i = 1; i <= num2; i++) {
  if (num1 % i === 0) {
    if (num2 % i === 0) {
      maxDivisor = i;
    }
  }
}

alert(maxDivisor);
