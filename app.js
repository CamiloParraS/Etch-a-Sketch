// ========== GLOBAL VARIABLES ==========

const gridSize = 8;

// ========== DOM ELEMENTS ==========

const container = document.querySelector("#container");

// ========== GRID CREATION ==========

for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement("div");
  // GRID STYLING
  cell.classList.add("grid-cell");
  cell.style.border = "1px solid #ddd";
  cell.style.borderRadius = "2px";
  cell.style.minWidth = "4rem";
  cell.style.minHeight = "4rem";
  cell.style.margin = "0.2rem";
  cell.style.backgroundColor = "white";
  container.appendChild(cell);
}

