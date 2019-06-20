(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/academy/academy.module": [
		"./src/app/modules/academy/academy.module.ts",
		"modules-academy-academy-module"
	],
	"./modules/admission/admission.module": [
		"./src/app/modules/admission/admission.module.ts",
		"default~modules-admission-admission-module~modules-home-home-module",
		"modules-admission-admission-module"
	],
	"./modules/contact-us/contact-us.module": [
		"./src/app/modules/contact-us/contact-us.module.ts",
		"modules-contact-us-contact-us-module"
	],
	"./modules/home/home.module": [
		"./src/app/modules/home/home.module.ts",
		"default~modules-admission-admission-module~modules-home-home-module",
		"modules-home-home-module"
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./modules/home/home.module#HomeModule" },
    { path: "admission", loadChildren: "./modules/admission/admission.module#AdmissionModule" },
    { path: "academic", loadChildren: "./modules/academy/academy.module#AcademyModule" },
    { path: "contact-us", loadChildren: "./modules/contact-us/contact-us.module#ContactUsModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [sidenav]=\"sidenav\"></app-header>\n<mat-sidenav-container>\n\n    <mat-sidenav [ngStyle.lt-md]=\"{'width': '70%'}\" #sidenav [(opened)]=\"opened\" [(mode)]=\"mode\" class=\"shadow\">\n\n        <div class=\"mt-3\" fxHide=\"true\" fxShow.lt-md=\"true\">\n            <div>\n                <mat-nav-list>\n                    <a *ngFor=\"let link of links\" mat-list-item [routerLink]=\"link.url\" routerLinkActive='active-link'>\n                        {{link.name}}\n                    </a>\n                </mat-nav-list>\n            </div>\n        </div>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <router-outlet></router-outlet>\n    </mat-sidenav-content>\n\n</mat-sidenav-container>\n<app-footer></app-footer>\n\n<div style=\"height: 100vh; width: 100vw;position: fixed; top:0;background: rgba(0, 0, 0, 0.8);z-index: 5000\" *ngIf=\"loaderStatus | async\">\n    <div style=\"height: 100vh;\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <div style=\"color: aliceblue;\"><mat-spinner></mat-spinner></div> \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sidenav {\n  margin-top: 75px;\n  background-image: linear-gradient(to right, #037119, #1c881b, #329f1a, #48b616, #5fce0c); }\n\n.mat-sidenav-content {\n  margin-top: 100px; }\n\n.mat-list-base .mat-list-item {\n  color: #ffffff; }\n\n::ng-deep .mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByYWN0aWNhbFxcZ2l0aHViXFxteXNjaG9vbFxcbXlzY2hvb2wtc2l0ZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdGQUF3RixFQUFBOztBQUcxRjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSwwQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc2lkZW5hdiB7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMzcxMTksICMxYzg4MWIsICMzMjlmMWEsICM0OGI2MTYsICM1ZmNlMGMpO1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gIHN0cm9rZTogI2ZmZmZmZiAhaW1wb3J0YW50IDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header/header.component */ "./src/app/modules/header/header.component.ts");
/* harmony import */ var _service_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/loader.service */ "./src/app/service/loader.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(media, router, loaderService) {
        var _this = this;
        this.media = media;
        this.router = router;
        this.loaderService = loaderService;
        this.title = 'myschool-site';
        this.opened = true;
        this.mode = 'side';
        this.links = _modules_header_header_component__WEBPACK_IMPORTED_MODULE_4__["links"];
        this.media.media$.subscribe(function (change) {
            if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
                _this.opened = false;
                _this.mode = 'over';
            }
            else {
                _this.opened = true;
                _this.mode = 'side';
            }
        });
        this.loaderStatus = this.loaderService.status();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/header/header.module */ "./src/app/modules/header/header.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/footer/footer.module */ "./src/app/modules/footer/footer.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _modules_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_10__["FooterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/footer/footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/footer/footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"30px\">\n    <div class=\"link\">\n      <h6>LINKS</h6>\n      <div class=\"link-a\" *ngFor=\"let link of links\"> <a [routerLink]=\"link.url\"> {{link.name}}</a></div>\n    </div>\n    <div>\n      <h6>REACH US</h6>\n      <p>\n        <mat-icon>email</mat-icon> pesleishangthem@gmail.com\n      </p>\n      <p>\n        <mat-icon>call</mat-icon> +91 000000000\n      </p>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\">\n    <div><strong>Copyright @2019 - Public English School Leishangthem</strong></div>\n    <div>\n      <span>\n        <img src=\"../../../assets/images/icons/facebook.png\" alt=\"\" width=\"33\" height=\"30\">\n      </span>&nbsp;\n      <span>\n        <img src=\"../../../assets/images/icons/youtube.png\" alt=\"\" width=\"35\" height=\"39\">\n      </span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  background: #555555;\n  color: #ffffff;\n  padding: 20px; }\n\n.link a {\n  color: #ffffff;\n  text-decoration: none; }\n\n.link a:hover {\n  color: #74e485;\n  text-decoration: none; }\n\n.link-a {\n  padding-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb290ZXIvRDpcXFByYWN0aWNhbFxcZ2l0aHViXFxteXNjaG9vbFxcbXlzY2hvb2wtc2l0ZS9zcmNcXGFwcFxcbW9kdWxlc1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0Usb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogIzU1NTU1NTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubGluayBhIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saW5rIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM3NGU0ODU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuLmxpbmstYSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/modules/header/header.component.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.links = _header_header_component__WEBPACK_IMPORTED_MODULE_2__["links"];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/modules/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/footer/footer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/footer/footer.module.ts ***!
  \*************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/modules/footer/footer.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/modules/header/header.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-continer shadow-lg\">\n  <nav class=\"navbar navbar-expand-lg\" id=\"brand-toolbar\">\n    <div class=\"row w-100\">\n      <div class=\"col-md-12 text-center top-header\">\n        <button mat-button routerLink=\"/\"><span ngClass=\"title title-sm primary-color\"\n            [ngClass.lt-md]=\"{'title':false,'title-sm':true}\" [ngClass.gt-md]=\"{'title-sm':false,'title':true}\">Public\n            English School\n            Leishangthem</span>\n        </button>\n      </div>\n    </div>\n  </nav>\n\n  <nav class=\"navbar navbar-expand-lg\" id=\"product-nav\">\n    <div class=\"row w-100\">\n      <div class=\"col-md-6 text-left header\">\n        <span>\n          <button fxHide=\"true\" fxShow.lt-md=\"true\" mat-icon-button>\n            <mat-icon style=\"font-size: 22px;\" (click)=\"sidenav.toggle()\">menu</mat-icon>\n          </button>\n          <strong>Info : pesleishangthem@gmail.com</strong> &nbsp;\n        </span>\n      </div>\n      <div class=\"col-md-6 text-right\" fxShow=\"true\" fxHide.lt-md=\"true\">\n        <span *ngFor=\"let link of links\"><button class=\"primary-color\" mat-flat-button\n            [routerLink]=\"link.url\">{{link.name}}</button>&nbsp;</span>\n      </div>\n    </div>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/modules/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary-btn {\n  background-color: #1c881b;\n  color: #ffffff; }\n\n.success-btn {\n  background-color: #98ac28;\n  color: #ffffff; }\n\n.info-btn {\n  background-color: #2abcc8;\n  color: #ffffff; }\n\n.warning-btn {\n  background-color: #f5821e;\n  color: #ffffff; }\n\n.danger-btn {\n  background-color: #ee3f64;\n  color: #ffffff; }\n\n/* =========== Outline button ========= */\n\n.outline-warning-btn {\n  background-color: transparent;\n  color: #f5821e;\n  border: 3px solid #f5821e;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-primary-btn {\n  background-color: transparent;\n  color: #1c881b;\n  border: 2px solid #1c881b;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-primary-btn:hover {\n  background-color: #1c881b;\n  color: #ffffff;\n  border: 2px solid #1c881b;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-secondary-btn {\n  background-color: transparent;\n  color: #f5821e;\n  border: 3px solid #f5821e;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-white-btn {\n  background-color: transparent;\n  color: #ffffff;\n  border: 3px solid #ffffff;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-danger-btn {\n  background-color: transparent;\n  color: #ee3f64;\n  border: 3px solid #ee3f64;\n  border-radius: 0;\n  font-weight: 600; }\n\n/* =========== Outline button ========= */\n\n/* Small outline button */\n\n.outline-warning-sm-btn {\n  background-color: transparent;\n  color: #f5821e;\n  border: 3px solid #f5821e;\n  border-radius: 0;\n  font-weight: 600;\n  height: 27px;\n  line-height: 25px;\n  font-size: 12px; }\n\n.outline-primary-sm-btn {\n  background-color: transparent;\n  color: #00518f;\n  border: 2px solid #00518f;\n  border-radius: 0;\n  height: 27px;\n  line-height: 25px;\n  font-size: 12px; }\n\n.outline-danger-sm-btn {\n  background-color: transparent;\n  color: #ee3f64;\n  border: 2px solid #ee3f64;\n  border-radius: 0;\n  height: 27px;\n  line-height: 25px;\n  font-size: 12px; }\n\n/*  */\n\n.primary-btn:disabled {\n  background-color: #b3f0b2;\n  color: #ffffff; }\n\n.success-btn:disabled {\n  background-color: #b9d037;\n  color: #ffffff; }\n\n.info-btn:disabled {\n  background-color: #4ccfd9;\n  color: #ffffff; }\n\n.warning-btn:disabled {\n  background-color: #f79d4f;\n  color: #ffffff; }\n\n.danger-btn:disabled {\n  background-color: #faccd5;\n  color: #ffffff; }\n\n.brand:focus {\n  outline: none; }\n\n.top-header {\n  color: #fad742; }\n\n.top-header a {\n  color: #ccf8fa;\n  font-size: 15px;\n  font-weight: 700; }\n\n.mat-fab,\n.mat-flat-button,\n.mat-mini-fab,\n.mat-raised-button {\n  color: #f2f2f2;\n  background: transparent; }\n\n.nav-link {\n  font-size: 15px; }\n\n.nav-link {\n  color: #ffffff; }\n\n.title {\n  font-size: 25px;\n  font-weight: 600;\n  letter-spacing: 2px; }\n\n.title-sm {\n  font-size: 15px;\n  font-weight: 500; }\n\n.header {\n  padding-left: 0;\n  padding-right: 0; }\n\n.header a {\n  color: #fad742; }\n\n.header-continer {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n  background-image: linear-gradient(to right, #037119, #1c881b, #329f1a, #48b616, #5fce0c);\n  color: #e6e5e5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9oZWFkZXIvRDpcXFByYWN0aWNhbFxcZ2l0aHViXFxteXNjaG9vbFxcbXlzY2hvb2wtc2l0ZS9zcmNcXGFzc2V0c1xcc2Nzc1xcYnV0dG9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL0Q6XFxQcmFjdGljYWxcXGdpdGh1YlxcbXlzY2hvb2xcXG15c2Nob29sLXNpdGUvc3JjXFxhc3NldHNcXHNjc3NcXGNvbG9yLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL0Q6XFxQcmFjdGljYWxcXGdpdGh1YlxcbXlzY2hvb2xcXG15c2Nob29sLXNpdGUvc3JjXFxhcHBcXG1vZHVsZXNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJDSHFCO0VESXJCLGNDSW1CLEVBQUE7O0FERHJCO0VBQ0UseUJDTHFCO0VETXJCLGNDRG1CLEVBQUE7O0FESXJCO0VBQ0UseUJDVGtCO0VEVWxCLGNDTm1CLEVBQUE7O0FEU3JCO0VBQ0UseUJDYnFCO0VEY3JCLGNDWG1CLEVBQUE7O0FEY3JCO0VBQ0UseUJDakJvQjtFRGtCcEIsY0NoQm1CLEVBQUE7O0FEbUJyQix5Q0FBQTs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixjQ3pCcUI7RUQwQnJCLHlCQzFCcUI7RUQyQnJCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw2QkFBNkI7RUFDN0IsY0N0Q3FCO0VEdUNyQix5QkN2Q3FCO0VEd0NyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJDN0NxQjtFRDhDckIsY0N0Q21CO0VEdUNuQix5QkMvQ3FCO0VEZ0RyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsNkJBQTZCO0VBQzdCLGNDcER1QjtFRHFEdkIseUJDckR1QjtFRHNEdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDZCQUE2QjtFQUM3QixjQ3JEbUI7RURzRG5CLHlCQ3REbUI7RUR1RG5CLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSw2QkFBNkI7RUFDN0IsY0MvRG9CO0VEZ0VwQix5QkNoRW9CO0VEaUVwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCLHlDQUFBOztBQUNBLHlCQUFBOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGNDMUVxQjtFRDJFckIseUJDM0VxQjtFRDRFckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsNkJBQTZCO0VBQzdCLGNDOUZvQjtFRCtGcEIseUJDL0ZvQjtFRGdHcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVqQixLQUFBOztBQUVBO0VBQ0UseUJBQThDO0VBQzlDLGNDdkdtQixFQUFBOztBRDBHckI7RUFDRSx5QkFBOEM7RUFDOUMsY0M1R21CLEVBQUE7O0FEK0dyQjtFQUNFLHlCQUEyQztFQUMzQyxjQ2pIbUIsRUFBQTs7QURvSHJCO0VBQ0UseUJBQThDO0VBQzlDLGNDdEhtQixFQUFBOztBRHlIckI7RUFDRSx5QkFBNkM7RUFDN0MsY0MzSG1CLEVBQUE7O0FDTnJCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsY0FBNEIsRUFBQTs7QUFHOUI7RUFDRSxjQUEwQjtFQUMxQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCOzs7O0VBSUUsY0FBK0I7RUFDL0IsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNEckJtQixFQUFBOztBQ3dCckI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBNEIsRUFBQTs7QUFHOUI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0ZBQXdGO0VBQ3hGLGNBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9jb2xvci5zY3NzXCI7XHJcblxyXG4ucHJpbWFyeS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbi5zdWNjZXNzLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3MtY29sb3I7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuLmluZm8tYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5mby1jb2xvcjtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4ud2FybmluZy1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3YXJuaW5nLWNvbG9yO1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbi5kYW5nZXItYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFuZ2VyLWNvbG9yO1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09IE91dGxpbmUgYnV0dG9uID09PT09PT09PSAqL1xyXG4ub3V0bGluZS13YXJuaW5nLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICR3YXJuaW5nLWNvbG9yO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICR3YXJuaW5nLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm91dGxpbmUtcHJpbWFyeS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5vdXRsaW5lLXByaW1hcnktYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjs7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm91dGxpbmUtc2Vjb25kYXJ5LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5vdXRsaW5lLXdoaXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkd2hpdGUtY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ub3V0bGluZS1kYW5nZXItYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJGRhbmdlci1jb2xvcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkZGFuZ2VyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT0gT3V0bGluZSBidXR0b24gPT09PT09PT09ICovXHJcbi8qIFNtYWxsIG91dGxpbmUgYnV0dG9uICovXHJcbi5vdXRsaW5lLXdhcm5pbmctc20tYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJHdhcm5pbmctY29sb3I7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJHdhcm5pbmctY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGhlaWdodDogMjdweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5vdXRsaW5lLXByaW1hcnktc20tYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzAwNTE4ZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA1MThmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm91dGxpbmUtZGFuZ2VyLXNtLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICRkYW5nZXItY29sb3I7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGRhbmdlci1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGhlaWdodDogMjdweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLyogICovXHJcblxyXG4ucHJpbWFyeS1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnktY29sb3IsIDUwJSk7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuLnN1Y2Nlc3MtYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRzdWNjZXNzLWNvbG9yLCAxMCUpO1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbi5pbmZvLWJ0bjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkaW5mby1jb2xvciwgMTAlKTtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4ud2FybmluZy1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHdhcm5pbmctY29sb3IsIDEwJSk7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuLmRhbmdlci1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGRhbmdlci1jb2xvciwgMzAlKTtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMWM4ODFiO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZjU4MjFlO1xyXG5cclxuJHN1Y2Nlc3MtY29sb3I6ICM5OGFjMjg7XHJcbiRpbmZvLWNvbG9yOiAjMmFiY2M4O1xyXG4kd2FybmluZy1jb2xvcjogI2Y1ODIxZTtcclxuJGRhbmdlci1jb2xvcjogI2VlM2Y2NDtcclxuXHJcbiR3aGl0ZS1jb2xvcjogI2ZmZmZmZjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDtcclxuXHJcbiR3aGl0ZS1ncmV5OiAjZWZlZmVmO1xyXG4kZ3JleTogI2UyZTJlMjtcclxuJGRhcmstZ3JleTogI2M2YzZjNjtcclxuICIsIkBpbXBvcnQgXCIuLi9oZWFkZXIvLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5icmFuZDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRvcC1oZWFkZXIge1xyXG4gIGNvbG9yOiBsaWdodGVuKCNGOUNDMTAsIDEwJSk7XHJcbn1cclxuXHJcbi50b3AtaGVhZGVyIGEge1xyXG4gIGNvbG9yOiBkYXJrZW4oI0QxRjlGQSwgMSUpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubWF0LWZhYixcclxuLm1hdC1mbGF0LWJ1dHRvbixcclxuLm1hdC1taW5pLWZhYixcclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBjb2xvcjogZGFya2VuKCR3aGl0ZS1jb2xvciwgNSUpO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi50aXRsZS1zbSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uaGVhZGVyIGEge1xyXG4gIGNvbG9yOiBsaWdodGVuKCNGOUNDMTAsIDEwJSk7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMzcxMTksICMxYzg4MWIsICMzMjlmMWEsICM0OGI2MTYsICM1ZmNlMGMpO1xyXG4gIGNvbG9yOiBkYXJrZW4oJHdoaXRlLWNvbG9yLCAxMCUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: links, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "links", function() { return links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var links = [
    { name: "Home", url: "/", hasSubLinks: false },
    { name: "Admission", url: "/admission", hasSubLinks: false },
    { name: "Academy", url: "/academic", hasSubLinks: false },
    { name: "Contact us", url: "/contact-us", hasSubLinks: false },
    { name: "Admin Login", url: "/admin", hasSubLinks: false }
];
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.links = links;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "sidenav", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/header.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/modules/header/header.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");







var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ], exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/service/loader.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/loader.service.ts ***!
  \*******************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    LoaderService.prototype.change = function (value) {
        this.loaderSubject.next(value);
    };
    LoaderService.prototype.status = function () {
        return this.loaderSubject.asObservable();
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Practical\github\myschool\myschool-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map