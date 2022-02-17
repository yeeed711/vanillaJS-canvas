const h1 = document.querySelector("div.hello:first-child h1");

function handleHellosClick() {
const clickedClass = "clicked";
if (h1.className === clickedClass) {
    h1.className = "";
} else {
    h1.className = clickedClass;
}
}

h1.addEventListener("click", handleHellosClick);


// document에서 body, head, title 은 중요해서 언제든 가져올 수 있지만
// div, h1 등 element 들은 querySelector, getElementById 등으로 찾아야한다. 