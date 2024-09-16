"use strict";

const genreForm = document.getElementById("genreForm");

window.onload = onload();

function onload() {
  fetch("http://localhost:8080/genres")
    .then((res) => res.json())
    .then((res) => renderGenres(res));
}

function renderGenres(genres) {
  let genreMenu = document.getElementById("genreMenu");
  for (let i = 0; i < genres.length; i++) {
    genreMenu.appendChild(createGenre(genres[i].Name));
  }
}

function createGenre(genre) {
  const newGenre = document.createElement("option");
  newGenre.setAttribute("value", genre);
  newGenre.innerText = genre;

  return newGenre;
}

function addGenre(event) {
  event.preventDefault();
  const newGenre = event.target.querySelector("[prop=genre]").value;
  const result = document.getElementById("result");
  const testText = /^[A-Za-z]+$/;

  if (testText.test(newGenre)) {
    fetch("http://localhost:8080/genre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name: newGenre }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          if (data.error) {
            result.innerText = "Error: " + data.error;
            result.classList.add("bg-danger");
          } else {
            result.innerText = "Genre added successfully!";
            result.classList.add("bg-succes");
            const genreMenu = document.getElementById("genreMenu");
            genreMenu.appendChild(createGenre(newGenre));
          }
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        result.innerText = "Error: " + error.message;
      });
    console.log("form envoyé");
  } else {
    result.innerText = "Invalid genre name. Only letters are allowed.";
    result.classList.add("bg-danger");
  }
}
