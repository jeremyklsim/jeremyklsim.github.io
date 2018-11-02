let screenLinks = $('.screen-link'),
screens = $('.screen');


/**
 * Initialise the app.
 */
function init(){
screenLinks.on('click', changeScreen)
}

/**
 * change the screen.
 */
function changeScreen(){
    screenLinks.removeClass('active');
    $(this).addClass('active');
    let screenId = $(this).data('screen');
    screens.removeClass('active');
    $('#' + screenId).addClass('active');
}

init();