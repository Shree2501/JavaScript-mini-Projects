
const arr = [
    {
        dp:"https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1604771968376-e6f1f321be5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1673758910861-4324e19876cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
        story:"https://plus.unsplash.com/premium_photo-1664267832256-176e55ccafd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1603480395003-2b5bc9efba56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        story:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1642836421686-d0365124b4cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww"
    }
]

let clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img src="${elem.dp}" id="${idx}" alt="" ></div>`
})

let stories = document.querySelector("#stories")
let fullscreen = document.getElementById('full-screen')
stories.innerHTML = clutter

stories.addEventListener('click', function(dets){
    fullscreen.style.display = "block"
    fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        fullscreen.style.display = "none"
    },1000)
})

