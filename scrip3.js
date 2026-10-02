let a,b,c,d,e;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=(a<=b) ? "sim" : "não";
e=(a>=c) ? "Verdadeiro" : "Falso";
saida.innerHTML=`d = ${d}<br>`;
saida.innerHTML+=`e = ${e}`;