// ========== GLOBAL VARIABLES ==========

let gridSize = 8; // DEFAULT VALUE
const GRID_PIXEL_WIDTH = 400;
let currentMode = "draw";
let color = "#333";
let isMouseButtonDown = false;

// ========== DOM ELEMENTS ==========

const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
const drawBtn = document.querySelector("#drawing-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const funkyBtn = document.querySelector("#funky-btn");
const displayDrawingMode = document.querySelector("#displayDrawingMode");
const displayGridSize = document.querySelector("#displayGridSize");

// ========== FUNCTIONS ==========

function createGrid(size) {
  container.innerHTML = "";
  console.log("Creating grid");
  const cellDimension = GRID_PIXEL_WIDTH / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    // CELL STYLING
    cell.style.width = `${cellDimension}px`;
    cell.style.height = `${cellDimension}px`;
    cell.style.boxSizing = "border-box";
    cell.style.border = "1px solid #ddd";
    cell.style.borderRadius = "0.2rem";
    //cell.style.margin = "0.01rem";
    cell.style.backgroundColor = "white";
    cell.style.transition = "background-color 0.2s ease-in-out";
    cell.style.zIndex = "1";
    container.appendChild(cell);

    cell.addEventListener("mouseover", () => {
      if (isMouseButtonDown) {
        cell.style.scale = 1.05;
        cell.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.6)";
        cell.style.zIndex = "2";
      }
    });

    cell.addEventListener("mouseout", () => {
      cell.style.scale = 1;
      cell.style.boxShadow = "";
      cell.style.zIndex = "1";
    });
  }
  updateStatusDisplay();
}

function handleCellInteraction(e) {
  if (!e.target.classList.contains("grid-cell")) return;

  if (currentMode === "draw") {
    e.target.style.backgroundColor = color;
  } else if (currentMode === "erase") {
    e.target.style.backgroundColor = "white";
  } else if (currentMode === "funky") {
    e.target.style.backgroundColor = getRandomHexColor();
  }
}

// UPDATE THE CURRENT MODE
function updateStatusDisplay() {
  displayDrawingMode.innerHTML =
    currentMode.charAt(0).toUpperCase() + currentMode.slice(1);
  displayGridSize.innerHTML = `${gridSize} x ${gridSize}`;
}

// RANDOM COLOR FOR FUNKY MODE
function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

console.log(getRandomHexColor());


// ========== EVENT LISTENERS ==========

container.addEventListener("mousedown", (e) => {
  isMouseButtonDown = true;
  handleCellInteraction(e);
  e.preventDefault();
});

window.addEventListener("mouseup", () => {
  isMouseButtonDown = false;
});

container.addEventListener("mouseover", (e) => {
  if (isMouseButtonDown) {
    handleCellInteraction(e);
  }
});

gridSizeBtn.addEventListener("click", () => {
  const newSize = Number(prompt("Enter the size for the grid (1 - 100)"));
  if (newSize >= 1 && newSize <= 100) {
    gridSize = newSize
    createGrid(gridSize);
    updateStatusDisplay();
  } else {
    alert("Invalid size. Please enter a number between 1 and 100.");
  }
});

drawBtn.addEventListener("click", () => {
  currentMode = "draw";
  updateStatusDisplay();
});

eraserBtn.addEventListener("click", () => {
  currentMode = "erase";
  updateStatusDisplay();
});

funkyBtn.addEventListener("click", () => {
  currentMode = "funky";
  updateStatusDisplay();
});

// ========== INITIALIZER ==========
createGrid(gridSize);
updateStatusDisplay();
