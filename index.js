let carender = new Date();

let date = carender.toLocaleDateString();
let info = "Today is " + date;

document.getElementById("inf").textContent = info;


console.log(carender.toLocaleString());
console.log(carender.toLocaleDateString());
console.log(carender.toLocaleTimeString());

