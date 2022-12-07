// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === ""){
        console.log("empty");
        return "Empty";

    }if (isNaN(testInput) === false){
        console.log("is a number");
        return "Is a number";

    }if (isNaN(testInput)){
        console.log("not a number")
        return "Not a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoMass) === "Not a number"){
        alert("Please enter valid information for each field.");
        list.style.visibility = "hidden";
        
    }if (validateInput(pilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
        alert("All fields are required!");
        list.style.visibility = "hidden";

    }if (fuelLevel < 10000){
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Fuel level is too low";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";

    }if (cargoMass > 10000){
        list.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo is too heavy";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }

    list.style.visibility = "visible";
    document.getElementById("launchStatus").style.color = "green";
};
   
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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
