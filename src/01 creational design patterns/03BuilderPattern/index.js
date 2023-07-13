"use strict";
/**
 * EN: Real World Example for the Builder design pattern
 *
 * Need: To have a User class with a lot of optional parameters and some complex logic
 *
 * Solution: Create a new class that knows how to build the User by parts
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _user;
exports.__esModule = true;
exports.UserBuilder = exports.User = void 0;
/**
 * EN: User concrete class
 */
var User = /** @class */ (function () {
    function User() {
        this.gender = Gender.Undefined;
        this.isAdmin = false;
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setSurname = function (surname) {
        this.surname = surname;
    };
    User.prototype.setEmail = function (email) {
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            throw new Error("Invalid email format");
        }
        this.email = email;
    };
    User.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    User.prototype.setAddress = function (streetName, number, city, zipCode, country) {
        this.address = streetName + " " + number + ", " + city + " (" + zipCode + ") " + country;
    };
    User.prototype.setIsAdmin = function (isAdmin) {
        this.isAdmin = isAdmin;
    };
    User.prototype.setPhoneNumber = function (phoneNumber) {
        if (!/"^[+]?[(]?\d{3})?[-\s.]?\d{3}[-\s.]?\d{4,6}$"/.test(phoneNumber)) {
            throw new Error("Invalid phone number format");
        }
        this.phoneNumber = phoneNumber;
    };
    return User;
}());
exports.User = User;
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Undefined"] = "Undefined";
})(Gender || (Gender = {}));
/**
 * EN: User concrete Builder
 */
var UserBuilder = /** @class */ (function () {
    function UserBuilder() {
        _user.set(this, void 0);
        this.reset();
    }
    UserBuilder.prototype.reset = function () {
        __classPrivateFieldSet(this, _user, new User());
        return this;
    };
    UserBuilder.prototype.getProduct = function () {
        var product = __classPrivateFieldGet(this, _user);
        this.reset();
        return product;
    };
    UserBuilder.prototype.setName = function (name) {
        __classPrivateFieldGet(this, _user).setName(name);
        return this;
    };
    UserBuilder.prototype.setSurname = function (surname) {
        __classPrivateFieldGet(this, _user).setSurname(surname);
        return this;
    };
    UserBuilder.prototype.setEmail = function (email) {
        __classPrivateFieldGet(this, _user).setEmail(email);
        return this;
    };
    UserBuilder.prototype.setMaleGender = function () {
        __classPrivateFieldGet(this, _user).setGender(Gender.Male);
        return this;
    };
    UserBuilder.prototype.setFemaleGender = function () {
        __classPrivateFieldGet(this, _user).setGender(Gender.Female);
        return this;
    };
    UserBuilder.prototype.setUndefinedGender = function () {
        __classPrivateFieldGet(this, _user).setGender(Gender.Undefined);
        return this;
    };
    UserBuilder.prototype.setAddress = function (streetName, number, city, zipCode, country) {
        __classPrivateFieldGet(this, _user).setAddress(streetName, number, city, zipCode, country);
        return this;
    };
    UserBuilder.prototype.setIsAdmin = function () {
        __classPrivateFieldGet(this, _user).setIsAdmin(true);
        return this;
    };
    UserBuilder.prototype.setPhoneNumber = function (phoneNumber) {
        __classPrivateFieldGet(this, _user).setPhoneNumber(phoneNumber);
        return this;
    };
    return UserBuilder;
}());
exports.UserBuilder = UserBuilder;
_user = new WeakMap();
/**
 * EN: The client can create as many users needed and with the parts needed
 * with a single builder
 */
var userBuilder = new UserBuilder();
var user1 = userBuilder
    .setName("Justin")
    .setSurname("Case")
    .setEmail("justin.case@gmail.com")
    .setMaleGender()
    .getProduct();
var user2 = userBuilder
    .setName("Pat")
    .setSurname("Roll")
    .setPhoneNumber("+34555989898")
    .setAddress("Corner Case", 7, "LA", "08080", "US")
    .getProduct();
var user3 = userBuilder
    .setEmail("hugo.first@gmail.com")
    .setIsAdmin()
    .getProduct();
