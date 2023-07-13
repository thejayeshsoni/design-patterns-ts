/**
 * EN: Chain of Responsibility Design Pattern
 *
 * Intent: Lets you pass requests along a chain of handlers. Upon receiving a
 * request, each handler decides either to process the request or to pass it to
 * the next handler in the chain.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * EN: The default chaining behavior can be implemented inside a base handler
 * class.
 */
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        // EN: Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // monkey.setNext(squirrel).setNext(dog);
        //
        // RU: Возврат обработчика отсюда позволит связать обработчики простым
        // способом, вот так:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
/**
 * EN: All Concrete Handlers either handle a request or pass it to the next
 * handler in the chain.
 */
var MonkeyHandler = /** @class */ (function (_super) {
    __extends(MonkeyHandler, _super);
    function MonkeyHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonkeyHandler.prototype.handle = function (request) {
        if (request === "Banana") {
            return "Monkey: I'll eat the " + request + ".";
        }
        return _super.prototype.handle.call(this, request);
    };
    return MonkeyHandler;
}(AbstractHandler));
var SquirrelHandler = /** @class */ (function (_super) {
    __extends(SquirrelHandler, _super);
    function SquirrelHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquirrelHandler.prototype.handle = function (request) {
        if (request === "Nut") {
            return "Squirrel: I'll eat the " + request + ".";
        }
        return _super.prototype.handle.call(this, request);
    };
    return SquirrelHandler;
}(AbstractHandler));
var DogHandler = /** @class */ (function (_super) {
    __extends(DogHandler, _super);
    function DogHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogHandler.prototype.handle = function (request) {
        if (request === "MeatBall") {
            return "Dog: I'll eat the " + request + ".";
        }
        return _super.prototype.handle.call(this, request);
    };
    return DogHandler;
}(AbstractHandler));
/**
 * EN: The client code is usually suited to work with a single handler. In most
 * cases, it is not even aware that the handler is part of a chain.
 */
function clientCode(handler) {
    var foods = ["Nut", "Banana", "Cup of coffee"];
    for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
        var food = foods_1[_i];
        console.log("Client: Who wants a " + food + "?");
        var result = handler.handle(food);
        if (result) {
            console.log("  " + result);
        }
        else {
            console.log("  " + food + " was left untouched.");
        }
    }
}
/**
 * EN: The other part of the client code constructs the actual chain.
 */
var monkey = new MonkeyHandler();
var squirrel = new SquirrelHandler();
var dog = new DogHandler();
monkey.setNext(squirrel).setNext(dog);
/**
 * EN: The client should be able to send a request to any handler, not just the
 * first one in the chain.
 */
console.log("Chain: Monkey > Squirrel > Dog\n");
clientCode(monkey);
console.log("");
console.log("Subchain: Squirrel > Dog\n");
clientCode(squirrel);
