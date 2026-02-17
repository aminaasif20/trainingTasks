document.addEventListener("DOMContentLoaded",()=>{
    console.log("Document is ready")
    const gravityOfPlanets={
        mercury:3.7,
        venus:8.9,
        earth:9.8,
        mars:3.7,
        jupiter:24.8,
        saturn:10.4,
        uranus:8.9,
        neptune:11.2,
        pluto:0.6,
        moon:1.6,
        sun:274,

    };
    const massInput=document.getElementById("mass");
    const plantSelection=document.getElementById("planet")
    const calculatebutton=document.getElementById("btn");
    const result=document.querySelector("#result");
    const planetsImages=document.querySelector(".planet-image");
     
    calculatebutton.addEventListener("click",()=>{
        const mass=parseFloat(massInput.value);
        const planet=plantSelection.value;
        if(isNaN(mass) || mass<=0){
            result.textContent="Please enter a valid mass greater than zero.";
            planetsImages.src="";
            return;

        }
        if(planet==="none"){
            result.textContent="Please select a planet.";
            planetsImages.src="";
            return;

        }
        const weight =mass*gravityOfPlanets[planet];
        result.textContent=`The weight of an object on ${planet} is ${weight.toFixed(2)} newtons`;
    planetsImages.src=`../images/${planet}.png`;
    planetsImages.alt=`Image of ${planet}`;
    });
});