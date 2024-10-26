const bodyEl = document.querySelector("body");
const h2 = document.createElement("h2");
h2.innerHTML = "<h2> Move Mouse To Play!</h2>";
bodyEl.append(h2);

h2.addEventListener("click", ()=>{
    h2.innerHTML = "<h2> Hello World !</h2>"
    
})

bodyEl.addEventListener("mousemove", (e)=>{
    const xPosition = e.offsetX;
    const yPosition = e.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPosition + "px";
    spanEl.style.top = yPosition + "px";
    const size = Math.random()*50;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    }, 2000)
})
