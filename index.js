let valueToConvert = 1;
let lenghtEl = document.getElementById("lenght-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let inputEl = document.getElementById("input-el")

function calc(){
    if(inputEl.value == ""){
        valueToConvert = 0
    }
    else{
        valueToConvert = parseFloat(inputEl.value)
    }
    calcLenght()
    calcVolume()
    calcMass()
}
function calcLenght(){
    let metersToFeet = 3.28084
    let feetToMeters = 0.3048
    let res1 = valueToConvert * metersToFeet
    let res2 = valueToConvert * feetToMeters
    lenghtEl.textContent = valueToConvert + " meters = " + res1+ " feet || " + valueToConvert + "  feet = " + res2  +" meters"
}
function calcVolume(){
    let litersToGallons = 0.264172
    let gallonToLiter = 4.54609
    let res1 = valueToConvert * litersToGallons
    let res2 = valueToConvert * gallonToLiter
    volumeEl.textContent = valueToConvert + " liters = "+res1+" gallons || " +valueToConvert+" gallons = "+res2+" liters"
}
function calcMass(){
    let kilogramsToPounds = 2.20462
    let poundsToKilograms = 0.453592
    let res1 = valueToConvert * kilogramsToPounds
    let res2 = valueToConvert * poundsToKilograms
    massEl.textContent = valueToConvert+" kilograms = "+res1+" pounds || "+valueToConvert+" pounds = "+res2+" kilograms"
    
}