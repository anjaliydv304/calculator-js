let num1= 10
let num2 = 5

document.getElementById("num1").textContent=num1
document.getElementById("num2").textContent=num2

let result=document.getElementById("result")

function add(){
    let ans= num1+num2
    result.textContent="Ans:"+ ans
}

function subtract(){
    let ans= num1-num2
    result.textContent="Ans:"+ ans
}

function multiply(){
    let ans= num1*num2
    result.textContent="Ans:"+ans
}
function divide(){
    let ans= num1/num2
    result.textContent="Ans:"+ans
}