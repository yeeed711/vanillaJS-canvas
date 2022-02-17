const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];  //object


const body = document.querySelector("body");
const btn = document.querySelector("button");

//색 두가지 섞어서 레디언트색 만들기
// CSS -->  background: linear-gradient(color1, color2);

//버튼 누르면 배경색 변하는 함수 ...
function handleButtonClick() {
    //컬러 랜덤으로 1가지씩 뽑기. 2개
    const colors1 = Math.floor(Math.random()*colors.length); //number
    const colors2 = Math.floor(Math.random()*colors.length); //number
    body.style.background = `linear-Gradient(${colors[colors1]}, ${colors[colors2]})`; // string type!
}


//버튼 누름감지 이벤트
btn.addEventListener("click", handleButtonClick);
