"use strict";
/**
 * EN: Real World Example for the Abstract Factory design pattern
 *
 * Need: Provide different infrastructure connectors for different
 * environments, for example to mock some dependencies in testing
 * environments, use cloud services in production, etc.
 *
 * Solution: Create an abstract factory to supply variants of file systems,
 * databases and log providers. There is a concrete factory for each
 * environment. This factory is configured to provide different concrete
 * connectors for each type of environment. For example, in development we
 * use the console to log messages, whereas in production we use the Sentry
 * service.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdEnvironmentFactory = exports.DevEnvironmentFactory = exports.EnvironmentFactory = exports.SentryLogProvider = exports.ConsoleLogProvider = exports.MockFS = exports.RealFS = exports.S3FS = exports.InMemoryMockDB = exports.MySQLDB = exports.LogProvider = exports.FS = exports.DB = void 0;
/**
 * EN: First of all create some abstract products = connectors
 */
var DB = /** @class */ (function () {
    function DB() {
    }
    return DB;
}());
exports.DB = DB;
var FS = /** @class */ (function () {
    function FS() {
    }
    return FS;
}());
exports.FS = FS;
var LogProvider = /** @class */ (function () {
    function LogProvider() {
    }
    return LogProvider;
}());
exports.LogProvider = LogProvider;
/**
 * EN: Declare the different concrete product variants
 */
var MySQLDB = /** @class */ (function (_super) {
    __extends(MySQLDB, _super);
    function MySQLDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySQLDB.prototype.connect = function () {
        console.log("Connected to MySQL");
    };
    return MySQLDB;
}(DB));
exports.MySQLDB = MySQLDB;
var InMemoryMockDB = /** @class */ (function (_super) {
    __extends(InMemoryMockDB, _super);
    function InMemoryMockDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InMemoryMockDB.prototype.connect = function () {
        console.log("Mocking DB in memory");
    };
    return InMemoryMockDB;
}(DB));
exports.InMemoryMockDB = InMemoryMockDB;
var S3FS = /** @class */ (function (_super) {
    __extends(S3FS, _super);
    function S3FS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    S3FS.prototype.readFile = function (filename) {
        console.log("Reading file ".concat(filename, " from S3"));
    };
    return S3FS;
}(FS));
exports.S3FS = S3FS;
var RealFS = /** @class */ (function (_super) {
    __extends(RealFS, _super);
    function RealFS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RealFS.prototype.readFile = function (filename) {
        console.log("Reading file ".concat(filename, " from a real FS"));
    };
    return RealFS;
}(FS));
exports.RealFS = RealFS;
var MockFS = /** @class */ (function (_super) {
    __extends(MockFS, _super);
    function MockFS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockFS.prototype.readFile = function (filename) {
        console.log("Mocking a read file call to ".concat(filename));
    };
    return MockFS;
}(FS));
exports.MockFS = MockFS;
var ConsoleLogProvider = /** @class */ (function (_super) {
    __extends(ConsoleLogProvider, _super);
    function ConsoleLogProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConsoleLogProvider.prototype.log = function (message) {
        console.log("From console: ".concat(message));
    };
    return ConsoleLogProvider;
}(LogProvider));
exports.ConsoleLogProvider = ConsoleLogProvider;
var SentryLogProvider = /** @class */ (function (_super) {
    __extends(SentryLogProvider, _super);
    function SentryLogProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SentryLogProvider.prototype.log = function (message) {
        console.log("From Sentry: ".concat(message));
    };
    return SentryLogProvider;
}(LogProvider));
exports.SentryLogProvider = SentryLogProvider;
/**
 * EN: Then create the abstract factory
 */
var EnvironmentFactory = /** @class */ (function () {
    function EnvironmentFactory() {
    }
    return EnvironmentFactory;
}());
exports.EnvironmentFactory = EnvironmentFactory;
/**
 * EN: Finally create a concrete factory, one for each environment. Each
 * factory produces different concrete products = connectors, depending on
 * each environment needs
 */
var DevEnvironmentFactory = /** @class */ (function (_super) {
    __extends(DevEnvironmentFactory, _super);
    function DevEnvironmentFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DevEnvironmentFactory.prototype.getDB = function () {
        return new InMemoryMockDB();
    };
    DevEnvironmentFactory.prototype.getFS = function () {
        return new MockFS();
    };
    DevEnvironmentFactory.prototype.getLogProvider = function () {
        return new ConsoleLogProvider();
    };
    return DevEnvironmentFactory;
}(EnvironmentFactory));
exports.DevEnvironmentFactory = DevEnvironmentFactory;
var ProdEnvironmentFactory = /** @class */ (function (_super) {
    __extends(ProdEnvironmentFactory, _super);
    function ProdEnvironmentFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProdEnvironmentFactory.prototype.getDB = function () {
        return new MySQLDB();
    };
    ProdEnvironmentFactory.prototype.getFS = function () {
        return new RealFS();
    };
    ProdEnvironmentFactory.prototype.getLogProvider = function () {
        return new SentryLogProvider();
    };
    return ProdEnvironmentFactory;
}(EnvironmentFactory));
exports.ProdEnvironmentFactory = ProdEnvironmentFactory;
/**
 * EN: The client function receives a factory to produce what it needs to
 * execute the application. It's not concerned about the environment.
 */
function client(environmentFactory) {
    var db = environmentFactory.getDB();
    db.connect();
    var fs = environmentFactory.getFS();
    fs.readFile("document.txt");
    var logProvider = environmentFactory.getLogProvider();
    logProvider.log("hello world");
}
/**
 * EN: Based on an environment variable, inject the concrete factory
 * implementation of the environment to the client function
 */
var NODE_ENV = "dev";
if (NODE_ENV === "production") {
    client(new ProdEnvironmentFactory());
}
else {
    client(new DevEnvironmentFactory());
}
