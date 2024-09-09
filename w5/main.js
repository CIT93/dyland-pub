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
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.total}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on household and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `With a household of ${obj.numberInHouseHold}, your household score is ${obj.houseHoldPts}. 
  With a house size of ${obj.houseSize}, your house size score is ${obj.houseSizePts}. 
  Your Carbon Footprint total is ${obj.total}.`;

    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");

displayOutput();
