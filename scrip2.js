let a,b,c,d,e,f;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=!(a>=b);//T
saida.innerHTML=`d = ${d}`;//T
e=(a<=b) && !(c<b); 
saida.innerHTML=`e = ${e}`;// T
f=(a<=b) || (c<b);
saida.innerHTML=`f = ${f}`;// T

