'use strict'
document.getElementById("principal").focus();
let select = '';
for (let i=1;i<=100;i++){
    select += '<option val=' + i + '>' + i + '</option>';
}
document.getElementById("years").innerHTML = select;

const computeBtn = document.getElementById("compute-btn");

computeBtn.addEventListener("click",compute);
function compute() {

const amount = document.getElementById("principal").value;
const interest_rate = document.getElementById("rate").value;
let years = Number(document.getElementById("years").value);

console.log(amount);
console.log(interest_rate);
console.log(years);

if(!amount){
    alert("Enter amount first");
    return;
}
if(amount<=0){
    alert("Enter Positibve amount");
    document.getElementById("principal").value = '';
    document.getElementById("principal").focus();

 return;
}
const ans= (amount* interest_rate * years)/100;
const current_year = new Date();
years +=  current_year.getFullYear();
document.getElementById('result').innerHTML = `if you deposit <span style="color: orange;" >${amount} , <br> at an interest rate of ${interest_rate}.<br>You will receive an amount of ${ans},<br>in the year ${years}<br>`;
}




// function DisplayChange(newvalue) {
//     document.getElementById(
//       "value").innerHTML = newvalue;
// }