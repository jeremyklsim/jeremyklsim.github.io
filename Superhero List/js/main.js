


var membersEl = document.querySelector('.members');//TODO This is the unordered list HTML element

//this is our data
var squad = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      imageUrl: "images/djskjdsf.jpeg",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
};

// function getMembers() {

//   //this is just getting the members from the game object, but pretend this is getting data from a db
//   return squad.members; //TODO
// }

function getMemberHTMLListItem(members){
  return `<li>
  <h2>${members.name}</h2>
  <p>${members.age}</p>
  <p>${members.secretIdentity}</p>
  <p>${members.powers}</p>
  </li>`; //TODO
}




function displayMembers() {
let memberString = "";
  for (let i = 0; i < squad.members.length; i++) {
    let member = squad.members[i];
    memberString = memberString + getMemberHTMLListItem(member);
  } 
  membersEl.innerHTML = memberString;

  //TODO Hint: You can concatenate (join together) strings of HTML list items
  //and then add the HTML to the DOM using the innerHTML property of the unordered 
  //list HTML element

  
}

displayMembers();