const planetContainer = document.querySelector(".planet-container");
const infoTab = document.querySelector(".info-tab");

const planetInfo = "../data.json";

retrievePlanets(planetInfo);

const appendPlanet = (planet, index) => {
  planetArr = planet[index];

  const { name, radius, revolution, rotation, temperature } = planetArr;
  const planetImage = planetArr.images.planet;
  const overviewContent = planetArr.overview.content;
  const overviewSource = planetArr.overview.source;
  const structureContent = planetArr.structure.content;
  const structureSource = planetArr.structure.source;
  const surfaceContent = planetArr.geology.content;
  const surfaceSource = planetArr.geology.source;

  const lowercaseName = name.toLowerCase();

  infoTab.insertAdjacentHTML(
    "beforeend",
    `
	<li class="${lowercaseName}-current">Overview</li>
	<li>Structure</li>
	<li>Surface</li>
	`
  );

  planetContainer.insertAdjacentHTML(
    "beforeend",
    `
	<img
	src="${planetImage}"
	alt="Mercury"
	class="planet-img"
  	/>
  	<h2 class="planet-name">${name}</h2>

	
 	<div class="overview">
		<p>
		${overviewContent}
		</p>
		<p class="source">
		Source :
		<a href="${overviewSource}"
		target="_blank">Wikipedia<i class="fas fa-external-link-square-alt"></i> </a>
		</p>
  	</div>

 	<div class="structure">
		<p>
		${structureContent}
		</p>

		<p class="source">
		Source :
		<a href="${structureSource}"
		target="_blank">Wikipedia</a>
		</p>
  	</div>

  	<div class="surface">
		<p>
		${surfaceContent}
		</p>
		<p class="source">
		Source :
		<a href="${surfaceSource}"
		target="_blank">Wikipedia</a
		>
		</p>
  	</div>
	

  	<div class="statistics">
		<div class="stat">
		<p class="stat-desc">Rotation Time</p>
		<h3 class="stat-answer rot">${rotation}</h3>
		</div>
		<div class="stat">
		<p class="stat-desc">Revolution Time</p>
		<h3 class="stat-answer rev">${revolution}</h3>
		</div>
		<div class="stat">
		<p class="stat-desc">Radius</p>
		<h3 class="stat-answer rad">${radius}</h3>
		</div>
		<div class="stat">
		<p class="stat-desc">Average Temp.</p>
		<h3 class="stat-answer avg">${temperature}</h3>
		</div>
  	</div>
	`
  );
};

const tabUpdate = (name) => {
  const overview = document.querySelector(".overview");
  const structure = document.querySelector(".structure");
  const surface = document.querySelector(".surface");
  const infoLi = document.querySelectorAll(".info-tab li");
  const planetName = name.toLowerCase();

  infoLi.forEach((li) => {
    li.addEventListener("click", function (e) {
      for (let x = 0; x < infoLi.length; x++) {
        infoLi[x].classList.remove(`${planetName}-current`);
      }
      if (e.target.textContent.toLowerCase() === "structure") {
        structure.style.display = "block";
        e.target.classList.add(`${planetName}-current`);
        overview.style.display = "none";
        surface.style.display = "none";
      } else if (e.target.textContent.toLowerCase() === "surface") {
        structure.style.display = "none";
        overview.style.display = "none";
        surface.style.display = "block";
        e.target.classList.add(`${planetName}-current`);
      } else {
        structure.style.display = "none";
        overview.style.display = "block";
        e.target.classList.add(`${planetName}-current`);
        surface.style.display = "none";
      }
    });
  });
};

async function retrievePlanets(file) {
  const response = await fetch(file);
  const planetData = await response.json();
  appendPlanet(planetData, 0);
}
