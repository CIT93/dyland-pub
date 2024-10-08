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
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");

  data.forEach(function (obj) {
    const tr = document.createElement("tr");
    const tblRowArr = [
      `${obj.firstName} ${obj.lastName}`,
      obj.houseHoldPts,
      obj.houseSizePts,
      obj.total,
    ];
    tblRowArr.forEach(function (text) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });

    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del";

    td.appendChild(btnEdit);
    td.appendChild(btnDel);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  console.log(table);

  TBL.appendChild(table);
}
