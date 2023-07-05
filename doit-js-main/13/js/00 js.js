/* fetch(quotesURL)
  .then(response => response.json())
  .then(data => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);  // 0 ~ 29 사이의 수
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(".author").innerHTML = ` - ${data.quotes[random].author}`;
  })
  .catch(error => console.log(error)); */

/* async function init() {
  try {
    const response = await fetch("http://dummyjson.com/quotes");
    const data = await response.json();
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerHTML = `- ${data.quotes[random].author}`;
  } catch (error) {
    console.log(error);
  }
}

init(); */

async function init() {
  try {
    const response = await fetch("http://dummyjson.com/quotes");
    const data = await response.json();
    const result = document.querySelector("#result");
    const random = Math.random() * 30;
  } catch (error) {
    console.log(error);
  }
}
