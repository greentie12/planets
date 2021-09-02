const links = document.querySelectorAll(".planet-tab");

for (let x = 0; x < links.length; x++) {
  links[x].addEventListener("click", function (e) {
    planetNav.classList.add("hide");
    main.classList.remove("hide");
    retrievePlanets(planetInfo, x);
  });
}
