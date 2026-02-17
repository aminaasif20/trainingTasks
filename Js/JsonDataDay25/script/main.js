document.addEventListener("DOMContentLoaded", () => {
    const Populationsubtitle = document.querySelector(".subtitle");
    const languagessubtitle = document.querySelector(".feedback");
    const graphTitle = document.querySelector(".graph-title");
    const stat = document.getElementById("stat");
    const buttons = document.querySelectorAll(".graph-buttons button");

    // If required graph elements are not present on the page, exit silently.
    if (!stat || buttons.length < 2) return;

    showPopulation();

    buttons[0].addEventListener("click", showPopulation);
    buttons[1].addEventListener("click", showLanguages);

    function showPopulation() {
        stat.innerHTML = "";
        graphTitle.textContent = "Population Growth Over Years";
        Populationsubtitle.textContent = "";
        languagessubtitle.textContent = "";

        const sortedData = countries_data
            .sort((a, b) => b.population - a.population)
            .slice(0, 15);
        const max = sortedData[0].population;
        sortedData.forEach(country => {
            const width = (country.population / max) * 100;
            stat.innerHTML += `<div class="bg-gray-200  flex items-center">
            <span class="font-semibold p-4">${country.name}</span>
            <div class="bg-orange-500 mt-2 h-6 rounded" style="width:${width}%">
                <span class="text-white  pl-2">${country.population.toLocaleString()}</span>
            </div>
        </div>`;
        });
    }

    function showLanguages() {
        stat.innerHTML = "";
        graphTitle.textContent = "Languages Spoken";
        Populationsubtitle.textContent = "";
        languagessubtitle.textContent = "";
        const languageCount = {};

        countries_data.forEach(country => {
            (country.languages || []).forEach(lang => {
                languageCount[lang] = (languageCount[lang] || 0) + 1;
            });
        });

        const sortedLanguages = Object.entries(languageCount).sort((a, b) => (b[1] - a[1])).slice(0, 10);
        const max = sortedLanguages.length ? sortedLanguages[0][1] : 1;
        sortedLanguages.forEach(([language, count]) => {
            const width = (count / max) * 100;

            stat.innerHTML += `
            <div class="bg-gray-200  flex items-center">
              <span class="font-semibold p-4">${language}</span>
              <div class="bg-orange-500 h-6 mt-2 rounded" style="width:${width}%">
                <span class="text-white pl-2">${count}</span>
              </div>
            </div>
          `;
        });
    }

    // expose functions so other pages can trigger the graphs when available
    window.showPopulation = showPopulation;
    window.showLanguages = showLanguages;
});
