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
  instr.style.display = "none";
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
function choiceToSingleButton(thisButton, elementName, otherButton, followingButton) {
  nextButton(thisButton, elementName, followingButton);
  var otherChoice = document.getElementById(otherButton);

  // Remove other button
  otherChoice.style.display = "none";
}

// Same as "choiceToSingleButton" but leads to another split
// "followingLeft" and "followingRight" are the next two choice buttons
function choiceToChoiceButton(thisButton, elementName, otherButton, followingLeft, followingRight) {
  // Start by showing the left path
  choiceToSingleButton(thisButton, elementName, otherButton, followingLeft);

  // Show the right too!
  var right = document.getElementById(followingRight);
  right.style.display = "block";
}

// Similar to "choiceToChoiceButton", but without getting rid of a choice
function singleToChoiceButton(thisButton, elementName, followingLeft, followingRight) {
  // Start with left
  nextButton(thisButton, elementName, followingLeft);

  // Show the right too!
  var right = document.getElementById(followingRight);
  right.style.display = "block";
}