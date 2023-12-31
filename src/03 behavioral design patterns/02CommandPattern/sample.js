/**
 * A generic example would be you ordering a food at restaurant.
 * You (i.e. Client) ask the waiter (i.e. Invoker) to bring some food (i.e. Command)
 * and waiter simply forwards the request to Chef (i.e. Receiver) who has the knowledge of what and how to cook.
 * Another example would be you (i.e. Client) switching on (i.e. Command) the television (i.e. Receiver) using a remote control (Invoker).
 */

// Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

// First of all we have the receiver that has the implementation of every action that could be performed

// Receiver
class Bulb {
  turnOn() {
    console.log("Bulb has been lit");
  }

  turnOff() {
    console.log("Darkness!");
  }
}

// then we have an interface that each of the commands are going to implement and then we have a set of commands
/*
Command interface :
    execute()
    undo()
    redo()
*/

// Command
class TurnOnCommand {
  constructor(bulb) {
    this.bulb = bulb;
  }

  execute() {
    this.bulb.turnOn();
  }

  undo() {
    this.bulb.turnOff();
  }

  redo() {
    this.execute();
  }
}

class TurnOffCommand {
  constructor(bulb) {
    this.bulb = bulb;
  }

  execute() {
    this.bulb.turnOff();
  }

  undo() {
    this.bulb.turnOn();
  }

  redo() {
    this.execute();
  }
}

// Then we have an Invoker with whom the client will interact to process any commands

// Invoker
class RemoteControl {
  submit(command) {
    command.execute();
  }
}

// Finally let's see how we can use it in our client
const bulb = new Bulb();

const turnOn = new TurnOnCommand(bulb);
const turnOff = new TurnOffCommand(bulb);

const remote = new RemoteControl();
remote.submit(turnOn); // Bulb has been lit!
remote.submit(turnOff); // Darkness!

/**
 * Command pattern can also be used to implement a transaction based system.
 * Where you keep maintaining the history of commands as soon as you execute them.
 * If the final command is successfully executed,
 * all good otherwise just iterate through the history and keep executing the undo on all the executed commands.
 */
