const clock = document.querySelector(".clock");

function dDay() {
    const today = new Date().getTime();
    const christmas = new Date(2022, 11, 25).getTime();
    const leftDay = (christmas - today)/1000;
    //24hours, 60minutes, 60seconds, 1000milliseconds
    const day = Math.floor(leftDay/(60*60*24));
    const hour = Math.floor(leftDay/(60*60))%24;
    const minute = Math.floor(leftDay/60) % 60; 
    const second = Math.floor(leftDay) % 60;

    const dDayText = `${day}D ${hour}h ${minute}m ${second}s`;
    
    clock.innerText = dDayText;


}

dDay();
setInterval(dDay, 1000);



  