let 
    pets = [
        {
            name: "Cat",
            imageSmall: "img/cat200.png",
            imageBig: "img/cat600.png",
        },
        {
            name: "Dog",
            imageSmall: "img/dog200.png",
            imageBig: "img/dog600.png",
        },
        {
            name: "Rabbit",
            imageSmall: "img/rabbit200.png",
            imageBig: "img/rabbit600.png",
        },
    ];

let smallSquares = $(".smallImageContainer");
let bigSquare = $(".bigImage");

$.each(pets, function(i,pet){
    let thumbnail = '<div class="geoffistheman"><img class="thumbnail" src="' + pet.imageSmall + '"></div>';
    smallSquares.append(thumbnail);
});

let thumbnails = $('.thumbnail')

thumbnails.on('click', function(){
    let newSrc = $(this).attr('src').replace('200', '600');
    bigSquare.attr('src', newSrc);
    $('.selected').removeClass('.selected')
 

    // thumbnails.on('mouseover', function(){
    //     $(this).fadeOut(500);
    //     $(this).fadeIn(400)
    //   });

 
    // let largeImage = '<div><img src="' + pet.imageBig + '"></div>';
    // bigSquare.append(largeImage);
})

// $.each(pets, function(i,pet){
//     let bigThumbnail = '<div><img src="' + pet.imageBig + '"></div>';
// });





// $.each(imageSmall, fucntion(i,value){

// })

// $(document).ready(function() {
//     var $div = $(".smallImageContainer");

//     $.each(imageSmall, function(i, val) {
//         $("<img />").attr("src", val).appendTo($div);
//     });
// });

