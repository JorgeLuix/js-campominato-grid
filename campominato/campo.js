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
  let gameover = false;


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
  console.log("🚀 ~ file: campo.js:61 ~ play ~ bombs:", bombs)

  
  function checkWin() {
    const blueSquares = document.querySelectorAll(".sq-blue");
    const numBlueSquares = blueSquares.length;
    const numSafeSquares = squareNumbers - NUM_BOMBS;
    if (numBlueSquares === numSafeSquares) {
      alert("Complimenti, hai vinto!");
    }
  }
 

  for (let i = 1; i <= squareNumbers; i++) {
    const isBomb = bombs.indexOf(i) !== -1;
    const square = drawSquare(i, squareforRow, isBomb);
    square.addEventListener("click", function () {

      if (isBomb) {
        square.classList.add("sq-red");
        square.innerHTML = isBomb ? `<i class="fas fa-bomb"></i>` : index;
        gameover = true;
        alert("Game over!");
      } else {
        square.classList.add("sq-blue");
      }
      if (!gameover) {
        checkWin();
      }
     /* if (bombs.includes(i)) {
        console.log("🚀 ~ file: campo.js:67 ~ bombs:", bombs)
        square.classList.add("sq-red")
        square.innerHTML = isBomb ? `<i class="fas fa-bomb"></i>` : index;
        alert("GAME OVER!");
      } else {
        square.classList.add("sq-blue");
      }*/
    
    });

    playground.appendChild(square);
  }
 /* function checkWin() {
    const blueSquares = document.querySelectorAll(".sq-blue");
    const numBlueSquares = blueSquares.length;
    const numSafeSquares = squareNumbers - NUM_BOMBS;
    if (numBlueSquares === numSafeSquares) {
      alert("Congratulations, you won!");
    }
  }*/
}
