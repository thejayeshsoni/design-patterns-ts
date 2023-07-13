/**
 * Imagine you run a car service shop offering multiple services.
 * Now how do you calculate the bill to be charged? You pick one service and dynamically keep adding to it the prices for the provided services till you get the final cost.
 * Here each type of service is a decorator.
 */

// Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.

// Lets take coffee for example. First of all we have a simple coffee implementing the coffee interface

/*
Coffee interface:
getCost()
getDescription()
*/

class SimpleCoffee {
  getCost() {
    return 10;
  }

  getDescription() {
    return "Simple coffee";
  }
}

// We want to make the code extensible to allow options to modify it if required. Lets make some add-ons (decorators)
class MilkCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, milk`;
  }
}

class WhipCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 5;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, whip`;
  }
}

class VanillaCoffee {
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 3;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, vanilla`;
  }
}

// Lets make a coffee now
let someCoffee;

someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost()); // 10
console.log(someCoffee.getDescription()); // Simple Coffee

someCoffee = new MilkCoffee(someCoffee);
console.log(someCoffee.getCost()); // 12
console.log(someCoffee.getDescription()); // Simple Coffee, milk

someCoffee = new WhipCoffee(someCoffee);
console.log(someCoffee.getCost()); // 17
console.log(someCoffee.getDescription()); // Simple Coffee, milk, whip

someCoffee = new VanillaCoffee(someCoffee);
console.log(someCoffee.getCost()); // 20
console.log(someCoffee.getDescription()); // Simple Coffee, milk, whip, vanilla
