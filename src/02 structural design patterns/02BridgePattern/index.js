/**
 * EN: Real World Example for the Bridge Design Pattern
 *
 * Need: Define different views (with or w/o icon, with or w/o description...)
 * for different content types in a list inside a webpage
 *
 * Solution: Create a bridge for the 2 dimensions:
 *             - View (abstraction)
 *             - Content type (implementation)
 *
 * Credits to: https://github.com/martincrb/bridge-design-pattern/blob/main/bridgePattern.ts
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
 * EN: The Abstraction defines the interface for the first dimension, in this
 * case the different list item views we have for a given content
 */
var ListItemViewAbstraction = /** @class */ (function () {
    function ListItemViewAbstraction(contentType) {
        this.contentType = contentType;
    }
    return ListItemViewAbstraction;
}());
/**
 * EN: Now we can extend the Abstraction with the different views and
 * independently of the content types
 */
var VisualListItemView = /** @class */ (function (_super) {
    __extends(VisualListItemView, _super);
    function VisualListItemView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VisualListItemView.prototype.getRenderedItem = function () {
        return "    <li>\n        " + this.contentType.renderThumbnail() + "\n        " + this.contentType.renderLink() + "\n    </li>";
    };
    return VisualListItemView;
}(ListItemViewAbstraction));
var DescriptiveListItemView = /** @class */ (function (_super) {
    __extends(DescriptiveListItemView, _super);
    function DescriptiveListItemView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptiveListItemView.prototype.getRenderedItem = function () {
        return "    <li>\n        " + this.contentType.renderTitle() + "\n        " + this.contentType.renderCaption() + "\n    </li>";
    };
    return DescriptiveListItemView;
}(ListItemViewAbstraction));
/**
 * EN: Time to create the different implementations, in this case the different
 * content types we have in our application: posts, videos, articles, tweets...
 */
var PostContentType = /** @class */ (function () {
    function PostContentType(title, caption, imageUrl, url) {
        this.title = title;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.url = url;
    }
    PostContentType.prototype.renderTitle = function () {
        return "<h2>" + this.title + "<h2>";
    };
    PostContentType.prototype.renderCaption = function () {
        return "<p>" + this.caption + "</p>";
    };
    PostContentType.prototype.renderThumbnail = function () {
        return "<img alt='" + this.title + "' src='" + this.imageUrl + "'/>";
    };
    PostContentType.prototype.renderLink = function () {
        return "<a href='" + this.url + "'>" + this.title + "</a>";
    };
    return PostContentType;
}());
var VideoContentType = /** @class */ (function () {
    function VideoContentType(title, description, thumbnailUrl, url) {
        this.title = title;
        this.description = description;
        this.thumbnailUrl = thumbnailUrl;
        this.url = url;
    }
    VideoContentType.prototype.renderTitle = function () {
        return "<h2>" + this.title + "<h2>";
    };
    VideoContentType.prototype.renderCaption = function () {
        return "<p>" + this.description + "</p>";
    };
    VideoContentType.prototype.renderThumbnail = function () {
        return "<img alt='" + this.title + "' src='" + this.thumbnailUrl + "'/>";
    };
    VideoContentType.prototype.renderLink = function () {
        return "<a href='" + this.url + "'>" + this.title + "</a>";
    };
    return VideoContentType;
}());
var TweetContentType = /** @class */ (function () {
    function TweetContentType(tweet, profilePictureUrl, tweetUrl) {
        this.tweet = tweet;
        this.profilePictureUrl = profilePictureUrl;
        this.tweetUrl = tweetUrl;
    }
    TweetContentType.prototype.renderTitle = function () {
        return "<h2>" + this.tweet.substring(0, 50) + "...<h2>";
    };
    TweetContentType.prototype.renderCaption = function () {
        return "<p>" + this.tweet + "</p>";
    };
    TweetContentType.prototype.renderThumbnail = function () {
        return "<img alt='" + this.tweet.substring(0, 50) + "...' src='" + this.profilePictureUrl + "'/>";
    };
    TweetContentType.prototype.renderLink = function () {
        return "<a href='" + this.tweetUrl + "'>" + this.tweet.substring(0, 30) + "...</a>";
    };
    return TweetContentType;
}());
/**
 * EN: The client code only depends on the Abstraction. Now we can extend
 * abstractions (i.e. add new views) without impacting implementations
 * (content types). Also we can add new content types without impacting
 * anything from the views.
 */
var content = [
    new PostContentType("New example available on RefactoringGuru", "Bridge design pattern now has a real world example", "http://img.sample.org/bridge.jpg", "https://refactoring.guru/design-patterns/bridge"),
    new TweetContentType("Windows will support Linux executables natively on Windows 12", "http://img.sample.org/profile.jpg", "https://twitter.com/genbeta/387487346856/"),
    new VideoContentType("BRIDGE | Patrones de Diseño", "En éste vídeo de la serie de PATRONES DE DISEÑO veremos el PATRÓN BRIDGE!", "http://img.sample.org/bridge.jpg", "https://www.youtube.com/watch?v=6bIHhzqMdgg"),
];
/**
 * EN: The client code can use any Abstraction to render items
 */
var visualList = content.map(function (i) { return new VisualListItemView(i); });
console.log("<h1>Visual Page</h1>");
console.log("<ul>");
for (var _i = 0, visualList_1 = visualList; _i < visualList_1.length; _i++) {
    var visualItem = visualList_1[_i];
    console.log(visualItem.getRenderedItem());
}
console.log("</ul>");
var descriptiveList = content.map(function (i) { return new DescriptiveListItemView(i); });
console.log("<h1>Descriptive Page</h1>");
console.log("<ul>");
for (var _a = 0, descriptiveList_1 = descriptiveList; _a < descriptiveList_1.length; _a++) {
    var descriptiveItem = descriptiveList_1[_a];
    console.log(descriptiveItem.getRenderedItem());
}
console.log("</ul>");
