/**
 * EN: Command Design Pattern
 *
 * Intent: Turns a request into a stand-alone object that contains all
 * information about the request. This transformation lets you parameterize
 * methods with different requests, delay or queue a request's execution, and
 * support undoable operations.
 */
/**
 * EN: Some commands can implement simple operations on their own.
 */
var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("SimpleCommand: See, I can do simple things like printing (" + this.payload + ")");
    };
    return SimpleCommand;
}());
/**
 * EN: However, some commands can delegate more complex operations to other
 * objects, called "receivers."
 */
var ComplexCommand = /** @class */ (function () {
    /**
     * EN: Complex commands can accept one or several receiver objects along
     * with any context data via the constructor.
     */
    function ComplexCommand(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    /**
     * EN: Commands can delegate to any methods of a receiver.
     */
    ComplexCommand.prototype.execute = function () {
        console.log("ComplexCommand: Complex stuff should be done by a receiver object.");
        this.receiver.doSomething(this.a);
        this.receiver.doSomethingElse(this.b);
    };
    return ComplexCommand;
}());
/**
 * EN: The Receiver classes contain some important business logic. They know how
 * to perform all kinds of operations, associated with carrying out a request.
 * In fact, any class may serve as a Receiver.
 */
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doSomething = function (a) {
        console.log("Receiver: Working on (" + a + ".)");
    };
    Receiver.prototype.doSomethingElse = function (b) {
        console.log("Receiver: Also working on (" + b + ".)");
    };
    return Receiver;
}());
/**
 * EN: The Invoker is associated with one or several commands. It sends a
 * request to the command.
 */
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    /**
     * EN: Initialize commands.
     */
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnFinish = function (command) {
        this.onFinish = command;
    };
    /**
     * EN: The Invoker does not depend on concrete command or receiver classes.
     * The Invoker passes a request to a receiver indirectly, by executing a
     * command.
     */
    Invoker.prototype.doSomethingImportant = function () {
        console.log("Invoker: Does anybody want something done before I begin?");
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        console.log("Invoker: ...doing something really important...");
        console.log("Invoker: Does anybody want something done after I finish?");
        if (this.isCommand(this.onFinish)) {
            this.onFinish.execute();
        }
    };
    Invoker.prototype.isCommand = function (object) {
        return object.execute !== undefined;
    };
    return Invoker;
}());
/**
 * EN: The client code can parameterize an invoker with any commands.
 */
var invoker = new Invoker();
invoker.setOnStart(new SimpleCommand("Say Hi!"));
var receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, "Send email", "Save report"));
invoker.doSomethingImportant();
