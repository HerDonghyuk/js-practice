/* try {
console.log("시작");
add();
console.log("실행 중");
} catch(err) {
  console.error(`오류 발생 - ${err}`);
  console.error(`오류 발생 - ${err.name}`);
  console.error(`오류 발생 - ${err.message}`);
}

console.log("끝");
 */

let json = '{"grade": 3, "age" : 25}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new Error("사용자 이름이 없습니다");
  }
} catch (err) {
  console.log(err);
}
