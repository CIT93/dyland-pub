import { renderTbl } from "./render.js";
import { start } from "./carbonfootprint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];
const editingIndex = null;
const errorElement = document.getElementById("error");

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const numberInHouseHold = parseInt(FORM.household.value);
  const houseSize = FORM.housesize.value;

  let message = [];

  if (firstName === "" || firstName.value === null) {
    message.push("First Name is required");
  }

  if (lastName === "" || firstName.value === null) {
    message.push("Last Name is required");
  }

  if (numberInHouseHold === "" || firstName.value === null) {
    message.push("Household is required");
  }

  if (houseSize === "" || firstName.value === null) {
    message.push("House size is required");
  }

  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message.join(", ");
    return;
  }

  start(numberInHouseHold, houseSize, firstName, lastName, cfpData);
  OUTPUT.innerHTML = "";

  if (editingIndex !== null) {
    data.splice(editingIndex, 1);
    editingIndex = null;
  }

  renderTbl(cfpData);
  FORM.reset();
});
