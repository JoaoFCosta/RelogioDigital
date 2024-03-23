let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(() => {
    let tempoAtual = new Date();
    
    hrs.innerHTML = tempoAtual.getHours();
    min.innerHTML = tempoAtual.getMinutes();
    sec.innerHTML = tempoAtual.getSeconds();

}, 1000)

