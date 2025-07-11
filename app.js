// ========== GLOBAL VARIABLES ==========

const gridSize = 8; // DEFAULT VALUE
const GRID_PIXEL_WIDTH = 400;
let isMouseDown = false;

// ========== DOM ELEMENTS ==========

const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");

// ========== GRID CREATION ==========

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
    //cell.style.borderRadius = "0.3rem";
    //cell.style.margin = "0.01rem";
    cell.style.backgroundColor = "white";
    cell.style.transition = "background-color 0.2s ease-in-out";
    container.appendChild(cell);

    // HOVER STYLE
    cell.addEventListener("click", () => {
      cell.style.backgroundColor = "white";
    });
  }
}

// ========== EVENT LISTENERS ==========

container.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  if (e.target.classList.contains("grid-cell")) {
    e.target.style.backgroundColor = "#333";
  }
  e.preventDefault();
});

window.addEventListener("mouseup", () => {
  isMouseDown = false;
});

container.addEventListener("mouseover", (e) => {
  if (isMouseDown && e.target.classList.contains("grid-cell")) {
    e.target.style.backgroundColor = "#333";
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

// ========== INITIALIZER ==========
createGrid(gridSize);
