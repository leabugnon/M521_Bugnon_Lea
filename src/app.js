//imports necessaires
import Answer from "./modules/Answer.js";
import Game from "./modules/Game.js";
//import { generateInterface } from "./modules/Answer.js";
//selecteurs
const main = document.querySelector("main");
//url de l'api
const url = `https://progweb-wwwordle-api.onrender.com/guess`;

//requete api
const apiRequest = async (url, body) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data.message);
  console.log(data.status);
  let feedback = data.feedback;
  console.log(feedback);
  color(feedback);
  return data;
};
function color(feedback) {
  for (let index = 0; index < feedback.length; index++) {
    document
      .querySelector(`#row-0--${index}`)
      .classList.add(feedback[index].status);
  }
}

//instancier answer
//const answer = new Answer(main);
const game = new Game(3, main);
//enlvever inert pour activer le formulaire
function activateForm() {
  document.querySelector("form").removeAttribute("inert");
}
//met le focus sur la première case (ca prend un petit instant wuand on actualise)
function focusFirstElement() {
  document.querySelector("#row-0--0").focus();
}

//appelle les fonctions d'activation et de focus
activateForm();
focusFirstElement();

const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form)); // Récupère les données du formulaire.
  console.log(formData);
  let mot = "";

  for (const [key, value] of Object.entries(formData)) {
    if (isAlphaNumericKey(value)) {
      mot = mot + value;
    }
  }
  console.log(mot);
  const body = { guess: mot };
  apiRequest(url, body);

  //appelle les fonctions d'activation et de focus pour le prochain formulaire (marche pas car utilise le premier element form) pas eu le temps
  //activateForm();
  //focusFirstElement();
});

//pas eu le temps de faire ca
function isAlphaNumericKey(lettre) {
  return /^([\x30-\x39]|[\x61-\x7a])$/i.test(lettre);
}
