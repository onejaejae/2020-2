const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");

 function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minuite = date.getMinutes();
    const second = date.getSeconds();

    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${minuite < 10 ? `0${minuite}` : minuite}:${ second < 10 ? `0${second}` : second}`;
 }
 function init(){
        getTime();
        setInterval(getTime,1000); 
 }
 init(); 