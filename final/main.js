import { getOutputElement } from './global.js';
import { renderTable } from './render.js';
import { DecisionClass } from './decisionlogic.js';
import { getTransactionsFromStorage, saveTransactionsToStorage } from './storage.js';

const transactions = getTransactionsFromStorage();

renderTable(transactions);

document.getElementById("tipCalculatorForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;

  const userName = document.getElementById("userName").value.trim();
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const serviceQuality = document.getElementById("serviceQuality").value;
  const isSatisfied = document.getElementById("isSatisfied").value === "true";
  const randomizerEnabled = document.getElementById("randomizerToggle").checked;
  const numPeople = parseInt(document.getElementById("numPeople").value, 10) || 1;

  try {
    DecisionClass.validateBillAmount(billAmount);
  } catch (error) {
    alert(error.message);
    return;
  }

  const editingIndex = form.dataset.editingIndex;

  // Destructure splitAmount from calculate method
  const decisionLogic = new DecisionClass(billAmount, serviceQuality, isSatisfied, randomizerEnabled);
  const { tipPercentage, tipAmount, totalAmount, splitAmount } = decisionLogic.calculate(numPeople);

  if (editingIndex) {
    transactions[editingIndex] = {
      userName,
      billAmount: parseFloat(billAmount),
      serviceQuality,
      tipPercentage: parseFloat(tipPercentage),
      tipAmount: parseFloat(tipAmount),
      totalAmount: parseFloat(totalAmount),
      splitAmount: splitAmount ? parseFloat(splitAmount) : null,
    };
    delete form.dataset.editingIndex;
  } else {
    transactions.push({
      userName,
      billAmount: parseFloat(billAmount),
      serviceQuality,
      tipPercentage: parseFloat(tipPercentage),
      tipAmount: parseFloat(tipAmount),
      totalAmount: parseFloat(totalAmount),
      splitAmount: splitAmount ? parseFloat(splitAmount) : null,
    });
  }

  saveTransactionsToStorage(transactions);

  renderTable(transactions);

  form.reset();
});
