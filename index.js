const bodyEl = document.querySelector("body");

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