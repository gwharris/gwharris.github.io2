// File dictates button usage

// Code below from https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'data/buttons.json', true); 
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

// Assign JSON, load load first cell
let cellData = null; 
loadJSON( (jsonObject) => { 
  cellData = jsonObject; 
  displayCell(1); 
});

// Display and wire up new cell. 
function displayCell(cellId) { const currentCell = findCell(cellId); }

// Write description 
document.getElementById('description-text').innerText = currentCell.Description;

// Create buttons
document.getElementById('buttons').innerHtml('');
for (let i = 0 ; i < currentCell.ButtonText.length ; i++) { 
  let newButton = document.createElement('button'); 
  newButton.setAttribute('class', 'next-cell-button'); 
  newButton.setAttribute('data-linked-cell', currentCell.ButtonLinkIds[i]);

  // Bind button to next cell
document.getElementById('buttons').appendChild(newButton);
}

// Add event listeners to each button which will call the next cell. 
// Adding a click listener is the equivalent of the entry for the onClick attribute in HTML.
document.querySelector('#buttons button').addEventListener('click', (e) => { 
  const buttonClicked = e.target; 
  const nextCellId = buttonClicked.getAttribute('data-linked-cell'); 
  displayCell(nextCellId); 
});

// You need some sort of a function to find data in your data store. This uses the filter method on arrays to find the object with the matching IDs. 
function findCell(cellId) { 
  return cellData.Cells.filter( cell => cell.CellId == cellId )[0]; 
}