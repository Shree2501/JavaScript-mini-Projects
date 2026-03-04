//color changer

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let interValid
const startChangingColor = function(){
    if(!interValid){
        interValid = setInterval(changeColor , 100);
    }
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
        document.body.style.color = randomColor();
}};

const stopChangingColor = function(){
    clearInterval(interValid)
    interValid = null
};

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)

