// -----------------------------------------------
// Button content!!!
var buttons = [
  {
    cellID: "introduction",
    description: "",
    buttonText: ["=> start"], 
    buttonLinkIDs: ["start"]
  },
  // ------------ START OF DESERT ------------
  {
    cellID: "start",
    description: "There is nothing but sand here.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["start2"]
  },
  {
    cellID: "start2",
    description: "The sand shifts.",
    buttonText: ["=> continue walking", "=> stop"], 
    buttonLinkIDs: ["left", "right"]
  },
  {
    cellID: "left",
    description: "A sand worm attacks! You just barely dodge. You ready your sword. The worm approaches.",
    buttonText: ["=> fight", "=> dodge"], 
    buttonLinkIDs: ["leftleft", "leftright"]
  },
  {
    cellID: "leftleft",
    description: "The worm is faster and strikes first. While you are unconscious, it will surely eat you. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"]
  },
  {
    cellID: "leftright",
    description: "The smarter option. By dodging again, you notice a weak point and strike, killing the beast. You scavenge for usable parts, then continue on.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["forest"]
  },
  {
    cellID: "right",
    description: "The shifting intensifies. A sand worm appears.",
    buttonText: ["=> defend", "=> hide"], 
    buttonLinkIDs: ["rightleft", "rightright"]
  },
  {
    cellID: "rightleft",
    description: "You raise your shield at the last moment. The worm crashes into the shield and is momentarily stunned.",
    buttonText: ["=> finish him"], 
    buttonLinkIDs: ["finishHim"]
  },
  {
    cellID: "finishHim",
    description: "Fatality. You scavenge for usable parts, then continue on.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["forest"]
  },
  {
    cellID: "rightright",
    description: "You hide behind a nearby rock. It is no use. The sand worm quickly finds you. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"]
  },
  // ------------ START OF FOREST ------------
  {
    cellID: "forest",
    description: "The edge of the desert is close. A forest looms ahead.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["forest2"]
  },
  {
    cellID: "forest2",
    description: "You arrive at the forest's edge. Dangers are sure to be around every corner. You proceed with caution.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["forest3"]
  },
  {
    cellID: "forest3",
    description: "You are being watched.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["forest4"]
  },
  {
    cellID: "forest4",
    description: "A troll sits in a clearing ahead, with its gaze fixated on you. It is covered in moss and dirt. Though it's sitting, it must be twice your height.",
    buttonText: ["=> draw sword", "=> speak"], 
    buttonLinkIDs: ["f-left","f-right"]
  },

  // ------------ CHARACTER DEATH ------------
  {
    cellID: "death",
    description: "",
    buttonText: ["", ""], 
    buttonLinkIDs: ["", ""]
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
      document.getElementById("desc").innerHTML = document.getElementById("desc").innerHTML + buttons[i].description + "<br><br>";

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

// Get rid of welcome message after first click
document.querySelector('#buttons1 button').addEventListener('click', (e) => { 
  document.getElementById("welcome").style.display = "none";
});

