let allCountries = countries_data;
let displayedCountries = countries_data;
let sortOrder = "asc";

const searchInput = document.getElementById("searchInput");
const container = document.getElementById("countriesContainer");
const searchInfo = document.getElementById("searchInfo");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    displayedCountries = allCountries.filter(country => {
        return country.name.toLowerCase().includes(value) ||
               (country.capital && country.capital.toLowerCase().includes(value));
    });

    renderCountries();
    updateSearchInfo();
});

function renderCountries() {
    container.innerHTML = "";

    displayedCountries.forEach(country => {
        const div = document.createElement("div");
        div.className = "bg-white rounded-lg shadow-md overflow-hidden";

        div.innerHTML = `
            <img src="${country.flag}" class="w-full h-32 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold text-orange-600">
                    ${country.name.toUpperCase()}
                </h3>
                <p><b>Capital:</b> ${country.capital || "N/A"}</p>
                <p><b>Languages:</b> ${getLanguages(country.languages)}</p>
                <p><b>Population:</b> ${country.population.toLocaleString()}</p>
            </div>
        `;

        container.appendChild(div);
    });
}

function getLanguages(languages) {
    if (!languages) return "N/A";
    if (Array.isArray(languages)) return languages.join(", ");
    return Object.values(languages).join(", ");
}

function sortBy(type) {
    if (type === "population") {
        displayedCountries.sort((a, b) =>
            sortOrder === "asc"
                ? a.population - b.population
                : b.population - a.population
        );
    } else {
        displayedCountries.sort((a, b) =>
            sortOrder === "asc"
                ? a[type].localeCompare(b[type])
                : b[type].localeCompare(a[type])
        );
    }

    sortOrder = sortOrder === "asc" ? "desc" : "asc";
    renderCountries();
}

function updateSearchInfo() {
    searchInfo.textContent =
        displayedCountries.length + " countries matched your search";
}

renderCountries();
updateSearchInfo();
