/**
 * Did you ever have fresh tea from some stall?
 * They often make more than one cup that you demanded and save the rest for any other customer so to save the resources e.g. gas etc.
 * Flyweight pattern is all about that i.e. sharing.
 */

// It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.

// Translating our tea example from above. First of all we have tea types and tea maker

// Anything that will be cached is flyweight.
// Types of tea here will be flyweights.
class KarakTea {}

// Acts as a factory and saves the tea
class TeaMaker {
  constructor() {
    this.availableTea = {};
  }

  make(preference) {
    this.availableTea[preference] =
      this.availableTea[preference] || new KarakTea();
    return this.availableTea[preference];
  }
}

// Then we have the TeaShop which takes orders and serves them

class TeaShop {
  constructor(teaMaker) {
    this.teaMaker = teaMaker;
    this.orders = [];
  }

  takeOrder(teaType, table) {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  serve() {
    this.orders.forEach((order, index) => {
      console.log(`Serving tea to table# ${index}`);
    });
  }
}

// And it can be used as below
const teaMaker = new TeaMaker();
const shop = new TeaShop(teaMaker);

shop.takeOrder("less sugar", 1);
shop.takeOrder("more milk", 2);
shop.takeOrder("without sugar", 5);

shop.serve();
// Serving tea to table# 1
// Serving tea to table# 2
// Serving tea to table# 5
