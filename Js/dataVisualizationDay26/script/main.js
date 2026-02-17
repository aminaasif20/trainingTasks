document.addEventListener("DOMContentLoaded", () => {

  console.log(
    typeof countries === "undefined"
      ? "countries not defined"
      : `countries: ${countries.length}`
  );

  const countriesList = Array.isArray(window.countries) ? window.countries : [];

  // DOM elements
  const container = document.getElementById("countriesgrid");
  const countriesSum = document.getElementById("countriesSum");
  const letterSum = document.getElementById("letterSum");
  const startLetterSpan = document.getElementById("startletter");

  const startLetterInput = document.getElementById("startLetterInput");
  const searchInput = document.getElementById("searchinput");

  const startbtn = document.getElementById("startWord");
  const searchbtn = document.getElementById("search");
  const letterbtn = document.getElementById("sort");

  if (!container) {
    console.error("Missing #countriesgrid element");
    return;
  }

  /* -------- DISPLAY -------- */

  function displayCountries(list) {
    container.innerHTML = "";

    list.forEach(country => {
      const div = document.createElement("div");
      div.className =
        "bg-blue-200 text-center p-6 font-semibold rounded shadow";
      div.textContent = String(country).toUpperCase();
      container.appendChild(div);
    });
  }

  function updateSummary(list, letter = "-") {
    if (countriesSum) countriesSum.textContent = list.length;
    if (letterSum) letterSum.textContent = list.length;
    if (startLetterSpan) startLetterSpan.textContent = letter;
  }

  /* -------- FILTER LOGIC -------- */

  function applyFilters() {
    const letter =
      startLetterInput?.value.trim().slice(0, 1).toUpperCase() || "";
    const term = searchInput?.value.trim().toLowerCase() || "";

    let filtered = countriesList;

    if (letter) {
      filtered = filtered.filter(c =>
        String(c).toUpperCase().startsWith(letter)
      );
    }

    if (term) {
      filtered = filtered.filter(c =>
        String(c).toLowerCase().includes(term)
      );
    }

    displayCountries(filtered);
    updateSummary(filtered, letter || "-");
  }

  /* -------- INITIAL LOAD -------- */

  displayCountries(countriesList);
  updateSummary(countriesList, "-");

  /* -------- EVENTS -------- */

  startLetterInput?.addEventListener("input", applyFilters);
  searchInput?.addEventListener("input", applyFilters);

  startbtn?.addEventListener("click", applyFilters);
  searchbtn?.addEventListener("click", applyFilters);

  letterbtn?.addEventListener("click", () => {
    const sorted = countriesList
      .slice()
      .sort((a, b) => String(a).localeCompare(String(b)));

    displayCountries(sorted);
    updateSummary(sorted, "-");
  });

});
