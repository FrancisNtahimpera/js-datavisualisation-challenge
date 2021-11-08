//
var referenceNode = document.getElementsByTagName("h4")[2];
var divGraph2 = document.createElement("canvas");
divGraph2.setAttribute("id", "graph2");
divGraph2.setAttribute("width", "200px");
divGraph2.setAttribute("height", "200px");

referenceNode.after(divGraph2);

var tab2 = document.getElementById("table2");

const nb_pays2 = 31;

var labelPays = [];
var homicide2007 = [];
var homicide2010 = [];
var couleur = [];

for (let i = 1; i < nb_pays2; i++) {
  let tab2_tr = tab2.getElementsByTagName("tr")[i];
  var tab2_td = tab2_tr.getElementsByTagName("td")[0];

  labelPays.push(tab2_td.innerHTML);
}

for (let i = 1; i < nb_pays2; i++) {
  let tab2_tr = tab2.getElementsByTagName("tr")[i];
  var tab2_td = tab2_tr.getElementsByTagName("td")[1];

  homicide2007.push(tab2_td.innerHTML);
}

for (let i = 1; i < nb_pays2; i++) {
  let tab2_tr = tab2.getElementsByTagName("tr")[i];
  var tab2_td = tab2_tr.getElementsByTagName("td")[2];

  homicide2010.push(tab2_td.innerHTML);
}

var ctx = document.getElementById("graph2").getContext("2d");

var data = {
  labels: labelPays,
  datasets: [
    {
      label: "2007",
      backgroundColor: "rgb(63, 183, 141)",
      data: homicide2007,
    },
    {
      label: "2010",
      backgroundColor: "rgb(215, 241, 113)",
      data: homicide2010,
    },
  ],
};

var options = {
  responsive: true,
};

var config = {
  type: "bar",
  data: data,
  options: options,
};

var graph2 = new Chart(ctx, config);
