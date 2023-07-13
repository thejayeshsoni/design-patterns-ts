"use strict";
/**
 * EN: Real World Example for the Prototype design pattern
 *
 * Need: To have a Document class with several components that can be copied & pasted
 *
 * Solution: All components should have the ability to clone themselves
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Link = exports.TextBox = exports.Drawing = exports.Title = exports.Document = exports.ComponentPrototype = void 0;
var ComponentPrototype = /** @class */ (function () {
    function ComponentPrototype() {
    }
    ComponentPrototype.prototype.clone = function () {
        return __assign({}, this);
    };
    return ComponentPrototype;
}());
exports.ComponentPrototype = ComponentPrototype;
/**
 * EN: The document class
 *
 */
var Document = /** @class */ (function (_super) {
    __extends(Document, _super);
    function Document() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.components = [];
        return _this;
    }
    Document.prototype.clone = function () {
        var clonedDocument = new Document();
        clonedDocument.components = this.components.map(function (c) { return c.clone(); });
        return clonedDocument;
    };
    Document.prototype.add = function (component) {
        this.components.push(component);
    };
    return Document;
}(ComponentPrototype));
exports.Document = Document;
/**
 * EN: Some components to add to a document
 *
 */
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    Title.prototype.setText = function (text) {
        this.text = text;
    };
    return Title;
}(ComponentPrototype));
exports.Title = Title;
var Drawing = /** @class */ (function (_super) {
    __extends(Drawing, _super);
    function Drawing(shape) {
        var _this = _super.call(this) || this;
        _this.shape = shape;
        return _this;
    }
    Drawing.prototype.setShape = function (shape) {
        this.shape = shape;
    };
    return Drawing;
}(ComponentPrototype));
exports.Drawing = Drawing;
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    TextBox.prototype.setText = function (text) {
        this.text = text;
    };
    return TextBox;
}(ComponentPrototype));
exports.TextBox = TextBox;
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(text, url) {
        var _this = _super.call(this) || this;
        _this.text = text;
        _this.url = url;
        return _this;
    }
    Link.prototype.setText = function (text) {
        this.text = text;
    };
    Link.prototype.setUrl = function (url) {
        this.url = url;
    };
    return Link;
}(ComponentPrototype));
exports.Link = Link;
/**
 * EN: The client code.
 *
 */
var document = new Document();
var title = new Title("Example Domain");
var textbox = new TextBox("This domain is for use in illustrative examples");
document.add(title);
document.add(new Drawing("line"));
document.add(textbox);
document.add(new Link("example.com", "https://example.com/"));
var clonedDocument = document.clone();
title.setText("New title for the original document");
textbox.setText("New textbox text for the original document");
console.log("document is:");
console.log(document);
console.log("clonedDocument is:");
console.log(clonedDocument);
