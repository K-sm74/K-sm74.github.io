let carender = new Date();

let date = carender.toLocaleDateString();
let info = "INFORMATION　現在作成中 （今日は　" + date　+ "です。）";

document.getElementById("inf").textContent = info;


console.log(carender.toLocaleString());
console.log(carender.toLocaleDateString());
console.log(carender.toLocaleTimeString());

