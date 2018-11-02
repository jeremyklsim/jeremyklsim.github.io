let images = document.querySelectorAll("img");
let countEl = document.querySelector("#count");
let count = 0;

function rotate(evt){
    evt.target.classList.add("rotated");
    count += 1;

    countEl.innerHTML = count;
}

function original(evt){
    evt.target.classList.remove("rotated");
}


function init(){
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", rotate)
        images[i].addEventListener("mouseout", original)
    }
}

init();

// let images = document.querySelectorAll("img");
// let countEl = document.querySelector("#count");
// let count = 0;

// function rotateImage(evt) {
//    evt.target.classList.add("rotated");
//    count += 1;

//    countEl.innerHTML = count;
// }

// function originalImage(evt){
//    evt.target.classList.remove("rotated");
// }



// function init() {
//    for (let i = 0; i < images.length; i++) {
//        images[i].addEventListener("mouseover", rotateImage);
//        images[i].addEventListener("mouseout", originalImage);
//    }
// }
// init();