const cfpData = [];

// Function to determine household points
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

// Function to determine house size points
function determineHouseSizePts(houseSize) {
  let houseSizePoints = 0;
  if (houseSize === "large") {
    houseSizePoints = 10;
  } else if (houseSize === "medium") {
    houseSizePoints = 7;
  } else if (houseSize === "small") {
    houseSizePoints = 4;
  } else if (houseSize === "apartment") {
    houseSizePoints = 2;
  }

  return houseSizePoints;
}

// Function to calculate and store results
function start(numberInHouseHold, houseSize) {
  const houseHoldPts = determineHouseHoldPts(numberInHouseHold);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;

  // Push results as an array
  cfpData.push([numberInHouseHold, houseSize, houseHoldPts, houseSizePts, total]);
}

// Display output in HTML
function displayOutput() {
  for (arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = ` With a household of ${arr[0]}, your household score is ${arr[2]}.
    With a house size ${arr[1]}, your house size score is ${arr[3]}. Your Carbon Footprint total is ${arr[4]}`;
    output.appendChild(newP);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
start(1, "apt");
start(1, "large");
start(1, "medium");
start(1, "small");
start(2, "apt");
start(2, "large");
start(2, "medium");
start(3, "small");
start(3, "apt");
start(3, "large");
start(4, "medium");
start(4, "small");
start(4, "apt");
start(5, "large");
start(5, "medium");
start(5, "small");

displayOutput()