const hrs = document.getElementById("Hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const day = document.getElementById("day");
const date = document.getElementById("theDate");

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


setInterval(() => {

    const main = new Date();

    hrs.innerHTML = main.getHours() - 12;
    min.innerHTML = main.getMinutes();
    sec.innerHTML = main.getSeconds();
    day.innerHTML = daysOfWeek[main.getDay()];

    date.innerText = `${months[main.getMonth()]} : ${main.getDate()} : ${main.getFullYear() - 2000}`;

}, 1000);