/**
 * it allows you to create a copy of an existing object and modify it to your needs,
 * instead of going through the trouble of creating an object from scratch and setting it up.
 */

// First of all we have our Sheep that we want to clone
class Sheep {
  constructor(name, category = "Mountain Sheep") {
    this.name = name;
    this.category = category;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  setCategory(category) {
    this.category = category;
  }

  getCategory() {
    console.log(this.category);
  }
}

/**
 * And then we have a SheepPrototype object that clones objects given a prototype object.
 * Its constructor function accepts a prototype of type Sheep
 */
class SheepPrototype {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    return new Sheep(this.proto.name, this.proto.category);
  }
}

const originalSheep = new Sheep("Jolly");
originalSheep.getName(); // Jolly
originalSheep.getCategory(); // Mountain Sheep

// Clone and modify what is required
const prototype = new SheepPrototype(originalSheep);
const clonedSheep = prototype.clone();
clonedSheep.setName("Dolly");
clonedSheep.getName(); // Dolly
clonedSheep.setCategory("Wild Sheep");
clonedSheep.getCategory(); // Mountain sheep

console.log(
  `Original Sheep : ${JSON.stringify(
    originalSheep
  )}\nPrototype : ${JSON.stringify(prototype)}\nCloned Sheep : ${JSON.stringify(
    clonedSheep
  )}`
);
