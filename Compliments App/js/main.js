complimentsElement = document.querySelector('#adjectives');

let compliments = [{
    name: 'Good at bargaining',
    colour: '#ec1c29',
}, {
    name: 'Great at hoarding items from Briscoes',
    colour: 'orange'
}, {
    name: 'a WINNER of any argument',
    colour: '#999999'
}, {
    name: 'Impatient when using technology',
    colour: 'red'
}, {
    name: 'amazing at beating me up with your back scratcher',
    colour: '#5b90e5'    
}];


function displayCompliment(compliment) {
    setInterval(function() {
        document.body.style.transition = "all 1s"
       document.body.style.backgroundColor = compliment.colour; 
       complimentsElement.innerHTML = `${compliment.name}`;
        compliment = compliments[Math.floor(Math.random() * compliments.length)];
}, 2000);

}

let compliment = compliments[Math.floor(Math.random() * compliments.length)];
displayCompliment(compliment)

let disco = document.querySelector('.discoButton');

disco.addEventListener('click', function(){
    setInterval(function() {
        document.body.style.transition = "all 0.5s"
       document.body.style.backgroundColor = compliment.colour; 
       complimentsElement.innerHTML = `${compliment.name}`;
        compliment = compliments[Math.floor(Math.random() * compliments.length)];
}, 200);

});

disco.addEventListener('click',function() {
    clearInterval(interval);
});
