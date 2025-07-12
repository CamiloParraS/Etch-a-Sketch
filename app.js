// ========== GLOBAL VARIABLES ==========

const gridSize = 8; // DEFAULT VALUE
const GRID_PIXEL_WIDTH = 400;
let currentMode = "draw";
let color = "#333";
let isMouseButtonDown = false;

// ========== DOM ELEMENTS ==========

const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");
const drawButton = document.querySelector("#drawing-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const displayDrawingMode = document.querySelector("#displayDrawingMode");
const displayGridSize = document.querySelector("#displayGridSize");

// ========== FUNCTIONS ==========

function createGrid(size) {
  container.innerHTML = "";
  console.log("Creating grid");
  const cellDimension = GRID_PIXEL_WIDTH / size;
  displayGridSize.innerHTML = ` ${size} X ${size} `;

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
}

function handleCellInteraction(e) {
  if (!e.target.classList.contains("grid-cell")) return;

  if (currentMode === "draw") {
    e.target.style.backgroundColor = color;
  } else if (currentMode === "erase") {
    e.target.style.backgroundColor = "white";
  }
}

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
  const size = Number(prompt("Enter the size for the grid (1 - 100)"));
  if (size >= 1 && size <= 100) {
    createGrid(size);
  } else {
    alert("Invalid size. Please enter a number between 1 and 100.");
  }
});

drawButton.addEventListener("click", () => {
  currentMode = "draw";
  displayDrawingMode.innerHTML = "Drawing";
});

eraserBtn.addEventListener("click", () => {
  currentMode = "erase";
  displayDrawingMode.innerHTML = "Erasing";
});

// ========== INITIALIZER ==========
createGrid(gridSize);
displayDrawingMode.innerHTML = "Drawing";
