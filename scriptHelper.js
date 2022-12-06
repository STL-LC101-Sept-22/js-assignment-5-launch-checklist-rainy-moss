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
        return "Empty";

    }if (isNaN(Number(testInput)) === false){
        return "Is a number";

    }if (isNaN(Number(testInput)) === true){
        return "Not a Number";
        }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    if (validateInput(pilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"){
        alert("All fields are required!");
        document.getElementById("faultyItems").style.visibility = "hidden";

    }else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoMass) === "Not a number"){
        alert("Please enter valid information for each field.");
        document.getElementById("faultyItems").style.visibility = "hidden";

    }else if (fuelLevel < 10000){
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("CargoStatus").innerHTML = "Fuel level is too low";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = "red";

    }else if (cargoMass > 10000){
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("CargoStatus").innerHTML = "Cargo is too heavy.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        document.getElementById("launchStatus").style.color = "red";
    }else {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").style.color = "green";
    }
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
