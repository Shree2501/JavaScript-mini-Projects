
const textBox = document.getElementById("textBox")
const toFarhenheit = document.getElementById("toFarhenheit")
const toCelcius = document.getElementById("toCelcius")
const result = document.getElementById("result")
let temp;

function convert(){
    if(toFarhenheit.checked){
        temp = Number(textBox.value)
        temp = temp * 9/5 + 32
        result.textContent = temp.toFixed(1) + " ° Fahrenheit"
    }
    else if(toCelcius.checked){
        temp = Number(textBox.value)
        temp = (temp - 32) * 5/9
        result.textContent = temp.toFixed(1) + " ° Celcius"
    }
    else{
        result.textContent="Please select a Unit!"
    }
}