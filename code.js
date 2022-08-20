// Nice Color 200 200 255

// Color Picker Variables

let redSlider = document.getElementById('redRange');
let redSlideText = document.getElementById("redSlideValue");

let greenSlider = document.getElementById('greenRange');
let greenSlideText = document.getElementById("greenSlideValue");

let blueSlider = document.getElementById('blueRange');
let blueSlideText = document.getElementById("blueSlideValue");

let r = parseInt(redSlider.value);
let g = parseInt(greenSlider.value);
let b = parseInt(blueSlider.value);

let box = document.getElementById('colorDisplay');
box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

// Grid Variables

const pad = document.querySelector('#pad');
const pageReloadButton = document.querySelector('#pageReload');
const eraserButton = document.querySelector('#eraser');
let gridSlider = document.getElementById("gridRange");
let gridSlideText = document.getElementById("gridSlideValue");
let gridSizeVal = parseInt(gridSlider.value);
let currentColor = `rgb(${r}, ${g}, ${b})`;



// Display Grid Slider Value

gridSlideText.textContent = `${gridSlider.value} x ${gridSlider.value}`;
buildGrid();

// Display Color Picker Values

redSlideText.textContent = `${redSlider.value}`;
greenSlideText.textContent = `${greenSlider.value}`;
blueSlideText.textContent = `${blueSlider.value}`;


// Update the current slider value (each time you drag the slider handle)

gridSlider.oninput = function() {
  gridSlideText.textContent = `${this.value} x ${this.value}`;
  gridSizeVal = this.value;
  buildUpdatedGrid();
}

redSlider.oninput = function() {
  redSlideText.textContent = `${redSlider.value}`;
}

greenSlider.oninput = function() {
  greenSlideText.textContent = `${greenSlider.value}`;
}

blueSlider.oninput = function() {
  blueSlideText.textContent = `${blueSlider.value}`;
}

// Grid Creation With New Parameters

function buildUpdatedGrid() {
  removeChildren();
  buildGrid();
  setBoxParams();
}

// Determine box width and height 

function setBoxParams() {
  let size = ((540 / gridSizeVal) - 2);

  Array.from(document.querySelectorAll("#box")).forEach(b => {
    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
  });
}

// Grid Creation Step

function buildGrid() {
  for (let i = 0; i < gridSizeVal; i++) {
    for (let i_2 = 0; i_2 < gridSizeVal; i_2++) {
      let currentBox = document.createElement('div')
      currentBox.setAttribute('id', 'box');
      pad.appendChild(currentBox);
    }
  }
  
}

// Removes All Children Elements

function removeChildren() {
  let child = pad.lastElementChild;
  while(child) {
    pad.removeChild(child);
    child = pad.lastElementChild;
  }
}

// Reloads The Page

function reloadPage() {
  Array.from(pad.children).forEach((child) => {
    child.style.backgroundColor = 'white';
  })

  // document.location.reload();
}

// Listen for Clear the Pad Click

pageReloadButton.addEventListener('click', () => reloadPage());

// Listen for Eraser Click

eraserButton.addEventListener('click', () => currentColor = 'white');

// Listen for Color Picks

redSlider.addEventListener("input", function (event) {
  r = redSlider.value;
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  currentColor = `rgb(${r}, ${g}, ${b})`;
});

greenSlider.addEventListener("input", function(event) {
  g = greenSlider.value;
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  currentColor = `rgb(${r}, ${g}, ${b})`;
});

blueSlider.addEventListener("input", function (event) {
  b = blueSlider.value;
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  currentColor = `rgb(${r}, ${g}, ${b})`;
})


// Main Game

function mouseDown() {
  Array.from(pad.children).forEach((b) => {
    b.addEventListener('mouseover', () => {
      b.style.backgroundColor = currentColor;
    })
  })
}

function mouseUp() {
  Array.from(pad.children).forEach((b) => {
    let new_b = b.cloneNode(true);
    b.parentNode.replaceChild(new_b, b);
  })
}




// Implement opacity, that keeps on increasing by 0.2
// where current color will be just white

// Change Clear the Pad implementation to just turn each box back to white color instead of refreshing

// OLD CODE

// Slider value grabbing technique

// slider.addEventListener('input', (event) => {
//   console.log(event);
//   output.innerHTML = event.target.value;
// })


// Listen for New Grid Size Selection

// gridSizeButton.addEventListener('click', () => {
//   // Guard against values higher than 50
//   if (gridSizeVal > 50) {
//     alert("Grid Size Value Should Not Be Above 50!");
//     reloadPage();
//     return false;
//   }

//   removeChildren();
//   buildGrid(gridSizeVal);
//   setBoxParams();
//   mainGame();
// })

// Determine New Grid Size

// function getGridSizeValue() {
//   gridSizeVal = parseInt(document.getElementById("gridSize").value);
// }

// const gridSizeButton = document.querySelector('#gridSizeButton');