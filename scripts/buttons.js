// -----------------------------------------------
// Button content!!!
var buttons = [
  {
    cellID: "introduction",
    description: "Welcome to the text adventure game!\nThe rules are simple - just choose your own adventure.\nPlease note that refreshing the page will reset the game.",
    buttonText: ["=> start"], 
    buttonLinkIDs: ["start"],
    num: 1
  },
  // ------------ START OF DESERT ------------
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
  // ------------ START OF FOREST ------------



  // ------------ CHARACTER DEATH ------------
  {
    cellID: "death",
    description: "",
    buttonText: ["", ""], 
    buttonLinkIDs: ["", ""],
    num: 0
  }
]

// -----------------------------------------------

// Find elements
document.getElementById("desc").innerHTML = buttons[0].description;;
document.getElementById("button1").innerHTML = buttons[0].buttonText[0];
document.getElementById("button2").innerHTML = "";
document.getElementById("linkIDs").innerHTML = buttons[0].buttonLinkIDs;

// Click event for left button
document.querySelector('#buttons1 button').addEventListener('click', (e) => { 
  // Gather IDs to split by
  var ids_unsplit = document.getElementById("linkIDs").innerHTML;
  var ids = ids_unsplit.split(",");
  // Update text
  update(ids[0]);
});
// Click event for right button
document.querySelector('#buttons2 button').addEventListener('click', (e) => { 
  // Gather IDs to split by
  var ids_unsplit = document.getElementById("linkIDs").innerHTML;
  var ids = ids_unsplit.split(",");
  // Update text
  update(ids[1]);
});

// Function that updates the screen information
// when a button is pressed.
// SearchID is the ID to update with
function update(searchID) {
  var didTheyDie = ""; // Keeps track of character death
  for (i=0; i<buttons.length; i++) {
    if (searchID == buttons[i].cellID) {
      // Update description
      document.getElementById("desc").innerHTML = document.getElementById("desc").innerHTML + "<br><br>" + buttons[i].description;

      // Update buttons
      document.getElementById("button1").innerHTML = buttons[i].buttonText[0];
      if (buttons[i].buttonLinkIDs.length == 2) document.getElementById("button2").innerHTML = buttons[i].buttonText[1];
      else document.getElementById("button2").innerHTML = "";

      // Update hidden element
      document.getElementById("linkIDs").innerHTML = buttons[i].buttonLinkIDs;
      didTheyDie = buttons[i].buttonLinkIDs;
    }
  }
  // If the choice led to death...
  if (didTheyDie == "death") {
    document.getElementById("button1").innerHTML = "";
    document.getElementById("button2").innerHTML = "";
    document.getElementById("linkIDs").innerHTML = "game over";
    html.style.backgroundColor = "#ffb8b8";
  }
}


