const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("주문완");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("도우완");
    }, 500);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("토핑완");
    }, 500);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve("굽기완");
    }, 500);
  });
};

pizza()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => {
    console.log("준비완");
  });
