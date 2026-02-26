// counter
const CountLabel = document.getElementById("CountLabel")
const increaseBtn = document.getElementById("increaseBtn")
const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
let count = 0

increaseBtn.onclick = function(){
    count++;
    CountLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    CountLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
}