const burger = document.querySelector(".burger");
const path = document.querySelector(".path");

const planetNav = document.querySelector(".planet-nav");

const main = document.querySelector("main");

burger.addEventListener("click", function (e) {
  if (
    (e.target === burger || e.target === path) &&
    planetNav.classList.contains("hide")
  ) {
    planetNav.classList.remove("hide");
    main.classList.add("hide");
  } else if (
    (e.target === burger || e.target === path) &&
    !planetNav.classList.contains("hide")
  ) {
    planetNav.classList.add("hide");
    main.classList.remove("hide");
  }
});
