/**
 * Based on your needs you might get a wooden door from a wooden door shop, iron door from an iron shop or a PVC door from the relevant shop.
 * Plus you might need a guy with different kind of specialities to fit the door, for example a carpenter for wooden door, welder for iron door etc.
 * As you can see there is a dependency between the doors now, wooden door needs carpenter, iron door needs a welder etc.
 */

// Translating the door example above. First of all we have our Door interface and some implementation for it

/*
Door interface :
getDescription()
*/
class WoodenDoor {
  getDescription() {
    console.log("I am a wooden door");
  }
}

class IronDoor {
  getDescription() {
    console.log("I am an iron door");
  }
}

// Then we have some fitting experts for each door type

/*
DoorFittingExpert interface :
getDescription()
*/
class Welder {
  getDescription() {
    console.log("I can only fit iron doors");
  }
}

class Carpenter {
  getDescription() {
    console.log("I can only fit wooden doors");
  }
}

/*
DoorFactory interface :
makeDoor()
makeFittingExpert()
*/

// Wooden factory to return carpenter and wooden door
class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }
  makeFittingExpert() {
    return new Carpenter();
  }
}

// Iron door factory to get iron door and the relevant fitting expert
class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }
  makeFittingExpert() {
    return new Welder();
  }
}

woodenFactory = new WoodenDoorFactory();

door = woodenFactory.makeDoor();
expert = woodenFactory.makeFittingExpert();

door.getDescription(); // Output: I am a wooden door
expert.getDescription(); // Output: I can only fit wooden doors

// Same for Iron Factory
ironFactory = new IronDoorFactory();

door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

door.getDescription(); // Output: I am an iron door
expert.getDescription(); // Output: I can only fit iron doors
