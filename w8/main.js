import { renderTbl } from "./render.js";
import { start } from "./carbonfootprint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const numberInHouseHold = parseInt(FORM.household.value);
  const houseSize = FORM.housesize.value;
  start(numberInHouseHold, houseSize, firstName, lastName, cfpData);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
});