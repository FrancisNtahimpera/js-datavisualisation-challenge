

var table1 = document.querySelector("#table1");
var tr1 = table1.getElementsByTagName("tr")[0];
var th1 = tr1 .getElementsByTagName("th").innertext;
console.log(th1)

for (i = 2; i <= th1.lenght; i++) {
  alert(th1[i]);
}
var tache = document.querySelector('#table1  th ~ th'); console.log(tache);