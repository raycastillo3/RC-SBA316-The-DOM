const bodyEl = document.querySelector("body");
const messages = [
    "You are losing!",
    "Great Job!",
    "Now you are winning",
    "Keep going!",
    "You are about to get invaded!"
]
const messagesToDisplay = document.getElementById("messages"); 

for (let i =0; i < messages.length; i++){
    const randomIdx = Math.floor(Math.random()*messages.length);
    const message = messages[randomIdx];
    
    //was trying to display different messages 
    // const messageEl = document.createElement("p");
    // messageEl.textContent = message

    // messagesToDisplay.appendChild(messageEl)
}


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
