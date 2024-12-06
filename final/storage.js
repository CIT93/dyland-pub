const STORAGE_KEY = "transactions";

export const getTransactionsFromStorage = () => {
  const transactions = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  return transactions
    .filter((transaction) => transaction && transaction.billAmount !== undefined)
    .map((transaction) => ({
      ...transaction,
      billAmount: parseFloat(transaction.billAmount),
      tipPercentage: parseFloat(transaction.tipPercentage),
      tipAmount: parseFloat(transaction.tipAmount),
      totalAmount: parseFloat(transaction.totalAmount),
    }));
};

export const saveTransactionsToStorage = (transactions) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
};