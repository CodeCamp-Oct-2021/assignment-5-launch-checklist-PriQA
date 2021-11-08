// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const divMissionTarget = document.getElementById("missionTarget");
   
   divMissionTarget.innerHTML = `

                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `
};

function validateInput(testInput) {
  
    if (testInput=== ""){
        return `Empty`; 
    }
    if (isNaN(testInput))
    {
        return `Not a Number`;
    }
    if (!isNaN(testInput))
    {
        return `Is a Number`;
    }
};
   
      

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {


  
    if (fuelLevel<10000)
    {
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `${copilot} is ready for launch`;   
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        return true;
    
    }
    
 
    if (cargoLevel>10000)
    {
        list.style.visibility= "visible";
        document.getElementById("pilotStatus").innerHTML = `${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `${copilot} is ready for launch`;
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high to take off";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
        return true;
        
    }

    if (fuelLevel>10000 && cargoLevel<10000)
    {
        list.style.visibility= "visible";
        document.getElementById("pilotStatus").innerHTML = `${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `${copilot} is ready for launch`;
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
        return true;
      
    }
   
    return false;

};

async function myFetch() {


   let listedPlanets;
    await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) 
    {
        if(response.status >=400)
        { 
            throw new Error("Service call is not successfull");
        }
        listedPlanets = response.json();

    });
    return listedPlanets;     
};

function pickPlanet(planets) {

    let index = Math.floor(Math.random()* planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
