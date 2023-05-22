const FirstNum = document.querySelector("#number1");
const SecondNum = document.querySelector("#number2");
const bttn = document.querySelector("button");

// 함수 작성
getGCD = (FirstNum, SecondNum) => {
  let GCD = 0;
  for (let i = 1; i <= FirstNum; i++) {
    if (FirstNum % i === 0 && SecondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
  console.log(GCD);
};

bttn.onclick = () => {
  document.querySelector("#result").innerText = getGCD(
    FirstNum.value,
    SecondNum.value
  );
};

//출력

/* 
const n = document.querySelector("#number1");
const m = document.querySelector("#number2");
const button = document.querySelector("button");
let result = document.querySelector("#result");

button.onclick = function () {
  result.innerText = getGCD(n.value, m.value);
};

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}
 */
