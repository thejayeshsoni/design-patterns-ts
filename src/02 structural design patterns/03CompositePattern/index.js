"use strict";
/**
 * EN: Real World Example for the Composite Design Pattern
 *
 * Need: Calculate the total price of a shipment of packages that can contain
 * other packages
 *
 * Solution: Create a common interface for the package that contains only
 * products (leafs) and the package that contains other packages
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
exports.__esModule = true;
exports.ProductLeaf = exports.PackageComponent = void 0;
/**
 * EN: The base Package (Component) class declares the common operations.
 * Removed the reference to the parent as in this example is not needed.
 */
var PackageComponent = /** @class */ (function () {
    function PackageComponent(title) {
        this.title = title;
    }
    PackageComponent.prototype.add = function (packageComponent) { };
    PackageComponent.prototype.remove = function (packageComponent) { };
    PackageComponent.prototype.isComposite = function () {
        return false;
    };
    return PackageComponent;
}());
exports.PackageComponent = PackageComponent;
/**
 * EN: The Product (Leaf) class only has the getPrice implementation
 */
var ProductLeaf = /** @class */ (function (_super) {
    __extends(ProductLeaf, _super);
    function ProductLeaf(title, price) {
        var _this = _super.call(this, title) || this;
        _this.price = price;
        return _this;
    }
    ProductLeaf.prototype.getPrice = function () {
        return this.price;
    };
    return ProductLeaf;
}(PackageComponent));
exports.ProductLeaf = ProductLeaf;
/**
 * EN: The MultiPackage (Composite) class represents a complex package that
 * contains other packages
 */
var MultiPackageComposite = /** @class */ (function (_super) {
    __extends(MultiPackageComposite, _super);
    function MultiPackageComposite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.childrenPackages = [];
        return _this;
    }
    MultiPackageComposite.prototype.add = function (packageComponent) {
        this.childrenPackages.push(packageComponent);
    };
    MultiPackageComposite.prototype.remove = function (packageComponent) {
        var index = this.childrenPackages.indexOf(packageComponent);
        this.childrenPackages.splice(index, 1);
    };
    MultiPackageComposite.prototype.isComposite = function () {
        return true;
    };
    MultiPackageComposite.prototype.getPrice = function () {
        return this.childrenPackages.reduce(function (prev, curr) { return prev + curr.getPrice(); }, 0);
    };
    return MultiPackageComposite;
}(PackageComponent));
/**
 * EN: The client code always works with base Package components
 */
var galaxyPackage = getGalaxyS68Pack();
var canonPackage = getCanonM50Pack();
var simpleHeadphonesPackage = getHeadphones();
var mainShipment = new MultiPackageComposite("Main Shipment");
mainShipment.add(galaxyPackage);
mainShipment.add(canonPackage);
mainShipment.add(simpleHeadphonesPackage);
console.log("Total shipment cost: " + mainShipment.getPrice() + "\u20AC");
/**
 * EN: Helper (builder) functions hide there are 2 concrete package components
 */
function getGalaxyS68Pack() {
    var complexMobilePackage = new MultiPackageComposite("Galaxy S68 Pack");
    complexMobilePackage.add(new ProductLeaf("Galaxy S68", 900));
    complexMobilePackage.add(new ProductLeaf("S68 Charger", 25));
    complexMobilePackage.add(new ProductLeaf("S68 Case", 15));
    return complexMobilePackage;
}
function getCanonM50Pack() {
    var complexCameraPackage = new MultiPackageComposite("Canon M50 Pack");
    complexCameraPackage.add(new ProductLeaf("Canon M50", 600));
    complexCameraPackage.add(new ProductLeaf("A50 1.8 Lens", 250));
    complexCameraPackage.add(new ProductLeaf("128 Gb Micro SD", 40));
    complexCameraPackage.add(new ProductLeaf("Canon Generic Case", 150));
    return complexCameraPackage;
}
function getHeadphones() {
    return new ProductLeaf("HyperX Cloud Flight", 150);
}
