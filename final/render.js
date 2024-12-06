import { getOutputElement } from './global.js';
import { saveTransactionsToStorage } from './storage.js';
import { DecisionClass } from './decisionlogic.js';

export const renderTable = (transactions) => {
  const output = getOutputElement();
  output.innerHTML = "";

  if (transactions.length === 0) {
    output.innerHTML = "<p>No transactions to display.</p>";
    return;
  }

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const headers = [
    "Name",
    "Bill Amount ($)",
    "Service Quality",
    "Tip Percentage",
    "Total Amount ($)",
    "Tip Amount Per Person",
    "Actions",
  ];

  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });
  table.appendChild(headerRow);

  transactions.forEach((transaction, index) => {
    const row = document.createElement("tr");

    const createCell = (text) => {
      const cell = document.createElement("td");
      cell.textContent = text;
      return cell;
    };

    row.appendChild(createCell(transaction.userName));
    row.appendChild(createCell(transaction.billAmount.toFixed(2)));
    row.appendChild(createCell(transaction.serviceQuality));
    row.appendChild(createCell(`${transaction.tipPercentage.toFixed(2)}%`));
    row.appendChild(createCell(transaction.totalAmount.toFixed(2))); 
    row.appendChild(createCell(transaction.tipAmount.toFixed(2)));

    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTransaction(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTransaction(index, transactions);

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    table.appendChild(row);
  });

  output.appendChild(table);
};

const editTransaction = (index) => {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  const transaction = transactions[index];
  const form = document.getElementById("tipCalculatorForm");

  form.userName.value = transaction.userName;
  form.billAmount.value = transaction.billAmount;
  form.serviceQuality.value = transaction.serviceQuality;
  form.isSatisfied.value = transaction.isSatisfied ? "true" : "false";
  form.randomizerToggle.checked = transaction.randomizerEnabled;

  form.dataset.editingIndex = index;
};

const deleteTransaction = (index, transactions) => {
  transactions.splice(index, 1);
  saveTransactionsToStorage(transactions);
  renderTable(transactions);
};
