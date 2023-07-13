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
//  ABSTRACCIONES
var ListItemView = /** @class */ (function () {
    function ListItemView(viewModel) {
        this.viewModel = viewModel;
    }
    ListItemView.prototype.render = function () {
        console.log("default abstract render");
    };
    return ListItemView;
}());
// CONCRECIONES
var WithThumbnailListItemView = /** @class */ (function (_super) {
    __extends(WithThumbnailListItemView, _super);
    function WithThumbnailListItemView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WithThumbnailListItemView.prototype.render = function () {
        console.log("------------------------------------------");
        console.log("Here render amazing thumbnail: " + this.viewModel.image());
        console.log("" + this.viewModel.title());
        console.log("------------------------------------------");
        console.log(" ");
    };
    return WithThumbnailListItemView;
}(ListItemView));
var JustTextListItemView = /** @class */ (function (_super) {
    __extends(JustTextListItemView, _super);
    function JustTextListItemView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JustTextListItemView.prototype.render = function () {
        console.log("------------------------------------------");
        console.log("Just render title: " + this.viewModel.title());
        console.log("------------------------------------------");
        console.log(" ");
    };
    return JustTextListItemView;
}(ListItemView));
var VideoViewModel = /** @class */ (function () {
    function VideoViewModel(video) {
        this.video = video;
    }
    VideoViewModel.prototype.title = function () {
        return "(VIDEO) " + this.video.title;
    };
    VideoViewModel.prototype.image = function () {
        return "(VIDEO) " + this.video.image;
    };
    return VideoViewModel;
}());
var StreamViewModel = /** @class */ (function () {
    function StreamViewModel(stream) {
        this.stream = stream;
    }
    StreamViewModel.prototype.title = function () {
        return "(STREAM) " + this.stream.title + " Currently Viewing " + this.stream.viewers;
    };
    StreamViewModel.prototype.image = function () {
        return "(STREAM) " + this.stream.image;
    };
    return StreamViewModel;
}());
// TESTING BRIDGE PATTERN, JUST FOR SHOWING HOW IT BEHAVES
var contents = [
    {
        type: "video",
        title: "Egoland 2: Tirando misiles",
        image: "Amazing image"
    },
    {
        type: "stream",
        title: "JUGANDO A POKÉMON, UNANSE!",
        image: "Amazing image",
        viewers: 10
    },
    {
        type: "stream",
        title: "SÚPER EXTENSIBLE PROGRAMANDO UNA SUB UN BUG",
        image: "Amazing image",
        viewers: 12034
    },
    {
        type: "video",
        title: "Campanadas Ibai 2034",
        image: "Amazing image"
    },
    {
        type: "video",
        title: "Jorge Salvaje programando un Eroge",
        image: "Amazing image"
    },
];
var listViews = [];
for (var _i = 0, contents_1 = contents; _i < contents_1.length; _i++) {
    var item = contents_1[_i];
    if (item.type === "video") {
        // JUST FOR TESTING, THIS CAN BE SOLVED USING TYPES OR OTHER PATTERNS
        listViews.push(Math.random() > 0.5
            ? new WithThumbnailListItemView(new VideoViewModel(item))
            : new JustTextListItemView(new VideoViewModel(item)));
    }
    else if (item.type === "stream") {
        listViews.push(Math.random() > 0.5
            ? new WithThumbnailListItemView(new StreamViewModel(item))
            : new JustTextListItemView(new StreamViewModel(item)));
    }
}
for (var _a = 0, listViews_1 = listViews; _a < listViews_1.length; _a++) {
    var view = listViews_1[_a];
    view.render();
}
