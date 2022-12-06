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

    window.addEventListener("load", function(){
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event){
            let pilot = document.querySelector("input[name=pilot]");
            let copilot = document.querySelector("input[name=copilot]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoLevel = document.querySelector("input[name=cargoLevel]");
        })

    if (pilotInput.value == "" || pilotInput.value == "" || copilotInput.value == "" || fuelLevelInput.value == "" || cargoLevelInput.value == ""){
        alert("Empty");
        event.preventDefault();

    }if (isNaN(Number(pilotInput.value)) === false || isNaN(Number(copilotInput.value)) === false){
        alert ("Is a number");
        event.preventDefault();
        
    }if (isNaN(Number(fuelLevelInput.value)) === true || isNaN(Number(cargoLevelInput.value) === true)){
        alert ("Not a Number");
        event.preventDefault();
    } 
    });
        }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    
    
    });

    validateInput();
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
