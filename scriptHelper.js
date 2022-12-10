// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

                // <h2>Mission Destination</h2>
                // <ol>
                //     <li>Name:${name}</li>
                //     <li>Diameter: ${diameter}</li>
                //     <li>Star: ${star}</li>
                //     <li>Distance from Earth: ${distance}</li>
                //     <li>Number of Moons: ${moons}</li>
                // </ol>
                // <img src="imageUrl">
}

let testInput = Number(testInput);

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";

    }else if (isNaN(testInput) === false){
        return "Is a Number";

    }else if (isNaN(testInput)){
        return "Not a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) ==="Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
        alert("All fields are required!");

    }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number"){
        alert("Please enter valid information for each field.");

    }else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot Name:  ${pilot}`;
        copilotStatus.innerHTML = `Copilot Name: ${copilot}`;
        launchStatus.innerHTML = "Shuttle ready for launch";
        launchStatus.style.color = "green";

        if (fuelLevel < 10000 ){
        fuelStatus.innerHTML = "Fuel level is too low";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

        }if (cargoMass > 10000){
        cargoStatus.innerHTML = "Cargo is too heavy";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }
    }
};
   
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json)){
            console.log(json);
        }
    });
    return planetsReturned;
}

function pickPlanet(planets) {

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
