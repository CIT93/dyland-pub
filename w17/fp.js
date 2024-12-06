class FP {
  constructor(
    first,
    last,
    houseHold,
    houseSize,
    food,
    dishwasherUsage,
    hasWasher,
    itemsPurchased,
    garbageCansPerWeek,
    recyclingCategories,
    vehicleMileage,
    publicTransportMiles,
    flightType
  ) {
    this.first = first;
    this.last = last;
    this.houseHold = houseHold;
    this.houseSize = houseSize;
    this.food = food;
    this.dishwasherUsage = dishwasherUsage;
    this.hasWasher = hasWasher;
    this.itemsPurchased = itemsPurchased;
    this.garbageCansPerWeek = garbageCansPerWeek;
    this.recyclingCategories = recyclingCategories;
    this.vehicleMileage = vehicleMileage;
    this.publicTransportMiles = publicTransportMiles;
    this.flightType = flightType;
    this.transportationPoints = this.calculateTransportationPoints();

    const householdPoints = new HouseHoldPts(this.houseHold);
    const housePoints = new House(this.houseSize);
    const foodPoints = new Food(this.food);
    const waterPoints = new Water(this.dishwasherUsage, this.hasWasher);
    const purchasePoints = new Purchases(this.itemsPurchased);
    const wastePoints = new Waste(
      this.garbageCansPerWeek,
      this.recyclingCategories
    );

    this.houseHoldPoints = householdPoints.getHouseHoldPoints();
    this.houseSizePoints = housePoints.getHouseSizePoints();
    this.foodPoints = foodPoints.getFoodPoints();
    this.waterPoints = waterPoints.getWaterPoints();
    this.purchasePoints = purchasePoints.getPurchasePoints();
    this.wastePoints = wastePoints.getWastePoints();
    this.totalPoints = this.total();
  }

  calculateTransportationPoints() {
    let points = 0;

    // Personal vehicle mileage
    if (this.vehicleMileage > 15000) points += 12;
    else if (this.vehicleMileage >= 10000) points += 10;
    else if (this.vehicleMileage >= 1000) points += 6;
    else if (this.vehicleMileage > 0) points += 4;

    // Public transport mileage
    if (this.publicTransportMiles > 20000) points += 12;
    else if (this.publicTransportMiles >= 15000) points += 10;
    else if (this.publicTransportMiles >= 10000) points += 6;
    else if (this.publicTransportMiles >= 1000) points += 4;
    else if (this.publicTransportMiles > 0) points += 2;

    // Flight distance
    if (this.flightType === "short") points += 2;
    else if (this.flightType === "medium") points += 6;
    else if (this.flightType === "long") points += 20;

    return points;
  }

  total() {
    return (
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodPoints +
      this.waterPoints +
      this.purchasePoints +
      this.wastePoints +
      this.transportationPoints
    );
  }

  getTotalPoints() {
    return `${this.first} ${this.last} has a total of ${this.totalPoints} points.`;
  }
}

class House {
  constructor(houseSize) {
    this.houseSizePoints = 0;
    if (houseSize === "large") this.houseSizePoints = 10;
    else if (houseSize === "medium") this.houseSizePoints = 7;
    else if (houseSize === "small") this.houseSizePoints = 4;
    else if (houseSize === "apt") this.houseSizePoints = 2;
  }

  getHouseSizePoints() {
    return this.houseSizePoints;
  }
}

class HouseHoldPts {
  constructor(numberInHouseHold) {
    this.houseHoldPoints = 0;
    if (numberInHouseHold === 1) this.houseHoldPoints = 14;
    else if (numberInHouseHold === 2) this.houseHoldPoints = 12;
    else if (numberInHouseHold === 3) this.houseHoldPoints = 8;
    else if (numberInHouseHold === 4) this.houseHoldPoints = 6;
    else if (numberInHouseHold === 5) this.houseHoldPoints = 4;
    else if (numberInHouseHold > 5) this.houseHoldPoints = 2;
  }

  getHouseHoldPoints() {
    return this.houseHoldPoints;
  }
}

class Food {
  constructor(food) {
    this.foodPoints = 0;
    if (food === "daily_meat") this.foodPoints = 10;
    else if (food === "few_times_meat") this.foodPoints = 8;
    else if (food === "vegetarian") this.foodPoints = 4;
    else if (food === "vegan_wild_meat") this.foodPoints = 2;
    else if (food === "prepackaged") this.foodPoints = 12;
    else if (food === "balance") this.foodPoints = 6;
    else if (food === "fresh_local") this.foodPoints = 2;
  }

  getFoodPoints() {
    return this.foodPoints;
  }
}

class Water {
  constructor(dishwasherUsage, hasWasher) {
    this.dishwasherUsage = dishwasherUsage;
    this.hasWasher = hasWasher;
    this.waterPoints = this.calculateWaterPoints();
  }

  calculateWaterPoints() {
    let points = 0;
    if (this.dishwasherUsage > 9) points = 3;
    else if (this.dishwasherUsage >= 4) points = 2;
    else if (this.dishwasherUsage >= 1) points = 1;
    if (this.hasWasher) points *= 2;
    return points;
  }

  getWaterPoints() {
    return this.waterPoints;
  }
}

class Purchases {
  constructor(itemsPurchased) {
    this.itemsPurchased = itemsPurchased;
    this.purchasePoints = this.calculatePurchasePoints();
  }

  calculatePurchasePoints() {
    if (this.itemsPurchased > 7) return 10;
    else if (this.itemsPurchased >= 5) return 8;
    else if (this.itemsPurchased >= 3) return 6;
    else if (this.itemsPurchased >= 1) return 4;
    else return 2;
  }

  getPurchasePoints() {
    return this.purchasePoints;
  }
}

class Waste {
  constructor(garbageCansPerWeek, recyclingCategories) {
    this.garbageCansPerWeek = garbageCansPerWeek;
    this.recyclingCategories = recyclingCategories;
    this.wastePoints = this.calculateWastePoints();
    this.recyclingPoints = this.calculateRecyclingPoints();
  }

  calculateWastePoints() {
    if (this.garbageCansPerWeek >= 4) return 50;
    else if (this.garbageCansPerWeek === 3) return 40;
    else if (this.garbageCansPerWeek === 2) return 30;
    else if (this.garbageCansPerWeek === 1) return 20;
    else if (this.garbageCansPerWeek <= 0.5) return 5;
    else return 0;
  }

  calculateRecyclingPoints() {
    if (!this.recyclingCategories || this.recyclingCategories.length === 0) {
      return 24;
    }
    const recycledPoints = this.recyclingCategories.length * 4;
    return Math.max(24 - recycledPoints, 0);
  }

  getWastePoints() {
    return this.wastePoints;
  }

  getRecyclingPoints() {
    return this.recyclingPoints;
  }
}

export { FP };
