// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];

// let turn = true;
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turn === true) {
//             box.innerText = "o";
//             turn = false;
//         } else {
//             box.innerText = "x"
//             turn = true;
//         }
//         box.disabled = true;

//         checkWinner();
//     });
// });

// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1Val = boxes[pattern[0]].innertext;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//             if (pos1Val === pos2Val && pos2Val === pos3Val) {
//                 console.log("winner");
//             }
//         }
//     }

// };




// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector(".reset-btn");
// let msgcontainer = document.querySelector(".msg-container");
// let message = document.querySelector(".msg");
// let newBtn = document.querySelector(".new-btn")

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];

// let turn = true;


// const resetGame = () => {
//     turn = true;
//     enabledBoxes();
//     msgcontainer.classList.add("hide");
// }
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turn === true) {
//             turn = false;
//             box.innerText = "x";
//             box.style.color = "red";
//         } else {
//             turn = true;
//             box.innerText = "o";
//             box.style.color = "pink";
//         }
//         box.disabled = true;

//         checkWinner();
//     })
// });

// let disabledBox = () => {
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// };
// let enabledBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = false;
//         box.innerText = "" ;
//     }
        
// };

// const showWinner = (winner) => {
//     message.innerHTML = `Congragulation winner is ${winner}`;
//     msgcontainer.classList.remove("hide");
//     disabledBox();
// };

// const checkWinner = () => {
//     for (let parent of winPatterns) {
//         let pos1Val = boxes[parent[0]].innerText;
//         let pos2Val = boxes[parent[1]].innerText;
//         let pos3Val = boxes[parent[2]].innerText;

//         if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//             if (pos1Val === pos2Val && pos2Val === pos3Val) {
//                 showWinner(pos1Val);
//             }
//         }
//     }
// };

// newBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);


let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector(".msg");
let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector(".new-btn");
let resetBtn = document.querySelector(".reset-btn");


const winPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];


let turnO = true;

let resetGame = () => {
    turnO = true;
    msgcontainer.classList.add("hide");
    enabledBoxes();

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true) {
         turnO = false;
         box.innerText = "O";
         box.style.color = "red";
        } else {
            turnO = true;
            box.innerText = "X";
            box.style.color = "purple";
        }
        box.disabled = true;

        checkWinner();
    });
});

let disabledBox = () => {
         for (let box of boxes) {
             box.disabled = true;
        }
};

let enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
   }
};


const showWinner = (winner) => {
        message.innerHTML = `Congragulation winner is ${winner}`;
        msgcontainer.classList.remove("hide");
    };
const checkWinner = () => {
    for(let pattren of winPatterns) {

            let pos1Val = boxes[pattren[0]].innerText;
            let pos2Val = boxes[pattren[1]].innerText;
            let pos3Val = boxes[pattren[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    console.log("winner", pos1Val);
                    showWinner();
                    disabledBox();
                }
            }
         };
};


resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);