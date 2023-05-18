/* function multiple(a, b = 5, c = 10) {
  return a * b + c;
}

document.write(multiple(5, 10, 20)<br>);  // a=5, b=10, c=20
document.write(multiple(10, 20)<br>);  // a=10, b=20, c=10(default)
document.write(multiple(10)<br>);  // a=10, b=5(default), c=10(default) */

function multiple_1(a, b, c) {
  return a * b + c;
}
document.write(`1번 함수 : ${multiple_1(5, 10, 20)} <br>`);
document.write(`1번 함수 : ${multiple_1(5, 10)} <br>`);
document.write(`1번 함수 : ${multiple_1(5)} <br>`);

function multiple_2(a = 1, b = 1, c = 1) {
  return a * b + c;
}

document.write(`1번 함수 : ${multiple_2(5, 10, 20)} <br>`);
document.write(`1번 함수 : ${multiple_2(5, 10)} <br>`);
document.write(`1번 함수 : ${multiple_2(5)} <br>`);
