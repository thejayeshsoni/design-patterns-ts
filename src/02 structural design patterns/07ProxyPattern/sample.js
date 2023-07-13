/**
 * Have you ever used an access card to go through a door?
 * There are multiple options to open that door i.e. it can be opened either using access card or by pressing a button that bypasses the security.
 * The door's main functionality is to open but there is a proxy added on top of it to add some functionality.
 * Let me better explain it using the code example below.
 */

// Using the proxy pattern, a class represents the functionality of another class.

// Taking our security door example from above. Firstly we have the door interface and an implementation of door
/*
Door interface :
open()
close()
*/

class LabDoor {
  open() {
    console.log("Opening lab door");
  }

  close() {
    console.log("Closing the lab door");
  }
}

// Then we have a proxy to secure any doors that we want
class Security {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("Big no! It ain't possible.");
    }
  }

  authenticate(password) {
    return password === "ecr@t";
  }

  close() {
    this.door.close();
  }
}

// And here is how it can be used
const door = new Security(new LabDoor());
door.open("invalid"); // Big no! It ain't possible.

door.open("ecr@t"); // Opening lab door
door.close(); // Closing lab door
