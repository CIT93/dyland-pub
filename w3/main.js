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