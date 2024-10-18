import { renderTbl } from "./render.js";
import { start } from "./carbonfootprint.js";
import { FORM, FIRST, LAST, editingIndex } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

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

  const newEntry = start(numberInHouseHold, houseSize, firstName, lastName);

  if (editingIndex !== null) {
    cfpData[editingIndex] = newEntry;
    editingIndex = null;
  } else {
    cfpData.push(newEntry);
  }

  saveLS(cfpData);
  renderTbl(cfpData);

  FORM.reset();
  FIRST.innerText = "";
  LAST.innerText = "";
});

// Arrow Function

const add2 = a => 2 + a;

const result = add2(100);