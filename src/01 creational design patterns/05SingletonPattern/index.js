/**
 * EN: Singleton Design Pattern
 *
 * Intent: Lets you ensure that a class has only one instance, while providing a
 * global access point to this instance.
 */
/**
 * EN: The Singleton class defines the `getInstance` method that lets clients
 * access the unique singleton instance.
 */
var Singleton = /** @class */ (function () {
    /**
     * EN: The Singleton's constructor should always be private to prevent
     * direct construction calls with the `new` operator.
     */
    function Singleton() {
    }
    /**
     * EN: The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    /**
     * EN: Finally, any singleton should define some business logic, which can
     * be executed on its instance.
     */
    Singleton.prototype.someBusinessLogic = function () {
        // ...
    };
    return Singleton;
}());
/**
 * EN: The client code.
 */
function clientCode() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log("Singleton works, both variables contain the same instance.");
    }
    else {
        console.log("Singleton failed, variables contain different instances.");
    }
}
clientCode();
