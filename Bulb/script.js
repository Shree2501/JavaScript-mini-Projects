
const bulb = document.getElementById("bulb")
const On = document.querySelector(".On")
const Off = document.querySelector(".Off")
const ChangeColor = document.querySelector(".ChangeColor")

On.addEventListener("click",function(){
    bulb.style.backgroundColor = "gold"
    document.body.style.backgroundColor = "white"
})

Off.addEventListener("click",function(){
    bulb.style.backgroundColor = "transparent"
    document.body.style.backgroundColor = ""
})

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    bulb.style.backgroundColor = color;
    document.body.style.backgroundColor = "white"
};

ChangeColor.addEventListener("click", randomColor)