const name=document.getElementById("byName");
const capital=document.getElementById("byCapital");
const pop=document.getElementById("byPopulation");

const countriesContainer=document.getElementById("Container");
const search=document.getElementById("search");

let allCountries = countries;
let displayedCountries = countries;
let sortOrder = "asc";

search.addEventListener("click",()=>{
    const v=search.value.toLowerCase();
    displayedCountries = allCountries.filter(c=>{
        return c.name.toLowerCase().includes(v);
    });
    sortOrder="asc";
    byName(displayedCountries);
    showPopulation();
})
function byName(list){
    countriesContainer.innerHTML = "";
    list.forEach(c => {
        const card=document.createElement("div");
        card.className="bg-white rounded-lg shadow cursor-pointer p-4";
        card.innerHTML=`
        <img src="${c.flag}" class="w-full h-32 object-cover mb-4 rounded">
        <h3 class="text-xl font-semibold mb-2">${c.name}</h3>
        <p class="text-gray-700 mb-4">Capital: ${c.capital}</p>
        <p class="text-gray-700 mb-4">Population: ${c.population}</p>
        `;
        countriesContainer.appendChild(card);
    });
}
function updatecountries(){
    name.addEventListener("click", () => {
        const v = search.value.toLowerCase();
        let filtered = allCountries.filter(c=>{
            return c.name.toLowerCase().includes(v);
        });
        const sorted = [...filtered].sort((a, b) =>
            sortOrder === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );
        displayedCountries = sorted;
        sortOrder = sortOrder === "asc" ? "desc" : "asc";
        byName(displayedCountries);
        showPopulation();
    });
    capital.addEventListener("click", () => {
        const v = search.value.toLowerCase();
        let filtered = allCountries.filter(c=>{
            return (c.capital && c.capital.toLowerCase().includes(v));
        });
        const sorted = [...filtered].sort((a, b) =>
            sortOrder === "asc"
                ? a.capital.localeCompare(b.capital)
                : b.capital.localeCompare(a.capital)
        );
        displayedCountries = sorted;
        sortOrder = sortOrder === "asc" ? "desc" : "asc";
        byName(displayedCountries);
        showPopulation();
    });
    pop.addEventListener("click", () => {
        const v = search.value.toLowerCase();
        let filtered = allCountries.filter(c=>{
            return c.name.toLowerCase().includes(v);
        });
        const sorted = [...filtered].sort((a, b) =>
            sortOrder === "asc"
                ? a.population - b.population
                : b.population - a.population
        );
        displayedCountries = sorted;
        sortOrder = sortOrder === "asc" ? "desc" : "asc";
        byName(displayedCountries);
        showPopulation();
    });
}
updatecountries();
// Countries will only show when a button is clicked

const stat = document.getElementById("stat");
const graphTitle = document.querySelector(".graph-title");

const populationBtn = document.getElementById("populationBtn");
const languagesBtn = document.getElementById("languagesBtn");

populationBtn.addEventListener("click", showPopulation);
languagesBtn.addEventListener("click", showLanguages);

function showPopulation() {
    stat.innerHTML="";
    graphTitle.textContent="Top 15 Most Populated Countries";

    const sortedData=[...displayedCountries].sort((a, b) => b.population - a.population).slice(0, 15);

    const max=sortedData[0].population;

    sortedData.forEach(country => {
        const width=(country.population / max) * 100;

        stat.innerHTML+= `
        <div class="flex px-4 py-2 items-center gap-4 mb-2">
            <span class="w-64 font-semibold">${country.name}</span>
            <div class="bg-orange-500 h-6 rounded" style="width:${width*5}%">
                <span class="text-white pl-2">${country.population.toLocaleString()}</span>
            </div>
        </div>`;
    });
}

function showLanguages() {
    stat.innerHTML="";
    graphTitle.textContent = "Top 10 Spoken Languages";

    const languageCount = {};

    displayedCountries.forEach(country => {
        (country.languages||[]).forEach(lang => {
            languageCount[lang]=(languageCount[lang]||0)+1;
        });
    });

    const sortedLanguages=Object.entries(languageCount).sort((a, b) => b[1] - a[1])
        .slice(0,10);

    const max = sortedLanguages[0][1];

    sortedLanguages.forEach(([language, count]) => {
        const width = (count / max) * 100;

        stat.innerHTML += `
        <div class="flex px-4 py-2 items-center gap-4 mb-2">
            <span class="w-64 font-semibold">${language}</span>
            <div class="bg-orange-500 h-6 rounded" style="width:${width*5}%">
                <span class="text-white pl-2">${count}</span>
            </div>
        </div>`;
    });
}
