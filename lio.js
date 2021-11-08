// -------------------------------------- Graph 3 -----------------------------------------------------

// creation des tableux pour accueillir les valeurs dynamique
var valeurs = [];
var axisx = [];
var i = 0;

// création de l'espace graphe ' canvas'
var canvas3 = document.createElement("canvas");
var firstHeading = document.querySelector("#firstHeading");
canvas3.setAttribute("id", "graph3");
canvas3.setAttribute("width", "auto");
canvas3.setAttribute("height", "150");
firstHeading.after(canvas3);

// recuperation du tag et insertion du graphe en chart.js
const ctx3 = document.getElementById("graph3");
const myChart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "Statistiques de crimes par secondes",
        data: valeurs,
        borderColor: ["rgba(39, 192, 194, 1)"],
        pointBackgroundColor: [
          "rgba(100,50,90,1)",
          "rgba(241, 196, 15,1)",
          "rgba(39, 174, 96,1)",
          "rgba(231, 76, 60,1)",
          "rgba(112, 123, 124,1)",
          "rgba(91, 44, 111,1)",
          "rgba(33, 47, 61,1)",
          "rgba(93, 173, 226,1)",
          "rgba(229, 152, 102,1)",
          "rgba(195, 155, 211,1)",
        ],
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        suggestedMin: -15,
        suggestedMax: 30,
      },
    },
  },
});

// ----------------------------- table 3 https://canvasjs.com/services/data/datapoints.php ------------------------------------
function test() {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://canvasjs.com/services/data/datapoints.php", true);
  xhr.responseType = "json";
  xhr.send();

  // ----------------------------------- load, error, progress --------------------------------------
  var datarecup = [];
  var datarecup2 = [];
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log(`err ${xhr.status} : ${xhr.statusText}`);
    } else {
      // console.log(JSON.stringify(xhr.response));
      i++;
      // recupère mon 2eme elem de mon tableau
      datarecup = xhr.response.map((elem) => {
        return elem[1];
      });

      datarecup2 = xhr.response.map((elem) => {
        return elem[0];
      });

      // axisx.push(datarecup2);
      // if (i > 10) {
      //   myChart3.data.labels.shift();
      //   myChart3.update();
      // }
      // insertion des valeurs dynampique ds notre tableau
      valeurs.push(datarecup);
      myChart3.update(); // update constant des valeurdynamique
      // si notre index est plus grand que 10 alors update puto
      if (i > 10) {
        myChart3.data.datasets[0].data.shift();
      }
      myChart3.update();

      // console.log(datarecup2);
    }
  };

  xhr.onerror = function () {
    console.log("requ à échoué");
  };

  xhr.onprogress = function (event) {
    lengthComputable = Boolean;
    if (event.lengthComputable) {
      console.log(`${event.loaded} octets reçu /${event.total}`);
    }
  };
}
setInterval(test, 1000); // rafraichissement de la page
