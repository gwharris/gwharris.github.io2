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
    description: "In a surprisingly swift motion, the troll throws the rock. Your last thought is that you must have gotten it wrong. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"]
  },
  {
    cellID: "correct1",
    description: '"Correct!" the troll replies. "My wife and I have six daughters. Each of our daughters has one brother. How large is our family?"',
    buttonText: ["=> fourteen", "=> nine"], 
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
    buttonLinkIDs: ["river1"]
  },
  // ------------ START OF RIVER ------------
  {
    cellID: "river1",
    description: "The forest is vast.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["river2"]
  },
  {
    cellID: "river2",
    description: "The trees begin to thin. There may be a clearing ahead.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["river3"]
  },
  {
    cellID: "river3",
    description: "Almost there. The rushing of water is quiet at first, progressively growing louder.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["river4"]
  },
  {
    cellID: "river4",
    description: "The river is ahead. The crystal-clear water shimmers in deep hues.",
    buttonText: ["=> cross river", "=> walk along riverbank"], 
    buttonLinkIDs: ["rivDeath", "meetSiren"]
  },
  {
    cellID: "rivDeath",
    description: "You get halfway through when a sudden rush of water surges toward you. As you sink below, a faint, mischievous laugh can be heard. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"]
  },
  {
    cellID: "meetSiren",
    description: "The water seems to follow you up the riverbank. Strange.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["meetSiren2"]
  },
  {
    cellID: "meetSiren2",
    description: "The water swirls upward. It forms a beautiful face with a charming smile. A water nymph, perhaps?",
    buttonText: ["=> speak", "=> wait"], 
    buttonLinkIDs: ["sirenTempt", "waitTempt"]
  },
  {
    cellID: "sirenTempt",
    description: 'The nymph listens to your plight. "What you seek is across my shore," it offers, "Allow me to grant you safe passage."',
    buttonText: ["=> cross river", "=> politely decline"], 
    buttonLinkIDs: ["rivDeath", "sirenTempt2"]
  },
  {
    cellID: "waitTempt",
    description: '"Hello traveller," the nymph begins, "I know what you seek. Do you intend to cross? Let me help."',
    buttonText: ["=> cross river", "=> decline"], 
    buttonLinkIDs: ["rivDeath", "sirenTempt2"]
  },
  {
    cellID: "sirenTempt2",
    description: '"Not to worry," the nymph replies. "There is a longer route. The entrance to the crystal caves lies ahead. Shall we go?"',
    buttonText: ["=> decline again", "=> follow"], 
    buttonLinkIDs: ["declineSiren", "followSiren"]
  },
  {
    cellID: "declineSiren",
    description: '"Fine then." The nymph seems... upset? You walk aimlessly up the river for a while.',
    buttonText: ["=> next"], 
    buttonLinkIDs: ["declineSiren2"]
  },
  {
    cellID: "declineSiren2",
    description: "The cave lies at the origin of the river, but the entrance is locked! Searching for a key proves too arduous a task. Even if a creature does not find you, hunger surely will. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"]
  },
  {
    cellID: "followSiren",
    description: 'The nymph seems... happy? As you walk along the riverbank, it follows from in the water. It is a rather joyful creature.',
    buttonText: ["=> next"], 
    buttonLinkIDs: ["followSiren2"]
  },
  {
    cellID: "followSiren2",
    description: '"It is strange for such an attractive mortal to travel alone. Do you not want for company?" it invites.',
    buttonText: ["=> flirt back", "=> walk in silence"], 
    buttonLinkIDs: ["flirt!", "noFlirt"]
  },
  {
    cellID: "flirt!",
    description: 'You flirt back. The nymph giggles.',
    buttonText: ["=> next"], 
    buttonLinkIDs: ["flirt2!"]
  },
  {
    cellID: "flirt2!",
    description: 'You reach the origin of the river. A locked door sits at the mouth of a cave. The nymph reaches into the water below.',
    buttonText: ["=> next"], 
    buttonLinkIDs: ["flirt3!"]
  },
  {
    cellID: "flirt3!",
    description: '"Thank you for accompanying me," the nymph smiles, "If you survive the horrors within, I should like to see you again." The nymph pulls the key from the water and unlocks the door.',
    buttonText: ["=> enter cave"], 
    buttonLinkIDs: ["endForNow"]
  },
  {
    cellID: "noFlirt",
    description: "The nymph sighs. You reach the origin of the river. A locked door sits at the mouth of a cave.",
    buttonText: ["=> next"], 
    buttonLinkIDs: ["noFlirt2"]
  },
  {
    cellID: "noFlirt2",
    description: '"If only you had the key!" The nymph smirks and disappears.',
    buttonText: ["=> look for key"], 
    buttonLinkIDs: ["searchDeath"]
  },
  {
    cellID: "searchDeath",
    description: "You don't know where to start looking. Searching for a key proves too arduous a task. Even if a creature does not find you, hunger surely will. You have died.",
    buttonText: [""], 
    buttonLinkIDs: ["death"]
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
// Story import
// import {story as buttons} from '../scripts/story.js';
// console.log(buttons[0].description);

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
    var fade = document.getElementById("fade");
    fade.parentNode.removeChild(fade);
  }
}

// Get rid of welcome message after first click
document.querySelector('#buttons1 button').addEventListener('click', (e) => { 
  document.getElementById("welcome").style.display = "none";
});

