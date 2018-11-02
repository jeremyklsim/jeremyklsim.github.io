var pupilsEl = document.querySelector('.pupils');//TODO This is the unordered list HTML element

let students = {
 pupils: [
   {
     name: "Richard",
     imageSource: "img/pikachu2.png",
     secondImageSource: "img/raichu2.png",
     id: 0,
   },
   {
     name: "Geoff",
     imageSource: "img/geoff1.jpg",
     secondImageSource: "img/raichu2.png",
     id: 1,
   },
   {
     name: "Jack",
     imageSource: "img/pikachu2.png",
     secondImageSource: "img/raichu2.png",
     id: 2,
   },
   {
     name: "Ashley",
     imageSource: "img/pikachu2.png",
     secondImageSource: "img/raichu2.png",
     id: 3,
   },
   {
     name: "Matthew",
     imageSource: "img/pikachu2.png",
     secondImageSource: "img/raichu2.png",
     id: 4,
   },
   {
     name: "TJ",
     imageSource: "img/pikachu2.png",
     secondImageSource: "img/raichu2.png",
     id: 5,
   },
   {
     name: "Holly",
     imageSource: "img/pikachu2.png",
     secondImageSource: "img/raichu2.png",
     id: 6,
   },
   {
     name: "Lyndon",
     imageSource: "img/pikachu2.png",
     secondImageSource: "img/raichu2.png",
     id: 7,
   },
   {
     name: "Jeremy",
     imageSource: "img/pikachu2.png",
     secondImageSource: "img/raichu2.png",
     id: 8,
   },
 ]
};

{/* <h2>${pupil.name}</h2> add back into getStudentNames function if needed later*/}

function getStudentNames(pupil){
 return `
 <div class="pupil">
 <img class="pupil-image" src="${pupil.imageSource}" data-id="${pupil.id}">
 </div>`;
}

function displayStudents() {
 let studentString = "";
 for (let i = 0; i < students.pupils.length; i++) {
   let pupil = students.pupils[i];
   studentString = studentString + getStudentNames(pupil);
 }
 pupilsEl.innerHTML = studentString;

let pupilItemsEls = pupilsEl.querySelectorAll(".pupil-image")

for (let i = 0; i < pupilItemsEls.length; i++) {
  const el = pupilItemsEls[i];
  el.addEventListener('mouseover', function(evt){
    let item = evt.target;
    let index = item.getAttribute("data-id")
    console.log("index", index);
    item.src = students.pupils[index].secondImageSource;
  })
  el.addEventListener('mouseout', function(evt){
    let item = evt.target;
    let index = item.getAttribute("data-id")
    console.log("index", index);
    item.src = students.pupils[index].imageSource;
  })
}


}

displayStudents();
