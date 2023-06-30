const pizza = new Promise((resolve, _) => {
  resolve("주문합니다");
});

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("도우완");
    }, 1500);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("토핑완");
    }, 1500);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("굽기완");
    }, 1500);
  });
};

/* pizza
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => {
    console.log("가져가");
  }); */

pizza
  .then((result) => step1(result))
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then((result) => console.log(result))
  .then(() => {
    console.log("가져가");
  });
