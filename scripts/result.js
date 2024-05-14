document.addEventListener("DOMContentLoaded", function () {
  // alaina amn localstorage ny données
  let score1 = localStorage.getItem("score1");
  let score2 = localStorage.getItem("score2");

  score1 = score1 == null ? 0 : score1;
  score2 = score2 == null ? 0 : score2;

  const winner =
    score1 > score2
      ? localStorage.getItem("nomJoueur1")
      : score1 == score2
      ? "Partie Nulle"
      : localStorage.getItem("nomJoueur2");

  console.log(score1 + " " + score2);

  const winnerElement = document.getElementById("winner");
  const scoreElement = document.getElementById("score");

  // Soratana eo amn page
  winnerElement.textContent = winner;
  scoreElement.textContent = score1 + " - " + score2;

  // bouton isan-karazany
  const quitterButton = document.getElementById("quitter-button");

  quitterButton.addEventListener("click", function () {
    window.location.href = "../index.html";
  });

  const finishButton = document.getElementById("finish-button");

  finishButton.addEventListener("click", function () {
    window.location.href = "game.html";
  });

  // videna ny base de données kely
  localStorage.removeItem("score1");
  localStorage.removeItem("score2");
});
