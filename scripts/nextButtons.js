// Functions used for "next" buttons

// Method shows next paragraph AND button
// "buttonName" is the button element's ID
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

// Method shows next paragraph, DOES NOT show next button
// "buttonName" is the button element's ID
// "elementName" is the element ID to show instead
function endButton(buttonName, elementName) {
  var button = document.getElementById(buttonName);
  var element = document.getElementById(elementName);

  // Remove button, show element
  button.style.display = "none";
  element.style.display = "block";
}