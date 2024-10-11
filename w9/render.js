const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "Household",
    "HouseSize",
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

export function renderTbl(data) {
  TBL.innerHTML = "";
  if (data.length > 0) {
    const table = renderTblHeading();
    const tbody = renderRow(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  } else {
    TBL.innerHTML = "";
  }
}

function renderRow(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");

    for (const [key, value] of Object.entries(obj)) {
      if (
        key !== "lastName" &&
        key !== "houseHoldPts" &&
        key !== "houseSizePts"
      ) {
        console.log("build it");
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }

    const tblRowArr = [];
    tblRowArr.forEach(function (value) {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    const actionCell = renderButtons(index, data);
    tr.appendChild(actionCell);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderButtons(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Edit";
  const btnDel = document.createElement("button");
  btnDel.textContent = "Del";

  btnDel.addEventListener("click", function () {
    data.splice(index, 1);
    renderTbl(data);
  });

  btnEdit.addEventListener("click", function () {
    form.elements["firstname"].value = data[index].firstName;
    form.elements["lastname"].value = data[index].lastName;
    form.elements["household"].value = data[index].numberInHouseHold;
    form.elements["housesize"].value = data[index].houseSize;

    console.log(`Editing ${index}`);
  });

  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  return td;
}