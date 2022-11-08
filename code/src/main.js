import {  getSecondsLeftOfYear, getTimeString, getDaysUntilXmas} from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const timeChristmas = document.getElementById("xmas");

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  timeContainer.innerText = getTimeString(now);
  timeChristmas.innerText = getDaysUntilXmas(now);
}

render();
setInterval(render, 1000);