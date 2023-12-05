window.onload = function(){

    function updateTime(){
        const hora = document.getElementById("hora");
        hora.innerHTML =(new Date().getHours());
        hora.innerHTML =hora.innerHTML.padStart(2, "0");

        const min = document.getElementById("min");
        min.innerHTML =(new Date().getMinutes());
        min.innerHTML =min.innerHTML.padStart(2, "0");

        const sec = document.getElementById("sec");
        sec.innerHTML =(new Date().getSeconds());
        sec.innerHTML =sec.innerHTML.padStart(2, "0");
    }

    setInterval(updateTime, 1000);
}