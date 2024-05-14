$(document).ready(function () {
  // Couluers du jeu disponible
  const couleurs = [
    "Rouge",
    "Bleu",
    "Vert",
    "Jaune",
    "Orange",
    "Violet",
    "Rose",
    "Marron",
    "Cyan",
    "Vert clair",
    "Noir",
    "Gris",
  ];
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Cyan",
    "Lime",
    "Black",
    "Gray",
  ];

  const optionsCouleur = couleurs.map(
    (couleur) =>
      `<option style="--option-bg-color: ${
        colors[couleurs.indexOf(couleur)]
      };" value="${couleur}">${couleur}</option>`
  );

  $("#player1-color, #player2-color").html(optionsCouleur.join(""));
  $("#start-game").hide();
  $("#substitute").show();

  // ra efa couleur samihafa de afaka manomboka
  function checkStart() {
    if ($("#player1-color").val() == $("#player2-color").val()) {
      $("#start-game").hide();
      $("#substitute").show();
    } else {
      $("#start-game").show();
      $("#substitute").hide();
    }
  }

  // mapipova en temps réel le couleur safidiana
  $("#player1-color").change(function () {
    $("#player1-section").css(
      "background-color",
      colors[couleurs.indexOf($(this).val())]
    );
    checkStart();
  });

  $("#player2-color").change(function () {
    $("#player2-section").css(
      "background-color",
      colors[couleurs.indexOf($(this).val())]
    );
    checkStart();
  });

  //************************************************* */
  //anomboka
  $("#start-game").click(function () {
    let nomJoueur1 = $("#player1-name").val();
    let nomJoueur2 = $("#player2-name").val();

    nomJoueur1 = nomJoueur1 == "" ? "Joueur 1" : nomJoueur1;
    nomJoueur2 = nomJoueur2 == "" ? "Joueur 2" : nomJoueur2;

    // definir le localstorage(données antsika)
    localStorage.setItem("nomJoueur1", nomJoueur1);
    localStorage.setItem("nomJoueur2", nomJoueur2);
    localStorage.setItem("couleurJoueur1", $("#player1-color").val());
    localStorage.setItem("couleurJoueur2", $("#player2-color").val());
    localStorage.setItem(
      "tempsReflexion",
      $("input[name='reflection-time']:checked").val()
    );
    localStorage.setItem(
      "dureeJeu",
      $("input[name='game-time']:checked").val()
    );
    localStorage.setItem(
      "size",
      $("input[name='notebook-size']:checked").val()
    );

    window.location.href = "game.html";
  });
});
