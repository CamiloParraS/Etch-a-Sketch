// ========== GLOBAL VARIABLES ==========

const gridSize = 8;

// ========== DOM ELEMENTS ==========

const container = document.querySelector("#container");

// ========== GRID CREATION ==========

for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement("div");
  // GRID STYLING
  cell.classList.add("grid-cell");
  cell.style.border = "1px solid #eee";
  cell.style.minWidth = "40px";
  cell.style.minHeight = "40px";
  cell.style.margin = "1px";
  cell.style.backgroundColor = "white";
  container.appendChild(cell);
}

