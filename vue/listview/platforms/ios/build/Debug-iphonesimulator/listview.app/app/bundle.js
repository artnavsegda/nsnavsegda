require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./data.ts": "./data.ts",
	"./examples/FirstVisibleIndex.ts": "./examples/FirstVisibleIndex.ts",
	"./examples/GettingStarted.ts": "./examples/GettingStarted.ts",
	"./examples/GettingStartedHo.ts": "./examples/GettingStartedHo.ts",
	"./examples/GridLayout.ts": "./examples/GridLayout.ts",
	"./examples/GridLayoutNoHeight.ts": "./examples/GridLayoutNoHeight.ts",
	"./examples/Group.ts": "./examples/Group.ts",
	"./examples/GroupScrollTo.ts": "./examples/GroupScrollTo.ts",
	"./examples/GroupWithHeaderFooter.ts": "./examples/GroupWithHeaderFooter.ts",
	"./examples/ItemAnimations.ts": "./examples/ItemAnimations.ts",
	"./examples/ItemLoading.ts": "./examples/ItemLoading.ts",
	"./examples/ItemReorder.ts": "./examples/ItemReorder.ts",
	"./examples/ItemSelection.ts": "./examples/ItemSelection.ts",
	"./examples/LoadOnDemand.ts": "./examples/LoadOnDemand.ts",
	"./examples/MultipleTemplates.ts": "./examples/MultipleTemplates.ts",
	"./examples/Observable.ts": "./examples/Observable.ts",
	"./examples/PullToRefresh.ts": "./examples/PullToRefresh.ts",
	"./examples/ScrollTo.ts": "./examples/ScrollTo.ts",
	"./examples/StaggeredLayout.ts": "./examples/StaggeredLayout.ts",
	"./examples/SwipeActions.ts": "./examples/SwipeActions.ts",
	"./examples/TemplateGroup.ts": "./examples/TemplateGroup.ts",
	"./examples/index.ts": "./examples/index.ts",
	"./main.ts": "./main.ts",
	"./views/Home.ts": "./views/Home.ts",
	"./views/index.ts": "./views/index.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".nameLabel"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".descriptionLabel"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".titleLabel"],"declarations":[{"type":"declaration","property":"margin","value":"16"},{"type":"declaration","property":"vertical-align","value":"center"}]},{"type":"rule","selectors":[".item"],"declarations":[{"type":"declaration","property":"text-align","value":"left"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"color","value":"#404040"},{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".grid-item"],"declarations":[{"type":"comment","comment":" the same as the .item styles\n  except for the vertical-align: center\n  which causes a weird infinite recursion\n  and a call stack overflow measuring the\n  item's vertical position "},{"type":"declaration","property":"text-align","value":"left"},{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"color","value":"#404040"},{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".footer"],"declarations":[{"type":"declaration","property":"margin","value":"20"},{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".swipe-item"],"declarations":[{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".swipe-item.left"],"declarations":[{"type":"declaration","property":"background-color","value":"#240774"}]},{"type":"rule","selectors":[".swipe-item.right"],"declarations":[{"type":"declaration","property":"background-color","value":"#79000a"}]},{"type":"rule","selectors":[".red"],"declarations":[{"type":"declaration","property":"background-color","value":"#ff9999"}]},{"type":"rule","selectors":[".green"],"declarations":[{"type":"declaration","property":"background-color","value":"#99ff99"}]},{"type":"rule","selectors":[".blue"],"declarations":[{"type":"declaration","property":"background-color","value":"#6666ff"}]},{"type":"rule","selectors":[".selected"],"declarations":[{"type":"declaration","property":"background-color","value":"#aaaaaa"}]},{"type":"rule","selectors":[".iosButton"],"declarations":[{"type":"declaration","property":"margin","value":"10"}]},{"type":"rule","selectors":[".red-transparent-selection-list"],"declarations":[{"type":"declaration","property":"item-selected-background-color","value":"red"},{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"color","value":"white"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./data.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemList = function (count) {
    var itemList = [];
    for (var i = 1; i <= count; i++) {
        itemList.push({
            id: i,
            name: "Item " + i,
            description: "Item " + i + " description",
        });
    }
    return itemList;
};
exports.simpleItemList = exports.getItemList(20);
exports.simpleItemList100 = exports.getItemList(100);


/***/ }),

/***/ "./examples/FirstVisibleIndex.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Get first visible index';
exports.default = {
    name: 'FirstVisibleIndex',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <GridLayout rows=\"auto, auto, *\">\n      <Label margin=\"10\" :text=\"'First visible item: ' + firstVisibleIndex\"></Label>\n      <Button margin=\"10\" row=\"1\" text=\"Get first visible\" @tap=\"getFirstVisiblePosition\"></Button>\n      <RadListView ref=\"listView\"\n                    row=\"2\"\n                    for=\"item in itemList\">\n        <v-template>\n          <StackLayout class=\"item\" orientation=\"vertical\" :backgroundColor=\"item.id % 2 != 0 ? 'lightgreen' : 'lightblue'\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n            <Label :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </GridLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: data_1.getItemList(100),
            firstVisibleIndex: 0
        };
    },
    methods: {
        getFirstVisiblePosition: function () {
            var listView = this.$refs.listView.nativeView;
            this.firstVisibleIndex = listView.getFirstVisiblePosition();
            console.log("First visible index:", this.firstVisibleIndex);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};


/***/ }),

/***/ "./examples/GettingStarted.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Getting Started';
// >> listview-getting-started-vue
exports.default = {
    name: 'GettingStarted',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout>\n      <RadListView ref=\"listView\"\n                   for=\"item in itemList\"\n                   @itemTap=\"onItemTap\">\n        <v-template>\n          <StackLayout class=\"item\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n            <Label :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: data_1.getItemList(10),
        };
    },
    methods: {
        onItemTap: function (_a) {
            var item = _a.item;
            console.log("Tapped on " + item.name);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};
// << listview-getting-started-vue


/***/ }),

/***/ "./examples/GettingStartedHo.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Getting Started Horizontal';
exports.default = {
    name: 'GettingStartedHo',
    description: description,
    template: "\n    <Page>\n      <ActionBar :title=\"title\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n      </ActionBar>\n    <StackLayout>\n      <RadListView for=\"item in itemList\"\n                   orientation=\"horizontal\"\n                   @itemTap=\"onItemTap\">\n        <v-template>\n          <StackLayout class=\"m-r-10\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n            <Label :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: data_1.simpleItemList,
        };
    },
    methods: {
        onItemTap: function (_a) {
            var item = _a.item;
            console.log("Tapped on " + item.name);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};


/***/ }),

/***/ "./examples/GridLayout.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Grid with item height';
// >> listvue-gridlayout-vue
exports.default = {
    name: 'GridLayoutList',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout>\n      <RadListView for=\"item in itemList\"\n                   layout=\"grid\"\n                   itemHeight=\"100\"\n                   @itemTap=\"onItemTap\">\n        <v-template>\n          <StackLayout class=\"grid-item\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n            <Label :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: data_1.simpleItemList,
        };
    },
    methods: {
        onItemTap: function (_a) {
            var item = _a.item;
            console.log("Tapped on " + item.name);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};
// << listvue-gridlayout-vue


/***/ }),

/***/ "./examples/GridLayoutNoHeight.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Grid without item height';
exports.default = {
    name: 'GridLayoutWithFixedHeight',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <GridLayout>\n      <RadListView for=\"item in itemList\"\n                   layout=\"grid\"\n                   @itemTap=\"onItemTap\">\n        <v-template>\n          <GridLayout rows=\"auto, auto\" :backgroundColor=\"item.id % 2 != 0 ? 'lightgreen' : 'lightblue'\">\n            <Label row=\"0\" :text=\"item.name\"></Label>\n            <Label row=\"1\" :text=\"item.description\"></Label>\n          <GridLayout>\n        </v-template>\n      </RadListView>\n    </GridLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: data_1.simpleItemList100,
        };
    },
    methods: {
        onItemTap: function (_a) {
            var item = _a.item;
            console.log("Tapped on " + item.name);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};


/***/ }),

/***/ "./examples/Group.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Group';
exports.default = {
    name: 'Group',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <GridLayout orientation=\"vertical\" rows=\"auto, *\">\n      <RadListView for=\"item in itemList\" :groupingFunction=\"getItemGroup\">\n        <v-template>\n          <StackLayout class=\"item\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </GridLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: [
                { name: 'Item 1', group: 'Ready' },
                { name: 'Item 2', group: 'Completed' },
                { name: 'Item 3', group: 'Completed' },
                { name: 'Item 4', group: 'Ready' },
                { name: 'Item 5', group: 'Completed' },
                { name: 'Item 6', group: 'Completed' },
            ],
        };
    },
    methods: {
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        },
        getItemGroup: function (item) {
            return item.group;
        },
    }
};


/***/ }),

/***/ "./examples/GroupScrollTo.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var observable_array_1 = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
var DataItem = /** @class */ (function () {
    function DataItem(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }
    return DataItem;
}());
exports.DataItem = DataItem;
var description = 'Grouping with Scroll to Index';
var items = [];
for (var i = 0; i < 50; i++) {
    items.push(new DataItem(i, "item " + i, "description " + i, i % 2 === 0 ? "Group 1" : "Group 2"));
}
var dataItems = new observable_array_1.ObservableArray(items);
exports.default = {
    name: 'GroupScrollTo',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <GridLayout rows=\"auto, *\" rows=\"auto, *\">\n      <Button text=\"Scroll to 1 index\" @tap=\"onScrollTo\"></Button>\n      <RadListView row=\"1\" ref=\"myListView\" for=\"item in itemList\" :groupingFunction=\"getItemGroup\">\n        <v-template>\n          <StackLayout>\n            <Label fontSize=\"20\" :text=\"item.name\"/>\n            <Label fontSize=\"14\" :text=\"item.description\"/>\n          </StackLayout>\n        </v-template>\n        <v-template name=\"group\">\n          <GridLayout ios:height=\"50\">\n              <Label :text=\"item.category\" backgroundColor=\"lightblue\" padding=\"15\"/>\n          </GridLayout>\n        </v-template>\n      </RadListView>\n    </GridLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: dataItems,
        };
    },
    methods: {
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        },
        getItemGroup: function (item) {
            return item.category;
        },
        onScrollTo: function () {
            this.$refs.myListView.nativeView.scrollToIndex(1);
        }
    }
};


/***/ }),

/***/ "./examples/GroupWithHeaderFooter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Group with header/footer';
exports.default = {
    name: 'Group with header/footer',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <GridLayout orientation=\"vertical\" rows=\"auto, *\">\n      <StackLayout orientation=\"horizontal\">\n        <Button :text=\"isEnabled ? 'Disable grouping' : 'Enable grouping'\" @tap=\"toggleGrouping\"></Button>\n      </StackLayout>\n      <RadListView row=\"1\" ref=\"myListView\" for=\"item in itemList\" :groupingFunction=\"getItemGroup\">\n        <v-template>\n          <StackLayout class=\"item\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n          </StackLayout>\n        </v-template>\n        <v-template name=\"header\">\n          <Label text=\"Header with height auto\" backgroundColor=\"#65a565\" fontSize=\"45\"></Label>\n        </v-template>\n        <v-template name=\"footer\">\n          <Label text=\"Footer with height auto\" backgroundColor=\"#7fff7f\"></Label>\n        </v-template>\n      </RadListView>\n    </GridLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            isEnabled: true,
            itemList: this.getItemList(),
        };
    },
    methods: {
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        },
        getItemList: function () {
            var GENERATED_ITEMS_COUNT = 100;
            var GROUPS_COUNT = 3;
            var SPECIAL_ITEM_INTERVAL = 4;
            var generateItems = function () {
                var items = [];
                for (var i = 1; i <= GENERATED_ITEMS_COUNT; i++) {
                    items.push({
                        name: i % SPECIAL_ITEM_INTERVAL === 0 ? "Special Item " + i : "Item " + i,
                        group: "Category " + i % GROUPS_COUNT
                    });
                }
                return items;
            };
            return generateItems();
        },
        getItemGroup: function (item) {
            return item.group;
        },
        toggleGrouping: function () {
            var listView = this.$refs.myListView.nativeView;
            if (!listView.groupingFunction) {
                listView.groupingFunction = this.getItemGroup;
                this.isEnabled = true;
            }
            else {
                listView.groupingFunction = undefined;
                this.isEnabled = false;
            }
        }
    }
};


/***/ }),

/***/ "./examples/ItemAnimations.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var observable_array_1 = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
var nativescript_ui_listview_1 = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
var description = "Item Animations";
var _itemsCount = 0;
var dataItems = new observable_array_1.ObservableArray(data_1.getItemList(_itemsCount));
exports.default = {
    name: "Item Animations",
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n\n      <ActionItem text=\"Options\" ios.position=\"right\" @tap=\"onOptionsTapped\"></ActionItem>\n    </ActionBar>\n    <GridLayout orientation=\"vertical\" rows=\"50, *\">\n      <StackLayout class=\"buttonStackLayout\">\n          <StackLayout row=\"0\" orientation=\"horizontal\" horizontalAlignment=\"center\">\n              <Button text=\"ADD\" @tap=\"onAddItemClick\" ios:class=\"iosButton\"></Button>\n              <Button text=\"DEL\" @tap=\"onRemoveItemClick\" ios:class=\"iosButton\"></Button>\n              <Button text=\"UPDATE\" @tap=\"onUpdateItemClick\" ios:class=\"iosButton\"></Button>\n              <Button text=\"RESET\" @tap=\"onResetClick\" ios:class=\"iosButton\"></Button>\n          </StackLayout>\n      </StackLayout>\n      <RadListView  ref=\"listView\" for=\"item in itemList\" :itemInsertAnimation=\"itemInsertAnimation\" :itemDeleteAnimation=\"itemDeleteAnimation\" row=\"1\">\n      <v-template>\n        <StackLayout class=\"item\" orientation=\"vertical\" @longPress=\"onItemLongPress({index,item})\" @tap=\"onItemTap({index,item})\">\n          <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n          <Label :text=\"item.description\" class=\"descriptionLabel\"></Label>\n        </StackLayout>\n      </v-template>\n      </RadListView>\n    </GridLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: dataItems,
            itemInsertAnimation: undefined,
            itemDeleteAnimation: undefined,
        };
    },
    methods: {
        onAddItemClick: function () {
            this.itemList.push(this.createItem());
        },
        createItem: function () {
            var result = {
                id: _itemsCount,
                name: "This is a new item: " + _itemsCount,
                description: "This is the new item's description."
            };
            _itemsCount++;
            return result;
        },
        onItemTap: function (args) {
            var itemIndex = args.index;
            console.log("onNavigationItemTap", itemIndex);
            this.itemList.splice(itemIndex + 1, 0, this.createItem());
            this.itemList.splice(itemIndex + 3, 0, this.createItem());
        },
        onItemLongPress: function (args) {
            var itemIndex = args.index;
            console.log("onNavigationItemLongPress", itemIndex);
            this.itemList.splice(itemIndex + 1, 1);
            _itemsCount--;
            this.itemList.splice(itemIndex + 2, 1);
            _itemsCount--;
        },
        onResetClick: function () {
            this.itemList = new observable_array_1.ObservableArray(0);
            _itemsCount = 0;
        },
        onUpdateItemClick: function () {
            console.log(this.itemList.length);
            for (var index_1 = 0; index_1 < this.itemList.length; index_1++) {
                var item = this.itemList.getItem(index_1);
                item.name = "This is an updated item";
                item.description = "This is the updated item's description.";
                this.itemList.setItem(index_1, item);
            }
        },
        onRemoveItemClick: function () {
            this.itemList.splice(this.itemList.length - 1, 1);
        },
        onOptionsTapped: function (args) {
            var _this = this;
            dialogs
                .action({
                message: "Animation",
                cancelButtonText: "Cancel",
                actions: [
                    nativescript_ui_listview_1.ListViewItemAnimation.Default,
                    nativescript_ui_listview_1.ListViewItemAnimation.Fade,
                    nativescript_ui_listview_1.ListViewItemAnimation.Scale,
                    nativescript_ui_listview_1.ListViewItemAnimation.Slide
                ]
            })
                .then(function (result) {
                _this.itemInsertAnimation = result;
                _this.itemDeleteAnimation = result;
            });
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};


/***/ }),

/***/ "./examples/ItemLoading.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var color_1 = __webpack_require__("../node_modules/@nativescript/core/color/color.js");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Item Loading';
exports.default = {
    name: 'ItemLoading',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout>\n      <RadListView for=\"item in itemList\"\n                   @itemLoading=\"onItemLoading\">\n        <v-template>\n          <StackLayout class=\"item p-10\" orientation=\"vertical\">\n            <Label id=\"label\" :text=\"item.name\" class=\"nameLabel m-t-10\"></Label>\n            <Label id=\"label\" :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: data_1.simpleItemList,
        };
    },
    methods: {
        onItemLoading: function (_a) {
            var index = _a.index, view = _a.view;
            if (index % 2 === 0) {
                view.backgroundColor = new color_1.Color('#b3ecff');
                var label = view.getViewById('label');
                label.fontSize = 30;
            }
            else {
                view.backgroundColor = new color_1.Color('#ccf2ff');
                var label = view.getViewById('label');
                label.fontSize = 20;
            }
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};


/***/ }),

/***/ "./examples/ItemReorder.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Item Reorder';
// >> listview-itemreorder-vue
exports.default = {
    name: 'ItemReorder',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout>\n      <RadListView ref=\"listView\"\n                   for=\"item in itemList\"\n                   itemReorder=\"true\"\n                   @itemReordered=\"onItemReordered\">\n        <v-template>\n          <StackLayout class=\"item m-10\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: data_1.simpleItemList,
            selectedItems: [],
        };
    },
    methods: {
        onItemReordered: function (_a) {
            var index = _a.index, data = _a.data, object = _a.object;
            console.log("Item reordered from index " + index + " to " + data.targetIndex);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};
// << listview-itemreorder-vue


/***/ }),

/***/ "./examples/ItemSelection.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var observable_array_1 = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
var description = 'Item Selection';
// >> listview-itemselection-vue
exports.default = {
    name: 'ItemSelection',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout backgroundColor=\"green\">\n      <RadListView ref=\"listView\"\n                   class=\"red-transparent-selection-list\"\n                   for=\"item in itemList\"\n                   selectionBehavior=\"Press\"\n                   @itemSelected=\"onItemSelected\"\n                   @itemSelecting=\"onItemSelecting\"\n                   @itemDeselecting=\"onItemDeselecting\"\n                   @itemDeselected=\"onItemDeselected\">\n        <v-template>\n          <StackLayout orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel m-t-10\"></Label>\n            <Label :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        var items = data_1.getItemList(20);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.class = '';
        }
        return {
            title: description,
            itemList: new observable_array_1.ObservableArray(items),
        };
    },
    methods: {
        onItemSelected: function (_a) {
            var index = _a.index, object = _a.object;
            var itemSelected = this.itemList.getItem(index);
            console.log("Item selected: " + itemSelected.name);
        },
        onItemSelecting: function (_a) {
            var index = _a.index, object = _a.object;
            var itemSelected = this.itemList.getItem(index);
            console.log("Item selecting: " + itemSelected.name);
        },
        onItemDeselecting: function (_a) {
            var index = _a.index, object = _a.object;
            var itemSelected = this.itemList.getItem(index);
            console.log("Item deselecting: " + itemSelected.name);
        },
        onItemDeselected: function (_a) {
            var index = _a.index, object = _a.object;
            var itemSelected = this.itemList.getItem(index);
            console.log("Item deselected " + itemSelected.name);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};
// << listview-itemselection-vue


/***/ }),

/***/ "./examples/LoadOnDemand.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
var data_1 = __webpack_require__("./data.ts");
var description = 'Load On Demand';
var allItems = data_1.getItemList(20);
var chunkSize = 6;
var nextItems = function () {
    return allItems.splice(0, chunkSize);
};
var initItems = function () {
    allItems = data_1.getItemList(20);
    return allItems.splice(0, chunkSize);
};
exports.default = {
    name: 'LoadOnDemand',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout>\n      <RadListView for=\"item in itemList\"\n                   loadOnDemandMode=\"Manual\"\n                   @loadMoreDataRequested=\"onLoadMoreItemsRequested\">\n        <v-template>\n          <StackLayout class=\"item p-10\" orientation=\"vertical\">\n            <Label id=\"label\" :text=\"item.name\" class=\"nameLabel m-t-10\"></Label>\n            <Label id=\"label\" :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n        <v-template v-if=\"isIOS\" name=\"loadondemand\">\n          <GridLayout style=\"background-color: white\">\n            <Label text=\"Load more\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></Label>\n          </GridLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: initItems(),
            isIOS: platform_1.isIOS,
        };
    },
    methods: {
        onLoadMoreItemsRequested: function (args) {
            var listView = args.object;
            var self = this;
            if (allItems.length > 0) {
                setTimeout(function () {
                    console.log('Loading more items...');
                    nextItems().forEach(function (item) {
                        self.itemList.push(item);
                    });
                    listView.notifyLoadOnDemandFinished();
                }, 1500);
                args.returnValue = true;
            }
            else {
                args.returnValue = false;
                listView.notifyLoadOnDemandFinished(true);
            }
        },
        onNavigationButtonTap: function () {
            this.$navigateBack();
        }
    }
};


/***/ }),

/***/ "./examples/MultipleTemplates.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Multiple Templates';
// >> listview-multipletemplates-itemselector-vue
exports.default = {
    name: 'MultipleTemplates',
    description: 'Multiple Templates',
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <TabView>\n      <TabViewItem title=\"template selector\">\n        <GridLayout orientation=\"vertical\" rows=\"auto, *\">\n          <RadListView for=\"item in itemList\"\n                       :itemTemplateSelector=\"templateSelector\">\n            <v-template name=\"red\">\n              <StackLayout class=\"item red\" orientation=\"vertical\">\n                <Label :text=\"item.name + ' selector'\" class=\"nameLabel\"></Label>\n                <Label :text=\"item.type\" class=\"nameLabel\"></Label>\n              </StackLayout>\n            </v-template>\n            <v-template name=\"green\">\n              <StackLayout class=\"item green\" orientation=\"vertical\">\n                <Label :text=\"item.name + ' selector'\" class=\"nameLabel\"></Label>\n                <Label :text=\"item.type\" class=\"nameLabel\"></Label>\n              </StackLayout>\n            </v-template>\n            <v-template name=\"blue\">\n              <StackLayout class=\"item blue\" orientation=\"vertical\">\n                <Label :text=\"item.name + ' selector'\" class=\"nameLabel\"></Label>\n                <Label :text=\"item.type\" class=\"nameLabel\"></Label>\n              </StackLayout>\n            </v-template>\n          </RadListView>\n        </GridLayout>\n      </TabViewItem>\n      <TabViewItem title=\"v-template if\">\n        <GridLayout orientation=\"vertical\" rows=\"auto, *\">\n          <RadListView for=\"item in itemList\">\n            <v-template name=\"red\" if=\"item.type === 'red'\">\n              <StackLayout class=\"item red\" orientation=\"vertical\">\n                <Label :text=\"item.name + ' if template'\" class=\"nameLabel\"></Label>\n                <Label :text=\"item.type\" class=\"nameLabel\"></Label>\n              </StackLayout>\n            </v-template>\n            <v-template name=\"green\" if=\"item.type === 'green'\">\n              <StackLayout class=\"item green\" orientation=\"vertical\">\n                <Label :text=\"item.name + ' if template'\" class=\"nameLabel\"></Label>\n                <Label :text=\"item.type\" class=\"nameLabel\"></Label>\n              </StackLayout>\n            </v-template>\n            <v-template name=\"blue\" if=\"item.type === 'blue'\">\n              <StackLayout class=\"item blue\" orientation=\"vertical\">\n                <Label :text=\"item.name + ' if template'\" class=\"nameLabel\"></Label>\n                <Label :text=\"item.type\" class=\"nameLabel\"></Label>\n              </StackLayout>\n            </v-template>\n          </RadListView>\n        </GridLayout>\n      </TabViewItem>\n    </TabView>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: [
                { name: 'Item 1', type: 'red' },
                { name: 'Item 2', type: 'green' },
                { name: 'Item 3', type: 'blue' },
                { name: 'Item 4', type: 'red' },
                { name: 'Item 5', type: 'green' },
                { name: 'Item 6', type: 'blue' },
            ],
        };
    },
    methods: {
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        },
        templateSelector: function (item, index, items) {
            return {
                red: 'red',
                green: 'green',
                blue: 'blue',
            }[item.type];
        },
    }
};
// << listview-multipletemplates-itemselector-vue


/***/ }),

/***/ "./examples/Observable.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var observable_array_1 = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
var description = 'Observable items';
var getObservableList = function () {
    return new observable_array_1.ObservableArray([
        0,
        1,
        2,
    ]);
};
var getList = function () {
    return [
        0,
        1,
        2,
    ];
};
var RadListItem = {
    name: 'RadListItem',
    template: "\n    <Label class=\"p-10\"\n           :text=\"itemText\"\n           col=\"0\" textWrap=\"true\" verticalAlignment=\"center\"/>\n  ",
    props: ['item'],
    created: function () {
        this.$emit('create-item');
    },
    computed: {
        itemText: function () {
            return "Item: " + this.item;
        }
    },
    watch: {
        item: function (value, oldValue) {
            this.$emit('update-item', {
                old: oldValue,
                new: value
            });
        },
    },
};
exports.default = {
    name: 'Observable',
    description: description,
    template: "\n  <Page>\n    <ActionBar>\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n      <ActionItem text=\"Observable\" android.position=\"popup\" @tap=\"onSelectObservable()\"></ActionItem>\n      <ActionItem text=\"Non observable\" android.position=\"popup\" @tap=\"onSelectNonObservable()\"></ActionItem>\n    </ActionBar>\n    <StackLayout orientation=\"vertical\">\n      <GridLayout columns=\"*, *\" rows=\"auto\">\n        <Button text=\"Add item\" @tap=\"addItem\" col=\"0\" />\n        <Button text=\"Remove last item\" @tap=\"deleteItem\" col=\"1\" />\n      </GridLayout>\n      <GridLayout columns=\"*, *\" rows=\"auto\">\n        <RadListView for=\"r in currentList\" col=\"0\"\n                     @itemTap=\"onItemTap\">\n          <v-template>\n            <RadListItem :item=\"r\"\n                         @create-item=\"markCreation(r)\"\n                         @update-item=\"markUpdate\" />\n          </v-template>\n        </RadListView>\n        <RadListView ref=\"counterlist\" for=\"r in createsCounter\" col=\"1\">\n          <v-template>\n            <Label :text=\"'Create counter: ' + r\"></Label>\n          </v-template>\n        </RadListView>\n      </GridLayout>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            currentList: getObservableList(),
            createsCounter: [0, 0, 0],
            useObservable: true,
            biggestDeletedItem: 0,
        };
    },
    components: { RadListItem: RadListItem },
    computed: {
        lastItem: function () {
            return !this.useObservable ?
                this.currentList[this.currentList.length - 1]
                : this.currentList.getItem(this.currentList.length - 1);
        },
        nextItem: function () {
            return this.currentList.length;
        },
    },
    methods: {
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        },
        addItem: function () {
            console.log("Push " + this.nextItem);
            var next = this.nextItem;
            this.currentList.push(this.nextItem);
            if (this.createsCounter.length < this.currentList.length && next <= this.biggestDeletedItem) {
                this.createsCounter.push(1);
            }
        },
        deleteItem: function () {
            console.log("Delete " + this.lastItem);
            if (this.currentList.length === 0) {
                if (this.useObservable) {
                    this.currentList = new observable_array_1.ObservableArray(0);
                    this.createsCounter = [];
                }
                return;
            }
            if (this.biggestDeletedItem < this.lastItem) {
                this.biggestDeletedItem = this.lastItem;
            }
            this.deletedItems.push(this.lastItem);
            var index = this.currentList.length - 1;
            this.currentList.splice(index, 1);
            this.createsCounter.splice(index, 1);
            if (this.currentList.length === 0) {
                if (this.useObservable) {
                    this.currentList = new observable_array_1.ObservableArray(0);
                    this.createsCounter = [];
                }
            }
        },
        markCreation: function (item) {
            console.log("Mark item creation for " + item + "...");
            if (this.createsCounter.length < this.currentList.length) {
                this.createsCounter.push(1);
            }
            else {
                this.createsCounter[item]++;
            }
            this.$refs.counterlist.refresh();
        },
        markUpdate: function (data) {
            var index = this.deletedItems.indexOf(data.old);
            if (index !== -1) {
                console.log("Old item " + data.old + " reused for the new " + data.new + " value");
            }
        },
        onSelectObservable: function () {
            this.useObservable = true;
            this.currentList = getObservableList();
            this.createsCounter = [0, 0, 0];
            this.biggestDeletedItem = 0;
        },
        onSelectNonObservable: function () {
            this.useObservable = false;
            this.currentList = getList();
            this.createsCounter = [0, 0, 0];
            this.biggestDeletedItem = 0;
        },
        onItemTap: function (_a) {
            var item = _a.item;
            console.log("Item tapped: " + item);
        },
    },
    created: function () {
        this.deletedItems = [];
    },
};


/***/ }),

/***/ "./examples/PullToRefresh.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Pull To Refresh';
// >> listview-pulltorefresh-vue
exports.default = {
    name: 'PullToRefresh',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout>\n      <RadListView ref=\"listView\"\n                   for=\"fruit in fruitList\"\n                   pullToRefresh=\"true\"\n                   @itemTap=\"onItemTap\"\n                   @pullToRefreshInitiated=\"onPullToRefreshInitiated\">\n        <v-template>\n          <StackLayout class=\"item\" orientation=\"vertical\">\n            <Label :text=\"fruit.name\" class=\"titleLabel\"></Label>\n            <StackLayout height=\"1\" backgroundColor=\"#EEEEEE\"></StackLayout>\n          </StackLayout>\n        </v-template>\n\n        <v-template name=\"footer\">\n          <StackLayout class=\"footer\">\n            <Label :text=\"footerText\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            fruitList: [
                {
                    name: 'Apple',
                },
                {
                    name: 'Orange',
                },
                {
                    name: 'Tomato',
                }
            ],
        };
    },
    computed: {
        footerText: function () {
            return "List with " + this.fruitList.length + " items";
        },
    },
    methods: {
        onPullToRefreshInitiated: function (_a) {
            var _this = this;
            var object = _a.object;
            console.log('Pulling...');
            // in order to avoid race conditions (only on iOS),
            // in which the UI may not be completely updated here
            // we use this.$nextTick call
            this.$nextTick(function () {
                _this.fruitList.push({
                    name: 'Berry',
                });
                object.notifyPullToRefreshFinished();
            });
        },
        onItemTap: function (_a) {
            var item = _a.item;
            console.log("Tapped on " + item.name);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};
// << listview-pulltorefresh-vue


/***/ }),

/***/ "./examples/ScrollTo.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var nativescript_ui_listview_1 = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
var description = 'Scroll To Item';
// >> listview-scrolling-vue
exports.default = {
    name: 'ScrollTo',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout>\n      <Label class=\"big header\" :text=\"scrollText\"></Label>\n      <RadListView ref=\"listView\"\n                   for=\"item in itemList\"\n                   @itemTap=\"onItemTap\"\n                   @loaded=\"onLoaded\"\n                   @scrolled=\"onScrolled\">\n        <v-template>\n          <StackLayout class=\"item\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n            <Label :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            scrollOffset: 0,
            itemList: data_1.getItemList(100),
        };
    },
    computed: {
        scrollText: function () {
            return "Scrolled to " + this.scrollOffset + " offset";
        },
    },
    methods: {
        onItemTap: function (_a) {
            var item = _a.item;
            console.log("Tapped on " + item.name);
        },
        onLoaded: function () {
            var _this = this;
            // in order to avoid race conditions (only on iOS),
            // in which the UI may not be completely updated here
            // we use this.$nextTick call
            this.$nextTick(function () {
                var indexToScroll = 49;
                console.log('Programmatic scrolling to ' + _this.itemList[indexToScroll].name + '... ');
                _this.$refs.listView.scrollToIndex(indexToScroll, false, nativescript_ui_listview_1.ListViewItemSnapMode.Start);
            });
        },
        onScrolled: function (_a) {
            var scrollOffset = _a.scrollOffset;
            this.scrollOffset = scrollOffset;
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};
// << listview-scrolling-vue


/***/ }),

/***/ "./examples/StaggeredLayout.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Staggered Layout';
// >> listview-staggeredlayout-vue
var words = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
var getRandomString = function () {
    var length = Math.round((Math.random() * 15));
    var result = words[0];
    for (var i = 0; i < length; i++) {
        result += (words[i % words.length] + ' ');
    }
    return result;
};
var getRandomItems = function (size) {
    var items = [];
    for (var i = 0; i < size; i++) {
        items.push({
            name: "Item " + i,
            description: getRandomString(),
        });
    }
    return items;
};
exports.default = {
    name: 'StaggeredLayoutList',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <StackLayout>\n      <RadListView for=\"item in itemList\"\n                   layout=\"staggered\"\n                   gridSpanCount=\"3\"\n                   @itemTap=\"onItemTap\">\n        <v-template>\n          <StackLayout class=\"item\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n            <Label :text=\"item.description\" class=\"descriptionLabel\" textWrap=\"true\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: getRandomItems(20),
        };
    },
    methods: {
        onItemTap: function (_a) {
            var item = _a.item;
            console.log("Tapped on " + item.name);
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        }
    }
};
// << listview-staggeredlayout-vue


/***/ }),

/***/ "./examples/SwipeActions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = __webpack_require__("./data.ts");
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Swipe Actions';
// >> listview-swipeactions-vue
exports.default = {
    name: 'SwipeActions',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <GridLayout orientation=\"vertical\" rows=\"auto, *\">\n      <RadListView ref=\"listView\"\n                   for=\"item in itemList\"\n                   swipeActions=\"true\"\n                   @itemSwipeProgressStarted=\"onSwipeStarted\">\n        <v-template>\n          <StackLayout class=\"item p-t-10\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n            <Label :text=\"item.description\" class=\"descriptionLabel\"></Label>\n          </StackLayout>\n        </v-template>\n\n        <v-template name=\"itemswipe\">\n          <GridLayout columns=\"auto, *, auto\" backgroundColor=\"White\">\n            <StackLayout id=\"mark-view\" col=\"0\" class=\"swipe-item left\"\n                         orientation=\"horizontal\" @tap=\"onLeftSwipeClick\">\n              <Label text=\"mark\" verticalAlignment=\"center\" horizontalAlignment=\"center\"/>\n            </StackLayout>\n            <StackLayout id=\"delete-view\" col=\"2\" class=\"swipe-item right\"\n                         orientation=\"horizontal\" @tap=\"onRightSwipeClick\">\n              <Label text=\"delete\" verticalAlignment=\"center\" horizontalAlignment=\"center\" />\n            </StackLayout>\n          </GridLayout>\n        </v-template>\n      </RadListView>\n    </GridLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: data_1.getItemList(20),
        };
    },
    methods: {
        onSwipeStarted: function (_a) {
            var data = _a.data, object = _a.object;
            console.log("Swipe started");
            var swipeLimits = data.swipeLimits;
            var swipeView = object;
            var leftItem = swipeView.getViewById('mark-view');
            var rightItem = swipeView.getViewById('delete-view');
            swipeLimits.left = leftItem.getMeasuredWidth();
            swipeLimits.right = rightItem.getMeasuredWidth();
            swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
        },
        onLeftSwipeClick: function (event) {
            console.log('left action tapped');
            this.$refs.listView.notifySwipeToExecuteFinished();
        },
        onRightSwipeClick: function (_a) {
            var object = _a.object;
            console.log('right action tapped');
            // remove item
            this.itemList.splice(this.itemList.indexOf(object.bindingContext), 1);
            this.$refs.listView.notifySwipeToExecuteFinished();
        },
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        },
    }
};
// << listview-swipeactions-vue


/***/ }),

/***/ "./examples/TemplateGroup.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
var description = 'Template Group';
exports.default = {
    name: 'TemplateGroup',
    description: description,
    template: "\n  <Page>\n    <ActionBar :title=\"title\">\n      <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" @tap=\"onNavigationButtonTap\"></NavigationButton>\n    </ActionBar>\n    <GridLayout orientation=\"vertical\" rows=\"auto, *\">\n      <RadListView for=\"item in itemList\" :groupingFunction=\"getItemGroup\">\n        <v-template name=\"group\">\n          <Label :text=\"item.category + ' items'\" class=\"green\"/>\n        </v-template>\n        <v-template>\n          <StackLayout class=\"item\" orientation=\"vertical\">\n            <Label :text=\"item.name\" class=\"nameLabel\"></Label>\n          </StackLayout>\n        </v-template>\n      </RadListView>\n    </GridLayout>\n  </Page>\n  ",
    data: function () {
        return {
            title: description,
            itemList: [
                { name: 'Item 1', group: 'Ready' },
                { name: 'Item 2', group: 'Completed' },
                { name: 'Item 3', group: 'Completed' },
                { name: 'Item 4', group: 'Ready' },
                { name: 'Item 5', group: 'Completed' },
                { name: 'Item 6', group: 'Completed' },
            ],
        };
    },
    methods: {
        onNavigationButtonTap: function () {
            frame_1.Frame.topmost().goBack();
        },
        getItemGroup: function (item) {
            return item.group;
        },
    }
};


/***/ }),

/***/ "./examples/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GettingStarted_1 = __webpack_require__("./examples/GettingStarted.ts");
var GettingStartedHo_1 = __webpack_require__("./examples/GettingStartedHo.ts");
var GridLayout_1 = __webpack_require__("./examples/GridLayout.ts");
var GridLayoutNoHeight_1 = __webpack_require__("./examples/GridLayoutNoHeight.ts");
var ItemAnimations_1 = __webpack_require__("./examples/ItemAnimations.ts");
var ItemLoading_1 = __webpack_require__("./examples/ItemLoading.ts");
var ItemReorder_1 = __webpack_require__("./examples/ItemReorder.ts");
var ItemSelection_1 = __webpack_require__("./examples/ItemSelection.ts");
var LoadOnDemand_1 = __webpack_require__("./examples/LoadOnDemand.ts");
var MultipleTemplates_1 = __webpack_require__("./examples/MultipleTemplates.ts");
var Observable_1 = __webpack_require__("./examples/Observable.ts");
var PullToRefresh_1 = __webpack_require__("./examples/PullToRefresh.ts");
var ScrollTo_1 = __webpack_require__("./examples/ScrollTo.ts");
var StaggeredLayout_1 = __webpack_require__("./examples/StaggeredLayout.ts");
var SwipeActions_1 = __webpack_require__("./examples/SwipeActions.ts");
var Group_1 = __webpack_require__("./examples/Group.ts");
var GroupScrollTo_1 = __webpack_require__("./examples/GroupScrollTo.ts");
var GroupWithHeaderFooter_1 = __webpack_require__("./examples/GroupWithHeaderFooter.ts");
var TemplateGroup_1 = __webpack_require__("./examples/TemplateGroup.ts");
var FirstVisibleIndex_1 = __webpack_require__("./examples/FirstVisibleIndex.ts");
exports.getExamples = function () {
    return [
        GettingStarted_1.default,
        GettingStartedHo_1.default,
        GridLayout_1.default,
        GridLayoutNoHeight_1.default,
        StaggeredLayout_1.default,
        ItemAnimations_1.default,
        PullToRefresh_1.default,
        ItemLoading_1.default,
        ItemReorder_1.default,
        ItemSelection_1.default,
        LoadOnDemand_1.default,
        MultipleTemplates_1.default,
        Group_1.default,
        GroupScrollTo_1.default,
        GroupWithHeaderFooter_1.default,
        TemplateGroup_1.default,
        ScrollTo_1.default,
        SwipeActions_1.default,
        Observable_1.default,
        FirstVisibleIndex_1.default
    ];
};


/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> listview-vue-import
var nativescript_vue_1 = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
// >> (hide)
var examples_1 = __webpack_require__("./examples/index.ts");
var views = __webpack_require__("./views/index.ts");
// << (hide)
var vue_1 = __webpack_require__("../node_modules/nativescript-ui-listview/vue/index.js");
nativescript_vue_1.default.use(vue_1.default);
// << listview-vue-import
for (var _i = 0, _a = examples_1.getExamples(); _i < _a.length; _i++) {
    var comp = _a[_i];
    nativescript_vue_1.default.component(comp.name, comp);
}
nativescript_vue_1.default.component(views.Home.name, views.Home);
// Vue.config.silent = false;
new nativescript_vue_1.default({
    template: "\n    <Frame>\n      <Home />\n    </Frame>\n  "
}).$start();

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","name":"nativescript-vue-template","version":"0.1.1","android":{"v8Flags":"--expose_gc","markingMode":"none","requireModules":["nativescript-ui-listview"]}};

/***/ }),

/***/ "./views/Home.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var examples_1 = __webpack_require__("./examples/index.ts");
exports.default = {
    name: 'Home',
    template: "\n    <Page>\n      <ActionBar title=\"ListView Vue\">\n      </ActionBar>\n      <StackLayout>\n        <RadListView ref=\"listView\"\n                     for=\"example in examples\"\n                     @itemTap=\"goToExample\">\n          <v-template>\n            <StackLayout class=\"item\" orientation=\"vertical\">\n              <Label :text=\"example.description\" class=\"titleLabel\"></Label>\n              <StackLayout height=\"1\" backgroundColor=\"#EEEEEE\"></StackLayout>\n            </StackLayout>\n          </v-template>\n        </RadListView>\n      </StackLayout>\n  </Page>\n  ",
    data: function () {
        return {
            examples: examples_1.getExamples(),
        };
    },
    methods: {
        goToExample: function (_a) {
            var item = _a.item;
            this.$navigateTo(item);
        }
    }
};


/***/ }),

/***/ "./views/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Home_1 = __webpack_require__("./views/Home.ts");
exports.Home = Home_1.default;


/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9kYXRhLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL0ZpcnN0VmlzaWJsZUluZGV4LnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL0dldHRpbmdTdGFydGVkLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL0dldHRpbmdTdGFydGVkSG8udHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvR3JpZExheW91dC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9HcmlkTGF5b3V0Tm9IZWlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvR3JvdXBTY3JvbGxUby50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9Hcm91cFdpdGhIZWFkZXJGb290ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvSXRlbUFuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvSXRlbUxvYWRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvSXRlbVJlb3JkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvSXRlbVNlbGVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9Mb2FkT25EZW1hbmQudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvTXVsdGlwbGVUZW1wbGF0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvT2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9QdWxsVG9SZWZyZXNoLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL1Njcm9sbFRvLnRzIiwid2VicGFjazovLy8uL2V4YW1wbGVzL1N0YWdnZXJlZExheW91dC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9Td2lwZUFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvVGVtcGxhdGVHcm91cC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL3ZpZXdzL0hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKOzs7Ozs7O0FDaERBLHlIQUEyRSxtQkFBTyxDQUFDLHNJQUFvRztBQUN2TCwwRUFBMEUsbUJBQU8sQ0FBQyxzSUFBb0csR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUseUVBQXlFLEVBQUUsMERBQTBELHlEQUF5RCxFQUFFLEVBQUUsaUVBQWlFLHlEQUF5RCxFQUFFLEVBQUUsMkRBQTJELHNEQUFzRCxFQUFFLGtFQUFrRSxFQUFFLEVBQUUscURBQXFELDREQUE0RCxFQUFFLGtFQUFrRSxFQUFFLHlEQUF5RCxFQUFFLDBEQUEwRCxFQUFFLG1FQUFtRSxFQUFFLEVBQUUsMERBQTBELHVOQUF1TixFQUFFLDREQUE0RCxFQUFFLHlEQUF5RCxFQUFFLDBEQUEwRCxFQUFFLG1FQUFtRSxFQUFFLEVBQUUsdURBQXVELHNEQUFzRCxFQUFFLG1FQUFtRSxFQUFFLDhEQUE4RCxFQUFFLEVBQUUsMkRBQTJELHdEQUF3RCxFQUFFLHVEQUF1RCxFQUFFLEVBQUUsZ0VBQWdFLHFFQUFxRSxFQUFFLEVBQUUsaUVBQWlFLHFFQUFxRSxFQUFFLEVBQUUsb0RBQW9ELHFFQUFxRSxFQUFFLEVBQUUsc0RBQXNELHFFQUFxRSxFQUFFLEVBQUUscURBQXFELHFFQUFxRSxFQUFFLEVBQUUseURBQXlELHFFQUFxRSxFQUFFLEVBQUUsMERBQTBELHNEQUFzRCxFQUFFLEVBQUUsK0VBQStFLCtFQUErRSxFQUFFLHlFQUF5RSxFQUFFLHdEQUF3RCxFQUFFO0FBQ2xzRyxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDZGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsV0FBUztBQUM5QixjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsV0FBUztBQUM5QixjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsV0FBUztBQUM5QixjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyxXQUFTO0FBQzlCLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQzFCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyxXQUFTO0FBQzlCLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUNBQWlDO0FBQ2xELGlCQUFpQixxQ0FBcUM7QUFDdEQsaUJBQWlCLHFDQUFxQztBQUN0RCxpQkFBaUIsaUNBQWlDO0FBQ2xELGlCQUFpQixxQ0FBcUM7QUFDdEQsaUJBQWlCLHFDQUFxQztBQUN0RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7OztBQzdCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQseUJBQXlCLG1CQUFPLENBQUMsOEVBQXdDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN6Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xEYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyxXQUFTO0FBQzlCLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQseUJBQXlCLG1CQUFPLENBQUMsOEVBQXlEO0FBQzFGLGlDQUFpQyxtQkFBTyxDQUFDLHlEQUEwQjtBQUNuRSxjQUFjLG1CQUFPLENBQUMsMERBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZyQ0FBNnJDLFdBQVcsc0JBQXNCLFdBQVc7QUFDenVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxpQ0FBaUMsZ0NBQWdDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2RmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsV0FBUztBQUM5QixjQUFjLG1CQUFPLENBQUMsbURBQXdCO0FBQzlDLGNBQWMsbUJBQU8sQ0FBQyxzREFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbENhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLFdBQVM7QUFDOUIsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsV0FBUztBQUM5QixjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pELHlCQUF5QixtQkFBTyxDQUFDLDhFQUF3QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDaERhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsaUJBQWlCLG1CQUFPLENBQUMseURBQTJCO0FBQ3BELGFBQWEsbUJBQU8sQ0FBQyxXQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQyxpQkFBaUIsZ0NBQWdDO0FBQ2pELGlCQUFpQiwrQkFBK0I7QUFDaEQsaUJBQWlCLDhCQUE4QjtBQUMvQyxpQkFBaUIsZ0NBQWdDO0FBQ2pELGlCQUFpQiwrQkFBK0I7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuQ2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pELHlCQUF5QixtQkFBTyxDQUFDLDhFQUF3QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7O0FDdklhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdERhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLFdBQVM7QUFDOUIsY0FBYyxtQkFBTyxDQUFDLHNEQUEyQjtBQUNqRCxpQ0FBaUMsbUJBQU8sQ0FBQyx5REFBMEI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsV0FBUztBQUM5QixjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsc0RBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUM7QUFDbEQsaUJBQWlCLHFDQUFxQztBQUN0RCxpQkFBaUIscUNBQXFDO0FBQ3RELGlCQUFpQixpQ0FBaUM7QUFDbEQsaUJBQWlCLHFDQUFxQztBQUN0RCxpQkFBaUIscUNBQXFDO0FBQ3REO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7O0FDN0JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsOEJBQWtCO0FBQ2pELHlCQUF5QixtQkFBTyxDQUFDLGdDQUFvQjtBQUNyRCxtQkFBbUIsbUJBQU8sQ0FBQywwQkFBYztBQUN6QywyQkFBMkIsbUJBQU8sQ0FBQyxrQ0FBc0I7QUFDekQsdUJBQXVCLG1CQUFPLENBQUMsOEJBQWtCO0FBQ2pELG9CQUFvQixtQkFBTyxDQUFDLDJCQUFlO0FBQzNDLG9CQUFvQixtQkFBTyxDQUFDLDJCQUFlO0FBQzNDLHNCQUFzQixtQkFBTyxDQUFDLDZCQUFpQjtBQUMvQyxxQkFBcUIsbUJBQU8sQ0FBQyw0QkFBZ0I7QUFDN0MsMEJBQTBCLG1CQUFPLENBQUMsaUNBQXFCO0FBQ3ZELG1CQUFtQixtQkFBTyxDQUFDLDBCQUFjO0FBQ3pDLHNCQUFzQixtQkFBTyxDQUFDLDZCQUFpQjtBQUMvQyxpQkFBaUIsbUJBQU8sQ0FBQyx3QkFBWTtBQUNyQyx3QkFBd0IsbUJBQU8sQ0FBQywrQkFBbUI7QUFDbkQscUJBQXFCLG1CQUFPLENBQUMsNEJBQWdCO0FBQzdDLGNBQWMsbUJBQU8sQ0FBQyxxQkFBUztBQUMvQixzQkFBc0IsbUJBQU8sQ0FBQyw2QkFBaUI7QUFDL0MsOEJBQThCLG1CQUFPLENBQUMscUNBQXlCO0FBQy9ELHNCQUFzQixtQkFBTyxDQUFDLDZCQUFpQjtBQUMvQywwQkFBMEIsbUJBQU8sQ0FBQyxpQ0FBcUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1Q0EsWUFBWSxtQkFBTyxDQUFDLDBFQUF1RDs7O0FBRzNFLFlBQVksSUFBVTtBQUN0Qiw4QkFBOEIsbUJBQU8sQ0FBQyx1REFBOEI7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGFBQWEsS0FBSztBQUM1RDtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0QsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0pBQStIO0FBQzNKO0FBQ0EsZ0JBQWdCLElBQVU7QUFDMUIscUQ7QUFDQSxtRkFBbUYsUUFBUyxRO0FBQzVGLGlCQUFpQjtBQUNqQjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsMkRBQXNDO0FBQ3REO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyxnREFBa0I7QUFDbkQ7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxxQkFBWTtBQUNyQyxZQUFZLG1CQUFPLENBQUMsa0JBQVM7QUFDN0I7QUFDQSxZQUFZLG1CQUFPLENBQUMsdURBQThCO0FBQ2xEO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRFk7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyxxQkFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDakJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLGlCQUFRO0FBQzdCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2RhdGEudHNcIjogXCIuL2RhdGEudHNcIixcblx0XCIuL2V4YW1wbGVzL0ZpcnN0VmlzaWJsZUluZGV4LnRzXCI6IFwiLi9leGFtcGxlcy9GaXJzdFZpc2libGVJbmRleC50c1wiLFxuXHRcIi4vZXhhbXBsZXMvR2V0dGluZ1N0YXJ0ZWQudHNcIjogXCIuL2V4YW1wbGVzL0dldHRpbmdTdGFydGVkLnRzXCIsXG5cdFwiLi9leGFtcGxlcy9HZXR0aW5nU3RhcnRlZEhvLnRzXCI6IFwiLi9leGFtcGxlcy9HZXR0aW5nU3RhcnRlZEhvLnRzXCIsXG5cdFwiLi9leGFtcGxlcy9HcmlkTGF5b3V0LnRzXCI6IFwiLi9leGFtcGxlcy9HcmlkTGF5b3V0LnRzXCIsXG5cdFwiLi9leGFtcGxlcy9HcmlkTGF5b3V0Tm9IZWlnaHQudHNcIjogXCIuL2V4YW1wbGVzL0dyaWRMYXlvdXROb0hlaWdodC50c1wiLFxuXHRcIi4vZXhhbXBsZXMvR3JvdXAudHNcIjogXCIuL2V4YW1wbGVzL0dyb3VwLnRzXCIsXG5cdFwiLi9leGFtcGxlcy9Hcm91cFNjcm9sbFRvLnRzXCI6IFwiLi9leGFtcGxlcy9Hcm91cFNjcm9sbFRvLnRzXCIsXG5cdFwiLi9leGFtcGxlcy9Hcm91cFdpdGhIZWFkZXJGb290ZXIudHNcIjogXCIuL2V4YW1wbGVzL0dyb3VwV2l0aEhlYWRlckZvb3Rlci50c1wiLFxuXHRcIi4vZXhhbXBsZXMvSXRlbUFuaW1hdGlvbnMudHNcIjogXCIuL2V4YW1wbGVzL0l0ZW1BbmltYXRpb25zLnRzXCIsXG5cdFwiLi9leGFtcGxlcy9JdGVtTG9hZGluZy50c1wiOiBcIi4vZXhhbXBsZXMvSXRlbUxvYWRpbmcudHNcIixcblx0XCIuL2V4YW1wbGVzL0l0ZW1SZW9yZGVyLnRzXCI6IFwiLi9leGFtcGxlcy9JdGVtUmVvcmRlci50c1wiLFxuXHRcIi4vZXhhbXBsZXMvSXRlbVNlbGVjdGlvbi50c1wiOiBcIi4vZXhhbXBsZXMvSXRlbVNlbGVjdGlvbi50c1wiLFxuXHRcIi4vZXhhbXBsZXMvTG9hZE9uRGVtYW5kLnRzXCI6IFwiLi9leGFtcGxlcy9Mb2FkT25EZW1hbmQudHNcIixcblx0XCIuL2V4YW1wbGVzL011bHRpcGxlVGVtcGxhdGVzLnRzXCI6IFwiLi9leGFtcGxlcy9NdWx0aXBsZVRlbXBsYXRlcy50c1wiLFxuXHRcIi4vZXhhbXBsZXMvT2JzZXJ2YWJsZS50c1wiOiBcIi4vZXhhbXBsZXMvT2JzZXJ2YWJsZS50c1wiLFxuXHRcIi4vZXhhbXBsZXMvUHVsbFRvUmVmcmVzaC50c1wiOiBcIi4vZXhhbXBsZXMvUHVsbFRvUmVmcmVzaC50c1wiLFxuXHRcIi4vZXhhbXBsZXMvU2Nyb2xsVG8udHNcIjogXCIuL2V4YW1wbGVzL1Njcm9sbFRvLnRzXCIsXG5cdFwiLi9leGFtcGxlcy9TdGFnZ2VyZWRMYXlvdXQudHNcIjogXCIuL2V4YW1wbGVzL1N0YWdnZXJlZExheW91dC50c1wiLFxuXHRcIi4vZXhhbXBsZXMvU3dpcGVBY3Rpb25zLnRzXCI6IFwiLi9leGFtcGxlcy9Td2lwZUFjdGlvbnMudHNcIixcblx0XCIuL2V4YW1wbGVzL1RlbXBsYXRlR3JvdXAudHNcIjogXCIuL2V4YW1wbGVzL1RlbXBsYXRlR3JvdXAudHNcIixcblx0XCIuL2V4YW1wbGVzL2luZGV4LnRzXCI6IFwiLi9leGFtcGxlcy9pbmRleC50c1wiLFxuXHRcIi4vbWFpbi50c1wiOiBcIi4vbWFpbi50c1wiLFxuXHRcIi4vdmlld3MvSG9tZS50c1wiOiBcIi4vdmlld3MvSG9tZS50c1wiLFxuXHRcIi4vdmlld3MvaW5kZXgudHNcIjogXCIuL3ZpZXdzL2luZGV4LnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCIhbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2NzczJqc29uLWxvYWRlcj91c2VGb3JJbXBvcnRzIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJ1wifSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubmFtZUxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGVzY3JpcHRpb25MYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRpdGxlTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLml0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwibGVmdFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM0MDQwNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZ3JpZC1pdGVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIiB0aGUgc2FtZSBhcyB0aGUgLml0ZW0gc3R5bGVzXFxuICBleGNlcHQgZm9yIHRoZSB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyXFxuICB3aGljaCBjYXVzZXMgYSB3ZWlyZCBpbmZpbml0ZSByZWN1cnNpb25cXG4gIGFuZCBhIGNhbGwgc3RhY2sgb3ZlcmZsb3cgbWVhc3VyaW5nIHRoZVxcbiAgaXRlbSdzIHZlcnRpY2FsIHBvc2l0aW9uIFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJsZWZ0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM0MDQwNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9vdGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnN3aXBlLWl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnN3aXBlLWl0ZW0ubGVmdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMjQwNzc0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnN3aXBlLWl0ZW0ucmlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzc5MDAwYVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmOTk5OVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ncmVlblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjOTlmZjk5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJsdWVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzY2NjZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zZWxlY3RlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjYWFhYWFhXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlvc0J1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJlZC10cmFuc3BhcmVudC1zZWxlY3Rpb24tbGlzdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIml0ZW0tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJlZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEl0ZW1MaXN0ID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdmFyIGl0ZW1MaXN0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gY291bnQ7IGkrKykge1xuICAgICAgICBpdGVtTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBpLFxuICAgICAgICAgICAgbmFtZTogXCJJdGVtIFwiICsgaSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkl0ZW0gXCIgKyBpICsgXCIgZGVzY3JpcHRpb25cIixcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtTGlzdDtcbn07XG5leHBvcnRzLnNpbXBsZUl0ZW1MaXN0ID0gZXhwb3J0cy5nZXRJdGVtTGlzdCgyMCk7XG5leHBvcnRzLnNpbXBsZUl0ZW1MaXN0MTAwID0gZXhwb3J0cy5nZXRJdGVtTGlzdCgxMDApO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGFcIik7XG52YXIgZnJhbWVfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIGRlc2NyaXB0aW9uID0gJ0dldCBmaXJzdCB2aXNpYmxlIGluZGV4JztcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBuYW1lOiAnRmlyc3RWaXNpYmxlSW5kZXgnLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB0ZW1wbGF0ZTogXCJcXG4gIDxQYWdlPlxcbiAgICA8QWN0aW9uQmFyIDp0aXRsZT1cXFwidGl0bGVcXFwiPlxcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiBAdGFwPVxcXCJvbk5hdmlnYXRpb25CdXR0b25UYXBcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sICpcXFwiPlxcbiAgICAgIDxMYWJlbCBtYXJnaW49XFxcIjEwXFxcIiA6dGV4dD1cXFwiJ0ZpcnN0IHZpc2libGUgaXRlbTogJyArIGZpcnN0VmlzaWJsZUluZGV4XFxcIj48L0xhYmVsPlxcbiAgICAgIDxCdXR0b24gbWFyZ2luPVxcXCIxMFxcXCIgcm93PVxcXCIxXFxcIiB0ZXh0PVxcXCJHZXQgZmlyc3QgdmlzaWJsZVxcXCIgQHRhcD1cXFwiZ2V0Rmlyc3RWaXNpYmxlUG9zaXRpb25cXFwiPjwvQnV0dG9uPlxcbiAgICAgIDxSYWRMaXN0VmlldyByZWY9XFxcImxpc3RWaWV3XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZm9yPVxcXCJpdGVtIGluIGl0ZW1MaXN0XFxcIj5cXG4gICAgICAgIDx2LXRlbXBsYXRlPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgOmJhY2tncm91bmRDb2xvcj1cXFwiaXRlbS5pZCAlIDIgIT0gMCA/ICdsaWdodGdyZWVuJyA6ICdsaWdodGJsdWUnXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBkYXRhXzEuZ2V0SXRlbUxpc3QoMTAwKSxcbiAgICAgICAgICAgIGZpcnN0VmlzaWJsZUluZGV4OiAwXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldEZpcnN0VmlzaWJsZVBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGlzdFZpZXcgPSB0aGlzLiRyZWZzLmxpc3RWaWV3Lm5hdGl2ZVZpZXc7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VmlzaWJsZUluZGV4ID0gbGlzdFZpZXcuZ2V0Rmlyc3RWaXNpYmxlUG9zaXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgdmlzaWJsZSBpbmRleDpcIiwgdGhpcy5maXJzdFZpc2libGVJbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnJhbWVfMS5GcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGFcIik7XG52YXIgZnJhbWVfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIGRlc2NyaXB0aW9uID0gJ0dldHRpbmcgU3RhcnRlZCc7XG4vLyA+PiBsaXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQtdnVlXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbmFtZTogJ0dldHRpbmdTdGFydGVkJyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPFJhZExpc3RWaWV3IHJlZj1cXFwibGlzdFZpZXdcXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvcj1cXFwiaXRlbSBpbiBpdGVtTGlzdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgQGl0ZW1UYXA9XFxcIm9uSXRlbVRhcFxcXCI+XFxuICAgICAgICA8di10ZW1wbGF0ZT5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpdGVtXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBkYXRhXzEuZ2V0SXRlbUxpc3QoMTApLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYS5pdGVtO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXBwZWQgb24gXCIgKyBpdGVtLm5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIDw8IGxpc3R2aWV3LWdldHRpbmctc3RhcnRlZC12dWVcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhXCIpO1xudmFyIGZyYW1lXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBkZXNjcmlwdGlvbiA9ICdHZXR0aW5nIFN0YXJ0ZWQgSG9yaXpvbnRhbCc7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbmFtZTogJ0dldHRpbmdTdGFydGVkSG8nLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPFBhZ2U+XFxuICAgICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiBAdGFwPVxcXCJvbk5hdmlnYXRpb25CdXR0b25UYXBcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgICA8L0FjdGlvbkJhcj5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDxSYWRMaXN0VmlldyBmb3I9XFxcIml0ZW0gaW4gaXRlbUxpc3RcXFwiXFxuICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIlxcbiAgICAgICAgICAgICAgICAgICBAaXRlbVRhcD1cXFwib25JdGVtVGFwXFxcIj5cXG4gICAgICAgIDx2LXRlbXBsYXRlPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tci0xMFxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1BhZ2U+XFxuICBcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpdGVtTGlzdDogZGF0YV8xLnNpbXBsZUl0ZW1MaXN0LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYS5pdGVtO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXBwZWQgb24gXCIgKyBpdGVtLm5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhXCIpO1xudmFyIGZyYW1lXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBkZXNjcmlwdGlvbiA9ICdHcmlkIHdpdGggaXRlbSBoZWlnaHQnO1xuLy8gPj4gbGlzdHZ1ZS1ncmlkbGF5b3V0LXZ1ZVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdHcmlkTGF5b3V0TGlzdCcsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHRlbXBsYXRlOiBcIlxcbiAgPFBhZ2U+XFxuICAgIDxBY3Rpb25CYXIgOnRpdGxlPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIEB0YXA9XFxcIm9uTmF2aWdhdGlvbkJ1dHRvblRhcFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDxSYWRMaXN0VmlldyBmb3I9XFxcIml0ZW0gaW4gaXRlbUxpc3RcXFwiXFxuICAgICAgICAgICAgICAgICAgIGxheW91dD1cXFwiZ3JpZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgaXRlbUhlaWdodD1cXFwiMTAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICBAaXRlbVRhcD1cXFwib25JdGVtVGFwXFxcIj5cXG4gICAgICAgIDx2LXRlbXBsYXRlPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImdyaWQtaXRlbVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1BhZ2U+XFxuICBcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpdGVtTGlzdDogZGF0YV8xLnNpbXBsZUl0ZW1MaXN0LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkl0ZW1UYXA6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfYS5pdGVtO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXBwZWQgb24gXCIgKyBpdGVtLm5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIDw8IGxpc3R2dWUtZ3JpZGxheW91dC12dWVcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhXCIpO1xudmFyIGZyYW1lXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBkZXNjcmlwdGlvbiA9ICdHcmlkIHdpdGhvdXQgaXRlbSBoZWlnaHQnO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdHcmlkTGF5b3V0V2l0aEZpeGVkSGVpZ2h0JyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8R3JpZExheW91dD5cXG4gICAgICA8UmFkTGlzdFZpZXcgZm9yPVxcXCJpdGVtIGluIGl0ZW1MaXN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XFxcImdyaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgIEBpdGVtVGFwPVxcXCJvbkl0ZW1UYXBcXFwiPlxcbiAgICAgICAgPHYtdGVtcGxhdGU+XFxuICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIDpiYWNrZ3JvdW5kQ29sb3I9XFxcIml0ZW0uaWQgJSAyICE9IDAgPyAnbGlnaHRncmVlbicgOiAnbGlnaHRibHVlJ1xcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgOnRleHQ9XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIxXFxcIiA6dGV4dD1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9QYWdlPlxcbiAgXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXRlbUxpc3Q6IGRhdGFfMS5zaW1wbGVJdGVtTGlzdDEwMCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JdGVtVGFwOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2EuaXRlbTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFwcGVkIG9uIFwiICsgaXRlbS5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmcmFtZV8xLkZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmcmFtZV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgZGVzY3JpcHRpb24gPSAnR3JvdXAnO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdHcm91cCcsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHRlbXBsYXRlOiBcIlxcbiAgPFBhZ2U+XFxuICAgIDxBY3Rpb25CYXIgOnRpdGxlPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIEB0YXA9XFxcIm9uTmF2aWdhdGlvbkJ1dHRvblRhcFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgPEdyaWRMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICA8UmFkTGlzdFZpZXcgZm9yPVxcXCJpdGVtIGluIGl0ZW1MaXN0XFxcIiA6Z3JvdXBpbmdGdW5jdGlvbj1cXFwiZ2V0SXRlbUdyb3VwXFxcIj5cXG4gICAgICAgIDx2LXRlbXBsYXRlPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9QYWdlPlxcbiAgXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXRlbUxpc3Q6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJdGVtIDEnLCBncm91cDogJ1JlYWR5JyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0l0ZW0gMicsIGdyb3VwOiAnQ29tcGxldGVkJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0l0ZW0gMycsIGdyb3VwOiAnQ29tcGxldGVkJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0l0ZW0gNCcsIGdyb3VwOiAnUmVhZHknIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSXRlbSA1JywgZ3JvdXA6ICdDb21wbGV0ZWQnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSXRlbSA2JywgZ3JvdXA6ICdDb21wbGV0ZWQnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRJdGVtR3JvdXA6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5ncm91cDtcbiAgICAgICAgfSxcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJhbWVfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIG9ic2VydmFibGVfYXJyYXlfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTtcbnZhciBEYXRhSXRlbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEYXRhSXRlbShpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgfVxuICAgIHJldHVybiBEYXRhSXRlbTtcbn0oKSk7XG5leHBvcnRzLkRhdGFJdGVtID0gRGF0YUl0ZW07XG52YXIgZGVzY3JpcHRpb24gPSAnR3JvdXBpbmcgd2l0aCBTY3JvbGwgdG8gSW5kZXgnO1xudmFyIGl0ZW1zID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICBpdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBcIml0ZW0gXCIgKyBpLCBcImRlc2NyaXB0aW9uIFwiICsgaSwgaSAlIDIgPT09IDAgPyBcIkdyb3VwIDFcIiA6IFwiR3JvdXAgMlwiKSk7XG59XG52YXIgZGF0YUl0ZW1zID0gbmV3IG9ic2VydmFibGVfYXJyYXlfMS5PYnNlcnZhYmxlQXJyYXkoaXRlbXMpO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdHcm91cFNjcm9sbFRvJyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIiByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICA8QnV0dG9uIHRleHQ9XFxcIlNjcm9sbCB0byAxIGluZGV4XFxcIiBAdGFwPVxcXCJvblNjcm9sbFRvXFxcIj48L0J1dHRvbj5cXG4gICAgICA8UmFkTGlzdFZpZXcgcm93PVxcXCIxXFxcIiByZWY9XFxcIm15TGlzdFZpZXdcXFwiIGZvcj1cXFwiaXRlbSBpbiBpdGVtTGlzdFxcXCIgOmdyb3VwaW5nRnVuY3Rpb249XFxcImdldEl0ZW1Hcm91cFxcXCI+XFxuICAgICAgICA8di10ZW1wbGF0ZT5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxMYWJlbCBmb250U2l6ZT1cXFwiMjBcXFwiIDp0ZXh0PVxcXCJpdGVtLm5hbWVcXFwiLz5cXG4gICAgICAgICAgICA8TGFiZWwgZm9udFNpemU9XFxcIjE0XFxcIiA6dGV4dD1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIvPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgICAgPHYtdGVtcGxhdGUgbmFtZT1cXFwiZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8R3JpZExheW91dCBpb3M6aGVpZ2h0PVxcXCI1MFxcXCI+XFxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0uY2F0ZWdvcnlcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwibGlnaHRibHVlXFxcIiBwYWRkaW5nPVxcXCIxNVxcXCIvPlxcbiAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9QYWdlPlxcbiAgXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXRlbUxpc3Q6IGRhdGFJdGVtcyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmcmFtZV8xLkZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SXRlbUdyb3VwOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcnk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2Nyb2xsVG86IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMubXlMaXN0Vmlldy5uYXRpdmVWaWV3LnNjcm9sbFRvSW5kZXgoMSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJhbWVfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIGRlc2NyaXB0aW9uID0gJ0dyb3VwIHdpdGggaGVhZGVyL2Zvb3Rlcic7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbmFtZTogJ0dyb3VwIHdpdGggaGVhZGVyL2Zvb3RlcicsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHRlbXBsYXRlOiBcIlxcbiAgPFBhZ2U+XFxuICAgIDxBY3Rpb25CYXIgOnRpdGxlPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIEB0YXA9XFxcIm9uTmF2aWdhdGlvbkJ1dHRvblRhcFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgPEdyaWRMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiA6dGV4dD1cXFwiaXNFbmFibGVkID8gJ0Rpc2FibGUgZ3JvdXBpbmcnIDogJ0VuYWJsZSBncm91cGluZydcXFwiIEB0YXA9XFxcInRvZ2dsZUdyb3VwaW5nXFxcIj48L0J1dHRvbj5cXG4gICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDxSYWRMaXN0VmlldyByb3c9XFxcIjFcXFwiIHJlZj1cXFwibXlMaXN0Vmlld1xcXCIgZm9yPVxcXCJpdGVtIGluIGl0ZW1MaXN0XFxcIiA6Z3JvdXBpbmdGdW5jdGlvbj1cXFwiZ2V0SXRlbUdyb3VwXFxcIj5cXG4gICAgICAgIDx2LXRlbXBsYXRlPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgICA8di10ZW1wbGF0ZSBuYW1lPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSGVhZGVyIHdpdGggaGVpZ2h0IGF1dG9cXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiIzY1YTU2NVxcXCIgZm9udFNpemU9XFxcIjQ1XFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgICAgPHYtdGVtcGxhdGUgbmFtZT1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZvb3RlciB3aXRoIGhlaWdodCBhdXRvXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiM3ZmZmN2ZcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbiAgPC9QYWdlPlxcbiAgXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXNFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgaXRlbUxpc3Q6IHRoaXMuZ2V0SXRlbUxpc3QoKSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmcmFtZV8xLkZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SXRlbUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBHRU5FUkFURURfSVRFTVNfQ09VTlQgPSAxMDA7XG4gICAgICAgICAgICB2YXIgR1JPVVBTX0NPVU5UID0gMztcbiAgICAgICAgICAgIHZhciBTUEVDSUFMX0lURU1fSU5URVJWQUwgPSA0O1xuICAgICAgICAgICAgdmFyIGdlbmVyYXRlSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gR0VORVJBVEVEX0lURU1TX0NPVU5UOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpICUgU1BFQ0lBTF9JVEVNX0lOVEVSVkFMID09PSAwID8gXCJTcGVjaWFsIEl0ZW0gXCIgKyBpIDogXCJJdGVtIFwiICsgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwOiBcIkNhdGVnb3J5IFwiICsgaSAlIEdST1VQU19DT1VOVFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZUl0ZW1zKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEl0ZW1Hcm91cDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmdyb3VwO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVHcm91cGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxpc3RWaWV3ID0gdGhpcy4kcmVmcy5teUxpc3RWaWV3Lm5hdGl2ZVZpZXc7XG4gICAgICAgICAgICBpZiAoIWxpc3RWaWV3Lmdyb3VwaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBsaXN0Vmlldy5ncm91cGluZ0Z1bmN0aW9uID0gdGhpcy5nZXRJdGVtR3JvdXA7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdFZpZXcuZ3JvdXBpbmdGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhXCIpO1xudmFyIGZyYW1lXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBvYnNlcnZhYmxlX2FycmF5XzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiKTtcbnZhciBuYXRpdmVzY3JpcHRfdWlfbGlzdHZpZXdfMSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7XG52YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZGVzY3JpcHRpb24gPSBcIkl0ZW0gQW5pbWF0aW9uc1wiO1xudmFyIF9pdGVtc0NvdW50ID0gMDtcbnZhciBkYXRhSXRlbXMgPSBuZXcgb2JzZXJ2YWJsZV9hcnJheV8xLk9ic2VydmFibGVBcnJheShkYXRhXzEuZ2V0SXRlbUxpc3QoX2l0ZW1zQ291bnQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBuYW1lOiBcIkl0ZW0gQW5pbWF0aW9uc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB0ZW1wbGF0ZTogXCJcXG4gIDxQYWdlPlxcbiAgICA8QWN0aW9uQmFyIDp0aXRsZT1cXFwidGl0bGVcXFwiPlxcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiBAdGFwPVxcXCJvbk5hdmlnYXRpb25CdXR0b25UYXBcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG5cXG4gICAgICA8QWN0aW9uSXRlbSB0ZXh0PVxcXCJPcHRpb25zXFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiBAdGFwPVxcXCJvbk9wdGlvbnNUYXBwZWRcXFwiPjwvQWN0aW9uSXRlbT5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIDxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93cz1cXFwiNTAsICpcXFwiPlxcbiAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYnV0dG9uU3RhY2tMYXlvdXRcXFwiPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQUREXFxcIiBAdGFwPVxcXCJvbkFkZEl0ZW1DbGlja1xcXCIgaW9zOmNsYXNzPVxcXCJpb3NCdXR0b25cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJERUxcXFwiIEB0YXA9XFxcIm9uUmVtb3ZlSXRlbUNsaWNrXFxcIiBpb3M6Y2xhc3M9XFxcImlvc0J1dHRvblxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlVQREFURVxcXCIgQHRhcD1cXFwib25VcGRhdGVJdGVtQ2xpY2tcXFwiIGlvczpjbGFzcz1cXFwiaW9zQnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiUkVTRVRcXFwiIEB0YXA9XFxcIm9uUmVzZXRDbGlja1xcXCIgaW9zOmNsYXNzPVxcXCJpb3NCdXR0b25cXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPFJhZExpc3RWaWV3ICByZWY9XFxcImxpc3RWaWV3XFxcIiBmb3I9XFxcIml0ZW0gaW4gaXRlbUxpc3RcXFwiIDppdGVtSW5zZXJ0QW5pbWF0aW9uPVxcXCJpdGVtSW5zZXJ0QW5pbWF0aW9uXFxcIiA6aXRlbURlbGV0ZUFuaW1hdGlvbj1cXFwiaXRlbURlbGV0ZUFuaW1hdGlvblxcXCIgcm93PVxcXCIxXFxcIj5cXG4gICAgICA8di10ZW1wbGF0ZT5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBAbG9uZ1ByZXNzPVxcXCJvbkl0ZW1Mb25nUHJlc3Moe2luZGV4LGl0ZW19KVxcXCIgQHRhcD1cXFwib25JdGVtVGFwKHtpbmRleCxpdGVtfSlcXFwiPlxcbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBkYXRhSXRlbXMsXG4gICAgICAgICAgICBpdGVtSW5zZXJ0QW5pbWF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBpdGVtRGVsZXRlQW5pbWF0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQWRkSXRlbUNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnB1c2godGhpcy5jcmVhdGVJdGVtKCkpO1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVJdGVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgIGlkOiBfaXRlbXNDb3VudCxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRoaXMgaXMgYSBuZXcgaXRlbTogXCIgKyBfaXRlbXNDb3VudCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIHRoZSBuZXcgaXRlbSdzIGRlc2NyaXB0aW9uLlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2l0ZW1zQ291bnQrKztcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSXRlbVRhcDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRpb25JdGVtVGFwXCIsIGl0ZW1JbmRleCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNwbGljZShpdGVtSW5kZXggKyAxLCAwLCB0aGlzLmNyZWF0ZUl0ZW0oKSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNwbGljZShpdGVtSW5kZXggKyAzLCAwLCB0aGlzLmNyZWF0ZUl0ZW0oKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSXRlbUxvbmdQcmVzczogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBpdGVtSW5kZXggPSBhcmdzLmluZGV4O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRpb25JdGVtTG9uZ1ByZXNzXCIsIGl0ZW1JbmRleCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNwbGljZShpdGVtSW5kZXggKyAxLCAxKTtcbiAgICAgICAgICAgIF9pdGVtc0NvdW50LS07XG4gICAgICAgICAgICB0aGlzLml0ZW1MaXN0LnNwbGljZShpdGVtSW5kZXggKyAyLCAxKTtcbiAgICAgICAgICAgIF9pdGVtc0NvdW50LS07XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVzZXRDbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtTGlzdCA9IG5ldyBvYnNlcnZhYmxlX2FycmF5XzEuT2JzZXJ2YWJsZUFycmF5KDApO1xuICAgICAgICAgICAgX2l0ZW1zQ291bnQgPSAwO1xuICAgICAgICB9LFxuICAgICAgICBvblVwZGF0ZUl0ZW1DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtTGlzdC5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXhfMSA9IDA7IGluZGV4XzEgPCB0aGlzLml0ZW1MaXN0Lmxlbmd0aDsgaW5kZXhfMSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1MaXN0LmdldEl0ZW0oaW5kZXhfMSk7XG4gICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gXCJUaGlzIGlzIGFuIHVwZGF0ZWQgaXRlbVwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBcIlRoaXMgaXMgdGhlIHVwZGF0ZWQgaXRlbSdzIGRlc2NyaXB0aW9uLlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc2V0SXRlbShpbmRleF8xLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZW1vdmVJdGVtQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc3BsaWNlKHRoaXMuaXRlbUxpc3QubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uT3B0aW9uc1RhcHBlZDogZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBkaWFsb2dzXG4gICAgICAgICAgICAgICAgLmFjdGlvbih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbmltYXRpb25cIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlc2NyaXB0X3VpX2xpc3R2aWV3XzEuTGlzdFZpZXdJdGVtQW5pbWF0aW9uLkRlZmF1bHQsXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZXNjcmlwdF91aV9saXN0dmlld18xLkxpc3RWaWV3SXRlbUFuaW1hdGlvbi5GYWRlLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVzY3JpcHRfdWlfbGlzdHZpZXdfMS5MaXN0Vmlld0l0ZW1BbmltYXRpb24uU2NhbGUsXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZXNjcmlwdF91aV9saXN0dmlld18xLkxpc3RWaWV3SXRlbUFuaW1hdGlvbi5TbGlkZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIF90aGlzLml0ZW1JbnNlcnRBbmltYXRpb24gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgX3RoaXMuaXRlbURlbGV0ZUFuaW1hdGlvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhXCIpO1xudmFyIGNvbG9yXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiKTtcbnZhciBmcmFtZV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgZGVzY3JpcHRpb24gPSAnSXRlbSBMb2FkaW5nJztcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBuYW1lOiAnSXRlbUxvYWRpbmcnLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB0ZW1wbGF0ZTogXCJcXG4gIDxQYWdlPlxcbiAgICA8QWN0aW9uQmFyIDp0aXRsZT1cXFwidGl0bGVcXFwiPlxcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiBAdGFwPVxcXCJvbk5hdmlnYXRpb25CdXR0b25UYXBcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8UmFkTGlzdFZpZXcgZm9yPVxcXCJpdGVtIGluIGl0ZW1MaXN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICBAaXRlbUxvYWRpbmc9XFxcIm9uSXRlbUxvYWRpbmdcXFwiPlxcbiAgICAgICAgPHYtdGVtcGxhdGU+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbSBwLTEwXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBpZD1cXFwibGFiZWxcXFwiIDp0ZXh0PVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWwgbS10LTEwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCBpZD1cXFwibGFiZWxcXFwiIDp0ZXh0PVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvdi10ZW1wbGF0ZT5cXG4gICAgICA8L1JhZExpc3RWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9QYWdlPlxcbiAgXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXRlbUxpc3Q6IGRhdGFfMS5zaW1wbGVJdGVtTGlzdCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JdGVtTG9hZGluZzogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBfYS5pbmRleCwgdmlldyA9IF9hLnZpZXc7XG4gICAgICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgY29sb3JfMS5Db2xvcignI2IzZWNmZicpO1xuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IHZpZXcuZ2V0Vmlld0J5SWQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwuZm9udFNpemUgPSAzMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3IGNvbG9yXzEuQ29sb3IoJyNjY2YyZmYnKTtcbiAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSB2aWV3LmdldFZpZXdCeUlkKCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGxhYmVsLmZvbnRTaXplID0gMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnJhbWVfMS5GcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGFcIik7XG52YXIgZnJhbWVfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIGRlc2NyaXB0aW9uID0gJ0l0ZW0gUmVvcmRlcic7XG4vLyA+PiBsaXN0dmlldy1pdGVtcmVvcmRlci12dWVcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBuYW1lOiAnSXRlbVJlb3JkZXInLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB0ZW1wbGF0ZTogXCJcXG4gIDxQYWdlPlxcbiAgICA8QWN0aW9uQmFyIDp0aXRsZT1cXFwidGl0bGVcXFwiPlxcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiBAdGFwPVxcXCJvbk5hdmlnYXRpb25CdXR0b25UYXBcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8UmFkTGlzdFZpZXcgcmVmPVxcXCJsaXN0Vmlld1xcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9yPVxcXCJpdGVtIGluIGl0ZW1MaXN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICBpdGVtUmVvcmRlcj1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgQGl0ZW1SZW9yZGVyZWQ9XFxcIm9uSXRlbVJlb3JkZXJlZFxcXCI+XFxuICAgICAgICA8di10ZW1wbGF0ZT5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpdGVtIG0tMTBcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBkYXRhXzEuc2ltcGxlSXRlbUxpc3QsXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JdGVtUmVvcmRlcmVkOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IF9hLmluZGV4LCBkYXRhID0gX2EuZGF0YSwgb2JqZWN0ID0gX2Eub2JqZWN0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHJlb3JkZXJlZCBmcm9tIGluZGV4IFwiICsgaW5kZXggKyBcIiB0byBcIiArIGRhdGEudGFyZ2V0SW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIDw8IGxpc3R2aWV3LWl0ZW1yZW9yZGVyLXZ1ZVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGFcIik7XG52YXIgZnJhbWVfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIG9ic2VydmFibGVfYXJyYXlfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTtcbnZhciBkZXNjcmlwdGlvbiA9ICdJdGVtIFNlbGVjdGlvbic7XG4vLyA+PiBsaXN0dmlldy1pdGVtc2VsZWN0aW9uLXZ1ZVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdJdGVtU2VsZWN0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8U3RhY2tMYXlvdXQgYmFja2dyb3VuZENvbG9yPVxcXCJncmVlblxcXCI+XFxuICAgICAgPFJhZExpc3RWaWV3IHJlZj1cXFwibGlzdFZpZXdcXFwiXFxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJyZWQtdHJhbnNwYXJlbnQtc2VsZWN0aW9uLWxpc3RcXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvcj1cXFwiaXRlbSBpbiBpdGVtTGlzdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQmVoYXZpb3I9XFxcIlByZXNzXFxcIlxcbiAgICAgICAgICAgICAgICAgICBAaXRlbVNlbGVjdGVkPVxcXCJvbkl0ZW1TZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgQGl0ZW1TZWxlY3Rpbmc9XFxcIm9uSXRlbVNlbGVjdGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgQGl0ZW1EZXNlbGVjdGluZz1cXFwib25JdGVtRGVzZWxlY3RpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgIEBpdGVtRGVzZWxlY3RlZD1cXFwib25JdGVtRGVzZWxlY3RlZFxcXCI+XFxuICAgICAgICA8di10ZW1wbGF0ZT5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWwgbS10LTEwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gZGF0YV8xLmdldEl0ZW1MaXN0KDIwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3MgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXRlbUxpc3Q6IG5ldyBvYnNlcnZhYmxlX2FycmF5XzEuT2JzZXJ2YWJsZUFycmF5KGl0ZW1zKSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JdGVtU2VsZWN0ZWQ6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gX2EuaW5kZXgsIG9iamVjdCA9IF9hLm9iamVjdDtcbiAgICAgICAgICAgIHZhciBpdGVtU2VsZWN0ZWQgPSB0aGlzLml0ZW1MaXN0LmdldEl0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHNlbGVjdGVkOiBcIiArIGl0ZW1TZWxlY3RlZC5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25JdGVtU2VsZWN0aW5nOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IF9hLmluZGV4LCBvYmplY3QgPSBfYS5vYmplY3Q7XG4gICAgICAgICAgICB2YXIgaXRlbVNlbGVjdGVkID0gdGhpcy5pdGVtTGlzdC5nZXRJdGVtKGluZGV4KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBzZWxlY3Rpbmc6IFwiICsgaXRlbVNlbGVjdGVkLm5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkl0ZW1EZXNlbGVjdGluZzogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBfYS5pbmRleCwgb2JqZWN0ID0gX2Eub2JqZWN0O1xuICAgICAgICAgICAgdmFyIGl0ZW1TZWxlY3RlZCA9IHRoaXMuaXRlbUxpc3QuZ2V0SXRlbShpbmRleCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gZGVzZWxlY3Rpbmc6IFwiICsgaXRlbVNlbGVjdGVkLm5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkl0ZW1EZXNlbGVjdGVkOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IF9hLmluZGV4LCBvYmplY3QgPSBfYS5vYmplY3Q7XG4gICAgICAgICAgICB2YXIgaXRlbVNlbGVjdGVkID0gdGhpcy5pdGVtTGlzdC5nZXRJdGVtKGluZGV4KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBkZXNlbGVjdGVkIFwiICsgaXRlbVNlbGVjdGVkLm5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIDw8IGxpc3R2aWV3LWl0ZW1zZWxlY3Rpb24tdnVlXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwbGF0Zm9ybV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7XG52YXIgZGF0YV8xID0gcmVxdWlyZShcIi4uL2RhdGFcIik7XG52YXIgZGVzY3JpcHRpb24gPSAnTG9hZCBPbiBEZW1hbmQnO1xudmFyIGFsbEl0ZW1zID0gZGF0YV8xLmdldEl0ZW1MaXN0KDIwKTtcbnZhciBjaHVua1NpemUgPSA2O1xudmFyIG5leHRJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYWxsSXRlbXMuc3BsaWNlKDAsIGNodW5rU2l6ZSk7XG59O1xudmFyIGluaXRJdGVtcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBhbGxJdGVtcyA9IGRhdGFfMS5nZXRJdGVtTGlzdCgyMCk7XG4gICAgcmV0dXJuIGFsbEl0ZW1zLnNwbGljZSgwLCBjaHVua1NpemUpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBuYW1lOiAnTG9hZE9uRGVtYW5kJyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPFJhZExpc3RWaWV3IGZvcj1cXFwiaXRlbSBpbiBpdGVtTGlzdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgbG9hZE9uRGVtYW5kTW9kZT1cXFwiTWFudWFsXFxcIlxcbiAgICAgICAgICAgICAgICAgICBAbG9hZE1vcmVEYXRhUmVxdWVzdGVkPVxcXCJvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWRcXFwiPlxcbiAgICAgICAgPHYtdGVtcGxhdGU+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbSBwLTEwXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBpZD1cXFwibGFiZWxcXFwiIDp0ZXh0PVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWwgbS10LTEwXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCBpZD1cXFwibGFiZWxcXFwiIDp0ZXh0PVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvdi10ZW1wbGF0ZT5cXG4gICAgICAgIDx2LXRlbXBsYXRlIHYtaWY9XFxcImlzSU9TXFxcIiBuYW1lPVxcXCJsb2Fkb25kZW1hbmRcXFwiPlxcbiAgICAgICAgICA8R3JpZExheW91dCBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMb2FkIG1vcmVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1BhZ2U+XFxuICBcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpdGVtTGlzdDogaW5pdEl0ZW1zKCksXG4gICAgICAgICAgICBpc0lPUzogcGxhdGZvcm1fMS5pc0lPUyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkOiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgdmFyIGxpc3RWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoYWxsSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBtb3JlIGl0ZW1zLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJdGVtcygpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaXRlbUxpc3QucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVCYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnJhbWVfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIGRlc2NyaXB0aW9uID0gJ011bHRpcGxlIFRlbXBsYXRlcyc7XG4vLyA+PiBsaXN0dmlldy1tdWx0aXBsZXRlbXBsYXRlcy1pdGVtc2VsZWN0b3ItdnVlXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbmFtZTogJ011bHRpcGxlVGVtcGxhdGVzJyxcbiAgICBkZXNjcmlwdGlvbjogJ011bHRpcGxlIFRlbXBsYXRlcycsXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8VGFiVmlldz5cXG4gICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XFxcInRlbXBsYXRlIHNlbGVjdG9yXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93cz1cXFwiYXV0bywgKlxcXCI+XFxuICAgICAgICAgIDxSYWRMaXN0VmlldyBmb3I9XFxcIml0ZW0gaW4gaXRlbUxpc3RcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICA6aXRlbVRlbXBsYXRlU2VsZWN0b3I9XFxcInRlbXBsYXRlU2VsZWN0b3JcXFwiPlxcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlIG5hbWU9XFxcInJlZFxcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW0gcmVkXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0ubmFtZSArICcgc2VsZWN0b3InXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0udHlwZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlIG5hbWU9XFxcImdyZWVuXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbSBncmVlblxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLm5hbWUgKyAnIHNlbGVjdG9yJ1xcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLnR5cGVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8di10ZW1wbGF0ZSBuYW1lPVxcXCJibHVlXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbSBibHVlXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0ubmFtZSArICcgc2VsZWN0b3InXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0udHlwZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgICAgICA8L1JhZExpc3RWaWV3PlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvVGFiVmlld0l0ZW0+XFxuICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVxcXCJ2LXRlbXBsYXRlIGlmXFxcIj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93cz1cXFwiYXV0bywgKlxcXCI+XFxuICAgICAgICAgIDxSYWRMaXN0VmlldyBmb3I9XFxcIml0ZW0gaW4gaXRlbUxpc3RcXFwiPlxcbiAgICAgICAgICAgIDx2LXRlbXBsYXRlIG5hbWU9XFxcInJlZFxcXCIgaWY9XFxcIml0ZW0udHlwZSA9PT0gJ3JlZCdcXFwiPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpdGVtIHJlZFxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLm5hbWUgKyAnIGlmIHRlbXBsYXRlJ1xcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVxcXCJpdGVtLnR5cGVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8di10ZW1wbGF0ZSBuYW1lPVxcXCJncmVlblxcXCIgaWY9XFxcIml0ZW0udHlwZSA9PT0gJ2dyZWVuJ1xcXCI+XFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW0gZ3JlZW5cXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5uYW1lICsgJyBpZiB0ZW1wbGF0ZSdcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS50eXBlXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgICAgICAgPHYtdGVtcGxhdGUgbmFtZT1cXFwiYmx1ZVxcXCIgaWY9XFxcIml0ZW0udHlwZSA9PT0gJ2JsdWUnXFxcIj5cXG4gICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbSBibHVlXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0ubmFtZSArICcgaWYgdGVtcGxhdGUnXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0udHlwZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgICAgICA8L1JhZExpc3RWaWV3PlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgIDwvVGFiVmlld0l0ZW0+XFxuICAgIDwvVGFiVmlldz5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSXRlbSAxJywgdHlwZTogJ3JlZCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJdGVtIDInLCB0eXBlOiAnZ3JlZW4nIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSXRlbSAzJywgdHlwZTogJ2JsdWUnIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSXRlbSA0JywgdHlwZTogJ3JlZCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJdGVtIDUnLCB0eXBlOiAnZ3JlZW4nIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSXRlbSA2JywgdHlwZTogJ2JsdWUnIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZVNlbGVjdG9yOiBmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGl0ZW1zKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlZDogJ3JlZCcsXG4gICAgICAgICAgICAgICAgZ3JlZW46ICdncmVlbicsXG4gICAgICAgICAgICAgICAgYmx1ZTogJ2JsdWUnLFxuICAgICAgICAgICAgfVtpdGVtLnR5cGVdO1xuICAgICAgICB9LFxuICAgIH1cbn07XG4vLyA8PCBsaXN0dmlldy1tdWx0aXBsZXRlbXBsYXRlcy1pdGVtc2VsZWN0b3ItdnVlXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmcmFtZV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgb2JzZXJ2YWJsZV9hcnJheV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpO1xudmFyIGRlc2NyaXB0aW9uID0gJ09ic2VydmFibGUgaXRlbXMnO1xudmFyIGdldE9ic2VydmFibGVMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgb2JzZXJ2YWJsZV9hcnJheV8xLk9ic2VydmFibGVBcnJheShbXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgXSk7XG59O1xudmFyIGdldExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgMixcbiAgICBdO1xufTtcbnZhciBSYWRMaXN0SXRlbSA9IHtcbiAgICBuYW1lOiAnUmFkTGlzdEl0ZW0nLFxuICAgIHRlbXBsYXRlOiBcIlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcInAtMTBcXFwiXFxuICAgICAgICAgICA6dGV4dD1cXFwiaXRlbVRleHRcXFwiXFxuICAgICAgICAgICBjb2w9XFxcIjBcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIi8+XFxuICBcIixcbiAgICBwcm9wczogWydpdGVtJ10sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjcmVhdGUtaXRlbScpO1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaXRlbVRleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkl0ZW06IFwiICsgdGhpcy5pdGVtO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBpdGVtOiBmdW5jdGlvbiAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUtaXRlbScsIHtcbiAgICAgICAgICAgICAgICBvbGQ6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ldzogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdPYnNlcnZhYmxlJyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhcj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgICAgPEFjdGlvbkl0ZW0gdGV4dD1cXFwiT2JzZXJ2YWJsZVxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiIEB0YXA9XFxcIm9uU2VsZWN0T2JzZXJ2YWJsZSgpXFxcIj48L0FjdGlvbkl0ZW0+XFxuICAgICAgPEFjdGlvbkl0ZW0gdGV4dD1cXFwiTm9uIG9ic2VydmFibGVcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIiBAdGFwPVxcXCJvblNlbGVjdE5vbk9ic2VydmFibGUoKVxcXCI+PC9BY3Rpb25JdGVtPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0b1xcXCI+XFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFkZCBpdGVtXFxcIiBAdGFwPVxcXCJhZGRJdGVtXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlJlbW92ZSBsYXN0IGl0ZW1cXFwiIEB0YXA9XFxcImRlbGV0ZUl0ZW1cXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0b1xcXCI+XFxuICAgICAgICA8UmFkTGlzdFZpZXcgZm9yPVxcXCJyIGluIGN1cnJlbnRMaXN0XFxcIiBjb2w9XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgQGl0ZW1UYXA9XFxcIm9uSXRlbVRhcFxcXCI+XFxuICAgICAgICAgIDx2LXRlbXBsYXRlPlxcbiAgICAgICAgICAgIDxSYWRMaXN0SXRlbSA6aXRlbT1cXFwiclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgQGNyZWF0ZS1pdGVtPVxcXCJtYXJrQ3JlYXRpb24ocilcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGUtaXRlbT1cXFwibWFya1VwZGF0ZVxcXCIgLz5cXG4gICAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgICAgIDxSYWRMaXN0VmlldyByZWY9XFxcImNvdW50ZXJsaXN0XFxcIiBmb3I9XFxcInIgaW4gY3JlYXRlc0NvdW50ZXJcXFwiIGNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgIDx2LXRlbXBsYXRlPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiJ0NyZWF0ZSBjb3VudGVyOiAnICsgclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICA8L1BhZ2U+XFxuICBcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjdXJyZW50TGlzdDogZ2V0T2JzZXJ2YWJsZUxpc3QoKSxcbiAgICAgICAgICAgIGNyZWF0ZXNDb3VudGVyOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICB1c2VPYnNlcnZhYmxlOiB0cnVlLFxuICAgICAgICAgICAgYmlnZ2VzdERlbGV0ZWRJdGVtOiAwLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50czogeyBSYWRMaXN0SXRlbTogUmFkTGlzdEl0ZW0gfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBsYXN0SXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLnVzZU9ic2VydmFibGUgP1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RbdGhpcy5jdXJyZW50TGlzdC5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIDogdGhpcy5jdXJyZW50TGlzdC5nZXRJdGVtKHRoaXMuY3VycmVudExpc3QubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHRJdGVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TGlzdC5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnJhbWVfMS5GcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEl0ZW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHVzaCBcIiArIHRoaXMubmV4dEl0ZW0pO1xuICAgICAgICAgICAgdmFyIG5leHQgPSB0aGlzLm5leHRJdGVtO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdC5wdXNoKHRoaXMubmV4dEl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3JlYXRlc0NvdW50ZXIubGVuZ3RoIDwgdGhpcy5jdXJyZW50TGlzdC5sZW5ndGggJiYgbmV4dCA8PSB0aGlzLmJpZ2dlc3REZWxldGVkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlc0NvdW50ZXIucHVzaCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlSXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgXCIgKyB0aGlzLmxhc3RJdGVtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZU9ic2VydmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IG5ldyBvYnNlcnZhYmxlX2FycmF5XzEuT2JzZXJ2YWJsZUFycmF5KDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZXNDb3VudGVyID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJpZ2dlc3REZWxldGVkSXRlbSA8IHRoaXMubGFzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJpZ2dlc3REZWxldGVkSXRlbSA9IHRoaXMubGFzdEl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZWRJdGVtcy5wdXNoKHRoaXMubGFzdEl0ZW0pO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jdXJyZW50TGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVzQ291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlT2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gbmV3IG9ic2VydmFibGVfYXJyYXlfMS5PYnNlcnZhYmxlQXJyYXkoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlc0NvdW50ZXIgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1hcmtDcmVhdGlvbjogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWFyayBpdGVtIGNyZWF0aW9uIGZvciBcIiArIGl0ZW0gKyBcIi4uLlwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNyZWF0ZXNDb3VudGVyLmxlbmd0aCA8IHRoaXMuY3VycmVudExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVzQ291bnRlci5wdXNoKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVzQ291bnRlcltpdGVtXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kcmVmcy5jb3VudGVybGlzdC5yZWZyZXNoKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1hcmtVcGRhdGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmRlbGV0ZWRJdGVtcy5pbmRleE9mKGRhdGEub2xkKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9sZCBpdGVtIFwiICsgZGF0YS5vbGQgKyBcIiByZXVzZWQgZm9yIHRoZSBuZXcgXCIgKyBkYXRhLm5ldyArIFwiIHZhbHVlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblNlbGVjdE9ic2VydmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudXNlT2JzZXJ2YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZ2V0T2JzZXJ2YWJsZUxpc3QoKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlc0NvdW50ZXIgPSBbMCwgMCwgMF07XG4gICAgICAgICAgICB0aGlzLmJpZ2dlc3REZWxldGVkSXRlbSA9IDA7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2VsZWN0Tm9uT2JzZXJ2YWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy51c2VPYnNlcnZhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZ2V0TGlzdCgpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVzQ291bnRlciA9IFswLCAwLCAwXTtcbiAgICAgICAgICAgIHRoaXMuYmlnZ2VzdERlbGV0ZWRJdGVtID0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgb25JdGVtVGFwOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2EuaXRlbTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSB0YXBwZWQ6IFwiICsgaXRlbSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlZEl0ZW1zID0gW107XG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmcmFtZV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgZGVzY3JpcHRpb24gPSAnUHVsbCBUbyBSZWZyZXNoJztcbi8vID4+IGxpc3R2aWV3LXB1bGx0b3JlZnJlc2gtdnVlXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbmFtZTogJ1B1bGxUb1JlZnJlc2gnLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB0ZW1wbGF0ZTogXCJcXG4gIDxQYWdlPlxcbiAgICA8QWN0aW9uQmFyIDp0aXRsZT1cXFwidGl0bGVcXFwiPlxcbiAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiBAdGFwPVxcXCJvbk5hdmlnYXRpb25CdXR0b25UYXBcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICA8UmFkTGlzdFZpZXcgcmVmPVxcXCJsaXN0Vmlld1xcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9yPVxcXCJmcnVpdCBpbiBmcnVpdExpc3RcXFwiXFxuICAgICAgICAgICAgICAgICAgIHB1bGxUb1JlZnJlc2g9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgIEBpdGVtVGFwPVxcXCJvbkl0ZW1UYXBcXFwiXFxuICAgICAgICAgICAgICAgICAgIEBwdWxsVG9SZWZyZXNoSW5pdGlhdGVkPVxcXCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWRcXFwiPlxcbiAgICAgICAgPHYtdGVtcGxhdGU+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcImZydWl0Lm5hbWVcXFwiIGNsYXNzPVxcXCJ0aXRsZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBoZWlnaHQ9XFxcIjFcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0VFRUVFRVxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvdi10ZW1wbGF0ZT5cXG5cXG4gICAgICAgIDx2LXRlbXBsYXRlIG5hbWU9XFxcImZvb3RlclxcXCI+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcImZvb3RlclRleHRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGZydWl0TGlzdDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0FwcGxlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ09yYW5nZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUb21hdG8nLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBmb290ZXJUZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJMaXN0IHdpdGggXCIgKyB0aGlzLmZydWl0TGlzdC5sZW5ndGggKyBcIiBpdGVtc1wiO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQ6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBfYS5vYmplY3Q7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHVsbGluZy4uLicpO1xuICAgICAgICAgICAgLy8gaW4gb3JkZXIgdG8gYXZvaWQgcmFjZSBjb25kaXRpb25zIChvbmx5IG9uIGlPUyksXG4gICAgICAgICAgICAvLyBpbiB3aGljaCB0aGUgVUkgbWF5IG5vdCBiZSBjb21wbGV0ZWx5IHVwZGF0ZWQgaGVyZVxuICAgICAgICAgICAgLy8gd2UgdXNlIHRoaXMuJG5leHRUaWNrIGNhbGxcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5mcnVpdExpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdCZXJyeScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSXRlbVRhcDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IF9hLml0ZW07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhcHBlZCBvbiBcIiArIGl0ZW0ubmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uTmF2aWdhdGlvbkJ1dHRvblRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnJhbWVfMS5GcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gPDwgbGlzdHZpZXctcHVsbHRvcmVmcmVzaC12dWVcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRhdGFfMSA9IHJlcXVpcmUoXCIuLi9kYXRhXCIpO1xudmFyIGZyYW1lXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBuYXRpdmVzY3JpcHRfdWlfbGlzdHZpZXdfMSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7XG52YXIgZGVzY3JpcHRpb24gPSAnU2Nyb2xsIFRvIEl0ZW0nO1xuLy8gPj4gbGlzdHZpZXctc2Nyb2xsaW5nLXZ1ZVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdTY3JvbGxUbycsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHRlbXBsYXRlOiBcIlxcbiAgPFBhZ2U+XFxuICAgIDxBY3Rpb25CYXIgOnRpdGxlPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIEB0YXA9XFxcIm9uTmF2aWdhdGlvbkJ1dHRvblRhcFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgIDxMYWJlbCBjbGFzcz1cXFwiYmlnIGhlYWRlclxcXCIgOnRleHQ9XFxcInNjcm9sbFRleHRcXFwiPjwvTGFiZWw+XFxuICAgICAgPFJhZExpc3RWaWV3IHJlZj1cXFwibGlzdFZpZXdcXFwiXFxuICAgICAgICAgICAgICAgICAgIGZvcj1cXFwiaXRlbSBpbiBpdGVtTGlzdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgQGl0ZW1UYXA9XFxcIm9uSXRlbVRhcFxcXCJcXG4gICAgICAgICAgICAgICAgICAgQGxvYWRlZD1cXFwib25Mb2FkZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgIEBzY3JvbGxlZD1cXFwib25TY3JvbGxlZFxcXCI+XFxuICAgICAgICA8di10ZW1wbGF0ZT5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpdGVtXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHNjcm9sbE9mZnNldDogMCxcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBkYXRhXzEuZ2V0SXRlbUxpc3QoMTAwKSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNjcm9sbFRleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlNjcm9sbGVkIHRvIFwiICsgdGhpcy5zY3JvbGxPZmZzZXQgKyBcIiBvZmZzZXRcIjtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JdGVtVGFwOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2EuaXRlbTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFwcGVkIG9uIFwiICsgaXRlbS5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Mb2FkZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAvLyBpbiBvcmRlciB0byBhdm9pZCByYWNlIGNvbmRpdGlvbnMgKG9ubHkgb24gaU9TKSxcbiAgICAgICAgICAgIC8vIGluIHdoaWNoIHRoZSBVSSBtYXkgbm90IGJlIGNvbXBsZXRlbHkgdXBkYXRlZCBoZXJlXG4gICAgICAgICAgICAvLyB3ZSB1c2UgdGhpcy4kbmV4dFRpY2sgY2FsbFxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleFRvU2Nyb2xsID0gNDk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2dyYW1tYXRpYyBzY3JvbGxpbmcgdG8gJyArIF90aGlzLml0ZW1MaXN0W2luZGV4VG9TY3JvbGxdLm5hbWUgKyAnLi4uICcpO1xuICAgICAgICAgICAgICAgIF90aGlzLiRyZWZzLmxpc3RWaWV3LnNjcm9sbFRvSW5kZXgoaW5kZXhUb1Njcm9sbCwgZmFsc2UsIG5hdGl2ZXNjcmlwdF91aV9saXN0dmlld18xLkxpc3RWaWV3SXRlbVNuYXBNb2RlLlN0YXJ0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblNjcm9sbGVkOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBfYS5zY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbE9mZnNldCA9IHNjcm9sbE9mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmcmFtZV8xLkZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyA8PCBsaXN0dmlldy1zY3JvbGxpbmctdnVlXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmcmFtZV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgZGVzY3JpcHRpb24gPSAnU3RhZ2dlcmVkIExheW91dCc7XG4vLyA+PiBsaXN0dmlldy1zdGFnZ2VyZWRsYXlvdXQtdnVlXG52YXIgd29yZHMgPSBbJ09uZScsICdUd28nLCAnVGhyZWUnLCAnRm91cicsICdGaXZlJywgJ1NpeCcsICdTZXZlbicsICdFaWdodCcsICdOaW5lJywgJ1RlbiddO1xudmFyIGdldFJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDE1KSk7XG4gICAgdmFyIHJlc3VsdCA9IHdvcmRzWzBdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9ICh3b3Jkc1tpICUgd29yZHMubGVuZ3RoXSArICcgJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIGdldFJhbmRvbUl0ZW1zID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSXRlbSBcIiArIGksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZ2V0UmFuZG9tU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdTdGFnZ2VyZWRMYXlvdXRMaXN0JyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgPFJhZExpc3RWaWV3IGZvcj1cXFwiaXRlbSBpbiBpdGVtTGlzdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgbGF5b3V0PVxcXCJzdGFnZ2VyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgIGdyaWRTcGFuQ291bnQ9XFxcIjNcXFwiXFxuICAgICAgICAgICAgICAgICAgIEBpdGVtVGFwPVxcXCJvbkl0ZW1UYXBcXFwiPlxcbiAgICAgICAgPHYtdGVtcGxhdGU+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvdi10ZW1wbGF0ZT5cXG4gICAgICA8L1JhZExpc3RWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgPC9QYWdlPlxcbiAgXCIsXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaXRlbUxpc3Q6IGdldFJhbmRvbUl0ZW1zKDIwKSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JdGVtVGFwOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2EuaXRlbTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFwcGVkIG9uIFwiICsgaXRlbS5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmcmFtZV8xLkZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyA8PCBsaXN0dmlldy1zdGFnZ2VyZWRsYXlvdXQtdnVlXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkYXRhXzEgPSByZXF1aXJlKFwiLi4vZGF0YVwiKTtcbnZhciBmcmFtZV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgZGVzY3JpcHRpb24gPSAnU3dpcGUgQWN0aW9ucyc7XG4vLyA+PiBsaXN0dmlldy1zd2lwZWFjdGlvbnMtdnVlXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbmFtZTogJ1N3aXBlQWN0aW9ucycsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIHRlbXBsYXRlOiBcIlxcbiAgPFBhZ2U+XFxuICAgIDxBY3Rpb25CYXIgOnRpdGxlPVxcXCJ0aXRsZVxcXCI+XFxuICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIEB0YXA9XFxcIm9uTmF2aWdhdGlvbkJ1dHRvblRhcFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgPEdyaWRMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICA8UmFkTGlzdFZpZXcgcmVmPVxcXCJsaXN0Vmlld1xcXCJcXG4gICAgICAgICAgICAgICAgICAgZm9yPVxcXCJpdGVtIGluIGl0ZW1MaXN0XFxcIlxcbiAgICAgICAgICAgICAgICAgICBzd2lwZUFjdGlvbnM9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgICAgIEBpdGVtU3dpcGVQcm9ncmVzc1N0YXJ0ZWQ9XFxcIm9uU3dpcGVTdGFydGVkXFxcIj5cXG4gICAgICAgIDx2LXRlbXBsYXRlPlxcbiAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW0gcC10LTEwXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuXFxuICAgICAgICA8di10ZW1wbGF0ZSBuYW1lPVxcXCJpdGVtc3dpcGVcXFwiPlxcbiAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIldoaXRlXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcIm1hcmstdmlld1xcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwic3dpcGUtaXRlbSBsZWZ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgQHRhcD1cXFwib25MZWZ0U3dpcGVDbGlja1xcXCI+XFxuICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwibWFya1xcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIi8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcImRlbGV0ZS12aWV3XFxcIiBjb2w9XFxcIjJcXFwiIGNsYXNzPVxcXCJzd2lwZS1pdGVtIHJpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgQHRhcD1cXFwib25SaWdodFN3aXBlQ2xpY2tcXFwiPlxcbiAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcImRlbGV0ZVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvdi10ZW1wbGF0ZT5cXG4gICAgICA8L1JhZExpc3RWaWV3PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICA8L1BhZ2U+XFxuICBcIixcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpdGVtTGlzdDogZGF0YV8xLmdldEl0ZW1MaXN0KDIwKSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25Td2lwZVN0YXJ0ZWQ6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBfYS5kYXRhLCBvYmplY3QgPSBfYS5vYmplY3Q7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN3aXBlIHN0YXJ0ZWRcIik7XG4gICAgICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBkYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICAgICAgdmFyIHN3aXBlVmlldyA9IG9iamVjdDtcbiAgICAgICAgICAgIHZhciBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnbWFyay12aWV3Jyk7XG4gICAgICAgICAgICB2YXIgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdkZWxldGUtdmlldycpO1xuICAgICAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG4gICAgICAgIH0sXG4gICAgICAgIG9uTGVmdFN3aXBlQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlZnQgYWN0aW9uIHRhcHBlZCcpO1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmlnaHRTd2lwZUNsaWNrOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBfYS5vYmplY3Q7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmlnaHQgYWN0aW9uIHRhcHBlZCcpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW1cbiAgICAgICAgICAgIHRoaXMuaXRlbUxpc3Quc3BsaWNlKHRoaXMuaXRlbUxpc3QuaW5kZXhPZihvYmplY3QuYmluZGluZ0NvbnRleHQpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICAgICAgICB9LFxuICAgICAgICBvbk5hdmlnYXRpb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lXzEuRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgICAgICB9LFxuICAgIH1cbn07XG4vLyA8PCBsaXN0dmlldy1zd2lwZWFjdGlvbnMtdnVlXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmcmFtZV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgZGVzY3JpcHRpb24gPSAnVGVtcGxhdGUgR3JvdXAnO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIG5hbWU6ICdUZW1wbGF0ZUdyb3VwJyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgdGVtcGxhdGU6IFwiXFxuICA8UGFnZT5cXG4gICAgPEFjdGlvbkJhciA6dGl0bGU9XFxcInRpdGxlXFxcIj5cXG4gICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgQHRhcD1cXFwib25OYXZpZ2F0aW9uQnV0dG9uVGFwXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8R3JpZExheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvd3M9XFxcImF1dG8sICpcXFwiPlxcbiAgICAgIDxSYWRMaXN0VmlldyBmb3I9XFxcIml0ZW0gaW4gaXRlbUxpc3RcXFwiIDpncm91cGluZ0Z1bmN0aW9uPVxcXCJnZXRJdGVtR3JvdXBcXFwiPlxcbiAgICAgICAgPHYtdGVtcGxhdGUgbmFtZT1cXFwiZ3JvdXBcXFwiPlxcbiAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcIml0ZW0uY2F0ZWdvcnkgKyAnIGl0ZW1zJ1xcXCIgY2xhc3M9XFxcImdyZWVuXFxcIi8+XFxuICAgICAgICA8L3YtdGVtcGxhdGU+XFxuICAgICAgICA8di10ZW1wbGF0ZT5cXG4gICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpdGVtXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC92LXRlbXBsYXRlPlxcbiAgICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgIDwvR3JpZExheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGl0ZW1MaXN0OiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiAnSXRlbSAxJywgZ3JvdXA6ICdSZWFkeScgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJdGVtIDInLCBncm91cDogJ0NvbXBsZXRlZCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJdGVtIDMnLCBncm91cDogJ0NvbXBsZXRlZCcgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICdJdGVtIDQnLCBncm91cDogJ1JlYWR5JyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0l0ZW0gNScsIGdyb3VwOiAnQ29tcGxldGVkJyB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ0l0ZW0gNicsIGdyb3VwOiAnQ29tcGxldGVkJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25OYXZpZ2F0aW9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmcmFtZV8xLkZyYW1lLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SXRlbUdyb3VwOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ3JvdXA7XG4gICAgICAgIH0sXG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEdldHRpbmdTdGFydGVkXzEgPSByZXF1aXJlKFwiLi9HZXR0aW5nU3RhcnRlZFwiKTtcbnZhciBHZXR0aW5nU3RhcnRlZEhvXzEgPSByZXF1aXJlKFwiLi9HZXR0aW5nU3RhcnRlZEhvXCIpO1xudmFyIEdyaWRMYXlvdXRfMSA9IHJlcXVpcmUoXCIuL0dyaWRMYXlvdXRcIik7XG52YXIgR3JpZExheW91dE5vSGVpZ2h0XzEgPSByZXF1aXJlKFwiLi9HcmlkTGF5b3V0Tm9IZWlnaHRcIik7XG52YXIgSXRlbUFuaW1hdGlvbnNfMSA9IHJlcXVpcmUoXCIuL0l0ZW1BbmltYXRpb25zXCIpO1xudmFyIEl0ZW1Mb2FkaW5nXzEgPSByZXF1aXJlKFwiLi9JdGVtTG9hZGluZ1wiKTtcbnZhciBJdGVtUmVvcmRlcl8xID0gcmVxdWlyZShcIi4vSXRlbVJlb3JkZXJcIik7XG52YXIgSXRlbVNlbGVjdGlvbl8xID0gcmVxdWlyZShcIi4vSXRlbVNlbGVjdGlvblwiKTtcbnZhciBMb2FkT25EZW1hbmRfMSA9IHJlcXVpcmUoXCIuL0xvYWRPbkRlbWFuZFwiKTtcbnZhciBNdWx0aXBsZVRlbXBsYXRlc18xID0gcmVxdWlyZShcIi4vTXVsdGlwbGVUZW1wbGF0ZXNcIik7XG52YXIgT2JzZXJ2YWJsZV8xID0gcmVxdWlyZShcIi4vT2JzZXJ2YWJsZVwiKTtcbnZhciBQdWxsVG9SZWZyZXNoXzEgPSByZXF1aXJlKFwiLi9QdWxsVG9SZWZyZXNoXCIpO1xudmFyIFNjcm9sbFRvXzEgPSByZXF1aXJlKFwiLi9TY3JvbGxUb1wiKTtcbnZhciBTdGFnZ2VyZWRMYXlvdXRfMSA9IHJlcXVpcmUoXCIuL1N0YWdnZXJlZExheW91dFwiKTtcbnZhciBTd2lwZUFjdGlvbnNfMSA9IHJlcXVpcmUoXCIuL1N3aXBlQWN0aW9uc1wiKTtcbnZhciBHcm91cF8xID0gcmVxdWlyZShcIi4vR3JvdXBcIik7XG52YXIgR3JvdXBTY3JvbGxUb18xID0gcmVxdWlyZShcIi4vR3JvdXBTY3JvbGxUb1wiKTtcbnZhciBHcm91cFdpdGhIZWFkZXJGb290ZXJfMSA9IHJlcXVpcmUoXCIuL0dyb3VwV2l0aEhlYWRlckZvb3RlclwiKTtcbnZhciBUZW1wbGF0ZUdyb3VwXzEgPSByZXF1aXJlKFwiLi9UZW1wbGF0ZUdyb3VwXCIpO1xudmFyIEZpcnN0VmlzaWJsZUluZGV4XzEgPSByZXF1aXJlKFwiLi9GaXJzdFZpc2libGVJbmRleFwiKTtcbmV4cG9ydHMuZ2V0RXhhbXBsZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgR2V0dGluZ1N0YXJ0ZWRfMS5kZWZhdWx0LFxuICAgICAgICBHZXR0aW5nU3RhcnRlZEhvXzEuZGVmYXVsdCxcbiAgICAgICAgR3JpZExheW91dF8xLmRlZmF1bHQsXG4gICAgICAgIEdyaWRMYXlvdXROb0hlaWdodF8xLmRlZmF1bHQsXG4gICAgICAgIFN0YWdnZXJlZExheW91dF8xLmRlZmF1bHQsXG4gICAgICAgIEl0ZW1BbmltYXRpb25zXzEuZGVmYXVsdCxcbiAgICAgICAgUHVsbFRvUmVmcmVzaF8xLmRlZmF1bHQsXG4gICAgICAgIEl0ZW1Mb2FkaW5nXzEuZGVmYXVsdCxcbiAgICAgICAgSXRlbVJlb3JkZXJfMS5kZWZhdWx0LFxuICAgICAgICBJdGVtU2VsZWN0aW9uXzEuZGVmYXVsdCxcbiAgICAgICAgTG9hZE9uRGVtYW5kXzEuZGVmYXVsdCxcbiAgICAgICAgTXVsdGlwbGVUZW1wbGF0ZXNfMS5kZWZhdWx0LFxuICAgICAgICBHcm91cF8xLmRlZmF1bHQsXG4gICAgICAgIEdyb3VwU2Nyb2xsVG9fMS5kZWZhdWx0LFxuICAgICAgICBHcm91cFdpdGhIZWFkZXJGb290ZXJfMS5kZWZhdWx0LFxuICAgICAgICBUZW1wbGF0ZUdyb3VwXzEuZGVmYXVsdCxcbiAgICAgICAgU2Nyb2xsVG9fMS5kZWZhdWx0LFxuICAgICAgICBTd2lwZUFjdGlvbnNfMS5kZWZhdWx0LFxuICAgICAgICBPYnNlcnZhYmxlXzEuZGVmYXVsdCxcbiAgICAgICAgRmlyc3RWaXNpYmxlSW5kZXhfMS5kZWZhdWx0XG4gICAgXTtcbn07XG4iLCJcbiAgICAgICAgICAgIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MtcmVndWxhclwiKSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhtclVwZGF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yXCIpLmhtclVwZGF0ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBMaXZlU3luY1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGhvdCB1cGRhdGVzIGFyZSBhcHBsaWVkLCBhc2sgdGhlIG1vZHVsZXMgdG8gYXBwbHkgdGhlIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gaW5pdGlhbCBhcHAgc3RhcnRcbiAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKSg/PCFcXC5cXC9cXGJ0ZXN0c1xcYlxcLy4qPylcXC4oeG1sfGNzc3xqc3woPzwhXFwuZFxcLil0c3woPzwhXFxiX1tcXHctXSpcXC4pc2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoY29udGV4dC5pZCwgKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJITVI6IEFjY2VwdCBtb2R1bGUgJ1wiICsgY29udGV4dC5pZCArIFwiJyBmcm9tICdcIiArIG1vZHVsZS5pZCArIFwiJ1wiKTsgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyA+PiBsaXN0dmlldy12dWUtaW1wb3J0XG52YXIgbmF0aXZlc2NyaXB0X3Z1ZV8xID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC12dWVcIik7XG4vLyA+PiAoaGlkZSlcbnZhciBleGFtcGxlc18xID0gcmVxdWlyZShcIi4vZXhhbXBsZXNcIik7XG52YXIgdmlld3MgPSByZXF1aXJlKFwiLi92aWV3c1wiKTtcbi8vIDw8IChoaWRlKVxudmFyIHZ1ZV8xID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy92dWVcIik7XG5uYXRpdmVzY3JpcHRfdnVlXzEuZGVmYXVsdC51c2UodnVlXzEuZGVmYXVsdCk7XG4vLyA8PCBsaXN0dmlldy12dWUtaW1wb3J0XG5mb3IgKHZhciBfaSA9IDAsIF9hID0gZXhhbXBsZXNfMS5nZXRFeGFtcGxlcygpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBjb21wID0gX2FbX2ldO1xuICAgIG5hdGl2ZXNjcmlwdF92dWVfMS5kZWZhdWx0LmNvbXBvbmVudChjb21wLm5hbWUsIGNvbXApO1xufVxubmF0aXZlc2NyaXB0X3Z1ZV8xLmRlZmF1bHQuY29tcG9uZW50KHZpZXdzLkhvbWUubmFtZSwgdmlld3MuSG9tZSk7XG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xubmV3IG5hdGl2ZXNjcmlwdF92dWVfMS5kZWZhdWx0KHtcbiAgICB0ZW1wbGF0ZTogXCJcXG4gICAgPEZyYW1lPlxcbiAgICAgIDxIb21lIC8+XFxuICAgIDwvRnJhbWU+XFxuICBcIlxufSkuJHN0YXJ0KCk7XG5cbiAgICBcbiAgICAgICAgXG4gICAgICAgICIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV4YW1wbGVzXzEgPSByZXF1aXJlKFwiLi4vZXhhbXBsZXNcIik7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbmFtZTogJ0hvbWUnLFxuICAgIHRlbXBsYXRlOiBcIlxcbiAgICA8UGFnZT5cXG4gICAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMaXN0VmlldyBWdWVcXFwiPlxcbiAgICAgIDwvQWN0aW9uQmFyPlxcbiAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgIDxSYWRMaXN0VmlldyByZWY9XFxcImxpc3RWaWV3XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgIGZvcj1cXFwiZXhhbXBsZSBpbiBleGFtcGxlc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICBAaXRlbVRhcD1cXFwiZ29Ub0V4YW1wbGVcXFwiPlxcbiAgICAgICAgICA8di10ZW1wbGF0ZT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1cXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XFxcImV4YW1wbGUuZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJ0aXRsZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cXFwiMVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRUVFRUVFXFxcIj48L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cXG4gICAgICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgICAgPC9TdGFja0xheW91dD5cXG4gIDwvUGFnZT5cXG4gIFwiLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4YW1wbGVzOiBleGFtcGxlc18xLmdldEV4YW1wbGVzKCksXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdvVG9FeGFtcGxlOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gX2EuaXRlbTtcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSG9tZV8xID0gcmVxdWlyZShcIi4vSG9tZVwiKTtcbmV4cG9ydHMuSG9tZSA9IEhvbWVfMS5kZWZhdWx0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==