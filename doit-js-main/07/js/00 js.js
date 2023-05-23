const bttn = document.querySelector("#bttn");
const notiBox = document.querySelector("#noti-box");

bttn.addEventListener("click", function () {
  const alarm = document.createElement("div");
  alarm.classList.add("noti");
  alarm.innerText = "알림 내용을 표시합니다";
  notiBox.appendChild(alarm);

  setTimeout(() => {
    notiBox.remove();
  }, 1000);
});

/* const bttn = document.querySelector('#bttn');
const notiBox = document.querySelector('#noti-box');

bttn.addEventListener('click', () => {
  const noti = document.createElement('div');
  noti.classList.add('noti');
  noti.innerText = "알림 내용이 표시됩니다.";
  notiBox.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 3000);
});
 */
