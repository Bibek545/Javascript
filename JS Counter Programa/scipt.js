//  counter program

 alert("welcome to my counter program")

//   capturing the element and declare
const increaseBtn = document.getElementById("increasebtn");
const resetBtn = document.getElementById("resetbtn");
const decreaseBtn = document.getElementById("decreasebtn");
const counteLabel = document.getElementById("countLabel");
let count = 0;

// increase button

increaseBtn.onclick = function () {
    count++;
    counteLabel.textContent = count;
}

// decrease button

decreaseBtn.onclick = function () {
    count--;
    counteLabel.textContent = count;
}

// reset button 
resetBtn.onclick = function () {
    count = 0;
    counteLabel.textContent = count;
}