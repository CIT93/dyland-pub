import { renderTbl } from "./render.js";
import { FORM, FIRST, LAST, editingIndex } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

FORM.firstname.addEventListener("blur", function () {
  const firstName = FORM.firstname.value;
  if (!firstName) {
    FIRST.innerText = "First Name is required";
  } else {
    FIRST.innerText = "";
  }
});

FORM.lastname.addEventListener("blur", function () {
  const lastName = FORM.lastname.value;
  if (!lastName) {
    LAST.innerText = "Last Name is required";
  } else {
    LAST.innerText = "";
  }
});

FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const numberInHouseHold = parseInt(FORM.household.value);
  const houseSize = FORM.housesize.value;
  const food = FORM.food.value;
  const dishwasherUsage = parseInt(FORM.dishwasher.value) || 0;
  const hasWasher = FORM.washer.checked;

  let message = [];

  if (!firstName) {
    message.push("First Name is required");
    FIRST.innerText = "First Name is required";
  }

  if (!lastName) {
    message.push("Last Name is required");
    LAST.innerText = "Last Name is required";
  }

  if (message.length > 0) {
    return;
  }

  const fpObj = new FP(firstName, lastName, numberInHouseHold, houseSize, food, dishwasherUsage, hasWasher);

  if (editingIndex !== null) {
    cfpData[editingIndex] = fpObj;
    editingIndex = null;
  } else {
    cfpData.push(fpObj);
  }

  saveLS(cfpData);
  renderTbl(cfpData);

  FORM.reset();
  FIRST.innerText = "";
  LAST.innerText = "";
});