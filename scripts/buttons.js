// -----------------------------------------------
// Story import
import {story as buttons} from '../scripts/story.js';
console.log(buttons[0]);

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

