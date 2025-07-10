// ========== GLOBAL VARIABLES ==========

const gridSize = 8;

// ========== DOM ELEMENTS ==========

const container = document.querySelector("#container");

// ========== GRID CREATION ==========

for (let i = 0; i < gridSize * gridSize; i++) {
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