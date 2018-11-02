// In your Javascript file:
// 1. Create the following variables:
// A variable for your textarea HTML element
// A variable for the "rem-chars" span
// A variable for value of the the "maxlength" attribute of the textarea.
// 2. Now:

// put a keyup listener on the textarea
// In the listener’s callback:
// set the text of the "rem-chars" span to the value of the  "maxlength" attribute of the textarea minus the length of the value of the textarea.

let introEl = $("#textarea");
let remCharEl = $("#remChars");
let maxLengthEl = introEl.attr('maxlength');

// $("#textarea").keyup(function(){
//     remCharEl.html(maxLengthEl - introEl.val().length);
// });

introEl.on('keyup', function(){
   let inputLength = $(this).val().length;
    remCharEl.text(maxLengthEl - inputLength);
});


// In your Javascript file:
// 1. Create the following variables:
// A variable for your fruitlist.
// A variable for your add button.
// 2. Now:
// put a click listener on the add button
// In the listener’s callback:
// append a new list item to the list

let fruitList = $('#fruit-list');
let addButton = $('#add-btn');

addButton.on('click', function(){
 fruitList.append('<li>Bananas</li>');
});


// On the bottom of a page with a scrolling y-axis, put a link called “Go to top” or similar. 

// In your Javascript file:
// target the link 
// put a click listener on it
// In the listener’s callback:
// target the document’s html and body elements $('html, body')
// On this element (the body), call the animate method using these parameters:
// { scrollTop: 0 }, "slow"

let scrollTop = $('#goToTop');
let bodyHTML = $('html, body');

scrollTop.on('click', function(){
bodyHTML.animate({scrollTop:0}, "slow")
});


// Use the following HTML:
// <h2>Paired lists</h2>
// <div id="container"> 

// <ul id="fruit"> ul> 

// <ul id="selected-fruit"> ul>

// <div>

// In your Javascript:
// 1. Create variables for the fruit and selected-fruit HTML elements.

// 2. Create a variable for an array of fruit names.

// 3. Loop through the items and append items to the fruit list. See this link for best practices when appending: https://learn.jquery.com/performance/append-outside-loop/

// 4. Now, add a click listener to the fruit list to listen to the click events on the list items (use .on('click', 'li',  function(){}).

// 5. In the click listener

// Clone the selected listitem and append it to the selected fruit list.
// Hide the selected list item.
// You could fade the items into the selected fruit list by adding: .hide().fadeIn(500)



let fruit = $('#fruit');
let selectedFruit = $('#selected-fruit');

let arrayFruit = ['Orange', 'Apple', 'Grape', 'Tangelo', 'Pear'];

$.each(arrayFruit, function(i,value){
    var newFruit = "<li>" + value + "</li>";
    fruit.append(newFruit);
    // console.log(value)
    // let fruitLoop = 
});

// ^ completed so far

fruit.on('click', 'li', function(){
    $(this).appendTo(selectedFruit).hide().fadeIn(500);
//    $(this).clone().appendTo(selectedFruit).hide();
//    $(this).hide();

   
//    selectedFruit.append(arrayfruit[i]);
});