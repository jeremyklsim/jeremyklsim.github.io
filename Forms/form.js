let GetStartedBtn = document.querySelector('#getStartedBtn');
let GetStartedForm = document.querySelector('#getStartedForm');
let passwordInput = document.querySelector('#passwordInput');
let messageEl = document.querySelector('#message');

let secrePattern = /cat/;


GetStartedForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    passwordInput.style.display = 'block';
    GetStartedBtn.style.display = 'none';
    return false;
});

passwordInput.addEventListener('blur', () => {
    let value = evt.target.value;
    if(value.match(secrePattern)){
        messageEl.style.display = 'block';
    }
});
