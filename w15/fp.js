class FP {
  constructor(first, last, houseHold, houseSize, food) {
    this.first = first;
    this.last = last;
    this.houseHold = houseHold;
    this.houseSize = houseSize;
    this.food = food;

    const householdPoints = new HouseHoldPts(this.houseHold);
    const housePoints = new House(this.houseSize);
    const foodPoints = new Food(this.food);

    this.houseHoldPoints = householdPoints.getHouseHoldPoints();
    this.houseSizePoints = housePoints.getHouseSizePoints();
    this.foodPoints = foodPoints.getFoodPoints();

    this.totalPoints = this.total();
  }

  total() {
    return this.houseHoldPoints + this.houseSizePoints + this.foodPoints;
  }

  getTotalPoints() {
    return `${this.first} ${this.last} has a total of ${this.totalPoints} points.`;
  }
}

class House {
  constructor(houseSize) {
    this.houseSizePoints = 0;
    if (houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }

  getHouseSizePoints() {
    return this.houseSizePoints;
  }
}

class HouseHoldPts {
  constructor(numberInHouseHold) {
    this.houseHoldPoints = 0;
    if (numberInHouseHold === 1) {
      this.houseHoldPoints = 14;
    } else if (numberInHouseHold === 2) {
      this.houseHoldPoints = 12;
    } else if (numberInHouseHold === 3) {
      this.houseHoldPoints = 8;
    } else if (numberInHouseHold === 4) {
      this.houseHoldPoints = 6;
    } else if (numberInHouseHold === 5) {
      this.houseHoldPoints = 4;
    } else if (numberInHouseHold > 5) {
      this.houseHoldPoints = 2;
    }
  }

  getHouseHoldPoints() {
    return this.houseHoldPoints;
  }
}

class Food {
  constructor(food) {
    this.foodPoints = 0;
    if (food === "daily_meat") {
      this.foodPoints = 10;
    } else if (food === "few_times_meat") {
      this.foodPoints = 8;
    } else if (food === "vegetarian") {
      this.foodPoints = 4;
    } else if (food === "vegan_wild_meat") {
      this.foodPoints = 2;
    } else if (food === "prepackaged") {
      this.foodPoints = 12;
    } else if (food === "balance") {
      this.foodPoints = 6;
    } else if (food === "fresh_local") {
      this.foodPoints = 2;
    }
  }

  getFoodPoints() {
    return this.foodPoints;
  }
}

export { FP };

  