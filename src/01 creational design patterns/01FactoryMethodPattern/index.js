"use strict";
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
exports.RadisConnection = exports.MongoConnection = exports.DBConnection = exports.RadisConnectionFactory = exports.MongoConnectionFactory = exports.DBConnectionFactory = void 0;
var DBConnectionFactory = /** @class */ (function () {
    function DBConnectionFactory() {
    }
    return DBConnectionFactory;
}());
exports.DBConnectionFactory = DBConnectionFactory;
var MongoConnectionFactory = /** @class */ (function (_super) {
    __extends(MongoConnectionFactory, _super);
    function MongoConnectionFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MongoConnectionFactory.prototype.createDBConnection = function () {
        return new MongoConnection();
    };
    return MongoConnectionFactory;
}(DBConnectionFactory));
exports.MongoConnectionFactory = MongoConnectionFactory;
var RadisConnectionFactory = /** @class */ (function (_super) {
    __extends(RadisConnectionFactory, _super);
    function RadisConnectionFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadisConnectionFactory.prototype.createDBConnection = function () {
        return new RadisConnection();
    };
    return RadisConnectionFactory;
}(DBConnectionFactory));
exports.RadisConnectionFactory = RadisConnectionFactory;
var DBConnection = /** @class */ (function () {
    function DBConnection() {
    }
    DBConnection.prototype.connect = function () {
        console.log("Connected to ".concat(this.provider));
    };
    return DBConnection;
}());
exports.DBConnection = DBConnection;
var MongoConnection = /** @class */ (function (_super) {
    __extends(MongoConnection, _super);
    function MongoConnection() {
        var _this = _super.call(this) || this;
        _this.provider = "MongoDB";
        return _this;
    }
    return MongoConnection;
}(DBConnection));
exports.MongoConnection = MongoConnection;
var RadisConnection = /** @class */ (function (_super) {
    __extends(RadisConnection, _super);
    function RadisConnection() {
        var _this = _super.call(this) || this;
        _this.provider = "Radis";
        return _this;
    }
    return RadisConnection;
}(DBConnection));
exports.RadisConnection = RadisConnection;
function main(dbConnectionFactory) {
    var dbConncetion = dbConnectionFactory.createDBConnection();
    dbConncetion.connect();
}
var db = "radis";
switch (db) {
    case "mongo":
        main(new MongoConnectionFactory());
        break;
    case "radis":
        main(new RadisConnectionFactory());
        break;
    default:
        console.error("Unknow DB");
}
