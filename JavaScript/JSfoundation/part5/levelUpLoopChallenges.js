// 1 . write a "for loop " that loops through the array ["green tea" ,"black tea","chai","oolong tea"] and stops the loop when it is finds " chai" , Store all teas before "chai"nin a new array named "selectedTeas".
let Teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < Teas.length; i++) {
  if (Teas[i] === "chai") break;
  selectedTeas[i] = Teas[i];
}
console.log(selectedTeas);

