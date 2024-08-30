function determineHouseHoldPts(numberInHouseHold) {
    console.log("Inside the function");
    if (numberInHouseHold === 1) {
      carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHouseHold === 2) {
      carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHouseHold === 3) {
      carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHouseHold === 4) {
      carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHouseHold === 5) {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHouseHold > 5) {
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
  
    console.log(
      `If members in household is ${numberInHouseHold} then points will be ${carbonFootprintPoints}.`);
  }
  
  let carbonFootprintPoints = 0;
  //const numberInHouseHold = 6;
  
  
  
  // global scale
  
  determineHouseHoldPts(3)
  determineHouseHoldPts(4)


// Size of Home
// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points.

function determineHouseSizePts(houseSize) {
    console.log("Inside the function");
    if (houseSize === "large") {
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (houseSize === "medium") {
      carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (houseSize === "small") {
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (houseSize === "apartment") {
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
  
    console.log(
      `If house size is ${houseSize} then points will be ${carbonFootprintPoints}.`);
  }
  
  //let carbonFootprintPoints = 0;
  //const houseSize = "large";
  
  
  
  // global scale
  
  determineHouseSizePts("large")
  determineHouseSizePts("medium")
  determineHouseSizePts("small")
  determineHouseSizePts("apartment")

