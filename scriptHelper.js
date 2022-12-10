// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
        let missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
}

function validateInput(testInput) {
    testInput = Number(testInput);
    if (testInput === "" || testInput === 0){
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
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        
        launchStatus.style.color = "rgb(65, 159, 106)";

        if (fuelLevel < 10000 && cargoMass > 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not ready for launch";
        launchStatus.style.color = "rgb(199, 37, 78)";

        }else if (fuelLevel < 10000 && cargoMass <= 10000){
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)";

        }else if (cargoMass > 10000 && fuelLevel >= 10000){
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not ready for launch";
        launchStatus.style.color = "rgb(199, 37, 78)";

        }else {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            fuel.innerHTML = "Fuel level high enough for launch";
            cargo.innerHTML = "Cargo mass low enough for launch";
        }
    }
};
   
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*planets.length)
    return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
