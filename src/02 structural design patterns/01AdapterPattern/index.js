"use strict";
/**
 * EN: Real World Example for the Adapter Design Pattern
 *
 * Need: Interact with a Taxi price calculator that works with miles and £
 * with a client that provide Kms and expect a price in €.
 *
 * Solution: Create an adapter that translates the input and output values
 * into the expected formats.
 */
exports.__esModule = true;
exports.Fares = exports.UKTaxiCalculatorLibrary = void 0;
/**
 * EN: The Adaptee is an existing library that contains the logic that we want
 * to reuse.
 */
var UKTaxiCalculatorLibrary = /** @class */ (function () {
    function UKTaxiCalculatorLibrary() {
    }
    UKTaxiCalculatorLibrary.prototype.getPriceInPounds = function (miles, fare) {
        if (fare === Fares.Airport) {
            return 5 + miles * 2.15;
        }
        return miles * 1.95;
    };
    return UKTaxiCalculatorLibrary;
}());
exports.UKTaxiCalculatorLibrary = UKTaxiCalculatorLibrary;
var Fares;
(function (Fares) {
    Fares[Fares["Standard"] = 0] = "Standard";
    Fares[Fares["Airport"] = 1] = "Airport";
})(Fares = exports.Fares || (exports.Fares = {}));
/**
 * EN: The Taxi Calculator Adapter makes the Adaptee's interface compatible
 * with the one that the client expects.
 */
var UKTaxiCalculatorLibraryAdapter = /** @class */ (function () {
    function UKTaxiCalculatorLibraryAdapter(adaptee) {
        this.adaptee = adaptee;
    }
    UKTaxiCalculatorLibraryAdapter.prototype.calculatePriceInEuros = function (km, isAirport) {
        var miles = km * 1.609;
        var fare = isAirport ? Fares.Airport : Fares.Standard;
        var pounds = this.adaptee.getPriceInPounds(miles, fare);
        var euros = pounds * 1.15;
        return euros;
    };
    return UKTaxiCalculatorLibraryAdapter;
}());
/**
 * EN: The client code works with objects that implements the TaxiCalculator
 * interface, so we can use the adapter to reuse the incompatible library
 */
function client(taxiCalculator) {
    console.log("Calculating the price for a 15 Km run to the airport");
    var priceInEuros = taxiCalculator.calculatePriceInEuros(15, true);
    console.log("Total price: " + priceInEuros + "\u20AC");
}
var incompatibleLibrary = new UKTaxiCalculatorLibrary();
var adaptedLibrary = new UKTaxiCalculatorLibraryAdapter(incompatibleLibrary);
client(adaptedLibrary);
