// 1 . write a "for loop " that loops through the array ["green tea" ,"black tea","chai","oolong tea"] and stops the loop when it is finds " chai" , Store all teas before "chai"nin a new array named "selectedTeas".
console.log("Qn1");

let Teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < Teas.length; i++) {
  if (Teas[i] === "chai") break;
  selectedTeas[i] = Teas[i];
}
console.log(selectedTeas);

/*
2. write a 'for loop' that loops through the array '["London","NewYork","Paris","Berlin"] and skip the "Paris" . Store the other cities in a new array named "visitedCities"
*/ 
console.log("Qn2");
let cities = ["London", "NewYork", "Paris", "Berlin"];
let visitedCities =[];
for(let i=0 ; i<cities.length ; i++){
  if(cities[i]==="Paris") continue;
  visitedCities.push(cities[i]);

}
console.log(visitedCities);

/*
3. Use a "for of" loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found. Store the numbers before 4 in an array named "smallnumbers"
*/
console.log("Qn3");
let numbers = [1,2,3,4,5];
let smallnumbers = [];
for (const num of numbers) {
  if(num===4) break;
  smallnumbers.push(num);
  
}
console.log(smallnumbers);

/*
4. Use a "for of" loop to iterate through the array ["chai","green tea","herbal tea","black tea"] and skip "herbal tea". Store the other teas  in an array named "preffererdTeas"
*/
console.log("Qn4");
let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preffererdTeas=[];
for (const tea of teaTypes) {
  if(tea==="herbal tea") continue;
  preffererdTeas.push(tea);
  
}
console.log(preffererdTeas);

/*
5. Use a "for in" loop to iterate through an object containing city populations. Stop the loop when populations of "berlin" is found and store all previous cities populations in a new object named "cityPopulations".
*/
// console.log("Qn5");
// let citiesPopulations = {
//   London : 84863987,
//   "NewYork":466736,
//   Paris : 686907,
//   Berlin : 67689369067
// }
