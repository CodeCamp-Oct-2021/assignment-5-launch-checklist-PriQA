// Write your JavaScript code here!

window.addEventListener("load", function() {


    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let pilot = document.querySelector("input[name=pilotName").value;
       let copilot = document.querySelector("input[name=copilotName").value;
       let fuel = document.querySelector("input[name=fuelLevel").value;
       let mass = document.querySelector("input[name=cargoMass").value;
       let listOfFaultyItems = document.getElementById("faultyItems");

       

       if(validateInput(pilot)==="Is a Number" || validateInput(pilot)==="Empty")
       {
        alert("Pilot name is not valid!");
        event.preventDefault();
       }

       if(validateInput(copilot)==="Is a Number" || validateInput(copilot)==="Empty")
       {
        alert("Co-Pilot name is not valid!");
        event.preventDefault();
       }
  
       if(validateInput(fuel)==="Not a Number" || validateInput(fuel)==="Empty")
       {

        alert("Fuel Level is not a valid number!");
        event.preventDefault();
       }

       if(validateInput(mass)==="Not a Number" || validateInput(mass)==="Empty")
       {
        alert("Cargo Mass is not a valid number!");
        event.preventDefault();
       }
    
     let stop =  formSubmission(document, listOfFaultyItems, pilot, copilot, fuel, mass);

     if (stop === true)
     {
         event.preventDefault();
     }
    

    });

    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();
   //console.log(listedPlanetsResponse);
   
    listedPlanetsResponse.then(function(result) {
             listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
    })
   
});