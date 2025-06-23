let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let winner = document.querySelector(".winner");
let p = document.querySelector("#win")

console.log(boxes);

let currentPlayerX = true;

let winPtr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.innerText === "") {
      if (currentPlayerX) {
        box.innerText = "X";
        resetBtn.innerText = "Reset Game";
        currentPlayerX = false;
      } else {
        box.innerText = "O";
        currentPlayerX = true;
      }
    }
    checkWinner();
  });
});

const gameOver = () => {
  for (box of boxes) {
    box.style.pointerEvents = "none";
    // box.disabled = true;
  }
};

const showWinner = (msg) => {
  winner.innerText = `The Winner is ${msg}`;
  gameOver();
};



function checkWinner() {
  for (ptr of winPtr) {
    let val1 = boxes[ptr[0]].innerText;
    let val2 = boxes[ptr[1]].innerText;
    let val3 = boxes[ptr[2]].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      p.classList.remove("hide")
      showWinner(val1);
      resetBtn.innerText = "New Game";
      return;
    }
  }

  let isDraw = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      isDraw = false;
    }
  });

  if (isDraw) {
    p.classList.remove("hide")
    winner.innerText = "It's a Draw!";
    resetBtn.innerText = "New Game";
    gameOver();
    
  }
}

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    // box.disabled = false;
    box.style.pointerEvents = "auto";
  });

  winner.innerText = "";
  currentPlayerX = true;
  p.classList.add("hide");
});
