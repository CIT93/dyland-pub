import { TBL, FORM, editingIndex } from "./global.js";
import { saveLS } from "./storage.js";
import { calculateAverageFootprint } from "./average.js";

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Food",
    "Water",
    "Items Purchased",
    "Footprint Total",
    "Actions",
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

export const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (Array.isArray(data) && data.length > 0) {
    const table = renderTblHeading();
    const tbody = renderRow(data);
    table.appendChild(tbody);
    const averageRow = renderAverageRow(data);
    table.appendChild(averageRow);
    TBL.appendChild(table);
  } else {
    TBL.innerHTML = "<p>No data available</p>";
  }
};

const renderRow = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    if (!obj || typeof obj !== "object") {
      return;
    }

    const tr = document.createElement("tr");
    const keys = ["first", "houseHold", "houseSize", "food", "waterPoints", "purchasePoints", "totalPoints"];

    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });

    const actionCell = renderButtons(index, data);
    tr.appendChild(actionCell);
    tbody.appendChild(tr);
  });
  return tbody;
};

const renderButtons = (index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";

  btnDel.addEventListener("click", function () {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
  });

  btnEdit.addEventListener("click", function () {
    FORM.elements["firstname"].value = data[index].first;
    FORM.elements["lastname"].value = data[index].last;
    FORM.elements["household"].value = data[index].houseHold;
    FORM.elements["housesize"].value = data[index].houseSize;
    FORM.elements["food"].value = data[index].food;
    FORM.elements["water"].value = data[index].waterPoints.toString();
    FORM.elements["purchases"].value = data[index].purchasePoints;
  });

  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  return td;
};

const renderAverageRow = (data) => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  td.setAttribute("colspan", 6);
  td.textContent = "Average Footprint Score";

  const averageCell = document.createElement("td");
  averageCell.textContent = calculateAverageFootprint(data);

  tr.appendChild(td);
  tr.appendChild(averageCell);
  return tr;
};