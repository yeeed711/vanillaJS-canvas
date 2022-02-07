const hellos = document.getElementById("hello")
// 단 하나의 값만 반환한다. 


const hellos = document.getElementsByClassName("hello");
// getElementByClassName 는 결과값을 배열로 반환한다.
// 같은 classname을 갖고있는 모든 값을 반환한다.


const hellos = document.querySelector("#hello");
// 결과 값을 단 하나의 element로 반환한다.
// CSS selector 방식으로 검색할 수 있다.


const hellos = document.querySelectorAll(".hello");
// 위의 셀렉터는 첫번째 결과 값만 반환하므로 
// 같은 classname을 갖고있는 모든 값을 받고 싶다면 querySelectorAll을 사용한다.



const hellos = document.getElementById("hello")
const hellos = document.querySelector("#hello");
// 이 두개의 함수는 같은 일을 수행한다.
// 하지만 전자는 하위요소를 다 가져오지 못하므로 후자를 더 많이 사용할 것이다.