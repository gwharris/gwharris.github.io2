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
  {
    cellID: "f-left",
    description: "You draw your sword. As you move, the troll picks up a large rock.",
    buttonText: ["=> approach"], 
    buttonLinkIDs: ["appr"]
  },
  {
    cellID: "appr",
    description: "You begin to move, but the troll throws the rock at an incredible speed. There is no way to dodge in time. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"]
  },
  {
    cellID: "f-right",
    description: 'Before you utter a word, the troll stands. "Human. What is your quest?" it mumbles. It reaches for a large rock.',
    buttonText: ['=> "to reach the riverbank"', '=> "seek the holy grail"'], 
    buttonLinkIDs: ["riddle1", "riddle1"]
  },
  {
    cellID: "riddle1",
    description: 'The troll laughs. "Then you must answer some riddles to pass."',
    buttonText: ["=> next"], 
    buttonLinkIDs: ["riddle2"]
  },
  {
    cellID: "riddle2",
    description: '"You answer, though I never ask."',
    buttonText: ["=> a phone","=> a riddle"], 
    buttonLinkIDs: ["correct1", "wrong"]
  },
  {
    cellID: "wrong",
    description: "In a surprisingly swift motion, the troll throws the rock. Your last though is that you must have gotten it wrong. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"]
  },
  {
    cellID: "correct1",
    description: '"Correct!" the troll replies. "My wife and I have six daughters. Each of our daughters has one brother. How large is our family?"',
    buttonText: ["=> fourteen", "=> six"], 
    buttonLinkIDs: ["wrong", "correct2"]
  },
  {
    cellID: "correct2",
    description: '"Correct!" You are unsure if the troll is pleased or not. "I am god, planet, and metal. Who am I?"',
    buttonText: ["=> jupiter","=> mercury"], 
    buttonLinkIDs: ["wrong","correct3"]
  },
  {
    cellID: "correct3",
    description: 'The troll chuckles. "You are clever for a human. The riverbank lies behind me. Next time, you shall not be so lucky."',
    buttonText: ["=> next"], 
    buttonLinkIDs: ["forest5"]
  },
  {
    cellID: "forest5",
    description: "The troll moves, revealing a path behind him. You walk with your eyes on the troll until he is out of sight.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["endForNow"]
  },

  // ------------ CHARACTER DEATH ------------
  {
    cellID: "death",
    description: "",
    buttonText: ["", ""], 
    buttonLinkIDs: ["", ""]
  },
  {
    cellID: "endForNow",
    description: "Thank you for playing! This game is still in development, more content will be added soon.",
    buttonText: [""], 
    buttonLinkIDs: [""]
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
      document.getElementById("desc").innerHTML = buttons[i].description + "<br><br>" + document.getElementById("desc").innerHTML ;

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

