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
    count++; //increases everytiime when pressed
    counteLabel.textContent = count; //captures the countLabel and updates the new count
}

// decrease button

decreaseBtn.onclick = function () {
    count--; //decrease everytiime when pressed
    counteLabel.textContent = count; //captures the countLabel and updates the new count
}

// reset button 
resetBtn.onclick = function () {
    count = 0; // provided the value 0 because if we just leave count it will just show the current value and not reset them
    counteLabel.textContent = count; //captures the countLabel and updates the new count
}