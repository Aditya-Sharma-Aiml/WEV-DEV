function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let hitesh = new Person("hitesh");
hitesh.greet();


///// 
function KahonapyarHai(loveName) {
  this.loveName = loveName;
}

KahonapyarHai.prototype.ijhaar = function () {
  console.log(`I Love You ${this.loveName}`);
};

let myLove = new KahonapyarHai("kaka");
myLove.ijhaar();
