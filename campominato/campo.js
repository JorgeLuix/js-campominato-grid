/*  `<div class="square">1</div>`  */

const levelForm = document.getElementById("levelForm");

levelForm.addEventListener("submit", play);

//funzione per disegnare quadratino//
function drawSquare(index, sidenumSquares) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = `calc(100% / ${sidenumSquares} )`;
  square.style.height = square.style.width;
  square.innerHTML = index;
  return square;
}
function getRndNumber(max) {
  return Math.floor(Math.random() * max);
}


function generateBombs(bombnum, numSquares) {
  const bombs = [];
  while (bombs.length <= bombnum -1) {
    const bomb = getRndNumber(numSquares);
    if (bombs.indexOf(bomb) === -1 && bomb !== 0) {
    bombs.push(bomb);

    }
  }
  return bombs;
}

function play(e) {
  e.preventDefault();
  const playground = document.getElementById("playground");
  playground.innerHTML = "";

  const NUM_BOMBS = 16;


  const level = document.getElementById("level").value;
 
  let squareNumbers;
  switch (level) {
    case "easy":
      squareNumbers = 100;
      break;
    case "medium":
      squareNumbers = 81;
      break;
    case "hard":
      squareNumbers = 49;
      break;
  }


  let squareforRow = Math.sqrt(squareNumbers);
  const bombs = generateBombs(NUM_BOMBS, squareNumbers);


  for (let i = 1; i <= squareNumbers; i++) {
    const square = drawSquare(i, squareforRow);
    square.addEventListener("click", function () {
      square.classList.add("sq-blue");
    
    });

    playground.appendChild(square);
  }
}
