let imageGridItem = $('.image-grid__img'),
close = $('.closed'),
modal = $('.modal-overlay'),
modalImage = $('.modal__img'),
xcross = $('.modal-overlay__close');


imageGridItem.on('click', function(){
    close.css('display', 'block');
    modalImage.attr("src", $(this).attr('src').replace('300', '560').replace('200', '360'));
});

modal.on('click', function(){
    close.css('display', 'none');
    
});

// imageGridItem.on('click', i){
//     close.css("display", "block");
//     // close.
// };

