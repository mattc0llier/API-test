const parentNode = document.querySelector("main");

function displayDataOnPage(starWarsCharacters) {
  // const swObject = starWarsCharacters.results;
  // swObject.forEach(function(n) {
  //   console.log(n);
  // });
  // const keys = Object.keys(swObject);
  // const charKeys = Object.keys(swObject[0]);
  // keys.forEach(function(character) {
  //   charKeys.forEach(function(props) {
  //     // console.log();
  //     const node = document.createElement("p");
  //     node.innerHTML = `<b>${props}</b> : ${swObject[character][props]}`;
  //     parentNode.appendChild(node);
  //   });
  // });
  const swObject = starWarsCharacters.results;
  const charKeys = Object.keys(swObject[0]);
  swObject.forEach(function(character) {
    charKeys.forEach(function(props) {
      console.log(props);
      const node = document.createElement("p");
      node.innerHTML = `<b>${props}</b> : ${swObject[character][props]}`;
      parentNode.appendChild(node);
    });
  });
}

function displayErrorToUser() {}

fetch("https://swapi.co/api/people/") // by default fetch makes a GET request
  .then(function(response) {
    return response.json();
  })
  .then(function(body) {
    //console.log(body);
    displayDataOnPage(body);
  })
  .catch(function(error) {
    displayErrorToUser("Server failed to return data");
  });
