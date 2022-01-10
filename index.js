let carender = new Date();

let weekdays = ["Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"];

let date = carender.toLocaleDateString();
let info = date;
let= week = weekdays[carender.getDay()];

document.getElementById("inf").textContent = info;
document.getElementById("week").textContent = week;

console.log(carender.toLocaleString());
console.log(carender.toLocaleDateString());
console.log(carender.toLocaleTimeString());

