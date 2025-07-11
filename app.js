// ========== GLOBAL VARIABLES ==========

const gridSize = 8; // DEFAULT VALUE

// ========== DOM ELEMENTS ==========

const container = document.querySelector("#container");
const gridSizeBtn = document.querySelector("#grid-size-btn");

// ========== GRID CREATION ==========

// ========== FUNCTIONS ==========
function createGrid(size) {
  container.innerHTML = "";
  console.log("Creating grid");
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    // CELL STYLING
    cell.classList.add("grid-cell");
    cell.style.border = "1px solid #ddd";
    cell.style.borderRadius = "0.3rem";
    cell.style.minWidth = "4rem";
    cell.style.minHeight = "4rem";
    cell.style.margin = "0.2rem";
    cell.style.backgroundColor = "white";
    cell.style.transition = "background-color 0.2s ease-in-out";
    container.appendChild(cell);

    // HOVER STYLE
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "#333";
    });
    //   cell.addEventListener("mouseout", () => {
    //     cell.style.backgroundColor = "WHITE";
    //   });
    cell.addEventListener("click", () => {
      cell.style.backgroundColor = "white";
    });
  }
}

// ========== EVENT LISTENERS ==========
gridSizeBtn.addEventListener("click", () => {
  const size = Number(prompt("Enter the size for the grid (1 - 50)"));
  if (size >= 1 && size <= 50) {
    createGrid(size);
  } else {
    alert("Invalid size. Please enter a number between 1 and 100.");
  }
});

// ========== INITIALIZER ==========
createGrid(gridSize);