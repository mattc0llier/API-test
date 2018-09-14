const parentNode = document.querySelector("main");
const loaderNode = document.querySelector(".loader");
const buttonNode = document.querySelector(".init-button");
const animation = document.createElement("img");

function displayDataOnPage(starWarsCharacters) {
  parentNode.removeChild(animation);
  const swArray = starWarsCharacters.results;
  const charKeys = Object.keys(swArray[0]);
  swArray.forEach(function(character) {
    charKeys.forEach(function(props) {
      const outputString = `<span class="prop">${props}</span> : ${character[props]}`;
      const className = props === "name" ? "character-name" : "character-other-props";
      createNode(outputString, className);
    });
  });
}

function displayErrorToUser(error) {
  createNode(error);
}

const loadAPI = function () {
  fetch("https://swapi.co/api/people/") // by default fetch makes a GET request
  .then(function(response) {
    return response.json();
  })
  .then(function(body) {
    displayDataOnPage(body);
  })
  .catch(function(error) {
    displayErrorToUser(error);
  });
}

/* 
///////////////////////////////////
*/

const createNode = function (string, className="main") {
  const node = document.createElement("p");
  node.innerHTML = string;
  node.className = className;
  parentNode.appendChild(node);
}

function initLoader() {
  animation.className = "loading-animation";
  parentNode.appendChild(animation);
}

buttonNode.addEventListener("click", function (event) {
  initLoader();
  loadAPI();
});