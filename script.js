// script.js

function getJoke() {
  // Make a GET request to the joke API
  fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    .then((response) => response.json())
    .then((data) => {
      // Display the joke
      console.log(data.joke);

      // Add the joke to the title
      document.getElementById("joke-line").innerText = data.joke;
      document.getElementById("submit-button").innerText="Try another";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
