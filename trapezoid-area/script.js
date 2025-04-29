// Average Calculator

// Event listener
document.getElementById("calc-Btn").addEventListener("click", calcAverage);

// event function
function calcAverage(){
    // input

let num1 = +document.getElementById("num1").value;
let num2 = +document.getElementById("num2").value;
let num3 = +document.getElementById("num3").value;

// process
let average = ((num1 + num2)/2 * num3) ;
let answer = average.toFixed(2);
// output
let menu = document.getElementById('units');
let choice = menu.value;

document.getElementById("ave-out").innerHTML = answer + choice;

document.getElementById("ave-out").style.border = `2px solid green`;
document.getElementById("image").src = "img/check-mark.png";

document.getElementById("num1").value ="";
document.getElementById("num2").value ="";
document.getElementById("num3").value ="";



}
