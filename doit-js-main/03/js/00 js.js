/* const number = parseInt(prompt("자연수를 입력하세요: "));

let isPrime;
let remainder;

if (parseInt == "") {
  alert("숫자를 넣으라고 임마");
}

if (number === 0 || number === 1) {
  alert("소수도 합성수도 아닙니다.");
} else {
  for (let i = 2; i < number; i++) {
    remainder = number % i;
    if (remainder === 0) {
      alert(`${number}는 소수입니다`);
      break;
    } else {
      continue;
    }
  }
  alert(`${number}는 합성수입니다`);
}
 */

const number = parseInt(prompt("자연수를 입력하세요: "));

if (isNaN(number) || number <= 1) {
  alert("숫자를 올바르게 입력하세요.");
} else {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    alert(`${number}는 소수입니다.`);
  } else {
    alert(`${number}는 합성수입니다.`);
  }
}
