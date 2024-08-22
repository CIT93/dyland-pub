// My Carbon Footprint

// Members of household
const myHousehold = 14;

// Size of home
const myHouse = 4;

// Food choices
const myFood = 6;

// Water consumption
const myWater = 8;

// Household purches per year
const myPurchases = 10;

// Waste produced per week
const myWaste = 40;

// Amount of waste recycled
const myRecycling = 18;

// Annual transportation 
const myDriving = 6;

// Total Carbon Footprint
const myCarbonTotal = myHousehold + myHouse + myFood + myWater
 + myPurchases + myWaste + myRecycling + myDriving; 

 console.log("Total Carbon Footprint:", myCarbonTotal);

 document.getElementById('carbon-footprint').textContent = `Total Carbon Footprint: ${myCarbonTotal}`;

