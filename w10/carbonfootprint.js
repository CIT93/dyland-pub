import {cfpData} from "./storage.js";

const determineHouseHoldPts = (numberInHouseHold) => {
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

const determineHouseSizePts = (houseSize) => {
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

export const start = (
  numberInHouseHold = 1,
  houseSize = 'medium',
  firstName,
  lastName
) => {
  const houseHoldPts = determineHouseHoldPts(numberInHouseHold);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    numberInHouseHold: numberInHouseHold,
    houseSize: houseSize,
    houseHoldPts: houseHoldPts,
    houseSizePts: houseSizePts,
    total: total,
  });
}
