// console.log('hello world')

// // // Bagels cost $4.35 each (before tax). Write a program to calculate how much 9 
// // bagels cost and output the total. Your program should output the answer $39.15.

// function getBagelTotal(bagel, quantity){
//     return bagel * quantity;
// }
// var bagel = 4.35;
// var quantity = 9;
// var totalPrice = getBagelTotal(bagel, quantity);
// console.log("Total Price is " + totalPrice)



// // Scones cost $0.60 each. Write a program to calculate and output the total price 
// // of 27 scones. You should get $16.2.

// // var scones = 0.6;
// // var totalScones = 27
// // var output = totalScones * scones;
// // console.log("Total Output is " + output)

// function getSconeTotal()


// // function getTotalScone(scones, totalScones){
// //     return scones * totalScones;
// // }
// // var scones = 0.6
// // var totalScones = 27
// // var FinaltotalScone = getTotalScone(scones,totalScones;
// // console.log("Total output is" + FinaltotalScone)




// // It costs me $3.80 to make 13 muffins. How much did each muffin cost to make? 
// // The answer is approximately $0.29 each, but write a program to calculate this.

// var muffinCost = 3.8;
// var muffinTotal = 13;
// var muffinEach = muffinCost / muffinTotal;
// console.log("Average cost per muffin is " + muffinEach)


// // I have $100. How many bagels can I buy with that? The answer is 22, but write a program to do the calculation.
// // The most sensible program uses a function that JavaScript provides to round a number down – go look it up. However, it is possible to program this using +,-,*, / and one of either parseInt or %.

// var spend = 100;
// var totalBagel = spend / bagel;
// console.log("Total Bagels bought = " + totalBagel)



// // How many scones can I buy with $100? 166, but write the program.

// var sconeTotal = spend / scones;
// console.log("Total scones bought = " + sconeTotal)


// // How much change is left over from buying $100 worth of bagels? With that change, 
// // how many scones can I buy? 22 bagels, 7 scones, but write one program to calculate 
// // all of this, bagels and scones. There should be $0.10 left over, too.

// var roundBagel = 22;
// var changeBagel = spend / roundBagel;
// console.log("Change given for 22 bagels from $100 is " + changeBagel)

// var changeFromBagel = 4.54
// var numberSconesAfterBuyingBagelsWithHundy = changeFromBagel / scones;
// console.log("Number of Scones = " + numberSconesAfterBuyingBagelsWithHundy)


// var totalSconesFromChange = numberSconesAfterBuyingBagelsWithHundy * scones;

// var finalChangePlus100 = spend - changeBagel - totalSconesFromChange;
// var finalChange = (spend - finalChangePlus100);
// console.log("Total Change Given is " + Math.ceil(finalChange))




// Wednesday

// var pricePerCoffee = 3.6;

// function calculateCoffeeTotal (quantity) {
//   return quantity * pricePerCoffee;
// }

// function outputCoffeePrice (price, quantity, total) {
//   console.log(quantity + " coffees at $" + price + " each comes to $" + total);
// }

// var coffeeQuantity = 3;
// var totalPrice = calculateCoffeeTotal(coffeeQuantity);
// outputCoffeePrice(pricePerCoffee, coffeeQuantity, totalPrice);

// var coffeeQuantity = 17;
// var totalPrice = calculateCoffeeTotal(coffeeQuantity);
// outputCoffeePrice(pricePerCoffee, coffeeQuantity, totalPrice);



// var age = prompt("How old are you?");

//     if (age <18){
//         console.log("Go play Fortnite")
//     }
//     else if (age >= 18 && age <=64){
//         console.log("Go to work")
//     } 
//     else if (age >= 65){
//         console.log("Go Play Bingo")
//     }



// let steakPrice = 25.6,
// mushroomSaucePrice = 2,
// steakQuantity = prompt("Please enter number of steaks"),
// sauceQuantity = prompt("Please enter number of sauces"),

// noOfFreeSteaks = getNoOfFreeSteaks(steakQuantity),
// totalSteakPrice = getTotalSteakPrice(steakQuantity)
// totalSaucePrice = getTotalSaucePrice(sauceQuantity;)

// function getNoOfFreeSteaks(quantity){
//     return math.floor(steakQuantity/2)
// }

// function getTotalSteakPrice(quantity){
//     return quantity * steakPrice;
// }

// function getTotalSaucePrice(quantity){
//     return quantity*mushroomSaucePrice
// }

// console.log('Total is $' + totalSteakPrice + totalSaucePrice + '\n* Number of free steaks is: ' + noOfFreeSteaks);

// let quantity = prompt('Total number of muffins'),
//     muffinPriceRegular = 2.35,
//     muffunPriceDiscountSmall = 2.10,
//     muffinPriceDiscountBig = 1.90,
//     muffinPrice = getMuffinPrice(quantity),
//     totalPrice = quantity * muffinPrice;


// function getMuffinPrice(quantity) {
//     if (quantity < 10) return muffinPriceRegular;
//     if (quantity >= 10 && quantity < 25) return muffunPriceDiscountSmall;
//     if (quantity > 24) return muffinPriceDiscountBig
// }

// console.log('The unit price for muffins is ' + muffinPrice + '. The Total cost is ' + totalPrice)


// totalPrice = muffinPrice * quantity

// function muffinPrice (price){
//     if (price >= 10) return
// }


// let box = '{*}';
// let rows = 2;
// let columns =3;

// for (let i = 0; i < rows.length; i++) {
//     for (let j = 0; j < columns.length; j++){
//         console.log(box);
//     }
// }

// Friday12th

// var username = prompt("What's your name?");
// var outputCount = 5;
// while (outputCount > 0) {
//   console.log(username);
//   outputCount -= 1; // subtract 1 from outputCount and keep the new value
// };

// for (var i = 0; i <= 100; i += 1) {
//     console.log(i);
//   }

// for (var i = 100; i <= 0; i -= 1) {
//     console.log(i);
//   }

// var pirate = "Arr! Shiver me timbers and Raise the anchor!";
// pirate = pirate.toLowerCase();
// var i = 0;
// while (pirate.indexOf("r", i) > -1) {
// 	console.log(pirate.indexOf("r", i));
// 	i = pirate.indexOf("r", i) + 1;
// }

// Write a function that reverses a string. "Banana" becomes "ananaB".

// var userInput = prompt('Please enter a word longer than 10 characters');

// function validator() {
//    let valid;
//    (userInput.length > 10) ? valid = true : valid = false;

//    return valid
// }

// let userValid = validator();

// console.log(userValid)


let userInput = prompt('Enter word more than 10 words');

function getValidation(){
    let valid;
    (userInput.length > 10) ? valid = true : valid = false;

    return valid
}

let userValid = getValidation();

console.log(userValid)





function reverse(str){
    let reversed = "banana";    
    for (var i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }

  let reversedBanana = reverse();

console.log(reversedBanana)