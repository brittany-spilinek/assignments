//Variables//
const add = document.getElementById('addBtn');
const sub = document.getElementById('subBtn');
const mult = document.getElementById('multBtn');
const div = document.createElement('div')


add.addEventListener("click", () => {  
    let num1 = parseInt(document.getElementById('addNum1').value)
    let num2 = parseInt(document.getElementById('addNum2').value)

    function sum (num1, num2){
        return num1 + num2
    } 
    div.textContent = sum(num1, num2)
    document.getElementById('add').appendChild(div)
})


sub.addEventListener("click", () => {  
    const num1 = parseInt(document.getElementById('subNum1').value)
    const num2 = parseInt(document.getElementById('subNum2').value)
    
    function subtract (num1, num2){
        return num1 - num2
    } 
    div.textContent = subtract(num1, num2)
    document.getElementById('sub').appendChild(div)
})

mult.addEventListener("click", () => {  
    const num1 = parseInt(document.getElementById('multNum1').value)
    const num2 = parseInt(document.getElementById('multNum2').value)
    
    function multiply (num1, num2){
        return num1 * num2
    } 
    div.textContent = multiply(num1, num2)
    document.getElementById('mult').appendChild(div)
})

