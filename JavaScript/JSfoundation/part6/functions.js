function greet(name) { // placeholder -> parameter (formal parameter)
    console.log(`hello ${name}`);    
}
greet("Aditya") // arguments (actual parameter)

/*
1. Write a funcn named "makeTea"  that takes one parameter 'typeOfTea' and returns a string like "making green tea" when called  "green tea" .
Store the result in a variable named "teaOrder".
*/
function makeTea(typeOfTea) {

    return `making ${typeOfTea}`;   
}
var teaOrder = makeTea("green tea");
console.log(teaOrder);

/*
2. Write a funcn named "orderTea"  that takes one parameter 'teaType' inside this function , create nother function named "confirmOrder" that returns a message loke "Order confirmed for chai".
call "confirmOrder" from within "orderTea" and returns result.
*/
function orderTea(teaType) {
    function confirmOrder() {
        return `order confirmed for ${teaType}`;
        
    }
    return confirmOrder(); 
}
let result  = orderTea("chai")
console.log(result);

/*
3. Write an arrow funcn named "calculateTotal"  that takes two parameters "price" and "quantity" . ghe function should return the total cost by multiplying the 'price' and "Quantity" .Store the result in a variable named "totalCost"
*/
// function greet(){} 
// // arrow function
// ()=>{}
// const greet = ()=>{}

// const calculateTotal = (price,quantity) => {
//     return price*quantity
// }
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(10,45);
console.log(totalCost);

/*
4. write a function named 'processTeaOrder' that akes lanother function , "makeTea" , as a parameter and calls it with the arguments "early grey"
return the result rof calling "makeTea"
*/
// ...............
 
