const minNum = 1
const maxNum = 100
const answer = Math.floor(Math.random()*(maxNum-minNum+1)+minNum)

let attempts = 0
let guess
let running = true

while(running){

    guess = window.prompt(`Enter a number between ${minNum} - ${maxNum}`)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("Please enter a valid number!");
    }
    else if(guess > maxNum || guess < minNum){
        window.alert("Please enter a valid number!");
    }
    else{
        attempts++
        if(guess>answer){
            window.alert("TOO HIGH Try Again!")
        }
        else if(guess<answer){
            window.alert("TOO LOW Try Again!")
        }
        else{
            window.alert(`Congrats! you took ${attempts} attempts`)
            running = false
        }
    }
}