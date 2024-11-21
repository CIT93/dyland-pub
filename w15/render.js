import { TBL, FORM, editingIndex } from "./global.js";
import { saveLS } from "./storage.js";
//import { FP } from "./fp.js"; 

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
    "Food",
    "Footprint",
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
}

export const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (Array.isArray(data) && data.length > 0) {
    const table = renderTblHeading();
    const tbody = renderRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  } else {
    TBL.innerHTML = "<p>No data available</p>";
  }
}

const renderRow = (data) => {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    if (!obj || typeof obj !== "object") {
      return;
    }

    const tr = document.createElement("tr");
    const keys = ["first", "houseHold", "houseSize", "food", "totalPoints"]

    keys.forEach(key => {
      const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
    })
        
    const actionCell = renderButtons(index, data);
    tr.appendChild(actionCell);
    tbody.appendChild(tr);
  });
  return tbody;
}

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
  });

  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  return td;
}