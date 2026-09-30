function pad(number) {
    return String(number).padStart(2, "0");
}

function updateClock(){
    const d = new Date();
    
    const hours = pad(d.getHours()); //da bude 0 ispred za sva 3 
    const minutes = pad(d.getMinutes()+1);
    const seconds = pad(d.getSeconds());

    const day = d.getDate();
    const month = d.getMonth()+1; //ide 0-11
    const year = d.getFullYear();


    document.getElementById("Hour").textContent = hours;
    document.getElementById("Minute").textContent = minutes;
    document.getElementById("Second").textContent = seconds;
    document.getElementById("Date").textContent = day + "." + month + "." + year;
}
updateClock();
setInterval(updateClock, 1000);