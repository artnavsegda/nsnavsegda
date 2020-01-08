(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/examples/NamesAndEmails.json":
/***/ (function(module) {

module.exports = {"names":["Gwen Peters","George Cook","Michelle Clark","Jonathon Rodgers","Beth Malone","Deanna Gill","Martha Price","Timmy Harrison","Lamar Porter","Nora Jefferson","Lauren Gutierrez","Marcus Burke","Betsy Potter","Arlene Allen","Shawn Reyes","Ismael Chambers","Catherine Burns","Danielle Huff","Pat Campbell","Brad Powell","Melanie Mckinney","Sheila Zimmerman","Connie Harris","Sylvia Lindsey","Antoinette Mccoy","Laurie Rhodes","Tami Gregory","Bernice Franklin","Darrell Banks","Mario Bush","Wilbur Shaw","Joyce Dean","Lela Richardson","Jeremy Brady","Anthony Alvarez","Patti Wise","Joel Robertson","Joel Robertson","Jackie Maldonado","Kathryn Byrd","Sherman Martin","Ervin Powers","Leland Warner","Nicholas Bowers","Alex Soto","Naomi Carson","Rufus Edwards","Chelsea Burton","Carrie Tran","Erika Wood","Shari Williamson","Ian Ellis","Pat Vasquez","Karl Bates","Evan Rivera","Tony Lawson","Wallace Little","Florence Cummings","Lynn Smith","Jessie Brewer","Tyler Washington","Dominick Holloway","Clark Sharp","Eric Sanders","Jimmie Hopkins","Juana Ryan","Beulah Strickland","Desiree Mendez","Edwin Grant","Wilbert Harvey","Wayne Obrien","Wayne Obrien","Joseph Castillo","Elijah Morrison","Alton Woods","Sidney Lewis","Scott Graham","Courtney Taylor","Jenna Andrews"],"emails":["Gwen.Peters@gmail.com","George.Cook@yahoo.com","Michelle.Clark@gmail.com","Jonathon.Rodgers@yahoo.com","Beth.Malone@yahoo.com","Deanna.Gill@gmail.com","Martha.Price@yahoo.com","Timmy.Harrison@yahoo.com","Lamar.Porter@gmail.com","Nora.Jefferson@yahoo.com","Lauren.Gutierrez@yahoo.com","Marcus.Burke@gmail.com","Betsy.Potter@gmail.com","Arlene.Allen@gmail.com","Shawn.Reyes@gmail.com","Ismael.Chambers@yahoo.com","Catherine.Burns@yahoo.com","Danielle.Huff@yahoo.com","Pat.Campbell@yahoo.com","Brad.Powell@yahoo.com","Melanie.Mckinney@gmail.com","Sheila.Zimmerman@yahoo.com","Connie.Harris@yahoo.com","Sylvia.Lindsey@yahoo.com","Antoinette.Mccoy@gmail.com","Laurie.Rhodes@gmail.com","Tami.Gregory@yahoo.com","Bernice.Franklin@gmail.com","Darrell.Banks@gmail.com","Mario.Bush@yahoo.com","Wilbur.Shaw@gmail.com","Joyce.Dean@yahoo.com","Lela.Richardson@yahoo.com","Jeremy.Brady@yahoo.com","Anthony.Alvarez@yahoo.com","Patti.Wise@yahoo.com","Joel.Robertson@yahoo.com","Joel.Robertson@yahoo.com","Jackie.Maldonado@yahoo.com","Kathryn.Byrd@yahoo.com","Sherman.Martin@yahoo.com","Ervin.Powers@gmail.com","Leland.Warner@yahoo.com","Nicholas.Bowers@yahoo.com","Alex.Soto@gmail.com","Naomi.Carson@gmail.com","Rufus.Edwards@gmail.com","Chelsea.Burton@gmail.com","Carrie.Tran@yahoo.com","Erika.Wood@yahoo.com","Shari.Williamson@yaoo.com","Ian.Ellis@yahoo.com","Pat.Vasquez@gmail.com","Karl.Bates@gmail.com","Evan.Rivera@yahoo.com","Tony.Lawson@gmail.com@yahoo.com","Wallace.Little@yahoo.com","Florence.Cummings@gmail.com","Lynn.Smith@yahoo.com","Jessie.Brewer@yahoo.com","Tyler.Washington@gmail.com","Dominick.Holloway@gmail.com","Clark.Sharp@gmail.com","Eric.Sanders@gmail.com","Jimmie.Hopkins@gmail.com","Juana.Ryan@gmail.com","Beulah.Strickland@gmail.com","Desiree.Mendez@yahoo.com","Edwin.Grant@yahoo.com","Wilbert.Harvey@gmail.com","Wayne.Obrien@gmail.com","Wayne.Obrien@gmail.com","Joseph.Castillo@gmail.com","Elijah.Morrison@yahoo.com","Alton.Woods@yahoo.com","Sidney.Lewis@yahoo.com","Scott.Graham@yahoo.com","Courtney.Taylor@gmail.com","Jenna.Andrews@gmail.com"]};

/***/ }),

/***/ "./app/examples/custom-angular-comp/custom-image-template.component.css":
/***/ (function(module, exports) {

module.exports = ".listItemTemplateGrid {\n    background-color: white;\n    margin-bottom: 2;\n    margin-right: 2;\n}\n\n.labelsStackLayout {\n    background-color: rgba(49, 104, 177, 0.7);\n    color: white;\n    padding-top: 8;\n    padding-bottom: 8;\n    padding-left: 16;\n    padding-right: 16;\n}"

/***/ }),

/***/ "./app/examples/custom-angular-comp/custom-image-template.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout class=\"listItemTemplateGrid\">\n    <NSImg [src]=\"item.image\" height=\"200\" ios:stretch=\"aspectFill\"></NSImg>\n    <GridLayout verticalAlignment=\"bottom\">\n        <StackLayout class=\"labelsStackLayout\">\n            <Label [text]=\"item.title\"></Label>\n            <Label [text]=\"item.name\"></Label>\n        </StackLayout>\n    </GridLayout>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/custom-angular-comp/custom-image-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomImageTemplateComponent", function() { return CustomImageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/examples/dataItem.ts");


var CustomImageTemplateComponent = /** @class */ (function () {
    function CustomImageTemplateComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item'),
        __metadata("design:type", _dataItem__WEBPACK_IMPORTED_MODULE_1__["DataItem"])
    ], CustomImageTemplateComponent.prototype, "item", void 0);
    CustomImageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-image-template',
            template: __webpack_require__("./app/examples/custom-angular-comp/custom-image-template.component.html"),
            styles: [__webpack_require__("./app/examples/custom-angular-comp/custom-image-template.component.css")]
        })
    ], CustomImageTemplateComponent);
    return CustomImageTemplateComponent;
}());



/***/ }),

/***/ "./app/examples/custom-angular-comp/custom-swipe-template.component.css":
/***/ (function(module, exports) {

module.exports = ".swipe-label {\n    color: red;\n    font-weight: bold;\n}"

/***/ }),

/***/ "./app/examples/custom-angular-comp/custom-swipe-template.component.html":
/***/ (function(module, exports) {

module.exports = "<Label text=\"Swipe template\" class=\"swipe-label\"></Label>>"

/***/ }),

/***/ "./app/examples/custom-angular-comp/custom-swipe-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSwipeTemplateComponent", function() { return CustomSwipeTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var CustomSwipeTemplateComponent = /** @class */ (function () {
    function CustomSwipeTemplateComponent() {
    }
    CustomSwipeTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-swipe-template',
            template: __webpack_require__("./app/examples/custom-angular-comp/custom-swipe-template.component.html"),
            styles: [__webpack_require__("./app/examples/custom-angular-comp/custom-swipe-template.component.css")]
        })
    ], CustomSwipeTemplateComponent);
    return CustomSwipeTemplateComponent;
}());



/***/ }),

/***/ "./app/examples/custom-angular-comp/listview-comp-template.component.css":
/***/ (function(module, exports) {

module.exports = "RadListView {\n    margin-right: -2;\n}\n\n.listItemTemplateGrid {\n    background-color: white;\n    margin-bottom: 2;\n    margin-right: 2;\n}\n\n.labelsStackLayout {\n    background-color: rgb(255, 255, 255, 0.7);\n    padding-top: 8;\n    padding-bottom: 8;\n    padding-left: 16;\n    padding-right: 16;\n}"

/***/ }),

/***/ "./app/examples/custom-angular-comp/listview-comp-template.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\" swipeActions=\"true\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <custom-image-template [item]=\"item\"></custom-image-template>\n        </ng-template>\n        <GridLayout *tkListItemSwipeTemplate>\n            <custom-swipe-template></custom-swipe-template>\n        </GridLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/custom-angular-comp/listview-comp-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListviewCompTemplateComponent", function() { return ListviewCompTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListviewCompTemplateComponent = /** @class */ (function () {
    function ListviewCompTemplateComponent(_changeDetectionRef, _dataItemService) {
        this._changeDetectionRef = _changeDetectionRef;
        this._dataItemService = _dataItemService;
    }
    ListviewCompTemplateComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getListItemsFromJson());
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(ListviewCompTemplateComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListviewCompTemplateComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListviewCompTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-comp-template",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/custom-angular-comp/listview-comp-template.component.html"),
            styles: [__webpack_require__("./app/examples/custom-angular-comp/listview-comp-template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListviewCompTemplateComponent);
    return ListviewCompTemplateComponent;
}());



/***/ }),

/***/ "./app/examples/dataItem.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataItemService", function() { return DataItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_dataItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/examples/mock-dataItems.ts");
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");



var namesAndEmails = __webpack_require__("./app/examples/NamesAndEmails.json");
var posts = __webpack_require__("./app/examples/posts.json");
var listItems = __webpack_require__("./app/examples/item-layouts/listItems.json");
var GENERATED_ITEMS_COUNT = 50;
var GROUPS_COUNT = 3;
var SPECIAL_ITEM_INTERVAL = 4;
var generateItems = function () {
    var items = [];
    for (var i = 1; i <= GENERATED_ITEMS_COUNT; i++) {
        items.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, i % SPECIAL_ITEM_INTERVAL === 0 ? "Special Item " + i : "Item " + i, "This is an item, category is: Category " + i % GROUPS_COUNT, null, null, null, false, null, "Category " + i % GROUPS_COUNT));
    }
    return items;
};
var items = generateItems();
var DataItemService = /** @class */ (function () {
    function DataItemService() {
        this._words = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    }
    DataItemService.prototype.getDataItems = function () {
        return _mock_dataItems__WEBPACK_IMPORTED_MODULE_1__["DATAITEMS"];
    };
    DataItemService.prototype.getIdenticalDataItems = function (size) {
        var result = new Array();
        for (var i = 0; i < size; i++) {
            result.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, "Item " + i, "This is item description."));
        }
        return result;
    };
    DataItemService.prototype.getPersonDataItems = function () {
        var result = new Array();
        for (var i = 0; i < namesAndEmails.names.length; i++) {
            result.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, namesAndEmails.names[i], "This is item description"));
        }
        return result;
    };
    DataItemService.prototype.getNameEmailDataItems = function () {
        var result = new Array();
        for (var i = 0; i < namesAndEmails.names.length; i++) {
            result.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, namesAndEmails.names[i], namesAndEmails.emails[i]));
        }
        return result;
    };
    DataItemService.prototype.getPostDataItems = function () {
        var result = new Array();
        for (var i = 0; i < posts.names.length; i++) {
            result.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i]));
        }
        return result;
    };
    DataItemService.prototype.getListItemsFromJson = function () {
        var result = new Array();
        for (var i = 0; i < listItems.items.length; i++) {
            result.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, listItems.items[i].author, "This is item description", listItems.items[i].title, listItems.items[i].category, listItems.items[i].photo));
        }
        return result;
    };
    DataItemService.prototype.getStaggeredItems = function () {
        var result = new Array();
        for (var i = 0; i < 50; i++) {
            result.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, "Item " + i, this.getRandomLengthString()));
        }
        return result;
    };
    DataItemService.prototype.getDataOperationsItems = function () {
        return [
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](89, "Special Item 89", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](23, "Item 23", "This is item category is: Category 2", null, null, null, false, null, "Category 2"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](1, "Item 1", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](34, "Item 34", "This is item category is: Category 3", null, null, null, false, null, "Category 3"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](55, "Special Item 55", "This is item category is: Category 3", null, null, null, false, null, "Category 3"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](78, "Item 78", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](5, "Item 5", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](111, "Special Item 111", "This is item category is: Category 2", null, null, null, false, null, "Category 2"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](665, "Special Item 665", "This is item category is: Category 2", null, null, null, false, null, "Category 2"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](1134, "Item 1134", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](22, "Special Item 22", "This is item category is: Category 3", null, null, null, false, null, "Category 3"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](345, "Item 345", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](80, "Item 80", "This is item category is: Category 1", null, null, null, false, null, "Category 1"),
            new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](54, "Item 54", "This is item category is: Category 3", null, null, null, false, null, "Category 3"),
        ];
    };
    DataItemService.prototype.getGeneratedDataOperationsItems = function () {
        return generateItems();
    };
    DataItemService.prototype.getGroupedIndexOfSize = function (size) {
        var items = [];
        for (var i = 0; i < size; i++) {
            items.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, "item " + i, "description " + i, null, null, null, false, null, i % 2 === 0 ? "Group 1" : "Group 2"));
        }
        return items;
    };
    DataItemService.prototype.getVariableWidthItems = function () {
        var result = new Array();
        for (var i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                result.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, "Item " + i, "This is item description.", null, null, null, false, null, null, 200, "green"));
            }
            else {
                result.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, "Item " + i, "This is item description.", null, null, null, false, null, null, 100, "red"));
            }
        }
        return result;
    };
    DataItemService.prototype.getRandomLengthString = function () {
        var sentenceLength = Math.round((Math.random() * 15));
        var result = this._words[0];
        for (var i = 0; i < sentenceLength; i++) {
            result += (this._words[i % this._words.length] + " ");
        }
        return result;
    };
    DataItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataItemService);
    return DataItemService;
}());



/***/ }),

/***/ "./app/examples/dataItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataItem", function() { return DataItem; });
// >> listview-angular-data-item
var DataItem = /** @class */ (function () {
    function DataItem(id, name, description, title, text, image, selected, type, category, size, color) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.title = title;
        this.text = text;
        this.image = image;
        this.selected = selected;
        this.type = type;
        this.category = category;
        this.size = size;
        this.color = color;
    }
    DataItem.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Boolean },
        { type: String },
        { type: String },
        { type: Number },
        { type: String }
    ]; };
    return DataItem;
}());

// << listview-angular-data-item


/***/ }),

/***/ "./app/examples/filtering/listview-data-operations-filtering.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/filtering/listview-data-operations-filtering.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, *\">\n    <StackLayout orientation=\"horizontal\">\n        <Button [text]=\"isEnabled ? 'Disable filtering' : 'Enable filtering'\" (tap)=\"toggleFilter()\"></Button>\n    </StackLayout>\n    <RadListView [items]=\"dataItems\" row=\"1\" #myListView [filteringFunction]=\"myFilteringFunc\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/filtering/listview-data-operations-filtering.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDataOperationsFilteringComponent", function() { return ListViewDataOperationsFilteringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");




var ListViewDataOperationsFilteringComponent = /** @class */ (function () {
    function ListViewDataOperationsFilteringComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        // >> listview-data-operations-filtering-angular
        this.myFilteringFunc = function (item) {
            return item && item.name.includes("Special Item");
        };
        // << listview-data-operations-filtering-angular
        this.isEnabled = true;
    }
    Object.defineProperty(ListViewDataOperationsFilteringComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsFilteringComponent.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsFilteringComponent.prototype, "myFilteringFunc", {
        get: function () {
            return this._myFilteringFunc;
        },
        set: function (value) {
            this._myFilteringFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsFilteringComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataOperationsItems());
    };
    ListViewDataOperationsFilteringComponent.prototype.toggleFilter = function () {
        var listView = this.myListViewComponent.listView;
        if (!listView.filteringFunction) {
            listView.filteringFunction = this.myFilteringFunc;
            this.isEnabled = true;
        }
        else {
            listView.filteringFunction = undefined;
            this.isEnabled = false;
        }
    };
    ListViewDataOperationsFilteringComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"])
    ], ListViewDataOperationsFilteringComponent.prototype, "myListViewComponent", void 0);
    ListViewDataOperationsFilteringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-data-operations-filtering",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/filtering/listview-data-operations-filtering.component.html"),
            styles: [__webpack_require__("./app/examples/filtering/listview-data-operations-filtering.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewDataOperationsFilteringComponent);
    return ListViewDataOperationsFilteringComponent;
}());



/***/ }),

/***/ "./app/examples/first-visible-index/first-visible-index.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.big-button {\n    margin: 10;\n}\n\n.margin-label {\n    margin: 10\n}"

/***/ }),

/***/ "./app/examples/first-visible-index/first-visible-index.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, auto, *\">\n    <Label class=\"margin-label\" [text]=\"'First visible item: ' + firstVisibleIndex\"></Label>\n    <Button row=\"1\" class=\"big-button\" text=\"Get first visible\" (tap)=\"getFirstVisiblePosition()\"></Button>\n    <RadListView #myList row=\"2\" [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\" let-odd=\"odd\">\n            <StackLayout orientation=\"vertical\" [backgroundColor]=\"odd ? 'lightgreen' : 'lightblue'\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/first-visible-index/first-visible-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewFirstVisibleIndexComponent", function() { return ListViewFirstVisibleIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);




var ListViewFirstVisibleIndexComponent = /** @class */ (function () {
    function ListViewFirstVisibleIndexComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    ListViewFirstVisibleIndexComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(100));
    };
    ListViewFirstVisibleIndexComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.updateFirstVisibleIndex();
        }, 100);
    };
    Object.defineProperty(ListViewFirstVisibleIndexComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewFirstVisibleIndexComponent.prototype, "firstVisibleIndex", {
        get: function () {
            return this._firstVisibleIndex;
        },
        set: function (value) {
            this._firstVisibleIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewFirstVisibleIndexComponent.prototype.getFirstVisiblePosition = function () {
        this.updateFirstVisibleIndex();
        console.log("First visible index:", this.firstVisibleIndex);
    };
    ListViewFirstVisibleIndexComponent.prototype.updateFirstVisibleIndex = function () {
        this.firstVisibleIndex = this.myListComp.nativeElement.getFirstVisiblePosition();
    };
    ListViewFirstVisibleIndexComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myList", { static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListViewFirstVisibleIndexComponent.prototype, "myListComp", void 0);
    ListViewFirstVisibleIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-first-visible-index",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/first-visible-index/first-visible-index.component.html"),
            styles: [__webpack_require__("./app/examples/first-visible-index/first-visible-index.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewFirstVisibleIndexComponent);
    return ListViewFirstVisibleIndexComponent;
}());



/***/ }),

/***/ "./app/examples/getting-started-horizontal/listview-getting-started-horizontal.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/getting-started-horizontal/listview-getting-started-horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ListViewLinearLayout tkListViewLayout scrollDirection=\"Horizontal\"></ListViewLinearLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/getting-started-horizontal/listview-getting-started-horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewGettingStartedHorizontalComponent", function() { return ListViewGettingStartedHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewGettingStartedHorizontalComponent = /** @class */ (function () {
    function ListViewGettingStartedHorizontalComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewGettingStartedHorizontalComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewGettingStartedHorizontalComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataItems());
    };
    ListViewGettingStartedHorizontalComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewGettingStartedHorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-getting-started-horizontal",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/getting-started-horizontal/listview-getting-started-horizontal.component.html"),
            styles: [__webpack_require__("./app/examples/getting-started-horizontal/listview-getting-started-horizontal.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewGettingStartedHorizontalComponent);
    return ListViewGettingStartedHorizontalComponent;
}());



/***/ }),

/***/ "./app/examples/getting-started/listview-getting-started.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/getting-started/listview-getting-started.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- >> listview-getting-started-angular-xml -->\n<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>\n<!-- << listview-getting-started-angular-xml -->"

/***/ }),

/***/ "./app/examples/getting-started/listview-getting-started.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewGettingStartedComponent", function() { return ListViewGettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewGettingStartedComponent = /** @class */ (function () {
    function ListViewGettingStartedComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewGettingStartedComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewGettingStartedComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataItems());
    };
    ListViewGettingStartedComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewGettingStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-getting-started",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/getting-started/listview-getting-started.component.html"),
            styles: [__webpack_require__("./app/examples/getting-started/listview-getting-started.component.css")]
        })
        // >> listview-getting-started-angular
        ,
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewGettingStartedComponent);
    return ListViewGettingStartedComponent;
}());

// << listview-getting-started-angular


/***/ }),

/***/ "./app/examples/group-swipe-load-pull/blog-posts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostsService", function() { return BlogPostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/examples/group-swipe-load-pull/mock-blogs.ts");


var BlogPostsService = /** @class */ (function () {
    function BlogPostsService() {
        this._firstToLoad = 5;
        this._now = new Date();
        for (var i = 0; i < _mock_blogs__WEBPACK_IMPORTED_MODULE_1__["ALL_POSTS"].length; i++) {
            var date = void 0;
            if (i < _mock_blogs__WEBPACK_IMPORTED_MODULE_1__["ALL_POSTS"].length / 2) {
                var offset = i < this._firstToLoad ? (i - this._firstToLoad) * 3000 : (i - this._firstToLoad) * 1000 * 60 * 50;
                date = new Date(this._now.getTime() - offset);
            }
            else {
                date = new Date(this._now.getFullYear(), this._now.getMonth(), this._now.getDate() - 1);
            }
            _mock_blogs__WEBPACK_IMPORTED_MODULE_1__["ALL_POSTS"][i].publishDate = date;
            _mock_blogs__WEBPACK_IMPORTED_MODULE_1__["ALL_POSTS"][i].deleted = false;
        }
    }
    BlogPostsService.prototype.getBlogPosts = function (count, proceed) {
        this._now = new Date();
        var result = new Array();
        var startingIndex = proceed ? this._nextToLoad : this._firstToLoad;
        for (var i = startingIndex; i < _mock_blogs__WEBPACK_IMPORTED_MODULE_1__["ALL_POSTS"].length && result.length < count; i++) {
            var nextBlogPost = _mock_blogs__WEBPACK_IMPORTED_MODULE_1__["ALL_POSTS"][i];
            if (!nextBlogPost.deleted && nextBlogPost.publishDate <= this._now) {
                nextBlogPost.publishText = this.dateLabel(nextBlogPost.publishDate);
                result.push(nextBlogPost);
            }
            this._nextToLoad = i + 1;
        }
        if (!proceed) {
            this._firstToLoad = this._firstToLoad < 1 ? 0 : this._firstToLoad - 1;
        }
        return result;
    };
    BlogPostsService.prototype.markDeleted = function (blogPost) {
        blogPost.deleted = true;
    };
    BlogPostsService.prototype.dateLabel = function (date) {
        if (!this.isToday(date)) {
            return "Yesterday";
        }
        var diffInMilliseconds = this._now.getTime() - date.getTime();
        var hours = Math.floor(diffInMilliseconds / (60 * 60 * 1000));
        var text = '';
        if (hours > 0) {
            text = hours > 1 ? hours + ' hours ' : hours === 1 ? '1 hour ' : '';
        }
        else {
            var minutes = Math.floor(diffInMilliseconds / (60 * 1000));
            if (minutes > 0) {
                text = minutes > 1 ? minutes + ' minutes ' : minutes === 1 ? '1 minute ' : '';
            }
            else {
                var seconds = Math.floor(diffInMilliseconds / 1000);
                text = seconds > 1 ? seconds + ' seconds ' : seconds === 1 ? '1 second ' : '0 seconds ';
            }
        }
        return text + 'ago';
    };
    BlogPostsService.prototype.isToday = function (date) {
        return date.getDate() === this._now.getDate() &&
            date.getMonth() === this._now.getMonth() &&
            date.getFullYear() === this._now.getFullYear();
    };
    BlogPostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BlogPostsService);
    return BlogPostsService;
}());



/***/ }),

/***/ "./app/examples/group-swipe-load-pull/listview-group-swipe-load-pull.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"blogPosts\" #myListView\n        [groupingFunction]=\"groupByDay\"\n        pullToRefresh=\"true\" (pullToRefreshInitiated)=\"onPullToRefreshInitiated($event)\"\n        loadOnDemandMode=\"Manual\" (loadMoreDataRequested)=\"onLoadMoreDataRequested($event)\" \n        selectionBehavior=\"None\" swipeActions=\"true\"\n        (itemSwipeProgressStarted)=\"onItemSwipeProgressStarted($event)\" \n        (itemSwipeProgressChanged)=\"onItemSwipeProgressChanged($event)\" \n        (itemSwipeProgressEnded)=\"onItemSwipeProgressEnded($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout padding=\"16\" orientation=\"vertical\" background=\"#F0F6FF\">\n                <Label fontSize=\"24\" [text]=\"item.title\" textWrap=\"true\" color=\"#0A255A\"></Label>\n                <Label padding=\"8,0\" [text]=\"item.content\" textWrap=\"true\" color=\"#B3B6C8\"></Label>\n                <Label [text]=\"item.publishText\" color=\"#3D57FE\"></Label>\n            </StackLayout>\n        </ng-template>\n        <GridLayout *tkListItemSwipeTemplate columns=\"auto, *, auto\">\n            <GridLayout id=\"comment-view\" col=\"0\" background=\"#2340CB\" (tap)=\"onLeftSwipeClick($event)\">\n               <Label text=\"comment\" padding=\"12\" color=\"white\" verticalAlignment=\"center\"></Label>\n           </GridLayout>\n           <GridLayout id=\"delete-view\" col=\"2\" background=\"#2340CB\" (tap)=\"onRightSwipeClick($event)\">\n               <Label text=\"delete\" padding=\"12\" color=\"white\" verticalAlignment=\"center\"></Label>\n           </GridLayout>\n       </GridLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/group-swipe-load-pull/listview-group-swipe-load-pull.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewGroupSwipeLoadPullComponent", function() { return ListViewGroupSwipeLoadPullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/group-swipe-load-pull/blog-posts.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__);





var ListViewGroupSwipeLoadPullComponent = /** @class */ (function () {
    function ListViewGroupSwipeLoadPullComponent(_blogPostsService) {
        this._blogPostsService = _blogPostsService;
        this._startItemsCount = 6;
        this._loadMoreItemsCount = 2;
    }
    Object.defineProperty(ListViewGroupSwipeLoadPullComponent.prototype, "blogPosts", {
        get: function () {
            return this._blogPosts;
        },
        enumerable: true,
        configurable: true
    });
    ListViewGroupSwipeLoadPullComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._blogPosts = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._blogPostsService.getBlogPosts(this._startItemsCount, false));
        this._groupByDay = function (item) {
            return _this._blogPostsService.isToday(item.publishDate) ? "Today" : "Yesterday";
        };
    };
    Object.defineProperty(ListViewGroupSwipeLoadPullComponent.prototype, "groupByDay", {
        get: function () {
            return this._groupByDay;
        },
        set: function (value) {
            this._groupByDay = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewGroupSwipeLoadPullComponent.prototype.onPullToRefreshInitiated = function (args) {
        var _this = this;
        setTimeout(function () {
            _this._blogPosts = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](_this._blogPostsService.getBlogPosts(_this._startItemsCount, false));
            var listView = args.object;
            listView.notifyPullToRefreshFinished(true);
        }, 500);
    };
    ListViewGroupSwipeLoadPullComponent.prototype.onLoadMoreDataRequested = function (args) {
        var _this = this;
        setTimeout(function () {
            var newItems = _this._blogPostsService.getBlogPosts(_this._loadMoreItemsCount, true);
            for (var i = 0; i < newItems.length; i++) {
                _this._blogPosts.push(newItems[i]);
            }
            var listView = args.object;
            listView.notifyLoadOnDemandFinished(newItems.length < _this._loadMoreItemsCount);
        }, 500);
    };
    ListViewGroupSwipeLoadPullComponent.prototype.onItemSwipeProgressStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('comment-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    ListViewGroupSwipeLoadPullComponent.prototype.onItemSwipeProgressChanged = function (args) {
    };
    ListViewGroupSwipeLoadPullComponent.prototype.onItemSwipeProgressEnded = function (args) {
    };
    ListViewGroupSwipeLoadPullComponent.prototype.onLeftSwipeClick = function (args) {
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_4__["alert"])({
            title: "Comments are currently disabled.",
            okButtonText: "OK"
        });
        this.listViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListViewGroupSwipeLoadPullComponent.prototype.onRightSwipeClick = function (args) {
        var itemView = args.object;
        var currentBlogPost = itemView.bindingContext;
        var currentBlogPostIndex = this._blogPosts.indexOf(currentBlogPost);
        this._blogPosts.splice(currentBlogPostIndex, 1);
        this._blogPostsService.markDeleted(currentBlogPost);
    };
    ListViewGroupSwipeLoadPullComponent.ctorParameters = function () { return [
        { type: _blog_posts_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListViewGroupSwipeLoadPullComponent.prototype, "listViewComponent", void 0);
    ListViewGroupSwipeLoadPullComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-group-swipe-load-pull",
            providers: [_blog_posts_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostsService"]],
            template: __webpack_require__("./app/examples/group-swipe-load-pull/listview-group-swipe-load-pull.component.html")
        }),
        __metadata("design:paramtypes", [_blog_posts_service__WEBPACK_IMPORTED_MODULE_2__["BlogPostsService"]])
    ], ListViewGroupSwipeLoadPullComponent);
    return ListViewGroupSwipeLoadPullComponent;
}());



/***/ }),

/***/ "./app/examples/group-swipe-load-pull/mock-blogs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_POSTS", function() { return ALL_POSTS; });
var ALL_POSTS = [
    {
        title: "Going Offline with NativeScript and Kinvey",
        content: "Learn how to take your NativeScript app offline by leveraging the built-in capabilities of Kinvey."
    },
    {
        title: "Latest NativeScript is hot out of the oven!",
        content: "Latest NativeScript is here! Learn all about the amazing developer-focused productivity improvements like Hot Module Replacement, a new interactive CLI, and the tns preview command (allowing you to start developing for iOS on Windows!)."
    },
    {
        title: "How to add Firebase Analytics to your NativeScript Mobile App",
        content: "Adding Analytics to your app is an effort that worth investing in. With just half an hour of work, you will know what your users need, how can you address their needs and where to invest your precious development time. Learn how to use Firebase Analytics with NativeScript in this tutorial."
    },
    {
        title: "How to Build a PWA, an iOS App, and an Android App - From One Codebase",
        content: "In this article I’ll show you code sharing with NativeScript and Angular works. You’ll learn the steps you’ll need to take to build for all three platforms, as well as some tips and tricks I learned from going through this process myself."
    },
    {
        title: "How to Build a Simple Dialog for Your NativeScript Apps",
        content: "There are a few different ways to implement dialogs in NativeScript apps. In this article I’m going to walk you through how to create a simple dialog that you can style without going through the hassle of creating an entire page."
    },
    {
        title: "NativeScript First-Time Contributors Contest",
        content: "The NativeScript team is welcoming first-time contributors to the open source world! Contribute a fix to any of the NativeScript repositories on GitHub and earn rewards during the month of October."
    },
    {
        title: "Using Azure Cognitive Services with NativeScript",
        content: "Is there any doubt that cognitive apps are the future? Learn how to use some of Microsoft Azure's cognitive APIs with a NativeScript app to create a simple, but engaging, app experience."
    },
    {
        title: "The Power(s) of NativeScript and the NativeScript Playground",
        content: "It's pretty amazing what you can do with just a web browser and the NativeScript Playground."
    },
    {
        title: "Using Custom Fonts in a NativeScript App",
        content: "Using custom fonts in your NativeScript app can provide a much-needed (and easy) boost to the look and feel of your app. Learn some tips and tricks to get a great-looking font in your app."
    },
    {
        title: "Make HTTP Requests to Remote Web Services in a NativeScript-Vue App",
        content: "Learn how to make HTTP requests to remote web services and APIs in an Android and iOS application built with NativeScript and the Vue.js JavaScript framework."
    },
    {
        title: "Renderless Components in NativeScript-Vue",
        content: "Learn about Renderless Components in NativeScript-Vue"
    },
    {
        title: "Meet the NativeScript Experts at jsMobileConf",
        content: "Building on the success of the past two NativeScript Developer Day events, we are now bringing you jsMobileConf - a two-day, two-track event focused on the cutting edge JavaScript ecosystem. Coming in October from Boston, MA, you'll find sessions on NativeScript, machine learning, AI, Serverless, Blockchain, AR/VR, and more."
    },
    {
        title: "What is Serverless and Why Does it Matter?",
        content: "What's all the fuss over serverless and what does it have to do with mobile apps? Learn more in this blog post that dives into the difference between SaaS, IaaS, FaaS, and PaaS."
    },
    {
        title: "Building a Simple Progressbar for your NativeScript App",
        content: "Progressbars are a common user interface component regardless of development platform. In this article we’ll look at how you can easily recreate this UI component for your NativeScript apps, and learn a bit about NativeScript’s layout system in the process."
    },
    {
        title: "Include Feature-Rich Maps in a NativeScript-Vue App with Mapbox",
        content: "Learn how to use Mapbox in a NativeScript application that uses the Vue.js JavaScript framework to work with feature rich maps.",
    },
    {
        title: "Sending Text Messages to Phone Contacts using NativeScript",
        content: "A brief tutorial on how to pull a contact from your iOS or Android contact list into a NativeScript app and prepare a text message for delivery."
    },
];


/***/ }),

/***/ "./app/examples/grouping-collapsible/listview-data-operations-grouping-collapsible.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/grouping-collapsible/listview-data-operations-grouping-collapsible.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, *\">\n    <RadListView [items]=\"dataItems\" row=\"1\" [groupingFunction]=\"myGroupingFunc\" enableCollapsibleGroups=\"true\" >\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout>\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout> "

/***/ }),

/***/ "./app/examples/grouping-collapsible/listview-data-operations-grouping-collapsible.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListviewDataOperationsGroupingCollapsibleComponent", function() { return ListviewDataOperationsGroupingCollapsibleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListviewDataOperationsGroupingCollapsibleComponent = /** @class */ (function () {
    function ListviewDataOperationsGroupingCollapsibleComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.myGroupingFunc = function (item) {
            return item.category;
        };
    }
    ListviewDataOperationsGroupingCollapsibleComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataOperationsItems());
    };
    Object.defineProperty(ListviewDataOperationsGroupingCollapsibleComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListviewDataOperationsGroupingCollapsibleComponent.prototype, "myGroupingFunc", {
        get: function () {
            return this._myGroupingFunc;
        },
        set: function (value) {
            this._myGroupingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListviewDataOperationsGroupingCollapsibleComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListviewDataOperationsGroupingCollapsibleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-data-operations-grouping-collapsible",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/grouping-collapsible/listview-data-operations-grouping-collapsible.component.html"),
            styles: [__webpack_require__("./app/examples/grouping-collapsible/listview-data-operations-grouping-collapsible.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListviewDataOperationsGroupingCollapsibleComponent);
    return ListviewDataOperationsGroupingCollapsibleComponent;
}());



/***/ }),

/***/ "./app/examples/grouping-multiple-templates/listview-data-operations-grouping-templates.component.css":
/***/ (function(module, exports) {

module.exports = "/* >> listview-multiple-templates-angular-css */\n.nameLabel {\n    font-size: 20;\n    margin: 5;\n}\n\n.typeLabel {\n    font-size: 17;\n    margin: 5;\n}\n\n.middleLabel{\n    margin: 0 5 0 5;\n}\n\n.descriptionLabel {\n    font-size: 14;\n    margin: 5\n}\n\n.yellowText {\n  color: yellow;  \n}\n\n.whiteText {\n  color: white;  \n}\n\n.blackText {\n  color: black;  \n}\n\n.blackStackLayout {\n    background-color: black;\n}\n\n.redStackLayout {\n    background-color: red;\n}\n\n.greenStackLayout {\n    background-color: green;\n}\n\n.blueStackLayout {\n    background-color: blue;\n}\n\n.yellowStackLayout {\n    background-color: yellow;\n}\n/* << listview-multiple-templates-angular-css */\n\n.groupLabel {\n    background-color: lightblue;\n    padding: 15;\n}"

/***/ }),

/***/ "./app/examples/grouping-multiple-templates/listview-data-operations-grouping-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\" [itemTemplateSelector]=\"templateSelector\" [groupingFunction]=\"myGroupingFunc\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label [text]=\"item.name\" class=\"nameLabel\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel middleLabel\"></Label>\n                <Label [text]=\"item.description\" class=\"descriptionLabel\"></Label>\n            </StackLayout>\n        </ng-template>\n\n        <ng-template tkTemplateKey=\"start\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"blackStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel yellowText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel yellowText middleLabel\"></Label>\n                <Label [text]=\"item.description\" class=\"descriptionLabel yellowText\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkTemplateKey=\"Red\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"redStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel whiteText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel whiteText\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkTemplateKey=\"green\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"greenStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel whiteText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel whiteText\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkTemplateKey=\"Blue\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"blueStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel whiteText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel whiteText\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkTemplateKey=\"End\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"yellowStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel blackText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel blackText middleLabel\"></Label>\n                <Label [text]=\"item.description\" class=\"descriptionLabel blackText\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/grouping-multiple-templates/listview-data-operations-grouping-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDataOperationsGroupingTemplatesComponent", function() { return ListViewDataOperationsGroupingTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");




var ListViewDataOperationsGroupingTemplatesComponent = /** @class */ (function () {
    function ListViewDataOperationsGroupingTemplatesComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.templateSelectorFunction = function (item, index, items) {
            return item.type;
        };
        this.myGroupingFunc = function (item) {
            return item.type;
        };
    }
    Object.defineProperty(ListViewDataOperationsGroupingTemplatesComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsGroupingTemplatesComponent.prototype, "myGroupingFunc", {
        get: function () {
            return this._myGroupingFunc;
        },
        set: function (value) {
            this._myGroupingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsGroupingTemplatesComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this._templateSelector = this.templateSelectorFunction;
        var itemsCount = 50;
        for (var i = 0; i <= itemsCount; i++) {
            this._dataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, "Item " + i, "This is item description", undefined, undefined, undefined, undefined, this.getType(i, itemsCount)));
        }
    };
    ListViewDataOperationsGroupingTemplatesComponent.prototype.getType = function (index, end) {
        var lastDigit = index % 10;
        var type = index === 0 ? "start" : index === end ? "end" : undefined;
        if (!type) {
            type = lastDigit === 0 ? "default" : lastDigit <= 3 ? "red" : lastDigit <= 6 ? "blue" : lastDigit <= 9 ? "green" : "default";
        }
        return type;
    };
    Object.defineProperty(ListViewDataOperationsGroupingTemplatesComponent.prototype, "templateSelector", {
        get: function () {
            return this._templateSelector;
        },
        set: function (value) {
            this._templateSelector = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsGroupingTemplatesComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    ListViewDataOperationsGroupingTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-data-operations-grouping-templates",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/grouping-multiple-templates/listview-data-operations-grouping-templates.component.html"),
            styles: [__webpack_require__("./app/examples/grouping-multiple-templates/listview-data-operations-grouping-templates.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewDataOperationsGroupingTemplatesComponent);
    return ListViewDataOperationsGroupingTemplatesComponent;
}());



/***/ }),

/***/ "./app/examples/grouping-scroll-to/grouping-scroll-to.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.groupLabel {\n    background-color: lightblue;\n    padding: 15;\n}"

/***/ }),

/***/ "./app/examples/grouping-scroll-to/grouping-scroll-to.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, *\">\n    <StackLayout>\n        <Button [text]=\"isEnabled ? 'Disable grouping' : 'Enable grouping'\" (tap)=\"toggleGrouping()\"></Button>\n        <Button text=\"Scroll to 1 index\" (tap)=\"onTap()\"></Button>\n    </StackLayout>\n    <RadListView [items]=\"dataItems\" row=\"1\" #myListView [groupingFunction]=\"myGroupingFunc\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout>\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkGroupTemplate let-category=\"category\">\n            <GridLayout ios:height=\"50\">\n                <Label class=\"nameLabel\" [text]=\"category\" class=\"groupLabel\"></Label>\n            </GridLayout>\n        </ng-template>\n    </RadListView>   \n</GridLayout>"

/***/ }),

/***/ "./app/examples/grouping-scroll-to/grouping-scroll-to.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDataOperationsGroupingScrollToComponent", function() { return ListViewDataOperationsGroupingScrollToComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");




var ListViewDataOperationsGroupingScrollToComponent = /** @class */ (function () {
    function ListViewDataOperationsGroupingScrollToComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.myGroupingFunc = function (item) {
            return item.category;
        };
        this.isEnabled = true;
    }
    Object.defineProperty(ListViewDataOperationsGroupingScrollToComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsGroupingScrollToComponent.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsGroupingScrollToComponent.prototype, "myGroupingFunc", {
        get: function () {
            return this._myGroupingFunc;
        },
        set: function (value) {
            this._myGroupingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsGroupingScrollToComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getGroupedIndexOfSize(50));
    };
    ListViewDataOperationsGroupingScrollToComponent.prototype.toggleGrouping = function () {
        var listView = this.myListViewComponent.listView;
        if (!listView.groupingFunction) {
            listView.groupingFunction = this.myGroupingFunc;
            this.isEnabled = true;
        }
        else {
            listView.groupingFunction = undefined;
            this.isEnabled = false;
        }
    };
    ListViewDataOperationsGroupingScrollToComponent.prototype.onTap = function () {
        this.myListViewComponent.listView.scrollToIndex(1);
    };
    ListViewDataOperationsGroupingScrollToComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"])
    ], ListViewDataOperationsGroupingScrollToComponent.prototype, "myListViewComponent", void 0);
    ListViewDataOperationsGroupingScrollToComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-grouping-scroll-to.component",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/grouping-scroll-to/grouping-scroll-to.component.html"),
            styles: [__webpack_require__("./app/examples/grouping-scroll-to/grouping-scroll-to.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewDataOperationsGroupingScrollToComponent);
    return ListViewDataOperationsGroupingScrollToComponent;
}());



/***/ }),

/***/ "./app/examples/grouping-with-header-footer/with-header-footer.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.groupLabel {\n    background-color: lightblue;\n    padding: 15;\n}\n\n.header {\n    background-color: #65a565;\n    font-size: 45;\n}\n\n.footer {\n    background-color: #7fff7f;\n}"

/***/ }),

/***/ "./app/examples/grouping-with-header-footer/with-header-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, *\">\n    <StackLayout orientation=\"horizontal\">\n        <Button [text]=\"isEnabled ? 'Disable grouping' : 'Enable grouping'\" (tap)=\"toggleGrouping()\"></Button>\n    </StackLayout>\n    <RadListView [items]=\"dataItems\" row=\"1\" #myListView [groupingFunction]=\"myGroupingFunc\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout>\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkGroupTemplate let-category=\"category\">\n            <GridLayout ios:height=\"50\">\n                <Label class=\"nameLabel\" [text]=\"category\" class=\"groupLabel\"></Label>\n            </GridLayout>\n        </ng-template>\n        <ng-template tkListViewHeader>\n            <Label text=\"This is list header with height 100\" class=\"header\"></Label>\n        </ng-template>\n        <ng-template tkListViewFooter>\n            <Label text=\"This is list footer with height 50\" class=\"footer\"></Label>\n        </ng-template>\n    </RadListView>   \n</GridLayout>"

/***/ }),

/***/ "./app/examples/grouping-with-header-footer/with-header-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDataOperationsGroupingHeaderFooterComponent", function() { return ListViewDataOperationsGroupingHeaderFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");




var ListViewDataOperationsGroupingHeaderFooterComponent = /** @class */ (function () {
    function ListViewDataOperationsGroupingHeaderFooterComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.myGroupingFunc = function (item) {
            return item.category;
        };
        this.isEnabled = true;
    }
    Object.defineProperty(ListViewDataOperationsGroupingHeaderFooterComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsGroupingHeaderFooterComponent.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsGroupingHeaderFooterComponent.prototype, "myGroupingFunc", {
        get: function () {
            return this._myGroupingFunc;
        },
        set: function (value) {
            this._myGroupingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsGroupingHeaderFooterComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getGeneratedDataOperationsItems());
    };
    ListViewDataOperationsGroupingHeaderFooterComponent.prototype.toggleGrouping = function () {
        var listView = this.myListViewComponent.listView;
        if (!listView.groupingFunction) {
            listView.groupingFunction = this.myGroupingFunc;
            this.isEnabled = true;
        }
        else {
            listView.groupingFunction = undefined;
            this.isEnabled = false;
        }
    };
    ListViewDataOperationsGroupingHeaderFooterComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"])
    ], ListViewDataOperationsGroupingHeaderFooterComponent.prototype, "myListViewComponent", void 0);
    ListViewDataOperationsGroupingHeaderFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-data-operations-grouping-header-footer",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/grouping-with-header-footer/with-header-footer.component.html"),
            styles: [__webpack_require__("./app/examples/grouping-with-header-footer/with-header-footer.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewDataOperationsGroupingHeaderFooterComponent);
    return ListViewDataOperationsGroupingHeaderFooterComponent;
}());



/***/ }),

/***/ "./app/examples/grouping/listview-data-operations-grouping.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.groupLabel {\n    background-color: lightblue;\n    padding: 15;\n}"

/***/ }),

/***/ "./app/examples/grouping/listview-data-operations-grouping.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, *\">\n    <StackLayout orientation=\"horizontal\">\n        <Button [text]=\"isEnabled ? 'Disable grouping' : 'Enable grouping'\" (tap)=\"toggleGrouping()\"></Button>\n    </StackLayout>\n    <RadListView [items]=\"dataItems\" row=\"1\" #myListView [groupingFunction]=\"myGroupingFunc\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout>\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <!-- >> listview-data-operations-grouping-template-angular -->\n        <ng-template tkGroupTemplate let-category=\"category\">\n            <GridLayout ios:height=\"50\">\n                <Label class=\"nameLabel\" [text]=\"category\" class=\"groupLabel\"></Label>\n            </GridLayout>\n        </ng-template>\n        <!-- << listview-data-operations-grouping-template-angular -->\n    </RadListView>   \n</GridLayout>"

/***/ }),

/***/ "./app/examples/grouping/listview-data-operations-grouping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDataOperationsGroupingComponent", function() { return ListViewDataOperationsGroupingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");




var ListViewDataOperationsGroupingComponent = /** @class */ (function () {
    function ListViewDataOperationsGroupingComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        // >> listview-data-operations-grouping-angular
        this.myGroupingFunc = function (item) {
            return item.category;
        };
        // << listview-data-operations-grouping-angular
        this.isEnabled = true;
    }
    Object.defineProperty(ListViewDataOperationsGroupingComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsGroupingComponent.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsGroupingComponent.prototype, "myGroupingFunc", {
        get: function () {
            return this._myGroupingFunc;
        },
        set: function (value) {
            this._myGroupingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsGroupingComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataOperationsItems());
    };
    ListViewDataOperationsGroupingComponent.prototype.toggleGrouping = function () {
        var listView = this.myListViewComponent.listView;
        if (!listView.groupingFunction) {
            listView.groupingFunction = this.myGroupingFunc;
            this.isEnabled = true;
        }
        else {
            listView.groupingFunction = undefined;
            this.isEnabled = false;
        }
    };
    ListViewDataOperationsGroupingComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"])
    ], ListViewDataOperationsGroupingComponent.prototype, "myListViewComponent", void 0);
    ListViewDataOperationsGroupingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-data-operations-grouping",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/grouping/listview-data-operations-grouping.component.html"),
            styles: [__webpack_require__("./app/examples/grouping/listview-data-operations-grouping.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewDataOperationsGroupingComponent);
    return ListViewDataOperationsGroupingComponent;
}());



/***/ }),

/***/ "./app/examples/header-footer/auto-size/listview-auto-size.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.header {\n    background-color: #65a565;\n}\n\n.footer {\n    background-color: #7fff7f;\n}"

/***/ }),

/***/ "./app/examples/header-footer/auto-size/listview-auto-size.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout>\n    <!-- >> angular-listview-header-footer -->\n    <RadListView [items]=\"dataItems\" tkExampleTitle tkToggleNavButton>\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkListViewHeader>\n            <Label text=\"This is list header\" class=\"header\"></Label>\n        </ng-template>\n        <ng-template tkListViewFooter>\n            <Label text=\"This is list footer\" class=\"footer\"></Label>\n        </ng-template>\n    </RadListView>\n    <!-- << angular-listview-header-footer -->\n</GridLayout>"

/***/ }),

/***/ "./app/examples/header-footer/auto-size/listview-auto-size.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewHeaderFooterComponent", function() { return ListViewHeaderFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewHeaderFooterComponent = /** @class */ (function () {
    function ListViewHeaderFooterComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    ListViewHeaderFooterComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(5));
        this.footerTitle = "This is list footer";
        this.headerTitle = "This is list header";
    };
    Object.defineProperty(ListViewHeaderFooterComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewHeaderFooterComponent.prototype, "headerTitle", {
        get: function () {
            return this._headerTitle;
        },
        set: function (value) {
            this._headerTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewHeaderFooterComponent.prototype, "footerTitle", {
        get: function () {
            return this._footerTitle;
        },
        set: function (value) {
            this._footerTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewHeaderFooterComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewHeaderFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-auto-size-header-footer",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/header-footer/auto-size/listview-auto-size.component.html"),
            styles: [__webpack_require__("./app/examples/header-footer/auto-size/listview-auto-size.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewHeaderFooterComponent);
    return ListViewHeaderFooterComponent;
}());



/***/ }),

/***/ "./app/examples/header-footer/big-footer/listview-big-footer.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.header {\n    background-color: #65a565;\n}\n\n.footer {\n    background-color: #7fff7f;\n}"

/***/ }),

/***/ "./app/examples/header-footer/big-footer/listview-big-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout>\n    <RadListView [items]=\"dataItems\" tkExampleTitle tkToggleNavButton>\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkListViewHeader>\n            <Label text=\"This is list header with height 50\" height=\"50\" class=\"header\"></Label>\n        </ng-template>\n        <ng-template tkListViewFooter>\n            <Label text=\"This is list footer with height 100\" height=\"100\" class=\"footer\"></Label>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/header-footer/big-footer/listview-big-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewBigFooterComponent", function() { return ListViewBigFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewBigFooterComponent = /** @class */ (function () {
    function ListViewBigFooterComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    ListViewBigFooterComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(5));
        this.headerTitle = "This is list header with height 50";
        this.footerTitle = "This is list footer with height 100";
    };
    Object.defineProperty(ListViewBigFooterComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewBigFooterComponent.prototype, "headerTitle", {
        get: function () {
            return this._headerTitle;
        },
        set: function (value) {
            this._headerTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewBigFooterComponent.prototype, "footerTitle", {
        get: function () {
            return this._footerTitle;
        },
        set: function (value) {
            this._footerTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewBigFooterComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewBigFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-big-footer",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/header-footer/big-footer/listview-big-footer.component.html"),
            styles: [__webpack_require__("./app/examples/header-footer/big-footer/listview-big-footer.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewBigFooterComponent);
    return ListViewBigFooterComponent;
}());



/***/ }),

/***/ "./app/examples/header-footer/big-header/listview-big-header.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.header {\n    background-color: #65a565;\n}\n\n.footer {\n    background-color: #7fff7f;\n}"

/***/ }),

/***/ "./app/examples/header-footer/big-header/listview-big-header.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout>\n    <RadListView [items]=\"dataItems\" tkExampleTitle tkToggleNavButton>\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkListViewHeader>\n            <Label text=\"This is list header with height 100\" height=\"100\" class=\"header\"></Label>\n        </ng-template>\n        <ng-template tkListViewFooter>\n            <Label text=\"This is list footer with height 50\" height=\"50\" class=\"footer\"></Label>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/header-footer/big-header/listview-big-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewBigHeaderComponent", function() { return ListViewBigHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewBigHeaderComponent = /** @class */ (function () {
    function ListViewBigHeaderComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    ListViewBigHeaderComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(5));
        this.headerTitle = "This is list header with height 100";
        this.footerTitle = "This is list footer with height 50";
    };
    Object.defineProperty(ListViewBigHeaderComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewBigHeaderComponent.prototype, "headerTitle", {
        get: function () {
            return this._headerTitle;
        },
        set: function (value) {
            this._headerTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewBigHeaderComponent.prototype, "footerTitle", {
        get: function () {
            return this._footerTitle;
        },
        set: function (value) {
            this._footerTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewBigHeaderComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewBigHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-big-header",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/header-footer/big-header/listview-big-header.component.html"),
            styles: [__webpack_require__("./app/examples/header-footer/big-header/listview-big-header.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewBigHeaderComponent);
    return ListViewBigHeaderComponent;
}());



/***/ }),

/***/ "./app/examples/header-footer/change-size-at-runtime/listview-change-size-at-runtime.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.headerLayout {\n    background-color: #65a565;\n}\n\n.footerLayout {\n    background-color: #7fff7f;\n}\n\n.whiteLabel {\n    background-color: green;\n    color: white;\n}\n\n.redLabel {\n    background-color: red;\n    color: white;\n}"

/***/ }),

/***/ "./app/examples/header-footer/change-size-at-runtime/listview-change-size-at-runtime.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\">\n    <Button text=\"Update header/footer with third label\" (tap)=\"tabUpdate()\"></Button>\n    <RadListView [items]=\"dataItems\" tkExampleTitle tkToggleNavButton row=\"1\" #listView>\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkListViewHeader>\n            <StackLayout class=\"headerLayout\">\n                <Label text=\"This is list header\"></Label>\n                <Label text=\"Second header label\" [visibility]=\"isSecondVisible ? 'visible' : 'collapse'\" height=\"50\" class=\"whiteLabel\"></Label>\n                <Label text=\"Third header label\" [visibility]=\"isThirdVisible ? 'visible' : 'collapse'\" height=\"50\" class=\"redLabel\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkListViewFooter>\n            <StackLayout class=\"footerLayout\">\n                <Label text=\"This is list footer\"></Label>\n                <Label text=\"Second footer label\" [visibility]=\"isSecondVisible ? 'visible' : 'collapse'\" height=\"50\" class=\"whiteLabel\"></Label>\n                <Label text=\"Third footer label\" [visibility]=\"isThirdVisible ? 'visible' : 'collapse'\" height=\"50\"  class=\"redLabel\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/header-footer/change-size-at-runtime/listview-change-size-at-runtime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListviewChangeSizeAtRuntimeComponent", function() { return ListviewChangeSizeAtRuntimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);




var ListviewChangeSizeAtRuntimeComponent = /** @class */ (function () {
    function ListviewChangeSizeAtRuntimeComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this._isSecondVisible = false;
        this._isThirdVisible = false;
    }
    ListviewChangeSizeAtRuntimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(30));
        this.footerTitle = "This is list footer";
        this.headerTitle = "This is list header";
        setTimeout(function () {
            _this.isSecondVisible = true;
            if (_this.listViewComponent) {
                _this.listViewComponent.listView.updateHeaderFooter();
            }
        }, 2000);
    };
    Object.defineProperty(ListviewChangeSizeAtRuntimeComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListviewChangeSizeAtRuntimeComponent.prototype, "headerTitle", {
        get: function () {
            return this._headerTitle;
        },
        set: function (value) {
            this._headerTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListviewChangeSizeAtRuntimeComponent.prototype, "footerTitle", {
        get: function () {
            return this._footerTitle;
        },
        set: function (value) {
            this._footerTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListviewChangeSizeAtRuntimeComponent.prototype, "isSecondVisible", {
        get: function () {
            return this._isSecondVisible;
        },
        set: function (value) {
            this._isSecondVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListviewChangeSizeAtRuntimeComponent.prototype, "isThirdVisible", {
        get: function () {
            return this._isThirdVisible;
        },
        set: function (value) {
            this._isThirdVisible = value;
        },
        enumerable: true,
        configurable: true
    });
    ListviewChangeSizeAtRuntimeComponent.prototype.tabUpdate = function () {
        this.isThirdVisible = true;
        this.listViewComponent.listView.updateHeaderFooter();
    };
    ListviewChangeSizeAtRuntimeComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("listView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], static: true }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListviewChangeSizeAtRuntimeComponent.prototype, "listViewComponent", void 0);
    ListviewChangeSizeAtRuntimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-change-size-at-runtime",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/header-footer/change-size-at-runtime/listview-change-size-at-runtime.component.html"),
            styles: [__webpack_require__("./app/examples/header-footer/change-size-at-runtime/listview-change-size-at-runtime.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListviewChangeSizeAtRuntimeComponent);
    return ListviewChangeSizeAtRuntimeComponent;
}());



/***/ }),

/***/ "./app/examples/horizontal-with-variable-item-width/listview-horizontal-with-variable-item-width.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n"

/***/ }),

/***/ "./app/examples/horizontal-with-variable-item-width/listview-horizontal-with-variable-item-width.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.size\" [backgroundColor]=\"item.color\" [width]=\"item.size\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ListViewLinearLayout tkListViewLayout scrollDirection=\"Horizontal\"></ListViewLinearLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/horizontal-with-variable-item-width/listview-horizontal-with-variable-item-width.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListviewHorizontalWithVariableItemWidthComponent", function() { return ListviewHorizontalWithVariableItemWidthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListviewHorizontalWithVariableItemWidthComponent = /** @class */ (function () {
    function ListviewHorizontalWithVariableItemWidthComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListviewHorizontalWithVariableItemWidthComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListviewHorizontalWithVariableItemWidthComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getVariableWidthItems());
    };
    ListviewHorizontalWithVariableItemWidthComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListviewHorizontalWithVariableItemWidthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-horizontal-with-variable-item-width",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/horizontal-with-variable-item-width/listview-horizontal-with-variable-item-width.component.html"),
            styles: [__webpack_require__("./app/examples/horizontal-with-variable-item-width/listview-horizontal-with-variable-item-width.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListviewHorizontalWithVariableItemWidthComponent);
    return ListviewHorizontalWithVariableItemWidthComponent;
}());



/***/ }),

/***/ "./app/examples/item-animations/listview-item-animations.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.headerGridLayout {\n    background-color: #65a565;\n}\n\n.footerGridLayout {\n    background-color: #7fff7f;\n}\n\n.iosButton {\n    margin: 10\n}\n\n.buttonStackLayout {\n    background-color: #f8f8f8;\n}"

/***/ }),

/***/ "./app/examples/item-animations/listview-item-animations.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Item Animations\">\n    <NavigationButton text=\"Back\" icon=\"res://ic_arrow_back_black_24dp\" (tap)=\"onNavigationButtonTap()\"></NavigationButton>\n\n    <ActionItem *tkIfAndroid text=\"Default\" android.position=\"popup\" (tap)=\"onDefaultTap()\"></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Fade\" android.position=\"popup\" (tap)=\"onFadeTap()\"></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Scale\" android.position=\"popup\" (tap)=\"onScaleTap()\"></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Slide\" android.position=\"popup\" (tap)=\"onSlideTap()\"></ActionItem>\n\n    <ActionItem *tkIfIOS text=\"Options\" ios.position=\"right\" (tap)=\"onOptionsTapped()\"></ActionItem>\n</ActionBar>\n<GridLayout orientation=\"vertical\" rows=\"50, *\">\n    <StackLayout class=\"buttonStackLayout\">\n        <StackLayout row=\"0\" orientation=\"horizontal\" horizontalAlignment=\"center\">\n            <Button text=\"ADD\" (tap)=\"onAddItemClick()\" ios:class=\"iosButton\"></Button>\n            <Button text=\"DEL\" (tap)=\"onRemoveItemClick()\" ios:class=\"iosButton\"></Button>\n            <Button text=\"UPDATE\" (tap)=\"onUpdateItemClick()\" ios:class=\"iosButton\"></Button>\n            <Button text=\"RESET\" (tap)=\"onResetClick()\" ios:class=\"iosButton\"></Button>\n        </StackLayout>\n    </StackLayout>\n    <RadListView [items]=\"dataItems\" row=\"1\">\n        <ListViewLinearLayout tkListViewLayout scrollDirection=\"Vertical\" [itemInsertAnimation]=\"itemInsertAnimation\" [itemDeleteAnimation]=\"itemDeleteAnimation\"></ListViewLinearLayout>\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>\n"

/***/ }),

/***/ "./app/examples/item-animations/listview-item-animations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemAnimationsComponent", function() { return ListViewItemAnimationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var _options_example_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/options-example-base.ts");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/navigation/options/options.service.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_8__);









var ListViewItemAnimationsComponent = /** @class */ (function (_super) {
    __extends(ListViewItemAnimationsComponent, _super);
    function ListViewItemAnimationsComponent(_page, _optionsService, _router) {
        var _this = _super.call(this) || this;
        _this._page = _page;
        _this._optionsService = _optionsService;
        _this._router = _router;
        if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_8__["ios"]) {
            _this._page.on("navigatingTo", _this.onNavigatingTo, _this);
            _this._optionsParamName = "animation";
            _this._optionsService.paramName = _this._optionsParamName;
            _this.router = _router;
            _this.navigationParameters = {
                selectedIndex: 0, paramName: _this._optionsParamName,
                items: ["Default", "Fade", "Scale", "Slide"]
            };
        }
        _this.onDefaultTap();
        return _this;
    }
    ListViewItemAnimationsComponent.prototype.ngOnInit = function () {
        this._itemsCount = 0;
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
    };
    Object.defineProperty(ListViewItemAnimationsComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewItemAnimationsComponent.prototype, "itemInsertAnimation", {
        get: function () {
            return this._itemInsertAnimation;
        },
        set: function (value) {
            this._itemInsertAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewItemAnimationsComponent.prototype, "itemDeleteAnimation", {
        get: function () {
            return this._itemDeleteAnimation;
        },
        set: function (value) {
            this._itemDeleteAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemAnimationsComponent.prototype.onAddItemClick = function () {
        this._dataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_3__["DataItem"](this._itemsCount, "This is a new item: " + this._itemsCount, "This is the new item's description."));
        this._itemsCount++;
    };
    ListViewItemAnimationsComponent.prototype.onResetClick = function () {
        while (this._dataItems.length) {
            this._dataItems.pop();
        }
        this._itemsCount = 0;
    };
    ListViewItemAnimationsComponent.prototype.onUpdateItemClick = function () {
        for (var index_1 = 0; index_1 < this._dataItems.length; index_1++) {
            var item = this._dataItems.getItem(index_1);
            if (item) {
                item.name = "This is an updated item";
                item.description = "This is the updated item's description.";
            }
        }
    };
    ListViewItemAnimationsComponent.prototype.onRemoveItemClick = function () {
        this._dataItems.splice(this._dataItems.length - 1, 1);
    };
    ListViewItemAnimationsComponent.prototype.onDefaultTap = function () {
        this.itemInsertAnimation = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimation"].Default;
        this.itemDeleteAnimation = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimation"].Default;
    };
    ListViewItemAnimationsComponent.prototype.onFadeTap = function () {
        this.itemInsertAnimation = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimation"].Fade;
        this.itemDeleteAnimation = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimation"].Fade;
    };
    ListViewItemAnimationsComponent.prototype.onScaleTap = function () {
        this.itemInsertAnimation = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimation"].Scale;
        this.itemDeleteAnimation = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimation"].Scale;
    };
    ListViewItemAnimationsComponent.prototype.onSlideTap = function () {
        this.itemInsertAnimation = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimation"].Slide;
        this.itemDeleteAnimation = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimation"].Slide;
    };
    ListViewItemAnimationsComponent.prototype.onNavigatingTo = function (args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case "Default":
                        this.onDefaultTap();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case "Fade":
                        this.onFadeTap();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case "Scale":
                        this.onScaleTap();
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case "Slide":
                        this.onSlideTap();
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    };
    ListViewItemAnimationsComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5__["Page"] },
        { type: _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_7__["OptionsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ListViewItemAnimationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-animations",
            template: __webpack_require__("./app/examples/item-animations/listview-item-animations.component.html"),
            styles: [__webpack_require__("./app/examples/item-animations/listview-item-animations.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_5__["Page"], _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_7__["OptionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListViewItemAnimationsComponent);
    return ListViewItemAnimationsComponent;
}(_options_example_base__WEBPACK_IMPORTED_MODULE_4__["OptionsExampleBase"]));



/***/ }),

/***/ "./app/examples/item-layouts/listItems.json":
/***/ (function(module) {

module.exports = {"items":[{"title":"These Rolls..","author":"Le Bakery de Trevi","photo":"res://dessert1","category":"desserts"},{"title":"Chocolate Cake","author":"The Sweetest Thing","photo":"res://dessert2","category":"desserts"},{"title":"Rainbow Chocolate Pudding","author":"Sweet and Sweeter","photo":"res://dessert3","category":"desserts"},{"title":"Ice-cream Sandwich","author":"The Sweetest Thing","photo":"res://dessert4","category":"desserts"},{"title":"Le Macarons de Lyon","author":"Le Bakery de Trevi","photo":"res://dessert5","category":"desserts"},{"title":"Le Tiramisu de Treviso","author":"Sweet and Sweeter","photo":"res://dessert6","category":"desserts"},{"title":"Creme Caramel","author":"The Sweetest Thing","photo":"res://dessert7","category":"desserts"},{"title":"Be Fit, Be Healthy Fruit Mix","author":"Sweet and Sweeter","photo":"res://dessert8","category":"desserts"},{"title":"The Fresh Sandwich","author":"Sandwiches and More","photo":"res://breakfast1","category":"breakfast"},{"title":"The Healthy Sandwich","author":"Sandwiches and More","photo":"res://breakfast2","category":"breakfast"},{"title":"Crispy Chicken with Avocado Sandwich","author":"Chicken's Heaven","photo":"res://breakfast3","category":"breakfast"},{"title":"Beef Sandwich","author":"Nice to Meat You","photo":"res://breakfast4","category":"breakfast"},{"title":"Tuna Sandwich","author":"Ron's Fishery","photo":"res://breakfast5","category":"breakfast"},{"title":"Fruit Cake","author":"ReFresh","photo":"res://breakfast6","category":"breakfast"},{"title":"A Quick Snack Burger","author":"Nice to Meat You","photo":"res://main1","category":"mains"},{"title":"Chilli Meat Bites","author":"Nice to Meat You","photo":"res://main2","category":"mains"},{"title":"Your Favourite Ribs","author":"Nice to Meat You","photo":"res://main3","category":"mains"},{"title":"Burger at the Max","author":"Burger Queen","photo":"res://main4","category":"mains"},{"title":"Special Burger with Fries","author":"Burger Queen","photo":"res://main5","category":"mains"},{"title":"Dried Meat with Spices","author":"Nice to Meat You","photo":"res://paleo1","category":"paleo"},{"title":"Golden Chicken","author":"Chicken's Heaven","photo":"res://paleo2","category":"paleo"},{"title":"Pork Steak with Vegetables","author":"Nice to Meat You","photo":"res://paleo3","category":"paleo"},{"title":"Lamb Cotlets","author":"Nice to Meat You","photo":"res://paleo4","category":"paleo"},{"title":"Salmon Steak","author":"Ron's Fishery","photo":"res://paleo5","category":"paleo"}]};

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-grid-no-height.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-grid-no-height.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\" let-odd=\"odd\">\n            <GridLayout rows=\"auto, auto\" [backgroundColor]=\"odd ? 'lightgreen' : 'lightblue'\">\n                <Label row=\"0\" [text]=\"item.name\"></Label>\n                <Label row=\"1\" [text]=\"item.description\" textWrap=\"true\"></Label>\n            </GridLayout>\n        </ng-template>\n\n        <ListViewGridLayout tkListViewLayout scrollDirection=\"Vertical\" spanCount=\"2\"></ListViewGridLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-grid-no-height.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemLayoutsGridNoHeightComponent", function() { return ListViewItemLayoutsGridNoHeightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewItemLayoutsGridNoHeightComponent = /** @class */ (function () {
    function ListViewItemLayoutsGridNoHeightComponent(_changeDetectionRef, _dataItemService) {
        this._changeDetectionRef = _changeDetectionRef;
        this._dataItemService = _dataItemService;
    }
    ListViewItemLayoutsGridNoHeightComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(100));
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(ListViewItemLayoutsGridNoHeightComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemLayoutsGridNoHeightComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemLayoutsGridNoHeightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-layouts-grid-no-height",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-layouts/listview-item-layouts-grid-no-height.component.html"),
            styles: [__webpack_require__("./app/examples/item-layouts/listview-item-layouts-grid-no-height.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemLayoutsGridNoHeightComponent);
    return ListViewItemLayoutsGridNoHeightComponent;
}());



/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-grid.component.css":
/***/ (function(module, exports) {

module.exports = "RadListView {\n    margin-right: -2;\n}\n\n.listItemTemplateGrid {\n    background-color: white;\n    margin-bottom: 2;\n    margin-right: 2;\n}\n\n.labelsStackLayout {\n    background-color: rgb(255, 255, 255, 0.7);\n    padding-top: 8;\n    padding-bottom: 8;\n    padding-left: 16;\n    padding-right: 16;\n}"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <GridLayout class=\"listItemTemplateGrid\">\n                <NSImg [src]=\"item.image\" height=\"250\" ios:stretch=\"aspectFill\" ></NSImg>\n                <GridLayout verticalAlignment=\"bottom\">\n                    <StackLayout class=\"labelsStackLayout\">\n                        <Label [text]=\"item.title\" textWrap=\"true\"></Label>\n                        <Label [text]=\"item.name\"></Label>\n                    </StackLayout>\n                </GridLayout>\n            </GridLayout>\n        </ng-template>\n\n        <!-- >> angular-listview-item-layouts-grid -->\n        <ListViewGridLayout tkListViewLayout scrollDirection=\"Vertical\" ios:itemHeight=\"250\" spanCount=\"2\"></ListViewGridLayout>\n        <!-- << angular-listview-item-layouts-grid -->\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemLayoutsGridComponent", function() { return ListViewItemLayoutsGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewItemLayoutsGridComponent = /** @class */ (function () {
    function ListViewItemLayoutsGridComponent(_changeDetectionRef, _dataItemService) {
        this._changeDetectionRef = _changeDetectionRef;
        this._dataItemService = _dataItemService;
    }
    ListViewItemLayoutsGridComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getListItemsFromJson());
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(ListViewItemLayoutsGridComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemLayoutsGridComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemLayoutsGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-layouts-grid",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-layouts/listview-item-layouts-grid.component.html"),
            styles: [__webpack_require__("./app/examples/item-layouts/listview-item-layouts-grid.component.css")]
        })
        // >> angular-listview-item-layouts-grid-component
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemLayoutsGridComponent);
    return ListViewItemLayoutsGridComponent;
}());

// << angular-listview-item-layouts-grid-component


/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-linear.component.css":
/***/ (function(module, exports) {

module.exports = "RadListView {\n    margin-right: -2;\n}\n\n.listItemTemplateGrid {\n    background-color: white;\n    margin-bottom: 2;\n    margin-right: 2;\n}\n\n.labelsStackLayout {\n    background-color: rgb(255, 255, 255, 0.7);\n    padding-top: 8;\n    padding-bottom: 8;\n    padding-left: 16;\n    padding-right: 16;\n}"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-linear.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <GridLayout class=\"listItemTemplateGrid\">\n                <NSImg [src]=\"item.image\" height=\"250\" ios:stretch=\"aspectFill\"></NSImg>\n                <GridLayout verticalAlignment=\"bottom\">\n                    <StackLayout class=\"labelsStackLayout\">\n                        <Label [text]=\"item.title\"></Label>\n                        <Label [text]=\"item.name\"></Label>\n                    </StackLayout>\n                </GridLayout>\n            </GridLayout>\n        </ng-template>\n        \n        <!-- >> angular-listview-item-animations-html -->\n        <ListViewLinearLayout tkListViewLayout scrollDirection=\"Vertical\" itemInsertAnimation=\"Default\" itemDeleteAnimation=\"Default\"></ListViewLinearLayout>\n        <!-- << angular-listview-item-animations-html -->\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-linear.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemLayoutsLinearComponent", function() { return ListViewItemLayoutsLinearComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> angular-listview-item-layouts-linear-component



var ListViewItemLayoutsLinearComponent = /** @class */ (function () {
    function ListViewItemLayoutsLinearComponent(_changeDetectionRef, _dataItemService) {
        this._changeDetectionRef = _changeDetectionRef;
        this._dataItemService = _dataItemService;
    }
    ListViewItemLayoutsLinearComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getListItemsFromJson());
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(ListViewItemLayoutsLinearComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemLayoutsLinearComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemLayoutsLinearComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-layouts-linear",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-layouts/listview-item-layouts-linear.component.html"),
            styles: [__webpack_require__("./app/examples/item-layouts/listview-item-layouts-linear.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemLayoutsLinearComponent);
    return ListViewItemLayoutsLinearComponent;
}());

// << angular-listview-item-layouts-linear-component


/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-runtime.component.css":
/***/ (function(module, exports) {

module.exports = "RadListView {\n    margin-right: -2;\n}\n\n.menu-button {\n    margin: 10;\n}\n\n.listItem-template-grid {\n    border-color: red;\n    background-color: blue;\n    color: white;\n    border-width: 1;\n}"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-runtime.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, *\">\n    <StackLayout orientation=\"horizontal\">\n        <Button text=\"LINEAR\" class=\"menu-button\" (tap)=\"changeToLinear($event)\"></Button>\n        <Button text=\"GRID\" class=\"menu-button\" (tap)=\"changeToGrid($event)\"></Button>\n        <Button text=\"STAGGERED\" class=\"menu-button\" (tap)=\"changeToStaggered($event)\"></Button>\n    </StackLayout>\n    <RadListView [items]=\"dataItems\" #myListView row=\"1\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <GridLayout rows=\"auto, *\" class=\"listItem-template-grid\">\n                <Label row=\"0\" [text]=\"item.name\"></Label>\n                <Label row=\"1\" [text]=\"item.description\" textWrap=\"true\"></Label>\n            </GridLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-runtime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemLayoutsRuntimeComponent", function() { return ListViewItemLayoutsRuntimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/examples/dataItem.service.ts");






var ListViewItemLayoutsRuntimeComponent = /** @class */ (function () {
    function ListViewItemLayoutsRuntimeComponent(_changeDetectionRef, _dataItemService) {
        this._changeDetectionRef = _changeDetectionRef;
        this._dataItemService = _dataItemService;
    }
    ListViewItemLayoutsRuntimeComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getStaggeredItems());
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(ListViewItemLayoutsRuntimeComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemLayoutsRuntimeComponent.prototype.changeToLinear = function (args) {
        var layout = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__["ListViewLinearLayout"]();
        this.myListViewComponent.listView.listViewLayout = layout;
    };
    ListViewItemLayoutsRuntimeComponent.prototype.changeToGrid = function (args) {
        var layout = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__["ListViewGridLayout"]();
        if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["ios"]) {
            layout.itemHeight = 200;
        }
        layout.spanCount = 2;
        this.myListViewComponent.listView.listViewLayout = layout;
    };
    ListViewItemLayoutsRuntimeComponent.prototype.changeToStaggered = function (args) {
        var layout = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_2__["ListViewStaggeredLayout"]();
        layout.spanCount = 3;
        this.myListViewComponent.listView.listViewLayout = layout;
    };
    ListViewItemLayoutsRuntimeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_5__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListViewItemLayoutsRuntimeComponent.prototype, "myListViewComponent", void 0);
    ListViewItemLayoutsRuntimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-layouts-runtime",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_5__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-layouts/listview-item-layouts-runtime.component.html"),
            styles: [__webpack_require__("./app/examples/item-layouts/listview-item-layouts-runtime.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _dataItem_service__WEBPACK_IMPORTED_MODULE_5__["DataItemService"]])
    ], ListViewItemLayoutsRuntimeComponent);
    return ListViewItemLayoutsRuntimeComponent;
}());



/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-staggered.component.css":
/***/ (function(module, exports) {

module.exports = ".item-template-style{\n    border-width:1;\n    border-color: gray;\n}"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-staggered.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"staggeredItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"item-template-style\">\n                <Label [text]=\"item.name\"></Label>\n                <Label [text]=\"item.description\" textWrap=\"true\"></Label>\n            </StackLayout>\n        </ng-template>\n\n        <!-- >> angular-listview-item-layouts-staggered -->\n        <ListViewStaggeredLayout tkListViewLayout scrollDirection=\"Vertical\" spanCount=\"3\"></ListViewStaggeredLayout>\n        <!-- << angular-listview-item-layouts-staggered -->\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-layouts/listview-item-layouts-staggered.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemLayoutsStaggeredComponent", function() { return ListViewItemLayoutsStaggeredComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> angular-listview-item-layouts-staggered-component



var ListViewItemLayoutsStaggeredComponent = /** @class */ (function () {
    function ListViewItemLayoutsStaggeredComponent(_changeDetectionRef, _dataItemService) {
        this._changeDetectionRef = _changeDetectionRef;
        this._dataItemService = _dataItemService;
    }
    ListViewItemLayoutsStaggeredComponent.prototype.ngOnInit = function () {
        this._staggeredItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getStaggeredItems());
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(ListViewItemLayoutsStaggeredComponent.prototype, "staggeredItems", {
        get: function () {
            return this._staggeredItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemLayoutsStaggeredComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemLayoutsStaggeredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-layouts-staggered",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-layouts/listview-item-layouts-staggered.component.html"),
            styles: [__webpack_require__("./app/examples/item-layouts/listview-item-layouts-staggered.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemLayoutsStaggeredComponent);
    return ListViewItemLayoutsStaggeredComponent;
}());

// << angular-listview-item-layouts-staggered-component


/***/ }),

/***/ "./app/examples/item-loading/listview-item-loading.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20;\n    margin-bottom: 10;\n}\n\n.descLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/item-loading/listview-item-loading.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <!-- >> angular-angular-listview-item-loading -->\n    <RadListView [items]=\"dataItems\" (itemLoading)=\"onItemLoading($event)\">\n        <!-- << angular-angular-listview-item-loading -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\" padding=\"15\">\n                <Label id=\"nameLabel\" class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label id=\"descLabel\" class=\"descLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-loading/listview-item-loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemLoadingComponent", function() { return ListViewItemLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/color/color.js");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");




var ListViewItemLoadingComponent = /** @class */ (function () {
    function ListViewItemLoadingComponent(_changeDetectionRef, _dataItemService) {
        this._changeDetectionRef = _changeDetectionRef;
        this._dataItemService = _dataItemService;
    }
    ListViewItemLoadingComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataItems());
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(ListViewItemLoadingComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    // >> angular-listview-item-loading-component
    ListViewItemLoadingComponent.prototype.onItemLoading = function (args) {
        if (args.index % 2 === 0) {
            args.view.backgroundColor = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__["Color"]("#b3ecff");
            args.view.getViewById("nameLabel").fontSize = 24;
            args.view.getViewById("descLabel").fontSize = 18;
        }
        else {
            args.view.backgroundColor = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__["Color"]("#ccf2ff");
            args.view.getViewById("nameLabel").fontSize = 20;
            args.view.getViewById("descLabel").fontSize = 14;
        }
    };
    ListViewItemLoadingComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    ListViewItemLoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-loading",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-loading/listview-item-loading.component.html"),
            styles: [__webpack_require__("./app/examples/item-loading/listview-item-loading.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewItemLoadingComponent);
    return ListViewItemLoadingComponent;
}());



/***/ }),

/***/ "./app/examples/item-reorder/listview-item-reorder-handle.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20;\n}\n\n.listItemGridLayout {\n    padding-top: 16;\n    padding-bottom: 16;\n}\n\n.handleImage {\n    margin: 16;\n}"

/***/ }),

/***/ "./app/examples/item-reorder/listview-item-reorder-handle.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" rows=\"auto, *\" tkExampleTitle tkToggleNavButton>\n    <Label text=\"Drag an item by the handle to reorder\"></Label>\n\n    <RadListView (itemReordered)=\"onItemReordered($event)\" [items]=\"dataItems\" row=\"1\" itemReorder=\"true\" reorderMode=\"Drag\">\n        <!-- >> angular-listview-item-reorder-handle -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <GridLayout class=\"listItemGridLayout\" columns=\"*, auto\">\n                <StackLayout orientation=\"vertical\" col=\"0\" verticalAlignment=\"center\">\n                    <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                </StackLayout>\n                <ReorderHandle col=\"1\" verticalAlignment=\"center\">\n                    <Image src=\"res://reorder_icon\" class=\"handleImage\" stretch=\"none\" verticalAlignment=\"stretch\"></Image>\n                </ReorderHandle>\n            </GridLayout>\n        </ng-template>\n        <!-- << angular-listview-item-reorder-handle -->\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-reorder/listview-item-reorder-handle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemReorderHandleComponent", function() { return ListViewItemReorderHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> angular-listview-item-reorder-handle-component



var ListViewItemReorderHandleComponent = /** @class */ (function () {
    function ListViewItemReorderHandleComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewItemReorderHandleComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemReorderHandleComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getPersonDataItems());
    };
    ListViewItemReorderHandleComponent.prototype.onItemReordered = function (args) {
        console.log("Item reordered. Old index: " + args.index + " " + "new index: " + args.data.targetIndex);
    };
    ListViewItemReorderHandleComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemReorderHandleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-reorder-handle",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-reorder/listview-item-reorder-handle.component.html"),
            styles: [__webpack_require__("./app/examples/item-reorder/listview-item-reorder-handle.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemReorderHandleComponent);
    return ListViewItemReorderHandleComponent;
}());

// << angular-listview-item-reorder-handle-component


/***/ }),

/***/ "./app/examples/item-reorder/listview-item-reorder.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20;\n    margin-left: 10;\n}\n\n.listItemGridLayout {\n    padding-top: 5;\n    padding-bottom: 5;\n}\n\n.listItemGridLayout StackLayout {\n    vertical-align: center;\n}"

/***/ }),

/***/ "./app/examples/item-reorder/listview-item-reorder.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" rows=\"auto, *, auto\" tkExampleTitle tkToggleNavButton>\n     <!-- >> angular-listview-reorder -->\n    <RadListView row=\"1\" [items]=\"dataItems\" itemReorder=\"true\" (itemReordered)=\"onItemReordered($event)\">\n     <!-- << angular-listview-reorder -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <GridLayout class=\"listItemGridLayout\">\n                <StackLayout orientation=\"vertical\" col=\"0\">\n                    <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                </StackLayout>\n            </GridLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-reorder/listview-item-reorder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemReorderComponent", function() { return ListViewItemReorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewItemReorderComponent = /** @class */ (function () {
    function ListViewItemReorderComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewItemReorderComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemReorderComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getPersonDataItems());
    };
    ListViewItemReorderComponent.prototype.onItemReordered = function (args) {
        console.log("Item reordered. Old index: " + args.index + " " + "new index: " + args.data.targetIndex);
    };
    ListViewItemReorderComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemReorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-reorder",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-reorder/listview-item-reorder.component.html"),
            styles: [__webpack_require__("./app/examples/item-reorder/listview-item-reorder.component.css")]
        })
        // >> angular-listview-reorder-component
        ,
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemReorderComponent);
    return ListViewItemReorderComponent;
}());

// << angular-listview-reorder-component


/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection-multiple.component.css":
/***/ (function(module, exports) {

module.exports = "/* ios styles */\n.iosListItemStackLayout {\n    padding-left: 50;\n}\n\n.iosNameLabel {\n    font-size: 20\n}\n\n.iosDescriptionLabel {\n    font-size: 13;\n}\n\n/* Android styles */\n.androidListItemStackLayout {\n    padding-left: 16;\n}\n\n.androidNameLabel {\n    font-size: 20\n}\n\n.androidDescriptionLabel {\n    font-size: 13;\n}"

/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection-multiple.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <!-- >> angular-listview-item-selection-multiple -->\n    <RadListView [items]=\"dataItems\" selectionBehavior=\"Press\" multipleSelection=\"true\">\n    <!-- << angular-listview-item-selection-multiple -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout ios:class=\"iosListItemStackLayout\" android:class=\"androidListItemStackLayout\">\n                <Label ios:class=\"iosNameLabel\" android:class=\"androidNameLabel\" [text]=\"item.name\"></Label>\n                <Label ios:class=\"iosDescriptionLabel\" android:class=\"androidDescriptionLabel\" class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection-multiple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemSelectionMultipleComponent", function() { return ListViewItemSelectionMultipleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> angular-listview-item-selection-multiple-component



var ListViewItemSelectionMultipleComponent = /** @class */ (function () {
    function ListViewItemSelectionMultipleComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewItemSelectionMultipleComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemSelectionMultipleComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getNameEmailDataItems());
    };
    ListViewItemSelectionMultipleComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemSelectionMultipleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-selection-multiple",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-selection/listview-item-selection-multiple.component.html"),
            styles: [__webpack_require__("./app/examples/item-selection/listview-item-selection-multiple.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemSelectionMultipleComponent);
    return ListViewItemSelectionMultipleComponent;
}());

// << angular-listview-item-selection-multiple-component


/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection-programmatic.component.css":
/***/ (function(module, exports) {

module.exports = "/* ios styles */\n.iosListItemStackLayout {\n    padding-left: 50;\n}\n\n.iosNameLabel {\n    font-size: 20\n}\n\n.iosDescriptionLabel {\n    font-size: 14;\n}\n\n.iosSelectItemTextField {\n    background-color: white;\n    width: 60;\n    height: 30;\n}\n\n.iosSelectItemButton {\n    margin-left: 10;\n    height: 50;\n}\n\n.iosSelectAllButton {\n    margin-right: 10;\n}\n\n/* Android styles */\n.androidListItemStackLayout {\n    padding-left: 16;\n}\n\n.androidNameLabel {\n    font-size: 20\n}\n\n.androidDescriptionLabel {\n    font-size: 14;\n}\n\n.androidSelectItemTextField {\n    width: 60;\n    height: 50;\n}\n\n.androidSelectItemButton {\n    margin-left: 10;\n    height: 50;\n}\n\n.androidSelectAllButton {\n    margin-right: 10;\n}"

/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection-programmatic.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" rows=\"auto, *\" tkExampleTitle tkToggleNavButton>\n    <GridLayout rows=\"auto,70,70\" backgroundColor=\"#f8f8f8\" orientation=\"horizontal\" row=\"0\">\n        <StackLayout orientation=\"horizontal\" horizontalAlignment=\"center\" row=\"0\">\n            <Button text=\"Select all\" (tap)=\"onSelectAllTap()\" ios:class=\"selectAllButton\" android:class=\"androidSelectAllButton\"></Button>\n            <Button text=\"Deselect all\" (tap)=\"onDeselectAllTap()\"></Button>\n        </StackLayout>\n        <StackLayout orientation=\"horizontal\" row=\"1\" horizontalAlignment=\"center\">\n            <Label text=\"Select item at:\" verticalAlignment=\"center\"></Label>\n            <TextField [(ngModel)]=\"txtSelectItemIndex\" ios:class=\"iosSelectItemTextField\" android:class=\"androidSelectItemTextField\"></TextField>\n            <Button (tap)=\"onSelectItemAtTap()\" ios:class=\"iosSelectItemButton\" android:class=\"androidSelectItemButton\" text=\"Done\"></Button>\n        </StackLayout>\n        <StackLayout orientation=\"horizontal\" row=\"2\" horizontalAlignment=\"center\">\n            <Label text=\"Deselect item at:\" verticalAlignment=\"center\"></Label>\n            <TextField [(ngModel)]=\"txtDeselectItemIndex\" ios:class=\"iosSelectItemTextField\" android:class=\"androidSelectItemTextField\"></TextField>\n            <Button (tap)=\"onDeselectItemAtTap()\" text=\"Done\" ios:class=\"iosSelectItemButton\" android:class=\"androidSelectItemButton\"></Button>\n        </StackLayout>\n    </GridLayout>\n    <RadListView #myRadListView [items]=\"dataItems\" row=\"1\" multipleSelection=\"true\" selectionBehavior=\"Press\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\" ios:class=\"iosListItemStackLayout\" android:class=\"androidListItemStackLayout\">\n                <Label ios:class=\"iosNameLabel\" android:class=\"androidNameLabel\" [text]=\"item.name\"></Label>\n                <Label ios:class=\"iosDescriptionLabel\" android:class=\"androidDescriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection-programmatic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemSelectionProgrammaticComponent", function() { return ListViewItemSelectionProgrammaticComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
// >> angular-listview-item-selection-programmatic-component




var ListViewItemSelectionProgrammaticComponent = /** @class */ (function () {
    function ListViewItemSelectionProgrammaticComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewItemSelectionProgrammaticComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewItemSelectionProgrammaticComponent.prototype, "txtDeselectItemIndex", {
        get: function () {
            return this._txtDeselectItemIndex;
        },
        set: function (value) {
            this._txtDeselectItemIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewItemSelectionProgrammaticComponent.prototype, "txtSelectItemIndex", {
        get: function () {
            return this._txtSelectItemIndex;
        },
        set: function (value) {
            this._txtSelectItemIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemSelectionProgrammaticComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getNameEmailDataItems());
    };
    ListViewItemSelectionProgrammaticComponent.prototype.onSelectItemAtTap = function () {
        this.listViewComponent.listView.selectItemAt(Number(this.txtSelectItemIndex));
    };
    ListViewItemSelectionProgrammaticComponent.prototype.onDeselectItemAtTap = function () {
        this.listViewComponent.listView.deselectItemAt(Number(this.txtDeselectItemIndex));
    };
    ListViewItemSelectionProgrammaticComponent.prototype.onSelectAllTap = function () {
        this.listViewComponent.listView.selectAll();
    };
    ListViewItemSelectionProgrammaticComponent.prototype.onDeselectAllTap = function () {
        this.listViewComponent.listView.deselectAll();
    };
    ListViewItemSelectionProgrammaticComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myRadListView', { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListViewItemSelectionProgrammaticComponent.prototype, "listViewComponent", void 0);
    ListViewItemSelectionProgrammaticComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-selection-programmatic",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-selection/listview-item-selection-programmatic.component.html"),
            styles: [__webpack_require__("./app/examples/item-selection/listview-item-selection-programmatic.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemSelectionProgrammaticComponent);
    return ListViewItemSelectionProgrammaticComponent;
}());

// << angular-listview-item-selection-programmatic-component


/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection.component.css":
/***/ (function(module, exports) {

module.exports = ".listItemStackLayout {\n    padding-left: 16;\n}\n\n.nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 13;\n}"

/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"*, auto\" tkExampleTitle tkToggleNavButton>\n    <!-- >> angular-listview-selection -->\n    <RadListView row=\"0\" [items]=\"dataItems\" selectionBehavior=\"Press\" (itemSelected)=\"onItemSelected($event)\" (itemSelecting)=\"onItemSelecting($event)\" (itemDeselecting)=\"onItemDeselecting($event)\" (itemDeselected)=\"onItemDeselected($event)\">\n        <!-- << angular-listview-selection -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n             <StackLayout class=\"listItemStackLayout\" orientation=\"vertical\">\n                    <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                    <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n    <Label [text]=\"selectedItems\" textWrap=\"true\" row=\"1\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-selection/listview-item-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemSelectionComponent", function() { return ListViewItemSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewItemSelectionComponent = /** @class */ (function () {
    function ListViewItemSelectionComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewItemSelectionComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewItemSelectionComponent.prototype, "selectedItems", {
        get: function () {
            return this._selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemSelectionComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getNameEmailDataItems());
        this._selectedItems = "No Selected items.";
    };
    ListViewItemSelectionComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var selectedTitles = "Selected items: ";
        for (var i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        this._selectedItems = selectedTitles;
        var selectedItem = this.dataItems.getItem(args.index);
        console.log("Item selected: " + (selectedItem && selectedItem.name));
    };
    ListViewItemSelectionComponent.prototype.onItemSelecting = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var selectedTitles = "Selecting item: ";
        for (var i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        var selectedItem = this.dataItems.getItem(args.index);
        console.log("Item selecting: " + (selectedItem && selectedItem.name));
    };
    ListViewItemSelectionComponent.prototype.onItemDeselecting = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var selectedTitles = "Deselecting item: ";
        for (var i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        var selectedItem = this.dataItems.getItem(args.index);
        console.log("Item deselecting: " + (selectedItem && selectedItem.name));
    };
    ListViewItemSelectionComponent.prototype.onItemDeselected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        if (selectedItems.length > 0) {
            var selectedTitles = "Selected items: ";
            for (var i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
                if (i < selectedItems.length - 1) {
                    selectedTitles += ", ";
                }
            }
            this._selectedItems = selectedTitles;
        }
        else {
            this._selectedItems = "No Selected items.";
        }
        var deselectedItem = this.dataItems.getItem(args.index);
        console.log("Item deselected: " + (deselectedItem && deselectedItem.name));
    };
    ListViewItemSelectionComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-selection",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-selection/listview-item-selection.component.html"),
            styles: [__webpack_require__("./app/examples/item-selection/listview-item-selection.component.css")]
        })
        // >> angular-listview-selection-component
        ,
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemSelectionComponent);
    return ListViewItemSelectionComponent;
}());

// << angular-listview-selection-component


/***/ }),

/***/ "./app/examples/item-selection/styling-item-selection.component.css":
/***/ (function(module, exports) {

module.exports = ".listItemStackLayout {\n    padding-left: 16;\n}\n\n.nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 13;\n}\n\n.red-transparent-selection-list {\n    item-selected-background-color: red;\n    background-color: transparent;\n    color: white;\n}"

/***/ }),

/***/ "./app/examples/item-selection/styling-item-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout backgroundColor=\"green\" rows=\"*, auto\" tkExampleTitle tkToggleNavButton>\n    <RadListView class=\"red-transparent-selection-list\" row=\"0\" [items]=\"dataItems\" selectionBehavior=\"Press\" (itemSelected)=\"onItemSelected($event)\" (itemSelecting)=\"onItemSelecting($event)\" (itemDeselecting)=\"onItemDeselecting($event)\" (itemDeselected)=\"onItemDeselected($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n             <StackLayout class=\"listItemStackLayout\" orientation=\"vertical\">\n                    <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                    <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n    <Label [text]=\"selectedItems\" textWrap=\"true\" row=\"1\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-selection/styling-item-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingItemSelectionComponent", function() { return StylingItemSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var StylingItemSelectionComponent = /** @class */ (function () {
    function StylingItemSelectionComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(StylingItemSelectionComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StylingItemSelectionComponent.prototype, "selectedItems", {
        get: function () {
            return this._selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    StylingItemSelectionComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getNameEmailDataItems());
        this._selectedItems = "No Selected items.";
    };
    StylingItemSelectionComponent.prototype.onItemSelected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var selectedTitles = "Selected items: ";
        for (var i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        this._selectedItems = selectedTitles;
        var selectedItem = this.dataItems.getItem(args.index);
        console.log("Item selected: " + (selectedItem && selectedItem.name));
    };
    StylingItemSelectionComponent.prototype.onItemSelecting = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var selectedTitles = "Selecting item: ";
        for (var i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        var selectedItem = this.dataItems.getItem(args.index);
        console.log("Item selecting: " + (selectedItem && selectedItem.name));
    };
    StylingItemSelectionComponent.prototype.onItemDeselecting = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        var selectedTitles = "Deselecting item: ";
        for (var i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        var selectedItem = this.dataItems.getItem(args.index);
        console.log("Item deselecting: " + (selectedItem && selectedItem.name));
    };
    StylingItemSelectionComponent.prototype.onItemDeselected = function (args) {
        var listview = args.object;
        var selectedItems = listview.getSelectedItems();
        if (selectedItems.length > 0) {
            var selectedTitles = "Selected items: ";
            for (var i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
                if (i < selectedItems.length - 1) {
                    selectedTitles += ", ";
                }
            }
            this._selectedItems = selectedTitles;
        }
        else {
            this._selectedItems = "No Selected items.";
        }
        var deselectedItem = this.dataItems.getItem(args.index);
        console.log("Item deselected: " + (deselectedItem && deselectedItem.name));
    };
    StylingItemSelectionComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    StylingItemSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-selection",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-selection/styling-item-selection.component.html"),
            styles: [__webpack_require__("./app/examples/item-selection/styling-item-selection.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], StylingItemSelectionComponent);
    return StylingItemSelectionComponent;
}());



/***/ }),

/***/ "./app/examples/item-selection/styling-selection-multiple.component.css":
/***/ (function(module, exports) {

module.exports = "/* ios styles */\n.iosListItemStackLayout {\n    padding-left: 50;\n}\n\n.iosNameLabel {\n    font-size: 20\n}\n\n.iosDescriptionLabel {\n    font-size: 13;\n}\n\n/* Android styles */\n.androidListItemStackLayout {\n    padding-left: 16;\n}\n\n.androidNameLabel {\n    font-size: 20\n}\n\n.androidDescriptionLabel {\n    font-size: 13;\n}\n\n.red-transparent-selection-list {\n    item-selected-background-color: red;\n    background-color: transparent;\n    color: white;\n}"

/***/ }),

/***/ "./app/examples/item-selection/styling-selection-multiple.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout backgroundColor=\"green\" tkExampleTitle tkToggleNavButton>\n    <RadListView class=\"red-transparent-selection-list\" [items]=\"dataItems\" selectionBehavior=\"Press\" multipleSelection=\"true\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout ios:class=\"iosListItemStackLayout\" android:class=\"androidListItemStackLayout\">\n                <Label ios:class=\"iosNameLabel\" android:class=\"androidNameLabel\" [text]=\"item.name\"></Label>\n                <Label ios:class=\"iosDescriptionLabel\" android:class=\"androidDescriptionLabel\" class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/item-selection/styling-selection-multiple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylingSelectionMultipleComponent", function() { return StylingSelectionMultipleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var StylingSelectionMultipleComponent = /** @class */ (function () {
    function StylingSelectionMultipleComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(StylingSelectionMultipleComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    StylingSelectionMultipleComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getNameEmailDataItems());
    };
    StylingSelectionMultipleComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    StylingSelectionMultipleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-selection-multiple",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-selection/styling-selection-multiple.component.html"),
            styles: [__webpack_require__("./app/examples/item-selection/styling-selection-multiple.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], StylingSelectionMultipleComponent);
    return StylingSelectionMultipleComponent;
}());



/***/ }),

/***/ "./app/examples/item-separator/listview-item-separator.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/item-separator/listview-item-separator.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- >> listview-angular-item-separator -->\n<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n                <StackLayout height=\"2\" backgroundColor=\"Black\"></StackLayout>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>\n<!-- << listview-angular-item-separator -->"

/***/ }),

/***/ "./app/examples/item-separator/listview-item-separator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewItemSeparatorComponent", function() { return ListViewItemSeparatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");



var ListViewItemSeparatorComponent = /** @class */ (function () {
    function ListViewItemSeparatorComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewItemSeparatorComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewItemSeparatorComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(50));
    };
    ListViewItemSeparatorComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewItemSeparatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-item-separator",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/item-separator/listview-item-separator.component.html"),
            styles: [__webpack_require__("./app/examples/item-separator/listview-item-separator.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewItemSeparatorComponent);
    return ListViewItemSeparatorComponent;
}());



/***/ }),

/***/ "./app/examples/listview-examples.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewExamplesModule", function() { return ListViewExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _custom_angular_comp_custom_image_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/examples/custom-angular-comp/custom-image-template.component.ts");
/* harmony import */ var _custom_angular_comp_custom_swipe_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/examples/custom-angular-comp/custom-swipe-template.component.ts");
/* harmony import */ var _getting_started_listview_getting_started_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/examples/getting-started/listview-getting-started.component.ts");
/* harmony import */ var _getting_started_horizontal_listview_getting_started_horizontal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/examples/getting-started-horizontal/listview-getting-started-horizontal.component.ts");
/* harmony import */ var _header_footer_auto_size_listview_auto_size_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/examples/header-footer/auto-size/listview-auto-size.component.ts");
/* harmony import */ var _header_footer_big_footer_listview_big_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/examples/header-footer/big-footer/listview-big-footer.component.ts");
/* harmony import */ var _header_footer_big_header_listview_big_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/examples/header-footer/big-header/listview-big-header.component.ts");
/* harmony import */ var _header_footer_change_size_at_runtime_listview_change_size_at_runtime_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/examples/header-footer/change-size-at-runtime/listview-change-size-at-runtime.component.ts");
/* harmony import */ var _item_animations_listview_item_animations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/examples/item-animations/listview-item-animations.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-grid.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_grid_no_height_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-grid-no-height.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_linear_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-linear.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_runtime_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-runtime.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_staggered_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-staggered.component.ts");
/* harmony import */ var _item_loading_listview_item_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./app/examples/item-loading/listview-item-loading.component.ts");
/* harmony import */ var _item_reorder_listview_item_reorder_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./app/examples/item-reorder/listview-item-reorder.component.ts");
/* harmony import */ var _item_reorder_listview_item_reorder_handle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./app/examples/item-reorder/listview-item-reorder-handle.component.ts");
/* harmony import */ var _item_selection_listview_item_selection_multiple_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./app/examples/item-selection/listview-item-selection-multiple.component.ts");
/* harmony import */ var _item_selection_listview_item_selection_programmatic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./app/examples/item-selection/listview-item-selection-programmatic.component.ts");
/* harmony import */ var _item_selection_listview_item_selection_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./app/examples/item-selection/listview-item-selection.component.ts");
/* harmony import */ var _item_selection_styling_selection_multiple_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./app/examples/item-selection/styling-selection-multiple.component.ts");
/* harmony import */ var _item_selection_styling_item_selection_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./app/examples/item-selection/styling-item-selection.component.ts");
/* harmony import */ var _item_separator_listview_item_separator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./app/examples/item-separator/listview-item-separator.component.ts");
/* harmony import */ var _load_on_demand_dynamic_size_auto_listview_dynamic_size_auto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./app/examples/load-on-demand/dynamic-size-auto/listview-dynamic-size-auto.component.ts");
/* harmony import */ var _load_on_demand_dynamic_size_manual_listview_dynamic_size_manual_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./app/examples/load-on-demand/dynamic-size-manual/listview-dynamic-size-manual.component.ts");
/* harmony import */ var _load_on_demand_fixed_size_auto_listview_fixed_size_auto_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./app/examples/load-on-demand/fixed-size-auto/listview-fixed-size-auto.component.ts");
/* harmony import */ var _load_on_demand_fixed_size_auto_with_small_source_listview_fixed_size_auto_with_small_source_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./app/examples/load-on-demand/fixed-size-auto-with-small-source/listview-fixed-size-auto-with-small-source.component.ts");
/* harmony import */ var _load_on_demand_fixed_size_manual_listview_fixed_size_manual_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./app/examples/load-on-demand/fixed-size-manual/listview-fixed-size-manual.component.ts");
/* harmony import */ var _multiple_templates_listview_multiple_templates_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./app/examples/multiple-templates/listview-multiple-templates.component.ts");
/* harmony import */ var _observable_array_listview_observable_array_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./app/examples/observable-array/listview-observable-array.component.ts");
/* harmony import */ var _pull_to_refresh_getting_started_listview_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./app/examples/pull-to-refresh/getting-started/listview-pull-to-refresh.component.ts");
/* harmony import */ var _pull_to_refresh_customize_listview_pull_to_refresh_customize_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./app/examples/pull-to-refresh/customize/listview-pull-to-refresh-customize.component.ts");
/* harmony import */ var _scroll_events_listview_scroll_events_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./app/examples/scroll-events/listview-scroll-events.component.ts");
/* harmony import */ var _scroll_to_index_listview_scroll_to_index_horizontal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-horizontal.component.ts");
/* harmony import */ var _scroll_to_index_listview_scroll_to_index_vertical_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-vertical.component.ts");
/* harmony import */ var _scroll_to_index_listview_scroll_to_index_initial_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-initial.component.ts");
/* harmony import */ var _selection_states_listview_selection_states_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("./app/examples/selection-states/listview-selection-states.component.ts");
/* harmony import */ var _swipe_actions_listview_swipe_actions_multiple_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions-multiple.component.ts");
/* harmony import */ var _swipe_actions_listview_swipe_actions_thresholds_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions-thresholds.component.ts");
/* harmony import */ var _swipe_actions_listview_swipe_actions_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions.component.ts");
/* harmony import */ var _swipe_actions_listview_swipe_disable_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("./app/examples/swipe-actions/listview-swipe-disable.component.ts");
/* harmony import */ var _filtering_listview_data_operations_filtering_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("./app/examples/filtering/listview-data-operations-filtering.component.ts");
/* harmony import */ var _grouping_listview_data_operations_grouping_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("./app/examples/grouping/listview-data-operations-grouping.component.ts");
/* harmony import */ var _grouping_with_header_footer_with_header_footer_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("./app/examples/grouping-with-header-footer/with-header-footer.component.ts");
/* harmony import */ var _grouping_multiple_templates_listview_data_operations_grouping_templates_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("./app/examples/grouping-multiple-templates/listview-data-operations-grouping-templates.component.ts");
/* harmony import */ var _grouping_collapsible_listview_data_operations_grouping_collapsible_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("./app/examples/grouping-collapsible/listview-data-operations-grouping-collapsible.component.ts");
/* harmony import */ var _grouping_scroll_to_grouping_scroll_to_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("./app/examples/grouping-scroll-to/grouping-scroll-to.component.ts");
/* harmony import */ var _multiple_operations_listview_data_operations_multiple_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__("./app/examples/multiple-operations/listview-data-operations-multiple.component.ts");
/* harmony import */ var _multiple_operations_with_swipe_listview_multiple_operations_with_swipe_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__("./app/examples/multiple-operations-with-swipe/listview-multiple-operations-with-swipe.component.ts");
/* harmony import */ var _sorting_listview_data_operations_sorting_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__("./app/examples/sorting/listview-data-operations-sorting.component.ts");
/* harmony import */ var _with_big_data_listview_with_big_data_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__("./app/examples/with-big-data/listview-with-big-data.component.ts");
/* harmony import */ var _horizontal_with_variable_item_width_listview_horizontal_with_variable_item_width_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__("./app/examples/horizontal-with-variable-item-width/listview-horizontal-with-variable-item-width.component.ts");
/* harmony import */ var _group_swipe_load_pull_listview_group_swipe_load_pull_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__("./app/examples/group-swipe-load-pull/listview-group-swipe-load-pull.component.ts");
/* harmony import */ var _first_visible_index_first_visible_index_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__("./app/examples/first-visible-index/first-visible-index.component.ts");
/* harmony import */ var _custom_angular_comp_listview_comp_template_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__("./app/examples/custom-angular-comp/listview-comp-template.component.ts");
/* harmony import */ var _listview_examples_routing__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__("./app/examples/listview-examples.routing.ts");
/* harmony import */ var _navigation_directives_common_directives_module__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__("./app/navigation/directives/common-directives.module.ts");






























































var ListViewExamplesModule = /** @class */ (function () {
    function ListViewExamplesModule() {
    }
    ListViewExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _navigation_directives_common_directives_module__WEBPACK_IMPORTED_MODULE_61__["CommonDirectivesModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUIListViewModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NativeScriptFormsModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["NativeScriptRouterModule"].forChild(_listview_examples_routing__WEBPACK_IMPORTED_MODULE_60__["routes"])
            ],
            declarations: [
                _custom_angular_comp_custom_image_template_component__WEBPACK_IMPORTED_MODULE_5__["CustomImageTemplateComponent"],
                _custom_angular_comp_custom_swipe_template_component__WEBPACK_IMPORTED_MODULE_6__["CustomSwipeTemplateComponent"],
                _getting_started_listview_getting_started_component__WEBPACK_IMPORTED_MODULE_7__["ListViewGettingStartedComponent"],
                _getting_started_horizontal_listview_getting_started_horizontal_component__WEBPACK_IMPORTED_MODULE_8__["ListViewGettingStartedHorizontalComponent"],
                _header_footer_auto_size_listview_auto_size_component__WEBPACK_IMPORTED_MODULE_9__["ListViewHeaderFooterComponent"],
                _header_footer_big_footer_listview_big_footer_component__WEBPACK_IMPORTED_MODULE_10__["ListViewBigFooterComponent"],
                _header_footer_big_header_listview_big_header_component__WEBPACK_IMPORTED_MODULE_11__["ListViewBigHeaderComponent"],
                _header_footer_change_size_at_runtime_listview_change_size_at_runtime_component__WEBPACK_IMPORTED_MODULE_12__["ListviewChangeSizeAtRuntimeComponent"],
                _item_animations_listview_item_animations_component__WEBPACK_IMPORTED_MODULE_13__["ListViewItemAnimationsComponent"],
                _item_layouts_listview_item_layouts_grid_component__WEBPACK_IMPORTED_MODULE_14__["ListViewItemLayoutsGridComponent"],
                _item_layouts_listview_item_layouts_grid_no_height_component__WEBPACK_IMPORTED_MODULE_15__["ListViewItemLayoutsGridNoHeightComponent"],
                _item_layouts_listview_item_layouts_linear_component__WEBPACK_IMPORTED_MODULE_16__["ListViewItemLayoutsLinearComponent"],
                _item_layouts_listview_item_layouts_runtime_component__WEBPACK_IMPORTED_MODULE_17__["ListViewItemLayoutsRuntimeComponent"],
                _item_layouts_listview_item_layouts_staggered_component__WEBPACK_IMPORTED_MODULE_18__["ListViewItemLayoutsStaggeredComponent"],
                _item_loading_listview_item_loading_component__WEBPACK_IMPORTED_MODULE_19__["ListViewItemLoadingComponent"],
                _item_reorder_listview_item_reorder_component__WEBPACK_IMPORTED_MODULE_20__["ListViewItemReorderComponent"],
                _item_reorder_listview_item_reorder_handle_component__WEBPACK_IMPORTED_MODULE_21__["ListViewItemReorderHandleComponent"],
                _item_selection_listview_item_selection_multiple_component__WEBPACK_IMPORTED_MODULE_22__["ListViewItemSelectionMultipleComponent"],
                _item_selection_styling_selection_multiple_component__WEBPACK_IMPORTED_MODULE_25__["StylingSelectionMultipleComponent"],
                _item_selection_listview_item_selection_programmatic_component__WEBPACK_IMPORTED_MODULE_23__["ListViewItemSelectionProgrammaticComponent"],
                _item_selection_listview_item_selection_component__WEBPACK_IMPORTED_MODULE_24__["ListViewItemSelectionComponent"],
                _item_selection_styling_item_selection_component__WEBPACK_IMPORTED_MODULE_26__["StylingItemSelectionComponent"],
                _item_separator_listview_item_separator_component__WEBPACK_IMPORTED_MODULE_27__["ListViewItemSeparatorComponent"],
                _load_on_demand_dynamic_size_auto_listview_dynamic_size_auto_component__WEBPACK_IMPORTED_MODULE_28__["ListViewDynamicSizeAutoComponent"],
                _load_on_demand_dynamic_size_manual_listview_dynamic_size_manual_component__WEBPACK_IMPORTED_MODULE_29__["ListViewDynamicSizeManualComponent"],
                _load_on_demand_fixed_size_auto_listview_fixed_size_auto_component__WEBPACK_IMPORTED_MODULE_30__["ListViewFixedSizeAutoComponent"],
                _load_on_demand_fixed_size_auto_with_small_source_listview_fixed_size_auto_with_small_source_component__WEBPACK_IMPORTED_MODULE_31__["ListViewFixedSizeAutoWithSmallSourceComponent"],
                _load_on_demand_fixed_size_manual_listview_fixed_size_manual_component__WEBPACK_IMPORTED_MODULE_32__["ListViewFixedSizeManualComponent"],
                _multiple_templates_listview_multiple_templates_component__WEBPACK_IMPORTED_MODULE_33__["ListViewMultipleTemplatesComponent"],
                _observable_array_listview_observable_array_component__WEBPACK_IMPORTED_MODULE_34__["ListViewObservableArrayComponent"],
                _pull_to_refresh_getting_started_listview_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_35__["ListViewPullToRefreshComponent"],
                _pull_to_refresh_customize_listview_pull_to_refresh_customize_component__WEBPACK_IMPORTED_MODULE_36__["ListViewPullToRefreshCustomizeComponent"],
                _scroll_events_listview_scroll_events_component__WEBPACK_IMPORTED_MODULE_37__["ListViewScrollEventsComponent"],
                _scroll_to_index_listview_scroll_to_index_horizontal_component__WEBPACK_IMPORTED_MODULE_38__["ListViewScrollToIndexHorizontalComponent"],
                _scroll_to_index_listview_scroll_to_index_vertical_component__WEBPACK_IMPORTED_MODULE_39__["ListViewScrollToIndexVerticalComponent"],
                _selection_states_listview_selection_states_component__WEBPACK_IMPORTED_MODULE_41__["ListViewSelectionStatesComponent"],
                _swipe_actions_listview_swipe_actions_multiple_component__WEBPACK_IMPORTED_MODULE_42__["ListViewSwipeActionsMultipleComponent"],
                _swipe_actions_listview_swipe_actions_thresholds_component__WEBPACK_IMPORTED_MODULE_43__["ListViewSwipeActionsThresholdsComponent"],
                _swipe_actions_listview_swipe_actions_component__WEBPACK_IMPORTED_MODULE_44__["ListViewSwipeActionsComponent"],
                _swipe_actions_listview_swipe_disable_component__WEBPACK_IMPORTED_MODULE_45__["ListViewSwipeDisableComponent"],
                _scroll_to_index_listview_scroll_to_index_initial_component__WEBPACK_IMPORTED_MODULE_40__["ListViewScrollToIndexInitialComponent"],
                _filtering_listview_data_operations_filtering_component__WEBPACK_IMPORTED_MODULE_46__["ListViewDataOperationsFilteringComponent"],
                _grouping_listview_data_operations_grouping_component__WEBPACK_IMPORTED_MODULE_47__["ListViewDataOperationsGroupingComponent"],
                _grouping_with_header_footer_with_header_footer_component__WEBPACK_IMPORTED_MODULE_48__["ListViewDataOperationsGroupingHeaderFooterComponent"],
                _grouping_multiple_templates_listview_data_operations_grouping_templates_component__WEBPACK_IMPORTED_MODULE_49__["ListViewDataOperationsGroupingTemplatesComponent"],
                _grouping_collapsible_listview_data_operations_grouping_collapsible_component__WEBPACK_IMPORTED_MODULE_50__["ListviewDataOperationsGroupingCollapsibleComponent"],
                _grouping_scroll_to_grouping_scroll_to_component__WEBPACK_IMPORTED_MODULE_51__["ListViewDataOperationsGroupingScrollToComponent"],
                _multiple_operations_listview_data_operations_multiple_component__WEBPACK_IMPORTED_MODULE_52__["ListViewDataOperationsMultipleComponent"],
                _sorting_listview_data_operations_sorting_component__WEBPACK_IMPORTED_MODULE_54__["ListViewDataOperationsSortingComponent"],
                _with_big_data_listview_with_big_data_component__WEBPACK_IMPORTED_MODULE_55__["ListViewWithBigDataComponent"],
                _horizontal_with_variable_item_width_listview_horizontal_with_variable_item_width_component__WEBPACK_IMPORTED_MODULE_56__["ListviewHorizontalWithVariableItemWidthComponent"],
                _multiple_operations_with_swipe_listview_multiple_operations_with_swipe_component__WEBPACK_IMPORTED_MODULE_53__["ListViewDataOperationsMultipleWithSwipeComponent"],
                _group_swipe_load_pull_listview_group_swipe_load_pull_component__WEBPACK_IMPORTED_MODULE_57__["ListViewGroupSwipeLoadPullComponent"],
                _first_visible_index_first_visible_index_component__WEBPACK_IMPORTED_MODULE_58__["ListViewFirstVisibleIndexComponent"],
                _custom_angular_comp_listview_comp_template_component__WEBPACK_IMPORTED_MODULE_59__["ListviewCompTemplateComponent"]
            ]
        })
    ], ListViewExamplesModule);
    return ListViewExamplesModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/examples/listview-examples.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _getting_started_listview_getting_started_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/examples/getting-started/listview-getting-started.component.ts");
/* harmony import */ var _getting_started_horizontal_listview_getting_started_horizontal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/examples/getting-started-horizontal/listview-getting-started-horizontal.component.ts");
/* harmony import */ var _header_footer_auto_size_listview_auto_size_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/header-footer/auto-size/listview-auto-size.component.ts");
/* harmony import */ var _header_footer_big_footer_listview_big_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/header-footer/big-footer/listview-big-footer.component.ts");
/* harmony import */ var _header_footer_change_size_at_runtime_listview_change_size_at_runtime_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/examples/header-footer/change-size-at-runtime/listview-change-size-at-runtime.component.ts");
/* harmony import */ var _header_footer_big_header_listview_big_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/examples/header-footer/big-header/listview-big-header.component.ts");
/* harmony import */ var _item_animations_listview_item_animations_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/examples/item-animations/listview-item-animations.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-grid.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_grid_no_height_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-grid-no-height.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_linear_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-linear.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_runtime_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-runtime.component.ts");
/* harmony import */ var _item_layouts_listview_item_layouts_staggered_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/examples/item-layouts/listview-item-layouts-staggered.component.ts");
/* harmony import */ var _item_loading_listview_item_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/examples/item-loading/listview-item-loading.component.ts");
/* harmony import */ var _item_reorder_listview_item_reorder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./app/examples/item-reorder/listview-item-reorder.component.ts");
/* harmony import */ var _item_reorder_listview_item_reorder_handle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./app/examples/item-reorder/listview-item-reorder-handle.component.ts");
/* harmony import */ var _item_selection_listview_item_selection_multiple_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./app/examples/item-selection/listview-item-selection-multiple.component.ts");
/* harmony import */ var _item_selection_listview_item_selection_programmatic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./app/examples/item-selection/listview-item-selection-programmatic.component.ts");
/* harmony import */ var _item_selection_listview_item_selection_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./app/examples/item-selection/listview-item-selection.component.ts");
/* harmony import */ var _item_selection_styling_selection_multiple_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./app/examples/item-selection/styling-selection-multiple.component.ts");
/* harmony import */ var _item_selection_styling_item_selection_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./app/examples/item-selection/styling-item-selection.component.ts");
/* harmony import */ var _item_separator_listview_item_separator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./app/examples/item-separator/listview-item-separator.component.ts");
/* harmony import */ var _load_on_demand_dynamic_size_auto_listview_dynamic_size_auto_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./app/examples/load-on-demand/dynamic-size-auto/listview-dynamic-size-auto.component.ts");
/* harmony import */ var _load_on_demand_dynamic_size_manual_listview_dynamic_size_manual_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./app/examples/load-on-demand/dynamic-size-manual/listview-dynamic-size-manual.component.ts");
/* harmony import */ var _load_on_demand_fixed_size_auto_listview_fixed_size_auto_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./app/examples/load-on-demand/fixed-size-auto/listview-fixed-size-auto.component.ts");
/* harmony import */ var _load_on_demand_fixed_size_auto_with_small_source_listview_fixed_size_auto_with_small_source_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./app/examples/load-on-demand/fixed-size-auto-with-small-source/listview-fixed-size-auto-with-small-source.component.ts");
/* harmony import */ var _load_on_demand_fixed_size_manual_listview_fixed_size_manual_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./app/examples/load-on-demand/fixed-size-manual/listview-fixed-size-manual.component.ts");
/* harmony import */ var _multiple_templates_listview_multiple_templates_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./app/examples/multiple-templates/listview-multiple-templates.component.ts");
/* harmony import */ var _observable_array_listview_observable_array_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./app/examples/observable-array/listview-observable-array.component.ts");
/* harmony import */ var _pull_to_refresh_getting_started_listview_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./app/examples/pull-to-refresh/getting-started/listview-pull-to-refresh.component.ts");
/* harmony import */ var _pull_to_refresh_customize_listview_pull_to_refresh_customize_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./app/examples/pull-to-refresh/customize/listview-pull-to-refresh-customize.component.ts");
/* harmony import */ var _scroll_events_listview_scroll_events_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./app/examples/scroll-events/listview-scroll-events.component.ts");
/* harmony import */ var _scroll_to_index_listview_scroll_to_index_horizontal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-horizontal.component.ts");
/* harmony import */ var _scroll_to_index_listview_scroll_to_index_vertical_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-vertical.component.ts");
/* harmony import */ var _scroll_to_index_listview_scroll_to_index_initial_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-initial.component.ts");
/* harmony import */ var _selection_states_listview_selection_states_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./app/examples/selection-states/listview-selection-states.component.ts");
/* harmony import */ var _swipe_actions_listview_swipe_actions_multiple_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions-multiple.component.ts");
/* harmony import */ var _swipe_actions_listview_swipe_actions_thresholds_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions-thresholds.component.ts");
/* harmony import */ var _swipe_actions_listview_swipe_actions_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions.component.ts");
/* harmony import */ var _swipe_actions_listview_swipe_disable_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./app/examples/swipe-actions/listview-swipe-disable.component.ts");
/* harmony import */ var _filtering_listview_data_operations_filtering_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./app/examples/filtering/listview-data-operations-filtering.component.ts");
/* harmony import */ var _grouping_listview_data_operations_grouping_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("./app/examples/grouping/listview-data-operations-grouping.component.ts");
/* harmony import */ var _grouping_with_header_footer_with_header_footer_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("./app/examples/grouping-with-header-footer/with-header-footer.component.ts");
/* harmony import */ var _grouping_multiple_templates_listview_data_operations_grouping_templates_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("./app/examples/grouping-multiple-templates/listview-data-operations-grouping-templates.component.ts");
/* harmony import */ var _grouping_collapsible_listview_data_operations_grouping_collapsible_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("./app/examples/grouping-collapsible/listview-data-operations-grouping-collapsible.component.ts");
/* harmony import */ var _grouping_scroll_to_grouping_scroll_to_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("./app/examples/grouping-scroll-to/grouping-scroll-to.component.ts");
/* harmony import */ var _multiple_operations_listview_data_operations_multiple_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("./app/examples/multiple-operations/listview-data-operations-multiple.component.ts");
/* harmony import */ var _multiple_operations_with_swipe_listview_multiple_operations_with_swipe_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("./app/examples/multiple-operations-with-swipe/listview-multiple-operations-with-swipe.component.ts");
/* harmony import */ var _sorting_listview_data_operations_sorting_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("./app/examples/sorting/listview-data-operations-sorting.component.ts");
/* harmony import */ var _with_big_data_listview_with_big_data_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("./app/examples/with-big-data/listview-with-big-data.component.ts");
/* harmony import */ var _horizontal_with_variable_item_width_listview_horizontal_with_variable_item_width_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("./app/examples/horizontal-with-variable-item-width/listview-horizontal-with-variable-item-width.component.ts");
/* harmony import */ var _group_swipe_load_pull_listview_group_swipe_load_pull_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("./app/examples/group-swipe-load-pull/listview-group-swipe-load-pull.component.ts");
/* harmony import */ var _first_visible_index_first_visible_index_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__("./app/examples/first-visible-index/first-visible-index.component.ts");
/* harmony import */ var _custom_angular_comp_listview_comp_template_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__("./app/examples/custom-angular-comp/listview-comp-template.component.ts");





















































var routes = [
    { path: 'ListViewGettingStartedComponent', component: _getting_started_listview_getting_started_component__WEBPACK_IMPORTED_MODULE_0__["ListViewGettingStartedComponent"] },
    { path: 'ListViewGettingStartedHorizontalComponent', component: _getting_started_horizontal_listview_getting_started_horizontal_component__WEBPACK_IMPORTED_MODULE_1__["ListViewGettingStartedHorizontalComponent"] },
    { path: 'ListViewHeaderFooterComponent', component: _header_footer_auto_size_listview_auto_size_component__WEBPACK_IMPORTED_MODULE_2__["ListViewHeaderFooterComponent"] },
    { path: 'ListViewBigFooterComponent', component: _header_footer_big_footer_listview_big_footer_component__WEBPACK_IMPORTED_MODULE_3__["ListViewBigFooterComponent"] },
    { path: 'ListviewChangeSizeAtRuntimeComponent', component: _header_footer_change_size_at_runtime_listview_change_size_at_runtime_component__WEBPACK_IMPORTED_MODULE_4__["ListviewChangeSizeAtRuntimeComponent"] },
    { path: 'ListViewBigHeaderComponent', component: _header_footer_big_header_listview_big_header_component__WEBPACK_IMPORTED_MODULE_5__["ListViewBigHeaderComponent"] },
    { path: 'ListViewItemAnimationsComponent', component: _item_animations_listview_item_animations_component__WEBPACK_IMPORTED_MODULE_6__["ListViewItemAnimationsComponent"] },
    { path: 'ListViewItemLayoutsGridComponent', component: _item_layouts_listview_item_layouts_grid_component__WEBPACK_IMPORTED_MODULE_7__["ListViewItemLayoutsGridComponent"] },
    { path: 'ListViewItemLayoutsGridNoHeightComponent', component: _item_layouts_listview_item_layouts_grid_no_height_component__WEBPACK_IMPORTED_MODULE_8__["ListViewItemLayoutsGridNoHeightComponent"] },
    { path: 'ListViewItemLayoutsLinearComponent', component: _item_layouts_listview_item_layouts_linear_component__WEBPACK_IMPORTED_MODULE_9__["ListViewItemLayoutsLinearComponent"] },
    { path: 'ListViewItemLayoutsRuntimeComponent', component: _item_layouts_listview_item_layouts_runtime_component__WEBPACK_IMPORTED_MODULE_10__["ListViewItemLayoutsRuntimeComponent"] },
    { path: 'ListViewItemLayoutsStaggeredComponent', component: _item_layouts_listview_item_layouts_staggered_component__WEBPACK_IMPORTED_MODULE_11__["ListViewItemLayoutsStaggeredComponent"] },
    { path: 'ListViewItemLoadingComponent', component: _item_loading_listview_item_loading_component__WEBPACK_IMPORTED_MODULE_12__["ListViewItemLoadingComponent"] },
    { path: 'ListViewItemReorderComponent', component: _item_reorder_listview_item_reorder_component__WEBPACK_IMPORTED_MODULE_13__["ListViewItemReorderComponent"] },
    { path: 'ListViewItemReorderHandleComponent', component: _item_reorder_listview_item_reorder_handle_component__WEBPACK_IMPORTED_MODULE_14__["ListViewItemReorderHandleComponent"] },
    { path: 'ListViewItemSelectionMultipleComponent', component: _item_selection_listview_item_selection_multiple_component__WEBPACK_IMPORTED_MODULE_15__["ListViewItemSelectionMultipleComponent"] },
    { path: 'StylingSelectionMultipleComponent', component: _item_selection_styling_selection_multiple_component__WEBPACK_IMPORTED_MODULE_18__["StylingSelectionMultipleComponent"] },
    { path: 'ListViewItemSelectionProgrammaticComponent', component: _item_selection_listview_item_selection_programmatic_component__WEBPACK_IMPORTED_MODULE_16__["ListViewItemSelectionProgrammaticComponent"] },
    { path: 'ListViewItemSelectionComponent', component: _item_selection_listview_item_selection_component__WEBPACK_IMPORTED_MODULE_17__["ListViewItemSelectionComponent"] },
    { path: 'StylingItemSelectionComponent', component: _item_selection_styling_item_selection_component__WEBPACK_IMPORTED_MODULE_19__["StylingItemSelectionComponent"] },
    { path: 'ListViewItemSeparatorComponent', component: _item_separator_listview_item_separator_component__WEBPACK_IMPORTED_MODULE_20__["ListViewItemSeparatorComponent"] },
    { path: 'ListViewDynamicSizeAutoComponent', component: _load_on_demand_dynamic_size_auto_listview_dynamic_size_auto_component__WEBPACK_IMPORTED_MODULE_21__["ListViewDynamicSizeAutoComponent"] },
    { path: 'ListViewDynamicSizeManualComponent', component: _load_on_demand_dynamic_size_manual_listview_dynamic_size_manual_component__WEBPACK_IMPORTED_MODULE_22__["ListViewDynamicSizeManualComponent"] },
    { path: 'ListViewFixedSizeAutoComponent', component: _load_on_demand_fixed_size_auto_listview_fixed_size_auto_component__WEBPACK_IMPORTED_MODULE_23__["ListViewFixedSizeAutoComponent"] },
    { path: 'ListViewFixedSizeAutoWithSmallSourceComponent', component: _load_on_demand_fixed_size_auto_with_small_source_listview_fixed_size_auto_with_small_source_component__WEBPACK_IMPORTED_MODULE_24__["ListViewFixedSizeAutoWithSmallSourceComponent"] },
    { path: 'ListViewFixedSizeManualComponent', component: _load_on_demand_fixed_size_manual_listview_fixed_size_manual_component__WEBPACK_IMPORTED_MODULE_25__["ListViewFixedSizeManualComponent"] },
    { path: 'ListViewMultipleTemplatesComponent', component: _multiple_templates_listview_multiple_templates_component__WEBPACK_IMPORTED_MODULE_26__["ListViewMultipleTemplatesComponent"] },
    { path: 'ListViewObservableArrayComponent', component: _observable_array_listview_observable_array_component__WEBPACK_IMPORTED_MODULE_27__["ListViewObservableArrayComponent"] },
    { path: 'ListViewPullToRefreshComponent', component: _pull_to_refresh_getting_started_listview_pull_to_refresh_component__WEBPACK_IMPORTED_MODULE_28__["ListViewPullToRefreshComponent"] },
    { path: 'ListViewPullToRefreshCustomizeComponent', component: _pull_to_refresh_customize_listview_pull_to_refresh_customize_component__WEBPACK_IMPORTED_MODULE_29__["ListViewPullToRefreshCustomizeComponent"] },
    { path: 'ListViewScrollEventsComponent', component: _scroll_events_listview_scroll_events_component__WEBPACK_IMPORTED_MODULE_30__["ListViewScrollEventsComponent"] },
    { path: 'ListViewScrollToIndexHorizontalComponent', component: _scroll_to_index_listview_scroll_to_index_horizontal_component__WEBPACK_IMPORTED_MODULE_31__["ListViewScrollToIndexHorizontalComponent"] },
    { path: 'ListViewScrollToIndexVerticalComponent', component: _scroll_to_index_listview_scroll_to_index_vertical_component__WEBPACK_IMPORTED_MODULE_32__["ListViewScrollToIndexVerticalComponent"] },
    { path: 'ListViewSelectionStatesComponent', component: _selection_states_listview_selection_states_component__WEBPACK_IMPORTED_MODULE_34__["ListViewSelectionStatesComponent"] },
    { path: 'ListViewSwipeActionsMultipleComponent', component: _swipe_actions_listview_swipe_actions_multiple_component__WEBPACK_IMPORTED_MODULE_35__["ListViewSwipeActionsMultipleComponent"] },
    { path: 'ListViewSwipeActionsThresholdsComponent', component: _swipe_actions_listview_swipe_actions_thresholds_component__WEBPACK_IMPORTED_MODULE_36__["ListViewSwipeActionsThresholdsComponent"] },
    { path: 'ListViewSwipeActionsComponent', component: _swipe_actions_listview_swipe_actions_component__WEBPACK_IMPORTED_MODULE_37__["ListViewSwipeActionsComponent"] },
    { path: 'ListViewSwipeDisableComponent', component: _swipe_actions_listview_swipe_disable_component__WEBPACK_IMPORTED_MODULE_38__["ListViewSwipeDisableComponent"] },
    { path: 'ListViewScrollToIndexInitialComponent', component: _scroll_to_index_listview_scroll_to_index_initial_component__WEBPACK_IMPORTED_MODULE_33__["ListViewScrollToIndexInitialComponent"] },
    { path: 'ListViewDataOperationsFilteringComponent', component: _filtering_listview_data_operations_filtering_component__WEBPACK_IMPORTED_MODULE_39__["ListViewDataOperationsFilteringComponent"] },
    { path: 'ListViewDataOperationsGroupingComponent', component: _grouping_listview_data_operations_grouping_component__WEBPACK_IMPORTED_MODULE_40__["ListViewDataOperationsGroupingComponent"] },
    { path: 'ListViewDataOperationsGroupingHeaderFooterComponent', component: _grouping_with_header_footer_with_header_footer_component__WEBPACK_IMPORTED_MODULE_41__["ListViewDataOperationsGroupingHeaderFooterComponent"] },
    { path: 'ListViewDataOperationsGroupingTemplatesComponent', component: _grouping_multiple_templates_listview_data_operations_grouping_templates_component__WEBPACK_IMPORTED_MODULE_42__["ListViewDataOperationsGroupingTemplatesComponent"] },
    { path: 'ListviewDataOperationsGroupingCollapsibleComponent', component: _grouping_collapsible_listview_data_operations_grouping_collapsible_component__WEBPACK_IMPORTED_MODULE_43__["ListviewDataOperationsGroupingCollapsibleComponent"] },
    { path: 'ListViewDataOperationsGroupingScrollToComponent', component: _grouping_scroll_to_grouping_scroll_to_component__WEBPACK_IMPORTED_MODULE_44__["ListViewDataOperationsGroupingScrollToComponent"] },
    { path: 'ListViewDataOperationsMultipleComponent', component: _multiple_operations_listview_data_operations_multiple_component__WEBPACK_IMPORTED_MODULE_45__["ListViewDataOperationsMultipleComponent"] },
    { path: 'ListViewDataOperationsMultipleWithSwipeComponent', component: _multiple_operations_with_swipe_listview_multiple_operations_with_swipe_component__WEBPACK_IMPORTED_MODULE_46__["ListViewDataOperationsMultipleWithSwipeComponent"] },
    { path: 'ListViewDataOperationsSortingComponent', component: _sorting_listview_data_operations_sorting_component__WEBPACK_IMPORTED_MODULE_47__["ListViewDataOperationsSortingComponent"] },
    { path: 'ListViewWithBigDataComponent', component: _with_big_data_listview_with_big_data_component__WEBPACK_IMPORTED_MODULE_48__["ListViewWithBigDataComponent"] },
    { path: 'ListviewHorizontalWithVariableItemWidthComponent', component: _horizontal_with_variable_item_width_listview_horizontal_with_variable_item_width_component__WEBPACK_IMPORTED_MODULE_49__["ListviewHorizontalWithVariableItemWidthComponent"] },
    { path: 'ListViewGroupSwipeLoadPullComponent', component: _group_swipe_load_pull_listview_group_swipe_load_pull_component__WEBPACK_IMPORTED_MODULE_50__["ListViewGroupSwipeLoadPullComponent"] },
    { path: 'ListViewFirstVisibleIndexComponent', component: _first_visible_index_first_visible_index_component__WEBPACK_IMPORTED_MODULE_51__["ListViewFirstVisibleIndexComponent"] },
    { path: 'ListviewCompTemplateComponent', component: _custom_angular_comp_listview_comp_template_component__WEBPACK_IMPORTED_MODULE_52__["ListviewCompTemplateComponent"] }
];


/***/ }),

/***/ "./app/examples/load-on-demand/dynamic-size-auto/listview-dynamic-size-auto.component.css":
/***/ (function(module, exports) {

module.exports = ".itemTemplateStackLayout {\n    padding: 5 10 5 10;\n    background-color: #7fff7f;\n}\n\n.innerOtemTemplateStackLayout {\n    padding: 10;\n    background-color: #65a565;\n}\n\n.labelsStackLayout {\n    margin-left: 15;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n    color: white;\n}\n\n.loadOnDemandItemGridLayout {\n    background-color: #7fff7f;\n    color: black;\n}"

/***/ }),

/***/ "./app/examples/load-on-demand/dynamic-size-auto/listview-dynamic-size-auto.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\" loadOnDemandMode=\"Auto\" (loadMoreDataRequested)=\"onLoadMoreItemsRequested($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"itemTemplateStackLayout\" orientation=\"vertical\">\n                <StackLayout class=\"innerOtemTemplateStackLayout\" orientation=\"horizontal\">\n                    <NSImg height=\"100\" width=\"100\" [src]=\"item.image\"></NSImg>\n\n                    <StackLayout class=\"labelsStackLayout\" orientation=\"vertical\">\n                        <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                        <Label class=\"labelTitle\" [text]=\"item.title\" textWrap=\"true\"></Label>\n                        <Label class=\"labelText\" text=\"{{item.text}} + {{item.text}} + {{item.text}}\" textWrap=\"true\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/load-on-demand/dynamic-size-auto/listview-dynamic-size-auto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDynamicSizeAutoComponent", function() { return ListViewDynamicSizeAutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__);






var posts = __webpack_require__("./app/examples/posts.json");
var ListViewDynamicSizeAutoComponent = /** @class */ (function () {
    function ListViewDynamicSizeAutoComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    ListViewDynamicSizeAutoComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewLinearLayout"]();
        this.layout.scrollDirection = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewScrollDirection"].Vertical;
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this.addMoreItemsFromSource(6);
    };
    Object.defineProperty(ListViewDynamicSizeAutoComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDynamicSizeAutoComponent.prototype.addMoreItemsFromSource = function (chunkSize) {
        var newItems = this._sourceDataItems.splice(0, chunkSize);
        this.dataItems.push(newItems);
    };
    ListViewDynamicSizeAutoComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var that = new WeakRef(this);
        var listView = args.object;
        if (this._sourceDataItems.length > 0) {
            Object(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__["setTimeout"])(function () {
                that.get().addMoreItemsFromSource(2);
                listView.notifyLoadOnDemandFinished();
            }, 1500);
        }
        else {
            args.returnValue = false;
            listView.notifyLoadOnDemandFinished(true);
        }
    };
    ListViewDynamicSizeAutoComponent.prototype.initDataItems = function () {
        this._sourceDataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        for (var i = 0; i < posts.names.length; i++) {
            if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["android"]) {
                this._sourceDataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._sourceDataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    };
    ListViewDynamicSizeAutoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ListViewDynamicSizeAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-dynamic-size-auto",
            template: __webpack_require__("./app/examples/load-on-demand/dynamic-size-auto/listview-dynamic-size-auto.component.html"),
            styles: [__webpack_require__("./app/examples/load-on-demand/dynamic-size-auto/listview-dynamic-size-auto.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListViewDynamicSizeAutoComponent);
    return ListViewDynamicSizeAutoComponent;
}());



/***/ }),

/***/ "./app/examples/load-on-demand/dynamic-size-manual/listview-dynamic-size-manual.component.css":
/***/ (function(module, exports) {

module.exports = ".itemTemplateStackLayout {\n    padding: 5 10 5 10;\n    background-color: #7fff7f;\n}\n\n.innerOtemTemplateStackLayout {\n    padding: 10;\n    background-color: #65a565;\n}\n\n.labelsStackLayout {\n    margin-left: 15;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n    color: white;\n}\n\n.loadOnDemandItemGridLayout {\n    background-color: #7fff7f;\n    color: black;\n}"

/***/ }),

/***/ "./app/examples/load-on-demand/dynamic-size-manual/listview-dynamic-size-manual.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\" loadOnDemandMode=\"Manual\" (loadMoreDataRequested)=\"onLoadMoreItemsRequested($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"itemTemplateStackLayout\" orientation=\"vertical\">\n                <StackLayout class=\"innerOtemTemplateStackLayout\" orientation=\"horizontal\">\n                    <NSImg height=\"100\" width=\"100\" [src]=\"item.image\"></NSImg>\n\n                    <StackLayout class=\"labelsStackLayout\" orientation=\"vertical\">\n                        <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                        <Label class=\"labelTitle\" [text]=\"item.title\" textWrap=\"true\"></Label>\n                        <Label class=\"labelText\" text=\"{{item.text}} + {{item.text}} + {{item.text}}\" textWrap=\"true\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n\n        <div *tkIfIOS>\n            <GridLayout *tkListLoadOnDemandTemplate class=\"loadOnDemandItemGridLayout\">\n                <Label text=\"Load More\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></Label>\n            </GridLayout>\n        </div>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/load-on-demand/dynamic-size-manual/listview-dynamic-size-manual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDynamicSizeManualComponent", function() { return ListViewDynamicSizeManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__);






var posts = __webpack_require__("./app/examples/posts.json");
var ListViewDynamicSizeManualComponent = /** @class */ (function () {
    function ListViewDynamicSizeManualComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    ListViewDynamicSizeManualComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewLinearLayout"]();
        this.layout.scrollDirection = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewScrollDirection"].Vertical;
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this.addMoreItemsFromSource(6);
    };
    Object.defineProperty(ListViewDynamicSizeManualComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDynamicSizeManualComponent.prototype.addMoreItemsFromSource = function (chunkSize) {
        var newItems = this._sourceDataItems.splice(0, chunkSize);
        this.dataItems.push(newItems);
    };
    ListViewDynamicSizeManualComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var that = new WeakRef(this);
        var listView = args.object;
        if (this._sourceDataItems.length > 0) {
            Object(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__["setTimeout"])(function () {
                that.get().addMoreItemsFromSource(2);
                listView.notifyLoadOnDemandFinished();
            }, 1500);
            args.returnValue = true;
        }
        else {
            args.returnValue = false;
            listView.notifyLoadOnDemandFinished(true);
        }
    };
    ListViewDynamicSizeManualComponent.prototype.initDataItems = function () {
        this._sourceDataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        for (var i = 0; i < posts.names.length; i++) {
            if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["android"]) {
                this._sourceDataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._sourceDataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    };
    ListViewDynamicSizeManualComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ListViewDynamicSizeManualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-dynamic-size-manual",
            template: __webpack_require__("./app/examples/load-on-demand/dynamic-size-manual/listview-dynamic-size-manual.component.html"),
            styles: [__webpack_require__("./app/examples/load-on-demand/dynamic-size-manual/listview-dynamic-size-manual.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListViewDynamicSizeManualComponent);
    return ListViewDynamicSizeManualComponent;
}());



/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-auto-with-small-source/listview-fixed-size-auto-with-small-source.component.css":
/***/ (function(module, exports) {

module.exports = ".itemTemplateStackLayout {\n    padding: 5 10 5 10;\n    background-color: #7fff7f;\n}\n\n.innerOtemTemplateStackLayout {\n    padding: 10;\n    background-color: #65a565;\n}\n\n.labelsStackLayout {\n    margin-left: 15;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n    color: white;\n}\n\n.loadOnDemandItemGridLayout {\n    background-color: #7fff7f;\n    color: black;\n}\n\n.action-button {\n    margin-left: 15;\n}"

/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-auto-with-small-source/listview-fixed-size-auto-with-small-source.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, *\">\n    <StackLayout orientation=\"horizontal\">\n            <Button text=\"Auto\" (tap)=\"onChangeAuto()\" class=\"action-button\"></Button>\n            <Button text=\"Manual\" (tap)=\"onChangeManual()\" class=\"action-button\"></Button>\n            <Button text=\"None\" (tap)=\"onChangeNone()\" class=\"action-button\"></Button>\n    </StackLayout>\n    \n    <RadListView #myListView \n                row=\"1\" \n                [items]=\"dataItems\" \n                loadOnDemandMode=\"Manual\" \n                (loadMoreDataRequested)=\"onLoadMoreDataRequested($event)\" \n                pullToRefresh=\"true\" \n                (pullToRefreshInitiated)=\"onPullToRefreshInitiated($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"itemTemplateStackLayout\" orientation=\"vertical\">\n                <StackLayout class=\"innerOtemTemplateStackLayout\" orientation=\"horizontal\">\n                    <NSImg height=\"100\" width=\"100\" [src]=\"item.image\"></NSImg>\n                    <StackLayout class=\"labelsStackLayout\" orientation=\"vertical\">\n                        <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                        <Label class=\"labelTitle\" [text]=\"item.title\" textWrap=\"true\"></Label>\n                        <Label class=\"labelText\" [text]=\"item.text\" textWrap=\"true\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n        <ListViewLinearLayout *tkIfIOS tkListViewLayout itemHeight=\"120\" itemInsertAnimation=\"Fade\" itemDeleteAnimation=\"Fade\"></ListViewLinearLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-auto-with-small-source/listview-fixed-size-auto-with-small-source.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewFixedSizeAutoWithSmallSourceComponent", function() { return ListViewFixedSizeAutoWithSmallSourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6__);







var serverPeopleCollection = __webpack_require__("./app/examples/people.json");
var ListViewFixedSizeAutoWithSmallSourceComponent = /** @class */ (function () {
    function ListViewFixedSizeAutoWithSmallSourceComponent() {
        this._allItems = serverPeopleCollection.people.slice();
    }
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewLinearLayout"]();
        this.layout.scrollDirection = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewScrollDirection"].Vertical;
        this._sourceDataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this.initSourceDataItems(1);
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this.addMoreItemsFromSource(1);
    };
    Object.defineProperty(ListViewFixedSizeAutoWithSmallSourceComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.onLoadMoreDataRequested = function (args) {
        var that = new WeakRef(this);
        var listView = args.object;
        if (!this._itemsLoading) {
            if (this._sourceDataItems.length !== 0) {
                console.log("Load More Data Requested WILL LOAD");
                // Set flag to make sure that items are being loaded in the correct order.
                // This is necessary due to the asyc nature of getting and adding new items
                // to the 'items' property of the RadListView that may be caused by remote server API lag.
                this._itemsLoading = true;
                Object(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__["setTimeout"])(function () {
                    var thatInstance = that.get();
                    thatInstance.addMoreItemsFromSource(1);
                    // Reset the flag to allow next calls of 'loadMoreDataRequested' to load more items
                    thatInstance._itemsLoading = false;
                    listView.notifyLoadOnDemandFinished();
                }, 1500);
            }
            else {
                console.log("Load More Data Requested CANNOT LOAD");
                args.returnValue = false;
                listView.notifyLoadOnDemandFinished(true);
            }
        }
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.onPullToRefreshInitiated = function (args) {
        console.log("Pull To Refresh Initiated");
        var listView = args.object;
        var that = new WeakRef(this);
        if (this._allItems.length !== 0) {
            // Add 1 more item to the '_sourceDataItems',
            // Simulating a scenario where the 'backend' has been updated with 1 more item that could be loaded by 'load on demand'
            this.addItemsToSourceDataItems(1);
            Object(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__["setTimeout"])(function () {
                var thisInstance = that.get();
                var numberOfItemsToAdd = 1;
                for (var i = 0; i < numberOfItemsToAdd; i++) {
                    if (thisInstance._allItems.length !== 0) {
                        thisInstance._dataItems.splice(0, 0, thisInstance.getNextItemFromServer());
                    }
                }
                listView.notifyPullToRefreshFinished(thisInstance.isLoadOnDemandModeNeeded());
            }, 1000);
        }
        else {
            args.returnValue = false;
            listView.notifyPullToRefreshFinished(this.isLoadOnDemandModeNeeded());
        }
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.isLoadOnDemandModeNeeded = function () {
        if (this._allItems.length !== 0) {
            return true;
        }
        return false;
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.initSourceDataItems = function (size) {
        this.addItemsToSourceDataItems(size);
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.addItemsToSourceDataItems = function (size) {
        for (var i = 0; i < size; i++) {
            this._sourceDataItems.push(this.getNextItemFromServer());
        }
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.addMoreItemsFromSource = function (chunkSize) {
        var newItems = this._sourceDataItems.splice(0, chunkSize);
        this.dataItems.push(newItems);
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.getNextItemFromServer = function () {
        var item = this._allItems.splice(0, 1)[0];
        var imagePath;
        if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["android"]) {
            imagePath = item.image.toLowerCase();
        }
        else {
            imagePath = item.image;
        }
        return new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](this._sourceDataItems.length, item.name, "This is item description", item.title, item.text, imagePath);
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.onChangeAuto = function () {
        this.myListViewComponent.listView.loadOnDemandMode = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewLoadOnDemandMode"].Auto;
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.onChangeNone = function () {
        this.myListViewComponent.listView.loadOnDemandMode = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewLoadOnDemandMode"].None;
    };
    ListViewFixedSizeAutoWithSmallSourceComponent.prototype.onChangeManual = function () {
        this.myListViewComponent.listView.loadOnDemandMode = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewLoadOnDemandMode"].Manual;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6__["RadListViewComponent"], static: true }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6__["RadListViewComponent"])
    ], ListViewFixedSizeAutoWithSmallSourceComponent.prototype, "myListViewComponent", void 0);
    ListViewFixedSizeAutoWithSmallSourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-fixed-size-auto-with-small-source",
            template: __webpack_require__("./app/examples/load-on-demand/fixed-size-auto-with-small-source/listview-fixed-size-auto-with-small-source.component.html"),
            styles: [__webpack_require__("./app/examples/load-on-demand/fixed-size-auto-with-small-source/listview-fixed-size-auto-with-small-source.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListViewFixedSizeAutoWithSmallSourceComponent);
    return ListViewFixedSizeAutoWithSmallSourceComponent;
}());



/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-auto/listview-fixed-size-auto.component.css":
/***/ (function(module, exports) {

module.exports = ".itemTemplateStackLayout {\n    padding: 5 10 5 10;\n    background-color: #7fff7f;\n}\n\n.innerOtemTemplateStackLayout {\n    padding: 10;\n    background-color: #65a565;\n}\n\n.labelsStackLayout {\n    margin-left: 15;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n    color: white;\n}\n\n.loadOnDemandItemGridLayout {\n    background-color: #7fff7f;\n    color: black;\n}"

/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-auto/listview-fixed-size-auto.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\" loadOnDemandMode=\"Auto\" (loadMoreDataRequested)=\"onLoadMoreItemsRequested($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"itemTemplateStackLayout\" orientation=\"vertical\">\n                <StackLayout class=\"innerOtemTemplateStackLayout\" orientation=\"horizontal\">\n                    <NSImg height=\"100\" width=\"100\" [src]=\"item.image\"></NSImg>\n\n                    <StackLayout class=\"labelsStackLayout\" orientation=\"vertical\">\n                        <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                        <Label class=\"labelTitle\" [text]=\"item.title\" textWrap=\"true\"></Label>\n                        <Label class=\"labelText\" [text]=\"item.text\" textWrap=\"true\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n\n        <ListViewLinearLayout *tkIfIOS tkListViewLayout itemHeight=\"120\"></ListViewLinearLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-auto/listview-fixed-size-auto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewFixedSizeAutoComponent", function() { return ListViewFixedSizeAutoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__);






var posts = __webpack_require__("./app/examples/posts.json");
var ListViewFixedSizeAutoComponent = /** @class */ (function () {
    function ListViewFixedSizeAutoComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    ListViewFixedSizeAutoComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewLinearLayout"]();
        this.layout.scrollDirection = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewScrollDirection"].Vertical;
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this.addMoreItemsFromSource(6);
    };
    Object.defineProperty(ListViewFixedSizeAutoComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewFixedSizeAutoComponent.prototype.addMoreItemsFromSource = function (chunkSize) {
        var newItems = this._sourceDataItems.splice(0, chunkSize);
        this.dataItems.push(newItems);
    };
    ListViewFixedSizeAutoComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var that = new WeakRef(this);
        var listView = args.object;
        if (this._sourceDataItems.length > 0) {
            Object(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__["setTimeout"])(function () {
                that.get().addMoreItemsFromSource(2);
                listView.notifyLoadOnDemandFinished();
            }, 1500);
            args.returnValue = true;
        }
        else {
            args.returnValue = false;
            listView.notifyLoadOnDemandFinished(true);
        }
    };
    ListViewFixedSizeAutoComponent.prototype.initDataItems = function () {
        this._sourceDataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        for (var i = 0; i < posts.names.length; i++) {
            if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["android"]) {
                this._sourceDataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._sourceDataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    };
    ListViewFixedSizeAutoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ListViewFixedSizeAutoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-fixed-size-auto",
            template: __webpack_require__("./app/examples/load-on-demand/fixed-size-auto/listview-fixed-size-auto.component.html"),
            styles: [__webpack_require__("./app/examples/load-on-demand/fixed-size-auto/listview-fixed-size-auto.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListViewFixedSizeAutoComponent);
    return ListViewFixedSizeAutoComponent;
}());



/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-manual/listview-fixed-size-manual.component.css":
/***/ (function(module, exports) {

module.exports = ".itemTemplateStackLayout {\n    padding: 5 10 5 10;\n    background-color: #7fff7f;\n}\n\n.innerOtemTemplateStackLayout {\n    padding: 10;\n    background-color: #65a565;\n}\n\n.labelsStackLayout {\n    margin-left: 15;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n    color: white;\n}\n\n.loadOnDemandItemGridLayout {\n    background-color: #7fff7f;\n    color: black;\n}"

/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-manual/listview-fixed-size-manual.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <!-- >> angular-listview-load-on-demand -->\n    <RadListView [items]=\"dataItems\" loadOnDemandMode=\"Manual\" (loadMoreDataRequested)=\"onLoadMoreItemsRequested($event)\">\n    <!-- << angular-listview-load-on-demand -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"itemTemplateStackLayout\" orientation=\"vertical\">\n                <StackLayout class=\"innerOtemTemplateStackLayout\" orientation=\"horizontal\">\n                    <NSImg height=\"100\" width=\"80\" [src]=\"item.image\"></NSImg>\n\n                    <StackLayout class=\"labelsStackLayout\" orientation=\"vertical\">\n                        <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                        <Label class=\"labelTitle\" [text]=\"item.title\" textWrap=\"true\"></Label>\n                        <Label class=\"labelText\" [text]=\"item.text\" textWrap=\"true\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n\n        <ListViewLinearLayout *tkIfIOS tkListViewLayout itemHeight=\"120\"></ListViewLinearLayout>\n\n        <div *tkIfIOS>\n            <!-- >> listview-load-on-demand-custom-view -->\n            <GridLayout *tkListLoadOnDemandTemplate class=\"loadOnDemandItemGridLayout\">\n                <Label text=\"Load More\" horizontalAlignment=\"center\" verticalAlignment=\"center\"></Label>\n            </GridLayout>\n            <!-- << listview-load-on-demand-custom-view -->\n        </div>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/load-on-demand/fixed-size-manual/listview-fixed-size-manual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewFixedSizeManualComponent", function() { return ListViewFixedSizeManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__);






var posts = __webpack_require__("./app/examples/posts.json");
var ListViewFixedSizeManualComponent = /** @class */ (function () {
    function ListViewFixedSizeManualComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    ListViewFixedSizeManualComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewLinearLayout"]();
        this.layout.scrollDirection = nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["ListViewScrollDirection"].Vertical;
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this.addMoreItemsFromSource(6);
    };
    Object.defineProperty(ListViewFixedSizeManualComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewFixedSizeManualComponent.prototype.addMoreItemsFromSource = function (chunkSize) {
        var newItems = this._sourceDataItems.splice(0, chunkSize);
        this.dataItems.push(newItems);
    };
    ListViewFixedSizeManualComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var that = new WeakRef(this);
        var listView = args.object;
        if (this._sourceDataItems.length > 0) {
            Object(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_5__["setTimeout"])(function () {
                that.get().addMoreItemsFromSource(2);
                listView.notifyLoadOnDemandFinished();
            }, 1500);
        }
        else {
            args.returnValue = false;
            listView.notifyLoadOnDemandFinished(true);
        }
    };
    ListViewFixedSizeManualComponent.prototype.initDataItems = function () {
        this._sourceDataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        for (var i = 0; i < posts.names.length; i++) {
            if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_4__["android"]) {
                this._sourceDataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._sourceDataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    };
    ListViewFixedSizeManualComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ListViewFixedSizeManualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-fixed-size-manual",
            template: __webpack_require__("./app/examples/load-on-demand/fixed-size-manual/listview-fixed-size-manual.component.html"),
            styles: [__webpack_require__("./app/examples/load-on-demand/fixed-size-manual/listview-fixed-size-manual.component.css")]
        })
        // >> angular-listview-load-on-demand-code
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListViewFixedSizeManualComponent);
    return ListViewFixedSizeManualComponent;
}());

// << angular-listview-load-on-demand-code


/***/ }),

/***/ "./app/examples/mock-dataItems.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAITEMS", function() { return DATAITEMS; });
var DATAITEMS = [
    { "id": 1, "name": "Item 1", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 2, "name": "Item 2", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 3, "name": "Item 3", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 4, "name": "Item 4", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 5, "name": "Item 5", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 6, "name": "Item 6", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 7, "name": "Item 7", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 8, "name": "Item 8", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 9, "name": "Item 9", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
    { "id": 10, "name": "Item 10", "description": "This is item description.", "title": "This is item Title", "text": "This is item Text", "image": "This is item Image", "selected": false },
];


/***/ }),

/***/ "./app/examples/multiple-operations-with-swipe/listview-multiple-operations-with-swipe.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n\n.swipeItemGridLayout {\n    background-color: white;\n}\n\n.itemStackLayout {\n    background-color: white;\n}\n\n.markViewStackLayout {\n    background-color: blue;\n    padding: 10;\n}\n\n.swipeTemplateLabel {\n    size: 20;\n}\n\n.deleteViewStackLayout {\n    background-color: red;\n    padding: 10;\n}"

/***/ }),

/***/ "./app/examples/multiple-operations-with-swipe/listview-multiple-operations-with-swipe.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"*, auto\" tkExampleTitle tkToggleNavButton>\n    <RadListView selectionBehavior=\"LongPress\"\n                [items]=\"dataItems\"\n                #myListView \n                swipeActions=\"true\"\n                [sortingFunction]=\"mySortingFunc\" \n                [filteringFunction]=\"myFilteringFunc\"\n                [groupingFunction]=\"myGroupingFunc\" \n                (itemSwipeProgressEnded)=\"onSwipeCellFinished($event)\"\n                (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\"\n                (itemSwipeProgressChanged)=\"onCellSwiping($event)\"\n                (itemSelected)=\"onItemSelected($event)\"\n                (itemDeselected)=\"onItemDeselected($event)\"\n                (itemTap)=\"onItemTap($event)\" >\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"itemStackLayout\" [backgroundColor]=\"item.selected ? 'gray' : 'white'\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <GridLayout *tkListItemSwipeTemplate columns=\"auto, *, auto\" class=\"swipeItemGridLayout\">\n            <StackLayout id=\"mark-view\" col=\"0\" class=\"markViewStackLayout\" (tap)=\"onLeftSwipeClick($event)\">\n               <Label text=\"mark\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n           </StackLayout>\n           <StackLayout id=\"delete-view\" col=\"2\" class=\"deleteViewStackLayout\" (tap)=\"onRightSwipeClick($event)\">\n               <Label text=\"delete\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n           </StackLayout>\n       </GridLayout>\n    </RadListView>\n    <Label [text]=\"event\" textWrap=\"true\" row=\"1\"></Label>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/multiple-operations-with-swipe/listview-multiple-operations-with-swipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDataOperationsMultipleWithSwipeComponent", function() { return ListViewDataOperationsMultipleWithSwipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");




var ListViewDataOperationsMultipleWithSwipeComponent = /** @class */ (function () {
    function ListViewDataOperationsMultipleWithSwipeComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.myGroupingFunc = function (item) {
            return item.category;
        };
        this.mySortingFunc = function (item, otherItem) {
            var res = item.id < otherItem.id ? -1 : item.id > otherItem.id ? 1 : 0;
            return res;
        };
        this.myFilteringFunc = function (item) {
            return item && item.name.includes("Special Item");
        };
        this.isFilteringEnabled = true;
        this.isSortingEnabled = true;
        this.isGroupingEnabled = true;
    }
    Object.defineProperty(ListViewDataOperationsMultipleWithSwipeComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleWithSwipeComponent.prototype, "isGroupingEnabled", {
        get: function () {
            return this._isGroupingEnabled;
        },
        set: function (value) {
            this._isGroupingEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleWithSwipeComponent.prototype, "isFilteringEnabled", {
        get: function () {
            return this._isFilteringEnabled;
        },
        set: function (value) {
            this._isFilteringEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleWithSwipeComponent.prototype, "isSortingEnabled", {
        get: function () {
            return this._isSortingEnabled;
        },
        set: function (value) {
            this._isSortingEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleWithSwipeComponent.prototype, "myFilteringFunc", {
        get: function () {
            return this._myFilteringFunc;
        },
        set: function (value) {
            this._myFilteringFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleWithSwipeComponent.prototype, "myGroupingFunc", {
        get: function () {
            return this._myGroupingFunc;
        },
        set: function (value) {
            this._myGroupingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleWithSwipeComponent.prototype, "mySortingFunc", {
        get: function () {
            return this._mySortingFunc;
        },
        set: function (value) {
            this._mySortingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataOperationsItems());
        this._event = "No event";
    };
    Object.defineProperty(ListViewDataOperationsMultipleWithSwipeComponent.prototype, "event", {
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.onCellSwiping = function (args) {
        var item = this.dataItems.getItem(args.index) || {};
        if (args.data.x > 200) {
            console.log("Notify perform left action on: " + item.name);
        }
        else if (args.data.x < -200) {
            console.log("Notify perform right action on: " + item.name);
        }
    };
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.object;
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
        var item = this.dataItems.getItem(args.index) || {};
        var message = ">>> onSwipeCellStarted item: " + item.name;
        console.log(message);
        this._event = message;
    };
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.onSwipeCellFinished = function (args) {
        var item = this.dataItems.getItem(args.index) || {};
        var message = ">>> onSwipeCellFinished item: " + item.name;
        console.log(message);
        this._event = message;
    };
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.onLeftSwipeClick = function (args) {
        var itemView = args.object;
        var itemIndex = this.myListViewComponent.listView.items.indexOf(itemView.bindingContext);
        var item = this.dataItems.getItem(itemIndex) || {};
        var message = "Left swipe click for: " + item.name;
        console.log(message);
        this._event = message;
        alert(message);
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.onRightSwipeClick = function (args) {
        var swipeView = args.object;
        var context = swipeView.bindingContext || {};
        var message = "Right swipe click for: " + context.name;
        console.log(message);
        this._event = message;
        alert(message);
        // Currently it is not supported to change the items with splice while using data operations.
        // this.dataItems.splice(this.dataItems.indexOf(swipeView.bindingContext), 1);
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.onItemSelected = function (args) {
        var item = this.dataItems.getItem(args.index) || {};
        item.selected = true;
        var message = "onItemSelected for: " + item.name;
        console.log(message);
        this._event = message;
    };
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.onItemDeselected = function (args) {
        var item = this.dataItems.getItem(args.index) || {};
        item.selected = false;
        var message = "onItemDeselected for: " + item.name;
        console.log(message);
        this._event = message;
    };
    ListViewDataOperationsMultipleWithSwipeComponent.prototype.onItemTap = function (args) {
        var item = this.dataItems.getItem(args.index) || {};
        var message = "onItemTap for: " + item.name;
        console.log(message);
        this._event = message;
    };
    ListViewDataOperationsMultipleWithSwipeComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"])
    ], ListViewDataOperationsMultipleWithSwipeComponent.prototype, "myListViewComponent", void 0);
    ListViewDataOperationsMultipleWithSwipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-multiple-operations-with-swipe",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/multiple-operations-with-swipe/listview-multiple-operations-with-swipe.component.html"),
            styles: [__webpack_require__("./app/examples/multiple-operations-with-swipe/listview-multiple-operations-with-swipe.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewDataOperationsMultipleWithSwipeComponent);
    return ListViewDataOperationsMultipleWithSwipeComponent;
}());



/***/ }),

/***/ "./app/examples/multiple-operations/listview-data-operations-multiple.component.css":
/***/ (function(module, exports) {

module.exports = "/* >> listview-angular-multiple-operations-css */\n.nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}\n/* << listview-angular-multiple-operations-css */"

/***/ }),

/***/ "./app/examples/multiple-operations/listview-data-operations-multiple.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- >> listview-angular-multiple-operations-html -->\n<GridLayout tkExampleTitle tkToggleNavButton rows=\"*, *7\">\n    <StackLayout orientation=\"horizontal\">\n        <Button width=\"33%\" [text]=\"isFilteringEnabled ? 'Disable filtering' : 'Enable filtering'\" (tap)=\"toggleFilter()\" ios:margin=\"5\"></Button>\n        <Button width=\"33%\" [text]=\"isSortingEnabled ? 'Disable sorting' : 'Enable sorting'\" (tap)=\"toggleSorting()\" ios:margin=\"5\"></Button>\n        <Button width=\"33%\" [text]=\"isGroupingEnabled ? 'Disable grouping' : 'Enable grouping'\" (tap)=\"toggleGrouping()\" ios:margin=\"5\"></Button>\n    </StackLayout>\n    <RadListView selectionBehavior=\"Press\" (itemSelected)=\"onItemSelected($event)\" [items]=\"dataItems\" row=\"1\" #myListView \n                    [sortingFunction]=\"mySortingFunc\" \n                    [filteringFunction]=\"myFilteringFunc\"\n                    [groupingFunction]=\"myGroupingFunc\" >\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>\n<!-- << listview-angular-multiple-operations-html -->"

/***/ }),

/***/ "./app/examples/multiple-operations/listview-data-operations-multiple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDataOperationsMultipleComponent", function() { return ListViewDataOperationsMultipleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> listview-angular-multiple-operations-code




var ListViewDataOperationsMultipleComponent = /** @class */ (function () {
    function ListViewDataOperationsMultipleComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.myGroupingFunc = function (item) {
            return item.category;
        };
        this.mySortingFunc = function (item, otherItem) {
            var res = item.id < otherItem.id ? -1 : item.id > otherItem.id ? 1 : 0;
            return res;
        };
        this.myFilteringFunc = function (item) {
            return item && item.name.includes("Special Item");
        };
        this.isFilteringEnabled = true;
        this.isSortingEnabled = true;
        this.isGroupingEnabled = true;
    }
    Object.defineProperty(ListViewDataOperationsMultipleComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleComponent.prototype, "isGroupingEnabled", {
        get: function () {
            return this._isGroupingEnabled;
        },
        set: function (value) {
            this._isGroupingEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleComponent.prototype, "isFilteringEnabled", {
        get: function () {
            return this._isFilteringEnabled;
        },
        set: function (value) {
            this._isFilteringEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleComponent.prototype, "isSortingEnabled", {
        get: function () {
            return this._isSortingEnabled;
        },
        set: function (value) {
            this._isSortingEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleComponent.prototype, "myFilteringFunc", {
        get: function () {
            return this._myFilteringFunc;
        },
        set: function (value) {
            this._myFilteringFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleComponent.prototype, "myGroupingFunc", {
        get: function () {
            return this._myGroupingFunc;
        },
        set: function (value) {
            this._myGroupingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsMultipleComponent.prototype, "mySortingFunc", {
        get: function () {
            return this._mySortingFunc;
        },
        set: function (value) {
            this._mySortingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsMultipleComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataOperationsItems());
    };
    ListViewDataOperationsMultipleComponent.prototype.toggleFilter = function () {
        var listView = this.myListViewComponent.listView;
        if (!listView.filteringFunction) {
            listView.filteringFunction = this.myFilteringFunc;
            this.isFilteringEnabled = true;
        }
        else {
            listView.filteringFunction = undefined;
            this.isFilteringEnabled = false;
        }
    };
    ListViewDataOperationsMultipleComponent.prototype.toggleSorting = function () {
        var listView = this.myListViewComponent.listView;
        if (!listView.sortingFunction) {
            listView.sortingFunction = this.mySortingFunc;
            this.isSortingEnabled = true;
        }
        else {
            listView.sortingFunction = undefined;
            this.isSortingEnabled = false;
        }
    };
    ListViewDataOperationsMultipleComponent.prototype.toggleGrouping = function () {
        var listView = this.myListViewComponent.listView;
        if (!listView.groupingFunction) {
            listView.groupingFunction = this.myGroupingFunc;
            this.isGroupingEnabled = true;
        }
        else {
            listView.groupingFunction = undefined;
            this.isGroupingEnabled = false;
        }
    };
    ListViewDataOperationsMultipleComponent.prototype.onItemSelected = function (args) {
        var selectedItems = args.object.getSelectedItems();
        console.log(selectedItems[0].id);
    };
    ListViewDataOperationsMultipleComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"])
    ], ListViewDataOperationsMultipleComponent.prototype, "myListViewComponent", void 0);
    ListViewDataOperationsMultipleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-data-operations-multiple",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/multiple-operations/listview-data-operations-multiple.component.html"),
            styles: [__webpack_require__("./app/examples/multiple-operations/listview-data-operations-multiple.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewDataOperationsMultipleComponent);
    return ListViewDataOperationsMultipleComponent;
}());

// << listview-angular-multiple-operations-code


/***/ }),

/***/ "./app/examples/multiple-templates/listview-multiple-templates.component.css":
/***/ (function(module, exports) {

module.exports = "/* >> listview-multiple-templates-angular-css */\n.nameLabel {\n    font-size: 20;\n    margin: 5;\n}\n\n.typeLabel {\n    font-size: 17;\n    margin: 5;\n}\n\n.middleLabel{\n    margin: 0 5 0 5;\n}\n\n.descriptionLabel {\n    font-size: 14;\n    margin: 5\n}\n\n.yellowText {\n  color: yellow;  \n}\n\n.whiteText {\n  color: white;  \n}\n\n.blackText {\n  color: black;  \n}\n\n.blackStackLayout {\n    background-color: black;\n}\n\n.redStackLayout {\n    background-color: red;\n}\n\n.greenStackLayout {\n    background-color: green;\n}\n\n.blueStackLayout {\n    background-color: blue;\n}\n\n.yellowStackLayout {\n    background-color: yellow;\n}\n/* << listview-multiple-templates-angular-css */"

/***/ }),

/***/ "./app/examples/multiple-templates/listview-multiple-templates.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <!-- >> listview-multiple-templates-angular-html -->\n    <RadListView [items]=\"dataItems\" [itemTemplateSelector]=\"templateSelector\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label [text]=\"item.name\" class=\"nameLabel\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel middleLabel\"></Label>\n                <Label [text]=\"item.description\" class=\"descriptionLabel\"></Label>\n            </StackLayout>\n        </ng-template>\n\n        <ng-template tkTemplateKey=\"start\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"blackStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel yellowText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel yellowText middleLabel\"></Label>\n                <Label [text]=\"item.description\" class=\"descriptionLabel yellowText\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkTemplateKey=\"Red\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"redStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel whiteText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel whiteText\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkTemplateKey=\"green\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"greenStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel whiteText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel whiteText\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkTemplateKey=\"Blue\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"blueStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel whiteText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel whiteText\"></Label>\n            </StackLayout>\n        </ng-template>\n        <ng-template tkTemplateKey=\"End\" let-item=\"item\">\n            <StackLayout orientation=\"vertical\" class=\"yellowStackLayout\">\n                <Label [text]=\"item.name\" class=\"nameLabel blackText\"></Label>\n                <Label [text]=\"item.type\" class=\"typeLabel blackText middleLabel\"></Label>\n                <Label [text]=\"item.description\" class=\"descriptionLabel blackText\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n    <!-- << listview-multiple-templates-angular-html -->\n</GridLayout>"

/***/ }),

/***/ "./app/examples/multiple-templates/listview-multiple-templates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewMultipleTemplatesComponent", function() { return ListViewMultipleTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> listview-multiple-templates-angular




var ListViewMultipleTemplatesComponent = /** @class */ (function () {
    function ListViewMultipleTemplatesComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.templateSelectorFunction = function (item, index, items) {
            return item.type;
        };
    }
    Object.defineProperty(ListViewMultipleTemplatesComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewMultipleTemplatesComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this._templateSelector = this.templateSelectorFunction;
        var itemsCount = 50;
        for (var i = 0; i <= itemsCount; i++) {
            this._dataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, "Item " + i, "This is item description", undefined, undefined, undefined, undefined, this.getType(i, itemsCount)));
        }
    };
    ListViewMultipleTemplatesComponent.prototype.getType = function (index, end) {
        var lastDigit = index % 10;
        var type = index === 0 ? "start" : index === end ? "end" : undefined;
        if (!type) {
            type = lastDigit === 0 ? "default" : lastDigit <= 3 ? "red" : lastDigit <= 6 ? "blue" : lastDigit <= 9 ? "green" : "default";
        }
        return type;
    };
    Object.defineProperty(ListViewMultipleTemplatesComponent.prototype, "templateSelector", {
        get: function () {
            return this._templateSelector;
        },
        set: function (value) {
            this._templateSelector = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewMultipleTemplatesComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    ListViewMultipleTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-multiple-templates",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/multiple-templates/listview-multiple-templates.component.html"),
            styles: [__webpack_require__("./app/examples/multiple-templates/listview-multiple-templates.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewMultipleTemplatesComponent);
    return ListViewMultipleTemplatesComponent;
}());

// << listview-multiple-templates-angular


/***/ }),

/***/ "./app/examples/observable-array/listview-observable-array.component.css":
/***/ (function(module, exports) {

module.exports = "/* ios styles */\n.iosButtonsStacklayout {\n    background-color: #f8f8f8;\n}\n\n.iosButton {\n    margin: 10;\n    text-transform: uppercase;\n}\n\n.iosNameLabel {\n    font-size: 20\n}\n\n.iosDescriptionLabel {\n    font-size: 14;\n}\n\n/* Android styles */\n.androidButtonsStacklayout {\n    background-color: #f8f8f8;\n}\n\n.androidNameLabel {\n    font-size: 20\n}\n\n.androidDescriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/observable-array/listview-observable-array.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" rows=\"50, *\" tkExampleTitle tkToggleNavButton>\n    <StackLayout orientation=\"vertical\" ios:class=\"iosButtonsStacklayout\" android:class=\"androidButtonsStacklayout\">\n        <StackLayout row=\"0\" orientation=\"horizontal\" horizontalAlignment=\"center\">\n            <Button ios:class=\"iosButton\" text=\"ADD\" (tap)=\"onAddItemClick()\"></Button>\n            <Button ios:class=\"iosButton\" text=\"DEL\" (tap)=\"onRemoveItemClick()\"></Button>\n            <Button ios:class=\"iosButton\" text=\"UPDATE\" (tap)=\"onUpdateItemClick()\"></Button>\n            <Button ios:class=\"iosButton\" text=\"RESET\" (tap)=\"onResetClick()\"></Button>\n        </StackLayout>\n    </StackLayout>\n    <RadListView [items]=\"dataItems\" row=\"1\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label ios:class=\"iosNameLabel\" android:class=\"androidNameLabel\" [text]=\"item.name\"></Label>\n                <Label ios:class=\"iosDescriptionLabel\" android:class=\"androidDescriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/observable-array/listview-observable-array.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewObservableArrayComponent", function() { return ListViewObservableArrayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> angular-listview-observable-array-component




var ListViewObservableArrayComponent = /** @class */ (function () {
    function ListViewObservableArrayComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewObservableArrayComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewObservableArrayComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
    };
    ListViewObservableArrayComponent.prototype.onAddItemClick = function () {
        var id = Math.round(Math.random() * 100);
        this._dataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](id, "This is a new item: " + id, "This is the new item's description."));
    };
    ListViewObservableArrayComponent.prototype.onResetClick = function () {
        while (this._dataItems.length) {
            this._dataItems.pop();
        }
    };
    ListViewObservableArrayComponent.prototype.onUpdateItemClick = function () {
        for (var index_1 = 0; index_1 < this._dataItems.length; index_1++) {
            var item = this._dataItems.getItem(index_1);
            if (item) {
                item.id = Math.random() * 100;
                item.name = "This is an updated item";
                item.description = "This is the updated item's description.";
            }
        }
    };
    ListViewObservableArrayComponent.prototype.onRemoveItemClick = function () {
        this._dataItems.splice(this._dataItems.length - 1, 1);
    };
    ListViewObservableArrayComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    ListViewObservableArrayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-observable-array",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/observable-array/listview-observable-array.component.html"),
            styles: [__webpack_require__("./app/examples/observable-array/listview-observable-array.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewObservableArrayComponent);
    return ListViewObservableArrayComponent;
}());

// << angular-listview-observable-array-component


/***/ }),

/***/ "./app/examples/people.json":
/***/ (function(module) {

module.exports = {"people":[{"name":"Joyce Dean","title":"Sales report for January","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","image":"res://queen"},{"name":"Joel Robertson","title":"Planned network maintenance","text":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","image":"res://frank"},{"name":"Sherman Martin","title":"IT help desk","text":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","image":"res://anton"},{"name":"Lela Richardson","title":"Summaries of my interviews with customers","text":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","image":"res://lamai"},{"name":"Jackie Maldonado","title":"REMINDER: corporate meeting","text":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam","image":"res://tomsp"},{"name":"Kathryn Byrd","title":"Stock options","text":"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.","image":"res://folig"},{"name":"Ervin Powers","title":"Thank you!","text":"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam","image":"res://quede"},{"name":"Leland Warner","title":"Meeting with Jack","text":"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","image":"res://lazyk"},{"name":"Nicholas Bowers","title":"Please share these articles","text":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores","image":"res://quick"},{"name":"Alex Soto","title":"Additional information for Jack","text":"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda","image":"res://traih"},{"name":"Naomi Carson","title":"Miss you!","text":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates","image":"res://letss"},{"name":"Rufus Edwards","title":"Training","text":"Quot decore facilisi ne duo. Quo an diceret explicari definitionem, ea quo modus fierent apeirian","image":"res://ranch"},{"name":"Ian Ellis","title":"Do you like this blog article?","text":"Ex dicta nonumy consetetur mei, cu mea dico iisque. Saperet officiis legendos at mel.","image":"res://bonap"},{"name":"Pat Vasquez","title":"The latest UI design","text":"Molestie officiis ut vis, at sea case sapientem. Nonumy primis percipit vim te, iusto commune quo ea.","image":"res://furib"},{"name":"Chelsea Burton","title":"Need this article!","text":"Ut quot rebum praesent nec, ius nobis nominavi sententiae id. Wisi facilisi perpetua ea eum, ut unum rationibus sadipscing est.","image":"res://bsbev"},{"name":"Karl Bates","title":"Training update","text":"Usu in veritus vulputate. Scribentur omittantur ne ius, sit eros percipit ocurreret ne.","image":"res://godos"},{"name":"Evan Rivera","title":"Safety instructions","text":"Per tollit dicunt utroque ut. Volutpat erroribus no duo, est in brute munere epicuri, ad cum justo commodo.","image":"res://magaa"},{"name":"Tony Lawson","title":"Missed our conversation","text":"Qui ex nulla assentior, ne cum minim intellegat suscipiantur. Quodsi oportere gubergren vel cu. Nec ei meis nonumy torquatos, eleifend salutandi","image":"res://ricsu"},{"name":"Wallace Little","title":"Swift is awesome","text":"Cibo quaeque est at, vel tritani maiorum apeirian ut. Et eos vulputate scribentur. An duis propriae voluptatibus vel, error iudico tamquam quo ne","image":"res://warth"},{"name":"Carrie Tran","title":"Missed conference call with Jack","text":"Dicat quaeque rationibus ei has, ne quis recteque cotidieque vis. Mutat accusam vim ex, sit an homero phaedrum partiendo. ","image":"res://welli"},{"name":"Tyler Washington","title":"HR question","text":"Ad mea magna meliore, facete disputando id duo, ea sit elitr omittam interesset. Omnes fabulas signiferumque ad mel","image":"res://centc"}]};

/***/ }),

/***/ "./app/examples/posts.json":
/***/ (function(module) {

module.exports = {"names":["Joyce Dean","Joel Robertson","Sherman Martin","Lela Richardson","Jackie Maldonado","Kathryn Byrd","Ervin Powers","Leland Warner","Nicholas Bowers","Alex Soto","Naomi Carson","Rufus Edwards","Ian Ellis","Pat Vasquez","Chelsea Burton","Karl Bates","Evan Rivera","Tony Lawson","Wallace Little","Carrie Tran","Tyler Washington"],"titles":["Sales report for January","Planned network maintenance","IT help desk","Summaries of my interviews with customers","REMINDER: corporate meeting","Stock options","Thank you!","Meeting with Jack","Please share these articles","Additional information for Jack","Miss you!","Training","Do you like this blog article?","The latest UI design","Need this article!","Training update","Safety instructions","Missed our conversation","Swift is awesome","Missed conference call with Jack","HR question"],"text":["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam","Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.","Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam","Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?","At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores","Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda","Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates","Quot decore facilisi ne duo. Quo an diceret explicari definitionem, ea quo modus fierent apeirian","Ex dicta nonumy consetetur mei, cu mea dico iisque. Saperet officiis legendos at mel.","Molestie officiis ut vis, at sea case sapientem. Nonumy primis percipit vim te, iusto commune quo ea.","Ut quot rebum praesent nec, ius nobis nominavi sententiae id. Wisi facilisi perpetua ea eum, ut unum rationibus sadipscing est.","Usu in veritus vulputate. Scribentur omittantur ne ius, sit eros percipit ocurreret ne.","Per tollit dicunt utroque ut. Volutpat erroribus no duo, est in brute munere epicuri, ad cum justo commodo.","Qui ex nulla assentior, ne cum minim intellegat suscipiantur. Quodsi oportere gubergren vel cu. Nec ei meis nonumy torquatos, eleifend salutandi","Cibo quaeque est at, vel tritani maiorum apeirian ut. Et eos vulputate scribentur. An duis propriae voluptatibus vel, error iudico tamquam quo ne","Dicat quaeque rationibus ei has, ne quis recteque cotidieque vis. Mutat accusam vim ex, sit an homero phaedrum partiendo. ","Ad mea magna meliore, facete disputando id duo, ea sit elitr omittam interesset. Omnes fabulas signiferumque ad mel"],"images":["queen","frank","anton","lamai","tomsp","folig","quede","lazyk","quick","traih","letss","ranch","bonap","furib","bsbev","godos","magaa","ricsu","warth","welli","centc"]};

/***/ }),

/***/ "./app/examples/pull-to-refresh/customize/listview-pull-to-refresh-customize.component.css":
/***/ (function(module, exports) {

module.exports = ".itemTemplateStackLayout {\n    padding: 5 10 5 10;\n    background-color: #7fff7f;\n}\n\n.innerOtemTemplateStackLayout {\n    padding: 10;\n    background-color: #65a565;\n}\n\n.labelsStackLayout {\n    margin-left: 15;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n    color: white;\n}\n\n.listView {\n    background-color: blue;\n}"

/***/ }),

/***/ "./app/examples/pull-to-refresh/customize/listview-pull-to-refresh-customize.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" tkExampleTitle tkToggleNavButton>\n    <RadListView #listView class=\"listView\" [items]=\"dataItems\" pullToRefresh=\"true\" (pullToRefreshInitiated)=\"onPullToRefreshInitiated($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"itemTemplateStackLayout\" orientation=\"vertical\">\n                <StackLayout class=\"innerOtemTemplateStackLayout\" orientation=\"horizontal\">\n                    <NSImg height=\"100\" width=\"80\" [src]=\"item.image\"></NSImg>\n                    <StackLayout class=\"labelsStackLayout\" orientation=\"vertical\">\n                        <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                        <Label class=\"labelTitle\" [text]=\"item.title\" textWrap=\"true\"></Label>\n                        <Label class=\"labelText\" [text]=\"item.text\" textWrap=\"true\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/pull-to-refresh/customize/listview-pull-to-refresh-customize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewPullToRefreshCustomizeComponent", function() { return ListViewPullToRefreshCustomizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@nativescript/core/color/color.js");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_color__WEBPACK_IMPORTED_MODULE_7__);








var posts = __webpack_require__("./app/examples/posts.json");
var ListViewPullToRefreshCustomizeComponent = /** @class */ (function () {
    function ListViewPullToRefreshCustomizeComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    ListViewPullToRefreshCustomizeComponent.prototype.ngOnInit = function () {
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
        if (this.myListViewComponent && this.myListViewComponent.listView) {
            var style = new nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_3__["PullToRefreshStyle"]();
            style.indicatorColor = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_7__["Color"]("red");
            style.indicatorBackgroundColor = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_7__["Color"]("blue");
            this.myListViewComponent.listView.pullToRefreshStyle = style;
        }
    };
    Object.defineProperty(ListViewPullToRefreshCustomizeComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewPullToRefreshCustomizeComponent.prototype.onPullToRefreshInitiated = function (args) {
        var that = new WeakRef(this);
        Object(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_6__["setTimeout"])(function () {
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    break;
                }
                var imageUri = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__["android"] ? posts.images[i].toLowerCase() : posts.images[i];
                that.get()._dataItems.splice(0, 0, new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                that.get()._numberOfAddedItems++;
            }
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
    };
    ListViewPullToRefreshCustomizeComponent.prototype.initDataItems = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this._numberOfAddedItems = 0;
        for (var i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__["android"]) {
                this._dataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._dataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    };
    ListViewPullToRefreshCustomizeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("listView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4__["RadListViewComponent"], static: true }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_4__["RadListViewComponent"])
    ], ListViewPullToRefreshCustomizeComponent.prototype, "myListViewComponent", void 0);
    ListViewPullToRefreshCustomizeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-pull-to-refresh-customize.component",
            template: __webpack_require__("./app/examples/pull-to-refresh/customize/listview-pull-to-refresh-customize.component.html"),
            styles: [__webpack_require__("./app/examples/pull-to-refresh/customize/listview-pull-to-refresh-customize.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListViewPullToRefreshCustomizeComponent);
    return ListViewPullToRefreshCustomizeComponent;
}());



/***/ }),

/***/ "./app/examples/pull-to-refresh/getting-started/listview-pull-to-refresh.component.css":
/***/ (function(module, exports) {

module.exports = ".itemTemplateStackLayout {\n    padding: 5 10 5 10;\n    background-color: #7fff7f;\n}\n\n.innerOtemTemplateStackLayout {\n    padding: 10;\n    background-color: #65a565;\n}\n\n.labelsStackLayout {\n    margin-left: 15;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n    color: white;\n}"

/***/ }),

/***/ "./app/examples/pull-to-refresh/getting-started/listview-pull-to-refresh.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" tkExampleTitle tkToggleNavButton>\n     <!-- >> angular-listview-pull-to-refresh -->\n    <RadListView #listView [items]=\"dataItems\" pullToRefresh=\"true\" (pullToRefreshInitiated)=\"onPullToRefreshInitiated($event)\">\n     <!-- << angular-listview-pull-to-refresh -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"itemTemplateStackLayout\" orientation=\"vertical\">\n                <StackLayout class=\"innerOtemTemplateStackLayout\" orientation=\"horizontal\">\n                    <NSImg height=\"100\" width=\"80\" [src]=\"item.image\"></NSImg>\n                    <StackLayout class=\"labelsStackLayout\" orientation=\"vertical\">\n                        <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                        <Label class=\"labelTitle\" [text]=\"item.title\" textWrap=\"true\"></Label>\n                        <Label class=\"labelText\" [text]=\"item.text\" textWrap=\"true\"></Label>\n                    </StackLayout>\n                </StackLayout>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/pull-to-refresh/getting-started/listview-pull-to-refresh.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewPullToRefreshComponent", function() { return ListViewPullToRefreshComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/timer/timer.js");
/* harmony import */ var tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_4__);





var posts = __webpack_require__("./app/examples/posts.json");
var ListViewPullToRefreshComponent = /** @class */ (function () {
    function ListViewPullToRefreshComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    ListViewPullToRefreshComponent.prototype.ngOnInit = function () {
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(ListViewPullToRefreshComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewPullToRefreshComponent.prototype.onPullToRefreshInitiated = function (args) {
        var that = new WeakRef(this);
        Object(tns_core_modules_timer__WEBPACK_IMPORTED_MODULE_4__["setTimeout"])(function () {
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    break;
                }
                var imageUri = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__["android"] ? posts.images[i].toLowerCase() : posts.images[i];
                that.get()._dataItems.splice(0, 0, new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                that.get()._numberOfAddedItems++;
            }
            var listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
    };
    ListViewPullToRefreshComponent.prototype.initDataItems = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
        this._numberOfAddedItems = 0;
        for (var i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_3__["android"]) {
                this._dataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this._dataItems.push(new _dataItem__WEBPACK_IMPORTED_MODULE_2__["DataItem"](i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    };
    ListViewPullToRefreshComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ListViewPullToRefreshComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-pull-to-refresh",
            template: __webpack_require__("./app/examples/pull-to-refresh/getting-started/listview-pull-to-refresh.component.html"),
            styles: [__webpack_require__("./app/examples/pull-to-refresh/getting-started/listview-pull-to-refresh.component.css")]
        })
        // >> angular-listview-pull-to-refresh-code
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListViewPullToRefreshComponent);
    return ListViewPullToRefreshComponent;
}());

// << angular-listview-pull-to-refresh-code


/***/ }),

/***/ "./app/examples/scroll-events/listview-scroll-events.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/scroll-events/listview-scroll-events.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, auto, *\" tkExampleTitle tkToggleNavButton>\n    <Label text=\"Scroll events\"></Label>\n    <Label id=\"lblState\" [text]=\"stateText\" row=\"1\"></Label>\n    <!-- >> angular-listview-scroll-events-html -->\n    <RadListView [items]=\"dataItems\" row=\"2\" (scrolled)=\"onScrolled($event)\" (scrollStarted)=\"onScrollStarted($event)\" (scrollEnded)=\"onScrollEnded($event)\">\n    <!-- << angular-listview-scroll-events-html -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout>\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/scroll-events/listview-scroll-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewScrollEventsComponent", function() { return ListViewScrollEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> angular-listview-scroll-events-component



var ListViewScrollEventsComponent = /** @class */ (function () {
    function ListViewScrollEventsComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this._stateText = "State: ";
    }
    Object.defineProperty(ListViewScrollEventsComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewScrollEventsComponent.prototype, "stateText", {
        get: function () {
            return this._stateText;
        },
        set: function (value) {
            this._stateText = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewScrollEventsComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(25));
    };
    // >> angular-listview-scroll-events
    ListViewScrollEventsComponent.prototype.onScrolled = function (args) {
        this.stateText = "State: Scrolled with offset: " + args.scrollOffset;
    };
    ListViewScrollEventsComponent.prototype.onScrollStarted = function (args) {
        this.stateText = "State: Scroll started with offset: " + args.scrollOffset;
    };
    ListViewScrollEventsComponent.prototype.onScrollEnded = function (args) {
        this.stateText = "State: Scroll ended with offset: " + args.scrollOffset;
    };
    ListViewScrollEventsComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewScrollEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-scroll-events",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/scroll-events/listview-scroll-events.component.html"),
            styles: [__webpack_require__("./app/examples/scroll-events/listview-scroll-events.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewScrollEventsComponent);
    return ListViewScrollEventsComponent;
}());

// << angular-listview-scroll-events-component


/***/ }),

/***/ "./app/examples/scroll-to-index/listview-scroll-to-index-horizontal.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"In horizontal direction\">\n    <NavigationButton text=\"Back\" icon=\"res://ic_arrow_back_black_24dp\" (tap)=\"onNavigationButtonTap()\"></NavigationButton>\n    <ActionItem *tkIfIOS text=\"Options\" ios.position=\"right\" (tap)=\"onOptionsTapped()\"></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Auto\" android.position=\"popup\" (tap)=\"onOptionsTapped($event)\" ></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Start\" android.position=\"popup\" (tap)=\"onOptionsTapped($event)\" ></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Center\" android.position=\"popup\" (tap)=\"onOptionsTapped($event)\" ></ActionItem>\n    <ActionItem *tkIfAndroid text=\"End\" android.position=\"popup\" (tap)=\"onOptionsTapped($event)\" ></ActionItem>\n</ActionBar>\n<GridLayout rows=\"auto, *\">\n    <Button text=\"SCROLL TO INDEX 50\" (tap)=\"onTap()\"></Button>\n    <RadListView #myRadListView [items]=\"dataItems\" [scrollPosition]=\"myScrollPosition\" row=\"1\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <Label class=\"labelName labelNameHorizontal\" [text]=\"item.name\"></Label>\n        </ng-template>\n        <ListViewLinearLayout tkListViewLayout scrollDirection=\"Horizontal\" itemWidth=\"80\"></ListViewLinearLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/scroll-to-index/listview-scroll-to-index-horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewScrollToIndexHorizontalComponent", function() { return ListViewScrollToIndexHorizontalComponent; });
/* harmony import */ var _options_example_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/options-example-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/navigation/options/options.service.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__);









var ListViewScrollToIndexHorizontalComponent = /** @class */ (function (_super) {
    __extends(ListViewScrollToIndexHorizontalComponent, _super);
    function ListViewScrollToIndexHorizontalComponent(_page, _dataItemService, _optionsService, _router) {
        var _this = _super.call(this) || this;
        _this._page = _page;
        _this._dataItemService = _dataItemService;
        _this._optionsService = _optionsService;
        _this._router = _router;
        _this._options = ["Auto", "Start", "Center", "End"];
        var selectedIndex = 2;
        _this._page.on("navigatingTo", _this.onNavigatingTo, _this);
        _this._optionsParamName = "scrollDirection";
        _this._optionsService.paramName = _this._optionsParamName;
        _this.router = _router;
        _this.navigationParameters = { selectedIndex: selectedIndex, paramName: _this._optionsParamName, items: _this._options };
        _this.set("myScrollPosition", _this._options[selectedIndex]);
        return _this;
    }
    Object.defineProperty(ListViewScrollToIndexHorizontalComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewScrollToIndexHorizontalComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"](this._dataItemService.getIdenticalDataItems(100));
    };
    ListViewScrollToIndexHorizontalComponent.prototype.onTap = function () {
        this.myListViewComponent.listView.scrollToIndex(50, false, this.get('myScrollPosition'));
    };
    ListViewScrollToIndexHorizontalComponent.prototype.onNavigatingTo = function (args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case this._options[0]:
                        this.set("myScrollPosition", this._options[0]);
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case this._options[1]:
                        this.set("myScrollPosition", this._options[1]);
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case this._options[2]:
                        this.set("myScrollPosition", this._options[2]);
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case this._options[3]:
                        this.set("myScrollPosition", this._options[3]);
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    };
    ListViewScrollToIndexHorizontalComponent.prototype.onOptionsTapped = function (args) {
        if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__["android"]) {
            this.set('myScrollPosition', args.object.text);
        }
        else {
            _super.prototype.onOptionsTapped.call(this, args);
        }
    };
    ListViewScrollToIndexHorizontalComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_7__["DataItemService"] },
        { type: _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__["OptionsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myRadListView', { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__["RadListViewComponent"])
    ], ListViewScrollToIndexHorizontalComponent.prototype, "myListViewComponent", void 0);
    ListViewScrollToIndexHorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_7__["DataItemService"]],
            selector: "tk-listview-scroll-to-index-horizontal",
            template: __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-horizontal.component.html"),
            styles: [__webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"], _dataItem_service__WEBPACK_IMPORTED_MODULE_7__["DataItemService"], _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__["OptionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListViewScrollToIndexHorizontalComponent);
    return ListViewScrollToIndexHorizontalComponent;
}(_options_example_base__WEBPACK_IMPORTED_MODULE_0__["OptionsExampleBase"]));



/***/ }),

/***/ "./app/examples/scroll-to-index/listview-scroll-to-index-initial.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" backgroundColor=\"lightgray\" tkExampleTitle tkToggleNavButton>\n    <Label class=\"topLabel\" text=\"RadListView is initially scrolled so that 'item 20' is visible\" textWrap=\"true\"></Label>\n    <RadListView [items]=\"dataItems\" row=\"1\" (dataPopulated)=\"onDataPopulated($event)\" android:backgroundColor=\"white\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <Label class=\"labelNameInitialScroll\" [text]=\"item.name\" marginLeft=\"20\"></Label>\n        </ng-template>\n        <ListViewLinearLayout tkListViewLayout scrollDirection=\"Vertical\" ios:itemHeight=\"50\"></ListViewLinearLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/scroll-to-index/listview-scroll-to-index-initial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewScrollToIndexInitialComponent", function() { return ListViewScrollToIndexInitialComponent; });
/* harmony import */ var _options_example_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/options-example-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/navigation/options/options.service.ts");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js");
/* harmony import */ var nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_8__);









var ListViewScrollToIndexInitialComponent = /** @class */ (function (_super) {
    __extends(ListViewScrollToIndexInitialComponent, _super);
    function ListViewScrollToIndexInitialComponent(_page, _dataItemService, _optionsService, _router) {
        var _this = _super.call(this) || this;
        _this._page = _page;
        _this._dataItemService = _dataItemService;
        _this._optionsService = _optionsService;
        _this._router = _router;
        return _this;
    }
    Object.defineProperty(ListViewScrollToIndexInitialComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewScrollToIndexInitialComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_5__["ObservableArray"](this._dataItemService.getIdenticalDataItems(100));
    };
    ListViewScrollToIndexInitialComponent.prototype.scrollFunc = function (listView) {
        listView.scrollToIndex(20, false, nativescript_ui_listview__WEBPACK_IMPORTED_MODULE_8__["ListViewItemSnapMode"].Start);
    };
    ListViewScrollToIndexInitialComponent.prototype.onDataPopulated = function (args) {
        var listView = args.object;
        // Uses "setTimeout()" to only execute scrollToIndex when the RadListView on iOS has finished populating its native objects
        if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_7__["ios"]) {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(this.scrollFunc, 10, listView);
        }
        else {
            this.scrollFunc(listView);
        }
    };
    ListViewScrollToIndexInitialComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_6__["DataItemService"] },
        { type: _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__["OptionsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ListViewScrollToIndexInitialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_6__["DataItemService"]],
            selector: "tk-listview-scroll-to-index-initial",
            template: __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-initial.component.html"),
            styles: [__webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"], _dataItem_service__WEBPACK_IMPORTED_MODULE_6__["DataItemService"], _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__["OptionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListViewScrollToIndexInitialComponent);
    return ListViewScrollToIndexInitialComponent;
}(_options_example_base__WEBPACK_IMPORTED_MODULE_0__["OptionsExampleBase"]));



/***/ }),

/***/ "./app/examples/scroll-to-index/listview-scroll-to-index-vertical.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"In vertical direction\">\n    <NavigationButton text=\"Back\" icon=\"res://ic_arrow_back_black_24dp\" (tap)=\"onNavigationButtonTap()\"></NavigationButton>\n    <ActionItem *tkIfIOS text=\"Options\" ios.position=\"right\" (tap)=\"onOptionsTapped()\"></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Auto\" android.position=\"popup\" (tap)=\"onOptionsTapped($event)\" ></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Start\" android.position=\"popup\" (tap)=\"onOptionsTapped($event)\"></ActionItem>\n    <ActionItem *tkIfAndroid text=\"Center\" android.position=\"popup\" (tap)=\"onOptionsTapped($event)\"></ActionItem>\n    <ActionItem *tkIfAndroid text=\"End\" android.position=\"popup\" (tap)=\"onOptionsTapped($event)\" ></ActionItem>\n</ActionBar>\n<GridLayout rows=\"auto, *\">\n    <Button text=\"SCROLL TO INDEX 50\" (tap)=\"onTap()\"></Button>\n    <RadListView #myRadListView [items]=\"dataItems\" [scrollPosition]=\"myScrollPosition\" row=\"1\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <Label class=\"labelName\" [text]=\"item.name\"></Label>\n        </ng-template>\n        <ListViewLinearLayout tkListViewLayout scrollDirection=\"Vertical\" itemHeight=\"50\"></ListViewLinearLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/scroll-to-index/listview-scroll-to-index-vertical.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewScrollToIndexVerticalComponent", function() { return ListViewScrollToIndexVerticalComponent; });
/* harmony import */ var _options_example_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/options-example-base.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/navigation/options/options.service.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__);









var ListViewScrollToIndexVerticalComponent = /** @class */ (function (_super) {
    __extends(ListViewScrollToIndexVerticalComponent, _super);
    function ListViewScrollToIndexVerticalComponent(_page, _dataItemService, _optionsService, _router) {
        var _this = _super.call(this) || this;
        _this._page = _page;
        _this._dataItemService = _dataItemService;
        _this._optionsService = _optionsService;
        _this._router = _router;
        _this._options = ["Auto", "Start", "Center", "End"];
        var selectedIndex = 1;
        if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__["ios"]) {
            _this._page.on("navigatingTo", _this.onNavigatingTo, _this);
            _this._optionsParamName = "scrollDirection";
            _this._optionsService.paramName = _this._optionsParamName;
            _this.router = _router;
            _this.navigationParameters = { selectedIndex: selectedIndex, paramName: _this._optionsParamName, items: _this._options };
        }
        _this.set("myScrollPosition", _this._options[selectedIndex]);
        return _this;
    }
    ListViewScrollToIndexVerticalComponent.prototype.onTap = function () {
        this.myListViewComponent.listView.scrollToIndex(50, false, this.get('myScrollPosition'));
    };
    Object.defineProperty(ListViewScrollToIndexVerticalComponent.prototype, "dataItems", {
        // << angular-listview-scroll-to-index
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewScrollToIndexVerticalComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_6__["ObservableArray"](this._dataItemService.getIdenticalDataItems(100));
    };
    ListViewScrollToIndexVerticalComponent.prototype.onNavigatingTo = function (args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case this._options[0]:
                        this.set("myScrollPosition", this._options[0]);
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case this._options[1]:
                        this.set("myScrollPosition", this._options[1]);
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case this._options[2]:
                        this.set("myScrollPosition", this._options[2]);
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case this._options[3]:
                        this.set("myScrollPosition", this._options[3]);
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    };
    ListViewScrollToIndexVerticalComponent.prototype.onOptionsTapped = function (args) {
        if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_5__["android"]) {
            this.set('myScrollPosition', args.object.text);
        }
        else {
            _super.prototype.onOptionsTapped.call(this, args);
        }
    };
    ListViewScrollToIndexVerticalComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"] },
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_7__["DataItemService"] },
        { type: _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__["OptionsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myRadListView', { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_8__["RadListViewComponent"])
    ], ListViewScrollToIndexVerticalComponent.prototype, "myListViewComponent", void 0);
    ListViewScrollToIndexVerticalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_7__["DataItemService"]],
            selector: "tk-listview-scroll-to-index-vertical",
            template: __webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index-vertical.component.html"),
            styles: [__webpack_require__("./app/examples/scroll-to-index/listview-scroll-to-index.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"], _dataItem_service__WEBPACK_IMPORTED_MODULE_7__["DataItemService"], _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_4__["OptionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListViewScrollToIndexVerticalComponent);
    return ListViewScrollToIndexVerticalComponent;
}(_options_example_base__WEBPACK_IMPORTED_MODULE_0__["OptionsExampleBase"]));



/***/ }),

/***/ "./app/examples/scroll-to-index/listview-scroll-to-index.component.css":
/***/ (function(module, exports) {

module.exports = ".labelName {\n    font-size: 20;\n    margin-left: 20;\n}\n\n.labelNameInitialScroll {\n    font-size: 20;\n    margin-left: 20;\n    height: 50;\n}\n\n.labelNameHorizontal {\n    margin-left: 5;\n}\n\n.topLabel {\n    margin: 10;\n}"

/***/ }),

/***/ "./app/examples/selection-states/listview-selection-states.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/selection-states/listview-selection-states.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" tkExampleTitle tkToggleNavButton>\n    <Label text=\"Selection states\"></Label>\n    <!-- >> angular-listview-howto-item-selection-events-html -->\n    <RadListView [items]=\"dataItems\" row=\"1\" multipleSelection=\"true\" selectionBehavior=\"Press\" (itemSelected)=\"itemSelected($event)\"\n        (itemDeselected)=\"itemDeselected($event)\">\n        <!-- << angular-listview-howto-item-selection-events-html -->\n        \n        <!-- >> angular-listview-howto-item-selection-template-html -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout [backgroundColor]=\"item.selected ? 'red' : 'white'\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n        <!-- << angular-listview-howto-item-selection-template-html -->\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/selection-states/listview-selection-states.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewSelectionStatesComponent", function() { return ListViewSelectionStatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
// >> angular-listview-selection-states-component



var ListViewSelectionStatesComponent = /** @class */ (function () {
    function ListViewSelectionStatesComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewSelectionStatesComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewSelectionStatesComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getIdenticalDataItems(25));
    };
    // >> angular-listview-howto-item-selection-events
    ListViewSelectionStatesComponent.prototype.itemSelected = function (args) {
        var item = this.dataItems.getItem(args.index);
        item.selected = true;
    };
    ListViewSelectionStatesComponent.prototype.itemDeselected = function (args) {
        var item = this.dataItems.getItem(args.index);
        item.selected = false;
    };
    ListViewSelectionStatesComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    ListViewSelectionStatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-selection-states",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/selection-states/listview-selection-states.component.html"),
            styles: [__webpack_require__("./app/examples/selection-states/listview-selection-states.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewSelectionStatesComponent);
    return ListViewSelectionStatesComponent;
}());

// << angular-listview-selection-states-component


/***/ }),

/***/ "./app/examples/sorting/listview-data-operations-sorting.component.css":
/***/ (function(module, exports) {

module.exports = ".nameLabel {\n    font-size: 20\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/sorting/listview-data-operations-sorting.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton rows=\"auto, *\">\n    <StackLayout orientation=\"horizontal\">\n        <Button [text]=\"isEnabled ? 'Disable sorting' : 'Enable sorting'\" (tap)=\"toggleSorting()\" ios:margin=\"5\"></Button>\n    </StackLayout>\n    <RadListView [items]=\"dataItems\" row=\"1\" #myListView [sortingFunction]=\"mySortingFunc\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/sorting/listview-data-operations-sorting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewDataOperationsSortingComponent", function() { return ListViewDataOperationsSortingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/examples/dataItem.service.ts");




var SortingOrder;
(function (SortingOrder) {
    SortingOrder[SortingOrder["NSOrderedAscending"] = -1] = "NSOrderedAscending";
    SortingOrder[SortingOrder["NSOrderedSame"] = 0] = "NSOrderedSame";
    SortingOrder[SortingOrder["NSOrderedDescending"] = 1] = "NSOrderedDescending";
})(SortingOrder || (SortingOrder = {}));
var ListViewDataOperationsSortingComponent = /** @class */ (function () {
    function ListViewDataOperationsSortingComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        // >> listview-data-operations-sorting-angular
        this.mySortingFunc = function (item, otherItem) {
            var res = item.id < otherItem.id ? SortingOrder.NSOrderedAscending : item.id > otherItem.id ? SortingOrder.NSOrderedDescending : SortingOrder.NSOrderedSame;
            return res;
        };
        // << listview-data-operations-sorting-angular
        this.isEnabled = true;
    }
    ListViewDataOperationsSortingComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getDataOperationsItems());
    };
    Object.defineProperty(ListViewDataOperationsSortingComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsSortingComponent.prototype, "isEnabled", {
        get: function () {
            return this._isEnabled;
        },
        set: function (value) {
            this._isEnabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewDataOperationsSortingComponent.prototype, "mySortingFunc", {
        get: function () {
            return this._mySortingFunc;
        },
        set: function (value) {
            this._mySortingFunc = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewDataOperationsSortingComponent.prototype.toggleSorting = function () {
        var listView = this.myListViewComponent.listView;
        if (!listView.sortingFunction) {
            listView.sortingFunction = this.mySortingFunc;
            this.isEnabled = true;
        }
        else {
            listView.sortingFunction = undefined;
            this.isEnabled = false;
        }
    };
    ListViewDataOperationsSortingComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_2__["RadListViewComponent"])
    ], ListViewDataOperationsSortingComponent.prototype, "myListViewComponent", void 0);
    ListViewDataOperationsSortingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-data-operations-sorting",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]],
            template: __webpack_require__("./app/examples/sorting/listview-data-operations-sorting.component.html"),
            styles: [__webpack_require__("./app/examples/sorting/listview-data-operations-sorting.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_3__["DataItemService"]])
    ], ListViewDataOperationsSortingComponent);
    return ListViewDataOperationsSortingComponent;
}());



/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions-multiple.component.css":
/***/ (function(module, exports) {

module.exports = ".listItemStackLayout {\n    background-color: white;\n    padding-left: 5;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n}\n\n.markGridLayout {\n    background-color: #0099ff;\n    padding: 16;\n}\n\n.archiveGridLayout {\n    background-color: #ffcc99;\n    padding: 16;\n}\n\n.unreadGridLayout {\n    background-color: #ff3300;\n    padding: 16;\n}\n\n.deleteGridLayout {\n    background-color: red;\n    padding: 16;\n}\n\n.readGridLayout {\n    background-color: #ff66ff;\n    padding: 16;\n}\n\n.forwardGridLayout {\n    background-color: #9966ff;\n    padding: 16;\n}\n\n.swipeTemplateLabel {\n    font-size: 15;\n}"

/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions-multiple.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" rows=\"auto, *\" tkExampleTitle tkToggleNavButton>\n    <RadListView #myListView [items]=\"dataItems\" row=\"1\" selectionBehavior=\"None\" (itemSwipeProgressEnded)=\"onSwipeCellFinished($event)\"\n        (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\" (itemSwipeProgressChanged)=\"onCellSwiping($event)\" swipeActions=\"true\">\n\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"listItemStackLayout\" orientation=\"vertical\">\n                <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                <Label class=\"labelTitle\" [text]=\"item.title\"></Label>\n                <Label class=\"labelText\" [text]=\"item.text\"></Label>\n            </StackLayout>\n        </ng-template>\n        <!-- >> angular-listview-swipe-actions-multiple-template-html -->\n        <GridLayout *tkListItemSwipeTemplate columns=\"auto, *, auto\">\n            <GridLayout columns=\"*, *, *\" col=\"0\" id=\"left-stack\">\n                <GridLayout col=\"0\" class=\"markGridLayout\" (tap)=\"onLeftSwipeClick($event)\" id=\"btnMark\">\n                    <Label text=\"mark\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n                </GridLayout>\n                <GridLayout col=\"1\" class=\"archiveGridLayout\" (tap)=\"onLeftSwipeClick($event)\" id=\"btnArchive\">\n                    <Label text=\"archive\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n                </GridLayout>\n                <GridLayout col=\"2\" class=\"unreadGridLayout\" (tap)=\"onLeftSwipeClick($event)\" id=\"btnUnread\">\n                    <Label text=\"unread\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n                </GridLayout>\n            </GridLayout>\n            <GridLayout columns=\"*, *, *\" col=\"2\" id=\"right-stack\">\n                <GridLayout col=\"0\" class=\"deleteGridLayout\" (tap)=\"onRightSwipeClick($event)\" id=\"btnDelete\">\n                    <Label text=\"delete\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n                </GridLayout>\n                <GridLayout col=\"1\" class=\"readGridLayout\" (tap)=\"onRightSwipeClick($event)\" id=\"btnRead\">\n                    <Label text=\"read\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n                </GridLayout>\n                <GridLayout col=\"2\" class=\"forwardGridLayout\" (tap)=\"onRightSwipeClick($event)\" id=\"btnForward\">\n                    <Label text=\"forward\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n                </GridLayout>\n            </GridLayout>\n        </GridLayout>\n        <!-- << angular-listview-swipe-actions-multiple-template-html -->\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions-multiple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewSwipeActionsMultipleComponent", function() { return ListViewSwipeActionsMultipleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js");
/* harmony import */ var tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__);






var ListViewSwipeActionsMultipleComponent = /** @class */ (function () {
    function ListViewSwipeActionsMultipleComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewSwipeActionsMultipleComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewSwipeActionsMultipleComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getPostDataItems());
    };
    // >> angular-listview-swipe-action-multiple
    ListViewSwipeActionsMultipleComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['swipeView'];
        this.mainView = args['mainView'];
        this.leftItem = swipeView.getViewById('left-stack');
        this.rightItem = swipeView.getViewById('right-stack');
        if (args.data.x > 0) {
            var leftDimensions = tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].measureChild(this.leftItem.parent, this.leftItem, tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].makeMeasureSpec(Math.abs(args.data.x), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].EXACTLY), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].makeMeasureSpec(this.mainView.getMeasuredHeight(), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].EXACTLY));
            tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].layoutChild(this.leftItem.parent, this.leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
            this.hideOtherSwipeTemplateView("left");
        }
        else {
            var rightDimensions = tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].measureChild(this.rightItem.parent, this.rightItem, tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].makeMeasureSpec(Math.abs(args.data.x), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].EXACTLY), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].makeMeasureSpec(this.mainView.getMeasuredHeight(), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].EXACTLY));
            tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].layoutChild(this.rightItem.parent, this.rightItem, this.mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, this.mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
            this.hideOtherSwipeTemplateView("right");
        }
    };
    ListViewSwipeActionsMultipleComponent.prototype.hideOtherSwipeTemplateView = function (currentSwipeView) {
        switch (currentSwipeView) {
            case "left":
                if (this.rightItem.getActualSize().width !== 0) {
                    tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].layoutChild(this.rightItem.parent, this.rightItem, this.mainView.getMeasuredWidth(), 0, this.mainView.getMeasuredWidth(), 0);
                }
                break;
            case "right":
                if (this.leftItem.getActualSize().width !== 0) {
                    tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].layoutChild(this.leftItem.parent, this.leftItem, 0, 0, 0, 0);
                }
                break;
            default:
                break;
        }
    };
    // << angular-listview-swipe-action-multiple
    // >> angular-listview-swipe-action-multiple-limits
    ListViewSwipeActionsMultipleComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        swipeLimits.threshold = args['mainView'].getMeasuredWidth() * 0.2; // 20% of whole width
        swipeLimits.left = swipeLimits.right = args['mainView'].getMeasuredWidth() * 0.65; // 65% of whole width
    };
    // << angular-listview-swipe-action-multiple-limits
    ListViewSwipeActionsMultipleComponent.prototype.onSwipeCellFinished = function (args) {
        if (args.data.x > 200) {
            console.log("Perform left action");
        }
        else if (args.data.x < -200) {
            console.log("Perform right action");
        }
    };
    ListViewSwipeActionsMultipleComponent.prototype.onLeftSwipeClick = function (args) {
        var itemView = args.object;
        console.log("Button clicked: " + itemView.id + " for item with index: " + this.myListViewComponent.listView.items.indexOf(itemView.bindingContext));
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListViewSwipeActionsMultipleComponent.prototype.onRightSwipeClick = function (args) {
        var itemView = args.object;
        console.log("Button clicked: " + itemView.id + " for item with index: " + this.myListViewComponent.listView.items.indexOf(itemView.bindingContext));
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListViewSwipeActionsMultipleComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListViewSwipeActionsMultipleComponent.prototype, "myListViewComponent", void 0);
    ListViewSwipeActionsMultipleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-swipe-actions-multiple",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions-multiple.component.html"),
            styles: [__webpack_require__("./app/examples/swipe-actions/listview-swipe-actions-multiple.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewSwipeActionsMultipleComponent);
    return ListViewSwipeActionsMultipleComponent;
}());



/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions-thresholds.component.css":
/***/ (function(module, exports) {

module.exports = ".listItemStackLayout {\n    background-color: white;\n    padding-left: 5;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n}\n\n.markViewStackLayout {\n    background-color: blue;\n    padding: 16\n}\n\n.deleteViewStackLayout {\n    background-color: red;\n    padding: 16;\n}\n\n.gridLayoutLayout {\n    background-color: white;\n}\n\n.markViewStackLayout {\n    background-color: blue;\n    padding-left: 16;\n    padding-right: 16;\n}\n\n.swipeTemplateLabel {\n    size: 20;\n}\n\n.deleteViewStackLayout {\n    background-color: red;\n    padding-left: 16;\n    padding-right: 16;\n}"

/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions-thresholds.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" rows=\"auto, *\" tkExampleTitle tkToggleNavButton>\n    <RadListView #myListView [items]=\"dataItems\" row=\"1\" selectionBehavior=\"None\" (itemSwipeProgressEnded)=\"onSwipeCellFinished($event)\"\n        (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\" (itemSwipeProgressChanged)=\"onCellSwiping($event)\" swipeActions=\"true\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"listItemStackLayout\" orientation=\"vertical\">\n                <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                <Label class=\"labelTitle\" [text]=\"item.title\"></Label>\n                <Label class=\"labelText\" [text]=\"item.text\"></Label>\n            </StackLayout>\n        </ng-template>\n        <GridLayout *tkListItemSwipeTemplate columns=\"auto, *, auto\" class=\"gridLayoutLayout\">\n            <StackLayout id=\"mark-view\" col=\"0\" class=\"markViewStackLayout\" (tap)=\"onLeftSwipeClick($event)\">\n                <Label text=\"mark\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n            </StackLayout>\n            <StackLayout id=\"delete-view\" col=\"2\" class=\"deleteViewStackLayout\" (tap)=\"onRightSwipeClick($event)\">\n                <Label text=\"delete\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n            </StackLayout>\n        </GridLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions-thresholds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewSwipeActionsThresholdsComponent", function() { return ListViewSwipeActionsThresholdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/core/view/view.js");
/* harmony import */ var tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__);






var ListViewSwipeActionsThresholdsComponent = /** @class */ (function () {
    function ListViewSwipeActionsThresholdsComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this.leftThresholdPassed = false;
        this.rightThresholdPassed = false;
    }
    Object.defineProperty(ListViewSwipeActionsThresholdsComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewSwipeActionsThresholdsComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getPostDataItems());
    };
    // >> angular-listview-swipe-action-thresholds
    ListViewSwipeActionsThresholdsComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['swipeView'];
        var mainView = args['mainView'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        if (args.data.x > swipeView.getMeasuredWidth() / 4 && !this.leftThresholdPassed) {
            console.log("Notify perform left action");
            var markLabel = leftItem.getViewById('mark-text');
            this.leftThresholdPassed = true;
        }
        else if (args.data.x < -swipeView.getMeasuredWidth() / 4 && !this.rightThresholdPassed) {
            var deleteLabel = rightItem.getViewById('delete-text');
            console.log("Notify perform right action");
            this.rightThresholdPassed = true;
        }
        if (args.data.x > 0) {
            var leftDimensions = tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].measureChild(leftItem.parent, leftItem, tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].makeMeasureSpec(Math.abs(args.data.x), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].EXACTLY), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].makeMeasureSpec(mainView.getMeasuredHeight(), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].EXACTLY));
            tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].layoutChild(leftItem.parent, leftItem, 0, 0, leftDimensions.measuredWidth, leftDimensions.measuredHeight);
        }
        else {
            var rightDimensions = tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].measureChild(rightItem.parent, rightItem, tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].makeMeasureSpec(Math.abs(args.data.x), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].EXACTLY), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].makeMeasureSpec(mainView.getMeasuredHeight(), tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_5__["layout"].EXACTLY));
            tns_core_modules_ui_core_view__WEBPACK_IMPORTED_MODULE_4__["View"].layoutChild(rightItem.parent, rightItem, mainView.getMeasuredWidth() - rightDimensions.measuredWidth, 0, mainView.getMeasuredWidth(), rightDimensions.measuredHeight);
        }
    };
    // << angular-listview-swipe-action-thresholds
    // >> angular-listview-swipe-action-thresholds-limits
    ListViewSwipeActionsThresholdsComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = swipeLimits.right = args.data.x > 0 ? swipeView.getMeasuredWidth() / 2 : swipeView.getMeasuredWidth() / 2;
        swipeLimits.threshold = swipeView.getMeasuredWidth();
    };
    // << angular-listview-swipe-action-thresholds-limits
    // >> angular-listview-swipe-actions-execute
    ListViewSwipeActionsThresholdsComponent.prototype.onSwipeCellFinished = function (args) {
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        if (this.leftThresholdPassed) {
            console.log("Perform left action");
        }
        else if (this.rightThresholdPassed) {
            console.log("Perform right action");
        }
        this.leftThresholdPassed = false;
        this.rightThresholdPassed = false;
    };
    // << angular-listview-swipe-actions-execute
    ListViewSwipeActionsThresholdsComponent.prototype.onLeftSwipeClick = function (args) {
        console.log("Left swipe click");
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListViewSwipeActionsThresholdsComponent.prototype.onRightSwipeClick = function (args) {
        console.log("Right swipe click");
        this.dataItems.splice(this.dataItems.indexOf(args.object.bindingContext), 1);
    };
    ListViewSwipeActionsThresholdsComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListViewSwipeActionsThresholdsComponent.prototype, "myListViewComponent", void 0);
    ListViewSwipeActionsThresholdsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-swipe-actions-thresholds",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions-thresholds.component.html"),
            styles: [__webpack_require__("./app/examples/swipe-actions/listview-swipe-actions-thresholds.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewSwipeActionsThresholdsComponent);
    return ListViewSwipeActionsThresholdsComponent;
}());



/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions.component.css":
/***/ (function(module, exports) {

module.exports = ".listItemStackLayout {\n    background-color: white;\n    padding-left: 5;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n}\n\n.markViewStackLayout {\n    background-color: blue;\n    padding: 16\n}\n\n.deleteViewStackLayout {\n    background-color: red;\n    padding: 16;\n}\n\n.gridLayoutLayout {\n    background-color: white;\n}\n\n\n.swipeTemplateLabel {\n    size: 20;\n}\n"

/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" rows=\"*, auto\" tkExampleTitle tkToggleNavButton>\n    <!-- >> angular-listview-swipe-actions-set-enabled-html -->\n    <RadListView #myListView [items]=\"dataItems\" selectionBehavior=\"None\" (itemSwipeProgressEnded)=\"onSwipeCellFinished($event)\"\n    (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\" (itemSwipeProgressChanged)=\"onCellSwiping($event)\" swipeActions=\"true\">\n    <!-- >> (hide) -->\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout (tap)=\"onLayoutTap($event)\" class=\"listItemStackLayout\" orientation=\"vertical\">\n                <Label (tap)=\"onLabelTap($event)\" class=\"labelName\" [text]=\"item.name\"></Label>\n                <Label class=\"labelTitle\" [text]=\"item.title\"></Label>\n                <Label class=\"labelText\" [text]=\"item.text\"></Label>\n            </StackLayout>\n        </ng-template>\n    <!-- >> angular-listview-swipe-actions-template-html -->\n        <GridLayout *tkListItemSwipeTemplate columns=\"auto, *, auto\" class=\"gridLayoutLayout\">\n             <StackLayout id=\"mark-view\" col=\"0\" class=\"markViewStackLayout\" (tap)=\"onLeftSwipeClick($event)\">\n                <Label text=\"mark\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n            </StackLayout>\n            <StackLayout id=\"delete-view\" col=\"2\" class=\"deleteViewStackLayout\" (tap)=\"onRightSwipeClick($event)\">\n                <Label text=\"delete\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n            </StackLayout>\n        </GridLayout>\n    <!-- << angular-listview-swipe-actions-template-html -->\n    <!-- << (hide) -->\n    </RadListView>\n    <Label id=\"lbl\" textWrap=\"true\" row=\"1\"></Label>\n<!-- << angular-listview-swipe-actions-set-enabled-html -->\n</GridLayout>"

/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewSwipeActionsComponent", function() { return ListViewSwipeActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
/* harmony import */ var tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_4__);





var ListViewSwipeActionsComponent = /** @class */ (function () {
    function ListViewSwipeActionsComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
    }
    Object.defineProperty(ListViewSwipeActionsComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewSwipeActionsComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getPostDataItems());
    };
    // >> angular-listview-swipe-action-release-notify
    ListViewSwipeActionsComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.object;
        if (args.data.x > 200) {
            console.log("Notify perform left action");
        }
        else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    };
    // << angular-listview-swipe-action-release-notify
    // >> angular-listview-swipe-action-release-limits
    ListViewSwipeActionsComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    // << angular-listview-swipe-action-release-limits
    // >> angular-listview-swipe-action-release-execute
    ListViewSwipeActionsComponent.prototype.onSwipeCellFinished = function (args) {
    };
    // << angular-listview-swipe-action-release-execute
    // >> angular-listview-swipe-action-handlers
    ListViewSwipeActionsComponent.prototype.onLeftSwipeClick = function (args) {
        console.log("Left swipe click");
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListViewSwipeActionsComponent.prototype.onRightSwipeClick = function (args) {
        console.log("Right swipe click");
        this.dataItems.splice(this.dataItems.indexOf(args.object.bindingContext), 1);
    };
    // << angular-listview-swipe-action-handlers
    ListViewSwipeActionsComponent.prototype.onLayoutTap = function (args) {
        var message = "Tap on Layout for item: " + args.object.bindingContext.name;
        console.log(message);
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
        var lbl = tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_4__["Frame"].topmost().getViewById("lbl");
        lbl.text += " \n" + message;
    };
    ListViewSwipeActionsComponent.prototype.onLabelTap = function (args) {
        var message = "Tap on Title: " + args.object.text;
        console.log(message);
        var lbl = tns_core_modules_ui_frame_frame__WEBPACK_IMPORTED_MODULE_4__["Frame"].topmost().getViewById("lbl");
        lbl.text = message;
    };
    ListViewSwipeActionsComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListViewSwipeActionsComponent.prototype, "myListViewComponent", void 0);
    ListViewSwipeActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-swipe-actions",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/swipe-actions/listview-swipe-actions.component.html"),
            styles: [__webpack_require__("./app/examples/swipe-actions/listview-swipe-actions.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewSwipeActionsComponent);
    return ListViewSwipeActionsComponent;
}());



/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-disable.component.css":
/***/ (function(module, exports) {

module.exports = ".listItemStackLayout {\n    background-color: white;\n    padding-left: 5;\n}\n\n.labelName {\n    font-size: 20;\n    margin-bottom: 8;\n}\n\n.labelTitle {\n    font-size: 14;\n    font-weight: bold;\n}\n\n.labelText {\n    font-size: 12;\n}\n\n.markViewStackLayout {\n    background-color: blue;\n    padding: 16\n}\n\n.deleteViewStackLayout {\n    background-color: red;\n    padding: 16;\n}\n\n.gridLayoutLayout {\n    background-color: white;\n}\n\n.markViewStackLayout {\n    background-color: blue;\n    padding-left: 16;\n    padding-right: 16;\n}\n\n.swipeTemplateLabel {\n    size: 20;\n}\n\n.deleteViewStackLayout {\n    background-color: red;\n    padding-left: 16;\n    padding-right: 16;\n}\n\nbutton {\n    font-size: 15;\n    horizontal-align: center;\n    text-transform: uppercase;\n}"

/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-disable.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout orientation=\"vertical\" rows=\"auto, *\" tkExampleTitle tkToggleNavButton>\n    <Button [text]=\"currentStatus\" (tap)=\"onDisableEnableTap()\"></Button>\n    <RadListView #myListView [items]=\"dataItems\" row=\"1\" selectionBehavior=\"None\" (itemSwiping)=\"onItemSwiping($event)\" (itemSwipeProgressEnded)=\"onSwipeCellFinished($event)\"\n        (itemSwipeProgressStarted)=\"onSwipeCellStarted($event)\" (itemSwipeProgressChanged)=\"onCellSwiping($event)\" swipeActions=\"true\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"listItemStackLayout\" orientation=\"vertical\">\n                <Label class=\"labelName\" [text]=\"item.name\"></Label>\n                <Label class=\"labelTitle\" [text]=\"item.title\"></Label>\n                <Label class=\"labelText\" [text]=\"item.text\"></Label>\n            </StackLayout>\n        </ng-template>\n        <GridLayout *tkListItemSwipeTemplate columns=\"auto, *, auto\" class=\"gridLayoutLayout\">\n            <StackLayout id=\"mark-view\" col=\"0\" class=\"markViewStackLayout\" (tap)=\"onLeftSwipeClick($event)\">\n                <Label text=\"mark\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n            </StackLayout>\n            <StackLayout id=\"delete-view\" col=\"2\" class=\"deleteViewStackLayout\" (tap)=\"onRightSwipeClick($event)\">\n                <Label text=\"delete\" class=\"swipeTemplateLabel\" verticalAlignment=\"center\" horizontalAlignment=\"center\"></Label>\n            </StackLayout>\n        </GridLayout>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/swipe-actions/listview-swipe-disable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewSwipeDisableComponent", function() { return ListViewSwipeDisableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dataItem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/examples/dataItem.service.ts");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);




var ListViewSwipeDisableComponent = /** @class */ (function () {
    function ListViewSwipeDisableComponent(_dataItemService) {
        this._dataItemService = _dataItemService;
        this._enabled = true;
    }
    Object.defineProperty(ListViewSwipeDisableComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewSwipeDisableComponent.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            this._enabled = value;
            this.updateStatusText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListViewSwipeDisableComponent.prototype, "currentStatus", {
        get: function () {
            return this._currentStatus;
        },
        set: function (value) {
            this._currentStatus = value;
        },
        enumerable: true,
        configurable: true
    });
    ListViewSwipeDisableComponent.prototype.ngOnInit = function () {
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](this._dataItemService.getPostDataItems());
        this.enabled = true;
    };
    ListViewSwipeDisableComponent.prototype.onCellSwiping = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var currentItemView = args.swipeView;
        if (args.data.x > 200) {
            console.log("Notify perform left action");
        }
        else if (args.data.x < -200) {
            console.log("Notify perform right action");
        }
    };
    ListViewSwipeDisableComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args.swipeView;
        var leftItem = swipeView.getViewById('mark-view');
        var rightItem = swipeView.getViewById('delete-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    ListViewSwipeDisableComponent.prototype.onSwipeCellFinished = function (args) {
    };
    ListViewSwipeDisableComponent.prototype.onLeftSwipeClick = function (args) {
        console.log("Left swipe click");
        this.myListViewComponent.listView.notifySwipeToExecuteFinished();
    };
    ListViewSwipeDisableComponent.prototype.onRightSwipeClick = function (args) {
        console.log("Right swipe click");
        this.dataItems.splice(this.dataItems.indexOf(args.object.bindingContext), 1);
    };
    ListViewSwipeDisableComponent.prototype.onDisableEnableTap = function () {
        this.enabled = !this.enabled;
    };
    ListViewSwipeDisableComponent.prototype.onItemSwiping = function (args) {
        args.returnValue = this.enabled;
    };
    ListViewSwipeDisableComponent.prototype.updateStatusText = function () {
        this.currentStatus = !this.enabled ? "ENABLE" : "DISABLE";
    };
    ListViewSwipeDisableComponent.ctorParameters = function () { return [
        { type: _dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("myListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["RadListViewComponent"])
    ], ListViewSwipeDisableComponent.prototype, "myListViewComponent", void 0);
    ListViewSwipeDisableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-swipe-disable",
            providers: [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]],
            template: __webpack_require__("./app/examples/swipe-actions/listview-swipe-disable.component.html"),
            styles: [__webpack_require__("./app/examples/swipe-actions/listview-swipe-disable.component.css")]
        }),
        __metadata("design:paramtypes", [_dataItem_service__WEBPACK_IMPORTED_MODULE_2__["DataItemService"]])
    ], ListViewSwipeDisableComponent);
    return ListViewSwipeDisableComponent;
}());



/***/ }),

/***/ "./app/examples/with-big-data/listview-with-big-data.component.css":
/***/ (function(module, exports) {

module.exports = "Label {\n    margin: 16;\n}\n\n.nameLabel {\n    font-size: 20;\n    font-weight: bold;\n}\n\n.descriptionLabel {\n    font-size: 14;\n}"

/***/ }),

/***/ "./app/examples/with-big-data/listview-with-big-data.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView [items]=\"dataItems\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout orientation=\"vertical\">\n                <Label class=\"nameLabel\" [text]=\"item.name\"></Label>\n                <Label class=\"descriptionLabel\" [text]=\"item.description\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/examples/with-big-data/listview-with-big-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewWithBigDataComponent", function() { return ListViewWithBigDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);


var ListViewWithBigDataComponent = /** @class */ (function () {
    function ListViewWithBigDataComponent() {
    }
    Object.defineProperty(ListViewWithBigDataComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    ListViewWithBigDataComponent.prototype.ngOnInit = function () {
        var tempArray = [];
        for (var i = 0; i < 10000; i++) {
            tempArray.push({ name: "Item " + i, description: "Description for item " + i });
        }
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](tempArray);
    };
    ListViewWithBigDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-listview-with-big-data",
            template: __webpack_require__("./app/examples/with-big-data/listview-with-big-data.component.html"),
            styles: [__webpack_require__("./app/examples/with-big-data/listview-with-big-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListViewWithBigDataComponent);
    return ListViewWithBigDataComponent;
}());



/***/ }),

/***/ "./app/options-example-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsExampleBase", function() { return OptionsExampleBase; });
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_1__);


var OptionsExampleBase = /** @class */ (function (_super) {
    __extends(OptionsExampleBase, _super);
    function OptionsExampleBase() {
        return _super.call(this) || this;
    }
    OptionsExampleBase.prototype.onOptionsTapped = function (args) {
        this.router.navigate(['/options'], { queryParams: { selectedIndex: this.navigationParameters.selectedIndex, paramName: this.navigationParameters.paramName, items: this.navigationParameters.items } });
    };
    OptionsExampleBase.prototype.onNavigationButtonTap = function () {
        tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_0__["Frame"].topmost().goBack();
    };
    return OptionsExampleBase;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvY3VzdG9tLWFuZ3VsYXItY29tcC9jdXN0b20taW1hZ2UtdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvY3VzdG9tLWFuZ3VsYXItY29tcC9jdXN0b20taW1hZ2UtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2N1c3RvbS1hbmd1bGFyLWNvbXAvY3VzdG9tLWltYWdlLXRlbXBsYXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvY3VzdG9tLWFuZ3VsYXItY29tcC9jdXN0b20tc3dpcGUtdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvY3VzdG9tLWFuZ3VsYXItY29tcC9jdXN0b20tc3dpcGUtdGVtcGxhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2N1c3RvbS1hbmd1bGFyLWNvbXAvY3VzdG9tLXN3aXBlLXRlbXBsYXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvY3VzdG9tLWFuZ3VsYXItY29tcC9saXN0dmlldy1jb21wLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2N1c3RvbS1hbmd1bGFyLWNvbXAvbGlzdHZpZXctY29tcC10ZW1wbGF0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvY3VzdG9tLWFuZ3VsYXItY29tcC9saXN0dmlldy1jb21wLXRlbXBsYXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZGF0YUl0ZW0uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZGF0YUl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2ZpbHRlcmluZy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZmlsdGVyaW5nLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2ZpbHRlcmluZy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZmlsdGVyaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9maWx0ZXJpbmcvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWZpbHRlcmluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2ZpcnN0LXZpc2libGUtaW5kZXgvZmlyc3QtdmlzaWJsZS1pbmRleC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9maXJzdC12aXNpYmxlLWluZGV4L2ZpcnN0LXZpc2libGUtaW5kZXguY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2ZpcnN0LXZpc2libGUtaW5kZXgvZmlyc3QtdmlzaWJsZS1pbmRleC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dldHRpbmctc3RhcnRlZC1ob3Jpem9udGFsL2xpc3R2aWV3LWdldHRpbmctc3RhcnRlZC1ob3Jpem9udGFsLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dldHRpbmctc3RhcnRlZC1ob3Jpem9udGFsL2xpc3R2aWV3LWdldHRpbmctc3RhcnRlZC1ob3Jpem9udGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9nZXR0aW5nLXN0YXJ0ZWQtaG9yaXpvbnRhbC9saXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQtaG9yaXpvbnRhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dldHRpbmctc3RhcnRlZC9saXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ2V0dGluZy1zdGFydGVkL2xpc3R2aWV3LWdldHRpbmctc3RhcnRlZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ2V0dGluZy1zdGFydGVkL2xpc3R2aWV3LWdldHRpbmctc3RhcnRlZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dyb3VwLXN3aXBlLWxvYWQtcHVsbC9ibG9nLXBvc3RzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dyb3VwLXN3aXBlLWxvYWQtcHVsbC9saXN0dmlldy1ncm91cC1zd2lwZS1sb2FkLXB1bGwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dyb3VwLXN3aXBlLWxvYWQtcHVsbC9saXN0dmlldy1ncm91cC1zd2lwZS1sb2FkLXB1bGwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9ncm91cC1zd2lwZS1sb2FkLXB1bGwvbW9jay1ibG9ncy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ3JvdXBpbmctY29sbGFwc2libGUvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLWNvbGxhcHNpYmxlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dyb3VwaW5nLWNvbGxhcHNpYmxlL2xpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZy1jb2xsYXBzaWJsZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ3JvdXBpbmctY29sbGFwc2libGUvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLWNvbGxhcHNpYmxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ3JvdXBpbmctbXVsdGlwbGUtdGVtcGxhdGVzL2xpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZy10ZW1wbGF0ZXMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ3JvdXBpbmctbXVsdGlwbGUtdGVtcGxhdGVzL2xpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZy10ZW1wbGF0ZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dyb3VwaW5nLW11bHRpcGxlLXRlbXBsYXRlcy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZ3JvdXBpbmctdGVtcGxhdGVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ3JvdXBpbmctc2Nyb2xsLXRvL2dyb3VwaW5nLXNjcm9sbC10by5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9ncm91cGluZy1zY3JvbGwtdG8vZ3JvdXBpbmctc2Nyb2xsLXRvLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9ncm91cGluZy1zY3JvbGwtdG8vZ3JvdXBpbmctc2Nyb2xsLXRvLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ3JvdXBpbmctd2l0aC1oZWFkZXItZm9vdGVyL3dpdGgtaGVhZGVyLWZvb3Rlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9ncm91cGluZy13aXRoLWhlYWRlci1mb290ZXIvd2l0aC1oZWFkZXItZm9vdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9ncm91cGluZy13aXRoLWhlYWRlci1mb290ZXIvd2l0aC1oZWFkZXItZm9vdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ3JvdXBpbmcvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2dyb3VwaW5nL2xpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvZ3JvdXBpbmcvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaGVhZGVyLWZvb3Rlci9hdXRvLXNpemUvbGlzdHZpZXctYXV0by1zaXplLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2hlYWRlci1mb290ZXIvYXV0by1zaXplL2xpc3R2aWV3LWF1dG8tc2l6ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaGVhZGVyLWZvb3Rlci9hdXRvLXNpemUvbGlzdHZpZXctYXV0by1zaXplLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaGVhZGVyLWZvb3Rlci9iaWctZm9vdGVyL2xpc3R2aWV3LWJpZy1mb290ZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaGVhZGVyLWZvb3Rlci9iaWctZm9vdGVyL2xpc3R2aWV3LWJpZy1mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2hlYWRlci1mb290ZXIvYmlnLWZvb3Rlci9saXN0dmlldy1iaWctZm9vdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaGVhZGVyLWZvb3Rlci9iaWctaGVhZGVyL2xpc3R2aWV3LWJpZy1oZWFkZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaGVhZGVyLWZvb3Rlci9iaWctaGVhZGVyL2xpc3R2aWV3LWJpZy1oZWFkZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2hlYWRlci1mb290ZXIvYmlnLWhlYWRlci9saXN0dmlldy1iaWctaGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaGVhZGVyLWZvb3Rlci9jaGFuZ2Utc2l6ZS1hdC1ydW50aW1lL2xpc3R2aWV3LWNoYW5nZS1zaXplLWF0LXJ1bnRpbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaGVhZGVyLWZvb3Rlci9jaGFuZ2Utc2l6ZS1hdC1ydW50aW1lL2xpc3R2aWV3LWNoYW5nZS1zaXplLWF0LXJ1bnRpbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2hlYWRlci1mb290ZXIvY2hhbmdlLXNpemUtYXQtcnVudGltZS9saXN0dmlldy1jaGFuZ2Utc2l6ZS1hdC1ydW50aW1lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaG9yaXpvbnRhbC13aXRoLXZhcmlhYmxlLWl0ZW0td2lkdGgvbGlzdHZpZXctaG9yaXpvbnRhbC13aXRoLXZhcmlhYmxlLWl0ZW0td2lkdGguY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaG9yaXpvbnRhbC13aXRoLXZhcmlhYmxlLWl0ZW0td2lkdGgvbGlzdHZpZXctaG9yaXpvbnRhbC13aXRoLXZhcmlhYmxlLWl0ZW0td2lkdGguY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2hvcml6b250YWwtd2l0aC12YXJpYWJsZS1pdGVtLXdpZHRoL2xpc3R2aWV3LWhvcml6b250YWwtd2l0aC12YXJpYWJsZS1pdGVtLXdpZHRoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1hbmltYXRpb25zL2xpc3R2aWV3LWl0ZW0tYW5pbWF0aW9ucy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLWFuaW1hdGlvbnMvbGlzdHZpZXctaXRlbS1hbmltYXRpb25zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLWFuaW1hdGlvbnMvbGlzdHZpZXctaXRlbS1hbmltYXRpb25zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ncmlkLW5vLWhlaWdodC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLWxheW91dHMvbGlzdHZpZXctaXRlbS1sYXlvdXRzLWdyaWQtbm8taGVpZ2h0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLWxheW91dHMvbGlzdHZpZXctaXRlbS1sYXlvdXRzLWdyaWQtbm8taGVpZ2h0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ncmlkLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tbGF5b3V0cy9saXN0dmlldy1pdGVtLWxheW91dHMtZ3JpZC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ncmlkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1saW5lYXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1saW5lYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tbGF5b3V0cy9saXN0dmlldy1pdGVtLWxheW91dHMtbGluZWFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ydW50aW1lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tbGF5b3V0cy9saXN0dmlldy1pdGVtLWxheW91dHMtcnVudGltZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ydW50aW1lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1zdGFnZ2VyZWQuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1zdGFnZ2VyZWQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tbGF5b3V0cy9saXN0dmlldy1pdGVtLWxheW91dHMtc3RhZ2dlcmVkLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1sb2FkaW5nL2xpc3R2aWV3LWl0ZW0tbG9hZGluZy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLWxvYWRpbmcvbGlzdHZpZXctaXRlbS1sb2FkaW5nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLWxvYWRpbmcvbGlzdHZpZXctaXRlbS1sb2FkaW5nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1yZW9yZGVyL2xpc3R2aWV3LWl0ZW0tcmVvcmRlci1oYW5kbGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1yZW9yZGVyL2xpc3R2aWV3LWl0ZW0tcmVvcmRlci1oYW5kbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tcmVvcmRlci9saXN0dmlldy1pdGVtLXJlb3JkZXItaGFuZGxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1yZW9yZGVyL2xpc3R2aWV3LWl0ZW0tcmVvcmRlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLXJlb3JkZXIvbGlzdHZpZXctaXRlbS1yZW9yZGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLXJlb3JkZXIvbGlzdHZpZXctaXRlbS1yZW9yZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24tbXVsdGlwbGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24tbXVsdGlwbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tc2VsZWN0aW9uL2xpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLW11bHRpcGxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24tcHJvZ3JhbW1hdGljLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tc2VsZWN0aW9uL2xpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLXByb2dyYW1tYXRpYy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24tcHJvZ3JhbW1hdGljLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tc2VsZWN0aW9uL2xpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vc3R5bGluZy1pdGVtLXNlbGVjdGlvbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLXNlbGVjdGlvbi9zdHlsaW5nLWl0ZW0tc2VsZWN0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9pdGVtLXNlbGVjdGlvbi9zdHlsaW5nLWl0ZW0tc2VsZWN0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vc3R5bGluZy1zZWxlY3Rpb24tbXVsdGlwbGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZWxlY3Rpb24vc3R5bGluZy1zZWxlY3Rpb24tbXVsdGlwbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tc2VsZWN0aW9uL3N0eWxpbmctc2VsZWN0aW9uLW11bHRpcGxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZXBhcmF0b3IvbGlzdHZpZXctaXRlbS1zZXBhcmF0b3IuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvaXRlbS1zZXBhcmF0b3IvbGlzdHZpZXctaXRlbS1zZXBhcmF0b3IuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2l0ZW0tc2VwYXJhdG9yL2xpc3R2aWV3LWl0ZW0tc2VwYXJhdG9yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5yb3V0aW5nLnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9sb2FkLW9uLWRlbWFuZC9keW5hbWljLXNpemUtYXV0by9saXN0dmlldy1keW5hbWljLXNpemUtYXV0by5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9sb2FkLW9uLWRlbWFuZC9keW5hbWljLXNpemUtYXV0by9saXN0dmlldy1keW5hbWljLXNpemUtYXV0by5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvbG9hZC1vbi1kZW1hbmQvZHluYW1pYy1zaXplLWF1dG8vbGlzdHZpZXctZHluYW1pYy1zaXplLWF1dG8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9sb2FkLW9uLWRlbWFuZC9keW5hbWljLXNpemUtbWFudWFsL2xpc3R2aWV3LWR5bmFtaWMtc2l6ZS1tYW51YWwuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvbG9hZC1vbi1kZW1hbmQvZHluYW1pYy1zaXplLW1hbnVhbC9saXN0dmlldy1keW5hbWljLXNpemUtbWFudWFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9sb2FkLW9uLWRlbWFuZC9keW5hbWljLXNpemUtbWFudWFsL2xpc3R2aWV3LWR5bmFtaWMtc2l6ZS1tYW51YWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9sb2FkLW9uLWRlbWFuZC9maXhlZC1zaXplLWF1dG8td2l0aC1zbWFsbC1zb3VyY2UvbGlzdHZpZXctZml4ZWQtc2l6ZS1hdXRvLXdpdGgtc21hbGwtc291cmNlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2xvYWQtb24tZGVtYW5kL2ZpeGVkLXNpemUtYXV0by13aXRoLXNtYWxsLXNvdXJjZS9saXN0dmlldy1maXhlZC1zaXplLWF1dG8td2l0aC1zbWFsbC1zb3VyY2UuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2xvYWQtb24tZGVtYW5kL2ZpeGVkLXNpemUtYXV0by13aXRoLXNtYWxsLXNvdXJjZS9saXN0dmlldy1maXhlZC1zaXplLWF1dG8td2l0aC1zbWFsbC1zb3VyY2UuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9sb2FkLW9uLWRlbWFuZC9maXhlZC1zaXplLWF1dG8vbGlzdHZpZXctZml4ZWQtc2l6ZS1hdXRvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2xvYWQtb24tZGVtYW5kL2ZpeGVkLXNpemUtYXV0by9saXN0dmlldy1maXhlZC1zaXplLWF1dG8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL2xvYWQtb24tZGVtYW5kL2ZpeGVkLXNpemUtYXV0by9saXN0dmlldy1maXhlZC1zaXplLWF1dG8uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9sb2FkLW9uLWRlbWFuZC9maXhlZC1zaXplLW1hbnVhbC9saXN0dmlldy1maXhlZC1zaXplLW1hbnVhbC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9sb2FkLW9uLWRlbWFuZC9maXhlZC1zaXplLW1hbnVhbC9saXN0dmlldy1maXhlZC1zaXplLW1hbnVhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvbG9hZC1vbi1kZW1hbmQvZml4ZWQtc2l6ZS1tYW51YWwvbGlzdHZpZXctZml4ZWQtc2l6ZS1tYW51YWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9tb2NrLWRhdGFJdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvbXVsdGlwbGUtb3BlcmF0aW9ucy13aXRoLXN3aXBlL2xpc3R2aWV3LW11bHRpcGxlLW9wZXJhdGlvbnMtd2l0aC1zd2lwZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9tdWx0aXBsZS1vcGVyYXRpb25zLXdpdGgtc3dpcGUvbGlzdHZpZXctbXVsdGlwbGUtb3BlcmF0aW9ucy13aXRoLXN3aXBlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9tdWx0aXBsZS1vcGVyYXRpb25zLXdpdGgtc3dpcGUvbGlzdHZpZXctbXVsdGlwbGUtb3BlcmF0aW9ucy13aXRoLXN3aXBlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvbXVsdGlwbGUtb3BlcmF0aW9ucy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtbXVsdGlwbGUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvbXVsdGlwbGUtb3BlcmF0aW9ucy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtbXVsdGlwbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL211bHRpcGxlLW9wZXJhdGlvbnMvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLW11bHRpcGxlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvbXVsdGlwbGUtdGVtcGxhdGVzL2xpc3R2aWV3LW11bHRpcGxlLXRlbXBsYXRlcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9tdWx0aXBsZS10ZW1wbGF0ZXMvbGlzdHZpZXctbXVsdGlwbGUtdGVtcGxhdGVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9tdWx0aXBsZS10ZW1wbGF0ZXMvbGlzdHZpZXctbXVsdGlwbGUtdGVtcGxhdGVzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvb2JzZXJ2YWJsZS1hcnJheS9saXN0dmlldy1vYnNlcnZhYmxlLWFycmF5LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL29ic2VydmFibGUtYXJyYXkvbGlzdHZpZXctb2JzZXJ2YWJsZS1hcnJheS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvb2JzZXJ2YWJsZS1hcnJheS9saXN0dmlldy1vYnNlcnZhYmxlLWFycmF5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvcHVsbC10by1yZWZyZXNoL2N1c3RvbWl6ZS9saXN0dmlldy1wdWxsLXRvLXJlZnJlc2gtY3VzdG9taXplLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3B1bGwtdG8tcmVmcmVzaC9jdXN0b21pemUvbGlzdHZpZXctcHVsbC10by1yZWZyZXNoLWN1c3RvbWl6ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvcHVsbC10by1yZWZyZXNoL2N1c3RvbWl6ZS9saXN0dmlldy1wdWxsLXRvLXJlZnJlc2gtY3VzdG9taXplLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvcHVsbC10by1yZWZyZXNoL2dldHRpbmctc3RhcnRlZC9saXN0dmlldy1wdWxsLXRvLXJlZnJlc2guY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvcHVsbC10by1yZWZyZXNoL2dldHRpbmctc3RhcnRlZC9saXN0dmlldy1wdWxsLXRvLXJlZnJlc2guY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3B1bGwtdG8tcmVmcmVzaC9nZXR0aW5nLXN0YXJ0ZWQvbGlzdHZpZXctcHVsbC10by1yZWZyZXNoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvc2Nyb2xsLWV2ZW50cy9saXN0dmlldy1zY3JvbGwtZXZlbnRzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3Njcm9sbC1ldmVudHMvbGlzdHZpZXctc2Nyb2xsLWV2ZW50cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvc2Nyb2xsLWV2ZW50cy9saXN0dmlldy1zY3JvbGwtZXZlbnRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvc2Nyb2xsLXRvLWluZGV4L2xpc3R2aWV3LXNjcm9sbC10by1pbmRleC1ob3Jpem9udGFsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9zY3JvbGwtdG8taW5kZXgvbGlzdHZpZXctc2Nyb2xsLXRvLWluZGV4LWhvcml6b250YWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9zY3JvbGwtdG8taW5kZXgvbGlzdHZpZXctc2Nyb2xsLXRvLWluZGV4LWluaXRpYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtaW5pdGlhbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtdmVydGljYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtdmVydGljYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9zY3JvbGwtdG8taW5kZXgvbGlzdHZpZXctc2Nyb2xsLXRvLWluZGV4LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3NlbGVjdGlvbi1zdGF0ZXMvbGlzdHZpZXctc2VsZWN0aW9uLXN0YXRlcy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9zZWxlY3Rpb24tc3RhdGVzL2xpc3R2aWV3LXNlbGVjdGlvbi1zdGF0ZXMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3NlbGVjdGlvbi1zdGF0ZXMvbGlzdHZpZXctc2VsZWN0aW9uLXN0YXRlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3NvcnRpbmcvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLXNvcnRpbmcuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvc29ydGluZy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtc29ydGluZy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvZXhhbXBsZXMvc29ydGluZy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtc29ydGluZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtYWN0aW9ucy1tdWx0aXBsZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9zd2lwZS1hY3Rpb25zL2xpc3R2aWV3LXN3aXBlLWFjdGlvbnMtbXVsdGlwbGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtYWN0aW9ucy1tdWx0aXBsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtYWN0aW9ucy10aHJlc2hvbGRzLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtYWN0aW9ucy10aHJlc2hvbGRzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9zd2lwZS1hY3Rpb25zL2xpc3R2aWV3LXN3aXBlLWFjdGlvbnMtdGhyZXNob2xkcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtYWN0aW9ucy5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9zd2lwZS1hY3Rpb25zL2xpc3R2aWV3LXN3aXBlLWFjdGlvbnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtYWN0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtZGlzYWJsZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy9zd2lwZS1hY3Rpb25zL2xpc3R2aWV3LXN3aXBlLWRpc2FibGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtZGlzYWJsZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3dpdGgtYmlnLWRhdGEvbGlzdHZpZXctd2l0aC1iaWctZGF0YS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9leGFtcGxlcy93aXRoLWJpZy1kYXRhL2xpc3R2aWV3LXdpdGgtYmlnLWRhdGEuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2V4YW1wbGVzL3dpdGgtYmlnLWRhdGEvbGlzdHZpZXctd2l0aC1iaWctZGF0YS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL29wdGlvbnMtZXhhbXBsZS1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF5Qyw4QkFBOEIsdUJBQXVCLHNCQUFzQixHQUFHLHdCQUF3QixnREFBZ0QsbUJBQW1CLHFCQUFxQix3QkFBd0IsdUJBQXVCLHdCQUF3QixHQUFHLEM7Ozs7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QixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN4TCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN4TCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN4TCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN4TCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN4TCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsMkJBQTJCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRTtJQUN4TCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFB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SUFDTCx5QkFBQztBQUFELENBQUMsQ0FkdUMsMkVBQVUsR0FjakQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIubGlzdEl0ZW1UZW1wbGF0ZUdyaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyO1xcbn1cXG5cXG4ubGFiZWxzU3RhY2tMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ5LCAxMDQsIDE3NywgMC43KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogODtcXG4gICAgcGFkZGluZy1ib3R0b206IDg7XFxuICAgIHBhZGRpbmctbGVmdDogMTY7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdEl0ZW1UZW1wbGF0ZUdyaWRcXFwiPlxcbiAgICA8TlNJbWcgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiIGhlaWdodD1cXFwiMjAwXFxcIiBpb3M6c3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9OU0ltZz5cXG4gICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxhYmVsc1N0YWNrTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLnRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2N1c3RvbS1pbWFnZS10ZW1wbGF0ZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJ2N1c3RvbS1pbWFnZS10ZW1wbGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2N1c3RvbS1pbWFnZS10ZW1wbGF0ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDdXN0b21JbWFnZVRlbXBsYXRlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoJ2l0ZW0nKSBpdGVtOiBEYXRhSXRlbTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnN3aXBlLWxhYmVsIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxMYWJlbCB0ZXh0PVxcXCJTd2lwZSB0ZW1wbGF0ZVxcXCIgY2xhc3M9XFxcInN3aXBlLWxhYmVsXFxcIj48L0xhYmVsPj5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2N1c3RvbS1zd2lwZS10ZW1wbGF0ZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJ2N1c3RvbS1zd2lwZS10ZW1wbGF0ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2N1c3RvbS1zd2lwZS10ZW1wbGF0ZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDdXN0b21Td2lwZVRlbXBsYXRlQ29tcG9uZW50IHtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiUmFkTGlzdFZpZXcge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0yO1xcbn1cXG5cXG4ubGlzdEl0ZW1UZW1wbGF0ZUdyaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyO1xcbn1cXG5cXG4ubGFiZWxzU3RhY2tMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgcGFkZGluZy10b3A6IDg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHN3aXBlQWN0aW9ucz1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8Y3VzdG9tLWltYWdlLXRlbXBsYXRlIFtpdGVtXT1cXFwiaXRlbVxcXCI+PC9jdXN0b20taW1hZ2UtdGVtcGxhdGU+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgKnRrTGlzdEl0ZW1Td2lwZVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDxjdXN0b20tc3dpcGUtdGVtcGxhdGU+PC9jdXN0b20tc3dpcGUtdGVtcGxhdGU+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IExpc3RWaWV3TGluZWFyTGF5b3V0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1jb21wLXRlbXBsYXRlXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1jb21wLXRlbXBsYXRlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1jb21wLXRlbXBsYXRlLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdHZpZXdDb21wVGVtcGxhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXRMaXN0SXRlbXNGcm9tSnNvbigpKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEQVRBSVRFTVMgfSBmcm9tIFwiLi9tb2NrLWRhdGFJdGVtc1wiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi9kYXRhSXRlbVwiO1xuY29uc3QgbmFtZXNBbmRFbWFpbHMgPSByZXF1aXJlKFwiLi9OYW1lc0FuZEVtYWlscy5qc29uXCIpO1xuY29uc3QgcG9zdHMgPSByZXF1aXJlKFwiLi9wb3N0cy5qc29uXCIpO1xuY29uc3QgbGlzdEl0ZW1zID0gcmVxdWlyZShcIi4vaXRlbS1sYXlvdXRzL2xpc3RJdGVtcy5qc29uXCIpO1xuXG5jb25zdCBHRU5FUkFURURfSVRFTVNfQ09VTlQgPSA1MDtcbmNvbnN0IEdST1VQU19DT1VOVCA9IDM7XG5jb25zdCBTUEVDSUFMX0lURU1fSU5URVJWQUwgPSA0O1xuY29uc3QgZ2VuZXJhdGVJdGVtcyA9ICgpID0+IHtcbiAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IEdFTkVSQVRFRF9JVEVNU19DT1VOVDsgaSsrKSB7XG4gICAgICAgIGl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGkgJSBTUEVDSUFMX0lURU1fSU5URVJWQUwgPT09IDAgPyBgU3BlY2lhbCBJdGVtICR7aX1gIDogYEl0ZW0gJHtpfWAsXG4gICAgICAgICAgICBgVGhpcyBpcyBhbiBpdGVtLCBjYXRlZ29yeSBpczogQ2F0ZWdvcnkgJHtpICUgR1JPVVBTX0NPVU5UfWAsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBgQ2F0ZWdvcnkgJHtpICUgR1JPVVBTX0NPVU5UfWBcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1zO1xufTtcblxuY29uc3QgaXRlbXM6IERhdGFJdGVtW10gPSBnZW5lcmF0ZUl0ZW1zKCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhSXRlbVNlcnZpY2Uge1xuICAgIHByaXZhdGUgX3dvcmRzID0gW1wiT25lXCIsIFwiVHdvXCIsIFwiVGhyZWVcIiwgXCJGb3VyXCIsIFwiRml2ZVwiLCBcIlNpeFwiLCBcIlNldmVuXCIsIFwiRWlnaHRcIiwgXCJOaW5lXCIsIFwiVGVuXCJdO1xuXG4gICAgZ2V0RGF0YUl0ZW1zKCk6IERhdGFJdGVtW10ge1xuICAgICAgICByZXR1cm4gREFUQUlURU1TO1xuICAgIH1cblxuICAgIGdldElkZW50aWNhbERhdGFJdGVtcyhzaXplOiBudW1iZXIpOiBEYXRhSXRlbVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PERhdGFJdGVtPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IERhdGFJdGVtKGksIFwiSXRlbSBcIiArIGksIFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uLlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldFBlcnNvbkRhdGFJdGVtcygpOiBEYXRhSXRlbVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PERhdGFJdGVtPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzQW5kRW1haWxzLm5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChuZXcgRGF0YUl0ZW0oaSwgbmFtZXNBbmRFbWFpbHMubmFtZXNbaV0sIFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0TmFtZUVtYWlsRGF0YUl0ZW1zKCk6IERhdGFJdGVtW10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNBbmRFbWFpbHMubmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBEYXRhSXRlbShpLCBuYW1lc0FuZEVtYWlscy5uYW1lc1tpXSwgbmFtZXNBbmRFbWFpbHMuZW1haWxzW2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldFBvc3REYXRhSXRlbXMoKTogRGF0YUl0ZW1bXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxEYXRhSXRlbT4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5uYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0TGlzdEl0ZW1zRnJvbUpzb24oKTogRGF0YUl0ZW1bXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxEYXRhSXRlbT4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0SXRlbXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBEYXRhSXRlbShpLCBsaXN0SXRlbXMuaXRlbXNbaV0uYXV0aG9yLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBsaXN0SXRlbXMuaXRlbXNbaV0udGl0bGUsIGxpc3RJdGVtcy5pdGVtc1tpXS5jYXRlZ29yeSwgbGlzdEl0ZW1zLml0ZW1zW2ldLnBob3RvKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldFN0YWdnZXJlZEl0ZW1zKCk6IERhdGFJdGVtW10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTA7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IERhdGFJdGVtKGksIFwiSXRlbSBcIiArIGksIHRoaXMuZ2V0UmFuZG9tTGVuZ3RoU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG5cbiAgICBnZXREYXRhT3BlcmF0aW9uc0l0ZW1zKCk6IERhdGFJdGVtW10ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IERhdGFJdGVtKDg5LCBcIlNwZWNpYWwgSXRlbSA4OVwiLCBcIlRoaXMgaXMgaXRlbSBjYXRlZ29yeSBpczogQ2F0ZWdvcnkgMVwiLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSwgbnVsbCwgXCJDYXRlZ29yeSAxXCIpLFxuICAgICAgICAgICAgbmV3IERhdGFJdGVtKDIzLCBcIkl0ZW0gMjNcIiwgXCJUaGlzIGlzIGl0ZW0gY2F0ZWdvcnkgaXM6IENhdGVnb3J5IDJcIiwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UsIG51bGwsIFwiQ2F0ZWdvcnkgMlwiKSxcbiAgICAgICAgICAgIG5ldyBEYXRhSXRlbSgxLCBcIkl0ZW0gMVwiLCBcIlRoaXMgaXMgaXRlbSBjYXRlZ29yeSBpczogQ2F0ZWdvcnkgMVwiLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSwgbnVsbCwgXCJDYXRlZ29yeSAxXCIpLFxuICAgICAgICAgICAgbmV3IERhdGFJdGVtKDM0LCBcIkl0ZW0gMzRcIiwgXCJUaGlzIGlzIGl0ZW0gY2F0ZWdvcnkgaXM6IENhdGVnb3J5IDNcIiwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UsIG51bGwsIFwiQ2F0ZWdvcnkgM1wiKSxcbiAgICAgICAgICAgIG5ldyBEYXRhSXRlbSg1NSwgXCJTcGVjaWFsIEl0ZW0gNTVcIiwgXCJUaGlzIGlzIGl0ZW0gY2F0ZWdvcnkgaXM6IENhdGVnb3J5IDNcIiwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UsIG51bGwsIFwiQ2F0ZWdvcnkgM1wiKSxcbiAgICAgICAgICAgIG5ldyBEYXRhSXRlbSg3OCwgXCJJdGVtIDc4XCIsIFwiVGhpcyBpcyBpdGVtIGNhdGVnb3J5IGlzOiBDYXRlZ29yeSAxXCIsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlLCBudWxsLCBcIkNhdGVnb3J5IDFcIiksXG4gICAgICAgICAgICBuZXcgRGF0YUl0ZW0oNSwgXCJJdGVtIDVcIiwgXCJUaGlzIGlzIGl0ZW0gY2F0ZWdvcnkgaXM6IENhdGVnb3J5IDFcIiwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UsIG51bGwsIFwiQ2F0ZWdvcnkgMVwiKSxcbiAgICAgICAgICAgIG5ldyBEYXRhSXRlbSgxMTEsIFwiU3BlY2lhbCBJdGVtIDExMVwiLCBcIlRoaXMgaXMgaXRlbSBjYXRlZ29yeSBpczogQ2F0ZWdvcnkgMlwiLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSwgbnVsbCwgXCJDYXRlZ29yeSAyXCIpLFxuICAgICAgICAgICAgbmV3IERhdGFJdGVtKDY2NSwgXCJTcGVjaWFsIEl0ZW0gNjY1XCIsIFwiVGhpcyBpcyBpdGVtIGNhdGVnb3J5IGlzOiBDYXRlZ29yeSAyXCIsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlLCBudWxsLCBcIkNhdGVnb3J5IDJcIiksXG4gICAgICAgICAgICBuZXcgRGF0YUl0ZW0oMTEzNCwgXCJJdGVtIDExMzRcIiwgXCJUaGlzIGlzIGl0ZW0gY2F0ZWdvcnkgaXM6IENhdGVnb3J5IDFcIiwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UsIG51bGwsIFwiQ2F0ZWdvcnkgMVwiKSxcbiAgICAgICAgICAgIG5ldyBEYXRhSXRlbSgyMiwgXCJTcGVjaWFsIEl0ZW0gMjJcIiwgXCJUaGlzIGlzIGl0ZW0gY2F0ZWdvcnkgaXM6IENhdGVnb3J5IDNcIiwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UsIG51bGwsIFwiQ2F0ZWdvcnkgM1wiKSxcbiAgICAgICAgICAgIG5ldyBEYXRhSXRlbSgzNDUsIFwiSXRlbSAzNDVcIiwgXCJUaGlzIGlzIGl0ZW0gY2F0ZWdvcnkgaXM6IENhdGVnb3J5IDFcIiwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UsIG51bGwsIFwiQ2F0ZWdvcnkgMVwiKSxcbiAgICAgICAgICAgIG5ldyBEYXRhSXRlbSg4MCwgXCJJdGVtIDgwXCIsIFwiVGhpcyBpcyBpdGVtIGNhdGVnb3J5IGlzOiBDYXRlZ29yeSAxXCIsIG51bGwsIG51bGwsIG51bGwsIGZhbHNlLCBudWxsLCBcIkNhdGVnb3J5IDFcIiksXG4gICAgICAgICAgICBuZXcgRGF0YUl0ZW0oNTQsIFwiSXRlbSA1NFwiLCBcIlRoaXMgaXMgaXRlbSBjYXRlZ29yeSBpczogQ2F0ZWdvcnkgM1wiLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSwgbnVsbCwgXCJDYXRlZ29yeSAzXCIpLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIGdldEdlbmVyYXRlZERhdGFPcGVyYXRpb25zSXRlbXMoKTogRGF0YUl0ZW1bXSB7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0R3JvdXBlZEluZGV4T2ZTaXplKHNpemU6IG51bWJlcikge1xuICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIFwiaXRlbSBcIiArIGksIFwiZGVzY3JpcHRpb24gXCIgKyBpLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSwgbnVsbCwgaSAlIDIgPT09IDAgPyBcIkdyb3VwIDFcIiA6IFwiR3JvdXAgMlwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0VmFyaWFibGVXaWR0aEl0ZW1zKCk6IERhdGFJdGVtW10ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IERhdGFJdGVtKGksIFwiSXRlbSBcIiArIGksIFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uLlwiLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSwgbnVsbCwgbnVsbCwgMjAwLCBcImdyZWVuXCIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IERhdGFJdGVtKGksIFwiSXRlbSBcIiArIGksIFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uLlwiLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSwgbnVsbCwgbnVsbCwgMTAwLCBcInJlZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmFuZG9tTGVuZ3RoU3RyaW5nKCkge1xuICAgICAgICBjb25zdCBzZW50ZW5jZUxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiAxNSkpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fd29yZHNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VudGVuY2VMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICh0aGlzLl93b3Jkc1tpICUgdGhpcy5fd29yZHMubGVuZ3RoXSArIFwiIFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCIvLyA+PiBsaXN0dmlldy1hbmd1bGFyLWRhdGEtaXRlbVxuZXhwb3J0IGNsYXNzIERhdGFJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgZGVzY3JpcHRpb24/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0aXRsZT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIHRleHQ/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBpbWFnZT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIHNlbGVjdGVkPzogYm9vbGVhbixcbiAgICAgICAgcHVibGljIHR5cGU/OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjYXRlZ29yeT86IHN0cmluZyxcbiAgICAgICAgcHVibGljIHNpemU/OiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBjb2xvcj86IHN0cmluZykge1xuICAgIH1cbn1cbi8vIDw8IGxpc3R2aWV3LWFuZ3VsYXItZGF0YS1pdGVtIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24gcm93cz1cXFwiYXV0bywgKlxcXCI+XFxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICA8QnV0dG9uIFt0ZXh0XT1cXFwiaXNFbmFibGVkID8gJ0Rpc2FibGUgZmlsdGVyaW5nJyA6ICdFbmFibGUgZmlsdGVyaW5nJ1xcXCIgKHRhcCk9XFxcInRvZ2dsZUZpbHRlcigpXFxcIj48L0J1dHRvbj5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgcm93PVxcXCIxXFxcIiAjbXlMaXN0VmlldyBbZmlsdGVyaW5nRnVuY3Rpb25dPVxcXCJteUZpbHRlcmluZ0Z1bmNcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZmlsdGVyaW5nXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZmlsdGVyaW5nLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZmlsdGVyaW5nLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0ZpbHRlcmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX2lzRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9teUZpbHRlcmluZ0Z1bmM6IChpdGVtOiBhbnkpID0+IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgICAgICAvLyA+PiBsaXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZmlsdGVyaW5nLWFuZ3VsYXJcbiAgICAgICAgdGhpcy5teUZpbHRlcmluZ0Z1bmMgPSAoaXRlbTogRGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtICYmIGl0ZW0ubmFtZS5pbmNsdWRlcyhcIlNwZWNpYWwgSXRlbVwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gPDwgbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWZpbHRlcmluZy1hbmd1bGFyXG4gICAgICAgIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IGlzRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0VuYWJsZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXlGaWx0ZXJpbmdGdW5jKCk6IChpdGVtOiBhbnkpID0+IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9teUZpbHRlcmluZ0Z1bmM7XG4gICAgfVxuXG4gICAgc2V0IG15RmlsdGVyaW5nRnVuYyh2YWx1ZTogKGl0ZW06IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMuX215RmlsdGVyaW5nRnVuYyA9IHZhbHVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXREYXRhT3BlcmF0aW9uc0l0ZW1zKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVGaWx0ZXIoKSB7XG4gICAgICAgIGxldCBsaXN0VmlldyA9IHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0VmlldztcbiAgICAgICAgaWYgKCFsaXN0Vmlldy5maWx0ZXJpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgbGlzdFZpZXcuZmlsdGVyaW5nRnVuY3Rpb24gPSB0aGlzLm15RmlsdGVyaW5nRnVuYztcbiAgICAgICAgICAgIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RWaWV3LmZpbHRlcmluZ0Z1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmRlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4uYmlnLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTA7XFxufVxcblxcbi5tYXJnaW4tbGFiZWwge1xcbiAgICBtYXJnaW46IDEwXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uIHJvd3M9XFxcImF1dG8sIGF1dG8sICpcXFwiPlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcIm1hcmdpbi1sYWJlbFxcXCIgW3RleHRdPVxcXCInRmlyc3QgdmlzaWJsZSBpdGVtOiAnICsgZmlyc3RWaXNpYmxlSW5kZXhcXFwiPjwvTGFiZWw+XFxuICAgIDxCdXR0b24gcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYmlnLWJ1dHRvblxcXCIgdGV4dD1cXFwiR2V0IGZpcnN0IHZpc2libGVcXFwiICh0YXApPVxcXCJnZXRGaXJzdFZpc2libGVQb3NpdGlvbigpXFxcIj48L0J1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3ICNteUxpc3Qgcm93PVxcXCIyXFxcIiBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCIgbGV0LW9kZD1cXFwib2RkXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBbYmFja2dyb3VuZENvbG9yXT1cXFwib2RkID8gJ2xpZ2h0Z3JlZW4nIDogJ2xpZ2h0Ymx1ZSdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstZmlyc3QtdmlzaWJsZS1pbmRleFwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwiZmlyc3QtdmlzaWJsZS1pbmRleC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiZmlyc3QtdmlzaWJsZS1pbmRleC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Rmlyc3RWaXNpYmxlSW5kZXhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9maXJzdFZpc2libGVJbmRleDogbnVtYmVyO1xuXG4gICAgQFZpZXdDaGlsZChcIm15TGlzdFwiLCB7IHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Q29tcDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0SWRlbnRpY2FsRGF0YUl0ZW1zKDEwMCkpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpcnN0VmlzaWJsZUluZGV4KCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBnZXQgZmlyc3RWaXNpYmxlSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4O1xuICAgIH1cblxuICAgIHNldCBmaXJzdFZpc2libGVJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpcnN0VmlzaWJsZVBvc2l0aW9uKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZpcnN0VmlzaWJsZUluZGV4KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgdmlzaWJsZSBpbmRleDpcIiwgdGhpcy5maXJzdFZpc2libGVJbmRleCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVGaXJzdFZpc2libGVJbmRleCgpIHtcbiAgICAgICAgdGhpcy5maXJzdFZpc2libGVJbmRleCA9IHRoaXMubXlMaXN0Q29tcC5uYXRpdmVFbGVtZW50LmdldEZpcnN0VmlzaWJsZVBvc2l0aW9uKCk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIubmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMFxcbn1cXG5cXG4uZGVzY3JpcHRpb25MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPExpc3RWaWV3TGluZWFyTGF5b3V0IHRrTGlzdFZpZXdMYXlvdXQgc2Nyb2xsRGlyZWN0aW9uPVxcXCJIb3Jpem9udGFsXFxcIj48L0xpc3RWaWV3TGluZWFyTGF5b3V0PlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctZ2V0dGluZy1zdGFydGVkLWhvcml6b250YWxcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWdldHRpbmctc3RhcnRlZC1ob3Jpem9udGFsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQtaG9yaXpvbnRhbC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRIb3Jpem9udGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldERhdGFJdGVtcygpKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSA+PiBsaXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQtYW5ndWxhci14bWwgLS0+XFxuPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcbjwhLS0gPDwgbGlzdHZpZXctZ2V0dGluZy1zdGFydGVkLWFuZ3VsYXIteG1sIC0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWRcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWdldHRpbmctc3RhcnRlZC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5jc3NcIl1cbn0pXG4vLyA+PiBsaXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQtYW5ndWxhclxuZXhwb3J0IGNsYXNzIExpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0RGF0YUl0ZW1zKCkpO1xuICAgIH1cbn1cbi8vIDw8IGxpc3R2aWV3LWdldHRpbmctc3RhcnRlZC1hbmd1bGFyIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUxMX1BPU1RTIH0gZnJvbSBcIi4vbW9jay1ibG9nc1wiO1xuaW1wb3J0IHsgQmxvZ1Bvc3QgfSBmcm9tIFwiLi9ibG9nLXBvc3RcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJsb2dQb3N0c1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2ZpcnN0VG9Mb2FkID0gNTtcbiAgICBwcml2YXRlIF9uZXh0VG9Mb2FkO1xuICAgIHByaXZhdGUgX25vdzogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9ub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFMTF9QT1NUUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGU7XG4gICAgICAgICAgICBpZiAoaSA8IEFMTF9QT1NUUy5sZW5ndGggLyAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IGkgPCB0aGlzLl9maXJzdFRvTG9hZCA/IChpIC0gdGhpcy5fZmlyc3RUb0xvYWQpICogMzAwMCA6IChpIC0gdGhpcy5fZmlyc3RUb0xvYWQpICogMTAwMCAqIDYwICogNTA7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuX25vdy5nZXRUaW1lKCkgLSBvZmZzZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodGhpcy5fbm93LmdldEZ1bGxZZWFyKCksIHRoaXMuX25vdy5nZXRNb250aCgpLCB0aGlzLl9ub3cuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEFMTF9QT1NUU1tpXS5wdWJsaXNoRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICBBTExfUE9TVFNbaV0uZGVsZXRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmxvZ1Bvc3RzKGNvdW50OiBudW1iZXIsIHByb2NlZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gIG5ldyBBcnJheTxCbG9nUG9zdD4oKTtcbiAgICAgICAgbGV0IHN0YXJ0aW5nSW5kZXggPSBwcm9jZWVkID8gdGhpcy5fbmV4dFRvTG9hZCA6IHRoaXMuX2ZpcnN0VG9Mb2FkO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdJbmRleDsgaSA8IEFMTF9QT1NUUy5sZW5ndGggJiYgcmVzdWx0Lmxlbmd0aCA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXh0QmxvZ1Bvc3QgPSBBTExfUE9TVFNbaV07XG4gICAgICAgICAgICBpZiAoIW5leHRCbG9nUG9zdC5kZWxldGVkICYmIG5leHRCbG9nUG9zdC5wdWJsaXNoRGF0ZSA8PSB0aGlzLl9ub3cpIHtcbiAgICAgICAgICAgICAgICBuZXh0QmxvZ1Bvc3QucHVibGlzaFRleHQgPSB0aGlzLmRhdGVMYWJlbChuZXh0QmxvZ1Bvc3QucHVibGlzaERhdGUpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5leHRCbG9nUG9zdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9uZXh0VG9Mb2FkID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm9jZWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdFRvTG9hZCA9IHRoaXMuX2ZpcnN0VG9Mb2FkIDwgMSA/IDAgOiB0aGlzLl9maXJzdFRvTG9hZCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBtYXJrRGVsZXRlZChibG9nUG9zdDogQmxvZ1Bvc3QpIHtcbiAgICAgICAgYmxvZ1Bvc3QuZGVsZXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGF0ZUxhYmVsKGRhdGUpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMuaXNUb2RheShkYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiWWVzdGVyZGF5XCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRpZmZJbk1pbGxpc2Vjb25kcyA9IHRoaXMuX25vdy5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihkaWZmSW5NaWxsaXNlY29uZHMgLyAoNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgbGV0IHRleHQgPSAnJztcbiAgICAgICAgaWYgKGhvdXJzID4gMCkge1xuICAgICAgICAgICAgdGV4dCA9IGhvdXJzID4gMSA/IGhvdXJzICsgJyBob3VycyAnIDogaG91cnMgPT09IDEgPyAnMSBob3VyICcgOiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihkaWZmSW5NaWxsaXNlY29uZHMgLyAoNjAgKiAxMDAwKSk7XG4gICAgICAgICAgICBpZiAobWludXRlcyA+IDApIHtcbiAgICAgICAgICAgICAgICB0ZXh0ID0gbWludXRlcyA+IDEgPyBtaW51dGVzICsgJyBtaW51dGVzICcgOiBtaW51dGVzID09PSAxID8gJzEgbWludXRlICcgOiAnJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKGRpZmZJbk1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgICAgICAgICAgICAgIHRleHQgPSBzZWNvbmRzID4gMSA/IHNlY29uZHMgKyAnIHNlY29uZHMgJyA6IHNlY29uZHMgPT09IDEgPyAnMSBzZWNvbmQgJyA6ICcwIHNlY29uZHMgJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dCArICdhZ28nO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1RvZGF5KGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpID09PSB0aGlzLl9ub3cuZ2V0RGF0ZSgpICYmXG4gICAgICAgICAgICBkYXRlLmdldE1vbnRoKCkgPT09IHRoaXMuX25vdy5nZXRNb250aCgpICYmXG4gICAgICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRoaXMuX25vdy5nZXRGdWxsWWVhcigpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJibG9nUG9zdHNcXFwiICNteUxpc3RWaWV3XFxuICAgICAgICBbZ3JvdXBpbmdGdW5jdGlvbl09XFxcImdyb3VwQnlEYXlcXFwiXFxuICAgICAgICBwdWxsVG9SZWZyZXNoPVxcXCJ0cnVlXFxcIiAocHVsbFRvUmVmcmVzaEluaXRpYXRlZCk9XFxcIm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgbG9hZE9uRGVtYW5kTW9kZT1cXFwiTWFudWFsXFxcIiAobG9hZE1vcmVEYXRhUmVxdWVzdGVkKT1cXFwib25Mb2FkTW9yZURhdGFSZXF1ZXN0ZWQoJGV2ZW50KVxcXCIgXFxuICAgICAgICBzZWxlY3Rpb25CZWhhdmlvcj1cXFwiTm9uZVxcXCIgc3dpcGVBY3Rpb25zPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgKGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZCk9XFxcIm9uSXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkKCRldmVudClcXFwiIFxcbiAgICAgICAgKGl0ZW1Td2lwZVByb2dyZXNzQ2hhbmdlZCk9XFxcIm9uSXRlbVN3aXBlUHJvZ3Jlc3NDaGFuZ2VkKCRldmVudClcXFwiIFxcbiAgICAgICAgKGl0ZW1Td2lwZVByb2dyZXNzRW5kZWQpPVxcXCJvbkl0ZW1Td2lwZVByb2dyZXNzRW5kZWQoJGV2ZW50KVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgcGFkZGluZz1cXFwiMTZcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgYmFja2dyb3VuZD1cXFwiI0YwRjZGRlxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBmb250U2l6ZT1cXFwiMjRcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNvbG9yPVxcXCIjMEEyNTVBXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgcGFkZGluZz1cXFwiOCwwXFxcIiBbdGV4dF09XFxcIml0ZW0uY29udGVudFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNvbG9yPVxcXCIjQjNCNkM4XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLnB1Ymxpc2hUZXh0XFxcIiBjb2xvcj1cXFwiIzNENTdGRVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxHcmlkTGF5b3V0ICp0a0xpc3RJdGVtU3dpcGVUZW1wbGF0ZSBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBpZD1cXFwiY29tbWVudC12aWV3XFxcIiBjb2w9XFxcIjBcXFwiIGJhY2tncm91bmQ9XFxcIiMyMzQwQ0JcXFwiICh0YXApPVxcXCJvbkxlZnRTd2lwZUNsaWNrKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJjb21tZW50XFxcIiBwYWRkaW5nPVxcXCIxMlxcXCIgY29sb3I9XFxcIndoaXRlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgPEdyaWRMYXlvdXQgaWQ9XFxcImRlbGV0ZS12aWV3XFxcIiBjb2w9XFxcIjJcXFwiIGJhY2tncm91bmQ9XFxcIiMyMzQwQ0JcXFwiICh0YXApPVxcXCJvblJpZ2h0U3dpcGVDbGljaygkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiZGVsZXRlXFxcIiBwYWRkaW5nPVxcXCIxMlxcXCIgY29sb3I9XFxcIndoaXRlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSBcIi4vYmxvZy1wb3N0XCI7XG5pbXBvcnQgeyBCbG9nUG9zdHNTZXJ2aWNlIH0gZnJvbSBcIi4vYmxvZy1wb3N0cy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgTG9hZE9uRGVtYW5kTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctZ3JvdXAtc3dpcGUtbG9hZC1wdWxsXCIsXG4gICAgcHJvdmlkZXJzOiBbQmxvZ1Bvc3RzU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctZ3JvdXAtc3dpcGUtbG9hZC1wdWxsLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0dyb3VwU3dpcGVMb2FkUHVsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfYmxvZ1Bvc3RzOiBPYnNlcnZhYmxlQXJyYXk8QmxvZ1Bvc3Q+O1xuICAgIHByaXZhdGUgX3N0YXJ0SXRlbXNDb3VudCA9IDY7XG4gICAgcHJpdmF0ZSBfbG9hZE1vcmVJdGVtc0NvdW50ID0gMjtcbiAgICBwcml2YXRlIF9ncm91cEJ5RGF5OiAoaXRlbTogYW55KSA9PiBhbnk7XG5cbiAgICBAVmlld0NoaWxkKFwibXlMaXN0Vmlld1wiLCB7IHJlYWQ6IFJhZExpc3RWaWV3Q29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pIGxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Jsb2dQb3N0c1NlcnZpY2U6IEJsb2dQb3N0c1NlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgYmxvZ1Bvc3RzKCk6IE9ic2VydmFibGVBcnJheTxCbG9nUG9zdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmxvZ1Bvc3RzO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9ibG9nUG9zdHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2Jsb2dQb3N0c1NlcnZpY2UuZ2V0QmxvZ1Bvc3RzKHRoaXMuX3N0YXJ0SXRlbXNDb3VudCwgZmFsc2UpKTtcbiAgICAgICAgdGhpcy5fZ3JvdXBCeURheSA9IChpdGVtOiBCbG9nUG9zdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2dQb3N0c1NlcnZpY2UuaXNUb2RheShpdGVtLnB1Ymxpc2hEYXRlKSA/IFwiVG9kYXlcIiA6IFwiWWVzdGVyZGF5XCI7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IGdyb3VwQnlEYXkoKTogKGl0ZW06IGFueSkgPT4gYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3VwQnlEYXk7XG4gICAgfVxuXG4gICAgc2V0IGdyb3VwQnlEYXkodmFsdWU6IChpdGVtOiBhbnkpID0+IGFueSkge1xuICAgICAgICB0aGlzLl9ncm91cEJ5RGF5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2Jsb2dQb3N0cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fYmxvZ1Bvc3RzU2VydmljZS5nZXRCbG9nUG9zdHModGhpcy5fc3RhcnRJdGVtc0NvdW50LCBmYWxzZSkpO1xuICAgICAgICAgICAgY29uc3QgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCh0cnVlKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkTW9yZURhdGFSZXF1ZXN0ZWQoYXJnczogTG9hZE9uRGVtYW5kTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3SXRlbXMgPSB0aGlzLl9ibG9nUG9zdHNTZXJ2aWNlLmdldEJsb2dQb3N0cyh0aGlzLl9sb2FkTW9yZUl0ZW1zQ291bnQsIHRydWUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2dQb3N0cy5wdXNoKG5ld0l0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGxpc3RWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZChuZXdJdGVtcy5sZW5ndGggPCB0aGlzLl9sb2FkTW9yZUl0ZW1zQ291bnQpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgICAgY29uc3Qgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XG4gICAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPGFueT4oJ2NvbW1lbnQtdmlldycpO1xuICAgICAgICBjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8YW55PignZGVsZXRlLXZpZXcnKTtcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1Td2lwZVByb2dyZXNzQ2hhbmdlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1Td2lwZVByb2dyZXNzRW5kZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MZWZ0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDb21tZW50cyBhcmUgY3VycmVudGx5IGRpc2FibGVkLlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3MpIHtcbiAgICAgICAgbGV0IGl0ZW1WaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGxldCBjdXJyZW50QmxvZ1Bvc3QgPSA8QmxvZ1Bvc3Q+aXRlbVZpZXcuYmluZGluZ0NvbnRleHQ7XG4gICAgICAgIGxldCBjdXJyZW50QmxvZ1Bvc3RJbmRleCA9IHRoaXMuX2Jsb2dQb3N0cy5pbmRleE9mKGN1cnJlbnRCbG9nUG9zdCk7XG4gICAgICAgIHRoaXMuX2Jsb2dQb3N0cy5zcGxpY2UoY3VycmVudEJsb2dQb3N0SW5kZXgsIDEpO1xuICAgICAgICB0aGlzLl9ibG9nUG9zdHNTZXJ2aWNlLm1hcmtEZWxldGVkKGN1cnJlbnRCbG9nUG9zdCk7XG4gICAgfVxufSIsImltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSAnLi9ibG9nLXBvc3QnO1xuXG5leHBvcnQgY29uc3QgQUxMX1BPU1RTOiBCbG9nUG9zdFtdID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiR29pbmcgT2ZmbGluZSB3aXRoIE5hdGl2ZVNjcmlwdCBhbmQgS2ludmV5XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiTGVhcm4gaG93IHRvIHRha2UgeW91ciBOYXRpdmVTY3JpcHQgYXBwIG9mZmxpbmUgYnkgbGV2ZXJhZ2luZyB0aGUgYnVpbHQtaW4gY2FwYWJpbGl0aWVzIG9mIEtpbnZleS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJMYXRlc3QgTmF0aXZlU2NyaXB0IGlzIGhvdCBvdXQgb2YgdGhlIG92ZW4hXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiTGF0ZXN0IE5hdGl2ZVNjcmlwdCBpcyBoZXJlISBMZWFybiBhbGwgYWJvdXQgdGhlIGFtYXppbmcgZGV2ZWxvcGVyLWZvY3VzZWQgcHJvZHVjdGl2aXR5IGltcHJvdmVtZW50cyBsaWtlIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnQsIGEgbmV3IGludGVyYWN0aXZlIENMSSwgYW5kIHRoZSB0bnMgcHJldmlldyBjb21tYW5kIChhbGxvd2luZyB5b3UgdG8gc3RhcnQgZGV2ZWxvcGluZyBmb3IgaU9TIG9uIFdpbmRvd3MhKS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJIb3cgdG8gYWRkIEZpcmViYXNlIEFuYWx5dGljcyB0byB5b3VyIE5hdGl2ZVNjcmlwdCBNb2JpbGUgQXBwXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiQWRkaW5nIEFuYWx5dGljcyB0byB5b3VyIGFwcCBpcyBhbiBlZmZvcnQgdGhhdCB3b3J0aCBpbnZlc3RpbmcgaW4uIFdpdGgganVzdCBoYWxmIGFuIGhvdXIgb2Ygd29yaywgeW91IHdpbGwga25vdyB3aGF0IHlvdXIgdXNlcnMgbmVlZCwgaG93IGNhbiB5b3UgYWRkcmVzcyB0aGVpciBuZWVkcyBhbmQgd2hlcmUgdG8gaW52ZXN0IHlvdXIgcHJlY2lvdXMgZGV2ZWxvcG1lbnQgdGltZS4gTGVhcm4gaG93IHRvIHVzZSBGaXJlYmFzZSBBbmFseXRpY3Mgd2l0aCBOYXRpdmVTY3JpcHQgaW4gdGhpcyB0dXRvcmlhbC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJIb3cgdG8gQnVpbGQgYSBQV0EsIGFuIGlPUyBBcHAsIGFuZCBhbiBBbmRyb2lkIEFwcCAtIEZyb20gT25lIENvZGViYXNlXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiSW4gdGhpcyBhcnRpY2xlIEnigJlsbCBzaG93IHlvdSBjb2RlIHNoYXJpbmcgd2l0aCBOYXRpdmVTY3JpcHQgYW5kIEFuZ3VsYXIgd29ya3MuIFlvdeKAmWxsIGxlYXJuIHRoZSBzdGVwcyB5b3XigJlsbCBuZWVkIHRvIHRha2UgdG8gYnVpbGQgZm9yIGFsbCB0aHJlZSBwbGF0Zm9ybXMsIGFzIHdlbGwgYXMgc29tZSB0aXBzIGFuZCB0cmlja3MgSSBsZWFybmVkIGZyb20gZ29pbmcgdGhyb3VnaCB0aGlzIHByb2Nlc3MgbXlzZWxmLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkhvdyB0byBCdWlsZCBhIFNpbXBsZSBEaWFsb2cgZm9yIFlvdXIgTmF0aXZlU2NyaXB0IEFwcHNcIixcbiAgICAgICAgY29udGVudDogXCJUaGVyZSBhcmUgYSBmZXcgZGlmZmVyZW50IHdheXMgdG8gaW1wbGVtZW50IGRpYWxvZ3MgaW4gTmF0aXZlU2NyaXB0IGFwcHMuIEluIHRoaXMgYXJ0aWNsZSBJ4oCZbSBnb2luZyB0byB3YWxrIHlvdSB0aHJvdWdoIGhvdyB0byBjcmVhdGUgYSBzaW1wbGUgZGlhbG9nIHRoYXQgeW91IGNhbiBzdHlsZSB3aXRob3V0IGdvaW5nIHRocm91Z2ggdGhlIGhhc3NsZSBvZiBjcmVhdGluZyBhbiBlbnRpcmUgcGFnZS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJOYXRpdmVTY3JpcHQgRmlyc3QtVGltZSBDb250cmlidXRvcnMgQ29udGVzdFwiLFxuICAgICAgICBjb250ZW50OiBcIlRoZSBOYXRpdmVTY3JpcHQgdGVhbSBpcyB3ZWxjb21pbmcgZmlyc3QtdGltZSBjb250cmlidXRvcnMgdG8gdGhlIG9wZW4gc291cmNlIHdvcmxkISBDb250cmlidXRlIGEgZml4IHRvIGFueSBvZiB0aGUgTmF0aXZlU2NyaXB0IHJlcG9zaXRvcmllcyBvbiBHaXRIdWIgYW5kIGVhcm4gcmV3YXJkcyBkdXJpbmcgdGhlIG1vbnRoIG9mIE9jdG9iZXIuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVXNpbmcgQXp1cmUgQ29nbml0aXZlIFNlcnZpY2VzIHdpdGggTmF0aXZlU2NyaXB0XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiSXMgdGhlcmUgYW55IGRvdWJ0IHRoYXQgY29nbml0aXZlIGFwcHMgYXJlIHRoZSBmdXR1cmU/IExlYXJuIGhvdyB0byB1c2Ugc29tZSBvZiBNaWNyb3NvZnQgQXp1cmUncyBjb2duaXRpdmUgQVBJcyB3aXRoIGEgTmF0aXZlU2NyaXB0IGFwcCB0byBjcmVhdGUgYSBzaW1wbGUsIGJ1dCBlbmdhZ2luZywgYXBwIGV4cGVyaWVuY2UuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiVGhlIFBvd2VyKHMpIG9mIE5hdGl2ZVNjcmlwdCBhbmQgdGhlIE5hdGl2ZVNjcmlwdCBQbGF5Z3JvdW5kXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiSXQncyBwcmV0dHkgYW1hemluZyB3aGF0IHlvdSBjYW4gZG8gd2l0aCBqdXN0IGEgd2ViIGJyb3dzZXIgYW5kIHRoZSBOYXRpdmVTY3JpcHQgUGxheWdyb3VuZC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJVc2luZyBDdXN0b20gRm9udHMgaW4gYSBOYXRpdmVTY3JpcHQgQXBwXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiVXNpbmcgY3VzdG9tIGZvbnRzIGluIHlvdXIgTmF0aXZlU2NyaXB0IGFwcCBjYW4gcHJvdmlkZSBhIG11Y2gtbmVlZGVkIChhbmQgZWFzeSkgYm9vc3QgdG8gdGhlIGxvb2sgYW5kIGZlZWwgb2YgeW91ciBhcHAuIExlYXJuIHNvbWUgdGlwcyBhbmQgdHJpY2tzIHRvIGdldCBhIGdyZWF0LWxvb2tpbmcgZm9udCBpbiB5b3VyIGFwcC5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJNYWtlIEhUVFAgUmVxdWVzdHMgdG8gUmVtb3RlIFdlYiBTZXJ2aWNlcyBpbiBhIE5hdGl2ZVNjcmlwdC1WdWUgQXBwXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiTGVhcm4gaG93IHRvIG1ha2UgSFRUUCByZXF1ZXN0cyB0byByZW1vdGUgd2ViIHNlcnZpY2VzIGFuZCBBUElzIGluIGFuIEFuZHJvaWQgYW5kIGlPUyBhcHBsaWNhdGlvbiBidWlsdCB3aXRoIE5hdGl2ZVNjcmlwdCBhbmQgdGhlIFZ1ZS5qcyBKYXZhU2NyaXB0IGZyYW1ld29yay5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJSZW5kZXJsZXNzIENvbXBvbmVudHMgaW4gTmF0aXZlU2NyaXB0LVZ1ZVwiLFxuICAgICAgICBjb250ZW50OiBcIkxlYXJuIGFib3V0IFJlbmRlcmxlc3MgQ29tcG9uZW50cyBpbiBOYXRpdmVTY3JpcHQtVnVlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiTWVldCB0aGUgTmF0aXZlU2NyaXB0IEV4cGVydHMgYXQganNNb2JpbGVDb25mXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiQnVpbGRpbmcgb24gdGhlIHN1Y2Nlc3Mgb2YgdGhlIHBhc3QgdHdvIE5hdGl2ZVNjcmlwdCBEZXZlbG9wZXIgRGF5IGV2ZW50cywgd2UgYXJlIG5vdyBicmluZ2luZyB5b3UganNNb2JpbGVDb25mIC0gYSB0d28tZGF5LCB0d28tdHJhY2sgZXZlbnQgZm9jdXNlZCBvbiB0aGUgY3V0dGluZyBlZGdlIEphdmFTY3JpcHQgZWNvc3lzdGVtLiBDb21pbmcgaW4gT2N0b2JlciBmcm9tIEJvc3RvbiwgTUEsIHlvdSdsbCBmaW5kIHNlc3Npb25zIG9uIE5hdGl2ZVNjcmlwdCwgbWFjaGluZSBsZWFybmluZywgQUksIFNlcnZlcmxlc3MsIEJsb2NrY2hhaW4sIEFSL1ZSLCBhbmQgbW9yZS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJXaGF0IGlzIFNlcnZlcmxlc3MgYW5kIFdoeSBEb2VzIGl0IE1hdHRlcj9cIixcbiAgICAgICAgY29udGVudDogXCJXaGF0J3MgYWxsIHRoZSBmdXNzIG92ZXIgc2VydmVybGVzcyBhbmQgd2hhdCBkb2VzIGl0IGhhdmUgdG8gZG8gd2l0aCBtb2JpbGUgYXBwcz8gTGVhcm4gbW9yZSBpbiB0aGlzIGJsb2cgcG9zdCB0aGF0IGRpdmVzIGludG8gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBTYWFTLCBJYWFTLCBGYWFTLCBhbmQgUGFhUy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJCdWlsZGluZyBhIFNpbXBsZSBQcm9ncmVzc2JhciBmb3IgeW91ciBOYXRpdmVTY3JpcHQgQXBwXCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiUHJvZ3Jlc3NiYXJzIGFyZSBhIGNvbW1vbiB1c2VyIGludGVyZmFjZSBjb21wb25lbnQgcmVnYXJkbGVzcyBvZiBkZXZlbG9wbWVudCBwbGF0Zm9ybS4gSW4gdGhpcyBhcnRpY2xlIHdl4oCZbGwgbG9vayBhdCBob3cgeW91IGNhbiBlYXNpbHkgcmVjcmVhdGUgdGhpcyBVSSBjb21wb25lbnQgZm9yIHlvdXIgTmF0aXZlU2NyaXB0IGFwcHMsIGFuZCBsZWFybiBhIGJpdCBhYm91dCBOYXRpdmVTY3JpcHTigJlzIGxheW91dCBzeXN0ZW0gaW4gdGhlIHByb2Nlc3MuXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiSW5jbHVkZSBGZWF0dXJlLVJpY2ggTWFwcyBpbiBhIE5hdGl2ZVNjcmlwdC1WdWUgQXBwIHdpdGggTWFwYm94XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiTGVhcm4gaG93IHRvIHVzZSBNYXBib3ggaW4gYSBOYXRpdmVTY3JpcHQgYXBwbGljYXRpb24gdGhhdCB1c2VzIHRoZSBWdWUuanMgSmF2YVNjcmlwdCBmcmFtZXdvcmsgdG8gd29yayB3aXRoIGZlYXR1cmUgcmljaCBtYXBzLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJTZW5kaW5nIFRleHQgTWVzc2FnZXMgdG8gUGhvbmUgQ29udGFjdHMgdXNpbmcgTmF0aXZlU2NyaXB0XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiQSBicmllZiB0dXRvcmlhbCBvbiBob3cgdG8gcHVsbCBhIGNvbnRhY3QgZnJvbSB5b3VyIGlPUyBvciBBbmRyb2lkIGNvbnRhY3QgbGlzdCBpbnRvIGEgTmF0aXZlU2NyaXB0IGFwcCBhbmQgcHJlcGFyZSBhIHRleHQgbWVzc2FnZSBmb3IgZGVsaXZlcnkuXCJcbiAgICB9LFxuXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmRlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbiByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgcm93PVxcXCIxXFxcIiBbZ3JvdXBpbmdGdW5jdGlvbl09XFxcIm15R3JvdXBpbmdGdW5jXFxcIiBlbmFibGVDb2xsYXBzaWJsZUdyb3Vwcz1cXFwidHJ1ZVxcXCIgPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD4gXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZy1jb2xsYXBzaWJsZVwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLWNvbGxhcHNpYmxlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZ3JvdXBpbmctY29sbGFwc2libGUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0dmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdDb2xsYXBzaWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX215R3JvdXBpbmdGdW5jOiAoaXRlbTogYW55KSA9PiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgICAgICB0aGlzLm15R3JvdXBpbmdGdW5jID0gKGl0ZW06IERhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jYXRlZ29yeTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0RGF0YU9wZXJhdGlvbnNJdGVtcygpKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBteUdyb3VwaW5nRnVuYygpOiAoaXRlbTogYW55KSA9PiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXlHcm91cGluZ0Z1bmM7XG4gICAgfVxuXG4gICAgc2V0IG15R3JvdXBpbmdGdW5jKHZhbHVlOiAoaXRlbTogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5fbXlHcm91cGluZ0Z1bmMgPSB2YWx1ZTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qID4+IGxpc3R2aWV3LW11bHRpcGxlLXRlbXBsYXRlcy1hbmd1bGFyLWNzcyAqL1xcbi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDU7XFxufVxcblxcbi50eXBlTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE3O1xcbiAgICBtYXJnaW46IDU7XFxufVxcblxcbi5taWRkbGVMYWJlbHtcXG4gICAgbWFyZ2luOiAwIDUgMCA1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb25MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIG1hcmdpbjogNVxcbn1cXG5cXG4ueWVsbG93VGV4dCB7XFxuICBjb2xvcjogeWVsbG93OyAgXFxufVxcblxcbi53aGl0ZVRleHQge1xcbiAgY29sb3I6IHdoaXRlOyAgXFxufVxcblxcbi5ibGFja1RleHQge1xcbiAgY29sb3I6IGJsYWNrOyAgXFxufVxcblxcbi5ibGFja1N0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5yZWRTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdyZWVuU3RhY2tMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmJsdWVTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi55ZWxsb3dTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuLyogPDwgbGlzdHZpZXctbXVsdGlwbGUtdGVtcGxhdGVzLWFuZ3VsYXItY3NzICovXFxuXFxuLmdyb3VwTGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIHBhZGRpbmc6IDE1O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgW2l0ZW1UZW1wbGF0ZVNlbGVjdG9yXT1cXFwidGVtcGxhdGVTZWxlY3RvclxcXCIgW2dyb3VwaW5nRnVuY3Rpb25dPVxcXCJteUdyb3VwaW5nRnVuY1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLnR5cGVcXFwiIGNsYXNzPVxcXCJ0eXBlTGFiZWwgbWlkZGxlTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcblxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrVGVtcGxhdGVLZXk9XFxcInN0YXJ0XFxcIiBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcImJsYWNrU3RhY2tMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWwgeWVsbG93VGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS50eXBlXFxcIiBjbGFzcz1cXFwidHlwZUxhYmVsIHllbGxvd1RleHQgbWlkZGxlTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsIHllbGxvd1RleHRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtUZW1wbGF0ZUtleT1cXFwiUmVkXFxcIiBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcInJlZFN0YWNrTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsIHdoaXRlVGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS50eXBlXFxcIiBjbGFzcz1cXFwidHlwZUxhYmVsIHdoaXRlVGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a1RlbXBsYXRlS2V5PVxcXCJncmVlblxcXCIgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJncmVlblN0YWNrTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsIHdoaXRlVGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS50eXBlXFxcIiBjbGFzcz1cXFwidHlwZUxhYmVsIHdoaXRlVGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a1RlbXBsYXRlS2V5PVxcXCJCbHVlXFxcIiBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcImJsdWVTdGFja0xheW91dFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbCB3aGl0ZVRleHRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0udHlwZVxcXCIgY2xhc3M9XFxcInR5cGVMYWJlbCB3aGl0ZVRleHRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtUZW1wbGF0ZUtleT1cXFwiRW5kXFxcIiBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcInllbGxvd1N0YWNrTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsIGJsYWNrVGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS50eXBlXFxcIiBjbGFzcz1cXFwidHlwZUxhYmVsIGJsYWNrVGV4dCBtaWRkbGVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWwgYmxhY2tUZXh0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLXRlbXBsYXRlc1wiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLXRlbXBsYXRlcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLXRlbXBsYXRlcy5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ1RlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VsZWN0b3I6IChpdGVtOiBEYXRhSXRlbSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4gc3RyaW5nO1xuICAgIHByaXZhdGUgX215R3JvdXBpbmdGdW5jOiAoaXRlbTogYW55KSA9PiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgICAgICB0aGlzLm15R3JvdXBpbmdGdW5jID0gKGl0ZW06IERhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IG15R3JvdXBpbmdGdW5jKCk6IChpdGVtOiBhbnkpID0+IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9teUdyb3VwaW5nRnVuYztcbiAgICB9XG5cbiAgICBzZXQgbXlHcm91cGluZ0Z1bmModmFsdWU6IChpdGVtOiBhbnkpID0+IGFueSkge1xuICAgICAgICB0aGlzLl9teUdyb3VwaW5nRnVuYyA9IHZhbHVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB0aGlzLnRlbXBsYXRlU2VsZWN0b3JGdW5jdGlvbjtcbiAgICAgICAgbGV0IGl0ZW1zQ291bnQgPSA1MDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaXRlbXNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhSXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oaSwgXCJJdGVtIFwiICsgaSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLmdldFR5cGUoaSwgaXRlbXNDb3VudCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VHlwZShpbmRleDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBsYXN0RGlnaXQgPSBpbmRleCAlIDEwO1xuICAgICAgICBsZXQgdHlwZSA9IGluZGV4ID09PSAwID8gXCJzdGFydFwiIDogaW5kZXggPT09IGVuZCA/IFwiZW5kXCIgOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgdHlwZSA9IGxhc3REaWdpdCA9PT0gMCA/IFwiZGVmYXVsdFwiIDogbGFzdERpZ2l0IDw9IDMgPyBcInJlZFwiIDogbGFzdERpZ2l0IDw9IDYgPyBcImJsdWVcIiA6IGxhc3REaWdpdCA8PSA5ID8gXCJncmVlblwiIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG5cbiAgICBnZXQgdGVtcGxhdGVTZWxlY3RvcigpOiAoaXRlbTogRGF0YUl0ZW0sIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZVNlbGVjdG9yKHZhbHVlOiAoaXRlbTogRGF0YUl0ZW0sIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRlbXBsYXRlU2VsZWN0b3JGdW5jdGlvbiA9IChpdGVtOiBEYXRhSXRlbSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS50eXBlO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIubmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMFxcbn1cXG5cXG4uZGVzY3JpcHRpb25MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5ncm91cExhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBwYWRkaW5nOiAxNTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24gcm93cz1cXFwiYXV0bywgKlxcXCI+XFxuICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgIDxCdXR0b24gW3RleHRdPVxcXCJpc0VuYWJsZWQgPyAnRGlzYWJsZSBncm91cGluZycgOiAnRW5hYmxlIGdyb3VwaW5nJ1xcXCIgKHRhcCk9XFxcInRvZ2dsZUdyb3VwaW5nKClcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTY3JvbGwgdG8gMSBpbmRleFxcXCIgKHRhcCk9XFxcIm9uVGFwKClcXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiByb3c9XFxcIjFcXFwiICNteUxpc3RWaWV3IFtncm91cGluZ0Z1bmN0aW9uXT1cXFwibXlHcm91cGluZ0Z1bmNcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrR3JvdXBUZW1wbGF0ZSBsZXQtY2F0ZWdvcnk9XFxcImNhdGVnb3J5XFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBpb3M6aGVpZ2h0PVxcXCI1MFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcImNhdGVnb3J5XFxcIiBjbGFzcz1cXFwiZ3JvdXBMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PiAgIFxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstZ3JvdXBpbmctc2Nyb2xsLXRvLmNvbXBvbmVudFwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwiZ3JvdXBpbmctc2Nyb2xsLXRvLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJncm91cGluZy1zY3JvbGwtdG8uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdTY3JvbGxUb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX2lzRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9teUdyb3VwaW5nRnVuYzogKGl0ZW06IGFueSkgPT4gYW55O1xuXG4gICAgQFZpZXdDaGlsZChcIm15TGlzdFZpZXdcIiwgeyByZWFkOiBSYWRMaXN0Vmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KSBteUxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubXlHcm91cGluZ0Z1bmMgPSAoaXRlbTogRGF0YUl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmNhdGVnb3J5O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBnZXQgaXNFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFbmFibGVkO1xuICAgIH1cblxuICAgIHNldCBpc0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNFbmFibGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG15R3JvdXBpbmdGdW5jKCk6IChpdGVtOiBhbnkpID0+IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9teUdyb3VwaW5nRnVuYztcbiAgICB9XG5cbiAgICBzZXQgbXlHcm91cGluZ0Z1bmModmFsdWU6IChpdGVtOiBhbnkpID0+IGFueSkge1xuICAgICAgICB0aGlzLl9teUdyb3VwaW5nRnVuYyA9IHZhbHVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXRHcm91cGVkSW5kZXhPZlNpemUoNTApKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlR3JvdXBpbmcoKSB7XG4gICAgICAgIGxldCBsaXN0VmlldyA9IHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0VmlldztcbiAgICAgICAgaWYgKCFsaXN0Vmlldy5ncm91cGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICBsaXN0Vmlldy5ncm91cGluZ0Z1bmN0aW9uID0gdGhpcy5teUdyb3VwaW5nRnVuYztcbiAgICAgICAgICAgIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RWaWV3Lmdyb3VwaW5nRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVGFwKCkge1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcuc2Nyb2xsVG9JbmRleCgxKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmdyb3VwTGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIHBhZGRpbmc6IDE1O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY1YTU2NTtcXG4gICAgZm9udC1zaXplOiA0NTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uIHJvd3M9XFxcImF1dG8sICpcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzRW5hYmxlZCA/ICdEaXNhYmxlIGdyb3VwaW5nJyA6ICdFbmFibGUgZ3JvdXBpbmcnXFxcIiAodGFwKT1cXFwidG9nZ2xlR3JvdXBpbmcoKVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHJvdz1cXFwiMVxcXCIgI215TGlzdFZpZXcgW2dyb3VwaW5nRnVuY3Rpb25dPVxcXCJteUdyb3VwaW5nRnVuY1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtHcm91cFRlbXBsYXRlIGxldC1jYXRlZ29yeT1cXFwiY2F0ZWdvcnlcXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGlvczpoZWlnaHQ9XFxcIjUwXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiIFt0ZXh0XT1cXFwiY2F0ZWdvcnlcXFwiIGNsYXNzPVxcXCJncm91cExhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0Vmlld0hlYWRlcj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBsaXN0IGhlYWRlciB3aXRoIGhlaWdodCAxMDBcXFwiIGNsYXNzPVxcXCJoZWFkZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdFZpZXdGb290ZXI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgbGlzdCBmb290ZXIgd2l0aCBoZWlnaHQgNTBcXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PiAgIFxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLWhlYWRlci1mb290ZXJcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIndpdGgtaGVhZGVyLWZvb3Rlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wid2l0aC1oZWFkZXItZm9vdGVyLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nSGVhZGVyRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBfaXNFbmFibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX215R3JvdXBpbmdGdW5jOiAoaXRlbTogYW55KSA9PiBhbnk7XG5cbiAgICBAVmlld0NoaWxkKFwibXlMaXN0Vmlld1wiLCB7IHJlYWQ6IFJhZExpc3RWaWV3Q29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pIG15TGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5teUdyb3VwaW5nRnVuYyA9IChpdGVtOiBEYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcnk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IGlzRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0VuYWJsZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXlHcm91cGluZ0Z1bmMoKTogKGl0ZW06IGFueSkgPT4gYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX215R3JvdXBpbmdGdW5jO1xuICAgIH1cblxuICAgIHNldCBteUdyb3VwaW5nRnVuYyh2YWx1ZTogKGl0ZW06IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMuX215R3JvdXBpbmdGdW5jID0gdmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldEdlbmVyYXRlZERhdGFPcGVyYXRpb25zSXRlbXMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUdyb3VwaW5nKCkge1xuICAgICAgICBsZXQgbGlzdFZpZXcgPSB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXc7XG4gICAgICAgIGlmICghbGlzdFZpZXcuZ3JvdXBpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgbGlzdFZpZXcuZ3JvdXBpbmdGdW5jdGlvbiA9IHRoaXMubXlHcm91cGluZ0Z1bmM7XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0Vmlldy5ncm91cGluZ0Z1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmRlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4uZ3JvdXBMYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgcGFkZGluZzogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uIHJvd3M9XFxcImF1dG8sICpcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiBbdGV4dF09XFxcImlzRW5hYmxlZCA/ICdEaXNhYmxlIGdyb3VwaW5nJyA6ICdFbmFibGUgZ3JvdXBpbmcnXFxcIiAodGFwKT1cXFwidG9nZ2xlR3JvdXBpbmcoKVxcXCI+PC9CdXR0b24+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHJvdz1cXFwiMVxcXCIgI215TGlzdFZpZXcgW2dyb3VwaW5nRnVuY3Rpb25dPVxcXCJteUdyb3VwaW5nRnVuY1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8IS0tID4+IGxpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZy10ZW1wbGF0ZS1hbmd1bGFyIC0tPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrR3JvdXBUZW1wbGF0ZSBsZXQtY2F0ZWdvcnk9XFxcImNhdGVnb3J5XFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBpb3M6aGVpZ2h0PVxcXCI1MFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcImNhdGVnb3J5XFxcIiBjbGFzcz1cXFwiZ3JvdXBMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPCEtLSA8PCBsaXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZ3JvdXBpbmctdGVtcGxhdGUtYW5ndWxhciAtLT5cXG4gICAgPC9SYWRMaXN0Vmlldz4gICBcXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZ1wiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZ3JvdXBpbmcuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9pc0VuYWJsZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfbXlHcm91cGluZ0Z1bmM6IChpdGVtOiBhbnkpID0+IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgICAgICAvLyA+PiBsaXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZ3JvdXBpbmctYW5ndWxhclxuICAgICAgICB0aGlzLm15R3JvdXBpbmdGdW5jID0gKGl0ZW06IERhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jYXRlZ29yeTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gPDwgbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLWFuZ3VsYXJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IGlzRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgaXNFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRW5hYmxlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBteUdyb3VwaW5nRnVuYygpOiAoaXRlbTogYW55KSA9PiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXlHcm91cGluZ0Z1bmM7XG4gICAgfVxuXG4gICAgc2V0IG15R3JvdXBpbmdGdW5jKHZhbHVlOiAoaXRlbTogYW55KSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5fbXlHcm91cGluZ0Z1bmMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0RGF0YU9wZXJhdGlvbnNJdGVtcygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlR3JvdXBpbmcoKSB7XG4gICAgICAgIGxldCBsaXN0VmlldyA9IHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0VmlldztcbiAgICAgICAgaWYgKCFsaXN0Vmlldy5ncm91cGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICBsaXN0Vmlldy5ncm91cGluZ0Z1bmN0aW9uID0gdGhpcy5teUdyb3VwaW5nRnVuYztcbiAgICAgICAgICAgIHRoaXMuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RWaWV3Lmdyb3VwaW5nRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIubmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMFxcbn1cXG5cXG4uZGVzY3JpcHRpb25MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhNTY1O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmZmY3ZjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQ+XFxuICAgIDwhLS0gPj4gYW5ndWxhci1saXN0dmlldy1oZWFkZXItZm9vdGVyIC0tPlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdFZpZXdIZWFkZXI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgbGlzdCBoZWFkZXJcXFwiIGNsYXNzPVxcXCJoZWFkZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdFZpZXdGb290ZXI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgbGlzdCBmb290ZXJcXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbiAgICA8IS0tIDw8IGFuZ3VsYXItbGlzdHZpZXctaGVhZGVyLWZvb3RlciAtLT5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uLy4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWF1dG8tc2l6ZS1oZWFkZXItZm9vdGVyXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1hdXRvLXNpemUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWF1dG8tc2l6ZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3SGVhZGVyRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBfaGVhZGVyVGl0bGU6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb290ZXJUaXRsZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldElkZW50aWNhbERhdGFJdGVtcyg1KSk7XG4gICAgICAgIHRoaXMuZm9vdGVyVGl0bGUgPSBcIlRoaXMgaXMgbGlzdCBmb290ZXJcIjtcbiAgICAgICAgdGhpcy5oZWFkZXJUaXRsZSA9IFwiVGhpcyBpcyBsaXN0IGhlYWRlclwiO1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IGhlYWRlclRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFkZXJUaXRsZTtcbiAgICB9XG5cbiAgICBzZXQgaGVhZGVyVGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9oZWFkZXJUaXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBmb290ZXJUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9vdGVyVGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IGZvb3RlclRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fZm9vdGVyVGl0bGUgPSB2YWx1ZTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NWE1NjU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZmZjdmO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dD5cXG4gICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RWaWV3SGVhZGVyPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGxpc3QgaGVhZGVyIHdpdGggaGVpZ2h0IDUwXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiBjbGFzcz1cXFwiaGVhZGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RWaWV3Rm9vdGVyPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGxpc3QgZm9vdGVyIHdpdGggaGVpZ2h0IDEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi8uLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctYmlnLWZvb3RlclwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctYmlnLWZvb3Rlci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctYmlnLWZvb3Rlci5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QmlnRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBfaGVhZGVyVGl0bGU6IHN0cmluZztcbiAgICBwcml2YXRlIF9mb290ZXJUaXRsZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldElkZW50aWNhbERhdGFJdGVtcyg1KSk7XG4gICAgICAgIHRoaXMuaGVhZGVyVGl0bGUgPSBcIlRoaXMgaXMgbGlzdCBoZWFkZXIgd2l0aCBoZWlnaHQgNTBcIjtcbiAgICAgICAgdGhpcy5mb290ZXJUaXRsZSA9IFwiVGhpcyBpcyBsaXN0IGZvb3RlciB3aXRoIGhlaWdodCAxMDBcIjtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBoZWFkZXJUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVhZGVyVGl0bGU7XG4gICAgfVxuXG4gICAgc2V0IGhlYWRlclRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5faGVhZGVyVGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgZm9vdGVyVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvb3RlclRpdGxlO1xuICAgIH1cblxuICAgIHNldCBmb290ZXJUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2Zvb3RlclRpdGxlID0gdmFsdWU7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIubmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMFxcbn1cXG5cXG4uZGVzY3JpcHRpb25MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhNTY1O1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmZmY3ZjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQ+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0Vmlld0hlYWRlcj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVGhpcyBpcyBsaXN0IGhlYWRlciB3aXRoIGhlaWdodCAxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBjbGFzcz1cXFwiaGVhZGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RWaWV3Rm9vdGVyPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGxpc3QgZm9vdGVyIHdpdGggaGVpZ2h0IDUwXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiBjbGFzcz1cXFwiZm9vdGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uLy4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWJpZy1oZWFkZXJcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWJpZy1oZWFkZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWJpZy1oZWFkZXIuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0JpZ0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX2hlYWRlclRpdGxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZm9vdGVyVGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXRJZGVudGljYWxEYXRhSXRlbXMoNSkpO1xuICAgICAgICB0aGlzLmhlYWRlclRpdGxlID0gXCJUaGlzIGlzIGxpc3QgaGVhZGVyIHdpdGggaGVpZ2h0IDEwMFwiO1xuICAgICAgICB0aGlzLmZvb3RlclRpdGxlID0gXCJUaGlzIGlzIGxpc3QgZm9vdGVyIHdpdGggaGVpZ2h0IDUwXCI7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBnZXQgaGVhZGVyVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlclRpdGxlO1xuICAgIH1cblxuICAgIHNldCBoZWFkZXJUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlclRpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGZvb3RlclRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb290ZXJUaXRsZTtcbiAgICB9XG5cbiAgICBzZXQgZm9vdGVyVGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9mb290ZXJUaXRsZSA9IHZhbHVlO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmRlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4uaGVhZGVyTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY1YTU2NTtcXG59XFxuXFxuLmZvb3RlckxheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxufVxcblxcbi53aGl0ZUxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlZExhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sICpcXFwiPlxcbiAgICA8QnV0dG9uIHRleHQ9XFxcIlVwZGF0ZSBoZWFkZXIvZm9vdGVyIHdpdGggdGhpcmQgbGFiZWxcXFwiICh0YXApPVxcXCJ0YWJVcGRhdGUoKVxcXCI+PC9CdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uIHJvdz1cXFwiMVxcXCIgI2xpc3RWaWV3PlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0Vmlld0hlYWRlcj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhlYWRlckxheW91dFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUaGlzIGlzIGxpc3QgaGVhZGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2Vjb25kIGhlYWRlciBsYWJlbFxcXCIgW3Zpc2liaWxpdHldPVxcXCJpc1NlY29uZFZpc2libGUgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIiBoZWlnaHQ9XFxcIjUwXFxcIiBjbGFzcz1cXFwid2hpdGVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRoaXJkIGhlYWRlciBsYWJlbFxcXCIgW3Zpc2liaWxpdHldPVxcXCJpc1RoaXJkVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiIGhlaWdodD1cXFwiNTBcXFwiIGNsYXNzPVxcXCJyZWRMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RWaWV3Rm9vdGVyPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiZm9vdGVyTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRoaXMgaXMgbGlzdCBmb290ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWNvbmQgZm9vdGVyIGxhYmVsXFxcIiBbdmlzaWJpbGl0eV09XFxcImlzU2Vjb25kVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdjb2xsYXBzZSdcXFwiIGhlaWdodD1cXFwiNTBcXFwiIGNsYXNzPVxcXCJ3aGl0ZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVGhpcmQgZm9vdGVyIGxhYmVsXFxcIiBbdmlzaWJpbGl0eV09XFxcImlzVGhpcmRWaXNpYmxlID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCIgaGVpZ2h0PVxcXCI1MFxcXCIgIGNsYXNzPVxcXCJyZWRMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi8uLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWNoYW5nZS1zaXplLWF0LXJ1bnRpbWVcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWNoYW5nZS1zaXplLWF0LXJ1bnRpbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWNoYW5nZS1zaXplLWF0LXJ1bnRpbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0dmlld0NoYW5nZVNpemVBdFJ1bnRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9oZWFkZXJUaXRsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2Zvb3RlclRpdGxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaXNTZWNvbmRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNUaGlyZFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXRJZGVudGljYWxEYXRhSXRlbXMoMzApKTtcbiAgICAgICAgdGhpcy5mb290ZXJUaXRsZSA9IFwiVGhpcyBpcyBsaXN0IGZvb3RlclwiO1xuICAgICAgICB0aGlzLmhlYWRlclRpdGxlID0gXCJUaGlzIGlzIGxpc3QgaGVhZGVyXCI7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzU2Vjb25kVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0Vmlld0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcudXBkYXRlSGVhZGVyRm9vdGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoXCJsaXN0Vmlld1wiLCB7IHJlYWQ6IFJhZExpc3RWaWV3Q29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSkgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBnZXQgaGVhZGVyVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWRlclRpdGxlO1xuICAgIH1cblxuICAgIHNldCBoZWFkZXJUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2hlYWRlclRpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGZvb3RlclRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb290ZXJUaXRsZTtcbiAgICB9XG5cbiAgICBzZXQgZm9vdGVyVGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9mb290ZXJUaXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBpc1NlY29uZFZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNTZWNvbmRWaXNpYmxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGlzU2Vjb25kVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2Vjb25kVmlzaWJsZTtcbiAgICB9XG5cbiAgICBzZXQgaXNUaGlyZFZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNUaGlyZFZpc2libGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaXNUaGlyZFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1RoaXJkVmlzaWJsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGFiVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmlzVGhpcmRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy51cGRhdGVIZWFkZXJGb290ZXIoKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLnNpemVcXFwiIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJpdGVtLmNvbG9yXFxcIiBbd2lkdGhdPVxcXCJpdGVtLnNpemVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8TGlzdFZpZXdMaW5lYXJMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIkhvcml6b250YWxcXFwiPjwvTGlzdFZpZXdMaW5lYXJMYXlvdXQ+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1ob3Jpem9udGFsLXdpdGgtdmFyaWFibGUtaXRlbS13aWR0aFwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctaG9yaXpvbnRhbC13aXRoLXZhcmlhYmxlLWl0ZW0td2lkdGguY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWhvcml6b250YWwtd2l0aC12YXJpYWJsZS1pdGVtLXdpZHRoLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdHZpZXdIb3Jpem9udGFsV2l0aFZhcmlhYmxlSXRlbVdpZHRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldFZhcmlhYmxlV2lkdGhJdGVtcygpKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmhlYWRlckdyaWRMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhNTY1O1xcbn1cXG5cXG4uZm9vdGVyR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxufVxcblxcbi5pb3NCdXR0b24ge1xcbiAgICBtYXJnaW46IDEwXFxufVxcblxcbi5idXR0b25TdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkl0ZW0gQW5pbWF0aW9uc1xcXCI+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGljb249XFxcInJlczovL2ljX2Fycm93X2JhY2tfYmxhY2tfMjRkcFxcXCIgKHRhcCk9XFxcIm9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuXFxuICAgIDxBY3Rpb25JdGVtICp0a0lmQW5kcm9pZCB0ZXh0PVxcXCJEZWZhdWx0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCIgKHRhcCk9XFxcIm9uRGVmYXVsdFRhcCgpXFxcIj48L0FjdGlvbkl0ZW0+XFxuICAgIDxBY3Rpb25JdGVtICp0a0lmQW5kcm9pZCB0ZXh0PVxcXCJGYWRlXFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCIgKHRhcCk9XFxcIm9uRmFkZVRhcCgpXFxcIj48L0FjdGlvbkl0ZW0+XFxuICAgIDxBY3Rpb25JdGVtICp0a0lmQW5kcm9pZCB0ZXh0PVxcXCJTY2FsZVxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICh0YXApPVxcXCJvblNjYWxlVGFwKClcXFwiPjwvQWN0aW9uSXRlbT5cXG4gICAgPEFjdGlvbkl0ZW0gKnRrSWZBbmRyb2lkIHRleHQ9XFxcIlNsaWRlXFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCIgKHRhcCk9XFxcIm9uU2xpZGVUYXAoKVxcXCI+PC9BY3Rpb25JdGVtPlxcblxcbiAgICA8QWN0aW9uSXRlbSAqdGtJZklPUyB0ZXh0PVxcXCJPcHRpb25zXFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiAodGFwKT1cXFwib25PcHRpb25zVGFwcGVkKClcXFwiPjwvQWN0aW9uSXRlbT5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvd3M9XFxcIjUwLCAqXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJidXR0b25TdGFja0xheW91dFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFERFxcXCIgKHRhcCk9XFxcIm9uQWRkSXRlbUNsaWNrKClcXFwiIGlvczpjbGFzcz1cXFwiaW9zQnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkRFTFxcXCIgKHRhcCk9XFxcIm9uUmVtb3ZlSXRlbUNsaWNrKClcXFwiIGlvczpjbGFzcz1cXFwiaW9zQnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlVQREFURVxcXCIgKHRhcCk9XFxcIm9uVXBkYXRlSXRlbUNsaWNrKClcXFwiIGlvczpjbGFzcz1cXFwiaW9zQnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlJFU0VUXFxcIiAodGFwKT1cXFwib25SZXNldENsaWNrKClcXFwiIGlvczpjbGFzcz1cXFwiaW9zQnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHJvdz1cXFwiMVxcXCI+XFxuICAgICAgICA8TGlzdFZpZXdMaW5lYXJMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIiBbaXRlbUluc2VydEFuaW1hdGlvbl09XFxcIml0ZW1JbnNlcnRBbmltYXRpb25cXFwiIFtpdGVtRGVsZXRlQW5pbWF0aW9uXT1cXFwiaXRlbURlbGV0ZUFuaW1hdGlvblxcXCI+PC9MaXN0Vmlld0xpbmVhckxheW91dD5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBPcHRpb25zRXhhbXBsZUJhc2UgfSBmcm9tIFwiLi4vLi4vb3B0aW9ucy1leGFtcGxlLWJhc2VcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgTGlzdFZpZXdJdGVtQW5pbWF0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgT3B0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgaW9zIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWl0ZW0tYW5pbWF0aW9uc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWl0ZW0tYW5pbWF0aW9ucy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctaXRlbS1hbmltYXRpb25zLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdJdGVtQW5pbWF0aW9uc0NvbXBvbmVudCBleHRlbmRzIE9wdGlvbnNFeGFtcGxlQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX2l0ZW1JbnNlcnRBbmltYXRpb246IExpc3RWaWV3SXRlbUFuaW1hdGlvbjtcbiAgICBwcml2YXRlIF9pdGVtRGVsZXRlQW5pbWF0aW9uOiBMaXN0Vmlld0l0ZW1BbmltYXRpb247XG4gICAgcHJpdmF0ZSBfb3B0aW9uc1BhcmFtTmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2l0ZW1zQ291bnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIF9vcHRpb25zU2VydmljZTogT3B0aW9uc1NlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmIChpb3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgdGhpcy5vbk5hdmlnYXRpbmdUbywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zUGFyYW1OYW1lID0gXCJhbmltYXRpb25cIjtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnBhcmFtTmFtZSA9IHRoaXMuX29wdGlvbnNQYXJhbU5hbWU7XG4gICAgICAgICAgICB0aGlzLnJvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25QYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsIHBhcmFtTmFtZTogdGhpcy5fb3B0aW9uc1BhcmFtTmFtZSxcbiAgICAgICAgICAgICAgICBpdGVtczogW1wiRGVmYXVsdFwiLCBcIkZhZGVcIiwgXCJTY2FsZVwiLCBcIlNsaWRlXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25EZWZhdWx0VGFwKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zQ291bnQgPSAwO1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1JbnNlcnRBbmltYXRpb24oKTogTGlzdFZpZXdJdGVtQW5pbWF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1JbnNlcnRBbmltYXRpb247XG4gICAgfVxuXG4gICAgc2V0IGl0ZW1JbnNlcnRBbmltYXRpb24odmFsdWU6IExpc3RWaWV3SXRlbUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9pdGVtSW5zZXJ0QW5pbWF0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW1EZWxldGVBbmltYXRpb24oKTogTGlzdFZpZXdJdGVtQW5pbWF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1EZWxldGVBbmltYXRpb247XG4gICAgfVxuXG4gICAgc2V0IGl0ZW1EZWxldGVBbmltYXRpb24odmFsdWU6IExpc3RWaWV3SXRlbUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9pdGVtRGVsZXRlQW5pbWF0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQWRkSXRlbUNsaWNrKCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMucHVzaChuZXcgRGF0YUl0ZW0odGhpcy5faXRlbXNDb3VudCwgXCJUaGlzIGlzIGEgbmV3IGl0ZW06IFwiICsgdGhpcy5faXRlbXNDb3VudCwgXCJUaGlzIGlzIHRoZSBuZXcgaXRlbSdzIGRlc2NyaXB0aW9uLlwiKSk7XG4gICAgICAgIHRoaXMuX2l0ZW1zQ291bnQrKztcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZXNldENsaWNrKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5fZGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YUl0ZW1zLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2l0ZW1zQ291bnQgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblVwZGF0ZUl0ZW1DbGljaygpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2RhdGFJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl9kYXRhSXRlbXMuZ2V0SXRlbShpbmRleCk7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9IFwiVGhpcyBpcyBhbiB1cGRhdGVkIGl0ZW1cIjtcbiAgICAgICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uID0gXCJUaGlzIGlzIHRoZSB1cGRhdGVkIGl0ZW0ncyBkZXNjcmlwdGlvbi5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJlbW92ZUl0ZW1DbGljaygpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zLnNwbGljZSh0aGlzLl9kYXRhSXRlbXMubGVuZ3RoIC0gMSwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGVmYXVsdFRhcCgpIHtcbiAgICAgICAgdGhpcy5pdGVtSW5zZXJ0QW5pbWF0aW9uID0gTGlzdFZpZXdJdGVtQW5pbWF0aW9uLkRlZmF1bHQ7XG4gICAgICAgIHRoaXMuaXRlbURlbGV0ZUFuaW1hdGlvbiA9IExpc3RWaWV3SXRlbUFuaW1hdGlvbi5EZWZhdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkZhZGVUYXAoKSB7XG4gICAgICAgIHRoaXMuaXRlbUluc2VydEFuaW1hdGlvbiA9IExpc3RWaWV3SXRlbUFuaW1hdGlvbi5GYWRlO1xuICAgICAgICB0aGlzLml0ZW1EZWxldGVBbmltYXRpb24gPSBMaXN0Vmlld0l0ZW1BbmltYXRpb24uRmFkZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TY2FsZVRhcCgpIHtcbiAgICAgICAgdGhpcy5pdGVtSW5zZXJ0QW5pbWF0aW9uID0gTGlzdFZpZXdJdGVtQW5pbWF0aW9uLlNjYWxlO1xuICAgICAgICB0aGlzLml0ZW1EZWxldGVBbmltYXRpb24gPSBMaXN0Vmlld0l0ZW1BbmltYXRpb24uU2NhbGU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2xpZGVUYXAoKSB7XG4gICAgICAgIHRoaXMuaXRlbUluc2VydEFuaW1hdGlvbiA9IExpc3RWaWV3SXRlbUFuaW1hdGlvbi5TbGlkZTtcbiAgICAgICAgdGhpcy5pdGVtRGVsZXRlQW5pbWF0aW9uID0gTGlzdFZpZXdJdGVtQW5pbWF0aW9uLlNsaWRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmlzQmFja05hdmlnYXRpb24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zU2VydmljZS5wYXJhbU5hbWUgPT09IHRoaXMuX29wdGlvbnNQYXJhbU5hbWUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX29wdGlvbnNTZXJ2aWNlLnBhcmFtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRlZmF1bHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25EZWZhdWx0VGFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25QYXJhbWV0ZXJzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJGYWRlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmFkZVRhcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uUGFyYW1ldGVycy5zZWxlY3RlZEluZGV4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2NhbGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TY2FsZVRhcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uUGFyYW1ldGVycy5zZWxlY3RlZEluZGV4ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2xpZGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TbGlkZVRhcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uUGFyYW1ldGVycy5zZWxlY3RlZEluZGV4ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiIGxldC1vZGQ9XFxcIm9kZFxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgW2JhY2tncm91bmRDb2xvcl09XFxcIm9kZCA/ICdsaWdodGdyZWVuJyA6ICdsaWdodGJsdWUnXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjFcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG5cXG4gICAgICAgIDxMaXN0Vmlld0dyaWRMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIiBzcGFuQ291bnQ9XFxcIjJcXFwiPjwvTGlzdFZpZXdHcmlkTGF5b3V0PlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ncmlkLW5vLWhlaWdodFwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctaXRlbS1sYXlvdXRzLWdyaWQtbm8taGVpZ2h0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1pdGVtLWxheW91dHMtZ3JpZC1uby1oZWlnaHQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0l0ZW1MYXlvdXRzR3JpZE5vSGVpZ2h0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPih0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0SWRlbnRpY2FsRGF0YUl0ZW1zKDEwMCkpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJSYWRMaXN0VmlldyB7XFxuICAgIG1hcmdpbi1yaWdodDogLTI7XFxufVxcblxcbi5saXN0SXRlbVRlbXBsYXRlR3JpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XFxufVxcblxcbi5sYWJlbHNTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBwYWRkaW5nLXRvcDogODtcXG4gICAgcGFkZGluZy1ib3R0b206IDg7XFxuICAgIHBhZGRpbmctbGVmdDogMTY7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdEl0ZW1UZW1wbGF0ZUdyaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TlNJbWcgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiIGhlaWdodD1cXFwiMjUwXFxcIiBpb3M6c3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgPjwvTlNJbWc+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsYWJlbHNTdGFja0xheW91dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgICA8IS0tID4+IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1sYXlvdXRzLWdyaWQgLS0+XFxuICAgICAgICA8TGlzdFZpZXdHcmlkTGF5b3V0IHRrTGlzdFZpZXdMYXlvdXQgc2Nyb2xsRGlyZWN0aW9uPVxcXCJWZXJ0aWNhbFxcXCIgaW9zOml0ZW1IZWlnaHQ9XFxcIjI1MFxcXCIgc3BhbkNvdW50PVxcXCIyXFxcIj48L0xpc3RWaWV3R3JpZExheW91dD5cXG4gICAgICAgIDwhLS0gPDwgYW5ndWxhci1saXN0dmlldy1pdGVtLWxheW91dHMtZ3JpZCAtLT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1pdGVtLWxheW91dHMtZ3JpZFwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctaXRlbS1sYXlvdXRzLWdyaWQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ncmlkLmNvbXBvbmVudC5jc3NcIl1cbn0pXG4vLyA+PiBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ncmlkLWNvbXBvbmVudFxuZXhwb3J0IGNsYXNzIExpc3RWaWV3SXRlbUxheW91dHNHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPih0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0TGlzdEl0ZW1zRnJvbUpzb24oKSk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxufVxuLy8gPDwgYW5ndWxhci1saXN0dmlldy1pdGVtLWxheW91dHMtZ3JpZC1jb21wb25lbnRcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJSYWRMaXN0VmlldyB7XFxuICAgIG1hcmdpbi1yaWdodDogLTI7XFxufVxcblxcbi5saXN0SXRlbVRlbXBsYXRlR3JpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XFxufVxcblxcbi5sYWJlbHNTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgICBwYWRkaW5nLXRvcDogODtcXG4gICAgcGFkZGluZy1ib3R0b206IDg7XFxuICAgIHBhZGRpbmctbGVmdDogMTY7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdEl0ZW1UZW1wbGF0ZUdyaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TlNJbWcgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiIGhlaWdodD1cXFwiMjUwXFxcIiBpb3M6c3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCI+PC9OU0ltZz5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxhYmVsc1N0YWNrTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLnRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tID4+IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1hbmltYXRpb25zLWh0bWwgLS0+XFxuICAgICAgICA8TGlzdFZpZXdMaW5lYXJMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIiBpdGVtSW5zZXJ0QW5pbWF0aW9uPVxcXCJEZWZhdWx0XFxcIiBpdGVtRGVsZXRlQW5pbWF0aW9uPVxcXCJEZWZhdWx0XFxcIj48L0xpc3RWaWV3TGluZWFyTGF5b3V0PlxcbiAgICAgICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tYW5pbWF0aW9ucy1odG1sIC0tPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsIi8vID4+IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1sYXlvdXRzLWxpbmVhci1jb21wb25lbnRcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0xpbmVhckxheW91dCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctaXRlbS1sYXlvdXRzLWxpbmVhclwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctaXRlbS1sYXlvdXRzLWxpbmVhci5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctaXRlbS1sYXlvdXRzLWxpbmVhci5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3SXRlbUxheW91dHNMaW5lYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9sYXlvdXQ6IExpc3RWaWV3TGluZWFyTGF5b3V0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4odGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldExpc3RJdGVtc0Zyb21Kc29uKCkpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cbn1cbi8vIDw8IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1sYXlvdXRzLWxpbmVhci1jb21wb25lbnRcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJSYWRMaXN0VmlldyB7XFxuICAgIG1hcmdpbi1yaWdodDogLTI7XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTA7XFxufVxcblxcbi5saXN0SXRlbS10ZW1wbGF0ZS1ncmlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbiByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTElORUFSXFxcIiBjbGFzcz1cXFwibWVudS1idXR0b25cXFwiICh0YXApPVxcXCJjaGFuZ2VUb0xpbmVhcigkZXZlbnQpXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiR1JJRFxcXCIgY2xhc3M9XFxcIm1lbnUtYnV0dG9uXFxcIiAodGFwKT1cXFwiY2hhbmdlVG9HcmlkKCRldmVudClcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTVEFHR0VSRURcXFwiIGNsYXNzPVxcXCJtZW51LWJ1dHRvblxcXCIgKHRhcCk9XFxcImNoYW5nZVRvU3RhZ2dlcmVkKCRldmVudClcXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiAjbXlMaXN0VmlldyByb3c9XFxcIjFcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcImxpc3RJdGVtLXRlbXBsYXRlLWdyaWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMVxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IExpc3RWaWV3TGluZWFyTGF5b3V0LCBMaXN0Vmlld0dyaWRMYXlvdXQsIExpc3RWaWV3U3RhZ2dlcmVkTGF5b3V0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IGlvcyBhcyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ydW50aW1lXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1pdGVtLWxheW91dHMtcnVudGltZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctaXRlbS1sYXlvdXRzLXJ1bnRpbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0l0ZW1MYXlvdXRzUnVudGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX2xheW91dDogTGlzdFZpZXdMaW5lYXJMYXlvdXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4odGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldFN0YWdnZXJlZEl0ZW1zKCkpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VUb0xpbmVhcihhcmdzKSB7XG4gICAgICAgIGNvbnN0IGxheW91dCA9IG5ldyBMaXN0Vmlld0xpbmVhckxheW91dCgpO1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubGlzdFZpZXdMYXlvdXQgPSBsYXlvdXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVRvR3JpZChhcmdzKSB7XG4gICAgICAgIGNvbnN0IGxheW91dCA9IG5ldyBMaXN0Vmlld0dyaWRMYXlvdXQoKTtcbiAgICAgICAgaWYgKGlzSU9TKSB7XG4gICAgICAgICAgICBsYXlvdXQuaXRlbUhlaWdodCA9IDIwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxheW91dC5zcGFuQ291bnQgPSAyO1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubGlzdFZpZXdMYXlvdXQgPSBsYXlvdXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVRvU3RhZ2dlcmVkKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gbmV3IExpc3RWaWV3U3RhZ2dlcmVkTGF5b3V0KCk7XG4gICAgICAgIGxheW91dC5zcGFuQ291bnQgPSAzO1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubGlzdFZpZXdMYXlvdXQgPSBsYXlvdXQ7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIuaXRlbS10ZW1wbGF0ZS1zdHlsZXtcXG4gICAgYm9yZGVyLXdpZHRoOjE7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JheTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJzdGFnZ2VyZWRJdGVtc1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwiaXRlbS10ZW1wbGF0ZS1zdHlsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgICA8IS0tID4+IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1sYXlvdXRzLXN0YWdnZXJlZCAtLT5cXG4gICAgICAgIDxMaXN0Vmlld1N0YWdnZXJlZExheW91dCB0a0xpc3RWaWV3TGF5b3V0IHNjcm9sbERpcmVjdGlvbj1cXFwiVmVydGljYWxcXFwiIHNwYW5Db3VudD1cXFwiM1xcXCI+PC9MaXN0Vmlld1N0YWdnZXJlZExheW91dD5cXG4gICAgICAgIDwhLS0gPDwgYW5ndWxhci1saXN0dmlldy1pdGVtLWxheW91dHMtc3RhZ2dlcmVkIC0tPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsIi8vID4+IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1sYXlvdXRzLXN0YWdnZXJlZC1jb21wb25lbnRcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWl0ZW0tbGF5b3V0cy1zdGFnZ2VyZWRcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWl0ZW0tbGF5b3V0cy1zdGFnZ2VyZWQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWl0ZW0tbGF5b3V0cy1zdGFnZ2VyZWQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0l0ZW1MYXlvdXRzU3RhZ2dlcmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9zdGFnZ2VyZWRJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3N0YWdnZXJlZEl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4odGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldFN0YWdnZXJlZEl0ZW1zKCkpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc3RhZ2dlcmVkSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFnZ2VyZWRJdGVtcztcbiAgICB9XG59XG4vLyA8PCBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tbGF5b3V0cy1zdGFnZ2VyZWQtY29tcG9uZW50IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMDtcXG59XFxuXFxuLmRlc2NMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8IS0tID4+IGFuZ3VsYXItYW5ndWxhci1saXN0dmlldy1pdGVtLWxvYWRpbmcgLS0+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIChpdGVtTG9hZGluZyk9XFxcIm9uSXRlbUxvYWRpbmcoJGV2ZW50KVxcXCI+XFxuICAgICAgICA8IS0tIDw8IGFuZ3VsYXItYW5ndWxhci1saXN0dmlldy1pdGVtLWxvYWRpbmcgLS0+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBwYWRkaW5nPVxcXCIxNVxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBpZD1cXFwibmFtZUxhYmVsXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGlkPVxcXCJkZXNjTGFiZWxcXFwiIGNsYXNzPVxcXCJkZXNjTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1pdGVtLWxvYWRpbmdcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWl0ZW0tbG9hZGluZy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctaXRlbS1sb2FkaW5nLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0l0ZW1Mb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPih0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0RGF0YUl0ZW1zKCkpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIC8vID4+IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1sb2FkaW5nLWNvbXBvbmVudFxuICAgIHB1YmxpYyBvbkl0ZW1Mb2FkaW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChhcmdzLmluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgYXJncy52aWV3LmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcIiNiM2VjZmZcIik7XG4gICAgICAgICAgICBhcmdzLnZpZXcuZ2V0Vmlld0J5SWQ8TGFiZWw+KFwibmFtZUxhYmVsXCIpLmZvbnRTaXplID0gMjQ7XG4gICAgICAgICAgICBhcmdzLnZpZXcuZ2V0Vmlld0J5SWQ8TGFiZWw+KFwiZGVzY0xhYmVsXCIpLmZvbnRTaXplID0gMTg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcmdzLnZpZXcuYmFja2dyb3VuZENvbG9yID0gbmV3IENvbG9yKFwiI2NjZjJmZlwiKTtcbiAgICAgICAgICAgIGFyZ3Mudmlldy5nZXRWaWV3QnlJZDxMYWJlbD4oXCJuYW1lTGFiZWxcIikuZm9udFNpemUgPSAyMDtcbiAgICAgICAgICAgIGFyZ3Mudmlldy5nZXRWaWV3QnlJZDxMYWJlbD4oXCJkZXNjTGFiZWxcIikuZm9udFNpemUgPSAxNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyA8PCBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tbG9hZGluZy1jb21wb25lbnRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxufVxcblxcbi5saXN0SXRlbUdyaWRMYXlvdXQge1xcbiAgICBwYWRkaW5nLXRvcDogMTY7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNjtcXG59XFxuXFxuLmhhbmRsZUltYWdlIHtcXG4gICAgbWFyZ2luOiAxNjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiByb3dzPVxcXCJhdXRvLCAqXFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIkRyYWcgYW4gaXRlbSBieSB0aGUgaGFuZGxlIHRvIHJlb3JkZXJcXFwiPjwvTGFiZWw+XFxuXFxuICAgIDxSYWRMaXN0VmlldyAoaXRlbVJlb3JkZXJlZCk9XFxcIm9uSXRlbVJlb3JkZXJlZCgkZXZlbnQpXFxcIiBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHJvdz1cXFwiMVxcXCIgaXRlbVJlb3JkZXI9XFxcInRydWVcXFwiIHJlb3JkZXJNb2RlPVxcXCJEcmFnXFxcIj5cXG4gICAgICAgIDwhLS0gPj4gYW5ndWxhci1saXN0dmlldy1pdGVtLXJlb3JkZXItaGFuZGxlIC0tPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImxpc3RJdGVtR3JpZExheW91dFxcXCIgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNvbD1cXFwiMFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxSZW9yZGVySGFuZGxlIGNvbD1cXFwiMVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJyZXM6Ly9yZW9yZGVyX2ljb25cXFwiIGNsYXNzPVxcXCJoYW5kbGVJbWFnZVxcXCIgc3RyZXRjaD1cXFwibm9uZVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcInN0cmV0Y2hcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgICAgIDwvUmVvcmRlckhhbmRsZT5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tcmVvcmRlci1oYW5kbGUgLS0+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiLy8gPj4gYW5ndWxhci1saXN0dmlldy1pdGVtLXJlb3JkZXItaGFuZGxlLWNvbXBvbmVudFxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWl0ZW0tcmVvcmRlci1oYW5kbGVcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWl0ZW0tcmVvcmRlci1oYW5kbGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWl0ZW0tcmVvcmRlci1oYW5kbGUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0l0ZW1SZW9yZGVySGFuZGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldFBlcnNvbkRhdGFJdGVtcygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtUmVvcmRlcmVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSByZW9yZGVyZWQuIE9sZCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBcIm5ldyBpbmRleDogXCIgKyBhcmdzLmRhdGEudGFyZ2V0SW5kZXgpO1xuICAgIH1cbn1cbi8vIDw8IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1yZW9yZGVyLWhhbmRsZS1jb21wb25lbnQiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXG59XFxuXFxuLmxpc3RJdGVtR3JpZExheW91dCB7XFxuICAgIHBhZGRpbmctdG9wOiA1O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTtcXG59XFxuXFxuLmxpc3RJdGVtR3JpZExheW91dCBTdGFja0xheW91dCB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93cz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgICA8IS0tID4+IGFuZ3VsYXItbGlzdHZpZXctcmVvcmRlciAtLT5cXG4gICAgPFJhZExpc3RWaWV3IHJvdz1cXFwiMVxcXCIgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiBpdGVtUmVvcmRlcj1cXFwidHJ1ZVxcXCIgKGl0ZW1SZW9yZGVyZWQpPVxcXCJvbkl0ZW1SZW9yZGVyZWQoJGV2ZW50KVxcXCI+XFxuICAgICA8IS0tIDw8IGFuZ3VsYXItbGlzdHZpZXctcmVvcmRlciAtLT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVxcXCJsaXN0SXRlbUdyaWRMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWl0ZW0tcmVvcmRlclwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctaXRlbS1yZW9yZGVyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1pdGVtLXJlb3JkZXIuY29tcG9uZW50LmNzc1wiXVxufSlcbi8vID4+IGFuZ3VsYXItbGlzdHZpZXctcmVvcmRlci1jb21wb25lbnRcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0l0ZW1SZW9yZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldFBlcnNvbkRhdGFJdGVtcygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtUmVvcmRlcmVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSByZW9yZGVyZWQuIE9sZCBpbmRleDogXCIgKyBhcmdzLmluZGV4ICsgXCIgXCIgKyBcIm5ldyBpbmRleDogXCIgKyBhcmdzLmRhdGEudGFyZ2V0SW5kZXgpO1xuICAgIH1cbn1cbi8vIDw8IGFuZ3VsYXItbGlzdHZpZXctcmVvcmRlci1jb21wb25lbnQiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogaW9zIHN0eWxlcyAqL1xcbi5pb3NMaXN0SXRlbVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MDtcXG59XFxuXFxuLmlvc05hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmlvc0Rlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDEzO1xcbn1cXG5cXG4vKiBBbmRyb2lkIHN0eWxlcyAqL1xcbi5hbmRyb2lkTGlzdEl0ZW1TdGFja0xheW91dCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTY7XFxufVxcblxcbi5hbmRyb2lkTmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMFxcbn1cXG5cXG4uYW5kcm9pZERlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDEzO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPCEtLSA+PiBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLW11bHRpcGxlIC0tPlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiBzZWxlY3Rpb25CZWhhdmlvcj1cXFwiUHJlc3NcXFwiIG11bHRpcGxlU2VsZWN0aW9uPVxcXCJ0cnVlXFxcIj5cXG4gICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLW11bHRpcGxlIC0tPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlvczpjbGFzcz1cXFwiaW9zTGlzdEl0ZW1TdGFja0xheW91dFxcXCIgYW5kcm9pZDpjbGFzcz1cXFwiYW5kcm9pZExpc3RJdGVtU3RhY2tMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgaW9zOmNsYXNzPVxcXCJpb3NOYW1lTGFiZWxcXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImFuZHJvaWROYW1lTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgaW9zOmNsYXNzPVxcXCJpb3NEZXNjcmlwdGlvbkxhYmVsXFxcIiBhbmRyb2lkOmNsYXNzPVxcXCJhbmRyb2lkRGVzY3JpcHRpb25MYWJlbFxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCIvLyA+PiBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLW11bHRpcGxlLWNvbXBvbmVudFxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1pdGVtLXNlbGVjdGlvbi1tdWx0aXBsZVwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctaXRlbS1zZWxlY3Rpb24tbXVsdGlwbGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLW11bHRpcGxlLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdJdGVtU2VsZWN0aW9uTXVsdGlwbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0TmFtZUVtYWlsRGF0YUl0ZW1zKCkpO1xuICAgIH1cbn1cbi8vIDw8IGFuZ3VsYXItbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24tbXVsdGlwbGUtY29tcG9uZW50IiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIGlvcyBzdHlsZXMgKi9cXG4uaW9zTGlzdEl0ZW1TdGFja0xheW91dCB7XFxuICAgIHBhZGRpbmctbGVmdDogNTA7XFxufVxcblxcbi5pb3NOYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5pb3NEZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLmlvc1NlbGVjdEl0ZW1UZXh0RmllbGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDYwO1xcbiAgICBoZWlnaHQ6IDMwO1xcbn1cXG5cXG4uaW9zU2VsZWN0SXRlbUJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDtcXG4gICAgaGVpZ2h0OiA1MDtcXG59XFxuXFxuLmlvc1NlbGVjdEFsbEJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxufVxcblxcbi8qIEFuZHJvaWQgc3R5bGVzICovXFxuLmFuZHJvaWRMaXN0SXRlbVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNjtcXG59XFxuXFxuLmFuZHJvaWROYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5hbmRyb2lkRGVzY3JpcHRpb25MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxufVxcblxcbi5hbmRyb2lkU2VsZWN0SXRlbVRleHRGaWVsZCB7XFxuICAgIHdpZHRoOiA2MDtcXG4gICAgaGVpZ2h0OiA1MDtcXG59XFxuXFxuLmFuZHJvaWRTZWxlY3RJdGVtQnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwO1xcbiAgICBoZWlnaHQ6IDUwO1xcbn1cXG5cXG4uYW5kcm9pZFNlbGVjdEFsbEJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTA7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93cz1cXFwiYXV0bywgKlxcXCIgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sNzAsNzBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI2Y4ZjhmOFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIHJvdz1cXFwiMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNlbGVjdCBhbGxcXFwiICh0YXApPVxcXCJvblNlbGVjdEFsbFRhcCgpXFxcIiBpb3M6Y2xhc3M9XFxcInNlbGVjdEFsbEJ1dHRvblxcXCIgYW5kcm9pZDpjbGFzcz1cXFwiYW5kcm9pZFNlbGVjdEFsbEJ1dHRvblxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJEZXNlbGVjdCBhbGxcXFwiICh0YXApPVxcXCJvbkRlc2VsZWN0QWxsVGFwKClcXFwiPjwvQnV0dG9uPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgcm93PVxcXCIxXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTZWxlY3QgaXRlbSBhdDpcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCBbKG5nTW9kZWwpXT1cXFwidHh0U2VsZWN0SXRlbUluZGV4XFxcIiBpb3M6Y2xhc3M9XFxcImlvc1NlbGVjdEl0ZW1UZXh0RmllbGRcXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImFuZHJvaWRTZWxlY3RJdGVtVGV4dEZpZWxkXFxcIj48L1RleHRGaWVsZD5cXG4gICAgICAgICAgICA8QnV0dG9uICh0YXApPVxcXCJvblNlbGVjdEl0ZW1BdFRhcCgpXFxcIiBpb3M6Y2xhc3M9XFxcImlvc1NlbGVjdEl0ZW1CdXR0b25cXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImFuZHJvaWRTZWxlY3RJdGVtQnV0dG9uXFxcIiB0ZXh0PVxcXCJEb25lXFxcIj48L0J1dHRvbj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIHJvdz1cXFwiMlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGVzZWxlY3QgaXRlbSBhdDpcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCBbKG5nTW9kZWwpXT1cXFwidHh0RGVzZWxlY3RJdGVtSW5kZXhcXFwiIGlvczpjbGFzcz1cXFwiaW9zU2VsZWN0SXRlbVRleHRGaWVsZFxcXCIgYW5kcm9pZDpjbGFzcz1cXFwiYW5kcm9pZFNlbGVjdEl0ZW1UZXh0RmllbGRcXFwiPjwvVGV4dEZpZWxkPlxcbiAgICAgICAgICAgIDxCdXR0b24gKHRhcCk9XFxcIm9uRGVzZWxlY3RJdGVtQXRUYXAoKVxcXCIgdGV4dD1cXFwiRG9uZVxcXCIgaW9zOmNsYXNzPVxcXCJpb3NTZWxlY3RJdGVtQnV0dG9uXFxcIiBhbmRyb2lkOmNsYXNzPVxcXCJhbmRyb2lkU2VsZWN0SXRlbUJ1dHRvblxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDxSYWRMaXN0VmlldyAjbXlSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHJvdz1cXFwiMVxcXCIgbXVsdGlwbGVTZWxlY3Rpb249XFxcInRydWVcXFwiIHNlbGVjdGlvbkJlaGF2aW9yPVxcXCJQcmVzc1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBpb3M6Y2xhc3M9XFxcImlvc0xpc3RJdGVtU3RhY2tMYXlvdXRcXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImFuZHJvaWRMaXN0SXRlbVN0YWNrTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGlvczpjbGFzcz1cXFwiaW9zTmFtZUxhYmVsXFxcIiBhbmRyb2lkOmNsYXNzPVxcXCJhbmRyb2lkTmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGlvczpjbGFzcz1cXFwiaW9zRGVzY3JpcHRpb25MYWJlbFxcXCIgYW5kcm9pZDpjbGFzcz1cXFwiYW5kcm9pZERlc2NyaXB0aW9uTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCIvLyA+PiBhbmd1bGFyLWxpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLXByb2dyYW1tYXRpYy1jb21wb25lbnRcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24tcHJvZ3JhbW1hdGljXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1pdGVtLXNlbGVjdGlvbi1wcm9ncmFtbWF0aWMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uLXByb2dyYW1tYXRpYy5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3SXRlbVNlbGVjdGlvblByb2dyYW1tYXRpY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX3R4dERlc2VsZWN0SXRlbUluZGV4OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdHh0U2VsZWN0SXRlbUluZGV4OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoJ215UmFkTGlzdFZpZXcnLCB7IHJlYWQ6IFJhZExpc3RWaWV3Q29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pIGxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IHR4dERlc2VsZWN0SXRlbUluZGV4KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eHREZXNlbGVjdEl0ZW1JbmRleDtcbiAgICB9XG5cbiAgICBzZXQgdHh0RGVzZWxlY3RJdGVtSW5kZXgodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl90eHREZXNlbGVjdEl0ZW1JbmRleCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCB0eHRTZWxlY3RJdGVtSW5kZXgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R4dFNlbGVjdEl0ZW1JbmRleDtcbiAgICB9XG5cbiAgICBzZXQgdHh0U2VsZWN0SXRlbUluZGV4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fdHh0U2VsZWN0SXRlbUluZGV4ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldE5hbWVFbWFpbERhdGFJdGVtcygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TZWxlY3RJdGVtQXRUYXAoKSB7XG4gICAgICAgIHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcuc2VsZWN0SXRlbUF0KE51bWJlcih0aGlzLnR4dFNlbGVjdEl0ZW1JbmRleCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRlc2VsZWN0SXRlbUF0VGFwKCkge1xuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LmRlc2VsZWN0SXRlbUF0KE51bWJlcih0aGlzLnR4dERlc2VsZWN0SXRlbUluZGV4KSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2VsZWN0QWxsVGFwKCkge1xuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LnNlbGVjdEFsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRlc2VsZWN0QWxsVGFwKCkge1xuICAgICAgICB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LmRlc2VsZWN0QWxsKCk7XG4gICAgfVxufVxuLy8gPDwgYW5ndWxhci1saXN0dmlldy1pdGVtLXNlbGVjdGlvbi1wcm9ncmFtbWF0aWMtY29tcG9uZW50XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmxpc3RJdGVtU3RhY2tMYXlvdXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2O1xcbn1cXG5cXG4ubmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMFxcbn1cXG5cXG4uZGVzY3JpcHRpb25MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTM7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8IS0tID4+IGFuZ3VsYXItbGlzdHZpZXctc2VsZWN0aW9uIC0tPlxcbiAgICA8UmFkTGlzdFZpZXcgcm93PVxcXCIwXFxcIiBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHNlbGVjdGlvbkJlaGF2aW9yPVxcXCJQcmVzc1xcXCIgKGl0ZW1TZWxlY3RlZCk9XFxcIm9uSXRlbVNlbGVjdGVkKCRldmVudClcXFwiIChpdGVtU2VsZWN0aW5nKT1cXFwib25JdGVtU2VsZWN0aW5nKCRldmVudClcXFwiIChpdGVtRGVzZWxlY3RpbmcpPVxcXCJvbkl0ZW1EZXNlbGVjdGluZygkZXZlbnQpXFxcIiAoaXRlbURlc2VsZWN0ZWQpPVxcXCJvbkl0ZW1EZXNlbGVjdGVkKCRldmVudClcXFwiPlxcbiAgICAgICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LXNlbGVjdGlvbiAtLT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxpc3RJdGVtU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPExhYmVsIFt0ZXh0XT1cXFwic2VsZWN0ZWRJdGVtc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIHJvdz1cXFwiMVxcXCI+PC9MYWJlbD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1pdGVtLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctaXRlbS1zZWxlY3Rpb24uY29tcG9uZW50LmNzc1wiXVxufSlcbi8vID4+IGFuZ3VsYXItbGlzdHZpZXctc2VsZWN0aW9uLWNvbXBvbmVudFxuZXhwb3J0IGNsYXNzIExpc3RWaWV3SXRlbVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSXRlbXM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRJdGVtcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtcztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0TmFtZUVtYWlsRGF0YUl0ZW1zKCkpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gXCJObyBTZWxlY3RlZCBpdGVtcy5cIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtU2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxEYXRhSXRlbT47XG4gICAgICAgIGxldCBzZWxlY3RlZFRpdGxlcyA9IFwiU2VsZWN0ZWQgaXRlbXM6IFwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGl0bGVzICs9IHNlbGVjdGVkSXRlbXNbaV0gPyBzZWxlY3RlZEl0ZW1zW2ldLm5hbWUgOiBcIlwiO1xuXG4gICAgICAgICAgICBpZiAoaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGl0bGVzICs9IFwiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBzZWxlY3RlZFRpdGxlcztcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5kYXRhSXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHNlbGVjdGVkOiBcIiArIChzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLm5hbWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtU2VsZWN0aW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgQXJyYXk8RGF0YUl0ZW0+O1xuICAgICAgICBsZXQgc2VsZWN0ZWRUaXRsZXMgPSBcIlNlbGVjdGluZyBpdGVtOiBcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBzZWxlY3RlZEl0ZW1zW2ldID8gc2VsZWN0ZWRJdGVtc1tpXS5uYW1lIDogXCJcIjtcblxuICAgICAgICAgICAgaWYgKGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSB0aGlzLmRhdGFJdGVtcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gc2VsZWN0aW5nOiBcIiArIChzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLm5hbWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtRGVzZWxlY3RpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxEYXRhSXRlbT47XG4gICAgICAgIGxldCBzZWxlY3RlZFRpdGxlcyA9IFwiRGVzZWxlY3RpbmcgaXRlbTogXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2VsZWN0ZWRUaXRsZXMgKz0gc2VsZWN0ZWRJdGVtc1tpXSA/IHNlbGVjdGVkSXRlbXNbaV0ubmFtZSA6IFwiXCI7XG5cbiAgICAgICAgICAgIGlmIChpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaXRsZXMgKz0gXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5kYXRhSXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIGRlc2VsZWN0aW5nOiBcIiArIChzZWxlY3RlZEl0ZW0gJiYgc2VsZWN0ZWRJdGVtLm5hbWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtRGVzZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIEFycmF5PERhdGFJdGVtPjtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGl0bGVzID0gXCJTZWxlY3RlZCBpdGVtczogXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBzZWxlY3RlZEl0ZW1zW2ldID8gc2VsZWN0ZWRJdGVtc1tpXS5uYW1lIDogXCJcIjtcblxuICAgICAgICAgICAgICAgIGlmIChpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGl0bGVzICs9IFwiLCBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBzZWxlY3RlZFRpdGxlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBcIk5vIFNlbGVjdGVkIGl0ZW1zLlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVzZWxlY3RlZEl0ZW0gPSB0aGlzLmRhdGFJdGVtcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gZGVzZWxlY3RlZDogXCIgKyAoZGVzZWxlY3RlZEl0ZW0gJiYgZGVzZWxlY3RlZEl0ZW0ubmFtZSkpO1xuICAgIH1cbn1cbi8vIDw8IGFuZ3VsYXItbGlzdHZpZXctc2VsZWN0aW9uLWNvbXBvbmVudCIsIm1vZHVsZS5leHBvcnRzID0gXCIubGlzdEl0ZW1TdGFja0xheW91dCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTY7XFxufVxcblxcbi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMztcXG59XFxuXFxuLnJlZC10cmFuc3BhcmVudC1zZWxlY3Rpb24tbGlzdCB7XFxuICAgIGl0ZW0tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcImdyZWVuXFxcIiByb3dzPVxcXCIqLCBhdXRvXFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3IGNsYXNzPVxcXCJyZWQtdHJhbnNwYXJlbnQtc2VsZWN0aW9uLWxpc3RcXFwiIHJvdz1cXFwiMFxcXCIgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiBzZWxlY3Rpb25CZWhhdmlvcj1cXFwiUHJlc3NcXFwiIChpdGVtU2VsZWN0ZWQpPVxcXCJvbkl0ZW1TZWxlY3RlZCgkZXZlbnQpXFxcIiAoaXRlbVNlbGVjdGluZyk9XFxcIm9uSXRlbVNlbGVjdGluZygkZXZlbnQpXFxcIiAoaXRlbURlc2VsZWN0aW5nKT1cXFwib25JdGVtRGVzZWxlY3RpbmcoJGV2ZW50KVxcXCIgKGl0ZW1EZXNlbGVjdGVkKT1cXFwib25JdGVtRGVzZWxlY3RlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxpc3RJdGVtU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPExhYmVsIFt0ZXh0XT1cXFwic2VsZWN0ZWRJdGVtc1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIHJvdz1cXFwiMVxcXCI+PC9MYWJlbD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWl0ZW0tc2VsZWN0aW9uXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJzdHlsaW5nLWl0ZW0tc2VsZWN0aW9uLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJzdHlsaW5nLWl0ZW0tc2VsZWN0aW9uLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU3R5bGluZ0l0ZW1TZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9zZWxlY3RlZEl0ZW1zOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldE5hbWVFbWFpbERhdGFJdGVtcygpKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFwiTm8gU2VsZWN0ZWQgaXRlbXMuXCI7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgQXJyYXk8RGF0YUl0ZW0+O1xuICAgICAgICBsZXQgc2VsZWN0ZWRUaXRsZXMgPSBcIlNlbGVjdGVkIGl0ZW1zOiBcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBzZWxlY3RlZEl0ZW1zW2ldID8gc2VsZWN0ZWRJdGVtc1tpXS5uYW1lIDogXCJcIjtcblxuICAgICAgICAgICAgaWYgKGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRUaXRsZXM7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBzZWxlY3RlZDogXCIgKyAoc2VsZWN0ZWRJdGVtICYmIHNlbGVjdGVkSXRlbS5uYW1lKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGluZyhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBsaXN0dmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gbGlzdHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIEFycmF5PERhdGFJdGVtPjtcbiAgICAgICAgbGV0IHNlbGVjdGVkVGl0bGVzID0gXCJTZWxlY3RpbmcgaXRlbTogXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2VsZWN0ZWRUaXRsZXMgKz0gc2VsZWN0ZWRJdGVtc1tpXSA/IHNlbGVjdGVkSXRlbXNbaV0ubmFtZSA6IFwiXCI7XG5cbiAgICAgICAgICAgIGlmIChpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaXRsZXMgKz0gXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5kYXRhSXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIHNlbGVjdGluZzogXCIgKyAoc2VsZWN0ZWRJdGVtICYmIHNlbGVjdGVkSXRlbS5uYW1lKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbURlc2VsZWN0aW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGxpc3R2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBsaXN0dmlldy5nZXRTZWxlY3RlZEl0ZW1zKCkgYXMgQXJyYXk8RGF0YUl0ZW0+O1xuICAgICAgICBsZXQgc2VsZWN0ZWRUaXRsZXMgPSBcIkRlc2VsZWN0aW5nIGl0ZW06IFwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGl0bGVzICs9IHNlbGVjdGVkSXRlbXNbaV0gPyBzZWxlY3RlZEl0ZW1zW2ldLm5hbWUgOiBcIlwiO1xuXG4gICAgICAgICAgICBpZiAoaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGl0bGVzICs9IFwiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBkZXNlbGVjdGluZzogXCIgKyAoc2VsZWN0ZWRJdGVtICYmIHNlbGVjdGVkSXRlbS5uYW1lKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbURlc2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgbGlzdHZpZXcgPSBhcmdzLm9iamVjdCBhcyBSYWRMaXN0VmlldztcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IGxpc3R2aWV3LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxEYXRhSXRlbT47XG4gICAgICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZFRpdGxlcyA9IFwiU2VsZWN0ZWQgaXRlbXM6IFwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaXRsZXMgKz0gc2VsZWN0ZWRJdGVtc1tpXSA/IHNlbGVjdGVkSXRlbXNbaV0ubmFtZSA6IFwiXCI7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA8IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpdGxlcyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gc2VsZWN0ZWRUaXRsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gXCJObyBTZWxlY3RlZCBpdGVtcy5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlc2VsZWN0ZWRJdGVtID0gdGhpcy5kYXRhSXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIGRlc2VsZWN0ZWQ6IFwiICsgKGRlc2VsZWN0ZWRJdGVtICYmIGRlc2VsZWN0ZWRJdGVtLm5hbWUpKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIGlvcyBzdHlsZXMgKi9cXG4uaW9zTGlzdEl0ZW1TdGFja0xheW91dCB7XFxuICAgIHBhZGRpbmctbGVmdDogNTA7XFxufVxcblxcbi5pb3NOYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5pb3NEZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMztcXG59XFxuXFxuLyogQW5kcm9pZCBzdHlsZXMgKi9cXG4uYW5kcm9pZExpc3RJdGVtU3RhY2tMYXlvdXQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2O1xcbn1cXG5cXG4uYW5kcm9pZE5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmFuZHJvaWREZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxMztcXG59XFxuXFxuLnJlZC10cmFuc3BhcmVudC1zZWxlY3Rpb24tbGlzdCB7XFxuICAgIGl0ZW0tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBiYWNrZ3JvdW5kQ29sb3I9XFxcImdyZWVuXFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3IGNsYXNzPVxcXCJyZWQtdHJhbnNwYXJlbnQtc2VsZWN0aW9uLWxpc3RcXFwiIFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgc2VsZWN0aW9uQmVoYXZpb3I9XFxcIlByZXNzXFxcIiBtdWx0aXBsZVNlbGVjdGlvbj1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaW9zOmNsYXNzPVxcXCJpb3NMaXN0SXRlbVN0YWNrTGF5b3V0XFxcIiBhbmRyb2lkOmNsYXNzPVxcXCJhbmRyb2lkTGlzdEl0ZW1TdGFja0xheW91dFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBpb3M6Y2xhc3M9XFxcImlvc05hbWVMYWJlbFxcXCIgYW5kcm9pZDpjbGFzcz1cXFwiYW5kcm9pZE5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBpb3M6Y2xhc3M9XFxcImlvc0Rlc2NyaXB0aW9uTGFiZWxcXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImFuZHJvaWREZXNjcmlwdGlvbkxhYmVsXFxcIiBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24tbXVsdGlwbGVcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInN0eWxpbmctc2VsZWN0aW9uLW11bHRpcGxlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJzdHlsaW5nLXNlbGVjdGlvbi1tdWx0aXBsZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxpbmdTZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXROYW1lRW1haWxEYXRhSXRlbXMoKSk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIubmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMFxcbn1cXG5cXG4uZGVzY3JpcHRpb25MYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPj4gbGlzdHZpZXctYW5ndWxhci1pdGVtLXNlcGFyYXRvciAtLT5cXG48R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGhlaWdodD1cXFwiMlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJCbGFja1xcXCI+PC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuPCEtLSA8PCBsaXN0dmlldy1hbmd1bGFyLWl0ZW0tc2VwYXJhdG9yIC0tPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1pdGVtLXNlcGFyYXRvclwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctaXRlbS1zZXBhcmF0b3IuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWl0ZW0tc2VwYXJhdG9yLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdJdGVtU2VwYXJhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldElkZW50aWNhbERhdGFJdGVtcyg1MCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBDdXN0b21JbWFnZVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLWFuZ3VsYXItY29tcC9jdXN0b20taW1hZ2UtdGVtcGxhdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXN0b21Td2lwZVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vY3VzdG9tLWFuZ3VsYXItY29tcC9jdXN0b20tc3dpcGUtdGVtcGxhdGUuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IExpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQgfSBmcm9tICcuL2dldHRpbmctc3RhcnRlZC9saXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi9nZXR0aW5nLXN0YXJ0ZWQtaG9yaXpvbnRhbC9saXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQtaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdIZWFkZXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1mb290ZXIvYXV0by1zaXplL2xpc3R2aWV3LWF1dG8tc2l6ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdCaWdGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1mb290ZXIvYmlnLWZvb3Rlci9saXN0dmlldy1iaWctZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0JpZ0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLWZvb3Rlci9iaWctaGVhZGVyL2xpc3R2aWV3LWJpZy1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3R2aWV3Q2hhbmdlU2l6ZUF0UnVudGltZUNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLWZvb3Rlci9jaGFuZ2Utc2l6ZS1hdC1ydW50aW1lL2xpc3R2aWV3LWNoYW5nZS1zaXplLWF0LXJ1bnRpbWUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUFuaW1hdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tYW5pbWF0aW9ucy9saXN0dmlldy1pdGVtLWFuaW1hdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUxheW91dHNHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWxheW91dHMvbGlzdHZpZXctaXRlbS1sYXlvdXRzLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUxheW91dHNHcmlkTm9IZWlnaHRDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tbGF5b3V0cy9saXN0dmlldy1pdGVtLWxheW91dHMtZ3JpZC1uby1oZWlnaHQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUxheW91dHNMaW5lYXJDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tbGF5b3V0cy9saXN0dmlldy1pdGVtLWxheW91dHMtbGluZWFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1MYXlvdXRzUnVudGltZUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ydW50aW1lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1MYXlvdXRzU3RhZ2dlcmVkQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWxheW91dHMvbGlzdHZpZXctaXRlbS1sYXlvdXRzLXN0YWdnZXJlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1sb2FkaW5nL2xpc3R2aWV3LWl0ZW0tbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtUmVvcmRlckNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1yZW9yZGVyL2xpc3R2aWV3LWl0ZW0tcmVvcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtUmVvcmRlckhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1yZW9yZGVyL2xpc3R2aWV3LWl0ZW0tcmVvcmRlci1oYW5kbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbVNlbGVjdGlvbk11bHRpcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLXNlbGVjdGlvbi9saXN0dmlldy1pdGVtLXNlbGVjdGlvbi1tdWx0aXBsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtU2VsZWN0aW9uUHJvZ3JhbW1hdGljQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLXNlbGVjdGlvbi9saXN0dmlldy1pdGVtLXNlbGVjdGlvbi1wcm9ncmFtbWF0aWMuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbVNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1zZWxlY3Rpb24vbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxpbmdTZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1zZWxlY3Rpb24vc3R5bGluZy1zZWxlY3Rpb24tbXVsdGlwbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxpbmdJdGVtU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLXNlbGVjdGlvbi9zdHlsaW5nLWl0ZW0tc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1TZXBhcmF0b3JDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tc2VwYXJhdG9yL2xpc3R2aWV3LWl0ZW0tc2VwYXJhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0R5bmFtaWNTaXplQXV0b0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZC1vbi1kZW1hbmQvZHluYW1pYy1zaXplLWF1dG8vbGlzdHZpZXctZHluYW1pYy1zaXplLWF1dG8uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3RHluYW1pY1NpemVNYW51YWxDb21wb25lbnQgfSBmcm9tICcuL2xvYWQtb24tZGVtYW5kL2R5bmFtaWMtc2l6ZS1tYW51YWwvbGlzdHZpZXctZHluYW1pYy1zaXplLW1hbnVhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdGaXhlZFNpemVBdXRvQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkLW9uLWRlbWFuZC9maXhlZC1zaXplLWF1dG8vbGlzdHZpZXctZml4ZWQtc2l6ZS1hdXRvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0ZpeGVkU2l6ZUF1dG9XaXRoU21hbGxTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL2xvYWQtb24tZGVtYW5kL2ZpeGVkLXNpemUtYXV0by13aXRoLXNtYWxsLXNvdXJjZS9saXN0dmlldy1maXhlZC1zaXplLWF1dG8td2l0aC1zbWFsbC1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Rml4ZWRTaXplTWFudWFsQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkLW9uLWRlbWFuZC9maXhlZC1zaXplLW1hbnVhbC9saXN0dmlldy1maXhlZC1zaXplLW1hbnVhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNdWx0aXBsZVRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlwbGUtdGVtcGxhdGVzL2xpc3R2aWV3LW11bHRpcGxlLXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdPYnNlcnZhYmxlQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL29ic2VydmFibGUtYXJyYXkvbGlzdHZpZXctb2JzZXJ2YWJsZS1hcnJheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ29tcG9uZW50IH0gZnJvbSAnLi9wdWxsLXRvLXJlZnJlc2gvZ2V0dGluZy1zdGFydGVkL2xpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ3VzdG9taXplQ29tcG9uZW50IH0gZnJvbSAnLi9wdWxsLXRvLXJlZnJlc2gvY3VzdG9taXplL2xpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaC1jdXN0b21pemUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U2Nyb2xsRXZlbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JvbGwtZXZlbnRzL2xpc3R2aWV3LXNjcm9sbC1ldmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U2Nyb2xsVG9JbmRleEhvcml6b250YWxDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTY3JvbGxUb0luZGV4VmVydGljYWxDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtdmVydGljYWwuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U2Nyb2xsVG9JbmRleEluaXRpYWxDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtaW5pdGlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3Rpb25TdGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdGlvbi1zdGF0ZXMvbGlzdHZpZXctc2VsZWN0aW9uLXN0YXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTd2lwZUFjdGlvbnNNdWx0aXBsZUNvbXBvbmVudCB9IGZyb20gJy4vc3dpcGUtYWN0aW9ucy9saXN0dmlldy1zd2lwZS1hY3Rpb25zLW11bHRpcGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1N3aXBlQWN0aW9uc1RocmVzaG9sZHNDb21wb25lbnQgfSBmcm9tICcuL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtYWN0aW9ucy10aHJlc2hvbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1N3aXBlQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vc3dpcGUtYWN0aW9ucy9saXN0dmlldy1zd2lwZS1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1N3aXBlRGlzYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc3dpcGUtYWN0aW9ucy9saXN0dmlldy1zd2lwZS1kaXNhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0RhdGFPcGVyYXRpb25zRmlsdGVyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJpbmcvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWZpbHRlcmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cGluZy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZ3JvdXBpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ0hlYWRlckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXBpbmctd2l0aC1oZWFkZXItZm9vdGVyL3dpdGgtaGVhZGVyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cGluZy1tdWx0aXBsZS10ZW1wbGF0ZXMvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdHZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nQ29sbGFwc2libGVDb21wb25lbnQgfSBmcm9tICcuL2dyb3VwaW5nLWNvbGxhcHNpYmxlL2xpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZy1jb2xsYXBzaWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nU2Nyb2xsVG9Db21wb25lbnQgfSBmcm9tICcuL2dyb3VwaW5nLXNjcm9sbC10by9ncm91cGluZy1zY3JvbGwtdG8uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNNdWx0aXBsZUNvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlwbGUtb3BlcmF0aW9ucy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtbXVsdGlwbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNNdWx0aXBsZVdpdGhTd2lwZUNvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlwbGUtb3BlcmF0aW9ucy13aXRoLXN3aXBlL2xpc3R2aWV3LW11bHRpcGxlLW9wZXJhdGlvbnMtd2l0aC1zd2lwZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc1NvcnRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NvcnRpbmcvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLXNvcnRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3V2l0aEJpZ0RhdGFDb21wb25lbnQgfSBmcm9tICcuL3dpdGgtYmlnLWRhdGEvbGlzdHZpZXctd2l0aC1iaWctZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdHZpZXdIb3Jpem9udGFsV2l0aFZhcmlhYmxlSXRlbVdpZHRoQ29tcG9uZW50IH0gZnJvbSAnLi9ob3Jpem9udGFsLXdpdGgtdmFyaWFibGUtaXRlbS13aWR0aC9saXN0dmlldy1ob3Jpem9udGFsLXdpdGgtdmFyaWFibGUtaXRlbS13aWR0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdHcm91cFN3aXBlTG9hZFB1bGxDb21wb25lbnQgfSBmcm9tICcuL2dyb3VwLXN3aXBlLWxvYWQtcHVsbC9saXN0dmlldy1ncm91cC1zd2lwZS1sb2FkLXB1bGwuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Rmlyc3RWaXNpYmxlSW5kZXhDb21wb25lbnQgfSBmcm9tICcuL2ZpcnN0LXZpc2libGUtaW5kZXgvZmlyc3QtdmlzaWJsZS1pbmRleC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdHZpZXdDb21wVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tYW5ndWxhci1jb21wL2xpc3R2aWV3LWNvbXAtdGVtcGxhdGUuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vbGlzdHZpZXctZXhhbXBsZXMucm91dGluZyc7XG5pbXBvcnQgeyBDb21tb25EaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9kaXJlY3RpdmVzL2NvbW1vbi1kaXJlY3RpdmVzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBDb21tb25EaXJlY3RpdmVzTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEN1c3RvbUltYWdlVGVtcGxhdGVDb21wb25lbnQsXG4gICAgICAgIEN1c3RvbVN3aXBlVGVtcGxhdGVDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRIb3Jpem9udGFsQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0hlYWRlckZvb3RlckNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdCaWdGb290ZXJDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3QmlnSGVhZGVyQ29tcG9uZW50LFxuICAgICAgICBMaXN0dmlld0NoYW5nZVNpemVBdFJ1bnRpbWVDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3SXRlbUFuaW1hdGlvbnNDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3SXRlbUxheW91dHNHcmlkQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0l0ZW1MYXlvdXRzR3JpZE5vSGVpZ2h0Q29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0l0ZW1MYXlvdXRzTGluZWFyQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0l0ZW1MYXlvdXRzUnVudGltZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdJdGVtTGF5b3V0c1N0YWdnZXJlZENvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdJdGVtTG9hZGluZ0NvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdJdGVtUmVvcmRlckNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdJdGVtUmVvcmRlckhhbmRsZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdJdGVtU2VsZWN0aW9uTXVsdGlwbGVDb21wb25lbnQsXG4gICAgICAgIFN0eWxpbmdTZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdJdGVtU2VsZWN0aW9uUHJvZ3JhbW1hdGljQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0l0ZW1TZWxlY3Rpb25Db21wb25lbnQsXG4gICAgICAgIFN0eWxpbmdJdGVtU2VsZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0l0ZW1TZXBhcmF0b3JDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3RHluYW1pY1NpemVBdXRvQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0R5bmFtaWNTaXplTWFudWFsQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0ZpeGVkU2l6ZUF1dG9Db21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3Rml4ZWRTaXplQXV0b1dpdGhTbWFsbFNvdXJjZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdGaXhlZFNpemVNYW51YWxDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3TXVsdGlwbGVUZW1wbGF0ZXNDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3T2JzZXJ2YWJsZUFycmF5Q29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld1B1bGxUb1JlZnJlc2hDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3UHVsbFRvUmVmcmVzaEN1c3RvbWl6ZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdTY3JvbGxFdmVudHNDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3U2Nyb2xsVG9JbmRleEhvcml6b250YWxDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3U2Nyb2xsVG9JbmRleFZlcnRpY2FsQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld1NlbGVjdGlvblN0YXRlc0NvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdTd2lwZUFjdGlvbnNNdWx0aXBsZUNvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdTd2lwZUFjdGlvbnNUaHJlc2hvbGRzQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld1N3aXBlQWN0aW9uc0NvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdTd2lwZURpc2FibGVDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3U2Nyb2xsVG9JbmRleEluaXRpYWxDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3RGF0YU9wZXJhdGlvbnNGaWx0ZXJpbmdDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ0NvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nSGVhZGVyRm9vdGVyQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdUZW1wbGF0ZXNDb21wb25lbnQsXG4gICAgICAgIExpc3R2aWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ0NvbGxhcHNpYmxlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdTY3JvbGxUb0NvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc011bHRpcGxlQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0RhdGFPcGVyYXRpb25zU29ydGluZ0NvbXBvbmVudCxcbiAgICAgICAgTGlzdFZpZXdXaXRoQmlnRGF0YUNvbXBvbmVudCxcbiAgICAgICAgTGlzdHZpZXdIb3Jpem9udGFsV2l0aFZhcmlhYmxlSXRlbVdpZHRoQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0RhdGFPcGVyYXRpb25zTXVsdGlwbGVXaXRoU3dpcGVDb21wb25lbnQsXG4gICAgICAgIExpc3RWaWV3R3JvdXBTd2lwZUxvYWRQdWxsQ29tcG9uZW50LFxuICAgICAgICBMaXN0Vmlld0ZpcnN0VmlzaWJsZUluZGV4Q29tcG9uZW50LFxuICAgICAgICBMaXN0dmlld0NvbXBUZW1wbGF0ZUNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdFeGFtcGxlc01vZHVsZSB7IH0iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRDb21wb25lbnQgfSBmcm9tICcuL2dldHRpbmctc3RhcnRlZC9saXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRIb3Jpem9udGFsQ29tcG9uZW50IH0gZnJvbSAnLi9nZXR0aW5nLXN0YXJ0ZWQtaG9yaXpvbnRhbC9saXN0dmlldy1nZXR0aW5nLXN0YXJ0ZWQtaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdIZWFkZXJGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1mb290ZXIvYXV0by1zaXplL2xpc3R2aWV3LWF1dG8tc2l6ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdCaWdGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1mb290ZXIvYmlnLWZvb3Rlci9saXN0dmlldy1iaWctZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0dmlld0NoYW5nZVNpemVBdFJ1bnRpbWVDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1mb290ZXIvY2hhbmdlLXNpemUtYXQtcnVudGltZS9saXN0dmlldy1jaGFuZ2Utc2l6ZS1hdC1ydW50aW1lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0JpZ0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLWZvb3Rlci9iaWctaGVhZGVyL2xpc3R2aWV3LWJpZy1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUFuaW1hdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tYW5pbWF0aW9ucy9saXN0dmlldy1pdGVtLWFuaW1hdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUxheW91dHNHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWxheW91dHMvbGlzdHZpZXctaXRlbS1sYXlvdXRzLWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUxheW91dHNHcmlkTm9IZWlnaHRDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tbGF5b3V0cy9saXN0dmlldy1pdGVtLWxheW91dHMtZ3JpZC1uby1oZWlnaHQuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbUxheW91dHNMaW5lYXJDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tbGF5b3V0cy9saXN0dmlldy1pdGVtLWxheW91dHMtbGluZWFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1MYXlvdXRzUnVudGltZUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1sYXlvdXRzL2xpc3R2aWV3LWl0ZW0tbGF5b3V0cy1ydW50aW1lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1MYXlvdXRzU3RhZ2dlcmVkQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWxheW91dHMvbGlzdHZpZXctaXRlbS1sYXlvdXRzLXN0YWdnZXJlZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1sb2FkaW5nL2xpc3R2aWV3LWl0ZW0tbG9hZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtUmVvcmRlckNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1yZW9yZGVyL2xpc3R2aWV3LWl0ZW0tcmVvcmRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtUmVvcmRlckhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1yZW9yZGVyL2xpc3R2aWV3LWl0ZW0tcmVvcmRlci1oYW5kbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbVNlbGVjdGlvbk11bHRpcGxlQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLXNlbGVjdGlvbi9saXN0dmlldy1pdGVtLXNlbGVjdGlvbi1tdWx0aXBsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdJdGVtU2VsZWN0aW9uUHJvZ3JhbW1hdGljQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLXNlbGVjdGlvbi9saXN0dmlldy1pdGVtLXNlbGVjdGlvbi1wcm9ncmFtbWF0aWMuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3SXRlbVNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1zZWxlY3Rpb24vbGlzdHZpZXctaXRlbS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxpbmdTZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1zZWxlY3Rpb24vc3R5bGluZy1zZWxlY3Rpb24tbXVsdGlwbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxpbmdJdGVtU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLXNlbGVjdGlvbi9zdHlsaW5nLWl0ZW0tc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0l0ZW1TZXBhcmF0b3JDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tc2VwYXJhdG9yL2xpc3R2aWV3LWl0ZW0tc2VwYXJhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0R5bmFtaWNTaXplQXV0b0NvbXBvbmVudCB9IGZyb20gJy4vbG9hZC1vbi1kZW1hbmQvZHluYW1pYy1zaXplLWF1dG8vbGlzdHZpZXctZHluYW1pYy1zaXplLWF1dG8uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3RHluYW1pY1NpemVNYW51YWxDb21wb25lbnQgfSBmcm9tICcuL2xvYWQtb24tZGVtYW5kL2R5bmFtaWMtc2l6ZS1tYW51YWwvbGlzdHZpZXctZHluYW1pYy1zaXplLW1hbnVhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdGaXhlZFNpemVBdXRvQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkLW9uLWRlbWFuZC9maXhlZC1zaXplLWF1dG8vbGlzdHZpZXctZml4ZWQtc2l6ZS1hdXRvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0ZpeGVkU2l6ZUF1dG9XaXRoU21hbGxTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL2xvYWQtb24tZGVtYW5kL2ZpeGVkLXNpemUtYXV0by13aXRoLXNtYWxsLXNvdXJjZS9saXN0dmlldy1maXhlZC1zaXplLWF1dG8td2l0aC1zbWFsbC1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Rml4ZWRTaXplTWFudWFsQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkLW9uLWRlbWFuZC9maXhlZC1zaXplLW1hbnVhbC9saXN0dmlldy1maXhlZC1zaXplLW1hbnVhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNdWx0aXBsZVRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlwbGUtdGVtcGxhdGVzL2xpc3R2aWV3LW11bHRpcGxlLXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdPYnNlcnZhYmxlQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL29ic2VydmFibGUtYXJyYXkvbGlzdHZpZXctb2JzZXJ2YWJsZS1hcnJheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ29tcG9uZW50IH0gZnJvbSAnLi9wdWxsLXRvLXJlZnJlc2gvZ2V0dGluZy1zdGFydGVkL2xpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ3VzdG9taXplQ29tcG9uZW50IH0gZnJvbSAnLi9wdWxsLXRvLXJlZnJlc2gvY3VzdG9taXplL2xpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaC1jdXN0b21pemUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U2Nyb2xsRXZlbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JvbGwtZXZlbnRzL2xpc3R2aWV3LXNjcm9sbC1ldmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U2Nyb2xsVG9JbmRleEhvcml6b250YWxDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtaG9yaXpvbnRhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTY3JvbGxUb0luZGV4VmVydGljYWxDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtdmVydGljYWwuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3U2Nyb2xsVG9JbmRleEluaXRpYWxDb21wb25lbnQgfSBmcm9tICcuL3Njcm9sbC10by1pbmRleC9saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtaW5pdGlhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3Rpb25TdGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdGlvbi1zdGF0ZXMvbGlzdHZpZXctc2VsZWN0aW9uLXN0YXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTd2lwZUFjdGlvbnNNdWx0aXBsZUNvbXBvbmVudCB9IGZyb20gJy4vc3dpcGUtYWN0aW9ucy9saXN0dmlldy1zd2lwZS1hY3Rpb25zLW11bHRpcGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1N3aXBlQWN0aW9uc1RocmVzaG9sZHNDb21wb25lbnQgfSBmcm9tICcuL3N3aXBlLWFjdGlvbnMvbGlzdHZpZXctc3dpcGUtYWN0aW9ucy10aHJlc2hvbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1N3aXBlQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vc3dpcGUtYWN0aW9ucy9saXN0dmlldy1zd2lwZS1hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld1N3aXBlRGlzYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vc3dpcGUtYWN0aW9ucy9saXN0dmlldy1zd2lwZS1kaXNhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Vmlld0RhdGFPcGVyYXRpb25zRmlsdGVyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXJpbmcvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWZpbHRlcmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cGluZy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtZ3JvdXBpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ0hlYWRlckZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZ3JvdXBpbmctd2l0aC1oZWFkZXItZm9vdGVyL3dpdGgtaGVhZGVyLWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9ncm91cGluZy1tdWx0aXBsZS10ZW1wbGF0ZXMvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLWdyb3VwaW5nLXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdHZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nQ29sbGFwc2libGVDb21wb25lbnQgfSBmcm9tICcuL2dyb3VwaW5nLWNvbGxhcHNpYmxlL2xpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1ncm91cGluZy1jb2xsYXBzaWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nU2Nyb2xsVG9Db21wb25lbnQgfSBmcm9tICcuL2dyb3VwaW5nLXNjcm9sbC10by9ncm91cGluZy1zY3JvbGwtdG8uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNNdWx0aXBsZUNvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlwbGUtb3BlcmF0aW9ucy9saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtbXVsdGlwbGUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNNdWx0aXBsZVdpdGhTd2lwZUNvbXBvbmVudCB9IGZyb20gJy4vbXVsdGlwbGUtb3BlcmF0aW9ucy13aXRoLXN3aXBlL2xpc3R2aWV3LW11bHRpcGxlLW9wZXJhdGlvbnMtd2l0aC1zd2lwZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc1NvcnRpbmdDb21wb25lbnQgfSBmcm9tICcuL3NvcnRpbmcvbGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLXNvcnRpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3V2l0aEJpZ0RhdGFDb21wb25lbnQgfSBmcm9tICcuL3dpdGgtYmlnLWRhdGEvbGlzdHZpZXctd2l0aC1iaWctZGF0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdHZpZXdIb3Jpem9udGFsV2l0aFZhcmlhYmxlSXRlbVdpZHRoQ29tcG9uZW50IH0gZnJvbSAnLi9ob3Jpem9udGFsLXdpdGgtdmFyaWFibGUtaXRlbS13aWR0aC9saXN0dmlldy1ob3Jpem9udGFsLXdpdGgtdmFyaWFibGUtaXRlbS13aWR0aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdHcm91cFN3aXBlTG9hZFB1bGxDb21wb25lbnQgfSBmcm9tICcuL2dyb3VwLXN3aXBlLWxvYWQtcHVsbC9saXN0dmlldy1ncm91cC1zd2lwZS1sb2FkLXB1bGwuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3Rmlyc3RWaXNpYmxlSW5kZXhDb21wb25lbnQgfSBmcm9tICcuL2ZpcnN0LXZpc2libGUtaW5kZXgvZmlyc3QtdmlzaWJsZS1pbmRleC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdHZpZXdDb21wVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tYW5ndWxhci1jb21wL2xpc3R2aWV3LWNvbXAtdGVtcGxhdGUuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnTGlzdFZpZXdHZXR0aW5nU3RhcnRlZENvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdHZXR0aW5nU3RhcnRlZENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0dldHRpbmdTdGFydGVkSG9yaXpvbnRhbENvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdHZXR0aW5nU3RhcnRlZEhvcml6b250YWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdIZWFkZXJGb290ZXJDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3SGVhZGVyRm9vdGVyQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3QmlnRm9vdGVyQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0JpZ0Zvb3RlckNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0dmlld0NoYW5nZVNpemVBdFJ1bnRpbWVDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3R2aWV3Q2hhbmdlU2l6ZUF0UnVudGltZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0JpZ0hlYWRlckNvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdCaWdIZWFkZXJDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdJdGVtQW5pbWF0aW9uc0NvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdJdGVtQW5pbWF0aW9uc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0l0ZW1MYXlvdXRzR3JpZENvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdJdGVtTGF5b3V0c0dyaWRDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdJdGVtTGF5b3V0c0dyaWROb0hlaWdodENvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdJdGVtTGF5b3V0c0dyaWROb0hlaWdodENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0l0ZW1MYXlvdXRzTGluZWFyQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0l0ZW1MYXlvdXRzTGluZWFyQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3SXRlbUxheW91dHNSdW50aW1lQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0l0ZW1MYXlvdXRzUnVudGltZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0l0ZW1MYXlvdXRzU3RhZ2dlcmVkQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0l0ZW1MYXlvdXRzU3RhZ2dlcmVkQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3SXRlbUxvYWRpbmdDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3SXRlbUxvYWRpbmdDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdJdGVtUmVvcmRlckNvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdJdGVtUmVvcmRlckNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0l0ZW1SZW9yZGVySGFuZGxlQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0l0ZW1SZW9yZGVySGFuZGxlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3SXRlbVNlbGVjdGlvbk11bHRpcGxlQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0l0ZW1TZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdTdHlsaW5nU2VsZWN0aW9uTXVsdGlwbGVDb21wb25lbnQnLCBjb21wb25lbnQ6IFN0eWxpbmdTZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0l0ZW1TZWxlY3Rpb25Qcm9ncmFtbWF0aWNDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3SXRlbVNlbGVjdGlvblByb2dyYW1tYXRpY0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0l0ZW1TZWxlY3Rpb25Db21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3SXRlbVNlbGVjdGlvbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdTdHlsaW5nSXRlbVNlbGVjdGlvbkNvbXBvbmVudCcsIGNvbXBvbmVudDogU3R5bGluZ0l0ZW1TZWxlY3Rpb25Db21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdJdGVtU2VwYXJhdG9yQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0l0ZW1TZXBhcmF0b3JDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdEeW5hbWljU2l6ZUF1dG9Db21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3RHluYW1pY1NpemVBdXRvQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3RHluYW1pY1NpemVNYW51YWxDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3RHluYW1pY1NpemVNYW51YWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdGaXhlZFNpemVBdXRvQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0ZpeGVkU2l6ZUF1dG9Db21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdGaXhlZFNpemVBdXRvV2l0aFNtYWxsU291cmNlQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0ZpeGVkU2l6ZUF1dG9XaXRoU21hbGxTb3VyY2VDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdGaXhlZFNpemVNYW51YWxDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3Rml4ZWRTaXplTWFudWFsQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3TXVsdGlwbGVUZW1wbGF0ZXNDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3TXVsdGlwbGVUZW1wbGF0ZXNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdPYnNlcnZhYmxlQXJyYXlDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3T2JzZXJ2YWJsZUFycmF5Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3UHVsbFRvUmVmcmVzaENvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3UHVsbFRvUmVmcmVzaEN1c3RvbWl6ZUNvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ3VzdG9taXplQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3U2Nyb2xsRXZlbnRzQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld1Njcm9sbEV2ZW50c0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld1Njcm9sbFRvSW5kZXhIb3Jpem9udGFsQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld1Njcm9sbFRvSW5kZXhIb3Jpem9udGFsQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3U2Nyb2xsVG9JbmRleFZlcnRpY2FsQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld1Njcm9sbFRvSW5kZXhWZXJ0aWNhbENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld1NlbGVjdGlvblN0YXRlc0NvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdTZWxlY3Rpb25TdGF0ZXNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdTd2lwZUFjdGlvbnNNdWx0aXBsZUNvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdTd2lwZUFjdGlvbnNNdWx0aXBsZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld1N3aXBlQWN0aW9uc1RocmVzaG9sZHNDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3U3dpcGVBY3Rpb25zVGhyZXNob2xkc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld1N3aXBlQWN0aW9uc0NvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdTd2lwZUFjdGlvbnNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdTd2lwZURpc2FibGVDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3U3dpcGVEaXNhYmxlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3U2Nyb2xsVG9JbmRleEluaXRpYWxDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3U2Nyb2xsVG9JbmRleEluaXRpYWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0ZpbHRlcmluZ0NvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0ZpbHRlcmluZ0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdIZWFkZXJGb290ZXJDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ0hlYWRlckZvb3RlckNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdUZW1wbGF0ZXNDb21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ1RlbXBsYXRlc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0dmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdDb2xsYXBzaWJsZUNvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdHZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nQ29sbGFwc2libGVDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nU2Nyb2xsVG9Db21wb25lbnQnLCBjb21wb25lbnQ6IExpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ1Njcm9sbFRvQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3RGF0YU9wZXJhdGlvbnNNdWx0aXBsZUNvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdEYXRhT3BlcmF0aW9uc011bHRpcGxlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3RGF0YU9wZXJhdGlvbnNNdWx0aXBsZVdpdGhTd2lwZUNvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdFZpZXdEYXRhT3BlcmF0aW9uc011bHRpcGxlV2l0aFN3aXBlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3RGF0YU9wZXJhdGlvbnNTb3J0aW5nQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0RhdGFPcGVyYXRpb25zU29ydGluZ0NvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld1dpdGhCaWdEYXRhQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld1dpdGhCaWdEYXRhQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3R2aWV3SG9yaXpvbnRhbFdpdGhWYXJpYWJsZUl0ZW1XaWR0aENvbXBvbmVudCcsIGNvbXBvbmVudDogTGlzdHZpZXdIb3Jpem9udGFsV2l0aFZhcmlhYmxlSXRlbVdpZHRoQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3RWaWV3R3JvdXBTd2lwZUxvYWRQdWxsQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0dyb3VwU3dpcGVMb2FkUHVsbENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdMaXN0Vmlld0ZpcnN0VmlzaWJsZUluZGV4Q29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0Vmlld0ZpcnN0VmlzaWJsZUluZGV4Q29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ0xpc3R2aWV3Q29tcFRlbXBsYXRlQ29tcG9uZW50JywgY29tcG9uZW50OiBMaXN0dmlld0NvbXBUZW1wbGF0ZUNvbXBvbmVudCB9XG5dOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuaXRlbVRlbXBsYXRlU3RhY2tMYXlvdXQge1xcbiAgICBwYWRkaW5nOiA1IDEwIDUgMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxufVxcblxcbi5pbm5lck90ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZzogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NWE1NjU7XFxufVxcblxcbi5sYWJlbHNTdGFja0xheW91dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTtcXG59XFxuXFxuLmxhYmVsTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1ib3R0b206IDg7XFxufVxcblxcbi5sYWJlbFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sYWJlbFRleHQge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2FkT25EZW1hbmRJdGVtR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIGxvYWRPbkRlbWFuZE1vZGU9XFxcIkF1dG9cXFwiIChsb2FkTW9yZURhdGFSZXF1ZXN0ZWQpPVxcXCJvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoJGV2ZW50KVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlubmVyT3RlbVRlbXBsYXRlU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxOU0ltZyBoZWlnaHQ9XFxcIjEwMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiPjwvTlNJbWc+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxhYmVsc1N0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxOYW1lXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsVGl0bGVcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbFRleHRcXFwiIHRleHQ9XFxcInt7aXRlbS50ZXh0fX0gKyB7e2l0ZW0udGV4dH19ICsge3tpdGVtLnRleHR9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uLy4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0xpbmVhckxheW91dCwgUmFkTGlzdFZpZXcsIExvYWRPbkRlbWFuZExpc3RWaWV3RXZlbnREYXRhLCBMaXN0Vmlld1Njcm9sbERpcmVjdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuY29uc3QgcG9zdHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vZXhhbXBsZXMvcG9zdHMuanNvblwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1keW5hbWljLXNpemUtYXV0b1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWR5bmFtaWMtc2l6ZS1hdXRvLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1keW5hbWljLXNpemUtYXV0by5jb21wb25lbnQuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEeW5hbWljU2l6ZUF1dG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9zb3VyY2VEYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBsYXlvdXQ6IExpc3RWaWV3TGluZWFyTGF5b3V0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxheW91dCA9IG5ldyBMaXN0Vmlld0xpbmVhckxheW91dCgpO1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxEaXJlY3Rpb24gPSBMaXN0Vmlld1Njcm9sbERpcmVjdGlvbi5WZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5pbml0RGF0YUl0ZW1zKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIHRoaXMuYWRkTW9yZUl0ZW1zRnJvbVNvdXJjZSg2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG4gICAgcHVibGljIGFkZE1vcmVJdGVtc0Zyb21Tb3VyY2UoY2h1bmtTaXplOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gdGhpcy5fc291cmNlRGF0YUl0ZW1zLnNwbGljZSgwLCBjaHVua1NpemUpO1xuICAgICAgICB0aGlzLmRhdGFJdGVtcy5wdXNoKG5ld0l0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExvYWRPbkRlbWFuZExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICAgICAgY29uc3QgbGlzdFZpZXc6IFJhZExpc3RWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgIGlmICh0aGlzLl9zb3VyY2VEYXRhSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhhdC5nZXQoKS5hZGRNb3JlSXRlbXNGcm9tU291cmNlKDIpO1xuICAgICAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZ3MucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RGF0YUl0ZW1zKCkge1xuICAgICAgICB0aGlzLl9zb3VyY2VEYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3RzLm5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYW5kcm9pZEFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291cmNlRGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBwb3N0cy5pbWFnZXNbaV0udG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291cmNlRGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBwb3N0cy5pbWFnZXNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaXRlbVRlbXBsYXRlU3RhY2tMYXlvdXQge1xcbiAgICBwYWRkaW5nOiA1IDEwIDUgMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxufVxcblxcbi5pbm5lck90ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZzogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NWE1NjU7XFxufVxcblxcbi5sYWJlbHNTdGFja0xheW91dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTtcXG59XFxuXFxuLmxhYmVsTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1ib3R0b206IDg7XFxufVxcblxcbi5sYWJlbFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sYWJlbFRleHQge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2FkT25EZW1hbmRJdGVtR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIGxvYWRPbkRlbWFuZE1vZGU9XFxcIk1hbnVhbFxcXCIgKGxvYWRNb3JlRGF0YVJlcXVlc3RlZCk9XFxcIm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVRlbXBsYXRlU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5uZXJPdGVtVGVtcGxhdGVTdGFja0xheW91dFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPE5TSW1nIGhlaWdodD1cXFwiMTAwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBbc3JjXT1cXFwiaXRlbS5pbWFnZVxcXCI+PC9OU0ltZz5cXG5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGFiZWxzU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbE5hbWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxUaXRsZVxcXCIgW3RleHRdPVxcXCJpdGVtLnRpdGxlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsVGV4dFxcXCIgdGV4dD1cXFwie3tpdGVtLnRleHR9fSArIHt7aXRlbS50ZXh0fX0gKyB7e2l0ZW0udGV4dH19XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgICA8ZGl2ICp0a0lmSU9TPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0ICp0a0xpc3RMb2FkT25EZW1hbmRUZW1wbGF0ZSBjbGFzcz1cXFwibG9hZE9uRGVtYW5kSXRlbUdyaWRMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTG9hZCBNb3JlXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IExpc3RWaWV3TGluZWFyTGF5b3V0LCBSYWRMaXN0VmlldywgTG9hZE9uRGVtYW5kTGlzdFZpZXdFdmVudERhdGEsIExpc3RWaWV3U2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgYW5kcm9pZCBhcyBhbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCI7XG5jb25zdCBwb3N0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9leGFtcGxlcy9wb3N0cy5qc29uXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWR5bmFtaWMtc2l6ZS1tYW51YWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1keW5hbWljLXNpemUtbWFudWFsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1keW5hbWljLXNpemUtbWFudWFsLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0R5bmFtaWNTaXplTWFudWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBfc291cmNlRGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgbGF5b3V0OiBMaXN0Vmlld0xpbmVhckxheW91dDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBuZXcgTGlzdFZpZXdMaW5lYXJMYXlvdXQoKTtcbiAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsRGlyZWN0aW9uID0gTGlzdFZpZXdTY3JvbGxEaXJlY3Rpb24uVmVydGljYWw7XG4gICAgICAgIHRoaXMuaW5pdERhdGFJdGVtcygpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xuICAgICAgICB0aGlzLmFkZE1vcmVJdGVtc0Zyb21Tb3VyY2UoNik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRNb3JlSXRlbXNGcm9tU291cmNlKGNodW5rU2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBuZXdJdGVtcyA9IHRoaXMuX3NvdXJjZURhdGFJdGVtcy5zcGxpY2UoMCwgY2h1bmtTaXplKTtcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMucHVzaChuZXdJdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChhcmdzOiBMb2FkT25EZW1hbmRMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCB0aGF0ID0gbmV3IFdlYWtSZWYodGhpcyk7XG4gICAgICAgIGNvbnN0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBpZiAodGhpcy5fc291cmNlRGF0YUl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoYXQuZ2V0KCkuYWRkTW9yZUl0ZW1zRnJvbVNvdXJjZSgyKTtcbiAgICAgICAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZ3MucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RGF0YUl0ZW1zKCkge1xuICAgICAgICB0aGlzLl9zb3VyY2VEYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3RzLm5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYW5kcm9pZEFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291cmNlRGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBwb3N0cy5pbWFnZXNbaV0udG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291cmNlRGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBwb3N0cy5pbWFnZXNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaXRlbVRlbXBsYXRlU3RhY2tMYXlvdXQge1xcbiAgICBwYWRkaW5nOiA1IDEwIDUgMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxufVxcblxcbi5pbm5lck90ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZzogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NWE1NjU7XFxufVxcblxcbi5sYWJlbHNTdGFja0xheW91dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTtcXG59XFxuXFxuLmxhYmVsTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1ib3R0b206IDg7XFxufVxcblxcbi5sYWJlbFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sYWJlbFRleHQge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2FkT25EZW1hbmRJdGVtR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFjdGlvbi1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uIHJvd3M9XFxcImF1dG8sICpcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQXV0b1xcXCIgKHRhcCk9XFxcIm9uQ2hhbmdlQXV0bygpXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJ1dHRvblxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJNYW51YWxcXFwiICh0YXApPVxcXCJvbkNoYW5nZU1hbnVhbCgpXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJ1dHRvblxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJOb25lXFxcIiAodGFwKT1cXFwib25DaGFuZ2VOb25lKClcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYnV0dG9uXFxcIj48L0J1dHRvbj5cXG4gICAgPC9TdGFja0xheW91dD5cXG4gICAgXFxuICAgIDxSYWRMaXN0VmlldyAjbXlMaXN0VmlldyBcXG4gICAgICAgICAgICAgICAgcm93PVxcXCIxXFxcIiBcXG4gICAgICAgICAgICAgICAgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiBcXG4gICAgICAgICAgICAgICAgbG9hZE9uRGVtYW5kTW9kZT1cXFwiTWFudWFsXFxcIiBcXG4gICAgICAgICAgICAgICAgKGxvYWRNb3JlRGF0YVJlcXVlc3RlZCk9XFxcIm9uTG9hZE1vcmVEYXRhUmVxdWVzdGVkKCRldmVudClcXFwiIFxcbiAgICAgICAgICAgICAgICBwdWxsVG9SZWZyZXNoPVxcXCJ0cnVlXFxcIiBcXG4gICAgICAgICAgICAgICAgKHB1bGxUb1JlZnJlc2hJbml0aWF0ZWQpPVxcXCJvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoJGV2ZW50KVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlubmVyT3RlbVRlbXBsYXRlU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxOU0ltZyBoZWlnaHQ9XFxcIjEwMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiPjwvTlNJbWc+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxhYmVsc1N0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxOYW1lXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsVGl0bGVcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbFRleHRcXFwiIFt0ZXh0XT1cXFwiaXRlbS50ZXh0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8TGlzdFZpZXdMaW5lYXJMYXlvdXQgKnRrSWZJT1MgdGtMaXN0Vmlld0xheW91dCBpdGVtSGVpZ2h0PVxcXCIxMjBcXFwiIGl0ZW1JbnNlcnRBbmltYXRpb249XFxcIkZhZGVcXFwiIGl0ZW1EZWxldGVBbmltYXRpb249XFxcIkZhZGVcXFwiPjwvTGlzdFZpZXdMaW5lYXJMYXlvdXQ+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uLy4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0xpbmVhckxheW91dCwgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMb2FkT25EZW1hbmRMaXN0Vmlld0V2ZW50RGF0YSwgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLCBMaXN0Vmlld1Njcm9sbERpcmVjdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcblxuY29uc3Qgc2VydmVyUGVvcGxlQ29sbGVjdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi8uLi9leGFtcGxlcy9wZW9wbGUuanNvblwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1maXhlZC1zaXplLWF1dG8td2l0aC1zbWFsbC1zb3VyY2VcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1maXhlZC1zaXplLWF1dG8td2l0aC1zbWFsbC1zb3VyY2UuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LWZpeGVkLXNpemUtYXV0by13aXRoLXNtYWxsLXNvdXJjZS5jb21wb25lbnQuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGaXhlZFNpemVBdXRvV2l0aFNtYWxsU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBfc291cmNlRGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgbGF5b3V0OiBMaXN0Vmlld0xpbmVhckxheW91dDtcbiAgICBwcml2YXRlIF9pdGVtc0xvYWRpbmc6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PHtuYW1lOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgaW1hZ2U6IHN0cmluZ30+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zID0gc2VydmVyUGVvcGxlQ29sbGVjdGlvbi5wZW9wbGUuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBAVmlld0NoaWxkKFwibXlMaXN0Vmlld1wiLCB7IHJlYWQ6IFJhZExpc3RWaWV3Q29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBuZXcgTGlzdFZpZXdMaW5lYXJMYXlvdXQoKTtcbiAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsRGlyZWN0aW9uID0gTGlzdFZpZXdTY3JvbGxEaXJlY3Rpb24uVmVydGljYWw7XG4gICAgICAgIHRoaXMuX3NvdXJjZURhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIHRoaXMuaW5pdFNvdXJjZURhdGFJdGVtcygxKTtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4oKTtcbiAgICAgICAgdGhpcy5hZGRNb3JlSXRlbXNGcm9tU291cmNlKDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWRNb3JlRGF0YVJlcXVlc3RlZChhcmdzOiBMb2FkT25EZW1hbmRMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCB0aGF0ID0gbmV3IFdlYWtSZWYodGhpcyk7XG4gICAgICAgIGNvbnN0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBpZiAoIXRoaXMuX2l0ZW1zTG9hZGluZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NvdXJjZURhdGFJdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWQgTW9yZSBEYXRhIFJlcXVlc3RlZCBXSUxMIExPQURcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgZmxhZyB0byBtYWtlIHN1cmUgdGhhdCBpdGVtcyBhcmUgYmVpbmcgbG9hZGVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLlxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGR1ZSB0byB0aGUgYXN5YyBuYXR1cmUgb2YgZ2V0dGluZyBhbmQgYWRkaW5nIG5ldyBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIHRvIHRoZSAnaXRlbXMnIHByb3BlcnR5IG9mIHRoZSBSYWRMaXN0VmlldyB0aGF0IG1heSBiZSBjYXVzZWQgYnkgcmVtb3RlIHNlcnZlciBBUEkgbGFnLlxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1zTG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRoYXRJbnN0YW5jZSA9IHRoYXQuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoYXRJbnN0YW5jZS5hZGRNb3JlSXRlbXNGcm9tU291cmNlKDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBmbGFnIHRvIGFsbG93IG5leHQgY2FsbHMgb2YgJ2xvYWRNb3JlRGF0YVJlcXVlc3RlZCcgdG8gbG9hZCBtb3JlIGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIHRoYXRJbnN0YW5jZS5faXRlbXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgbGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcbiAgICAgICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkIE1vcmUgRGF0YSBSZXF1ZXN0ZWQgQ0FOTk9UIExPQURcIik7XG5cbiAgICAgICAgICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHVsbCBUbyBSZWZyZXNoIEluaXRpYXRlZFwiKTtcbiAgICAgICAgY29uc3QgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3QgdGhhdCA9IG5ldyBXZWFrUmVmKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5fYWxsSXRlbXMubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAgICAgICAgIC8vIEFkZCAxIG1vcmUgaXRlbSB0byB0aGUgJ19zb3VyY2VEYXRhSXRlbXMnLFxuICAgICAgICAgICAgLy8gU2ltdWxhdGluZyBhIHNjZW5hcmlvIHdoZXJlIHRoZSAnYmFja2VuZCcgaGFzIGJlZW4gdXBkYXRlZCB3aXRoIDEgbW9yZSBpdGVtIHRoYXQgY291bGQgYmUgbG9hZGVkIGJ5ICdsb2FkIG9uIGRlbWFuZCdcbiAgICAgICAgICAgIHRoaXMuYWRkSXRlbXNUb1NvdXJjZURhdGFJdGVtcygxKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoaXNJbnN0YW5jZSA9IHRoYXQuZ2V0KCk7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlck9mSXRlbXNUb0FkZCA9IDE7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkl0ZW1zVG9BZGQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc0luc3RhbmNlLl9hbGxJdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNJbnN0YW5jZS5fZGF0YUl0ZW1zLnNwbGljZSgwLCAwLCB0aGlzSW5zdGFuY2UuZ2V0TmV4dEl0ZW1Gcm9tU2VydmVyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCh0aGlzSW5zdGFuY2UuaXNMb2FkT25EZW1hbmRNb2RlTmVlZGVkKCkpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQodGhpcy5pc0xvYWRPbkRlbWFuZE1vZGVOZWVkZWQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzTG9hZE9uRGVtYW5kTW9kZU5lZWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0U291cmNlRGF0YUl0ZW1zKHNpemU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFkZEl0ZW1zVG9Tb3VyY2VEYXRhSXRlbXMoc2l6ZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRJdGVtc1RvU291cmNlRGF0YUl0ZW1zKHNpemU6IG51bWJlcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fc291cmNlRGF0YUl0ZW1zLnB1c2godGhpcy5nZXROZXh0SXRlbUZyb21TZXJ2ZXIoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZE1vcmVJdGVtc0Zyb21Tb3VyY2UoY2h1bmtTaXplOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5ld0l0ZW1zID0gdGhpcy5fc291cmNlRGF0YUl0ZW1zLnNwbGljZSgwLCBjaHVua1NpemUpO1xuICAgICAgICB0aGlzLmRhdGFJdGVtcy5wdXNoKG5ld0l0ZW1zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE5leHRJdGVtRnJvbVNlcnZlcigpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9hbGxJdGVtcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgICAgIGxldCBpbWFnZVBhdGg6IHN0cmluZztcbiAgICAgICAgaWYgKGFuZHJvaWRBcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgaW1hZ2VQYXRoID0gaXRlbS5pbWFnZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW1hZ2VQYXRoID0gaXRlbS5pbWFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRGF0YUl0ZW0odGhpcy5fc291cmNlRGF0YUl0ZW1zLmxlbmd0aCwgaXRlbS5uYW1lLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBpdGVtLnRpdGxlLCBpdGVtLnRleHQsIGltYWdlUGF0aCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uQ2hhbmdlQXV0bygpIHtcbiAgICAgICAgdGhpcy5teUxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuQXV0bztcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DaGFuZ2VOb25lKCkge1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNoYW5nZU1hbnVhbCgpIHtcbiAgICAgICAgdGhpcy5teUxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTWFudWFsO1xuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuaXRlbVRlbXBsYXRlU3RhY2tMYXlvdXQge1xcbiAgICBwYWRkaW5nOiA1IDEwIDUgMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxufVxcblxcbi5pbm5lck90ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZzogMTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NWE1NjU7XFxufVxcblxcbi5sYWJlbHNTdGFja0xheW91dCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNTtcXG59XFxuXFxuLmxhYmVsTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1ib3R0b206IDg7XFxufVxcblxcbi5sYWJlbFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sYWJlbFRleHQge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2FkT25EZW1hbmRJdGVtR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmZmN2Y7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIGxvYWRPbkRlbWFuZE1vZGU9XFxcIkF1dG9cXFwiIChsb2FkTW9yZURhdGFSZXF1ZXN0ZWQpPVxcXCJvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoJGV2ZW50KVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIml0ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImlubmVyT3RlbVRlbXBsYXRlU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxOU0ltZyBoZWlnaHQ9XFxcIjEwMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiPjwvTlNJbWc+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxhYmVsc1N0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxOYW1lXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsVGl0bGVcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbFRleHRcXFwiIFt0ZXh0XT1cXFwiaXRlbS50ZXh0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgICA8TGlzdFZpZXdMaW5lYXJMYXlvdXQgKnRrSWZJT1MgdGtMaXN0Vmlld0xheW91dCBpdGVtSGVpZ2h0PVxcXCIxMjBcXFwiPjwvTGlzdFZpZXdMaW5lYXJMYXlvdXQ+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IExpc3RWaWV3TGluZWFyTGF5b3V0LCBSYWRMaXN0VmlldywgTG9hZE9uRGVtYW5kTGlzdFZpZXdFdmVudERhdGEsIExpc3RWaWV3U2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgYW5kcm9pZCBhcyBhbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCI7XG5jb25zdCBwb3N0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9leGFtcGxlcy9wb3N0cy5qc29uXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWZpeGVkLXNpemUtYXV0b1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWZpeGVkLXNpemUtYXV0by5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctZml4ZWQtc2l6ZS1hdXRvLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZpeGVkU2l6ZUF1dG9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9zb3VyY2VEYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBsYXlvdXQ6IExpc3RWaWV3TGluZWFyTGF5b3V0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxheW91dCA9IG5ldyBMaXN0Vmlld0xpbmVhckxheW91dCgpO1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxEaXJlY3Rpb24gPSBMaXN0Vmlld1Njcm9sbERpcmVjdGlvbi5WZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5pbml0RGF0YUl0ZW1zKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIHRoaXMuYWRkTW9yZUl0ZW1zRnJvbVNvdXJjZSg2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTW9yZUl0ZW1zRnJvbVNvdXJjZShjaHVua1NpemU6IG51bWJlcikge1xuICAgICAgICBsZXQgbmV3SXRlbXMgPSB0aGlzLl9zb3VyY2VEYXRhSXRlbXMuc3BsaWNlKDAsIGNodW5rU2l6ZSk7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zLnB1c2gobmV3SXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTG9hZE9uRGVtYW5kTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IG5ldyBXZWFrUmVmKHRoaXMpO1xuICAgICAgICBjb25zdCBsaXN0VmlldzogUmFkTGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgaWYgKHRoaXMuX3NvdXJjZURhdGFJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGF0LmdldCgpLmFkZE1vcmVJdGVtc0Zyb21Tb3VyY2UoMik7XG4gICAgICAgICAgICAgICAgbGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdERhdGFJdGVtcygpIHtcbiAgICAgICAgdGhpcy5fc291cmNlRGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5uYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFuZHJvaWRBcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZURhdGFJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgcG9zdHMuaW1hZ2VzW2ldLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZURhdGFJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgcG9zdHMuaW1hZ2VzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLml0ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZzogNSAxMCA1IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZmZjdmO1xcbn1cXG5cXG4uaW5uZXJPdGVtVGVtcGxhdGVTdGFja0xheW91dCB7XFxuICAgIHBhZGRpbmc6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhNTY1O1xcbn1cXG5cXG4ubGFiZWxzU3RhY2tMYXlvdXQge1xcbiAgICBtYXJnaW4tbGVmdDogMTU7XFxufVxcblxcbi5sYWJlbE5hbWUge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4O1xcbn1cXG5cXG4ubGFiZWxUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGFiZWxUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubG9hZE9uRGVtYW5kSXRlbUdyaWRMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZmZjdmO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8IS0tID4+IGFuZ3VsYXItbGlzdHZpZXctbG9hZC1vbi1kZW1hbmQgLS0+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIGxvYWRPbkRlbWFuZE1vZGU9XFxcIk1hbnVhbFxcXCIgKGxvYWRNb3JlRGF0YVJlcXVlc3RlZCk9XFxcIm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZCgkZXZlbnQpXFxcIj5cXG4gICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LWxvYWQtb24tZGVtYW5kIC0tPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpdGVtVGVtcGxhdGVTdGFja0xheW91dFxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJpbm5lck90ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TlNJbWcgaGVpZ2h0PVxcXCIxMDBcXFwiIHdpZHRoPVxcXCI4MFxcXCIgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiPjwvTlNJbWc+XFxuXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImxhYmVsc1N0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxOYW1lXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsVGl0bGVcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbFRleHRcXFwiIFt0ZXh0XT1cXFwiaXRlbS50ZXh0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgICA8TGlzdFZpZXdMaW5lYXJMYXlvdXQgKnRrSWZJT1MgdGtMaXN0Vmlld0xheW91dCBpdGVtSGVpZ2h0PVxcXCIxMjBcXFwiPjwvTGlzdFZpZXdMaW5lYXJMYXlvdXQ+XFxuXFxuICAgICAgICA8ZGl2ICp0a0lmSU9TPlxcbiAgICAgICAgICAgIDwhLS0gPj4gbGlzdHZpZXctbG9hZC1vbi1kZW1hbmQtY3VzdG9tLXZpZXcgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgKnRrTGlzdExvYWRPbkRlbWFuZFRlbXBsYXRlIGNsYXNzPVxcXCJsb2FkT25EZW1hbmRJdGVtR3JpZExheW91dFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMb2FkIE1vcmVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPCEtLSA8PCBsaXN0dmlldy1sb2FkLW9uLWRlbWFuZC1jdXN0b20tdmlldyAtLT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uLy4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0xpbmVhckxheW91dCwgUmFkTGlzdFZpZXcsIExvYWRPbkRlbWFuZExpc3RWaWV3RXZlbnREYXRhLCBMaXN0Vmlld1Njcm9sbERpcmVjdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuY29uc3QgcG9zdHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vZXhhbXBsZXMvcG9zdHMuanNvblwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctZml4ZWQtc2l6ZS1tYW51YWxcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWZpeGVkLXNpemUtbWFudWFsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1maXhlZC1zaXplLW1hbnVhbC5jb21wb25lbnQuY3NzXCJdXG59KVxuLy8gPj4gYW5ndWxhci1saXN0dmlldy1sb2FkLW9uLWRlbWFuZC1jb2RlXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGaXhlZFNpemVNYW51YWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9zb3VyY2VEYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBsYXlvdXQ6IExpc3RWaWV3TGluZWFyTGF5b3V0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxheW91dCA9IG5ldyBMaXN0Vmlld0xpbmVhckxheW91dCgpO1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxEaXJlY3Rpb24gPSBMaXN0Vmlld1Njcm9sbERpcmVjdGlvbi5WZXJ0aWNhbDtcbiAgICAgICAgdGhpcy5pbml0RGF0YUl0ZW1zKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIHRoaXMuYWRkTW9yZUl0ZW1zRnJvbVNvdXJjZSg2KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhZGRNb3JlSXRlbXNGcm9tU291cmNlKGNodW5rU2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBuZXdJdGVtcyA9IHRoaXMuX3NvdXJjZURhdGFJdGVtcy5zcGxpY2UoMCwgY2h1bmtTaXplKTtcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMucHVzaChuZXdJdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChhcmdzOiBMb2FkT25EZW1hbmRMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCB0aGF0ID0gbmV3IFdlYWtSZWYodGhpcyk7XG4gICAgICAgIGNvbnN0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBpZiAodGhpcy5fc291cmNlRGF0YUl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoYXQuZ2V0KCkuYWRkTW9yZUl0ZW1zRnJvbVNvdXJjZSgyKTtcbiAgICAgICAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdERhdGFJdGVtcygpIHtcbiAgICAgICAgdGhpcy5fc291cmNlRGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5uYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFuZHJvaWRBcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZURhdGFJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgcG9zdHMuaW1hZ2VzW2ldLnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NvdXJjZURhdGFJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgcG9zdHMuaW1hZ2VzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyA8PCBhbmd1bGFyLWxpc3R2aWV3LWxvYWQtb24tZGVtYW5kLWNvZGVcbiIsImltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSAnLi9kYXRhSXRlbSc7XG5cbmV4cG9ydCBjb25zdCBEQVRBSVRFTVM6IERhdGFJdGVtW10gPSBbXG4gICAgeyBcImlkXCI6IDEsIFwibmFtZVwiOiBcIkl0ZW0gMVwiLCBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uLlwiLCBcInRpdGxlXCI6IFwiVGhpcyBpcyBpdGVtIFRpdGxlXCIsIFwidGV4dFwiOiBcIlRoaXMgaXMgaXRlbSBUZXh0XCIsICBcImltYWdlXCI6IFwiVGhpcyBpcyBpdGVtIEltYWdlXCIsIFwic2VsZWN0ZWRcIjogZmFsc2UgfSxcbiAgICB7IFwiaWRcIjogMiwgXCJuYW1lXCI6IFwiSXRlbSAyXCIsIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb24uXCIsIFwidGl0bGVcIjogXCJUaGlzIGlzIGl0ZW0gVGl0bGVcIiwgXCJ0ZXh0XCI6IFwiVGhpcyBpcyBpdGVtIFRleHRcIiwgIFwiaW1hZ2VcIjogXCJUaGlzIGlzIGl0ZW0gSW1hZ2VcIiwgXCJzZWxlY3RlZFwiOiBmYWxzZSB9LFxuICAgIHsgXCJpZFwiOiAzLCBcIm5hbWVcIjogXCJJdGVtIDNcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvbi5cIiwgXCJ0aXRsZVwiOiBcIlRoaXMgaXMgaXRlbSBUaXRsZVwiLCBcInRleHRcIjogXCJUaGlzIGlzIGl0ZW0gVGV4dFwiLCAgXCJpbWFnZVwiOiBcIlRoaXMgaXMgaXRlbSBJbWFnZVwiLCBcInNlbGVjdGVkXCI6IGZhbHNlIH0sXG4gICAgeyBcImlkXCI6IDQsIFwibmFtZVwiOiBcIkl0ZW0gNFwiLCBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uLlwiLCBcInRpdGxlXCI6IFwiVGhpcyBpcyBpdGVtIFRpdGxlXCIsIFwidGV4dFwiOiBcIlRoaXMgaXMgaXRlbSBUZXh0XCIsICBcImltYWdlXCI6IFwiVGhpcyBpcyBpdGVtIEltYWdlXCIsIFwic2VsZWN0ZWRcIjogZmFsc2UgfSxcbiAgICB7IFwiaWRcIjogNSwgXCJuYW1lXCI6IFwiSXRlbSA1XCIsIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb24uXCIsIFwidGl0bGVcIjogXCJUaGlzIGlzIGl0ZW0gVGl0bGVcIiwgXCJ0ZXh0XCI6IFwiVGhpcyBpcyBpdGVtIFRleHRcIiwgIFwiaW1hZ2VcIjogXCJUaGlzIGlzIGl0ZW0gSW1hZ2VcIiwgXCJzZWxlY3RlZFwiOiBmYWxzZSB9LFxuICAgIHsgXCJpZFwiOiA2LCBcIm5hbWVcIjogXCJJdGVtIDZcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvbi5cIiwgXCJ0aXRsZVwiOiBcIlRoaXMgaXMgaXRlbSBUaXRsZVwiLCBcInRleHRcIjogXCJUaGlzIGlzIGl0ZW0gVGV4dFwiLCAgXCJpbWFnZVwiOiBcIlRoaXMgaXMgaXRlbSBJbWFnZVwiLCBcInNlbGVjdGVkXCI6IGZhbHNlIH0sXG4gICAgeyBcImlkXCI6IDcsIFwibmFtZVwiOiBcIkl0ZW0gN1wiLCBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uLlwiLCBcInRpdGxlXCI6IFwiVGhpcyBpcyBpdGVtIFRpdGxlXCIsIFwidGV4dFwiOiBcIlRoaXMgaXMgaXRlbSBUZXh0XCIsICBcImltYWdlXCI6IFwiVGhpcyBpcyBpdGVtIEltYWdlXCIsIFwic2VsZWN0ZWRcIjogZmFsc2UgfSxcbiAgICB7IFwiaWRcIjogOCwgXCJuYW1lXCI6IFwiSXRlbSA4XCIsIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb24uXCIsIFwidGl0bGVcIjogXCJUaGlzIGlzIGl0ZW0gVGl0bGVcIiwgXCJ0ZXh0XCI6IFwiVGhpcyBpcyBpdGVtIFRleHRcIiwgIFwiaW1hZ2VcIjogXCJUaGlzIGlzIGl0ZW0gSW1hZ2VcIiwgXCJzZWxlY3RlZFwiOiBmYWxzZSB9LFxuICAgIHsgXCJpZFwiOiA5LCBcIm5hbWVcIjogXCJJdGVtIDlcIiwgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvbi5cIiwgXCJ0aXRsZVwiOiBcIlRoaXMgaXMgaXRlbSBUaXRsZVwiLCBcInRleHRcIjogXCJUaGlzIGlzIGl0ZW0gVGV4dFwiLCAgXCJpbWFnZVwiOiBcIlRoaXMgaXMgaXRlbSBJbWFnZVwiLCBcInNlbGVjdGVkXCI6IGZhbHNlIH0sXG4gICAgeyBcImlkXCI6IDEwLCBcIm5hbWVcIjogXCJJdGVtIDEwXCIsIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb24uXCIsIFwidGl0bGVcIjogXCJUaGlzIGlzIGl0ZW0gVGl0bGVcIiwgXCJ0ZXh0XCI6IFwiVGhpcyBpcyBpdGVtIFRleHRcIiwgIFwiaW1hZ2VcIjogXCJUaGlzIGlzIGl0ZW0gSW1hZ2VcIiAsIFwic2VsZWN0ZWRcIjogZmFsc2V9LFxuXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmRlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cXG5cXG4uc3dpcGVJdGVtR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaXRlbVN0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXJrVmlld1N0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgcGFkZGluZzogMTA7XFxufVxcblxcbi5zd2lwZVRlbXBsYXRlTGFiZWwge1xcbiAgICBzaXplOiAyMDtcXG59XFxuXFxuLmRlbGV0ZVZpZXdTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcGFkZGluZzogMTA7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG9cXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8UmFkTGlzdFZpZXcgc2VsZWN0aW9uQmVoYXZpb3I9XFxcIkxvbmdQcmVzc1xcXCJcXG4gICAgICAgICAgICAgICAgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIlxcbiAgICAgICAgICAgICAgICAjbXlMaXN0VmlldyBcXG4gICAgICAgICAgICAgICAgc3dpcGVBY3Rpb25zPVxcXCJ0cnVlXFxcIlxcbiAgICAgICAgICAgICAgICBbc29ydGluZ0Z1bmN0aW9uXT1cXFwibXlTb3J0aW5nRnVuY1xcXCIgXFxuICAgICAgICAgICAgICAgIFtmaWx0ZXJpbmdGdW5jdGlvbl09XFxcIm15RmlsdGVyaW5nRnVuY1xcXCJcXG4gICAgICAgICAgICAgICAgW2dyb3VwaW5nRnVuY3Rpb25dPVxcXCJteUdyb3VwaW5nRnVuY1xcXCIgXFxuICAgICAgICAgICAgICAgIChpdGVtU3dpcGVQcm9ncmVzc0VuZGVkKT1cXFwib25Td2lwZUNlbGxGaW5pc2hlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAoaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkKT1cXFwib25Td2lwZUNlbGxTdGFydGVkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIChpdGVtU3dpcGVQcm9ncmVzc0NoYW5nZWQpPVxcXCJvbkNlbGxTd2lwaW5nKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIChpdGVtU2VsZWN0ZWQpPVxcXCJvbkl0ZW1TZWxlY3RlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICAgICAoaXRlbURlc2VsZWN0ZWQpPVxcXCJvbkl0ZW1EZXNlbGVjdGVkKCRldmVudClcXFwiXFxuICAgICAgICAgICAgICAgIChpdGVtVGFwKT1cXFwib25JdGVtVGFwKCRldmVudClcXFwiID5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGNsYXNzPVxcXCJpdGVtU3RhY2tMYXlvdXRcXFwiIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJpdGVtLnNlbGVjdGVkID8gJ2dyYXknIDogJ3doaXRlJ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8R3JpZExheW91dCAqdGtMaXN0SXRlbVN3aXBlVGVtcGxhdGUgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcInN3aXBlSXRlbUdyaWRMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwibWFyay12aWV3XFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJtYXJrVmlld1N0YWNrTGF5b3V0XFxcIiAodGFwKT1cXFwib25MZWZ0U3dpcGVDbGljaygkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwibWFya1xcXCIgY2xhc3M9XFxcInN3aXBlVGVtcGxhdGVMYWJlbFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiZGVsZXRlLXZpZXdcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcImRlbGV0ZVZpZXdTdGFja0xheW91dFxcXCIgKHRhcCk9XFxcIm9uUmlnaHRTd2lwZUNsaWNrKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJkZWxldGVcXFwiIGNsYXNzPVxcXCJzd2lwZVRlbXBsYXRlTGFiZWxcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG4gICAgPExhYmVsIFt0ZXh0XT1cXFwiZXZlbnRcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiByb3c9XFxcIjFcXFwiPjwvTGFiZWw+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LW11bHRpcGxlLW9wZXJhdGlvbnMtd2l0aC1zd2lwZVwiLFxuICAgIHByb3ZpZGVyczogW0RhdGFJdGVtU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwibGlzdHZpZXctbXVsdGlwbGUtb3BlcmF0aW9ucy13aXRoLXN3aXBlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1tdWx0aXBsZS1vcGVyYXRpb25zLXdpdGgtc3dpcGUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0RhdGFPcGVyYXRpb25zTXVsdGlwbGVXaXRoU3dpcGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2V2ZW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX2lzR3JvdXBpbmdFbmFibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzRmlsdGVyaW5nRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9pc1NvcnRpbmdFbmFibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX215R3JvdXBpbmdGdW5jOiAoaXRlbTogYW55KSA9PiBhbnk7XG4gICAgcHJpdmF0ZSBfbXlTb3J0aW5nRnVuYzogKGl0ZW06IGFueSwgb3RoZXJJdGVtOiBhbnkpID0+IG51bWJlcjtcbiAgICBwcml2YXRlIF9teUZpbHRlcmluZ0Z1bmM6IChpdGVtOiBhbnkpID0+IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgICAgICB0aGlzLm15R3JvdXBpbmdGdW5jID0gKGl0ZW06IERhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jYXRlZ29yeTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5teVNvcnRpbmdGdW5jID0gKGl0ZW06IERhdGFJdGVtLCBvdGhlckl0ZW06IERhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBpdGVtLmlkIDwgb3RoZXJJdGVtLmlkID8gLTEgOiBpdGVtLmlkID4gb3RoZXJJdGVtLmlkID8gMSA6IDA7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm15RmlsdGVyaW5nRnVuYyA9IChpdGVtOiBEYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gJiYgaXRlbS5uYW1lLmluY2x1ZGVzKFwiU3BlY2lhbCBJdGVtXCIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzRmlsdGVyaW5nRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTb3J0aW5nRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNHcm91cGluZ0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IGlzR3JvdXBpbmdFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNHcm91cGluZ0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IGlzR3JvdXBpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzR3JvdXBpbmdFbmFibGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGlzRmlsdGVyaW5nRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRmlsdGVyaW5nRW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgaXNGaWx0ZXJpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRmlsdGVyaW5nRW5hYmxlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpc1NvcnRpbmdFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTb3J0aW5nRW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgaXNTb3J0aW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc1NvcnRpbmdFbmFibGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG15RmlsdGVyaW5nRnVuYygpOiAoaXRlbTogYW55KSA9PiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXlGaWx0ZXJpbmdGdW5jO1xuICAgIH1cblxuICAgIHNldCBteUZpbHRlcmluZ0Z1bmModmFsdWU6IChpdGVtOiBhbnkpID0+IGFueSkge1xuICAgICAgICB0aGlzLl9teUZpbHRlcmluZ0Z1bmMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXlHcm91cGluZ0Z1bmMoKTogKGl0ZW06IGFueSkgPT4gYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX215R3JvdXBpbmdGdW5jO1xuICAgIH1cblxuICAgIHNldCBteUdyb3VwaW5nRnVuYyh2YWx1ZTogKGl0ZW06IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMuX215R3JvdXBpbmdGdW5jID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG15U29ydGluZ0Z1bmMoKTogKGl0ZW06IGFueSwgb3RoZXJJdGVtOiBhbnkpID0+IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9teVNvcnRpbmdGdW5jO1xuICAgIH1cblxuICAgIHNldCBteVNvcnRpbmdGdW5jKHZhbHVlOiAoaXRlbTogYW55LCBvdGhlckl0ZW06IGFueSkgPT4gbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX215U29ydGluZ0Z1bmMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0RGF0YU9wZXJhdGlvbnNJdGVtcygpKTtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBcIk5vIGV2ZW50XCI7XG4gICAgfVxuXG4gICAgZ2V0IGV2ZW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DZWxsU3dpcGluZyhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCkgfHwge307XG4gICAgICAgIGlmIChhcmdzLmRhdGEueCA+IDIwMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSBsZWZ0IGFjdGlvbiBvbjogXCIgKyBpdGVtLm5hbWUpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLTIwMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSByaWdodCBhY3Rpb24gb246IFwiICsgaXRlbS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgICAgIGNvbnN0IHN3aXBlVmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignbWFyay12aWV3Jyk7XG4gICAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PignZGVsZXRlLXZpZXcnKTtcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgc3dpcGVMaW1pdHMucmlnaHQgPSByaWdodEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCkgfHwge307XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIj4+PiBvblN3aXBlQ2VsbFN0YXJ0ZWQgaXRlbTogXCIgKyBpdGVtLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9ldmVudCA9IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3dpcGVDZWxsRmluaXNoZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmRhdGFJdGVtcy5nZXRJdGVtKGFyZ3MuaW5kZXgpIHx8IHt9O1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCI+Pj4gb25Td2lwZUNlbGxGaW5pc2hlZCBpdGVtOiBcIiArIGl0ZW0ubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuX2V2ZW50ID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MZWZ0U3dpcGVDbGljayhhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgbGV0IGl0ZW1WaWV3ID0gYXJncy5vYmplY3QgYXMgVmlldztcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5pdGVtcy5pbmRleE9mKGl0ZW1WaWV3LmJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmRhdGFJdGVtcy5nZXRJdGVtKGl0ZW1JbmRleCkgfHwge307XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkxlZnQgc3dpcGUgY2xpY2sgZm9yOiBcIiArIGl0ZW0ubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuX2V2ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgc3dpcGVWaWV3ID0gYXJncy5vYmplY3QgYXMgVmlldztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHN3aXBlVmlldy5iaW5kaW5nQ29udGV4dCB8fCB7fTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFwiUmlnaHQgc3dpcGUgY2xpY2sgZm9yOiBcIiArIGNvbnRleHQubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuX2V2ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XG5cbiAgICAgICAgLy8gQ3VycmVudGx5IGl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gY2hhbmdlIHRoZSBpdGVtcyB3aXRoIHNwbGljZSB3aGlsZSB1c2luZyBkYXRhIG9wZXJhdGlvbnMuXG4gICAgICAgIC8vIHRoaXMuZGF0YUl0ZW1zLnNwbGljZSh0aGlzLmRhdGFJdGVtcy5pbmRleE9mKHN3aXBlVmlldy5iaW5kaW5nQ29udGV4dCksIDEpO1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCkgfHwge307XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJvbkl0ZW1TZWxlY3RlZCBmb3I6IFwiICsgaXRlbS5uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1EZXNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5kYXRhSXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KSB8fCB7fTtcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJvbkl0ZW1EZXNlbGVjdGVkIGZvcjogXCIgKyBpdGVtLm5hbWU7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9ldmVudCA9IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCkgfHwge307XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIm9uSXRlbVRhcCBmb3I6IFwiICsgaXRlbS5uYW1lO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBtZXNzYWdlO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogPj4gbGlzdHZpZXctYW5ndWxhci1tdWx0aXBsZS1vcGVyYXRpb25zLWNzcyAqL1xcbi5uYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XFxuLyogPDwgbGlzdHZpZXctYW5ndWxhci1tdWx0aXBsZS1vcGVyYXRpb25zLWNzcyAqL1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS0gPj4gbGlzdHZpZXctYW5ndWxhci1tdWx0aXBsZS1vcGVyYXRpb25zLWh0bWwgLS0+XFxuPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24gcm93cz1cXFwiKiwgKjdcXFwiPlxcbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgPEJ1dHRvbiB3aWR0aD1cXFwiMzMlXFxcIiBbdGV4dF09XFxcImlzRmlsdGVyaW5nRW5hYmxlZCA/ICdEaXNhYmxlIGZpbHRlcmluZycgOiAnRW5hYmxlIGZpbHRlcmluZydcXFwiICh0YXApPVxcXCJ0b2dnbGVGaWx0ZXIoKVxcXCIgaW9zOm1hcmdpbj1cXFwiNVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHdpZHRoPVxcXCIzMyVcXFwiIFt0ZXh0XT1cXFwiaXNTb3J0aW5nRW5hYmxlZCA/ICdEaXNhYmxlIHNvcnRpbmcnIDogJ0VuYWJsZSBzb3J0aW5nJ1xcXCIgKHRhcCk9XFxcInRvZ2dsZVNvcnRpbmcoKVxcXCIgaW9zOm1hcmdpbj1cXFwiNVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHdpZHRoPVxcXCIzMyVcXFwiIFt0ZXh0XT1cXFwiaXNHcm91cGluZ0VuYWJsZWQgPyAnRGlzYWJsZSBncm91cGluZycgOiAnRW5hYmxlIGdyb3VwaW5nJ1xcXCIgKHRhcCk9XFxcInRvZ2dsZUdyb3VwaW5nKClcXFwiIGlvczptYXJnaW49XFxcIjVcXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8UmFkTGlzdFZpZXcgc2VsZWN0aW9uQmVoYXZpb3I9XFxcIlByZXNzXFxcIiAoaXRlbVNlbGVjdGVkKT1cXFwib25JdGVtU2VsZWN0ZWQoJGV2ZW50KVxcXCIgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiByb3c9XFxcIjFcXFwiICNteUxpc3RWaWV3IFxcbiAgICAgICAgICAgICAgICAgICAgW3NvcnRpbmdGdW5jdGlvbl09XFxcIm15U29ydGluZ0Z1bmNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgW2ZpbHRlcmluZ0Z1bmN0aW9uXT1cXFwibXlGaWx0ZXJpbmdGdW5jXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgW2dyb3VwaW5nRnVuY3Rpb25dPVxcXCJteUdyb3VwaW5nRnVuY1xcXCIgPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlxcbjwhLS0gPDwgbGlzdHZpZXctYW5ndWxhci1tdWx0aXBsZS1vcGVyYXRpb25zLWh0bWwgLS0+XCIiLCIvLyA+PiBsaXN0dmlldy1hbmd1bGFyLW11bHRpcGxlLW9wZXJhdGlvbnMtY29kZVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtbXVsdGlwbGVcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1tdWx0aXBsZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLW11bHRpcGxlLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEYXRhT3BlcmF0aW9uc011bHRpcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBfaXNFbmFibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzR3JvdXBpbmdFbmFibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2lzRmlsdGVyaW5nRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9pc1NvcnRpbmdFbmFibGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX215R3JvdXBpbmdGdW5jOiAoaXRlbTogYW55KSA9PiBhbnk7XG4gICAgcHJpdmF0ZSBfbXlTb3J0aW5nRnVuYzogKGl0ZW06IGFueSwgb3RoZXJJdGVtOiBhbnkpID0+IG51bWJlcjtcbiAgICBwcml2YXRlIF9teUZpbHRlcmluZ0Z1bmM6IChpdGVtOiBhbnkpID0+IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgICAgICB0aGlzLm15R3JvdXBpbmdGdW5jID0gKGl0ZW06IERhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5jYXRlZ29yeTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5teVNvcnRpbmdGdW5jID0gKGl0ZW06IERhdGFJdGVtLCBvdGhlckl0ZW06IERhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBpdGVtLmlkIDwgb3RoZXJJdGVtLmlkID8gLTEgOiBpdGVtLmlkID4gb3RoZXJJdGVtLmlkID8gMSA6IDA7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm15RmlsdGVyaW5nRnVuYyA9IChpdGVtOiBEYXRhSXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gJiYgaXRlbS5uYW1lLmluY2x1ZGVzKFwiU3BlY2lhbCBJdGVtXCIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzRmlsdGVyaW5nRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNTb3J0aW5nRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNHcm91cGluZ0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IGlzR3JvdXBpbmdFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNHcm91cGluZ0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IGlzR3JvdXBpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzR3JvdXBpbmdFbmFibGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGlzRmlsdGVyaW5nRW5hYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRmlsdGVyaW5nRW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgaXNGaWx0ZXJpbmdFbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzRmlsdGVyaW5nRW5hYmxlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBpc1NvcnRpbmdFbmFibGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTb3J0aW5nRW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgaXNTb3J0aW5nRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc1NvcnRpbmdFbmFibGVkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG15RmlsdGVyaW5nRnVuYygpOiAoaXRlbTogYW55KSA9PiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbXlGaWx0ZXJpbmdGdW5jO1xuICAgIH1cblxuICAgIHNldCBteUZpbHRlcmluZ0Z1bmModmFsdWU6IChpdGVtOiBhbnkpID0+IGFueSkge1xuICAgICAgICB0aGlzLl9teUZpbHRlcmluZ0Z1bmMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXlHcm91cGluZ0Z1bmMoKTogKGl0ZW06IGFueSkgPT4gYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX215R3JvdXBpbmdGdW5jO1xuICAgIH1cblxuICAgIHNldCBteUdyb3VwaW5nRnVuYyh2YWx1ZTogKGl0ZW06IGFueSkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMuX215R3JvdXBpbmdGdW5jID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG15U29ydGluZ0Z1bmMoKTogKGl0ZW06IGFueSwgb3RoZXJJdGVtOiBhbnkpID0+IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9teVNvcnRpbmdGdW5jO1xuICAgIH1cblxuICAgIHNldCBteVNvcnRpbmdGdW5jKHZhbHVlOiAoaXRlbTogYW55LCBvdGhlckl0ZW06IGFueSkgPT4gbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX215U29ydGluZ0Z1bmMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0RGF0YU9wZXJhdGlvbnNJdGVtcygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRmlsdGVyKCkge1xuICAgICAgICBjb25zdCBsaXN0VmlldyA9IHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0VmlldztcbiAgICAgICAgaWYgKCFsaXN0Vmlldy5maWx0ZXJpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgbGlzdFZpZXcuZmlsdGVyaW5nRnVuY3Rpb24gPSB0aGlzLm15RmlsdGVyaW5nRnVuYztcbiAgICAgICAgICAgIHRoaXMuaXNGaWx0ZXJpbmdFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RWaWV3LmZpbHRlcmluZ0Z1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5pc0ZpbHRlcmluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVTb3J0aW5nKCkge1xuICAgICAgICBjb25zdCBsaXN0VmlldyA9IHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0VmlldztcbiAgICAgICAgaWYgKCFsaXN0Vmlldy5zb3J0aW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGxpc3RWaWV3LnNvcnRpbmdGdW5jdGlvbiA9IHRoaXMubXlTb3J0aW5nRnVuYztcbiAgICAgICAgICAgIHRoaXMuaXNTb3J0aW5nRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0Vmlldy5zb3J0aW5nRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmlzU29ydGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVHcm91cGluZygpIHtcbiAgICAgICAgY29uc3QgbGlzdFZpZXcgPSB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXc7XG4gICAgICAgIGlmICghbGlzdFZpZXcuZ3JvdXBpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgbGlzdFZpZXcuZ3JvdXBpbmdGdW5jdGlvbiA9IHRoaXMubXlHcm91cGluZ0Z1bmM7XG4gICAgICAgICAgICB0aGlzLmlzR3JvdXBpbmdFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RWaWV3Lmdyb3VwaW5nRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmlzR3JvdXBpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkl0ZW1TZWxlY3RlZChhcmdzOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IGFyZ3Mub2JqZWN0LmdldFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRJdGVtc1swXS5pZCk7XG4gICAgfVxufVxuLy8gPDwgbGlzdHZpZXctYW5ndWxhci1tdWx0aXBsZS1vcGVyYXRpb25zLWNvZGUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyogPj4gbGlzdHZpZXctbXVsdGlwbGUtdGVtcGxhdGVzLWFuZ3VsYXItY3NzICovXFxuLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbjogNTtcXG59XFxuXFxuLnR5cGVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTc7XFxuICAgIG1hcmdpbjogNTtcXG59XFxuXFxuLm1pZGRsZUxhYmVse1xcbiAgICBtYXJnaW46IDAgNSAwIDU7XFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgbWFyZ2luOiA1XFxufVxcblxcbi55ZWxsb3dUZXh0IHtcXG4gIGNvbG9yOiB5ZWxsb3c7ICBcXG59XFxuXFxuLndoaXRlVGV4dCB7XFxuICBjb2xvcjogd2hpdGU7ICBcXG59XFxuXFxuLmJsYWNrVGV4dCB7XFxuICBjb2xvcjogYmxhY2s7ICBcXG59XFxuXFxuLmJsYWNrU3RhY2tMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnJlZFN0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ3JlZW5TdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uYmx1ZVN0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnllbGxvd1N0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG4vKiA8PCBsaXN0dmlldy1tdWx0aXBsZS10ZW1wbGF0ZXMtYW5ndWxhci1jc3MgKi9cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPCEtLSA+PiBsaXN0dmlldy1tdWx0aXBsZS10ZW1wbGF0ZXMtYW5ndWxhci1odG1sIC0tPlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiBbaXRlbVRlbXBsYXRlU2VsZWN0b3JdPVxcXCJ0ZW1wbGF0ZVNlbGVjdG9yXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0udHlwZVxcXCIgY2xhc3M9XFxcInR5cGVMYWJlbCBtaWRkbGVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWxcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuXFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtUZW1wbGF0ZUtleT1cXFwic3RhcnRcXFwiIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwiYmxhY2tTdGFja0xheW91dFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCIgY2xhc3M9XFxcIm5hbWVMYWJlbCB5ZWxsb3dUZXh0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLnR5cGVcXFwiIGNsYXNzPVxcXCJ0eXBlTGFiZWwgeWVsbG93VGV4dCBtaWRkbGVMYWJlbFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcImRlc2NyaXB0aW9uTGFiZWwgeWVsbG93VGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a1RlbXBsYXRlS2V5PVxcXCJSZWRcXFwiIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwicmVkU3RhY2tMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWwgd2hpdGVUZXh0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLnR5cGVcXFwiIGNsYXNzPVxcXCJ0eXBlTGFiZWwgd2hpdGVUZXh0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrVGVtcGxhdGVLZXk9XFxcImdyZWVuXFxcIiBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgY2xhc3M9XFxcImdyZWVuU3RhY2tMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWwgd2hpdGVUZXh0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLnR5cGVcXFwiIGNsYXNzPVxcXCJ0eXBlTGFiZWwgd2hpdGVUZXh0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrVGVtcGxhdGVLZXk9XFxcIkJsdWVcXFwiIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwiYmx1ZVN0YWNrTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwibmFtZUxhYmVsIHdoaXRlVGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwiaXRlbS50eXBlXFxcIiBjbGFzcz1cXFwidHlwZUxhYmVsIHdoaXRlVGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a1RlbXBsYXRlS2V5PVxcXCJFbmRcXFwiIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBjbGFzcz1cXFwieWVsbG93U3RhY2tMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiIGNsYXNzPVxcXCJuYW1lTGFiZWwgYmxhY2tUZXh0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLnR5cGVcXFwiIGNsYXNzPVxcXCJ0eXBlTGFiZWwgYmxhY2tUZXh0IG1pZGRsZUxhYmVsXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbCBibGFja1RleHRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgIDwhLS0gPDwgbGlzdHZpZXctbXVsdGlwbGUtdGVtcGxhdGVzLWFuZ3VsYXItaHRtbCAtLT5cXG48L0dyaWRMYXlvdXQ+XCIiLCIvLyA+PiBsaXN0dmlldy1tdWx0aXBsZS10ZW1wbGF0ZXMtYW5ndWxhclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1tdWx0aXBsZS10ZW1wbGF0ZXNcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LW11bHRpcGxlLXRlbXBsYXRlcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctbXVsdGlwbGUtdGVtcGxhdGVzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNdWx0aXBsZVRlbXBsYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VsZWN0b3I6IChpdGVtOiBEYXRhSXRlbSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4gc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB0aGlzLnRlbXBsYXRlU2VsZWN0b3JGdW5jdGlvbjtcbiAgICAgICAgbGV0IGl0ZW1zQ291bnQgPSA1MDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaXRlbXNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRhSXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oaSwgXCJJdGVtIFwiICsgaSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLmdldFR5cGUoaSwgaXRlbXNDb3VudCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VHlwZShpbmRleDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBsYXN0RGlnaXQgPSBpbmRleCAlIDEwO1xuICAgICAgICBsZXQgdHlwZSA9IGluZGV4ID09PSAwID8gXCJzdGFydFwiIDogaW5kZXggPT09IGVuZCA/IFwiZW5kXCIgOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgdHlwZSA9IGxhc3REaWdpdCA9PT0gMCA/IFwiZGVmYXVsdFwiIDogbGFzdERpZ2l0IDw9IDMgPyBcInJlZFwiIDogbGFzdERpZ2l0IDw9IDYgPyBcImJsdWVcIiA6IGxhc3REaWdpdCA8PSA5ID8gXCJncmVlblwiIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG5cbiAgICBnZXQgdGVtcGxhdGVTZWxlY3RvcigpOiAoaXRlbTogRGF0YUl0ZW0sIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yO1xuICAgIH1cblxuICAgIHNldCB0ZW1wbGF0ZVNlbGVjdG9yKHZhbHVlOiAoaXRlbTogRGF0YUl0ZW0sIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHRlbXBsYXRlU2VsZWN0b3JGdW5jdGlvbiA9IChpdGVtOiBEYXRhSXRlbSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS50eXBlO1xuICAgIH1cbn1cbi8vIDw8IGxpc3R2aWV3LW11bHRpcGxlLXRlbXBsYXRlcy1hbmd1bGFyIiwibW9kdWxlLmV4cG9ydHMgPSBcIi8qIGlvcyBzdHlsZXMgKi9cXG4uaW9zQnV0dG9uc1N0YWNrbGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG59XFxuXFxuLmlvc0J1dHRvbiB7XFxuICAgIG1hcmdpbjogMTA7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5pb3NOYW1lTGFiZWwge1xcbiAgICBmb250LXNpemU6IDIwXFxufVxcblxcbi5pb3NEZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XFxuXFxuLyogQW5kcm9pZCBzdHlsZXMgKi9cXG4uYW5kcm9pZEJ1dHRvbnNTdGFja2xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxufVxcblxcbi5hbmRyb2lkTmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMFxcbn1cXG5cXG4uYW5kcm9pZERlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvd3M9XFxcIjUwLCAqXFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgaW9zOmNsYXNzPVxcXCJpb3NCdXR0b25zU3RhY2tsYXlvdXRcXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImFuZHJvaWRCdXR0b25zU3RhY2tsYXlvdXRcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxuICAgICAgICAgICAgPEJ1dHRvbiBpb3M6Y2xhc3M9XFxcImlvc0J1dHRvblxcXCIgdGV4dD1cXFwiQUREXFxcIiAodGFwKT1cXFwib25BZGRJdGVtQ2xpY2soKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiBpb3M6Y2xhc3M9XFxcImlvc0J1dHRvblxcXCIgdGV4dD1cXFwiREVMXFxcIiAodGFwKT1cXFwib25SZW1vdmVJdGVtQ2xpY2soKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiBpb3M6Y2xhc3M9XFxcImlvc0J1dHRvblxcXCIgdGV4dD1cXFwiVVBEQVRFXFxcIiAodGFwKT1cXFwib25VcGRhdGVJdGVtQ2xpY2soKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiBpb3M6Y2xhc3M9XFxcImlvc0J1dHRvblxcXCIgdGV4dD1cXFwiUkVTRVRcXFwiICh0YXApPVxcXCJvblJlc2V0Q2xpY2soKVxcXCI+PC9CdXR0b24+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiByb3c9XFxcIjFcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBpb3M6Y2xhc3M9XFxcImlvc05hbWVMYWJlbFxcXCIgYW5kcm9pZDpjbGFzcz1cXFwiYW5kcm9pZE5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBpb3M6Y2xhc3M9XFxcImlvc0Rlc2NyaXB0aW9uTGFiZWxcXFwiIGFuZHJvaWQ6Y2xhc3M9XFxcImFuZHJvaWREZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiLy8gPj4gYW5ndWxhci1saXN0dmlldy1vYnNlcnZhYmxlLWFycmF5LWNvbXBvbmVudFxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LW9ic2VydmFibGUtYXJyYXlcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LW9ic2VydmFibGUtYXJyYXkuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LW9ic2VydmFibGUtYXJyYXkuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld09ic2VydmFibGVBcnJheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFkZEl0ZW1DbGljaygpIHtcbiAgICAgICAgY29uc3QgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oaWQsIFwiVGhpcyBpcyBhIG5ldyBpdGVtOiBcIiArIGlkLCBcIlRoaXMgaXMgdGhlIG5ldyBpdGVtJ3MgZGVzY3JpcHRpb24uXCIpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZXNldENsaWNrKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5fZGF0YUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fZGF0YUl0ZW1zLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uVXBkYXRlSXRlbUNsaWNrKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fZGF0YUl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX2RhdGFJdGVtcy5nZXRJdGVtKGluZGV4KTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5pZCA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgaXRlbS5uYW1lID0gXCJUaGlzIGlzIGFuIHVwZGF0ZWQgaXRlbVwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBcIlRoaXMgaXMgdGhlIHVwZGF0ZWQgaXRlbSdzIGRlc2NyaXB0aW9uLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVtb3ZlSXRlbUNsaWNrKCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMuc3BsaWNlKHRoaXMuX2RhdGFJdGVtcy5sZW5ndGggLSAxLCAxKTtcbiAgICB9XG59XG4vLyA8PCBhbmd1bGFyLWxpc3R2aWV3LW9ic2VydmFibGUtYXJyYXktY29tcG9uZW50XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLml0ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZzogNSAxMCA1IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZmZjdmO1xcbn1cXG5cXG4uaW5uZXJPdGVtVGVtcGxhdGVTdGFja0xheW91dCB7XFxuICAgIHBhZGRpbmc6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhNTY1O1xcbn1cXG5cXG4ubGFiZWxzU3RhY2tMYXlvdXQge1xcbiAgICBtYXJnaW4tbGVmdDogMTU7XFxufVxcblxcbi5sYWJlbE5hbWUge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4O1xcbn1cXG5cXG4ubGFiZWxUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGFiZWxUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGlzdFZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8UmFkTGlzdFZpZXcgI2xpc3RWaWV3IGNsYXNzPVxcXCJsaXN0Vmlld1xcXCIgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiBwdWxsVG9SZWZyZXNoPVxcXCJ0cnVlXFxcIiAocHVsbFRvUmVmcmVzaEluaXRpYXRlZCk9XFxcIm9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVRlbXBsYXRlU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5uZXJPdGVtVGVtcGxhdGVTdGFja0xheW91dFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPE5TSW1nIGhlaWdodD1cXFwiMTAwXFxcIiB3aWR0aD1cXFwiODBcXFwiIFtzcmNdPVxcXCJpdGVtLmltYWdlXFxcIj48L05TSW1nPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsYWJlbHNTdGFja0xheW91dFxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsTmFtZVxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbFRpdGxlXFxcIiBbdGV4dF09XFxcIml0ZW0udGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxUZXh0XFxcIiBbdGV4dF09XFxcIml0ZW0udGV4dFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBQdWxsVG9SZWZyZXNoU3R5bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgYW5kcm9pZCBhcyBhbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5cbmNvbnN0IHBvc3RzID0gcmVxdWlyZShcIi4uLy4uLy4uL2V4YW1wbGVzL3Bvc3RzLmpzb25cIik7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstbGlzdHZpZXctcHVsbC10by1yZWZyZXNoLWN1c3RvbWl6ZS5jb21wb25lbnRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1wdWxsLXRvLXJlZnJlc2gtY3VzdG9taXplLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1wdWxsLXRvLXJlZnJlc2gtY3VzdG9taXplLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ3VzdG9taXplQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBfbnVtYmVyT2ZBZGRlZEl0ZW1zO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoXCJsaXN0Vmlld1wiLCB7IHJlYWQ6IFJhZExpc3RWaWV3Q29tcG9uZW50LCBzdGF0aWM6IHRydWUgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0RGF0YUl0ZW1zKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGlmICh0aGlzLm15TGlzdFZpZXdDb21wb25lbnQgJiYgdGhpcy5teUxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3KSB7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBuZXcgUHVsbFRvUmVmcmVzaFN0eWxlKCk7XG4gICAgICAgICAgICBzdHlsZS5pbmRpY2F0b3JDb2xvciA9IG5ldyBDb2xvcihcInJlZFwiKTtcbiAgICAgICAgICAgIHN0eWxlLmluZGljYXRvckJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcihcImJsdWVcIik7XG4gICAgICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcucHVsbFRvUmVmcmVzaFN0eWxlID0gc3R5bGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBpbml0aWFsTnVtYmVyT2ZJdGVtcyA9IHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtcztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXM7IGkgPCBpbml0aWFsTnVtYmVyT2ZJdGVtcyArIDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpID4gcG9zdHMubmFtZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmkgPSBhbmRyb2lkQXBwbGljYXRpb24gPyBwb3N0cy5pbWFnZXNbaV0udG9Mb3dlckNhc2UoKSA6IHBvc3RzLmltYWdlc1tpXTtcblxuICAgICAgICAgICAgICAgIHRoYXQuZ2V0KCkuX2RhdGFJdGVtcy5zcGxpY2UoMCwgMCwgbmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBpbWFnZVVyaSkpO1xuICAgICAgICAgICAgICAgIHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXREYXRhSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIHRoaXMuX251bWJlck9mQWRkZWRJdGVtcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubmFtZXMubGVuZ3RoIC0gMTU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbnVtYmVyT2ZBZGRlZEl0ZW1zKys7XG4gICAgICAgICAgICBpZiAoYW5kcm9pZEFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBwb3N0cy5pbWFnZXNbaV0udG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBwb3N0cy5pbWFnZXNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLml0ZW1UZW1wbGF0ZVN0YWNrTGF5b3V0IHtcXG4gICAgcGFkZGluZzogNSAxMCA1IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZmZjdmO1xcbn1cXG5cXG4uaW5uZXJPdGVtVGVtcGxhdGVTdGFja0xheW91dCB7XFxuICAgIHBhZGRpbmc6IDEwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhNTY1O1xcbn1cXG5cXG4ubGFiZWxzU3RhY2tMYXlvdXQge1xcbiAgICBtYXJnaW4tbGVmdDogMTU7XFxufVxcblxcbi5sYWJlbE5hbWUge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4O1xcbn1cXG5cXG4ubGFiZWxUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGFiZWxUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICAgPCEtLSA+PiBhbmd1bGFyLWxpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaCAtLT5cXG4gICAgPFJhZExpc3RWaWV3ICNsaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHB1bGxUb1JlZnJlc2g9XFxcInRydWVcXFwiIChwdWxsVG9SZWZyZXNoSW5pdGlhdGVkKT1cXFwib25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKCRldmVudClcXFwiPlxcbiAgICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaCAtLT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVRlbXBsYXRlU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaW5uZXJPdGVtVGVtcGxhdGVTdGFja0xheW91dFxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPE5TSW1nIGhlaWdodD1cXFwiMTAwXFxcIiB3aWR0aD1cXFwiODBcXFwiIFtzcmNdPVxcXCJpdGVtLmltYWdlXFxcIj48L05TSW1nPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsYWJlbHNTdGFja0xheW91dFxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsTmFtZVxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbFRpdGxlXFxcIiBbdGV4dF09XFxcIml0ZW0udGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxUZXh0XFxcIiBbdGV4dF09XFxcIml0ZW0udGV4dFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uLy4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IGFuZHJvaWQgYXMgYW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuXG5jb25zdCBwb3N0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9leGFtcGxlcy9wb3N0cy5qc29uXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctcHVsbC10by1yZWZyZXNoLmNvbXBvbmVudC5jc3NcIl1cbn0pXG4vLyA+PiBhbmd1bGFyLWxpc3R2aWV3LXB1bGwtdG8tcmVmcmVzaC1jb2RlXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBfbnVtYmVyT2ZBZGRlZEl0ZW1zO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmluaXREYXRhSXRlbXMoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgb25QdWxsVG9SZWZyZXNoSW5pdGlhdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBpbml0aWFsTnVtYmVyT2ZJdGVtcyA9IHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtcztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXM7IGkgPCBpbml0aWFsTnVtYmVyT2ZJdGVtcyArIDI7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpID4gcG9zdHMubmFtZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmkgPSBhbmRyb2lkQXBwbGljYXRpb24gPyBwb3N0cy5pbWFnZXNbaV0udG9Mb3dlckNhc2UoKSA6IHBvc3RzLmltYWdlc1tpXTtcblxuICAgICAgICAgICAgICAgIHRoYXQuZ2V0KCkuX2RhdGFJdGVtcy5zcGxpY2UoMCwgMCwgbmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBpbWFnZVVyaSkpO1xuICAgICAgICAgICAgICAgIHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXREYXRhSXRlbXMoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+KCk7XG4gICAgICAgIHRoaXMuX251bWJlck9mQWRkZWRJdGVtcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubmFtZXMubGVuZ3RoIC0gMTU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fbnVtYmVyT2ZBZGRlZEl0ZW1zKys7XG4gICAgICAgICAgICBpZiAoYW5kcm9pZEFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBwb3N0cy5pbWFnZXNbaV0udG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBwb3N0cy5pbWFnZXNbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIDw8IGFuZ3VsYXItbGlzdHZpZXctcHVsbC10by1yZWZyZXNoLWNvZGUiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmRlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCAqXFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlNjcm9sbCBldmVudHNcXFwiPjwvTGFiZWw+XFxuICAgIDxMYWJlbCBpZD1cXFwibGJsU3RhdGVcXFwiIFt0ZXh0XT1cXFwic3RhdGVUZXh0XFxcIiByb3c9XFxcIjFcXFwiPjwvTGFiZWw+XFxuICAgIDwhLS0gPj4gYW5ndWxhci1saXN0dmlldy1zY3JvbGwtZXZlbnRzLWh0bWwgLS0+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHJvdz1cXFwiMlxcXCIgKHNjcm9sbGVkKT1cXFwib25TY3JvbGxlZCgkZXZlbnQpXFxcIiAoc2Nyb2xsU3RhcnRlZCk9XFxcIm9uU2Nyb2xsU3RhcnRlZCgkZXZlbnQpXFxcIiAoc2Nyb2xsRW5kZWQpPVxcXCJvblNjcm9sbEVuZGVkKCRldmVudClcXFwiPlxcbiAgICA8IS0tIDw8IGFuZ3VsYXItbGlzdHZpZXctc2Nyb2xsLWV2ZW50cy1odG1sIC0tPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsIi8vID4+IGFuZ3VsYXItbGlzdHZpZXctc2Nyb2xsLWV2ZW50cy1jb21wb25lbnRcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMaXN0Vmlld1Njcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1zY3JvbGwtZXZlbnRzXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1zY3JvbGwtZXZlbnRzLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1zY3JvbGwtZXZlbnRzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTY3JvbGxFdmVudHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9zdGF0ZVRleHQ6IHN0cmluZyA9IFwiU3RhdGU6IFwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZVRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlVGV4dDtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGVUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc3RhdGVUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YUl0ZW1TZXJ2aWNlLmdldElkZW50aWNhbERhdGFJdGVtcygyNSkpO1xuICAgIH1cblxuICAgIC8vID4+IGFuZ3VsYXItbGlzdHZpZXctc2Nyb2xsLWV2ZW50c1xuICAgIHB1YmxpYyBvblNjcm9sbGVkKGFyZ3M6IExpc3RWaWV3U2Nyb2xsRXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuc3RhdGVUZXh0ID0gXCJTdGF0ZTogU2Nyb2xsZWQgd2l0aCBvZmZzZXQ6IFwiICsgYXJncy5zY3JvbGxPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2Nyb2xsU3RhcnRlZChhcmdzOiBMaXN0Vmlld1Njcm9sbEV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnN0YXRlVGV4dCA9IFwiU3RhdGU6IFNjcm9sbCBzdGFydGVkIHdpdGggb2Zmc2V0OiBcIiArIGFyZ3Muc2Nyb2xsT2Zmc2V0O1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNjcm9sbEVuZGVkKGFyZ3M6IExpc3RWaWV3U2Nyb2xsRXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuc3RhdGVUZXh0ID0gXCJTdGF0ZTogU2Nyb2xsIGVuZGVkIHdpdGggb2Zmc2V0OiBcIiArIGFyZ3Muc2Nyb2xsT2Zmc2V0O1xuICAgIH1cbiAgICAvLyA8PCBhbmd1bGFyLWxpc3R2aWV3LXNjcm9sbC1ldmVudHNcbn1cbi8vIDw8IGFuZ3VsYXItbGlzdHZpZXctc2Nyb2xsLWV2ZW50cy1jb21wb25lbnQiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiSW4gaG9yaXpvbnRhbCBkaXJlY3Rpb25cXFwiPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBpY29uPVxcXCJyZXM6Ly9pY19hcnJvd19iYWNrX2JsYWNrXzI0ZHBcXFwiICh0YXApPVxcXCJvbk5hdmlnYXRpb25CdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbiAgICA8QWN0aW9uSXRlbSAqdGtJZklPUyB0ZXh0PVxcXCJPcHRpb25zXFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiAodGFwKT1cXFwib25PcHRpb25zVGFwcGVkKClcXFwiPjwvQWN0aW9uSXRlbT5cXG4gICAgPEFjdGlvbkl0ZW0gKnRrSWZBbmRyb2lkIHRleHQ9XFxcIkF1dG9cXFwiIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIiAodGFwKT1cXFwib25PcHRpb25zVGFwcGVkKCRldmVudClcXFwiID48L0FjdGlvbkl0ZW0+XFxuICAgIDxBY3Rpb25JdGVtICp0a0lmQW5kcm9pZCB0ZXh0PVxcXCJTdGFydFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICh0YXApPVxcXCJvbk9wdGlvbnNUYXBwZWQoJGV2ZW50KVxcXCIgPjwvQWN0aW9uSXRlbT5cXG4gICAgPEFjdGlvbkl0ZW0gKnRrSWZBbmRyb2lkIHRleHQ9XFxcIkNlbnRlclxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICh0YXApPVxcXCJvbk9wdGlvbnNUYXBwZWQoJGV2ZW50KVxcXCIgPjwvQWN0aW9uSXRlbT5cXG4gICAgPEFjdGlvbkl0ZW0gKnRrSWZBbmRyb2lkIHRleHQ9XFxcIkVuZFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICh0YXApPVxcXCJvbk9wdGlvbnNUYXBwZWQoJGV2ZW50KVxcXCIgPjwvQWN0aW9uSXRlbT5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTQ1JPTEwgVE8gSU5ERVggNTBcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIj48L0J1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3ICNteVJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgW3Njcm9sbFBvc2l0aW9uXT1cXFwibXlTY3JvbGxQb3NpdGlvblxcXCIgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxOYW1lIGxhYmVsTmFtZUhvcml6b250YWxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgICAgIDxMaXN0Vmlld0xpbmVhckxheW91dCB0a0xpc3RWaWV3TGF5b3V0IHNjcm9sbERpcmVjdGlvbj1cXFwiSG9yaXpvbnRhbFxcXCIgaXRlbVdpZHRoPVxcXCI4MFxcXCI+PC9MaXN0Vmlld0xpbmVhckxheW91dD5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBPcHRpb25zRXhhbXBsZUJhc2UgfSBmcm9tIFwiLi4vLi4vb3B0aW9ucy1leGFtcGxlLWJhc2VcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RhYmxlLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UsIE5hdmlnYXRlZERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gXCIuLi8uLi9uYXZpZ2F0aW9uL29wdGlvbnMvb3B0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbk1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtaG9yaXpvbnRhbFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LXNjcm9sbC10by1pbmRleC1ob3Jpem9udGFsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1zY3JvbGwtdG8taW5kZXguY29tcG9uZW50LmNzc1wiXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1Njcm9sbFRvSW5kZXhIb3Jpem9udGFsQ29tcG9uZW50IGV4dGVuZHMgT3B0aW9uc0V4YW1wbGVCYXNlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9vcHRpb25zUGFyYW1OYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX29wdGlvbnM6IEFycmF5PHN0cmluZz4gPSBbXCJBdXRvXCIsIFwiU3RhcnRcIiwgXCJDZW50ZXJcIiwgXCJFbmRcIl07XG5cbiAgICBteVNjcm9sbFBvc2l0aW9uOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSwgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IDI7XG4gICAgICAgIHRoaXMuX3BhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgdGhpcy5vbk5hdmlnYXRpbmdUbywgdGhpcyk7XG4gICAgICAgIHRoaXMuX29wdGlvbnNQYXJhbU5hbWUgPSBcInNjcm9sbERpcmVjdGlvblwiO1xuICAgICAgICB0aGlzLl9vcHRpb25zU2VydmljZS5wYXJhbU5hbWUgPSB0aGlzLl9vcHRpb25zUGFyYW1OYW1lO1xuICAgICAgICB0aGlzLnJvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblBhcmFtZXRlcnMgPSB7IHNlbGVjdGVkSW5kZXg6IHNlbGVjdGVkSW5kZXgsIHBhcmFtTmFtZTogdGhpcy5fb3B0aW9uc1BhcmFtTmFtZSwgaXRlbXM6IHRoaXMuX29wdGlvbnMgfTtcbiAgICAgICAgdGhpcy5zZXQoXCJteVNjcm9sbFBvc2l0aW9uXCIsIHRoaXMuX29wdGlvbnNbc2VsZWN0ZWRJbmRleF0pO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoJ215UmFkTGlzdFZpZXcnLCB7IHJlYWQ6IFJhZExpc3RWaWV3Q29tcG9uZW50LCBzdGF0aWM6IGZhbHNlIH0pIG15TGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0SWRlbnRpY2FsRGF0YUl0ZW1zKDEwMCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5teUxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3LnNjcm9sbFRvSW5kZXgoNTAsIGZhbHNlLCB0aGlzLmdldCgnbXlTY3JvbGxQb3NpdGlvbicpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgICAgICBpZiAoYXJncy5pc0JhY2tOYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fb3B0aW9uc1NlcnZpY2UucGFyYW1OYW1lID09PSB0aGlzLl9vcHRpb25zUGFyYW1OYW1lKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9vcHRpb25zU2VydmljZS5wYXJhbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fb3B0aW9uc1swXTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwibXlTY3JvbGxQb3NpdGlvblwiLCB0aGlzLl9vcHRpb25zWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblBhcmFtZXRlcnMuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9vcHRpb25zWzFdOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoXCJteVNjcm9sbFBvc2l0aW9uXCIsIHRoaXMuX29wdGlvbnNbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uUGFyYW1ldGVycy5zZWxlY3RlZEluZGV4ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX29wdGlvbnNbMl06XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChcIm15U2Nyb2xsUG9zaXRpb25cIiwgdGhpcy5fb3B0aW9uc1syXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25QYXJhbWV0ZXJzLnNlbGVjdGVkSW5kZXggPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fb3B0aW9uc1szXTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwibXlTY3JvbGxQb3NpdGlvblwiLCB0aGlzLl9vcHRpb25zWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblBhcmFtZXRlcnMuc2VsZWN0ZWRJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbk9wdGlvbnNUYXBwZWQoYXJnczogYW55KSB7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbk1vZHVsZS5hbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldCgnbXlTY3JvbGxQb3NpdGlvbicsIGFyZ3Mub2JqZWN0LnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIub25PcHRpb25zVGFwcGVkKGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sICpcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwibGlnaHRncmF5XFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJ0b3BMYWJlbFxcXCIgdGV4dD1cXFwiUmFkTGlzdFZpZXcgaXMgaW5pdGlhbGx5IHNjcm9sbGVkIHNvIHRoYXQgJ2l0ZW0gMjAnIGlzIHZpc2libGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiByb3c9XFxcIjFcXFwiIChkYXRhUG9wdWxhdGVkKT1cXFwib25EYXRhUG9wdWxhdGVkKCRldmVudClcXFwiIGFuZHJvaWQ6YmFja2dyb3VuZENvbG9yPVxcXCJ3aGl0ZVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsTmFtZUluaXRpYWxTY3JvbGxcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBtYXJnaW5MZWZ0PVxcXCIyMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8TGlzdFZpZXdMaW5lYXJMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIiBpb3M6aXRlbUhlaWdodD1cXFwiNTBcXFwiPjwvTGlzdFZpZXdMaW5lYXJMYXlvdXQ+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgT3B0aW9uc0V4YW1wbGVCYXNlIH0gZnJvbSBcIi4uLy4uL29wdGlvbnMtZXhhbXBsZS1iYXNlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0YWJsZSwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYWdlLCBOYXZpZ2F0ZWREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgT3B0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IGlvcyBhcyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBSYWRMaXN0VmlldywgTGlzdFZpZXdJdGVtU25hcE1vZGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtaW5pdGlhbFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LXNjcm9sbC10by1pbmRleC1pbml0aWFsLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1zY3JvbGwtdG8taW5kZXguY29tcG9uZW50LmNzc1wiXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1Njcm9sbFRvSW5kZXhJbml0aWFsQ29tcG9uZW50IGV4dGVuZHMgT3B0aW9uc0V4YW1wbGVCYXNlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSB0aW1lcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlLCBwcml2YXRlIF9vcHRpb25zU2VydmljZTogT3B0aW9uc1NlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0SWRlbnRpY2FsRGF0YUl0ZW1zKDEwMCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsRnVuYyhsaXN0VmlldzogUmFkTGlzdFZpZXcpIHtcbiAgICAgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleCgyMCwgZmFsc2UsIExpc3RWaWV3SXRlbVNuYXBNb2RlLlN0YXJ0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRhUG9wdWxhdGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBsaXN0VmlldyA9IGFyZ3Mub2JqZWN0IGFzIFJhZExpc3RWaWV3O1xuICAgICAgICAvLyBVc2VzIFwic2V0VGltZW91dCgpXCIgdG8gb25seSBleGVjdXRlIHNjcm9sbFRvSW5kZXggd2hlbiB0aGUgUmFkTGlzdFZpZXcgb24gaU9TIGhhcyBmaW5pc2hlZCBwb3B1bGF0aW5nIGl0cyBuYXRpdmUgb2JqZWN0c1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCh0aGlzLnNjcm9sbEZ1bmMsIDEwLCBsaXN0Vmlldyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEZ1bmMobGlzdFZpZXcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkluIHZlcnRpY2FsIGRpcmVjdGlvblxcXCI+XFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGljb249XFxcInJlczovL2ljX2Fycm93X2JhY2tfYmxhY2tfMjRkcFxcXCIgKHRhcCk9XFxcIm9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuICAgIDxBY3Rpb25JdGVtICp0a0lmSU9TIHRleHQ9XFxcIk9wdGlvbnNcXFwiIGlvcy5wb3NpdGlvbj1cXFwicmlnaHRcXFwiICh0YXApPVxcXCJvbk9wdGlvbnNUYXBwZWQoKVxcXCI+PC9BY3Rpb25JdGVtPlxcbiAgICA8QWN0aW9uSXRlbSAqdGtJZkFuZHJvaWQgdGV4dD1cXFwiQXV0b1xcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICh0YXApPVxcXCJvbk9wdGlvbnNUYXBwZWQoJGV2ZW50KVxcXCIgPjwvQWN0aW9uSXRlbT5cXG4gICAgPEFjdGlvbkl0ZW0gKnRrSWZBbmRyb2lkIHRleHQ9XFxcIlN0YXJ0XFxcIiBhbmRyb2lkLnBvc2l0aW9uPVxcXCJwb3B1cFxcXCIgKHRhcCk9XFxcIm9uT3B0aW9uc1RhcHBlZCgkZXZlbnQpXFxcIj48L0FjdGlvbkl0ZW0+XFxuICAgIDxBY3Rpb25JdGVtICp0a0lmQW5kcm9pZCB0ZXh0PVxcXCJDZW50ZXJcXFwiIGFuZHJvaWQucG9zaXRpb249XFxcInBvcHVwXFxcIiAodGFwKT1cXFwib25PcHRpb25zVGFwcGVkKCRldmVudClcXFwiPjwvQWN0aW9uSXRlbT5cXG4gICAgPEFjdGlvbkl0ZW0gKnRrSWZBbmRyb2lkIHRleHQ9XFxcIkVuZFxcXCIgYW5kcm9pZC5wb3NpdGlvbj1cXFwicG9wdXBcXFwiICh0YXApPVxcXCJvbk9wdGlvbnNUYXBwZWQoJGV2ZW50KVxcXCIgPjwvQWN0aW9uSXRlbT5cXG48L0FjdGlvbkJhcj5cXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgPEJ1dHRvbiB0ZXh0PVxcXCJTQ1JPTEwgVE8gSU5ERVggNTBcXFwiICh0YXApPVxcXCJvblRhcCgpXFxcIj48L0J1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3ICNteVJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgW3Njcm9sbFBvc2l0aW9uXT1cXFwibXlTY3JvbGxQb3NpdGlvblxcXCIgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxOYW1lXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8TGlzdFZpZXdMaW5lYXJMYXlvdXQgdGtMaXN0Vmlld0xheW91dCBzY3JvbGxEaXJlY3Rpb249XFxcIlZlcnRpY2FsXFxcIiBpdGVtSGVpZ2h0PVxcXCI1MFxcXCI+PC9MaXN0Vmlld0xpbmVhckxheW91dD5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBPcHRpb25zRXhhbXBsZUJhc2UgfSBmcm9tIFwiLi4vLi4vb3B0aW9ucy1leGFtcGxlLWJhc2VcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3RhYmxlLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UsIE5hdmlnYXRlZERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBPcHRpb25zU2VydmljZSB9IGZyb20gXCIuLi8uLi9uYXZpZ2F0aW9uL29wdGlvbnMvb3B0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbk1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJhZExpc3RWaWV3Q29tcG9uZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1zY3JvbGwtdG8taW5kZXgtdmVydGljYWxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1zY3JvbGwtdG8taW5kZXgtdmVydGljYWwuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LXNjcm9sbC10by1pbmRleC5jb21wb25lbnQuY3NzXCJdXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2Nyb2xsVG9JbmRleFZlcnRpY2FsQ29tcG9uZW50IGV4dGVuZHMgT3B0aW9uc0V4YW1wbGVCYXNlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9vcHRpb25zUGFyYW1OYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX29wdGlvbnM6IEFycmF5PHN0cmluZz4gPSBbXCJBdXRvXCIsIFwiU3RhcnRcIiwgXCJDZW50ZXJcIiwgXCJFbmRcIl07XG5cbiAgICBteVNjcm9sbFBvc2l0aW9uOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOiBQYWdlLCBwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSwgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbk1vZHVsZS5pb3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgdGhpcy5vbk5hdmlnYXRpbmdUbywgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9vcHRpb25zUGFyYW1OYW1lID0gXCJzY3JvbGxEaXJlY3Rpb25cIjtcbiAgICAgICAgICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnBhcmFtTmFtZSA9IHRoaXMuX29wdGlvbnNQYXJhbU5hbWU7XG4gICAgICAgICAgICB0aGlzLnJvdXRlciA9IF9yb3V0ZXI7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25QYXJhbWV0ZXJzID0geyBzZWxlY3RlZEluZGV4OiBzZWxlY3RlZEluZGV4LCBwYXJhbU5hbWU6IHRoaXMuX29wdGlvbnNQYXJhbU5hbWUsIGl0ZW1zOiB0aGlzLl9vcHRpb25zIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXQoXCJteVNjcm9sbFBvc2l0aW9uXCIsIHRoaXMuX29wdGlvbnNbc2VsZWN0ZWRJbmRleF0pO1xuICAgIH1cblxuICAgIC8vID4+IGFuZ3VsYXItbGlzdHZpZXctc2Nyb2xsLXRvLWluZGV4XG4gICAgQFZpZXdDaGlsZCgnbXlSYWRMaXN0VmlldycsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5zY3JvbGxUb0luZGV4KDUwLCBmYWxzZSwgdGhpcy5nZXQoJ215U2Nyb2xsUG9zaXRpb24nKSk7XG4gICAgfVxuICAgIC8vIDw8IGFuZ3VsYXItbGlzdHZpZXctc2Nyb2xsLXRvLWluZGV4XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXRJZGVudGljYWxEYXRhSXRlbXMoMTAwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MuaXNCYWNrTmF2aWdhdGlvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnNTZXJ2aWNlLnBhcmFtTmFtZSA9PT0gdGhpcy5fb3B0aW9uc1BhcmFtTmFtZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fb3B0aW9uc1NlcnZpY2UucGFyYW1WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX29wdGlvbnNbMF06XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChcIm15U2Nyb2xsUG9zaXRpb25cIiwgdGhpcy5fb3B0aW9uc1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25QYXJhbWV0ZXJzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5fb3B0aW9uc1sxXTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KFwibXlTY3JvbGxQb3NpdGlvblwiLCB0aGlzLl9vcHRpb25zWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblBhcmFtZXRlcnMuc2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLl9vcHRpb25zWzJdOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoXCJteVNjcm9sbFBvc2l0aW9uXCIsIHRoaXMuX29wdGlvbnNbMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uUGFyYW1ldGVycy5zZWxlY3RlZEluZGV4ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMuX29wdGlvbnNbM106XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChcIm15U2Nyb2xsUG9zaXRpb25cIiwgdGhpcy5fb3B0aW9uc1szXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25QYXJhbWV0ZXJzLnNlbGVjdGVkSW5kZXggPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25PcHRpb25zVGFwcGVkKGFyZ3M6IGFueSkge1xuICAgICAgICBpZiAoYXBwbGljYXRpb25Nb2R1bGUuYW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5zZXQoJ215U2Nyb2xsUG9zaXRpb24nLCBhcmdzLm9iamVjdC50ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm9uT3B0aW9uc1RhcHBlZChhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIubGFiZWxOYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwO1xcbn1cXG5cXG4ubGFiZWxOYW1lSW5pdGlhbFNjcm9sbCB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDtcXG4gICAgaGVpZ2h0OiA1MDtcXG59XFxuXFxuLmxhYmVsTmFtZUhvcml6b250YWwge1xcbiAgICBtYXJnaW4tbGVmdDogNTtcXG59XFxuXFxuLnRvcExhYmVsIHtcXG4gICAgbWFyZ2luOiAxMDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmRlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIiB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbj5cXG4gICAgPExhYmVsIHRleHQ9XFxcIlNlbGVjdGlvbiBzdGF0ZXNcXFwiPjwvTGFiZWw+XFxuICAgIDwhLS0gPj4gYW5ndWxhci1saXN0dmlldy1ob3d0by1pdGVtLXNlbGVjdGlvbi1ldmVudHMtaHRtbCAtLT5cXG4gICAgPFJhZExpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgcm93PVxcXCIxXFxcIiBtdWx0aXBsZVNlbGVjdGlvbj1cXFwidHJ1ZVxcXCIgc2VsZWN0aW9uQmVoYXZpb3I9XFxcIlByZXNzXFxcIiAoaXRlbVNlbGVjdGVkKT1cXFwiaXRlbVNlbGVjdGVkKCRldmVudClcXFwiXFxuICAgICAgICAoaXRlbURlc2VsZWN0ZWQpPVxcXCJpdGVtRGVzZWxlY3RlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgIDwhLS0gPDwgYW5ndWxhci1saXN0dmlldy1ob3d0by1pdGVtLXNlbGVjdGlvbi1ldmVudHMtaHRtbCAtLT5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSA+PiBhbmd1bGFyLWxpc3R2aWV3LWhvd3RvLWl0ZW0tc2VsZWN0aW9uLXRlbXBsYXRlLWh0bWwgLS0+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgW2JhY2tncm91bmRDb2xvcl09XFxcIml0ZW0uc2VsZWN0ZWQgPyAncmVkJyA6ICd3aGl0ZSdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LWhvd3RvLWl0ZW0tc2VsZWN0aW9uLXRlbXBsYXRlLWh0bWwgLS0+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiLy8gPj4gYW5ndWxhci1saXN0dmlldy1zZWxlY3Rpb24tc3RhdGVzLWNvbXBvbmVudFxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGFJdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LXNlbGVjdGlvbi1zdGF0ZXNcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LXNlbGVjdGlvbi1zdGF0ZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LXNlbGVjdGlvbi1zdGF0ZXMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NlbGVjdGlvblN0YXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXRJZGVudGljYWxEYXRhSXRlbXMoMjUpKTtcbiAgICB9XG5cbiAgICAgLy8gPj4gYW5ndWxhci1saXN0dmlldy1ob3d0by1pdGVtLXNlbGVjdGlvbi1ldmVudHNcbiAgICBwdWJsaWMgaXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmRhdGFJdGVtcy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXRlbURlc2VsZWN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YUl0ZW1zLmdldEl0ZW0oYXJncy5pbmRleCk7XG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gPDwgYW5ndWxhci1saXN0dmlldy1ob3d0by1pdGVtLXNlbGVjdGlvbi1ldmVudHNcbn1cbi8vIDw8IGFuZ3VsYXItbGlzdHZpZXctc2VsZWN0aW9uLXN0YXRlcy1jb21wb25lbnQiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm5hbWVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjBcXG59XFxuXFxuLmRlc2NyaXB0aW9uTGFiZWwge1xcbiAgICBmb250LXNpemU6IDE0O1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCB0a0V4YW1wbGVUaXRsZSB0a1RvZ2dsZU5hdkJ1dHRvbiByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG4gICAgICAgIDxCdXR0b24gW3RleHRdPVxcXCJpc0VuYWJsZWQgPyAnRGlzYWJsZSBzb3J0aW5nJyA6ICdFbmFibGUgc29ydGluZydcXFwiICh0YXApPVxcXCJ0b2dnbGVTb3J0aW5nKClcXFwiIGlvczptYXJnaW49XFxcIjVcXFwiPjwvQnV0dG9uPlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiZGF0YUl0ZW1zXFxcIiByb3c9XFxcIjFcXFwiICNteUxpc3RWaWV3IFtzb3J0aW5nRnVuY3Rpb25dPVxcXCJteVNvcnRpbmdGdW5jXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIm5hbWVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiZGVzY3JpcHRpb25MYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L1JhZExpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5cbmVudW0gU29ydGluZ09yZGVyIHtcbiAgICBOU09yZGVyZWRBc2NlbmRpbmcgPSAtMSxcbiAgICBOU09yZGVyZWRTYW1lID0gMCxcbiAgICBOU09yZGVyZWREZXNjZW5kaW5nID0gMVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1zb3J0aW5nXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1kYXRhLW9wZXJhdGlvbnMtc29ydGluZy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctZGF0YS1vcGVyYXRpb25zLXNvcnRpbmcuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0RhdGFPcGVyYXRpb25zU29ydGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuICAgIHByaXZhdGUgX2lzRW5hYmxlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9teVNvcnRpbmdGdW5jOiAoaXRlbTogYW55LCBvdGhlckl0ZW06IGFueSkgPT4gbnVtYmVyO1xuXG4gICAgQFZpZXdDaGlsZChcIm15TGlzdFZpZXdcIiwgeyByZWFkOiBSYWRMaXN0Vmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KSBteUxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFJdGVtU2VydmljZTogRGF0YUl0ZW1TZXJ2aWNlKSB7XG4gICAgICAgIC8vID4+IGxpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1zb3J0aW5nLWFuZ3VsYXJcbiAgICAgICAgdGhpcy5teVNvcnRpbmdGdW5jID0gKGl0ZW06IERhdGFJdGVtLCBvdGhlckl0ZW06IERhdGFJdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzID0gaXRlbS5pZCA8IG90aGVySXRlbS5pZCA/IFNvcnRpbmdPcmRlci5OU09yZGVyZWRBc2NlbmRpbmcgOiBpdGVtLmlkID4gb3RoZXJJdGVtLmlkID8gU29ydGluZ09yZGVyLk5TT3JkZXJlZERlc2NlbmRpbmcgOiBTb3J0aW5nT3JkZXIuTlNPcmRlcmVkU2FtZTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH07XG4gICAgICAgIC8vIDw8IGxpc3R2aWV3LWRhdGEtb3BlcmF0aW9ucy1zb3J0aW5nLWFuZ3VsYXJcbiAgICAgICAgdGhpcy5pc0VuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPih0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0RGF0YU9wZXJhdGlvbnNJdGVtcygpKTtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBpc0VuYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VuYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0IGlzRW5hYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0VuYWJsZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgbXlTb3J0aW5nRnVuYygpOiAoaXRlbTogYW55LCBvdGhlckl0ZW06IGFueSkgPT4gbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX215U29ydGluZ0Z1bmM7XG4gICAgfVxuXG4gICAgc2V0IG15U29ydGluZ0Z1bmModmFsdWU6IChpdGVtOiBhbnksIG90aGVySXRlbTogYW55KSA9PiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fbXlTb3J0aW5nRnVuYyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVTb3J0aW5nKCkge1xuICAgICAgICBsZXQgbGlzdFZpZXcgPSB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXc7XG4gICAgICAgIGlmICghbGlzdFZpZXcuc29ydGluZ0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICBsaXN0Vmlldy5zb3J0aW5nRnVuY3Rpb24gPSB0aGlzLm15U29ydGluZ0Z1bmM7XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0Vmlldy5zb3J0aW5nRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmlzRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIubGlzdEl0ZW1TdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDU7XFxufVxcblxcbi5sYWJlbE5hbWUge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4O1xcbn1cXG5cXG4ubGFiZWxUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGFiZWxUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG59XFxuXFxuLm1hcmtHcmlkTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTlmZjtcXG4gICAgcGFkZGluZzogMTY7XFxufVxcblxcbi5hcmNoaXZlR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNjOTk7XFxuICAgIHBhZGRpbmc6IDE2O1xcbn1cXG5cXG4udW5yZWFkR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjMzMDA7XFxuICAgIHBhZGRpbmc6IDE2O1xcbn1cXG5cXG4uZGVsZXRlR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcGFkZGluZzogMTY7XFxufVxcblxcbi5yZWFkR3JpZExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2ZmY7XFxuICAgIHBhZGRpbmc6IDE2O1xcbn1cXG5cXG4uZm9yd2FyZEdyaWRMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk2NmZmO1xcbiAgICBwYWRkaW5nOiAxNjtcXG59XFxuXFxuLnN3aXBlVGVtcGxhdGVMYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTU7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93cz1cXFwiYXV0bywgKlxcXCIgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyAjbXlMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHJvdz1cXFwiMVxcXCIgc2VsZWN0aW9uQmVoYXZpb3I9XFxcIk5vbmVcXFwiIChpdGVtU3dpcGVQcm9ncmVzc0VuZGVkKT1cXFwib25Td2lwZUNlbGxGaW5pc2hlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgKGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZCk9XFxcIm9uU3dpcGVDZWxsU3RhcnRlZCgkZXZlbnQpXFxcIiAoaXRlbVN3aXBlUHJvZ3Jlc3NDaGFuZ2VkKT1cXFwib25DZWxsU3dpcGluZygkZXZlbnQpXFxcIiBzd2lwZUFjdGlvbnM9XFxcInRydWVcXFwiPlxcblxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsaXN0SXRlbVN0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsTmFtZVxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxUaXRsZVxcXCIgW3RleHRdPVxcXCJpdGVtLnRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsVGV4dFxcXCIgW3RleHRdPVxcXCJpdGVtLnRleHRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8IS0tID4+IGFuZ3VsYXItbGlzdHZpZXctc3dpcGUtYWN0aW9ucy1tdWx0aXBsZS10ZW1wbGF0ZS1odG1sIC0tPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgKnRrTGlzdEl0ZW1Td2lwZVRlbXBsYXRlIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosICosICpcXFwiIGNvbD1cXFwiMFxcXCIgaWQ9XFxcImxlZnQtc3RhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJtYXJrR3JpZExheW91dFxcXCIgKHRhcCk9XFxcIm9uTGVmdFN3aXBlQ2xpY2soJGV2ZW50KVxcXCIgaWQ9XFxcImJ0bk1hcmtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIm1hcmtcXFwiIGNsYXNzPVxcXCJzd2lwZVRlbXBsYXRlTGFiZWxcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJhcmNoaXZlR3JpZExheW91dFxcXCIgKHRhcCk9XFxcIm9uTGVmdFN3aXBlQ2xpY2soJGV2ZW50KVxcXCIgaWQ9XFxcImJ0bkFyY2hpdmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcImFyY2hpdmVcXFwiIGNsYXNzPVxcXCJzd2lwZVRlbXBsYXRlTGFiZWxcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjJcXFwiIGNsYXNzPVxcXCJ1bnJlYWRHcmlkTGF5b3V0XFxcIiAodGFwKT1cXFwib25MZWZ0U3dpcGVDbGljaygkZXZlbnQpXFxcIiBpZD1cXFwiYnRuVW5yZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ1bnJlYWRcXFwiIGNsYXNzPVxcXCJzd2lwZVRlbXBsYXRlTGFiZWxcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqLCAqXFxcIiBjb2w9XFxcIjJcXFwiIGlkPVxcXCJyaWdodC1zdGFja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImRlbGV0ZUdyaWRMYXlvdXRcXFwiICh0YXApPVxcXCJvblJpZ2h0U3dpcGVDbGljaygkZXZlbnQpXFxcIiBpZD1cXFwiYnRuRGVsZXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJkZWxldGVcXFwiIGNsYXNzPVxcXCJzd2lwZVRlbXBsYXRlTGFiZWxcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJyZWFkR3JpZExheW91dFxcXCIgKHRhcCk9XFxcIm9uUmlnaHRTd2lwZUNsaWNrKCRldmVudClcXFwiIGlkPVxcXCJidG5SZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJyZWFkXFxcIiBjbGFzcz1cXFwic3dpcGVUZW1wbGF0ZUxhYmVsXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVxcXCIyXFxcIiBjbGFzcz1cXFwiZm9yd2FyZEdyaWRMYXlvdXRcXFwiICh0YXApPVxcXCJvblJpZ2h0U3dpcGVDbGljaygkZXZlbnQpXFxcIiBpZD1cXFwiYnRuRm9yd2FyZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiZm9yd2FyZFxcXCIgY2xhc3M9XFxcInN3aXBlVGVtcGxhdGVMYWJlbFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbnMtbXVsdGlwbGUtdGVtcGxhdGUtaHRtbCAtLT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LXN3aXBlLWFjdGlvbnMtbXVsdGlwbGVcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LXN3aXBlLWFjdGlvbnMtbXVsdGlwbGUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LXN3aXBlLWFjdGlvbnMtbXVsdGlwbGUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1N3aXBlQWN0aW9uc011bHRpcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBsZWZ0SXRlbTogVmlldztcbiAgICBwcml2YXRlIHJpZ2h0SXRlbTogVmlldztcbiAgICBwcml2YXRlIG1haW5WaWV3OiBWaWV3O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0UG9zdERhdGFJdGVtcygpKTtcbiAgICB9XG5cbiAgICAvLyA+PiBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbi1tdWx0aXBsZVxuICAgIHB1YmxpYyBvbkNlbGxTd2lwaW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICBjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydzd2lwZVZpZXcnXTtcbiAgICAgICAgdGhpcy5tYWluVmlldyA9IGFyZ3NbJ21haW5WaWV3J107XG4gICAgICAgIHRoaXMubGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ2xlZnQtc3RhY2snKTtcbiAgICAgICAgdGhpcy5yaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQoJ3JpZ2h0LXN0YWNrJyk7XG5cbiAgICAgICAgaWYgKGFyZ3MuZGF0YS54ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbGVmdERpbWVuc2lvbnMgPSBWaWV3Lm1lYXN1cmVDaGlsZChcbiAgICAgICAgICAgICAgICA8Vmlldz50aGlzLmxlZnRJdGVtLnBhcmVudCxcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRJdGVtLFxuICAgICAgICAgICAgICAgIGxheW91dC5tYWtlTWVhc3VyZVNwZWMoTWF0aC5hYnMoYXJncy5kYXRhLngpLCBsYXlvdXQuRVhBQ1RMWSksXG4gICAgICAgICAgICAgICAgbGF5b3V0Lm1ha2VNZWFzdXJlU3BlYyh0aGlzLm1haW5WaWV3LmdldE1lYXN1cmVkSGVpZ2h0KCksIGxheW91dC5FWEFDVExZKSk7XG4gICAgICAgICAgICBWaWV3LmxheW91dENoaWxkKDxWaWV3PnRoaXMubGVmdEl0ZW0ucGFyZW50LCB0aGlzLmxlZnRJdGVtLCAwLCAwLCBsZWZ0RGltZW5zaW9ucy5tZWFzdXJlZFdpZHRoLCBsZWZ0RGltZW5zaW9ucy5tZWFzdXJlZEhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdGhlclN3aXBlVGVtcGxhdGVWaWV3KFwibGVmdFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0RGltZW5zaW9ucyA9IFZpZXcubWVhc3VyZUNoaWxkKFxuICAgICAgICAgICAgICAgIDxWaWV3PnRoaXMucmlnaHRJdGVtLnBhcmVudCxcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0SXRlbSxcbiAgICAgICAgICAgICAgICBsYXlvdXQubWFrZU1lYXN1cmVTcGVjKE1hdGguYWJzKGFyZ3MuZGF0YS54KSwgbGF5b3V0LkVYQUNUTFkpLFxuICAgICAgICAgICAgICAgIGxheW91dC5tYWtlTWVhc3VyZVNwZWModGhpcy5tYWluVmlldy5nZXRNZWFzdXJlZEhlaWdodCgpLCBsYXlvdXQuRVhBQ1RMWSkpO1xuXG4gICAgICAgICAgICBWaWV3LmxheW91dENoaWxkKDxWaWV3PnRoaXMucmlnaHRJdGVtLnBhcmVudCwgdGhpcy5yaWdodEl0ZW0sIHRoaXMubWFpblZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpIC0gcmlnaHREaW1lbnNpb25zLm1lYXN1cmVkV2lkdGgsIDAsIHRoaXMubWFpblZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpLCByaWdodERpbWVuc2lvbnMubWVhc3VyZWRIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5oaWRlT3RoZXJTd2lwZVRlbXBsYXRlVmlldyhcInJpZ2h0XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlT3RoZXJTd2lwZVRlbXBsYXRlVmlldyhjdXJyZW50U3dpcGVWaWV3OiBzdHJpbmcpIHtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50U3dpcGVWaWV3KSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpZ2h0SXRlbS5nZXRBY3R1YWxTaXplKCkud2lkdGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVmlldy5sYXlvdXRDaGlsZCg8Vmlldz50aGlzLnJpZ2h0SXRlbS5wYXJlbnQsIHRoaXMucmlnaHRJdGVtLCB0aGlzLm1haW5WaWV3LmdldE1lYXN1cmVkV2lkdGgoKSwgMCwgdGhpcy5tYWluVmlldy5nZXRNZWFzdXJlZFdpZHRoKCksIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnRJdGVtLmdldEFjdHVhbFNpemUoKS53aWR0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWaWV3LmxheW91dENoaWxkKDxWaWV3PnRoaXMubGVmdEl0ZW0ucGFyZW50LCB0aGlzLmxlZnRJdGVtLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIDw8IGFuZ3VsYXItbGlzdHZpZXctc3dpcGUtYWN0aW9uLW11bHRpcGxlXG5cbiAgICAvLyA+PiBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbi1tdWx0aXBsZS1saW1pdHNcbiAgICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICBzd2lwZUxpbWl0cy50aHJlc2hvbGQgPSBhcmdzWydtYWluVmlldyddLmdldE1lYXN1cmVkV2lkdGgoKSAqIDAuMjsgLy8gMjAlIG9mIHdob2xlIHdpZHRoXG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBzd2lwZUxpbWl0cy5yaWdodCA9IGFyZ3NbJ21haW5WaWV3J10uZ2V0TWVhc3VyZWRXaWR0aCgpICogMC42NTsgLy8gNjUlIG9mIHdob2xlIHdpZHRoXG4gICAgfVxuICAgIC8vIDw8IGFuZ3VsYXItbGlzdHZpZXctc3dpcGUtYWN0aW9uLW11bHRpcGxlLWxpbWl0c1xuXG4gICAgcHVibGljIG9uU3dpcGVDZWxsRmluaXNoZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgaWYgKGFyZ3MuZGF0YS54ID4gMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmZvcm0gbGVmdCBhY3Rpb25cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmZvcm0gcmlnaHQgYWN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBpdGVtVmlldyA9IGFyZ3Mub2JqZWN0IGFzIFZpZXc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIGNsaWNrZWQ6IFwiICsgaXRlbVZpZXcuaWQgKyBcIiBmb3IgaXRlbSB3aXRoIGluZGV4OiBcIiArIHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5pdGVtcy5pbmRleE9mKGl0ZW1WaWV3LmJpbmRpbmdDb250ZXh0KSk7XG4gICAgICAgIHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgaXRlbVZpZXcgPSBhcmdzLm9iamVjdCBhcyBWaWV3O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiBjbGlja2VkOiBcIiArIGl0ZW1WaWV3LmlkICsgXCIgZm9yIGl0ZW0gd2l0aCBpbmRleDogXCIgKyB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcuaXRlbXMuaW5kZXhPZihpdGVtVmlldy5iaW5kaW5nQ29udGV4dCkpO1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmxpc3RJdGVtU3RhY2tMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1O1xcbn1cXG5cXG4ubGFiZWxOYW1lIHtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogODtcXG59XFxuXFxuLmxhYmVsVGl0bGUge1xcbiAgICBmb250LXNpemU6IDE0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxhYmVsVGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTI7XFxufVxcblxcbi5tYXJrVmlld1N0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgcGFkZGluZzogMTZcXG59XFxuXFxuLmRlbGV0ZVZpZXdTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcGFkZGluZzogMTY7XFxufVxcblxcbi5ncmlkTGF5b3V0TGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5tYXJrVmlld1N0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNjtcXG4gICAgcGFkZGluZy1yaWdodDogMTY7XFxufVxcblxcbi5zd2lwZVRlbXBsYXRlTGFiZWwge1xcbiAgICBzaXplOiAyMDtcXG59XFxuXFxuLmRlbGV0ZVZpZXdTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNjtcXG4gICAgcGFkZGluZy1yaWdodDogMTY7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93cz1cXFwiYXV0bywgKlxcXCIgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyAjbXlMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHJvdz1cXFwiMVxcXCIgc2VsZWN0aW9uQmVoYXZpb3I9XFxcIk5vbmVcXFwiIChpdGVtU3dpcGVQcm9ncmVzc0VuZGVkKT1cXFwib25Td2lwZUNlbGxGaW5pc2hlZCgkZXZlbnQpXFxcIlxcbiAgICAgICAgKGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZCk9XFxcIm9uU3dpcGVDZWxsU3RhcnRlZCgkZXZlbnQpXFxcIiAoaXRlbVN3aXBlUHJvZ3Jlc3NDaGFuZ2VkKT1cXFwib25DZWxsU3dpcGluZygkZXZlbnQpXFxcIiBzd2lwZUFjdGlvbnM9XFxcInRydWVcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJsaXN0SXRlbVN0YWNrTGF5b3V0XFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsTmFtZVxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxUaXRsZVxcXCIgW3RleHRdPVxcXCJpdGVtLnRpdGxlXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsVGV4dFxcXCIgW3RleHRdPVxcXCJpdGVtLnRleHRcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgICAgICA8R3JpZExheW91dCAqdGtMaXN0SXRlbVN3aXBlVGVtcGxhdGUgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcImdyaWRMYXlvdXRMYXlvdXRcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwibWFyay12aWV3XFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJtYXJrVmlld1N0YWNrTGF5b3V0XFxcIiAodGFwKT1cXFwib25MZWZ0U3dpcGVDbGljaygkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIm1hcmtcXFwiIGNsYXNzPVxcXCJzd2lwZVRlbXBsYXRlTGFiZWxcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiZGVsZXRlLXZpZXdcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcImRlbGV0ZVZpZXdTdGFja0xheW91dFxcXCIgKHRhcCk9XFxcIm9uUmlnaHRTd2lwZUNsaWNrKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiZGVsZXRlXFxcIiBjbGFzcz1cXFwic3dpcGVUZW1wbGF0ZUxhYmVsXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vZGF0YUl0ZW1cIjtcbmltcG9ydCB7IERhdGFJdGVtU2VydmljZSB9IGZyb20gXCIuLi9kYXRhSXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgbGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1zd2lwZS1hY3Rpb25zLXRocmVzaG9sZHNcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LXN3aXBlLWFjdGlvbnMtdGhyZXNob2xkcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibGlzdHZpZXctc3dpcGUtYWN0aW9ucy10aHJlc2hvbGRzLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTd2lwZUFjdGlvbnNUaHJlc2hvbGRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHJpdmF0ZSBsZWZ0VGhyZXNob2xkUGFzc2VkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSByaWdodFRocmVzaG9sZFBhc3NlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0UG9zdERhdGFJdGVtcygpKTtcbiAgICB9XG5cbiAgICAvLyA+PiBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbi10aHJlc2hvbGRzXG4gICAgcHVibGljIG9uQ2VsbFN3aXBpbmcoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgICAgIGNvbnN0IHN3aXBlVmlldyA9IGFyZ3NbJ3N3aXBlVmlldyddO1xuICAgICAgICBjb25zdCBtYWluVmlldyA9IGFyZ3NbJ21haW5WaWV3J107XG4gICAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdtYXJrLXZpZXcnKTtcbiAgICAgICAgY29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdkZWxldGUtdmlldycpO1xuXG4gICAgICAgIGlmIChhcmdzLmRhdGEueCA+IHN3aXBlVmlldy5nZXRNZWFzdXJlZFdpZHRoKCkgLyA0ICYmICF0aGlzLmxlZnRUaHJlc2hvbGRQYXNzZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZ5IHBlcmZvcm0gbGVmdCBhY3Rpb25cIik7XG4gICAgICAgICAgICBjb25zdCBtYXJrTGFiZWwgPSBsZWZ0SXRlbS5nZXRWaWV3QnlJZCgnbWFyay10ZXh0Jyk7XG4gICAgICAgICAgICB0aGlzLmxlZnRUaHJlc2hvbGRQYXNzZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLXN3aXBlVmlldy5nZXRNZWFzdXJlZFdpZHRoKCkgLyA0ICYmICF0aGlzLnJpZ2h0VGhyZXNob2xkUGFzc2VkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVMYWJlbCA9IHJpZ2h0SXRlbS5nZXRWaWV3QnlJZCgnZGVsZXRlLXRleHQnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZ5IHBlcmZvcm0gcmlnaHQgYWN0aW9uXCIpO1xuICAgICAgICAgICAgdGhpcy5yaWdodFRocmVzaG9sZFBhc3NlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MuZGF0YS54ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbGVmdERpbWVuc2lvbnMgPSBWaWV3Lm1lYXN1cmVDaGlsZChcbiAgICAgICAgICAgICAgICBsZWZ0SXRlbS5wYXJlbnQsXG4gICAgICAgICAgICAgICAgbGVmdEl0ZW0sXG4gICAgICAgICAgICAgICAgbGF5b3V0Lm1ha2VNZWFzdXJlU3BlYyhNYXRoLmFicyhhcmdzLmRhdGEueCksIGxheW91dC5FWEFDVExZKSxcbiAgICAgICAgICAgICAgICBsYXlvdXQubWFrZU1lYXN1cmVTcGVjKG1haW5WaWV3LmdldE1lYXN1cmVkSGVpZ2h0KCksIGxheW91dC5FWEFDVExZKSk7XG4gICAgICAgICAgICBWaWV3LmxheW91dENoaWxkKGxlZnRJdGVtLnBhcmVudCwgbGVmdEl0ZW0sIDAsIDAsIGxlZnREaW1lbnNpb25zLm1lYXN1cmVkV2lkdGgsIGxlZnREaW1lbnNpb25zLm1lYXN1cmVkSGVpZ2h0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0RGltZW5zaW9ucyA9IFZpZXcubWVhc3VyZUNoaWxkKFxuICAgICAgICAgICAgICAgIHJpZ2h0SXRlbS5wYXJlbnQsXG4gICAgICAgICAgICAgICAgcmlnaHRJdGVtLFxuICAgICAgICAgICAgICAgIGxheW91dC5tYWtlTWVhc3VyZVNwZWMoTWF0aC5hYnMoYXJncy5kYXRhLngpLCBsYXlvdXQuRVhBQ1RMWSksXG4gICAgICAgICAgICAgICAgbGF5b3V0Lm1ha2VNZWFzdXJlU3BlYyhtYWluVmlldy5nZXRNZWFzdXJlZEhlaWdodCgpLCBsYXlvdXQuRVhBQ1RMWSkpO1xuXG4gICAgICAgICAgICBWaWV3LmxheW91dENoaWxkKHJpZ2h0SXRlbS5wYXJlbnQsIHJpZ2h0SXRlbSwgbWFpblZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpIC0gcmlnaHREaW1lbnNpb25zLm1lYXN1cmVkV2lkdGgsIDAsIG1haW5WaWV3LmdldE1lYXN1cmVkV2lkdGgoKSwgcmlnaHREaW1lbnNpb25zLm1lYXN1cmVkSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyA8PCBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbi10aHJlc2hvbGRzXG5cbiAgICAvLyA+PiBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbi10aHJlc2hvbGRzLWxpbWl0c1xuICAgIHB1YmxpYyBvblN3aXBlQ2VsbFN0YXJ0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3Qgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgICAgIGNvbnN0IHN3aXBlVmlldyA9IGFyZ3NbJ29iamVjdCddO1xuICAgICAgICBjb25zdCBsZWZ0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnbWFyay12aWV3Jyk7XG4gICAgICAgIGNvbnN0IHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnZGVsZXRlLXZpZXcnKTtcbiAgICAgICAgc3dpcGVMaW1pdHMubGVmdCA9IHN3aXBlTGltaXRzLnJpZ2h0ID0gYXJncy5kYXRhLnggPiAwID8gc3dpcGVWaWV3LmdldE1lYXN1cmVkV2lkdGgoKSAvIDIgOiBzd2lwZVZpZXcuZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcbiAgICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gc3dpcGVWaWV3LmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICB9XG4gICAgLy8gPDwgYW5ndWxhci1saXN0dmlldy1zd2lwZS1hY3Rpb24tdGhyZXNob2xkcy1saW1pdHNcblxuICAgIC8vID4+IGFuZ3VsYXItbGlzdHZpZXctc3dpcGUtYWN0aW9ucy1leGVjdXRlXG4gICAgcHVibGljIG9uU3dpcGVDZWxsRmluaXNoZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3Qgc3dpcGVWaWV3ID0gYXJnc1snb2JqZWN0J107XG4gICAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdtYXJrLXZpZXcnKTtcbiAgICAgICAgY29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkKCdkZWxldGUtdmlldycpO1xuICAgICAgICBpZiAodGhpcy5sZWZ0VGhyZXNob2xkUGFzc2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBlcmZvcm0gbGVmdCBhY3Rpb25cIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yaWdodFRocmVzaG9sZFBhc3NlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQZXJmb3JtIHJpZ2h0IGFjdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZnRUaHJlc2hvbGRQYXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodFRocmVzaG9sZFBhc3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyA8PCBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbnMtZXhlY3V0ZVxuXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMZWZ0IHN3aXBlIGNsaWNrXCIpO1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJpZ2h0U3dpcGVDbGljayhhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmlnaHQgc3dpcGUgY2xpY2tcIik7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zLnNwbGljZSh0aGlzLmRhdGFJdGVtcy5pbmRleE9mKGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0KSwgMSk7XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5saXN0SXRlbVN0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctbGVmdDogNTtcXG59XFxuXFxuLmxhYmVsTmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIG1hcmdpbi1ib3R0b206IDg7XFxufVxcblxcbi5sYWJlbFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sYWJlbFRleHQge1xcbiAgICBmb250LXNpemU6IDEyO1xcbn1cXG5cXG4ubWFya1ZpZXdTdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIHBhZGRpbmc6IDE2XFxufVxcblxcbi5kZWxldGVWaWV3U3RhY2tMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIHBhZGRpbmc6IDE2O1xcbn1cXG5cXG4uZ3JpZExheW91dExheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG4uc3dpcGVUZW1wbGF0ZUxhYmVsIHtcXG4gICAgc2l6ZTogMjA7XFxufVxcblwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgcm93cz1cXFwiKiwgYXV0b1xcXCIgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDwhLS0gPj4gYW5ndWxhci1saXN0dmlldy1zd2lwZS1hY3Rpb25zLXNldC1lbmFibGVkLWh0bWwgLS0+XFxuICAgIDxSYWRMaXN0VmlldyAjbXlMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiIHNlbGVjdGlvbkJlaGF2aW9yPVxcXCJOb25lXFxcIiAoaXRlbVN3aXBlUHJvZ3Jlc3NFbmRlZCk9XFxcIm9uU3dpcGVDZWxsRmluaXNoZWQoJGV2ZW50KVxcXCJcXG4gICAgKGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZCk9XFxcIm9uU3dpcGVDZWxsU3RhcnRlZCgkZXZlbnQpXFxcIiAoaXRlbVN3aXBlUHJvZ3Jlc3NDaGFuZ2VkKT1cXFwib25DZWxsU3dpcGluZygkZXZlbnQpXFxcIiBzd2lwZUFjdGlvbnM9XFxcInRydWVcXFwiPlxcbiAgICA8IS0tID4+IChoaWRlKSAtLT5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCAodGFwKT1cXFwib25MYXlvdXRUYXAoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImxpc3RJdGVtU3RhY2tMYXlvdXRcXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCAodGFwKT1cXFwib25MYWJlbFRhcCgkZXZlbnQpXFxcIiBjbGFzcz1cXFwibGFiZWxOYW1lXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbFRpdGxlXFxcIiBbdGV4dF09XFxcIml0ZW0udGl0bGVcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibGFiZWxUZXh0XFxcIiBbdGV4dF09XFxcIml0ZW0udGV4dFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPCEtLSA+PiBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbnMtdGVtcGxhdGUtaHRtbCAtLT5cXG4gICAgICAgIDxHcmlkTGF5b3V0ICp0a0xpc3RJdGVtU3dpcGVUZW1wbGF0ZSBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiZ3JpZExheW91dExheW91dFxcXCI+XFxuICAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwibWFyay12aWV3XFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJtYXJrVmlld1N0YWNrTGF5b3V0XFxcIiAodGFwKT1cXFwib25MZWZ0U3dpcGVDbGljaygkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIm1hcmtcXFwiIGNsYXNzPVxcXCJzd2lwZVRlbXBsYXRlTGFiZWxcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiZGVsZXRlLXZpZXdcXFwiIGNvbD1cXFwiMlxcXCIgY2xhc3M9XFxcImRlbGV0ZVZpZXdTdGFja0xheW91dFxcXCIgKHRhcCk9XFxcIm9uUmlnaHRTd2lwZUNsaWNrKCRldmVudClcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiZGVsZXRlXFxcIiBjbGFzcz1cXFwic3dpcGVUZW1wbGF0ZUxhYmVsXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPCEtLSA8PCBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbnMtdGVtcGxhdGUtaHRtbCAtLT5cXG4gICAgPCEtLSA8PCAoaGlkZSkgLS0+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuICAgIDxMYWJlbCBpZD1cXFwibGJsXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgcm93PVxcXCIxXFxcIj48L0xhYmVsPlxcbjwhLS0gPDwgYW5ndWxhci1saXN0dmlldy1zd2lwZS1hY3Rpb25zLXNldC1lbmFibGVkLWh0bWwgLS0+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWwnO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LXN3aXBlLWFjdGlvbnNcIixcbiAgICBwcm92aWRlcnM6IFtEYXRhSXRlbVNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcImxpc3R2aWV3LXN3aXBlLWFjdGlvbnMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxpc3R2aWV3LXN3aXBlLWFjdGlvbnMuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1N3aXBlQWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YUl0ZW1TZXJ2aWNlOiBEYXRhSXRlbVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXQgZGF0YUl0ZW1zKCk6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoXCJteUxpc3RWaWV3XCIsIHsgcmVhZDogUmFkTGlzdFZpZXdDb21wb25lbnQsIHN0YXRpYzogZmFsc2UgfSkgbXlMaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fZGF0YUl0ZW1zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhSXRlbVNlcnZpY2UuZ2V0UG9zdERhdGFJdGVtcygpKTtcbiAgICB9XG5cbiAgICAvLyA+PiBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbi1yZWxlYXNlLW5vdGlmeVxuICAgIHB1YmxpYyBvbkNlbGxTd2lwaW5nKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICBjb25zdCBjdXJyZW50SXRlbVZpZXcgPSBhcmdzLm9iamVjdDtcblxuICAgICAgICBpZiAoYXJncy5kYXRhLnggPiAyMDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm90aWZ5IHBlcmZvcm0gbGVmdCBhY3Rpb25cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5kYXRhLnggPCAtMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIHJpZ2h0IGFjdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyA8PCBhbmd1bGFyLWxpc3R2aWV3LXN3aXBlLWFjdGlvbi1yZWxlYXNlLW5vdGlmeVxuXG4gICAgLy8gPj4gYW5ndWxhci1saXN0dmlldy1zd2lwZS1hY3Rpb24tcmVsZWFzZS1saW1pdHNcbiAgICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHN3aXBlTGltaXRzID0gYXJncy5kYXRhLnN3aXBlTGltaXRzO1xuICAgICAgICBjb25zdCBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcbiAgICAgICAgY29uc3QgbGVmdEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ21hcmstdmlldycpO1xuICAgICAgICBjb25zdCByaWdodEl0ZW0gPSBzd2lwZVZpZXcuZ2V0Vmlld0J5SWQ8Vmlldz4oJ2RlbGV0ZS12aWV3Jyk7XG4gICAgICAgIHN3aXBlTGltaXRzLmxlZnQgPSBsZWZ0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIHN3aXBlTGltaXRzLnJpZ2h0ID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpIC8gMjtcbiAgICB9XG4gICAgLy8gPDwgYW5ndWxhci1saXN0dmlldy1zd2lwZS1hY3Rpb24tcmVsZWFzZS1saW1pdHNcblxuICAgIC8vID4+IGFuZ3VsYXItbGlzdHZpZXctc3dpcGUtYWN0aW9uLXJlbGVhc2UtZXhlY3V0ZVxuICAgIHB1YmxpYyBvblN3aXBlQ2VsbEZpbmlzaGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgfVxuICAgIC8vIDw8IGFuZ3VsYXItbGlzdHZpZXctc3dpcGUtYWN0aW9uLXJlbGVhc2UtZXhlY3V0ZVxuXG4gICAgLy8gPj4gYW5ndWxhci1saXN0dmlldy1zd2lwZS1hY3Rpb24taGFuZGxlcnNcbiAgICBwdWJsaWMgb25MZWZ0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxlZnQgc3dpcGUgY2xpY2tcIik7XG4gICAgICAgIHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSaWdodCBzd2lwZSBjbGlja1wiKTtcbiAgICAgICAgdGhpcy5kYXRhSXRlbXMuc3BsaWNlKHRoaXMuZGF0YUl0ZW1zLmluZGV4T2YoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQpLCAxKTtcbiAgICB9XG4gICAgLy8gPDwgYW5ndWxhci1saXN0dmlldy1zd2lwZS1hY3Rpb24taGFuZGxlcnNcblxuICAgIHB1YmxpYyBvbkxheW91dFRhcChhcmdzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBcIlRhcCBvbiBMYXlvdXQgZm9yIGl0ZW06IFwiICsgKDxEYXRhSXRlbT5hcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCkubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubXlMaXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5ub3RpZnlTd2lwZVRvRXhlY3V0ZUZpbmlzaGVkKCk7XG4gICAgICAgIGxldCBsYmwgPSA8TGFiZWw+RnJhbWUudG9wbW9zdCgpLmdldFZpZXdCeUlkKFwibGJsXCIpO1xuICAgICAgICBsYmwudGV4dCArPSBcIiBcXG5cIiArIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGFiZWxUYXAoYXJncykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gXCJUYXAgb24gVGl0bGU6IFwiICsgKDxMYWJlbD5hcmdzLm9iamVjdCkudGV4dDtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIGxldCBsYmwgPSA8TGFiZWw+RnJhbWUudG9wbW9zdCgpLmdldFZpZXdCeUlkKFwibGJsXCIpO1xuICAgICAgICBsYmwudGV4dCA9IG1lc3NhZ2U7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gXCIubGlzdEl0ZW1TdGFja0xheW91dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDU7XFxufVxcblxcbi5sYWJlbE5hbWUge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4O1xcbn1cXG5cXG4ubGFiZWxUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGFiZWxUZXh0IHtcXG4gICAgZm9udC1zaXplOiAxMjtcXG59XFxuXFxuLm1hcmtWaWV3U3RhY2tMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBwYWRkaW5nOiAxNlxcbn1cXG5cXG4uZGVsZXRlVmlld1N0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBwYWRkaW5nOiAxNjtcXG59XFxuXFxuLmdyaWRMYXlvdXRMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1hcmtWaWV3U3RhY2tMYXlvdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG59XFxuXFxuLnN3aXBlVGVtcGxhdGVMYWJlbCB7XFxuICAgIHNpemU6IDIwO1xcbn1cXG5cXG4uZGVsZXRlVmlld1N0YWNrTGF5b3V0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNTtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHJvd3M9XFxcImF1dG8sICpcXFwiIHRrRXhhbXBsZVRpdGxlIHRrVG9nZ2xlTmF2QnV0dG9uPlxcbiAgICA8QnV0dG9uIFt0ZXh0XT1cXFwiY3VycmVudFN0YXR1c1xcXCIgKHRhcCk9XFxcIm9uRGlzYWJsZUVuYWJsZVRhcCgpXFxcIj48L0J1dHRvbj5cXG4gICAgPFJhZExpc3RWaWV3ICNteUxpc3RWaWV3IFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgcm93PVxcXCIxXFxcIiBzZWxlY3Rpb25CZWhhdmlvcj1cXFwiTm9uZVxcXCIgKGl0ZW1Td2lwaW5nKT1cXFwib25JdGVtU3dpcGluZygkZXZlbnQpXFxcIiAoaXRlbVN3aXBlUHJvZ3Jlc3NFbmRlZCk9XFxcIm9uU3dpcGVDZWxsRmluaXNoZWQoJGV2ZW50KVxcXCJcXG4gICAgICAgIChpdGVtU3dpcGVQcm9ncmVzc1N0YXJ0ZWQpPVxcXCJvblN3aXBlQ2VsbFN0YXJ0ZWQoJGV2ZW50KVxcXCIgKGl0ZW1Td2lwZVByb2dyZXNzQ2hhbmdlZCk9XFxcIm9uQ2VsbFN3aXBpbmcoJGV2ZW50KVxcXCIgc3dpcGVBY3Rpb25zPVxcXCJ0cnVlXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibGlzdEl0ZW1TdGFja0xheW91dFxcXCIgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbE5hbWVcXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImxhYmVsVGl0bGVcXFwiIFt0ZXh0XT1cXFwiaXRlbS50aXRsZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJsYWJlbFRleHRcXFwiIFt0ZXh0XT1cXFwiaXRlbS50ZXh0XFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgKnRrTGlzdEl0ZW1Td2lwZVRlbXBsYXRlIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJncmlkTGF5b3V0TGF5b3V0XFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcIm1hcmstdmlld1xcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwibWFya1ZpZXdTdGFja0xheW91dFxcXCIgKHRhcCk9XFxcIm9uTGVmdFN3aXBlQ2xpY2soJGV2ZW50KVxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJtYXJrXFxcIiBjbGFzcz1cXFwic3dpcGVUZW1wbGF0ZUxhYmVsXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcImRlbGV0ZS12aWV3XFxcIiBjb2w9XFxcIjJcXFwiIGNsYXNzPVxcXCJkZWxldGVWaWV3U3RhY2tMYXlvdXRcXFwiICh0YXApPVxcXCJvblJpZ2h0U3dpcGVDbGljaygkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcImRlbGV0ZVxcXCIgY2xhc3M9XFxcInN3aXBlVGVtcGxhdGVMYWJlbFxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IERhdGFJdGVtIH0gZnJvbSBcIi4uL2RhdGFJdGVtXCI7XG5pbXBvcnQgeyBEYXRhSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YUl0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEsIFN3aXBlQWN0aW9uc0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1saXN0dmlldy1zd2lwZS1kaXNhYmxlXCIsXG4gICAgcHJvdmlkZXJzOiBbRGF0YUl0ZW1TZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy1zd2lwZS1kaXNhYmxlLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy1zd2lwZS1kaXNhYmxlLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTd2lwZURpc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2RhdGFJdGVtczogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9lbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9jdXJyZW50U3RhdHVzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhSXRlbVNlcnZpY2U6IERhdGFJdGVtU2VydmljZSkge1xuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbmFibGVkO1xuICAgIH1cblxuICAgIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNUZXh0KCk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRTdGF0dXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0dXM7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRTdGF0dXModmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9jdXJyZW50U3RhdHVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChcIm15TGlzdFZpZXdcIiwgeyByZWFkOiBSYWRMaXN0Vmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KSBteUxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFJdGVtU2VydmljZS5nZXRQb3N0RGF0YUl0ZW1zKCkpO1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNlbGxTd2lwaW5nKGFyZ3M6IFN3aXBlQWN0aW9uc0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgICAgY29uc3QgY3VycmVudEl0ZW1WaWV3ID0gYXJncy5zd2lwZVZpZXc7XG5cbiAgICAgICAgaWYgKGFyZ3MuZGF0YS54ID4gMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdGlmeSBwZXJmb3JtIGxlZnQgYWN0aW9uXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuZGF0YS54IDwgLTIwMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb3RpZnkgcGVyZm9ybSByaWdodCBhY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25Td2lwZUNlbGxTdGFydGVkKGFyZ3M6IFN3aXBlQWN0aW9uc0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICAgICAgY29uc3Qgc3dpcGVWaWV3ID0gYXJncy5zd2lwZVZpZXc7XG4gICAgICAgIGNvbnN0IGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdtYXJrLXZpZXcnKTtcbiAgICAgICAgY29uc3QgcmlnaHRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdkZWxldGUtdmlldycpO1xuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3dpcGVDZWxsRmluaXNoZWQoYXJnczogU3dpcGVBY3Rpb25zRXZlbnREYXRhKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMZWZ0IHN3aXBlIGNsaWNrXCIpO1xuICAgICAgICB0aGlzLm15TGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcubm90aWZ5U3dpcGVUb0V4ZWN1dGVGaW5pc2hlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJpZ2h0U3dpcGVDbGljayhhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmlnaHQgc3dpcGUgY2xpY2tcIik7XG4gICAgICAgIHRoaXMuZGF0YUl0ZW1zLnNwbGljZSh0aGlzLmRhdGFJdGVtcy5pbmRleE9mKGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0KSwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGlzYWJsZUVuYWJsZVRhcCgpIHtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gIXRoaXMuZW5hYmxlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtU3dpcGluZyhhcmdzKSB7XG4gICAgICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0aGlzLmVuYWJsZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVTdGF0dXNUZXh0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0dXMgPSAhdGhpcy5lbmFibGVkID8gXCJFTkFCTEVcIiA6IFwiRElTQUJMRVwiO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiTGFiZWwge1xcbiAgICBtYXJnaW46IDE2O1xcbn1cXG5cXG4ubmFtZUxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbkxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxNDtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyBbaXRlbXNdPVxcXCJkYXRhSXRlbXNcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIHRrTGlzdEl0ZW1UZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwibmFtZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJkZXNjcmlwdGlvbkxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0uZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XFxuICAgIDwvUmFkTGlzdFZpZXc+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9kYXRhSXRlbVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWxpc3R2aWV3LXdpdGgtYmlnLWRhdGFcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJsaXN0dmlldy13aXRoLWJpZy1kYXRhLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsaXN0dmlldy13aXRoLWJpZy1kYXRhLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdXaXRoQmlnRGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8RGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFJdGVtcztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgbGV0IHRlbXBBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDAwOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKHtuYW1lOiBcIkl0ZW0gXCIgKyBpLCBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBmb3IgaXRlbSBcIiArIGkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRlbXBBcnJheSk7XG4gICAgfVxufSIsImltcG9ydCB7IEZyYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBPcHRpb25zRXhhbXBsZUJhc2UgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcm90ZWN0ZWQgbmF2aWdhdGlvblBhcmFtZXRlcnM7XG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk9wdGlvbnNUYXBwZWQoYXJnczogYW55KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL29wdGlvbnMnXSwgeyBxdWVyeVBhcmFtczogeyBzZWxlY3RlZEluZGV4OiB0aGlzLm5hdmlnYXRpb25QYXJhbWV0ZXJzLnNlbGVjdGVkSW5kZXgsIHBhcmFtTmFtZTogdGhpcy5uYXZpZ2F0aW9uUGFyYW1ldGVycy5wYXJhbU5hbWUsIGl0ZW1zOiB0aGlzLm5hdmlnYXRpb25QYXJhbWV0ZXJzLml0ZW1zIH0gfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpIHtcbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9