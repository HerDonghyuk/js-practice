const number = parseInt(prompt("자연수를 입력하세요"));
let isPrime;

if (number === 1) {
  document.write(`1은 소수도 합성수도 아닙니다.`);
} else if (number === 2) {
  isPrime = true; // 숫자 2는 당연히 소수이므로 true로 설정
} else {
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }

  if (isPrime) {
    document.write(`${number}는 소수입니다.`);
  } else {
    document.write(`${number}는 소수가 아닙니다.`);
  }
}

/* 
const number = parseInt(prompt("판별할 숫자를 입력하시오."));

let isPrime;


if (number === 1) {
  document.write(`${number}은(는) 소수도, 합성수도 아닙니다`);
} else if (number === 2) {
  isPrime = true;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
}

switch (isPrime) {
  case true:
    document.write(`${number}는 소수입니다.`);
    break;
  case false:
    document.write(`${number}는 합성수입니다.`);
    break;
}
 */
