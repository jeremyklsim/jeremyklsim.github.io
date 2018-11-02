// var fullList = [

var artist1 = {
    first: 'Michael',
    last: 'Jackson',
}

var artist2 = {
    first: 'Bruno',
    last: 'Mars',
}
var artist3 = {
    first: 'Celine',
    last: 'Dion',
}
var artist4 = {
    first: 'Harry',
    last: 'Styles',
}
var artist5 = {
    first: 'Britney',
    last: 'Spears',
}
var artist6 = {
    first: 'Shaun',
    last: 'Mendes',
}
var artist7 = {
    first: 'Charlie',
    last: 'Puth',
}
var artist8 = {
    first: 'James',
    last: 'Brown',
}
var artist9 = {
    first: 'DJ',
    last: 'Khalid',
}
var artist10 = {
    first: 'Kendrick',
    last: 'Lamar',
}

let artistList = [artist1, artist2, artist3, artist4, artist5, artist6, artist7, 
artist8, artist9, artist10]

let userAnswer = prompt("Would you like List of artist or Single Artist?")

// console.log('hellotest')
    function checkAnswer(userAnswer){
        if (userAnswer == 'list'){
            for (var i = 0; i < artistList.length; i++){
            console.log(artistList[i].first + " " + artistList[i].last)
        }
    }
    else (userAnswer == 'single')
        singleArtistFirstName = prompt('Please Enter Artist Fist Name');
        for (var i = 0; i < artistList.length; i++){
            if (artistList[i].first == singleArtistFirstName){
                console.log(artistList[i].first + " " + artistList[i].last)
            }
        }
    }

    

checkAnswer(userAnswer);

//     if (singleList = 'list'){
//         console.log('hi there')}
   
//     else {
//     console.log('lol')
// }

