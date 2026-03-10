
let container = document.getElementById('container')
let love = document.querySelector('i')
let frnd = document.getElementById('fd')
let btn = document.getElementById('btn')

container.addEventListener('dblclick',function(){
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.9;
    love.style.color = 'red'
    setTimeout(function(){
        love.style.opacity = 0;
    }, 1000)    
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)";
    }, 2000)    
})

let check = 0;
btn.addEventListener('click',function(){
    if(check == 0){
        frnd.innerHTML = 'Friend'
        btn.innerHTML = 'Remove Friend'
        frnd.style.color = 'green'
        check = 1
    }
    else{
        frnd.innerHTML = 'Stranger'
        btn.innerHTML = 'Add Friend'
        frnd.style.color = 'red'
        check = 0
    }
})