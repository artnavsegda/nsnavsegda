require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"~/app/examples/listview-examples.module": [
		"./app/examples/listview-examples.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-dev-webpack/css2json-loader.js?useForImports!../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":"\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n"},{"type":"import","import":"'~nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".nameLabel"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".descriptionLabel"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/navigation/examples-list/examples-list.component.ts");
/* harmony import */ var _navigation_options_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/navigation/options/options.component.ts");




var excludedComponents = [];
var APP_ROUTES = [
    { path: "", redirectTo: "examples-depth-1/root/root", pathMatch: 'full' },
    { path: "examples-depth-1/:parentTitle/:tappedTitle", component: _navigation_examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_2__["ExamplesListDepth1Component"] },
    { path: "examples-depth-2/:parentTitle/:tappedTitle", component: _navigation_examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_2__["ExamplesListDepth2Component"] },
    { path: "examples-depth-3/:parentTitle/:tappedTitle", component: _navigation_examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_2__["ExamplesListDepth3Component"] },
    { path: "options", component: _navigation_options_options_component__WEBPACK_IMPORTED_MODULE_3__["OptionsComponent"] },
    {
        path: "ListViewMultipleTemplatesComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple Item Templates"
        }
    },
    {
        path: "ListViewGettingStartedComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewGettingStartedHorizontalComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started Horizontal"
        }
    },
    {
        path: "ListViewDataOperationsFilteringComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Filtering"
        }
    },
    {
        path: "ListViewDataOperationsSortingComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Sorting"
        }
    },
    {
        path: "ListViewDataOperationsGroupingComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping"
        }
    },
    {
        path: "ListViewDataOperationsGroupingHeaderFooterComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping with header/footer"
        }
    },
    {
        path: "ListViewDataOperationsGroupingTemplatesComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping with multiple templates"
        }
    },
    {
        path: "ListviewDataOperationsGroupingCollapsibleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Collapsible Grouping"
        }
    },
    {
        path: "ListViewDataOperationsGroupingScrollToComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grouping with Scroll to Index"
        }
    },
    {
        path: "ListViewDataOperationsMultipleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple operations"
        }
    },
    {
        path: "ListViewDataOperationsMultipleWithSwipeComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "With Swipe"
        }
    },
    {
        path: "ListViewHeaderFooterComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto height"
        }
    },
    {
        path: "ListViewBigFooterComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Big footer"
        }
    },
    {
        path: "ListViewBigHeaderComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Big header"
        }
    },
    {
        path: "ListviewChangeSizeAtRuntimeComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Change at runtime"
        }
    },
    {
        path: "ListViewItemReorderComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Reorder"
        }
    },
    {
        path: "ListViewItemSelectionComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Single Selection"
        }
    },
    {
        path: "ListViewSelectionStatesComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Selection States"
        }
    },
    {
        path: "StylingItemSelectionComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Styling Single Selection"
        }
    },
    {
        path: "StylingSelectionMultipleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Styling Multiple Selection"
        }
    },
    {
        path: "ListViewPullToRefreshComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Pull to Refresh"
        }
    },
    {
        path: "ListViewPullToRefreshCustomizeComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Customize"
        }
    },
    {
        path: "ListViewItemLayoutsGridComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grid with item height"
        }
    },
    {
        path: "ListViewItemLayoutsGridNoHeightComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Grid without item height"
        }
    },
    {
        path: "ListViewItemLayoutsLinearComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Linear"
        }
    },
    {
        path: "ListViewItemLoadingComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Loading"
        }
    },
    {
        path: "ListViewItemLayoutsStaggeredComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Staggered"
        }
    },
    {
        path: "ListViewItemLayoutsRuntimeComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Change at runtime"
        }
    },
    {
        path: "ListViewItemReorderHandleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Reorder with handle"
        }
    },
    {
        path: "ListViewItemSelectionMultipleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple Selection"
        }
    },
    {
        path: "ListViewItemSelectionProgrammaticComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Programmatic Selection"
        }
    },
    {
        path: "ListViewItemSeparatorComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item separators"
        }
    },
    {
        path: "ListViewDynamicSizeAutoComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto with Variable Item Size"
        }
    },
    {
        path: "ListViewDynamicSizeManualComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Manual with Variable Item Size"
        }
    },
    {
        path: "ListViewFixedSizeAutoComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Auto with Fixed Item Size"
        }
    },
    {
        path: "ListViewFixedSizeAutoWithSmallSourceComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "With small source and pull to refresh"
        }
    },
    {
        path: "ListViewFixedSizeManualComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Manual with Fixed Item Size"
        }
    },
    {
        path: "ListViewScrollToIndexVerticalComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "In vertical direction"
        }
    },
    {
        path: "ListViewScrollToIndexHorizontalComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "In horizontal direction"
        }
    },
    {
        path: "ListViewScrollToIndexInitialComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Initially scrolled"
        }
    },
    {
        path: "ListViewScrollEventsComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Scroll Events"
        }
    },
    {
        path: "ListViewObservableArrayComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Observable Array"
        }
    },
    {
        path: "ListViewItemAnimationsComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Item Animations"
        }
    },
    {
        path: "ListViewSwipeActionsComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Getting Started"
        }
    },
    {
        path: "ListViewSwipeActionsMultipleComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Multiple actions"
        }
    },
    {
        path: "ListViewSwipeActionsThresholdsComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Animated thresholds"
        }
    },
    {
        path: "ListViewSwipeDisableComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Disable\\Enable"
        }
    },
    {
        path: "ListViewWithBigDataComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Initially load  10 000 items"
        }
    },
    {
        path: "ListviewHorizontalWithVariableItemWidthComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Horizontal with Variable item's width"
        }
    },
    {
        path: "ListViewGroupSwipeLoadPullComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Group, Swipe, Load and Pull"
        }
    },
    {
        path: "ListViewFirstVisibleIndexComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Get first visible index"
        }
    },
    {
        path: "ListviewCompTemplateComponent",
        loadChildren: '~/app/examples/listview-examples.module#ListViewExamplesModule',
        data: {
            "title": "Custom Angular comp in template"
        }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(APP_ROUTES)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/angular/forms/index.js");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/navigation/options/options.service.ts");
/* harmony import */ var _navigation_exampleItemService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/navigation/exampleItemService.service.ts");
/* harmony import */ var _navigation_examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/navigation/examples-list/examples-list.component.ts");
/* harmony import */ var _navigation_options_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/navigation/options/options.component.ts");
/* harmony import */ var _navigation_directives_common_directives_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/navigation/directives/common-directives.module.ts");
/* harmony import */ var nativescript_image_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/nativescript-image/angular/index.js");
/* harmony import */ var nativescript_image_angular__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nativescript_image_angular__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var nativescript_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../node_modules/nativescript-image/image.js");
/* harmony import */ var nativescript_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(nativescript_image__WEBPACK_IMPORTED_MODULE_14__);













// >> (hide)


if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_13__["android"]) {
    tns_core_modules_application__WEBPACK_IMPORTED_MODULE_13__["on"]("launch", function () {
        nativescript_image__WEBPACK_IMPORTED_MODULE_14__["initialize"]();
    });
}
// << (hide)
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navigation_examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_9__["ExamplesListDepthComponents"],
                _navigation_options_options_component__WEBPACK_IMPORTED_MODULE_10__["OptionsComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _navigation_directives_common_directives_module__WEBPACK_IMPORTED_MODULE_11__["CommonDirectivesModule"],
                nativescript_image_angular__WEBPACK_IMPORTED_MODULE_12__["TNSImageModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NativeScriptFormsModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIListViewModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["NativeScriptRouterModule"],
            ],
            exports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["NativeScriptRouterModule"]
            ],
            providers: [
                _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_7__["OptionsService"],
                _navigation_exampleItemService_service__WEBPACK_IMPORTED_MODULE_8__["ExampleItemService"],
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/navigation/directives/common-directives.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDirectivesModule", function() { return CommonDirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _example_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/navigation/directives/example.directive.ts");
/* harmony import */ var _toggle_nav_button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/navigation/directives/toggle-nav-button.directive.ts");
/* harmony import */ var _platform_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/navigation/directives/platform.directives.ts");




var CommonDirectivesModule = /** @class */ (function () {
    function CommonDirectivesModule() {
    }
    CommonDirectivesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _example_directive__WEBPACK_IMPORTED_MODULE_1__["TKExampleTitleDirective"],
                _toggle_nav_button_directive__WEBPACK_IMPORTED_MODULE_2__["TKToggleNavButtonDirective"],
                _platform_directives__WEBPACK_IMPORTED_MODULE_3__["TKIfAndroidDirective"],
                _platform_directives__WEBPACK_IMPORTED_MODULE_3__["TKIfIOSDirective"]
            ],
            exports: [
                _example_directive__WEBPACK_IMPORTED_MODULE_1__["TKExampleTitleDirective"],
                _toggle_nav_button_directive__WEBPACK_IMPORTED_MODULE_2__["TKToggleNavButtonDirective"],
                _platform_directives__WEBPACK_IMPORTED_MODULE_3__["TKIfAndroidDirective"],
                _platform_directives__WEBPACK_IMPORTED_MODULE_3__["TKIfIOSDirective"]
            ]
        })
    ], CommonDirectivesModule);
    return CommonDirectivesModule;
}());



/***/ }),

/***/ "./app/navigation/directives/example.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TKExampleTitleDirective", function() { return TKExampleTitleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);



var TKExampleTitleDirective = /** @class */ (function () {
    function TKExampleTitleDirective(route, page) {
        page.actionBar.title = route.snapshot.data["title"];
    }
    TKExampleTitleDirective.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"] }
    ]; };
    TKExampleTitleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[tkExampleTitle]"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"]])
    ], TKExampleTitleDirective);
    return TKExampleTitleDirective;
}());



/***/ }),

/***/ "./app/navigation/directives/platform.directives.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TKIfAndroidDirective", function() { return TKIfAndroidDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TKIfIOSDirective", function() { return TKIfIOSDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/platform-providers.js");
/* harmony import */ var nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_2__);



var TKIfAndroidDirective = /** @class */ (function () {
    function TKIfAndroidDirective(device, container, templateRef) {
        if (device.os === tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["platformNames"].android) {
            container.createEmbeddedView(templateRef);
        }
    }
    TKIfAndroidDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_2__["DEVICE"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    TKIfAndroidDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: "[tkIfAndroid]" }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_2__["DEVICE"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], TKIfAndroidDirective);
    return TKIfAndroidDirective;
}());

var TKIfIOSDirective = /** @class */ (function () {
    function TKIfIOSDirective(device, container, templateRef) {
        if (device.os === tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_1__["platformNames"].ios) {
            container.createEmbeddedView(templateRef);
        }
    }
    TKIfIOSDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_2__["DEVICE"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    TKIfIOSDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: "[tkIfIOS]" }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(nativescript_angular_platform_providers__WEBPACK_IMPORTED_MODULE_2__["DEVICE"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], TKIfIOSDirective);
    return TKIfIOSDirective;
}());



/***/ }),

/***/ "./app/navigation/directives/toggle-nav-button.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TKToggleNavButtonDirective", function() { return TKToggleNavButtonDirective; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/action-bar/action-bar.js");
/* harmony import */ var tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__);







var TKToggleNavButtonDirective = /** @class */ (function () {
    function TKToggleNavButtonDirective(route, page, routerExtensions) {
        this.routerExtensions = routerExtensions;
        var navigationButton = this.createNavigationButton();
        page.actionBar.navigationButton = navigationButton;
    }
    TKToggleNavButtonDirective.prototype.createNavigationButton = function () {
        var _this = this;
        var navigationButton = new tns_core_modules_ui_action_bar__WEBPACK_IMPORTED_MODULE_3__["NavigationButton"]();
        navigationButton.visibility = "visible";
        if (tns_core_modules_application__WEBPACK_IMPORTED_MODULE_6__["android"]) {
            navigationButton.android.systemIcon = "ic_menu_back";
            navigationButton.on("tap", function (args) {
                tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_2__["ad"].dismissSoftInput();
                _this.routerExtensions.backToPreviousPage();
            });
        }
        else {
            navigationButton.text = "Back";
        }
        return navigationButton;
    };
    TKToggleNavButtonDirective.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterExtensions"] }
    ]; };
    TKToggleNavButtonDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[tkToggleNavButton]"
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"], nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterExtensions"]])
    ], TKToggleNavButtonDirective);
    return TKToggleNavButtonDirective;
}());



/***/ }),

/***/ "./app/navigation/exampleItemService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleItemService", function() { return ExampleItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_exampleItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/navigation/mock-exampleItems.ts");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__);



var ExampleItemService = /** @class */ (function () {
    function ExampleItemService() {
    }
    ExampleItemService.prototype.filterFunction = function (item) {
        var res = true;
        _mock_exampleItems__WEBPACK_IMPORTED_MODULE_1__["EXCLUDED_EXAMPLEITEMS"].forEach(function (excludedItem) {
            var exclude = tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__["isIOS"] && excludedItem.platform === "ios" || !tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_2__["isIOS"] && excludedItem.platform === "android";
            if (!item || (item.title === excludedItem.title && exclude)) {
                res = false;
            }
        });
        return res;
    };
    ExampleItemService.prototype.getAllExampleItems = function () {
        return _mock_exampleItems__WEBPACK_IMPORTED_MODULE_1__["EXAMPLEITEMS"];
    };
    ExampleItemService.prototype.getParentExampleItem = function (index) {
        var _this = this;
        var item = _mock_exampleItems__WEBPACK_IMPORTED_MODULE_1__["EXAMPLEITEMS"][index];
        item.subItems = item.subItems.filter(function (item) { return _this.filterFunction(item); });
        return item;
    };
    ExampleItemService.prototype.getChildExampleItem = function (parentTitle, subItemTitle, exampleItems) {
        var _this = this;
        if (exampleItems) {
            for (var index_1 = 0; index_1 < exampleItems.length; index_1++) {
                var element = exampleItems[index_1];
                if (element.title === parentTitle) {
                    var parentExampleItem = element;
                    if (parentExampleItem && parentExampleItem.subItems.length >= 0) {
                        var childItem = parentExampleItem.subItems.filter(function (item) { return item.title === subItemTitle; })[0];
                        childItem.subItems = childItem.subItems.filter(function (item) { return _this.filterFunction(item); });
                        return childItem;
                    }
                }
                else {
                    if (element.subItems.length >= 0) {
                        var result = this.getChildExampleItem(parentTitle, subItemTitle, element.subItems);
                        if (result) {
                            return result;
                        }
                    }
                }
            }
        }
    };
    ExampleItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ExampleItemService);
    return ExampleItemService;
}());



/***/ }),

/***/ "./app/navigation/examples-list/examples-list.component.css":
/***/ (function(module, exports) {

module.exports = ".titleLabel {\n    margin: 16;\n    vertical-align: center;\n}\n\n.itemStackLayout {\n    text-align: left;\n    vertical-align: center;\n    font-size: 16;\n}"

/***/ }),

/***/ "./app/navigation/examples-list/examples-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar [title]=\"currentExample.title\">\n    <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" (tap)=\"onNavigationButtonTap()\" [visibility]=\"hasBack ? 'visible' : 'collapsed'\"></NavigationButton>\n</ActionBar>\n<GridLayout>\n    <RadListView [items]=\"currentExample.subItems\" (itemTap)=\"onNavigationItemTap($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout class=\"itemStackLayout\">\n                <Label class=\"titleLabel\" [text]=\"item.title\" textWrap=\"true\" ></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/navigation/examples-list/examples-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesListDepth1Component", function() { return ExamplesListDepth1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesListDepth2Component", function() { return ExamplesListDepth2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesListDepth3Component", function() { return ExamplesListDepth3Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesListDepthComponents", function() { return ExamplesListDepthComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exampleItemService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/navigation/exampleItemService.service.ts");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");




var ExamplesListDepth1Component = /** @class */ (function () {
    function ExamplesListDepth1Component(_router, _route, _exampleItemsService) {
        this._router = _router;
        this._route = _route;
        this._exampleItemsService = _exampleItemsService;
    }
    ExamplesListDepth1Component.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.params.subscribe(function (params) {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            _this.hasBack = false;
            _this._currentExample = _this._exampleItemsService.getParentExampleItem(0);
        });
    };
    ExamplesListDepth1Component.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    Object.defineProperty(ExamplesListDepth1Component.prototype, "currentExample", {
        get: function () {
            return this._currentExample;
        },
        set: function (value) {
            this._currentExample = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExamplesListDepth1Component.prototype, "hasBack", {
        get: function () {
            return this._hasBack;
        },
        set: function (value) {
            this._hasBack = value;
        },
        enumerable: true,
        configurable: true
    });
    ExamplesListDepth1Component.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length === 0) {
            this._router.navigateByUrl(tappedItem.path);
        }
        else {
            this._router.navigate(['/examples-depth-2', this._currentExample.title, tappedItem.title]);
        }
    };
    ExamplesListDepth1Component.prototype.onNavigationButtonTap = function () {
        tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__["Frame"].topmost().goBack();
    };
    ExamplesListDepth1Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _exampleItemService_service__WEBPACK_IMPORTED_MODULE_1__["ExampleItemService"] }
    ]; };
    ExamplesListDepth1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-examples",
            template: __webpack_require__("./app/navigation/examples-list/examples-list.component.html"),
            styles: [__webpack_require__("./app/navigation/examples-list/examples-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _exampleItemService_service__WEBPACK_IMPORTED_MODULE_1__["ExampleItemService"]])
    ], ExamplesListDepth1Component);
    return ExamplesListDepth1Component;
}());

var ExamplesListDepth2Component = /** @class */ (function () {
    function ExamplesListDepth2Component(_router, _route, _exampleItemsService) {
        this._router = _router;
        this._route = _route;
        this._exampleItemsService = _exampleItemsService;
    }
    ExamplesListDepth2Component.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.params.subscribe(function (params) {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            _this.hasBack = true;
            _this._currentExample = _this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, _this._exampleItemsService.getAllExampleItems());
        });
    };
    ExamplesListDepth2Component.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    Object.defineProperty(ExamplesListDepth2Component.prototype, "currentExample", {
        get: function () {
            return this._currentExample;
        },
        set: function (value) {
            this._currentExample = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExamplesListDepth2Component.prototype, "hasBack", {
        get: function () {
            return this._hasBack;
        },
        set: function (value) {
            this._hasBack = value;
        },
        enumerable: true,
        configurable: true
    });
    ExamplesListDepth2Component.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        if (tappedItem.subItems.length === 0) {
            this._router.navigateByUrl(tappedItem.path);
        }
        else {
            this._router.navigate(['/examples-depth-3', this._currentExample.title, tappedItem.title]);
        }
    };
    ExamplesListDepth2Component.prototype.onNavigationButtonTap = function () {
        tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__["Frame"].topmost().goBack();
    };
    ExamplesListDepth2Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _exampleItemService_service__WEBPACK_IMPORTED_MODULE_1__["ExampleItemService"] }
    ]; };
    ExamplesListDepth2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-examples-depth-2",
            template: __webpack_require__("./app/navigation/examples-list/examples-list.component.html"),
            styles: [__webpack_require__("./app/navigation/examples-list/examples-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _exampleItemService_service__WEBPACK_IMPORTED_MODULE_1__["ExampleItemService"]])
    ], ExamplesListDepth2Component);
    return ExamplesListDepth2Component;
}());

var ExamplesListDepth3Component = /** @class */ (function () {
    function ExamplesListDepth3Component(_router, _route, _exampleItemsService) {
        this._router = _router;
        this._route = _route;
        this._exampleItemsService = _exampleItemsService;
    }
    ExamplesListDepth3Component.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.params.subscribe(function (params) {
            var parentTitle = params['parentTitle'];
            var tappedTitle = params['tappedTitle'];
            _this.hasBack = true;
            _this._currentExample = _this._exampleItemsService.getChildExampleItem(parentTitle, tappedTitle, _this._exampleItemsService.getAllExampleItems());
        });
    };
    ExamplesListDepth3Component.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    Object.defineProperty(ExamplesListDepth3Component.prototype, "currentExample", {
        get: function () {
            return this._currentExample;
        },
        set: function (value) {
            this._currentExample = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExamplesListDepth3Component.prototype, "hasBack", {
        get: function () {
            return this._hasBack;
        },
        set: function (value) {
            this._hasBack = value;
        },
        enumerable: true,
        configurable: true
    });
    ExamplesListDepth3Component.prototype.onNavigationItemTap = function (args) {
        var itemIndex = args.index;
        var tappedItem = this._currentExample.subItems[itemIndex];
        this._router.navigateByUrl(tappedItem.path);
    };
    ExamplesListDepth3Component.prototype.onNavigationButtonTap = function () {
        tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__["Frame"].topmost().goBack();
    };
    ExamplesListDepth3Component.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _exampleItemService_service__WEBPACK_IMPORTED_MODULE_1__["ExampleItemService"] }
    ]; };
    ExamplesListDepth3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-examples-depth-3",
            template: __webpack_require__("./app/navigation/examples-list/examples-list.component.html"),
            styles: [__webpack_require__("./app/navigation/examples-list/examples-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _exampleItemService_service__WEBPACK_IMPORTED_MODULE_1__["ExampleItemService"]])
    ], ExamplesListDepth3Component);
    return ExamplesListDepth3Component;
}());

var ExamplesListDepthComponents = [ExamplesListDepth1Component, ExamplesListDepth2Component, ExamplesListDepth3Component];


/***/ }),

/***/ "./app/navigation/mock-exampleItems.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXCLUDED_EXAMPLEITEMS", function() { return EXCLUDED_EXAMPLEITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXAMPLEITEMS", function() { return EXAMPLEITEMS; });
var EXCLUDED_EXAMPLEITEMS = [
    {
        "title": "Collapsible Grouping",
        "platform": "ios"
    }
];
var EXAMPLEITEMS = [
    {
        "title": "ListView Angular",
        "path": "",
        "subItems": [
            {
                "title": "Getting Started",
                "path": "ListViewGettingStartedComponent/ListViewGettingStartedComponent",
                "subItems": []
            },
            {
                "title": "Getting Started Horizontal",
                "path": "ListViewGettingStartedHorizontalComponent/ListViewGettingStartedHorizontalComponent",
                "subItems": []
            },
            {
                "title": "Initially load 10 000 items",
                "path": "ListViewWithBigDataComponent/ListViewWithBigDataComponent",
                "subItems": []
            },
            {
                "title": "Data Operations",
                "path": "",
                "subItems": [
                    {
                        "title": "Filtering",
                        "path": "ListViewDataOperationsFilteringComponent/ListViewDataOperationsFilteringComponent",
                        "subItems": []
                    },
                    {
                        "title": "Sorting",
                        "path": "ListViewDataOperationsSortingComponent/ListViewDataOperationsSortingComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grouping",
                        "path": "ListViewDataOperationsGroupingComponent/ListViewDataOperationsGroupingComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grouping with Scroll to Index",
                        "path": "ListViewDataOperationsGroupingScrollToComponent/ListViewDataOperationsGroupingScrollToComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grouping with header/footer",
                        "path": "ListViewDataOperationsGroupingHeaderFooterComponent/ListViewDataOperationsGroupingHeaderFooterComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grouping with multiple templates",
                        "path": "ListViewDataOperationsGroupingTemplatesComponent/ListViewDataOperationsGroupingTemplatesComponent",
                        "subItems": []
                    },
                    {
                        "title": "Collapsible Grouping",
                        "path": "ListviewDataOperationsGroupingCollapsibleComponent/ListviewDataOperationsGroupingCollapsibleComponent",
                        "subItems": []
                    },
                    {
                        "title": "Multiple operations",
                        "path": "ListViewDataOperationsMultipleComponent/ListViewDataOperationsMultipleComponent",
                        "subItems": []
                    },
                    {
                        "title": "With Swipe",
                        "path": "ListViewDataOperationsMultipleWithSwipeComponent/ListViewDataOperationsMultipleWithSwipeComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Multiple Item Templates",
                "path": "ListViewMultipleTemplatesComponent/ListViewMultipleTemplatesComponent",
                "subItems": []
            },
            {
                "title": "Item Loading",
                "path": "ListViewItemLoadingComponent/ListViewItemLoadingComponent",
                "subItems": []
            },
            {
                "title": "Item Animations",
                "path": "ListViewItemAnimationsComponent/ListViewItemAnimationsComponent",
                "subItems": []
            },
            {
                "title": "Item Layouts",
                "path": "",
                "subItems": [
                    {
                        "title": "Linear",
                        "path": "ListViewItemLayoutsLinearComponent/ListViewItemLayoutsLinearComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grid with item height",
                        "path": "ListViewItemLayoutsGridComponent/ListViewItemLayoutsGridComponent",
                        "subItems": []
                    },
                    {
                        "title": "Grid without item height",
                        "path": "ListViewItemLayoutsGridNoHeightComponent/ListViewItemLayoutsGridNoHeightComponent",
                        "subItems": []
                    },
                    {
                        "title": "Staggered",
                        "path": "ListViewItemLayoutsStaggeredComponent/ListViewItemLayoutsStaggeredComponent",
                        "subItems": []
                    },
                    {
                        "title": "Change at runtime",
                        "path": "ListViewItemLayoutsRuntimeComponent/ListViewItemLayoutsRuntimeComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Item Reorder",
                "path": "ListViewItemReorderComponent/ListViewItemReorderComponent",
                "subItems": []
            },
            {
                "title": "Item Reorder with handle",
                "path": "ListViewItemReorderHandleComponent/ListViewItemReorderHandleComponent",
                "subItems": []
            },
            {
                "title": "Selection",
                "path": "",
                "subItems": [
                    {
                        "title": "Single Selection",
                        "path": "ListViewItemSelectionComponent/ListViewItemSelectionComponent",
                        "subItems": []
                    },
                    {
                        "title": "Multiple Selection",
                        "path": "ListViewItemSelectionMultipleComponent/ListViewItemSelectionMultipleComponent",
                        "subItems": []
                    },
                    {
                        "title": "Programmatic Selection",
                        "path": "ListViewItemSelectionProgrammaticComponent/ListViewItemSelectionProgrammaticComponent",
                        "subItems": []
                    },
                    {
                        "title": "Styling Single Selection",
                        "path": "StylingItemSelectionComponent/StylingItemSelectionComponent",
                        "subItems": []
                    },
                    {
                        "title": "Styling Multiple Selection",
                        "path": "StylingSelectionMultipleComponent/StylingSelectionMultipleComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Selection States",
                "path": "ListViewSelectionStatesComponent/ListViewSelectionStatesComponent",
                "subItems": []
            },
            {
                "title": "Load on Demand",
                "path": "",
                "subItems": [
                    {
                        "title": "Manual with Fixed Item Size",
                        "path": "ListViewFixedSizeManualComponent/ListViewFixedSizeManualComponent",
                        "subItems": []
                    },
                    {
                        "title": "Auto with Fixed Item Size",
                        "path": "ListViewFixedSizeAutoComponent/ListViewFixedSizeAutoComponent",
                        "subItems": []
                    },
                    {
                        "title": "Manual with Variable Item Size",
                        "path": "ListViewDynamicSizeManualComponent/ListViewDynamicSizeManualComponent",
                        "subItems": []
                    },
                    {
                        "title": "Auto with Variable Item Size",
                        "path": "ListViewDynamicSizeAutoComponent/ListViewDynamicSizeAutoComponent",
                        "subItems": []
                    },
                    {
                        "title": "With small source and pull to refresh",
                        "path": "ListViewFixedSizeAutoWithSmallSourceComponent/ListViewFixedSizeAutoWithSmallSourceComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Observable Array",
                "path": "ListViewObservableArrayComponent/ListViewObservableArrayComponent",
                "subItems": []
            },
            {
                "title": "Pull to Refresh",
                "path": "ListViewPullToRefreshComponent/ListViewPullToRefreshComponent",
                "subItems": [
                    {
                        "title": "Getting Started",
                        "path": "ListViewPullToRefreshComponent/ListViewPullToRefreshComponent",
                        "subItems": []
                    },
                    {
                        "title": "Customize indicator/background",
                        "path": "ListViewPullToRefreshCustomizeComponent/ListViewPullToRefreshCustomizeComponent",
                        "subItems": []
                    },
                ]
            },
            {
                "title": "Swipe actions",
                "path": "",
                "subItems": [
                    {
                        "title": "Getting Started",
                        "path": "ListViewSwipeActionsComponent/ListViewSwipeActionsComponent",
                        "subItems": []
                    },
                    {
                        "title": "Animated thresholds",
                        "path": "ListViewSwipeActionsThresholdsComponent/ListViewSwipeActionsThresholdsComponent",
                        "subItems": []
                    },
                    {
                        "title": "Multiple actions",
                        "path": "ListViewSwipeActionsMultipleComponent/ListViewSwipeActionsMultipleComponent",
                        "subItems": []
                    },
                    {
                        "title": "Disable\\Enable",
                        "path": "ListViewSwipeDisableComponent/ListViewSwipeDisableComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Header and Footer",
                "path": "",
                "subItems": [
                    {
                        "title": "Auto height",
                        "path": "ListViewHeaderFooterComponent/ListViewHeaderFooterComponent",
                        "subItems": []
                    },
                    {
                        "title": "Big header",
                        "path": "ListViewBigHeaderComponent/ListViewBigHeaderComponent",
                        "subItems": []
                    },
                    {
                        "title": "Big footer",
                        "path": "ListViewBigFooterComponent/ListViewBigFooterComponent",
                        "subItems": []
                    },
                    {
                        "title": "Change at runtime",
                        "path": "ListviewChangeSizeAtRuntimeComponent/ListviewChangeSizeAtRuntimeComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Item separators",
                "path": "ListViewItemSeparatorComponent/ListViewItemSeparatorComponent",
                "subItems": []
            },
            {
                "title": "Scroll to index",
                "path": "",
                "subItems": [
                    {
                        "title": "In vertical direction",
                        "path": "ListViewScrollToIndexVerticalComponent/ListViewScrollToIndexVerticalComponent",
                        "subItems": []
                    },
                    {
                        "title": "In horizontal direction",
                        "path": "ListViewScrollToIndexHorizontalComponent/ListViewScrollToIndexHorizontalComponent",
                        "subItems": []
                    },
                    {
                        "title": "Initially scrolled",
                        "path": "ListViewScrollToIndexInitialComponent/ListViewScrollToIndexInitialComponent",
                        "subItems": []
                    }
                ]
            },
            {
                "title": "Scroll Events",
                "path": "ListViewScrollEventsComponent/ListViewScrollEventsComponent",
                "subItems": []
            },
            {
                "title": "Horizontal with Variable item's width",
                "path": "ListviewHorizontalWithVariableItemWidthComponent/ListviewHorizontalWithVariableItemWidthComponent",
                "subItems": []
            },
            {
                "title": "Group, Swipe, Load and Pull",
                "path": "ListViewGroupSwipeLoadPullComponent/ListViewGroupSwipeLoadPullComponent",
                "subItems": []
            },
            {
                "title": "Get first visible index",
                "path": "ListViewFirstVisibleIndexComponent/ListViewFirstVisibleIndexComponent",
                "subItems": []
            },
            {
                "title": "Custom Angular comp in template",
                "path": "ListviewCompTemplateComponent/ListviewCompTemplateComponent",
                "subItems": []
            }
        ]
    }
];


/***/ }),

/***/ "./app/navigation/options/options.component.css":
/***/ (function(module, exports) {

module.exports = ".titleLabel {\n    margin: 8;\n}"

/***/ }),

/***/ "./app/navigation/options/options.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout tkExampleTitle tkToggleNavButton>\n    <RadListView #optionsListView selectionBehavior=\"Press\" (loaded)=\"onLoaded()\" [items]=\"dataItems\" (itemTap)=\"onItemTap($event)\">\n        <ng-template tkListItemTemplate let-item=\"item\">\n            <StackLayout>\n                <Label class=\"titleLabel\" [text]=\"item\" textWrap=\"true\"></Label>\n            </StackLayout>\n        </ng-template>\n    </RadListView>\n</GridLayout>"

/***/ }),

/***/ "./app/navigation/options/options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/nativescript-ui-listview/angular/listview-directives.js");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/navigation/options/options.service.ts");







var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(_page, _route, _optionsService) {
        this._page = _page;
        this._route = _route;
        this._optionsService = _optionsService;
        this._selectedIndex = -1;
        this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]();
    }
    OptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sub = this._route.queryParams.subscribe(function (params) {
            var items = params['items'];
            _this._selectedIndex = +params['selectedIndex'];
            if (items) {
                var splitItems = items.toString().split(',');
                _this._dataItems = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"](splitItems);
                _this.tryUpdateListViewSelection();
            }
        });
    };
    OptionsComponent.prototype.ngOnDestroy = function () {
        this._sub.unsubscribe();
    };
    OptionsComponent.prototype.onLoaded = function () {
        this.tryUpdateListViewSelection();
    };
    OptionsComponent.prototype.tryUpdateListViewSelection = function () {
        if (this._selectedIndex >= 0 && this.optionsListView && this.optionsListView.nativeElement) {
            this.optionsListView.nativeElement.selectItemAt(this._selectedIndex);
        }
    };
    Object.defineProperty(OptionsComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    OptionsComponent.prototype.onItemTap = function (args) {
        var selectedItems = this.optionsListView.nativeElement.getSelectedItems();
        this._optionsService.paramValue = selectedItems[0];
        tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_3__["Frame"].topmost().goBack();
    };
    OptionsComponent.ctorParameters = function () { return [
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_6__["OptionsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("optionsListView", { read: nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__["RadListViewComponent"], static: false }),
        __metadata("design:type", nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_5__["RadListViewComponent"])
    ], OptionsComponent.prototype, "optionsListView", void 0);
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tk-options",
            template: __webpack_require__("./app/navigation/options/options.component.html"),
            styles: [__webpack_require__("./app/navigation/options/options.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_4__["Page"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _navigation_options_options_service__WEBPACK_IMPORTED_MODULE_6__["OptionsService"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./app/navigation/options/options.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var OptionsService = /** @class */ (function () {
    function OptionsService() {
    }
    Object.defineProperty(OptionsService.prototype, "paramName", {
        get: function () {
            return this._paramName;
        },
        set: function (value) {
            this._paramName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionsService.prototype, "paramValue", {
        get: function () {
            return this._paramValue;
        },
        set: function (value) {
            this._paramValue = value;
        },
        enumerable: true,
        configurable: true
    });
    OptionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], OptionsService);
    return OptionsService;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
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
        
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9kaXJlY3RpdmVzL2NvbW1vbi1kaXJlY3RpdmVzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9kaXJlY3RpdmVzL2V4YW1wbGUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2FwcC9uYXZpZ2F0aW9uL2RpcmVjdGl2ZXMvcGxhdGZvcm0uZGlyZWN0aXZlcy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9kaXJlY3RpdmVzL3RvZ2dsZS1uYXYtYnV0dG9uLmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9leGFtcGxlSXRlbVNlcnZpY2Uuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9leGFtcGxlcy1saXN0L2V4YW1wbGVzLWxpc3QuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9leGFtcGxlcy1saXN0L2V4YW1wbGVzLWxpc3QuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vZXhhbXBsZXMtbGlzdC9leGFtcGxlcy1saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9tb2NrLWV4YW1wbGVJdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL25hdmlnYXRpb24vb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7OztBQ3hCQSx5SEFBMkUsbUJBQU8sQ0FBQyxzSUFBb0c7QUFDdkwsMEVBQTBFLG1CQUFPLENBQUMsc0lBQW9HLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLGdmQUFnZixFQUFFLHlFQUF5RSxFQUFFLDBEQUEwRCx5REFBeUQsRUFBRSxFQUFFLGlFQUFpRSx5REFBeUQsRUFBRTtBQUN2aUMsUUFBUSxJQUFVO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0IsbUNBQW1DO0FBQ2xFLFNBQVM7QUFDVDs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBQzhCO0FBRW9GO0FBQ2pGO0FBRTFFLElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0FBRTVCLElBQUksVUFBVSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsNEJBQTRCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN6RSxFQUFFLElBQUksRUFBRSw0Q0FBNEMsRUFBRSxTQUFTLEVBQUUsNkdBQTJCLEVBQUU7SUFDOUYsRUFBRSxJQUFJLEVBQUUsNENBQTRDLEVBQUUsU0FBUyxFQUFFLDZHQUEyQixF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XHRcIn4vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUudHNcIixcblx0XHQwXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHR2YXIgaWRzID0gbWFwW3JlcV07XG5cdGlmKCFpZHMpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gaWRzWzBdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIiFuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svY3NzMmpzb24tbG9hZGVyP3VzZUZvckltcG9ydHMhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiIW5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9jc3MyanNvbi1sb2FkZXI/dXNlRm9ySW1wb3J0cyFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImNvbW1lbnRcIixcImNvbW1lbnRcIjpcIlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCInfm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzcydcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5hbWVMYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRlc2NyaXB0aW9uTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OztcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBFeGFtcGxlc0xpc3REZXB0aDFDb21wb25lbnQsIEV4YW1wbGVzTGlzdERlcHRoMkNvbXBvbmVudCwgRXhhbXBsZXNMaXN0RGVwdGgzQ29tcG9uZW50IH0gZnJvbSBcIi4vbmF2aWdhdGlvbi9leGFtcGxlcy1saXN0L2V4YW1wbGVzLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSBcIi4vbmF2aWdhdGlvbi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50XCI7XG5cbmxldCBleGNsdWRlZENvbXBvbmVudHMgPSBbXTtcblxubGV0IEFQUF9ST1VURVM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiZXhhbXBsZXMtZGVwdGgtMS9yb290L3Jvb3RcIiwgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICB7IHBhdGg6IFwiZXhhbXBsZXMtZGVwdGgtMS86cGFyZW50VGl0bGUvOnRhcHBlZFRpdGxlXCIsIGNvbXBvbmVudDogRXhhbXBsZXNMaXN0RGVwdGgxQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImV4YW1wbGVzLWRlcHRoLTIvOnBhcmVudFRpdGxlLzp0YXBwZWRUaXRsZVwiLCBjb21wb25lbnQ6IEV4YW1wbGVzTGlzdERlcHRoMkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJleGFtcGxlcy1kZXB0aC0zLzpwYXJlbnRUaXRsZS86dGFwcGVkVGl0bGVcIiwgY29tcG9uZW50OiBFeGFtcGxlc0xpc3REZXB0aDNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwib3B0aW9uc1wiLCBjb21wb25lbnQ6IE9wdGlvbnNDb21wb25lbnQgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdNdWx0aXBsZVRlbXBsYXRlc0NvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNdWx0aXBsZSBJdGVtIFRlbXBsYXRlc1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0dldHRpbmdTdGFydGVkQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdldHRpbmcgU3RhcnRlZFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0dldHRpbmdTdGFydGVkSG9yaXpvbnRhbENvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHZXR0aW5nIFN0YXJ0ZWQgSG9yaXpvbnRhbFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0RhdGFPcGVyYXRpb25zRmlsdGVyaW5nQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkZpbHRlcmluZ1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0RhdGFPcGVyYXRpb25zU29ydGluZ0NvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTb3J0aW5nXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ0NvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHcm91cGluZ1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdIZWFkZXJGb290ZXJDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiR3JvdXBpbmcgd2l0aCBoZWFkZXIvZm9vdGVyXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ1RlbXBsYXRlc0NvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHcm91cGluZyB3aXRoIG11bHRpcGxlIHRlbXBsYXRlc1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0dmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdDb2xsYXBzaWJsZUNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDb2xsYXBzaWJsZSBHcm91cGluZ1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdTY3JvbGxUb0NvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHcm91cGluZyB3aXRoIFNjcm9sbCB0byBJbmRleFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0RhdGFPcGVyYXRpb25zTXVsdGlwbGVDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTXVsdGlwbGUgb3BlcmF0aW9uc1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0RhdGFPcGVyYXRpb25zTXVsdGlwbGVXaXRoU3dpcGVDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiV2l0aCBTd2lwZVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0hlYWRlckZvb3RlckNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJBdXRvIGhlaWdodFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0JpZ0Zvb3RlckNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJCaWcgZm9vdGVyXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3QmlnSGVhZGVyQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJpZyBoZWFkZXJcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdHZpZXdDaGFuZ2VTaXplQXRSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNoYW5nZSBhdCBydW50aW1lXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbVJlb3JkZXJDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSXRlbSBSZW9yZGVyXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbVNlbGVjdGlvbkNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTaW5nbGUgU2VsZWN0aW9uXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3U2VsZWN0aW9uU3RhdGVzQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGVjdGlvbiBTdGF0ZXNcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiU3R5bGluZ0l0ZW1TZWxlY3Rpb25Db21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3R5bGluZyBTaW5nbGUgU2VsZWN0aW9uXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIlN0eWxpbmdTZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdHlsaW5nIE11bHRpcGxlIFNlbGVjdGlvblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld1B1bGxUb1JlZnJlc2hDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUHVsbCB0byBSZWZyZXNoXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3UHVsbFRvUmVmcmVzaEN1c3RvbWl6ZUNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDdXN0b21pemVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdJdGVtTGF5b3V0c0dyaWRDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiR3JpZCB3aXRoIGl0ZW0gaGVpZ2h0XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbUxheW91dHNHcmlkTm9IZWlnaHRDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiR3JpZCB3aXRob3V0IGl0ZW0gaGVpZ2h0XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbUxheW91dHNMaW5lYXJDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTGluZWFyXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbUxvYWRpbmdDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSXRlbSBMb2FkaW5nXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbUxheW91dHNTdGFnZ2VyZWRDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiU3RhZ2dlcmVkXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbUxheW91dHNSdW50aW1lQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNoYW5nZSBhdCBydW50aW1lXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbVJlb3JkZXJIYW5kbGVDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSXRlbSBSZW9yZGVyIHdpdGggaGFuZGxlXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3SXRlbVNlbGVjdGlvbk11bHRpcGxlQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk11bHRpcGxlIFNlbGVjdGlvblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0l0ZW1TZWxlY3Rpb25Qcm9ncmFtbWF0aWNDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiUHJvZ3JhbW1hdGljIFNlbGVjdGlvblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0l0ZW1TZXBhcmF0b3JDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSXRlbSBzZXBhcmF0b3JzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3RHluYW1pY1NpemVBdXRvQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkF1dG8gd2l0aCBWYXJpYWJsZSBJdGVtIFNpemVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdEeW5hbWljU2l6ZU1hbnVhbENvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNYW51YWwgd2l0aCBWYXJpYWJsZSBJdGVtIFNpemVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdGaXhlZFNpemVBdXRvQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkF1dG8gd2l0aCBGaXhlZCBJdGVtIFNpemVcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdGaXhlZFNpemVBdXRvV2l0aFNtYWxsU291cmNlQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIldpdGggc21hbGwgc291cmNlIGFuZCBwdWxsIHRvIHJlZnJlc2hcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdGaXhlZFNpemVNYW51YWxDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiTWFudWFsIHdpdGggRml4ZWQgSXRlbSBTaXplXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3U2Nyb2xsVG9JbmRleFZlcnRpY2FsQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkluIHZlcnRpY2FsIGRpcmVjdGlvblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld1Njcm9sbFRvSW5kZXhIb3Jpem9udGFsQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkluIGhvcml6b250YWwgZGlyZWN0aW9uXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3U2Nyb2xsVG9JbmRleEluaXRpYWxDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSW5pdGlhbGx5IHNjcm9sbGVkXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3U2Nyb2xsRXZlbnRzQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNjcm9sbCBFdmVudHNcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdPYnNlcnZhYmxlQXJyYXlDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiT2JzZXJ2YWJsZSBBcnJheVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0l0ZW1BbmltYXRpb25zQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkl0ZW0gQW5pbWF0aW9uc1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld1N3aXBlQWN0aW9uc0NvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHZXR0aW5nIFN0YXJ0ZWRcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdTd2lwZUFjdGlvbnNNdWx0aXBsZUNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJNdWx0aXBsZSBhY3Rpb25zXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3U3dpcGVBY3Rpb25zVGhyZXNob2xkc0NvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJBbmltYXRlZCB0aHJlc2hvbGRzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3U3dpcGVEaXNhYmxlQ29tcG9uZW50XCIsXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJ34vYXBwL2V4YW1wbGVzL2xpc3R2aWV3LWV4YW1wbGVzLm1vZHVsZSNMaXN0Vmlld0V4YW1wbGVzTW9kdWxlJyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRpc2FibGVcXFxcRW5hYmxlXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiBcIkxpc3RWaWV3V2l0aEJpZ0RhdGFDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSW5pdGlhbGx5IGxvYWQgIDEwIDAwMCBpdGVtc1wiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0dmlld0hvcml6b250YWxXaXRoVmFyaWFibGVJdGVtV2lkdGhDb21wb25lbnRcIixcbiAgICAgICAgbG9hZENoaWxkcmVuOiAnfi9hcHAvZXhhbXBsZXMvbGlzdHZpZXctZXhhbXBsZXMubW9kdWxlI0xpc3RWaWV3RXhhbXBsZXNNb2R1bGUnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiSG9yaXpvbnRhbCB3aXRoIFZhcmlhYmxlIGl0ZW0ncyB3aWR0aFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0Vmlld0dyb3VwU3dpcGVMb2FkUHVsbENvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHcm91cCwgU3dpcGUsIExvYWQgYW5kIFB1bGxcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiTGlzdFZpZXdGaXJzdFZpc2libGVJbmRleENvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJHZXQgZmlyc3QgdmlzaWJsZSBpbmRleFwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogXCJMaXN0dmlld0NvbXBUZW1wbGF0ZUNvbXBvbmVudFwiLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICd+L2FwcC9leGFtcGxlcy9saXN0dmlldy1leGFtcGxlcy5tb2R1bGUjTGlzdFZpZXdFeGFtcGxlc01vZHVsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJDdXN0b20gQW5ndWxhciBjb21wIGluIHRlbXBsYXRlXCJcbiAgICAgICAgfVxuICAgIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KEFQUF9ST1VURVMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSIsIm1vZHVsZS5leHBvcnRzID0gXCI8IS0tIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYWdlLXJvdXRlci1vdXRsZXQgLS0+XFxuPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cXG5cIiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgT3B0aW9uc1NlcnZpY2UgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uL29wdGlvbnMvb3B0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFeGFtcGxlSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uL2V4YW1wbGVJdGVtU2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBFeGFtcGxlc0xpc3REZXB0aENvbXBvbmVudHMgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uL2V4YW1wbGVzLWxpc3QvZXhhbXBsZXMtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9wdGlvbnNDb21wb25lbnQgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbW1vbkRpcmVjdGl2ZXNNb2R1bGUgfSBmcm9tICcuL25hdmlnYXRpb24vZGlyZWN0aXZlcy9jb21tb24tZGlyZWN0aXZlcy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUTlNJbWFnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2UvYW5ndWxhclwiO1xuXG4vLyA+PiAoaGlkZSlcbmltcG9ydCAqIGFzIGFwcGxpY2F0aW9uTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBpbWFnZU1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWltYWdlXCI7XG5cbmlmIChhcHBsaWNhdGlvbk1vZHVsZS5hbmRyb2lkKSB7XG4gICAgYXBwbGljYXRpb25Nb2R1bGUub24oXCJsYXVuY2hcIiwgKCkgPT4ge1xuICAgICAgICBpbWFnZU1vZHVsZS5pbml0aWFsaXplKCk7XG4gICAgfSk7XG59XG4vLyA8PCAoaGlkZSlcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBFeGFtcGxlc0xpc3REZXB0aENvbXBvbmVudHMsXG4gICAgICAgIE9wdGlvbnNDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBDb21tb25EaXJlY3RpdmVzTW9kdWxlLFxuICAgICAgICBUTlNJbWFnZU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBPcHRpb25zU2VydmljZSxcbiAgICAgICAgRXhhbXBsZUl0ZW1TZXJ2aWNlLFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFRLRXhhbXBsZVRpdGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9leGFtcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUS1RvZ2dsZU5hdkJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vdG9nZ2xlLW5hdi1idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IFRLSWZBbmRyb2lkRGlyZWN0aXZlLCBUS0lmSU9TRGlyZWN0aXZlIH0gZnJvbSAnLi9wbGF0Zm9ybS5kaXJlY3RpdmVzJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVEtFeGFtcGxlVGl0bGVEaXJlY3RpdmUsXG4gICAgICAgIFRLVG9nZ2xlTmF2QnV0dG9uRGlyZWN0aXZlLFxuICAgICAgICBUS0lmQW5kcm9pZERpcmVjdGl2ZSxcbiAgICAgICAgVEtJZklPU0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUS0V4YW1wbGVUaXRsZURpcmVjdGl2ZSxcbiAgICAgICAgVEtUb2dnbGVOYXZCdXR0b25EaXJlY3RpdmUsXG4gICAgICAgIFRLSWZBbmRyb2lkRGlyZWN0aXZlLFxuICAgICAgICBUS0lmSU9TRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25EaXJlY3RpdmVzTW9kdWxlIHsgfSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIlt0a0V4YW1wbGVUaXRsZV1cIlxufSlcblxuZXhwb3J0IGNsYXNzIFRLRXhhbXBsZVRpdGxlRGlyZWN0aXZlIHtcbiAgICAgY29uc3RydWN0b3Iocm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gcm91dGUuc25hcHNob3QuZGF0YVtcInRpdGxlXCJdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIFRlbXBsYXRlUmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERldmljZSwgcGxhdGZvcm1OYW1lcyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBERVZJQ0UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0tcHJvdmlkZXJzXCI7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogXCJbdGtJZkFuZHJvaWRdXCIgfSlcbmV4cG9ydCBjbGFzcyBUS0lmQW5kcm9pZERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoIEBJbmplY3QoREVWSUNFKSBkZXZpY2U6IERldmljZSwgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pikge1xuICAgICAgICBpZiAoZGV2aWNlLm9zID09PSBwbGF0Zm9ybU5hbWVzLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6IFwiW3RrSWZJT1NdXCIgfSlcbmV4cG9ydCBjbGFzcyBUS0lmSU9TRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvciggQEluamVjdChERVZJQ0UpIGRldmljZTogRGV2aWNlLCBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxPYmplY3Q+KSB7XG4gICAgICAgIGlmIChkZXZpY2Uub3MgPT09IHBsYXRmb3JtTmFtZXMuaW9zKSB7XG4gICAgICAgICAgICBjb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRlbXBsYXRlUmVmKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IGFkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25CdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBhbmRyb2lkIGFzIGFuZHJvaWRBcHBsaWNhdGlvbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6IFwiW3RrVG9nZ2xlTmF2QnV0dG9uXVwiXG59KVxuXG5leHBvcnQgY2xhc3MgVEtUb2dnbGVOYXZCdXR0b25EaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uQnV0dG9uID0gdGhpcy5jcmVhdGVOYXZpZ2F0aW9uQnV0dG9uKCk7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSBuYXZpZ2F0aW9uQnV0dG9uO1xuICAgIH1cblxuICAgIGNyZWF0ZU5hdmlnYXRpb25CdXR0b24oKTogTmF2aWdhdGlvbkJ1dHRvbiB7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uQnV0dG9uID0gbmV3IE5hdmlnYXRpb25CdXR0b24oKTtcbiAgICAgICAgbmF2aWdhdGlvbkJ1dHRvbi52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICAgICAgaWYgKGFuZHJvaWRBcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvbi5hbmRyb2lkLnN5c3RlbUljb24gPSBcImljX21lbnVfYmFja1wiO1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvbi5vbihcInRhcFwiLCAoYXJnczogRXZlbnREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgYWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJ1dHRvbi50ZXh0ID0gXCJCYWNrXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmF2aWdhdGlvbkJ1dHRvbjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFWEFNUExFSVRFTVMsIEVYQ0xVREVEX0VYQU1QTEVJVEVNUyB9IGZyb20gXCIuL21vY2stZXhhbXBsZUl0ZW1zXCI7XG5pbXBvcnQgeyBFeGFtcGxlSXRlbSB9IGZyb20gXCIuL2V4YW1wbGVJdGVtXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeGFtcGxlSXRlbVNlcnZpY2Uge1xuICAgIHByaXZhdGUgZmlsdGVyRnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBsZXQgcmVzID0gdHJ1ZTtcbiAgICAgICAgRVhDTFVERURfRVhBTVBMRUlURU1TLmZvckVhY2goZXhjbHVkZWRJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4Y2x1ZGUgPSBpc0lPUyAmJiBleGNsdWRlZEl0ZW0ucGxhdGZvcm0gPT09IFwiaW9zXCIgfHwgIWlzSU9TICYmIGV4Y2x1ZGVkSXRlbS5wbGF0Zm9ybSA9PT0gXCJhbmRyb2lkXCI7XG4gICAgICAgICAgICBpZiAoIWl0ZW0gfHwgKGl0ZW0udGl0bGUgPT09IGV4Y2x1ZGVkSXRlbS50aXRsZSAmJiBleGNsdWRlKSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGdldEFsbEV4YW1wbGVJdGVtcygpOiBFeGFtcGxlSXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIEVYQU1QTEVJVEVNUztcbiAgICB9XG5cbiAgICBnZXRQYXJlbnRFeGFtcGxlSXRlbShpbmRleDogbnVtYmVyKTogRXhhbXBsZUl0ZW0ge1xuICAgICAgICBjb25zdCBpdGVtID0gRVhBTVBMRUlURU1TW2luZGV4XTtcbiAgICAgICAgaXRlbS5zdWJJdGVtcyA9IGl0ZW0uc3ViSXRlbXMuZmlsdGVyKGl0ZW0gPT4gdGhpcy5maWx0ZXJGdW5jdGlvbihpdGVtKSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgZ2V0Q2hpbGRFeGFtcGxlSXRlbShwYXJlbnRUaXRsZTogc3RyaW5nLCBzdWJJdGVtVGl0bGU6IHN0cmluZywgZXhhbXBsZUl0ZW1zKTogRXhhbXBsZUl0ZW0ge1xuICAgICAgICBpZiAoZXhhbXBsZUl0ZW1zKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXhhbXBsZUl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBleGFtcGxlSXRlbXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnRpdGxlID09PSBwYXJlbnRUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRFeGFtcGxlSXRlbSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRFeGFtcGxlSXRlbSAmJiBwYXJlbnRFeGFtcGxlSXRlbS5zdWJJdGVtcy5sZW5ndGggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRJdGVtID0gcGFyZW50RXhhbXBsZUl0ZW0uc3ViSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gc3ViSXRlbVRpdGxlKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkSXRlbS5zdWJJdGVtcyA9IGNoaWxkSXRlbS5zdWJJdGVtcy5maWx0ZXIoaXRlbSA9PiB0aGlzLmZpbHRlckZ1bmN0aW9uKGl0ZW0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3ViSXRlbXMubGVuZ3RoID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0Q2hpbGRFeGFtcGxlSXRlbShwYXJlbnRUaXRsZSwgc3ViSXRlbVRpdGxlLCBlbGVtZW50LnN1Ykl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi50aXRsZUxhYmVsIHtcXG4gICAgbWFyZ2luOiAxNjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLml0ZW1TdGFja0xheW91dCB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgW3RpdGxlXT1cXFwiY3VycmVudEV4YW1wbGUudGl0bGVcXFwiPlxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgKHRhcCk9XFxcIm9uTmF2aWdhdGlvbkJ1dHRvblRhcCgpXFxcIiBbdmlzaWJpbGl0eV09XFxcImhhc0JhY2sgPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJ1xcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0PlxcbiAgICA8UmFkTGlzdFZpZXcgW2l0ZW1zXT1cXFwiY3VycmVudEV4YW1wbGUuc3ViSXRlbXNcXFwiIChpdGVtVGFwKT1cXFwib25OYXZpZ2F0aW9uSXRlbVRhcCgkZXZlbnQpXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSB0a0xpc3RJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XFxcIml0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaXRlbVN0YWNrTGF5b3V0XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ0aXRsZUxhYmVsXFxcIiBbdGV4dF09XFxcIml0ZW0udGl0bGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiA+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV4YW1wbGVJdGVtIH0gZnJvbSBcIi4uL2V4YW1wbGVJdGVtXCI7XG5pbXBvcnQgeyBFeGFtcGxlSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vZXhhbXBsZUl0ZW1TZXJ2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWV4YW1wbGVzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiZXhhbXBsZXMtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiZXhhbXBsZXMtbGlzdC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEV4YW1wbGVzTGlzdERlcHRoMUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIF9jdXJyZW50RXhhbXBsZTogRXhhbXBsZUl0ZW07XG4gICAgcHJpdmF0ZSBfaGFzQmFjazogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9zdWI6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2V4YW1wbGVJdGVtc1NlcnZpY2U6IEV4YW1wbGVJdGVtU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3N1YiA9IHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJlbnRUaXRsZSA9IHBhcmFtc1sncGFyZW50VGl0bGUnXTtcbiAgICAgICAgICAgIGxldCB0YXBwZWRUaXRsZSA9IHBhcmFtc1sndGFwcGVkVGl0bGUnXTtcbiAgICAgICAgICAgIHRoaXMuaGFzQmFjayA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEV4YW1wbGUgPSB0aGlzLl9leGFtcGxlSXRlbXNTZXJ2aWNlLmdldFBhcmVudEV4YW1wbGVJdGVtKDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjdXJyZW50RXhhbXBsZSgpOiBFeGFtcGxlSXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50RXhhbXBsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRFeGFtcGxlKHZhbHVlOiBFeGFtcGxlSXRlbSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50RXhhbXBsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzQmFjaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc0JhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNCYWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0JhY2sgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBsZXQgaXRlbUluZGV4ID0gYXJncy5pbmRleDtcbiAgICAgICAgbGV0IHRhcHBlZEl0ZW0gPSB0aGlzLl9jdXJyZW50RXhhbXBsZS5zdWJJdGVtc1tpdGVtSW5kZXhdO1xuICAgICAgICBpZiAodGFwcGVkSXRlbS5zdWJJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRhcHBlZEl0ZW0ucGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXhhbXBsZXMtZGVwdGgtMicsIHRoaXMuX2N1cnJlbnRFeGFtcGxlLnRpdGxlLCB0YXBwZWRJdGVtLnRpdGxlXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKCkge1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwidGstZXhhbXBsZXMtZGVwdGgtMlwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImV4YW1wbGVzLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImV4YW1wbGVzLWxpc3QuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBFeGFtcGxlc0xpc3REZXB0aDJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfY3VycmVudEV4YW1wbGU6IEV4YW1wbGVJdGVtO1xuICAgIHByaXZhdGUgX2hhc0JhY2s6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfc3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9leGFtcGxlSXRlbXNTZXJ2aWNlOiBFeGFtcGxlSXRlbVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9zdWIgPSB0aGlzLl9yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBsZXQgcGFyZW50VGl0bGUgPSBwYXJhbXNbJ3BhcmVudFRpdGxlJ107XG4gICAgICAgICAgICBsZXQgdGFwcGVkVGl0bGUgPSBwYXJhbXNbJ3RhcHBlZFRpdGxlJ107XG4gICAgICAgICAgICB0aGlzLmhhc0JhY2sgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEV4YW1wbGUgPSB0aGlzLl9leGFtcGxlSXRlbXNTZXJ2aWNlLmdldENoaWxkRXhhbXBsZUl0ZW0ocGFyZW50VGl0bGUsIHRhcHBlZFRpdGxlLCB0aGlzLl9leGFtcGxlSXRlbXNTZXJ2aWNlLmdldEFsbEV4YW1wbGVJdGVtcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjdXJyZW50RXhhbXBsZSgpOiBFeGFtcGxlSXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50RXhhbXBsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGN1cnJlbnRFeGFtcGxlKHZhbHVlOiBFeGFtcGxlSXRlbSkge1xuICAgICAgICB0aGlzLl9jdXJyZW50RXhhbXBsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzQmFjaygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc0JhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBoYXNCYWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2hhc0JhY2sgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBsZXQgaXRlbUluZGV4ID0gYXJncy5pbmRleDtcbiAgICAgICAgbGV0IHRhcHBlZEl0ZW0gPSB0aGlzLl9jdXJyZW50RXhhbXBsZS5zdWJJdGVtc1tpdGVtSW5kZXhdO1xuICAgICAgICBpZiAodGFwcGVkSXRlbS5zdWJJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRhcHBlZEl0ZW0ucGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXhhbXBsZXMtZGVwdGgtMycsIHRoaXMuX2N1cnJlbnRFeGFtcGxlLnRpdGxlLCB0YXBwZWRJdGVtLnRpdGxlXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKCkge1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLWV4YW1wbGVzLWRlcHRoLTNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJleGFtcGxlcy1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJleGFtcGxlcy1saXN0LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRXhhbXBsZXNMaXN0RGVwdGgzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgX2N1cnJlbnRFeGFtcGxlOiBFeGFtcGxlSXRlbTtcbiAgICBwcml2YXRlIF9oYXNCYWNrOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3N1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfZXhhbXBsZUl0ZW1zU2VydmljZTogRXhhbXBsZUl0ZW1TZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fc3ViID0gdGhpcy5fcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgbGV0IHBhcmVudFRpdGxlID0gcGFyYW1zWydwYXJlbnRUaXRsZSddO1xuICAgICAgICAgICAgbGV0IHRhcHBlZFRpdGxlID0gcGFyYW1zWyd0YXBwZWRUaXRsZSddO1xuICAgICAgICAgICAgdGhpcy5oYXNCYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRFeGFtcGxlID0gdGhpcy5fZXhhbXBsZUl0ZW1zU2VydmljZS5nZXRDaGlsZEV4YW1wbGVJdGVtKHBhcmVudFRpdGxlLCB0YXBwZWRUaXRsZSwgdGhpcy5fZXhhbXBsZUl0ZW1zU2VydmljZS5nZXRBbGxFeGFtcGxlSXRlbXMoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3N1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VycmVudEV4YW1wbGUoKTogRXhhbXBsZUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudEV4YW1wbGU7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBjdXJyZW50RXhhbXBsZSh2YWx1ZTogRXhhbXBsZUl0ZW0pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudEV4YW1wbGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0JhY2soKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNCYWNrO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaGFzQmFjayh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9oYXNCYWNrID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgbGV0IGl0ZW1JbmRleCA9IGFyZ3MuaW5kZXg7XG4gICAgICAgIGxldCB0YXBwZWRJdGVtID0gdGhpcy5fY3VycmVudEV4YW1wbGUuc3ViSXRlbXNbaXRlbUluZGV4XTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwodGFwcGVkSXRlbS5wYXRoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uQnV0dG9uVGFwKCkge1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkuZ29CYWNrKCk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRXhhbXBsZXNMaXN0RGVwdGhDb21wb25lbnRzID0gWyBFeGFtcGxlc0xpc3REZXB0aDFDb21wb25lbnQsIEV4YW1wbGVzTGlzdERlcHRoMkNvbXBvbmVudCwgRXhhbXBsZXNMaXN0RGVwdGgzQ29tcG9uZW50XTtcbiIsImltcG9ydCB7IEV4YW1wbGVJdGVtIH0gZnJvbSAnLi9leGFtcGxlSXRlbSc7XG5cbmV4cG9ydCBsZXQgRVhDTFVERURfRVhBTVBMRUlURU1TOiB7IHRpdGxlOiBzdHJpbmcsIHBsYXRmb3JtOiBzdHJpbmcgfVtdID0gW1xuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbGxhcHNpYmxlIEdyb3VwaW5nXCIsXG4gICAgICAgIFwicGxhdGZvcm1cIjogXCJpb3NcIlxuICAgIH1cbl07XG5cbmV4cG9ydCBsZXQgRVhBTVBMRUlURU1TOiBFeGFtcGxlSXRlbVtdID0gW1xuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIkxpc3RWaWV3IEFuZ3VsYXJcIixcbiAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgIFwic3ViSXRlbXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJHZXR0aW5nIFN0YXJ0ZWRcIixcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld0dldHRpbmdTdGFydGVkQ29tcG9uZW50L0xpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJHZXR0aW5nIFN0YXJ0ZWQgSG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRIb3Jpem9udGFsQ29tcG9uZW50L0xpc3RWaWV3R2V0dGluZ1N0YXJ0ZWRIb3Jpem9udGFsQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiSW5pdGlhbGx5IGxvYWQgMTAgMDAwIGl0ZW1zXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdXaXRoQmlnRGF0YUNvbXBvbmVudC9MaXN0Vmlld1dpdGhCaWdEYXRhQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiRGF0YSBPcGVyYXRpb25zXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJGaWx0ZXJpbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3RGF0YU9wZXJhdGlvbnNGaWx0ZXJpbmdDb21wb25lbnQvTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0ZpbHRlcmluZ0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU29ydGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdEYXRhT3BlcmF0aW9uc1NvcnRpbmdDb21wb25lbnQvTGlzdFZpZXdEYXRhT3BlcmF0aW9uc1NvcnRpbmdDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdyb3VwaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdDb21wb25lbnQvTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJHcm91cGluZyB3aXRoIFNjcm9sbCB0byBJbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nU2Nyb2xsVG9Db21wb25lbnQvTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nU2Nyb2xsVG9Db21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdyb3VwaW5nIHdpdGggaGVhZGVyL2Zvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdEYXRhT3BlcmF0aW9uc0dyb3VwaW5nSGVhZGVyRm9vdGVyQ29tcG9uZW50L0xpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ0hlYWRlckZvb3RlckNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiR3JvdXBpbmcgd2l0aCBtdWx0aXBsZSB0ZW1wbGF0ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3RGF0YU9wZXJhdGlvbnNHcm91cGluZ1RlbXBsYXRlc0NvbXBvbmVudC9MaXN0Vmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdUZW1wbGF0ZXNDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbGxhcHNpYmxlIEdyb3VwaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0dmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdDb2xsYXBzaWJsZUNvbXBvbmVudC9MaXN0dmlld0RhdGFPcGVyYXRpb25zR3JvdXBpbmdDb2xsYXBzaWJsZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiTXVsdGlwbGUgb3BlcmF0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdEYXRhT3BlcmF0aW9uc011bHRpcGxlQ29tcG9uZW50L0xpc3RWaWV3RGF0YU9wZXJhdGlvbnNNdWx0aXBsZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIldpdGggU3dpcGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3RGF0YU9wZXJhdGlvbnNNdWx0aXBsZVdpdGhTd2lwZUNvbXBvbmVudC9MaXN0Vmlld0RhdGFPcGVyYXRpb25zTXVsdGlwbGVXaXRoU3dpcGVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk11bHRpcGxlIEl0ZW0gVGVtcGxhdGVzXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdNdWx0aXBsZVRlbXBsYXRlc0NvbXBvbmVudC9MaXN0Vmlld011bHRpcGxlVGVtcGxhdGVzQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiSXRlbSBMb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdJdGVtTG9hZGluZ0NvbXBvbmVudC9MaXN0Vmlld0l0ZW1Mb2FkaW5nQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiSXRlbSBBbmltYXRpb25zXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdJdGVtQW5pbWF0aW9uc0NvbXBvbmVudC9MaXN0Vmlld0l0ZW1BbmltYXRpb25zQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiSXRlbSBMYXlvdXRzXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJMaW5lYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3SXRlbUxheW91dHNMaW5lYXJDb21wb25lbnQvTGlzdFZpZXdJdGVtTGF5b3V0c0xpbmVhckNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiR3JpZCB3aXRoIGl0ZW0gaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld0l0ZW1MYXlvdXRzR3JpZENvbXBvbmVudC9MaXN0Vmlld0l0ZW1MYXlvdXRzR3JpZENvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiR3JpZCB3aXRob3V0IGl0ZW0gaGVpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld0l0ZW1MYXlvdXRzR3JpZE5vSGVpZ2h0Q29tcG9uZW50L0xpc3RWaWV3SXRlbUxheW91dHNHcmlkTm9IZWlnaHRDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlN0YWdnZXJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdJdGVtTGF5b3V0c1N0YWdnZXJlZENvbXBvbmVudC9MaXN0Vmlld0l0ZW1MYXlvdXRzU3RhZ2dlcmVkQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJDaGFuZ2UgYXQgcnVudGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdJdGVtTGF5b3V0c1J1bnRpbWVDb21wb25lbnQvTGlzdFZpZXdJdGVtTGF5b3V0c1J1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkl0ZW0gUmVvcmRlclwiLFxuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3SXRlbVJlb3JkZXJDb21wb25lbnQvTGlzdFZpZXdJdGVtUmVvcmRlckNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkl0ZW0gUmVvcmRlciB3aXRoIGhhbmRsZVwiLFxuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3SXRlbVJlb3JkZXJIYW5kbGVDb21wb25lbnQvTGlzdFZpZXdJdGVtUmVvcmRlckhhbmRsZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU2luZ2xlIFNlbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdJdGVtU2VsZWN0aW9uQ29tcG9uZW50L0xpc3RWaWV3SXRlbVNlbGVjdGlvbkNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiTXVsdGlwbGUgU2VsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld0l0ZW1TZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudC9MaXN0Vmlld0l0ZW1TZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiUHJvZ3JhbW1hdGljIFNlbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdJdGVtU2VsZWN0aW9uUHJvZ3JhbW1hdGljQ29tcG9uZW50L0xpc3RWaWV3SXRlbVNlbGVjdGlvblByb2dyYW1tYXRpY0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU3R5bGluZyBTaW5nbGUgU2VsZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJTdHlsaW5nSXRlbVNlbGVjdGlvbkNvbXBvbmVudC9TdHlsaW5nSXRlbVNlbGVjdGlvbkNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU3R5bGluZyBNdWx0aXBsZSBTZWxlY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIlN0eWxpbmdTZWxlY3Rpb25NdWx0aXBsZUNvbXBvbmVudC9TdHlsaW5nU2VsZWN0aW9uTXVsdGlwbGVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNlbGVjdGlvbiBTdGF0ZXNcIixcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld1NlbGVjdGlvblN0YXRlc0NvbXBvbmVudC9MaXN0Vmlld1NlbGVjdGlvblN0YXRlc0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkxvYWQgb24gRGVtYW5kXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJNYW51YWwgd2l0aCBGaXhlZCBJdGVtIFNpemVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3Rml4ZWRTaXplTWFudWFsQ29tcG9uZW50L0xpc3RWaWV3Rml4ZWRTaXplTWFudWFsQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJBdXRvIHdpdGggRml4ZWQgSXRlbSBTaXplXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld0ZpeGVkU2l6ZUF1dG9Db21wb25lbnQvTGlzdFZpZXdGaXhlZFNpemVBdXRvQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJNYW51YWwgd2l0aCBWYXJpYWJsZSBJdGVtIFNpemVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3RHluYW1pY1NpemVNYW51YWxDb21wb25lbnQvTGlzdFZpZXdEeW5hbWljU2l6ZU1hbnVhbENvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQXV0byB3aXRoIFZhcmlhYmxlIEl0ZW0gU2l6ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdEeW5hbWljU2l6ZUF1dG9Db21wb25lbnQvTGlzdFZpZXdEeW5hbWljU2l6ZUF1dG9Db21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIldpdGggc21hbGwgc291cmNlIGFuZCBwdWxsIHRvIHJlZnJlc2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3Rml4ZWRTaXplQXV0b1dpdGhTbWFsbFNvdXJjZUNvbXBvbmVudC9MaXN0Vmlld0ZpeGVkU2l6ZUF1dG9XaXRoU21hbGxTb3VyY2VDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk9ic2VydmFibGUgQXJyYXlcIixcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld09ic2VydmFibGVBcnJheUNvbXBvbmVudC9MaXN0Vmlld09ic2VydmFibGVBcnJheUNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlB1bGwgdG8gUmVmcmVzaFwiLFxuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3UHVsbFRvUmVmcmVzaENvbXBvbmVudC9MaXN0Vmlld1B1bGxUb1JlZnJlc2hDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdldHRpbmcgU3RhcnRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ29tcG9uZW50L0xpc3RWaWV3UHVsbFRvUmVmcmVzaENvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQ3VzdG9taXplIGluZGljYXRvci9iYWNrZ3JvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld1B1bGxUb1JlZnJlc2hDdXN0b21pemVDb21wb25lbnQvTGlzdFZpZXdQdWxsVG9SZWZyZXNoQ3VzdG9taXplQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU3dpcGUgYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiR2V0dGluZyBTdGFydGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld1N3aXBlQWN0aW9uc0NvbXBvbmVudC9MaXN0Vmlld1N3aXBlQWN0aW9uc0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQW5pbWF0ZWQgdGhyZXNob2xkc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdTd2lwZUFjdGlvbnNUaHJlc2hvbGRzQ29tcG9uZW50L0xpc3RWaWV3U3dpcGVBY3Rpb25zVGhyZXNob2xkc0NvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiTXVsdGlwbGUgYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdTd2lwZUFjdGlvbnNNdWx0aXBsZUNvbXBvbmVudC9MaXN0Vmlld1N3aXBlQWN0aW9uc011bHRpcGxlQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXNhYmxlXFxcXEVuYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdTd2lwZURpc2FibGVDb21wb25lbnQvTGlzdFZpZXdTd2lwZURpc2FibGVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkhlYWRlciBhbmQgRm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJBdXRvIGhlaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdIZWFkZXJGb290ZXJDb21wb25lbnQvTGlzdFZpZXdIZWFkZXJGb290ZXJDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJpZyBoZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3QmlnSGVhZGVyQ29tcG9uZW50L0xpc3RWaWV3QmlnSGVhZGVyQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJCaWcgZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld0JpZ0Zvb3RlckNvbXBvbmVudC9MaXN0Vmlld0JpZ0Zvb3RlckNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQ2hhbmdlIGF0IHJ1bnRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3R2aWV3Q2hhbmdlU2l6ZUF0UnVudGltZUNvbXBvbmVudC9MaXN0dmlld0NoYW5nZVNpemVBdFJ1bnRpbWVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkl0ZW0gc2VwYXJhdG9yc1wiLFxuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3SXRlbVNlcGFyYXRvckNvbXBvbmVudC9MaXN0Vmlld0l0ZW1TZXBhcmF0b3JDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJTY3JvbGwgdG8gaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkluIHZlcnRpY2FsIGRpcmVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdTY3JvbGxUb0luZGV4VmVydGljYWxDb21wb25lbnQvTGlzdFZpZXdTY3JvbGxUb0luZGV4VmVydGljYWxDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkluIGhvcml6b250YWwgZGlyZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld1Njcm9sbFRvSW5kZXhIb3Jpem9udGFsQ29tcG9uZW50L0xpc3RWaWV3U2Nyb2xsVG9JbmRleEhvcml6b250YWxDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkluaXRpYWxseSBzY3JvbGxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdTY3JvbGxUb0luZGV4SW5pdGlhbENvbXBvbmVudC9MaXN0Vmlld1Njcm9sbFRvSW5kZXhJbml0aWFsQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJTY3JvbGwgRXZlbnRzXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdFZpZXdTY3JvbGxFdmVudHNDb21wb25lbnQvTGlzdFZpZXdTY3JvbGxFdmVudHNDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJIb3Jpem9udGFsIHdpdGggVmFyaWFibGUgaXRlbSdzIHdpZHRoXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdHZpZXdIb3Jpem9udGFsV2l0aFZhcmlhYmxlSXRlbVdpZHRoQ29tcG9uZW50L0xpc3R2aWV3SG9yaXpvbnRhbFdpdGhWYXJpYWJsZUl0ZW1XaWR0aENvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbXNcIjogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkdyb3VwLCBTd2lwZSwgTG9hZCBhbmQgUHVsbFwiLFxuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIkxpc3RWaWV3R3JvdXBTd2lwZUxvYWRQdWxsQ29tcG9uZW50L0xpc3RWaWV3R3JvdXBTd2lwZUxvYWRQdWxsQ29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtc1wiOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiR2V0IGZpcnN0IHZpc2libGUgaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCJMaXN0Vmlld0ZpcnN0VmlzaWJsZUluZGV4Q29tcG9uZW50L0xpc3RWaWV3Rmlyc3RWaXNpYmxlSW5kZXhDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJDdXN0b20gQW5ndWxhciBjb21wIGluIHRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiTGlzdHZpZXdDb21wVGVtcGxhdGVDb21wb25lbnQvTGlzdHZpZXdDb21wVGVtcGxhdGVDb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1zXCI6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dOyIsIm1vZHVsZS5leHBvcnRzID0gXCIudGl0bGVMYWJlbCB7XFxuICAgIG1hcmdpbjogODtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgdGtFeGFtcGxlVGl0bGUgdGtUb2dnbGVOYXZCdXR0b24+XFxuICAgIDxSYWRMaXN0VmlldyAjb3B0aW9uc0xpc3RWaWV3IHNlbGVjdGlvbkJlaGF2aW9yPVxcXCJQcmVzc1xcXCIgKGxvYWRlZCk9XFxcIm9uTG9hZGVkKClcXFwiIFtpdGVtc109XFxcImRhdGFJdGVtc1xcXCIgKGl0ZW1UYXApPVxcXCJvbkl0ZW1UYXAoJGV2ZW50KVxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgdGtMaXN0SXRlbVRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwidGl0bGVMYWJlbFxcXCIgW3RleHRdPVxcXCJpdGVtXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9SYWRMaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3RhYmxlLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL25hdmlnYXRpb24vb3B0aW9ucy9vcHRpb25zLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJ0ay1vcHRpb25zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwib3B0aW9ucy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wib3B0aW9ucy5jb21wb25lbnQuY3NzXCJdXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBfZGF0YUl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIF9zdWI6IGFueTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UsIHByaXZhdGUgX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPigpO1xuICAgIH1cblxuICAgIEBWaWV3Q2hpbGQoXCJvcHRpb25zTGlzdFZpZXdcIiwgeyByZWFkOiBSYWRMaXN0Vmlld0NvbXBvbmVudCwgc3RhdGljOiBmYWxzZSB9KSBvcHRpb25zTGlzdFZpZXc6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3N1YiA9IHRoaXMuX3JvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcbiAgICAgICAgICAgIChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcGFyYW1zWydpdGVtcyddO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSArcGFyYW1zWydzZWxlY3RlZEluZGV4J107XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0SXRlbXMgPSBpdGVtcy50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RhdGFJdGVtcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPihzcGxpdEl0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cnlVcGRhdGVMaXN0Vmlld1NlbGVjdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9hZGVkKCkge1xuICAgICAgICB0aGlzLnRyeVVwZGF0ZUxpc3RWaWV3U2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cnlVcGRhdGVMaXN0Vmlld1NlbGVjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggPj0gMCAmJiB0aGlzLm9wdGlvbnNMaXN0VmlldyAmJiB0aGlzLm9wdGlvbnNMaXN0Vmlldy5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0Vmlldy5uYXRpdmVFbGVtZW50LnNlbGVjdEl0ZW1BdCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YUl0ZW1zO1xuICAgIH1cblxuXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSB0aGlzLm9wdGlvbnNMaXN0Vmlldy5uYXRpdmVFbGVtZW50LmdldFNlbGVjdGVkSXRlbXMoKSBhcyBBcnJheTxzdHJpbmc+O1xuICAgICAgICB0aGlzLl9vcHRpb25zU2VydmljZS5wYXJhbVZhbHVlID0gc2VsZWN0ZWRJdGVtc1swXTtcbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcHRpb25zU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfcGFyYW1OYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFyYW1WYWx1ZTogYW55O1xuXG4gICAgZ2V0IHBhcmFtTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1OYW1lO1xuICAgIH1cblxuICAgIHNldCBwYXJhbU5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9wYXJhbU5hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgcGFyYW1WYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuX3BhcmFtVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgcGFyYW1WYWx1ZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1WYWx1ZTtcbiAgICB9XG59IiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOlxuLy8gbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsXG4vLyBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=