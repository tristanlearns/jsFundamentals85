class Cupcake {
  constructor(batter, icing, cost) {
    this.batter = batter;
    this.icing = icing;
    this.cost = cost;
  }

  getDescription() {
    return `A $${this.cost} ${this.batter} cupcake with ${this.icing} on top!`;
  }
}

class CupcakeShop {
  constructor(location) {
    this.location = location;
    this.inventory = []; //default values
    this.cash = 0; //default values
    // These default values will be the same for each new instance of the class.
  }

  getStatus() {
    return `The shop currently has $${this.cash} and ${this.inventory.length} cupcakes!`;
  }

  addToInventory(cupcake) {
    this.inventory.push(cupcake);
  }

  bakeBatch(numOfCupcakes, batter, icing, pricePer) {
    for (let i = 0; i < numOfCupcakes; i++) {
      let newCupcake = new Cupcake(batter, icing, pricePer);
      this.addToInventory(newCupcake);
    }
  }

  sellCupcake() {
    if (this.inventory.length > 0) {
      let toSell = this.inventory.pop();
      this.cash = this.cash + toSell.cost;
    } else {
      return "No cupcakes in inventory.";
    }
  }
}

let cakeBakeShop = new CupcakeShop("Fishers");
console.log(cakeBakeShop.getStatus());

// let chocolateHazelNut = Cupcake.bakeBatch(
//   13,
//   "Chocolate Hazel Nut",
//   "whipped",
//   2
// );

cakeBakeShop.bakeBatch(13, "Chocolate Hazel Nut", "whipped", 2);
console.log(cakeBakeShop.getStatus());

cakeBakeShop.sellCupcake();
console.log(cakeBakeShop.getStatus());
