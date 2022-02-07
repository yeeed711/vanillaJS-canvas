const hellos = document.querySelector("div.hello:first-child h1");

function handleHellosClick() {
 hellos.style.color = "blue";  
}

function handleMouseEnter() {
hellos.innerText = "Mouse is here!";
}


function handleMouseLeave() {
 hellos.innerText = "Mouse is Gone!";
}


function hendleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}


hellos.addEventListener("click", handleHellosClick);
hellos.addEventListener("mouseenter", handleMouseEnter);
hellos.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", hendleWindowResize);

// document에서 body, head, title 은 중요해서 언제든 가져올 수 있지만
// div, h1 등 element 들은 querySelector, getElementById 등으로 찾아야한다. 