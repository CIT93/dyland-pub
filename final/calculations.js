export const calculateTipPercentage = (serviceQuality) => {
  const baseTips = {
    Excellent: 0.25,
    Good: 0.2,
    Okay: 0.15,
    Poor: 0.1,
    Terrible: 0.05,
  };

  let tipPercentage = baseTips[serviceQuality] || 0.15;
  tipPercentage += parseFloat((Math.random() * 0.05).toFixed(2));
  return tipPercentage;
};

export const calculateTotalAmount = (
  billAmount,
  tipPercentage,
  isSatisfied
) => {
  if (isSatisfied) tipPercentage += 0.05;
  const tipAmount = billAmount * tipPercentage;
  const totalAmount = billAmount + tipAmount;
  return { tipAmount, totalAmount };
};

export const validateBillAmount = (billAmount) => {
  if (billAmount <= 0 || isNaN(billAmount)) {
    alert("Please enter a positive bill amount.");
    return false;
  }
  return true;
};
