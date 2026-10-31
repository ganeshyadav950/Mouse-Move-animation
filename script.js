const bodyElm = document.querySelector("body");

bodyElm.addEventListener("mousemove" , (event)=>{
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spenElm = document.createElement("span");
  spenElm.style.left = xPos + "px";
  spenElm.style.top = yPos + "px";
  const size = Math.random()*100 ;
  spenElm.style.width = size + "px";
  spenElm.style.height = size + "px";
  bodyElm.appendChild(spenElm);

  setTimeout(() => {
    spenElm.remove();
  }, 3000);

});