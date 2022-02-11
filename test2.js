const body = document.querySelector("body");



function handleResize () {
  const width = window.innerWidth

  if  (width > 900){
    body.style.backgroundColor = "tomato";
  }
  
  else if (width <= 900 && width >= 600) {
    body.style.backgroundColor = "blue";
  }
  
  else if (width < 600){
    body.style.backgroundColor = "red";
  }
}

window.addEventListener("resize", handleResize);
