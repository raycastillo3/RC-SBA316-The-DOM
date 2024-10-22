const bodyEl = document.querySelector("body");
const h1 = document.createElement("h1");
h1.innerHTML = "<h1> Move Mouse To Play!</h1>";
h1.style.color = "white";
// Aligns h1 to the middle: 
h1.style.position = "absolute";
h1.style.top = "50%";
h1.style.left = "50%"; 
h1.style.transform = "translate(-50%, -250%)";
bodyEl.append(h1);

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
