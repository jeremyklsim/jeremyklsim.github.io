//DOM Elememts
let emailInput = document.querySelector('#inputEmail');
let emailErr = document.querySelector('#email-err-msg')

let urlInput = document.querySelector('#inputUrl');
let urlErr = document.querySelector('#url-err-msg');

let telInput = document.querySelector('#inputTel');
let telErr = document.querySelector('#tel-err-msg');

let usernameInput = document.querySelector('#inputUsername');
let usernameErr = document.querySelector('#username-err-msg');
// username array
let usernameList = ['Geoff19', 'Jeremy19', 'Holly19', 'Ash19', 'Jack19']


emailInput.addEventListener('blur', function (evt) {
    validateEmail(evt.target.value)
});

telInput.addEventListener('blur', function (evt) {
    validateTel(evt.target.value)
});

urlInput.addEventListener('blur', function (evt) {
    validateUrl(evt.target.value)
});



function validate() {
    return validateEmail(emailInput.value)
     && validateTel(telInput.value) 
     && validateUrl(urlInput.value)
     && validateUsername(usernameInput.value);
}

function validateEmail(email) {
    let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (regexEmail.test(email) == false) {
        emailErr.style.display = 'grid';
        return false;
    } emailErr.style.display = 'none';

    return true;
};


function validateTel(tel) {
    let regexTel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (regexTel.test(tel) == false) {
        telErr.style.display = 'grid';
        return false;
    } telErr.style.display = 'none';
    return true;
};


function validateUrl(url) {
    let regexURL = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (regexURL.test(url) == false) {
        urlErr.style.display = 'grid';
        return false;
    } urlErr.style.display = 'none';
    return true;
};










// if input = current search item, then isFound = true
// if is found then show the message, else hide the message.

// username function
function validateUsername(username) {
    let isFound = false
    for (let i = 0; i < usernameList.length; i++){
        if (username === usernameList[i]){
            isFound = true;
   
            break;
        }
    }
    if (!isFound) {
        usernameErr.style.display = 'grid';
        return false;
    } usernameErr.style.display = 'none';
     return true
};

