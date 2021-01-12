// Functions used for "next" buttons

// Method shows next paragraph and next button
// "thisButton" is the button element's ID
// "elementName" is the element ID to show instead
// "followingButton" is the next button to show after text
function nextButton(thisButton, elementName, followingButton) {
  var button = document.getElementById(thisButton);
  var element = document.getElementById(elementName);
  var following = document.getElementById(followingButton);

  // Remove button, show element
  button.style.display = "none";
  element.style.display = "block";
  following.style.display = "block";
}

// Same as "nextButton" but hides description when player starts
function startGame(thisButton, elementName, followingButton) {
  nextButton(thisButton, elementName, followingButton);

  // Get rid of the instructions
  var instr = document.getElementById("instructions");
  var initButton = document.getElementById("initial");
  instr.style.display = "none";
  initButton.style.display = "none";
}

// Method shows next paragraph, DOES NOT show next button
function endButton(thisButton, elementName) {
  var button = document.getElementById(thisButton);
  var element = document.getElementById(elementName);

  // Remove button, show element
  button.style.display = "none";
  element.style.display = "block";
}

// Same logic as above, but turns off the other choice in a split
// "otherButton" is the button not chosen
function choiceToSingle(thisButton, elementName, otherButton, followingButton) {
  var button = document.getElementById(thisButton);
  button.style.display = "none";

  var element = document.getElementById(elementName);
  element.style.display = "block";

  var following = document.getElementById(followingButton);
  following.style.display = "block";

  var otherChoice = document.getElementById(otherButton);
  otherChoice.style.display = "none";
}

// Same as "choiceToSingleButton" but leads to another split
// "followingLeft" and "followingRight" are the next two choice buttons
function choiceToChoice(thisButton, elementName, otherButton, followingLeft, followingRight) {
  var button = document.getElementById(thisButton);
  button.style.display = "none";

  var element = document.getElementById(elementName);
  element.style.display = "block";

  var left = document.getElementById(followingLeft);
  left.style.display = "block";

  var otherChoice = document.getElementById(otherButton);
  otherChoice.style.display = "none";

  var right = document.getElementById(followingRight);
  right.style.display = "block";
}

// Similar to "choiceToChoiceButton", but without getting rid of a choice
function singleToChoice(thisButton, elementName, followingLeft, followingRight) {
  // Start with left
  nextButton(thisButton, elementName, followingLeft);

  // Show the right too!
  var right = document.getElementById(followingRight);
  right.style.display = "block";
}

// Character death?
// Same as "endButton", changes screen color
function charDeath(thisButton, elementName) {
  endButton(thisButton, elementName);

  // Change screen color
  var html = document.getElementById("html");
  html.style.backgroundColor = "#ffb8b8";
}

// Character death due to a choice
function charDeathChoice(thisButton, elementName, otherButton) {
  charDeath(thisButton, elementName);
  var otherChoice = document.getElementById(otherButton);

  // Remove other button
  otherChoice.style.display = "none";
}