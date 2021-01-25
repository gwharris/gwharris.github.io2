var buttons = [
  {
    cellID: "introduction",
    description: "Welcome to the text adventure game!\nThe rules are simple - just choose your own adventure.\nPlease note that refreshing the page will reset the game.",
    buttonText: ["=> start"], 
    buttonLinkIDs: ["start"],
    num: 1
  },
  {
    cellID: "start",
    description: "There is nothing but sand here.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["start2"],
    num: 2
  },
  {
    cellID: "start2",
    description: "The sand shifts.",
    buttonText: ["=> continue walking", "=> stop"], 
    buttonLinkIDs: ["left", "right"],
    num: 3
  },
  {
    cellID: "left",
    description: "A sand worm attacks! You just barely dodge.\nYou ready your sword.\nThe worm approaches.",
    buttonText: ["=> fight", "=> dodge"], 
    buttonLinkIDs: ["leftleft", "leftright"],
    num: 4
  },
  {
    cellID: "leftleft",
    description: "The worm is faster and strikes first. While you are unconscious, it will surely eat you. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"],
    num: 5
  },
  {
    cellID: "leftright",
    description: "The smarter option. By dodging again, you notice a weak point.\nYou scavenge for usable parts, then continue on.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["forest"],
    num: 6
  },
  {
    cellID: "right",
    description: "The shifting intensifies. A sand worm appears.",
    buttonText: ["=> defend", "=> hide"], 
    buttonLinkIDs: ["rightleft", "rightright"],
    num: 5
  },
  {
    cellID: "rightleft",
    description: "You raise your shield at the last moment. The worm crashes into the shield and is momentarily stunned.",
    buttonText: ["=> finish him"], 
    buttonLinkIDs: ["finishHim"],
    num: 8
  },
  {
    cellID: "finishHim",
    description: "Fatality. You scavenge for usable parts, then continue on.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["forest"],
    num: 9
  },
  {
    cellID: "rightright",
    description: "You hide behind a nearby rock. It is no use. The sand worm quickly finds you. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"],
    num: 10
  },




  {
    cellID: "death",
    description: "",
    buttonText: [""], 
    buttonLinkIDs: null,
    num: 0
  }
]

// Find elements
var desc = document.getElementById("desc").innerHTML;
var button1 = document.getElementById("button1").innerHTML;
var button2 = document.getElementById("button2").innerHTML;
var linkIDs = document.getElementById("linkIDs").innerHTML;

// Set the introduction at the beginning
desc = buttons[0].description;
button1 = buttons[0].buttonText[0];
linkIDs = buttons[0].buttonLinkIDs[0];

// Event 
document.querySelector('#buttons button').addEventListener('click', (e) => { 
  const buttonClicked = e.target; 
  const nextCellId = buttonClicked.getAttribute(buttonLinkIDs); 
  displayCell(nextCellId); 
});


// function next() {
//   var current = document.getElementById("linkIDs");
//   if (current.length == 0)
//     html.style.backgroundColor = "#ffb8b8";
//   switch(current.length) {
//     case(2): findNextID(current[1], button2, 1);
//     case(1): findNextID(current[0], button1, 0);
//   }
// }

// // id is the ID to search for, 
// // buttonName is the button to find,
// // pos is the position the element is in in the array
// function findNextID(id, buttonName, pos) {
//   for (i=0; i<buttons.length; i++) {
//     if (id === buttons[i].cellID) {
//       buttonName = buttons[i].buttonText[pos];
//     }
//   }
// }