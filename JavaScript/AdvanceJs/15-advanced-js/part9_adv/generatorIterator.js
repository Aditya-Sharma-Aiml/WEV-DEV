// jitni time tum hit kroge utni time mai result dunga ye khta hai generator
// yield -> first yield khta hai firsttime 1,then 2nd time 2 then so on.... 
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
console.log(numberGenerator);//[GeneratorFunction: numberGenerator]

let gen = numberGenerator();
let genTwo = numberGenerator();
// .next().value -> it is a iterator
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);

// o/p: 

// [GeneratorFunction: numberGenerator]
// 1
// 2
// 3
// undefined
// 1
// 2