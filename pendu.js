let listemot = [
  "boire",
  "pendu",
  "twingo",
  "manger",
  "mot",
  "table",
  "terminal",
  "aide",
  "java",
  "pause",
  "sieste",
  "dormir",
  "github",
  "code",
];
let tentativesrestantes = 8;
let lettresentrées = [];
let dejalettre = document.querySelector(".lettresentrées");
let resultat = 0;
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let proposition = document.querySelector(".proposition");
let jouer = document.querySelector("#jouer");
let mot = document.querySelector(".mot");
let placemot = [];
let placelettre = [];
let tentative = document.querySelector(".tentative");
let result = document.querySelector(".result");
let result2 = document.querySelector(".result2");

//=========================================================================================
//=========================================================================================

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

jouer.addEventListener("click", function (e) {
  e.preventDefault();
  jouer.remove();
  for (i = 0; i < 26; i++) {
    let lettres = document.createElement("input");
    lettres.setAttribute("type", "checkbox");
    lettres.classList.add("lettres");
    lettres.setAttribute(
      "name",
      alphabet[document.querySelectorAll(".proposition .lettres").length]
    );
    lettres.id =
      alphabet[document.querySelectorAll(".proposition .lettres").length];
    proposition.appendChild(lettres);

    let label = document.createElement("label");
    label.setAttribute("for", lettres.id);
    label.textContent =
      alphabet[document.querySelectorAll(".proposition .lettres").length - 1];
    proposition.appendChild(label);
  }

  let alea = getRandomInt(listemot.length);
  let motsecret = listemot[alea];
  console.log(motsecret);

  for (j = 0; j < motsecret.length; j++) {
    placemot.push("_ ");
    mot.textContent = placemot.join("");
  }

  proposition.addEventListener("click", function (evt) {
    if (tentativesrestantes > 0) {
      tentativesrestantes--;
      let elem = evt.target;
      let propal = elem.name;
      console.log(propal);
      lettresentrées.push(propal);

      if (motsecret.includes(propal)) {
        for (k = 0; k < motsecret.length; k++) {
          if (motsecret[k] == propal) placelettre.push(k);
        }
        console.log(placelettre);
        tentativesrestantes++;
      }
      
      for (l = 0; l <= placelettre.length; l++) {
        let tempo = placelettre[l];
        placemot[tempo] = propal;
      }
      mot.textContent = placemot.join("");
      placelettre = [];
      dejalettre.textContent = `Lettres déjà entrées: ${lettresentrées}`;
      tentative.textContent = `Nombre de tentatives restantes: ${tentativesrestantes}`;
      if (placemot.join("") == motsecret) {
        result2.textContent = "Victoire";
        result2.style = "box-shadow: 0px 0px 34px 7px rgba(67, 46, 255, 0.48)";
        //setTimeout(location.reload(), 5000);
      }
    } else {
      result.textContent = "Défaite";
      result.style = "box-shadow: 0px 0px 34px 7px rgba(255,46,46,0.48)";
      //setTimeout(window.location.reload(), 5000);
    }
  });
});

//! ACTUALISER LA PAGE //
let actualiser = document.querySelector(".f5");
actualiser.addEventListener("click", function () {
  location.reload();
});

// ! //
// motsecret => le mot choisi aléatoirement que l'utilisateur doit trouver
// propal => lettre proposée par l'utilisateur
// placemot => affichage du mot sur la page
// placelettre => tableau contenant les occurences de la lettre proposée retrouvées dans le mot
// lettresentrées => liste des lettres déjà entrées
