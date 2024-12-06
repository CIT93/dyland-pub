export class DecisionClass {
  constructor(billAmount, serviceQuality, isSatisfied, randomizerEnabled, numPeople) {
    this.billAmount = billAmount;
    this.serviceQuality = serviceQuality;
    this.isSatisfied = isSatisfied;
    this.randomizerEnabled = randomizerEnabled;
    this.numPeople = numPeople;
  }

  static validateBillAmount(billAmount) {
    if (isNaN(billAmount) || billAmount <= 0) {
      throw new Error("Invalid bill amount.");
    }
  }

  getBaseTipPercentage() {
    const qualityMap = {
      Excellent: 0.2,
      Good: 0.15,
      Average: 0.1,
      Poor: 0.05,
      Terrible: 0,
    };
    return qualityMap[this.serviceQuality] || 0;
  }

  applyRandomizer(tipPercentage) {
    if (this.randomizerEnabled) {
      const randomAdjustment = Math.random() * 0.05;
      return tipPercentage + randomAdjustment;
    }
    return tipPercentage;
  }

  applySatisfactionAdjustment(tipPercentage) {
    if (this.isSatisfied === "Yes") {
      return tipPercentage + 0.05;
    }
    return tipPercentage;
  }

  splitTip(totalAmount, numPeople) {
    if (numPeople <= 0 || isNaN(numPeople)) {
      throw new Error("Please provide a valid number of people.");
    }
    return (totalAmount / numPeople).toFixed(2);
  }

  calculate() {
    let tipPercentage = this.getBaseTipPercentage();
    const tipAmount = this.billAmount * tipPercentage;
    const totalAmount = this.billAmount + tipAmount;
  
    const splitAmount = this.numPeople > 1 ? this.splitTip(totalAmount, this.numPeople) : null;
  
    return {
      tipPercentage: (tipPercentage * 100).toFixed(2),
      tipAmount: tipAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      splitAmount: splitAmount ? splitAmount : null,
    };
  }
}