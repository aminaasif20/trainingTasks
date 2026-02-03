console.log(typeof countries === 'undefined' ? 'countries not defined' : `countries: ${countries.length}`);

// Defensive fallback if countries isn't defined by the data script
const countriesList = Array.isArray(window.countries) ? window.countries : [];

const container=document.getElementById("countriesgrid");
const countriesSum=document.getElementById("countriesSum");
const letterSum=document.getElementById("letterSum");
const startLetterSpan=document.getElementById("startletter");

const startLetterInput=document.getElementById("startLetterInput");
const searchInput=document.getElementById("searchinput");

// Buttons
const startbtn = document.getElementById("startWord");
const searchbtn = document.getElementById("search");
const letterbtn = document.getElementById("sort");

if (!container){
    console.error('Missing #countriesgrid element. Aborting script.');
} else {
    // Display countries
    function displayCountries(list){
        container.innerHTML='';
        list.forEach(country => {
            const div=document.createElement('div');
            div.className="bg-blue-200 text-center p-6 font-semibold rounded shadow";
            div.textContent=String(country).toUpperCase();
            container.appendChild(div);
        });
    }

    function updateSummary(list, startLetterDisplay = '-'){
        if (countriesSum) countriesSum.textContent = list.length;
        if (letterSum) letterSum.textContent = list.length;
        if (startLetterSpan) startLetterSpan.textContent = startLetterDisplay;
    }

    // Initial display
    displayCountries(countriesList);
    updateSummary(countriesList,'-');

    // Helper filters
    function filterByStart(letter){
        // if (!letter) return coutriesList.slice();
        const L = letter.toUpperCase();
        return countriesList.filter(c => String(c).toUpperCase().startsWith(L));
    }

    function filterByTerm(term) {
        // if (!term) return countriesList.slice();
        const t = term.toLowerCase();
        return countriesList.filter(c => String(c).toLowerCase().includes(t));
    }

    // Live start-letter filter
    if (startLetterInput) {
        startLetterInput.addEventListener('input',()=>{
            const letter = startLetterInput.value.trim().slice(0,1);
            const filtered = filterByStart(letter);
            displayCountries(filtered);
            updateSummary(filtered, letter ? letter.toUpperCase() : '-');
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input',()=> {
            const term=searchInput.value.trim();
            const filtered=filterByTerm(term);
            displayCountries(filtered);
            updateSummary(filtered, '-');
        });
    }

    // Buttons (keep click behavior too)
    if (startbtn) {
        startbtn.addEventListener("click",()=>{
            const letter=startLetterInput ? startLetterInput.value.trim().toUpperCase() : '';
            const filtered=filterByStart(letter||'A');
            displayCountries(filtered);
            updateSummary(filtered,letter||'A');
        });
    }

    if (searchbtn) {
        searchbtn.addEventListener("click",()=>{
            const term=searchInput?searchInput.value.trim().toLowerCase() : '';
            const filtered=filterByTerm(term);
            displayCountries(filtered);
            updateSummary(filtered, '-');
        });
    }

    if (letterbtn) {
        letterbtn.addEventListener("click", () => {
            const sorted=countriesList.slice().sort((a,b)=>String(a).localeCompare(String(b)));
            displayCountries(sorted);
            updateSummary(sorted,'-');
        });
    }
}
