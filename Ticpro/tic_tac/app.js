const boxes = document.querySelectorAll('.box');
const reset = document.querySelector('#reset');

const Message = document.querySelector(".Message");
const NewGame = document.querySelector("#NewGame");
const msg = document.querySelector("#msg");

let turnO = true
const winingpatrens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetbtn = () => {
    turnO = true;
    enablebox();
    Message.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("clicked");

        if(turnO){
        box.innerText = "O";
        turnO = false;
        } 
        else{
            box.innerText = "X";
            turnO = true; 
        }
        box.disabled = true;

        CheckWinner();
    });
});

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const Showwinner = (winner) => {
    msg.innerText = `Congrats winner is ${winner}`
    Message.classList.remove("hide");
    disablebox();
}

const CheckWinner = () => {
    for (let pattern of winingpatrens) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                Showwinner(val1);
            }
        }
    }
};

NewGame.addEventListener("click",reset)
reset.addEventListener("click",reset)