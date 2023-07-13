/**
 * Consider that you have some pictures in your memory card and you need to transfer them to your computer.
 * In order to transfer them you need some kind of adapter that is compatible with your computer ports so that you can attach memory card to your computer.
 * In this case card reader is an adapter.
 * Another example would be the famous power adapter a three legged plug can't be connected to a two pronged outlet, it needs to use a power adapter that makes it compatible with the two pronged outlet.
 * Yet another example would be a translator translating words spoken by one person to another
 */

//Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.

/**
 * Consider a game where there is a hunter and he hunts lions.
 * First we have an interface Lion that all types of lions have to implement
 */

/*
Lion interface :
roar()
*/
class AfricanLion {
  roar() {}
}

class AsianLion {
  roar() {}
}

// And hunter expects any implementation of Lion interface to hunt.
class Hunter {
  hunt(lion) {
    // ... some code before
    lion.roar();
    //... some code after
  }
}

/**
 * Now let's say we have to add a WildDog in our game so that hunter can hunt that also.
 * But we can't do that directly because dog has a different interface.
 * To make it compatible for our hunter, we will have to create an adapter that is compatible
 */

// This needs to be added to the game
class WildDog {
  bark() {}
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter {
  constructor(dog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

// And now the WildDog can be used in our game using WildDogAdapter.
wildDog = new WildDog();
wildDogAdapter = new WildDogAdapter(wildDog);

hunter = new Hunter();
hunter.hunt(wildDogAdapter);
