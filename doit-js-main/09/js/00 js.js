class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run = function () {
    alert(`${this.name} is running~`);
  };
}

let pet1 = new Pet("뽀삐", "black");
pet1.run();

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo = function () {
    alert(`이름 : ${this.name} / 품종 : ${this.breed} / 색깔 : ${this.color}`);
  };
}

const bori = new Cat("보리", "흰색", "코숏");
bori.viewInfo();
bori.runt();
