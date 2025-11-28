function generate() {
    let letter = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[(Math.floor(Math.random() * 16))]

    }
    return color
}

document.querySelectorAll(".box").forEach((box)=>{
    box.addEventListener('click',()=>{
        box.style.backgroundColor =generate()
        box.innerHTML=generate()
    })
})
