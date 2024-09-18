const FORM = document.getElementById ("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseHoldPts(numberInHouseHold) {
  let houseHoldPoints = 0;
  if (numberInHouseHold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHouseHold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHouseHold === 3) {
    houseHoldPoints = 8;
  } else if (numberInHouseHold === 4) {
    houseHoldPoints = 6;
  } else if (numberInHouseHold === 5) {
    houseHoldPoints = 4;
  } else if (numberInHouseHold > 5) {
    houseHoldPoints = 2;
  }

  return houseHoldPoints;
}

function determineHouseSizePts(houseSize) {
  let houseSizePoints = 0;
  if (houseSize === "large") {
    houseSizePoints = 10;
  } else if (houseSize === "medium") {
    houseSizePoints = 7;
  } else if (houseSize === "small") {
    houseSizePoints = 4;
  } else if (houseSize === "apt") {
    houseSizePoints = 2;
  }

  return houseSizePoints;
}

function start(numberInHouseHold, houseSize) {
  const houseHoldPts = determineHouseHoldPts(numberInHouseHold);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;
  cfpData.push({
    numberInHouseHold: numberInHouseHold,
    houseSize: houseSize,
    houseHoldPts: houseHoldPts,
    houseSizePts: houseSizePts,
    total: total,
  });
}

function displayOutput() {
 
  for (obj of cfpData) {
    console.log(obj);   
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.total}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on household and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `With a household of ${obj.numberInHouseHold}, your household score is ${obj.houseHoldPts}. 
  With a house size of ${obj.houseSize}, your house size score is ${obj.houseSizePts}. 
  Your Carbon Footprint total is ${obj.total}.`;

    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }
}

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  //console.log('I am inside the function');
  //console.log(e);
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const numberInHouseHold = parseInt(FORM.household.value);
  const houseSize = FORM.housesize.value;
  start(numberInHouseHold, houseSize);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
});

// Yes. My apartment returns 2 points. 
// If it wasn't working, I'd check to see if the option value in the HTML matched the respective variables in the javascript.
// Formatting the form to validate our data saves us from doing all the work in javascript and ensures good input.