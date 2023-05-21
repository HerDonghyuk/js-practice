function isPositive(n) {
  if (n > 0) {
    alert(`${n}은 양수입니다.`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다.`);
  } else {
    alert(`${n}은 0입니다.`);
  }
}

const number = parseInt(prompt("숫자를 입력하세요."));
// parseInt() 는 숫자가 아닐 경우 NaN을 반환함
if (!isNaN(number)) {
  // 숫자일 경우에만 실행
  isPositive(number);
}

/* const num = parseInt(prompt("숫자 입력"));

function isPositive(num) {
  switch (num) {
    case num === 0:
      alert(`${num}은 0`);
      break;
    case num < 0:
      alert(`${num}은 음수`);
      break;
    default:
      alert(`${num}은 양수`);
      break;
  }
}

if (!isNaN(num)) {
  isPositive(num);
} */
