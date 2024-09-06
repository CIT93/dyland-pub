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

// Global Scope
function start(numberInHouseHold, houseSize) {
  // Call function to determine household points
  const houseHoldPts = determineHouseHoldPts(numberInHouseHold);

  // Call function to determine house size points
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;
  cfpData.push(numberInHouseHold, houseSize, houseHoldPts, houseSizePts, total);
}

function displayOutput(){
  
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