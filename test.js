// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  enter: function () {
    title.style.color = colors[0],
    title.innerText = "The mouse is here!"
  },
  leaves: function () {
    title.style.color = colors[1],
    title.innerText = "The mouse is gone!"
  },
  resize: function () {
    title.style.color = colors[2],
    title.innerText = "You just resize!"
  },
  rightClick: function () {
    title.style.color = colors[4]
  }
};


const title = document.querySelector("h2");

title.addEventListener("mouseenter", superEventHandler.enter);
title.addEventListener("mouseleave", superEventHandler.leaves);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);

