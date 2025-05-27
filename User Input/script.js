// using window prompts
// let username;
// username = window.prompt("What is your name?")
// console.log(username)

let username;

document.getElementById("mybtn").onclick = function() {
   username = document.getElementById("name").value;
// console.log(username)
document.getElementById("myh1").textContent = `Hello ${username}`;
};