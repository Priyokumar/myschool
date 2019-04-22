(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/auth.module": [
		"./src/app/modules/auth.module.ts",
		"modules-auth-module"
	],
	"./modules/dashboard.module": [
		"./src/app/modules/dashboard.module.ts",
		"modules-dashboard-module"
	],
	"./modules/employees.module": [
		"./src/app/modules/employees.module.ts",
		"default~modules-employees-module~modules-income-expense-module~modules-maintenance-module~modules-se~fdfe3f9a",
		"common",
		"modules-employees-module"
	],
	"./modules/income-expense.module": [
		"./src/app/modules/income-expense.module.ts",
		"default~modules-employees-module~modules-income-expense-module~modules-maintenance-module~modules-se~fdfe3f9a",
		"common",
		"modules-income-expense-module"
	],
	"./modules/maintenance.module": [
		"./src/app/modules/maintenance.module.ts",
		"default~modules-employees-module~modules-income-expense-module~modules-maintenance-module~modules-se~fdfe3f9a",
		"common",
		"modules-maintenance-module"
	],
	"./modules/security.module": [
		"./src/app/modules/security.module.ts",
		"default~modules-employees-module~modules-income-expense-module~modules-maintenance-module~modules-se~fdfe3f9a",
		"common",
		"modules-security-module"
	],
	"./modules/students.module": [
		"./src/app/modules/students.module.ts",
		"default~modules-employees-module~modules-income-expense-module~modules-maintenance-module~modules-se~fdfe3f9a",
		"common",
		"modules-students-module"
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_login_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/login-auth-guard-service.service */ "./src/app/service/login-auth-guard-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_prelogin_gaurd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/prelogin-gaurd.service */ "./src/app/service/prelogin-gaurd.service.ts");





var routes = [
    { path: "", loadChildren: "./modules/auth.module#AuthModule", canActivate: [_service_prelogin_gaurd_service__WEBPACK_IMPORTED_MODULE_4__["PreloginGaurdService"]] },
    { path: "dashboard", loadChildren: "./modules/dashboard.module#DashboardModule", canLoad: [_service_login_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginAuthGuardServiceService"]] },
    { path: "employee", loadChildren: "./modules/employees.module#EmployeesModule", canLoad: [_service_login_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginAuthGuardServiceService"]] },
    { path: "income-expense", loadChildren: "./modules/income-expense.module#IncomeExpenseModule", canLoad: [_service_login_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginAuthGuardServiceService"]] },
    { path: "maintenance", loadChildren: "./modules/maintenance.module#MaintenanceModule", canLoad: [_service_login_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginAuthGuardServiceService"]] },
    { path: "security", loadChildren: "./modules/security.module#SecurityModule", canLoad: [_service_login_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginAuthGuardServiceService"]] },
    { path: "student", loadChildren: "./modules/students.module#StudentsModule", canLoad: [_service_login_auth_guard_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginAuthGuardServiceService"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-module *ngIf=\"(hasLoginedObs | async) === true else login\"></app-module>\r\n<ng-template #login>\r\n    <app-security ></app-security>\r\n</ng-template>"

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
/* harmony import */ var _service_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user-service.service */ "./src/app/service/user-service.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.hasLoginedObs = this.userService.hasLoginedObs();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _components_security_security_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/security/security.component */ "./src/app/components/security/security.component.ts");
/* harmony import */ var _components_module_module_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/module/module.component */ "./src/app/components/module/module.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_security_security_component__WEBPACK_IMPORTED_MODULE_8__["SecurityComponent"],
                _components_module_module_component__WEBPACK_IMPORTED_MODULE_9__["ModuleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/module/module.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/module/module.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n  background-image: linear-gradient(to right, #065c37, #09713f, #138747, #229d4c, #33b451);\r\n  color: #ffffff;\r\n  height: 6% !important;\r\n  font-size: 12px;\r\n}\r\n\r\n.example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-sidenav {\r\n  width: 250px;\r\n}\r\n\r\n.mat-expansion-panel {\r\n  border-radius: 0;\r\n  background: #efefef;\r\n}\r\n\r\n.mat-drawer-side {\r\n  border-right: solid 3px rgba(0, 0, 0, 0.09);\r\n}\r\n\r\n::ng-deep .mat-expansion-panel-body {\r\n  padding: 0px !important;\r\n  padding-left: 40px !important;\r\n}\r\n\r\n::ng-deep .mat-drawer-inner-container {\r\n  overflow-x: hidden !important;\r\n  overflow-y: auto !important;\r\n  background: #efefef;\r\n}\r\n\r\n::ng-deep .mat-menu-content:not(:empty) {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.with-bg {\r\n  background: url('1.JPG') no-repeat center;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  max-height: 200px;\r\n}\r\n\r\n.profile-dropdown {\r\n  background-image: linear-gradient(to right, #065c37, #09713f, #138747, #229d4c, #33b451);\r\n}\r\n\r\n.nav-a:hover {\r\n  color: #ffffff;\r\n  text-decoration: none;\r\n  background-color: mediumorchid;\r\n}\r\n\r\n::ng-deep .mat-menu-panel {\r\n  max-width: none;\r\n  width: 100vw;\r\n  margin-left: -8px;\r\n  margin-top: 15px;\r\n  overflow: visible;\r\n}\r\n\r\n.nav-mat-icon {\r\n  color: darkslategray;\r\n}\r\n\r\n.active-link {\r\n  border-left: limegreen 4px solid;\r\n  background-color: #dddddd;\r\n}\r\n\r\n::ng-deep .mat-list-item-content {\r\n  font-size: 13px;\r\n}\r\n\r\n.mat-expansion-panel-header {\r\n  font-size: 13px;\r\n  height: 38px;\r\n}\r\n\r\n.exp-line-heigth {\r\n  line-height: 35px;\r\n}\r\n\r\n.mat-expansion-panel {\r\n  border-radius: 0;\r\n  background: #efefef;\r\n}\r\n\r\n.mat-list .mat-list-item,\r\n.mat-list .mat-list-option,\r\n.mat-nav-list .mat-list-item,\r\n.mat-nav-list .mat-list-option,\r\n.mat-selection-list .mat-list-item,\r\n.mat-selection-list .mat-list-option {\r\n  height: 38px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2R1bGUvbW9kdWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RkFBd0Y7RUFDeEYsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUNBQWdFO0VBQ2hFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3RkFBd0Y7QUFDMUY7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7RUFNRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZHVsZS9tb2R1bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDY1YzM3LCAjMDk3MTNmLCAjMTM4NzQ3LCAjMjI5ZDRjLCAjMzNiNDUxKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBoZWlnaHQ6IDYlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLXNpZGUge1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgM3B4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudDpub3QoOmVtcHR5KSB7XHJcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpdGgtYmcge1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvMS5KUEdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWRyb3Bkb3duIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNjVjMzcsICMwOTcxM2YsICMxMzg3NDcsICMyMjlkNGMsICMzM2I0NTEpO1xyXG59XHJcblxyXG4ubmF2LWE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtZWRpdW1vcmNoaWQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwge1xyXG4gIG1heC13aWR0aDogbm9uZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLm5hdi1tYXQtaWNvbiB7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbi5hY3RpdmUtbGluayB7XHJcbiAgYm9yZGVyLWxlZnQ6IGxpbWVncmVlbiA0cHggc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG4uZXhwLWxpbmUtaGVpZ3RoIHtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLm1hdC1saXN0IC5tYXQtbGlzdC1pdGVtLFxyXG4ubWF0LWxpc3QgLm1hdC1saXN0LW9wdGlvbixcclxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSxcclxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3Qtb3B0aW9uLFxyXG4ubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtLFxyXG4ubWF0LXNlbGVjdGlvbi1saXN0IC5tYXQtbGlzdC1vcHRpb24ge1xyXG4gIGhlaWdodDogMzhweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/module/module.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/module/module.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 90vh;\">\r\n\r\n  <!-- =================================fxShow=\"true\" fxHide.gt-sm============= Header Bar ========================================= -->\r\n  <mat-toolbar>\r\n\r\n    <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <mat-icon>school</mat-icon> &nbsp;\r\n    <span>My school</span>\r\n    <span class=\"example-spacer\"></span>\r\n\r\n    <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n      <span href=\"javascript:void(0)\" [matMenuTriggerFor]=\"menu\" style=\"cursor: pointer;\">\r\n        {{user.firstName}}\r\n        <mat-icon style=\"font-size: 20px;\">account_circle</mat-icon>\r\n        <mat-icon>keyboard_arrow_down</mat-icon>\r\n      </span>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <div class=\"text-center profile-dropdown pt-2 text-white\">\r\n          <a>\r\n            <img class=\"rounded-circle mx-auto d-block\" src=\"./assets/images/1.JPG\" width=\"100\">\r\n          </a>\r\n          <p class=\"lead mb-0\">{{user.firstName}} {{user.lastName}}</p>\r\n          <p>{{user.email}}</p>\r\n          <mat-divider></mat-divider>\r\n          <mat-divider></mat-divider>\r\n        </div>\r\n        <br>\r\n        <button mat-menu-item>\r\n          <mat-icon>account_box</mat-icon>\r\n          <span>Profile</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"logout()\">\r\n          <mat-icon>power_settings_new</mat-icon>\r\n          <span>Sign out</span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n\r\n\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container fxFlexFill>\r\n\r\n\r\n    <!-- ======================================= Side nav bar ========================================= -->\r\n    <mat-sidenav #sidenav [(opened)]=\"opened\" [(mode)]=\"mode\" class=\"shadow\">\r\n\r\n      <!--  <div class=\"w-100 pl-5 mt-3 mb-4\" style=\"color: crimson\">\r\n        <p class=\"\">Side Navigation <mat-icon>near_me</mat-icon>\r\n        </p>\r\n      </div> -->\r\n      <!-- ===================fxShow=\"true\" fxHide.gt-md=\"true\"======================= Mobile device ===================================== \r\n      <div>\r\n        <div class=\"my-2\" fxLayout=\"column\">\r\n          <div class=\"with-bg\"></div>\r\n          <div class=\"text-center\">\r\n            <a>\r\n              <img class=\"rounded mx-auto d-block\" src=\"./assets/images/1.JPG\" width=\"100\">\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2 py-3 text-white\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"7px\">\r\n          <div>\r\n            <a>\r\n              <span class=\"lead\">Priyo kumar</span>\r\n            </a>\r\n          </div>\r\n          <div>\r\n            <a>\r\n              <span class=\"\">priyon999@gmail.com</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>-->\r\n      <!-- ================================================================================ -->\r\n\r\n      <!-- ======================================= Module Section ========================================= -->\r\n      <div class=\"mt-3\">\r\n\r\n        <div *ngFor=\"let sideNav of sideNavs\">\r\n          <mat-nav-list *ngIf=\"sideNav.hasSubmenu === false\">\r\n            <a mat-list-item class=\"ml-2\" [routerLink]=\"[sideNav.path]\" routerLinkActive='active-link'>\r\n              <mat-icon class=\"nav-mat-icon\">{{sideNav.icon}}</mat-icon>&nbsp; <div>{{sideNav.title}}</div>\r\n            </a>\r\n          </mat-nav-list>\r\n\r\n          <mat-accordion multi=\"true\" [displayMode]=\"displayMode\" *ngIf=\"sideNav.hasSubmenu === true\">\r\n            <mat-expansion-panel class=\"no-shadow\">\r\n              <mat-expansion-panel-header fxLayout=\"row\" [expandedHeight]=\"expandHeight\" [collapsedHeight]=\"collapseHeight\">\r\n                <mat-panel-title>\r\n                  <mat-icon class=\"nav-mat-icon exp-line-heigth\">{{sideNav.icon}}</mat-icon>&nbsp; <div class=\"exp-line-heigth\">{{sideNav.title}}</div>\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <mat-nav-list class=\"ml-0\" dense>\r\n                <mat-list-item *ngFor=\"let submenu of sideNav.submenu\" [routerLink]=\"[submenu.path]\" routerLinkActive='active-link'>\r\n                  {{submenu.title}}\r\n                  <!-- <button mat-icon-button class=\"mr-3\">\r\n                    <mat-icon>info</mat-icon>\r\n                  </button> -->\r\n                </mat-list-item>\r\n              </mat-nav-list>\r\n            </mat-expansion-panel>\r\n\r\n          </mat-accordion>\r\n        </div>\r\n        <!-- ======================================= Mobile logout ========================================= -->\r\n        <mat-nav-list fxHide.gt-md=\"true\" (click)=\"logout()\">\r\n\r\n          <a mat-list-item class=\"ml-2\" style=\"font-size:15px;\">\r\n            <mat-icon>dashboard</mat-icon>&nbsp; Sign out\r\n          </a>\r\n        </mat-nav-list>\r\n      </div>\r\n      <!-- ================================================================================ -->\r\n    </mat-sidenav>\r\n\r\n\r\n    <!-- ======================================= Content ========================================= -->\r\n    <mat-sidenav-content>\r\n      <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n\r\n\r\n\r\n  </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/components/module/module.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/module/module.component.ts ***!
  \*******************************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var src_app_service_side_nav_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/side-nav-service.service */ "./src/app/service/side-nav-service.service.ts");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_service_user_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/user-service.service */ "./src/app/service/user-service.service.ts");







var ModuleComponent = /** @class */ (function () {
    function ModuleComponent(media, userService, sideNavService, http) {
        var _this = this;
        this.userService = userService;
        this.sideNavService = sideNavService;
        this.http = http;
        this.showFiller = false;
        this.opened = true;
        this.mode = 'side';
        this.expandHeight = '42px';
        this.collapseHeight = '42px';
        this.displayMode = 'flat';
        this.overlap = false;
        this.sideNavs = [];
        this.watcher = media.media$.subscribe(function (change) {
            if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
                _this.opened = false;
                _this.mode = 'over';
            }
            else {
                _this.opened = true;
                _this.mode = 'side';
            }
        });
    }
    ModuleComponent.prototype.ngOnInit = function () {
        this.user = this.userService.loginUser();
        this.getRoles();
    };
    ModuleComponent.prototype.getRoles = function () {
        var _this = this;
        this.rolesSubscription = this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].SECURITY + "/" + this.user.id + "/roles").subscribe(function (data) {
            _this.roles = data["data"];
            var menus = _this.sideNavService.getMenusByRoles(_this.roles);
            _this.sideNavs = menus;
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    ModuleComponent.prototype.logout = function () {
        this.userService.logout();
    };
    ModuleComponent.prototype.ngOnDestroy = function () {
        this.watcher.unsubscribe();
        this.rolesSubscription.unsubscribe();
    };
    ModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-module',
            template: __webpack_require__(/*! ./module.component.html */ "./src/app/components/module/module.component.html"),
            styles: [__webpack_require__(/*! ./module.component.css */ "./src/app/components/module/module.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"],
            src_app_service_user_service_service__WEBPACK_IMPORTED_MODULE_6__["UserServiceService"],
            src_app_service_side_nav_service_service__WEBPACK_IMPORTED_MODULE_3__["SideNavServiceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ModuleComponent);
    return ModuleComponent;
}());



/***/ }),

/***/ "./src/app/components/security/security.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/security/security.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\r\n    background-color: #7b1fa2 !important;\r\n    color: #ffffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWN1cml0eS9zZWN1cml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY3VyaXR5L3NlY3VyaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/security/security.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/security/security.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\r\n    <mat-toolbar-row>\r\n      <mat-icon class=\"example-icon\">account_balance</mat-icon>\r\n      <span>My School</span>\r\n      <span class=\"example-spacer\"></span>\r\n    </mat-toolbar-row>\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/security/security.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/security/security.component.ts ***!
  \***********************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SecurityComponent = /** @class */ (function () {
    function SecurityComponent() {
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    SecurityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-security',
            template: __webpack_require__(/*! ./security.component.html */ "./src/app/components/security/security.component.html"),
            styles: [__webpack_require__(/*! ./security.component.css */ "./src/app/components/security/security.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecurityComponent);
    return SecurityComponent;
}());



/***/ }),

/***/ "./src/app/model/apiEndpoint.ts":
/*!**************************************!*\
  !*** ./src/app/model/apiEndpoint.ts ***!
  \**************************************/
/*! exports provided: ApiEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiEndpoint", function() { return ApiEndpoint; });
var ApiEndpoint = /** @class */ (function () {
    function ApiEndpoint() {
    }
    ApiEndpoint.BASE_URL = "http://www.pesl.org.in:8080";
    ApiEndpoint.SECURITY = ApiEndpoint.BASE_URL + "/security";
    ApiEndpoint.LOGIN = ApiEndpoint.BASE_URL + "/security/login";
    ApiEndpoint.EMPLOYEES = ApiEndpoint.BASE_URL + "/employees";
    ApiEndpoint.ADMISSIONS = ApiEndpoint.BASE_URL + "/admission-fees";
    ApiEndpoint.STUDENTS = ApiEndpoint.BASE_URL + "/students";
    ApiEndpoint.ADDMISSION_FEE_MAINTENANCE = ApiEndpoint.BASE_URL + "/maintenance/admission-fees";
    ApiEndpoint.EXPENSES = ApiEndpoint.BASE_URL + "/expenses";
    ApiEndpoint.INCOMES = ApiEndpoint.BASE_URL + "/incomes";
    ApiEndpoint.ROLES = ApiEndpoint.BASE_URL + "/roles";
    ApiEndpoint.USERS = ApiEndpoint.BASE_URL + "/users";
    ApiEndpoint.EMPLOYEE_SALARY = ApiEndpoint.BASE_URL + "/salaries";
    ApiEndpoint.EMPLOYEE_ATTENDENCES = ApiEndpoint.BASE_URL + "/employee-attendences";
    ApiEndpoint.PAY_SALARY = ApiEndpoint.BASE_URL + "/pay-salaries";
    ApiEndpoint.DOCUMENT = ApiEndpoint.BASE_URL + "/document";
    return ApiEndpoint;
}());



/***/ }),

/***/ "./src/app/model/constants.ts":
/*!************************************!*\
  !*** ./src/app/model/constants.ts ***!
  \************************************/
/*! exports provided: UserRole, userRoles, BloodGroups, Relgions, Nationalities, Communities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoles", function() { return userRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodGroups", function() { return BloodGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Relgions", function() { return Relgions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nationalities", function() { return Nationalities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Communities", function() { return Communities; });
var UserRole = /** @class */ (function () {
    function UserRole() {
    }
    UserRole.SUPER_ADMIN = "SUPER_ADMIN";
    UserRole.ADMIN = "ADMIN";
    UserRole.CLERK = "CLERK";
    return UserRole;
}());

var userRoles = [
    { key: UserRole.SUPER_ADMIN, value: "Super admin" },
    { key: UserRole.ADMIN, value: "Admin" },
    { key: UserRole.CLERK, value: "Clerk" }
];
var BloodGroups = [
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-"
];
var Relgions = [
    "Sanamahism",
    "Hinduism",
    "Islam",
    "Christian",
    "Others"
];
var Nationalities = [
    "Indian"
];
var Communities = [
    "General",
    "SC/ST",
    "OBC",
    "Others"
];


/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
                _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/service/login-auth-guard-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/login-auth-guard-service.service.ts ***!
  \*************************************************************/
/*! exports provided: LoginAuthGuardServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAuthGuardServiceService", function() { return LoginAuthGuardServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-service.service */ "./src/app/service/user-service.service.ts");




var LoginAuthGuardServiceService = /** @class */ (function () {
    function LoginAuthGuardServiceService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginAuthGuardServiceService.prototype.canActivate = function (route, state) {
        var user = this.userService.loginUser();
        if (user) {
            return true;
        }
        else {
            var redirectUrl = state.url;
            this.router.navigate(["/security/login"], { queryParams: { redirectUrl: redirectUrl } });
            return false;
        }
    };
    LoginAuthGuardServiceService.prototype.canLoad = function (route, segments) {
        console.log(segments);
        var user = this.userService.loginUser();
        if (user) {
            if (route.path === "")
                return false;
            return true;
        }
        else {
            var redirectUrl_1 = "";
            segments.map(function (segment) { return segment.path; }).forEach(function (path) {
                redirectUrl_1 += "/" + path;
            });
            this.router.navigate([""], { queryParams: { redirectUrl: redirectUrl_1 } });
            return false;
        }
    };
    LoginAuthGuardServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginAuthGuardServiceService);
    return LoginAuthGuardServiceService;
}());



/***/ }),

/***/ "./src/app/service/prelogin-gaurd.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/prelogin-gaurd.service.ts ***!
  \***************************************************/
/*! exports provided: PreloginGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloginGaurdService", function() { return PreloginGaurdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-service.service */ "./src/app/service/user-service.service.ts");




var PreloginGaurdService = /** @class */ (function () {
    function PreloginGaurdService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    PreloginGaurdService.prototype.canActivate = function (route, state) {
        var user = this.userService.loginUser();
        if (user) {
            this.router.navigate(["/dashboard"]);
            return false;
        }
        else {
            return true;
        }
    };
    PreloginGaurdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PreloginGaurdService);
    return PreloginGaurdService;
}());



/***/ }),

/***/ "./src/app/service/side-nav-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/side-nav-service.service.ts ***!
  \*****************************************************/
/*! exports provided: SideNavServiceService, allSideNavs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavServiceService", function() { return SideNavServiceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allSideNavs", function() { return allSideNavs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideNavServiceService = /** @class */ (function () {
    function SideNavServiceService() {
    }
    SideNavServiceService.prototype.getMenusByRoles = function (roles) {
        if (!roles)
            return null;
        var allMenus = [];
        roles.forEach(function (role) {
            var menus = role.menus;
            if (menus) {
                menus.forEach(function (menu) {
                    allMenus.push(menu);
                });
            }
        });
        var filterMenus = [];
        allMenus.forEach(function (menu) {
            if (filterMenus.length == 0)
                filterMenus.push(menu);
            else {
                var index = filterMenus.findIndex(function (elmnt) { return elmnt.title == menu.title; });
                if (index >= 0) {
                    if (menu.hasSubmenu) {
                        var dedupMenu_1 = filterMenus[index];
                        menu.submenu.forEach(function (submenu) {
                            if (dedupMenu_1.submenu) {
                                var ddindx = dedupMenu_1.submenu.findIndex(function (dedupSubmenu) { return dedupSubmenu.title == submenu.title; });
                                if (ddindx < 0)
                                    dedupMenu_1.submenu.push(submenu);
                            }
                        });
                    }
                }
                else
                    filterMenus.push(menu);
            }
        });
        filterMenus.forEach(function (elmnt) {
            if (elmnt.submenu)
                elmnt.submenu.sort(function (a, b) { return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0); });
        });
        filterMenus.sort(function (a, b) { return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0); });
        return filterMenus;
    };
    SideNavServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideNavServiceService);
    return SideNavServiceService;
}());

var allSideNavs = [
    { id: 1, order: 1, path: "/dashboard", title: "Dashboard", icon: "dashboard", hasSubmenu: false, submenu: [] },
    {
        id: 2, order: 2, path: "", title: "Employee Management", icon: "account_box", hasSubmenu: true, submenu: [
            { id: 1, order: 1, path: "/employee/list", title: "Employee", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 2, order: 2, path: "/employee/attendence-list", title: "Attendence", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 3, order: 3, path: "/employee/salaries", title: "Salary", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 4, order: 4, path: "/employee/pay-salaries", title: "Salary payment", icon: "dashboard", hasSubmenu: false, submenu: [] },
        ]
    },
    {
        id: 3, order: 3, path: "", title: "Student Management", icon: "wc", hasSubmenu: true, submenu: [
            { id: 1, order: 1, path: "/student/list", title: "Student", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 2, order: 2, path: "/student/admissions", title: "Admission", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 3, order: 3, path: "/student/attendences", title: "Attendence", icon: "dashboard", hasSubmenu: false, submenu: [] },
        ]
    },
    {
        id: 4, order: 4, path: "", title: "Incomes & Expenses", icon: "dashboard", hasSubmenu: true, submenu: [
            { id: 4, order: 4, path: "/income-expense/expenses", title: "Expense", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 5, order: 5, path: "/income-expense/incomes", title: "Income", icon: "dashboard", hasSubmenu: false, submenu: [] },
        ]
    },
    {
        id: 5, order: 5, path: "", title: "Maintenance", icon: "enhanced_encryption", hasSubmenu: true, submenu: [
            { id: 1, order: 1, path: "/maintenance/admission-fees", title: "Admission Fee Structure", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 2, order: 2, path: "/maintenance/classes", title: "Class", icon: "dashboard", hasSubmenu: false, submenu: [] },
        ]
    },
    {
        id: 6, order: 6, path: "", title: "Security", icon: "fingerprint", hasSubmenu: true, submenu: [
            { id: 1, order: 1, path: "/security/users", title: "User", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 2, order: 2, path: "/security/user-audit", title: "Usern Audit", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 3, order: 3, path: "/security/change-password", title: "Change Password", icon: "dashboard", hasSubmenu: false, submenu: [] },
            { id: 4, order: 4, path: "/security/roles", title: "Roles", icon: "dashboard", hasSubmenu: false, submenu: [] },
        ]
    },
];


/***/ }),

/***/ "./src/app/service/user-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/user-service.service.ts ***!
  \*************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/constants */ "./src/app/model/constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserServiceService = /** @class */ (function () {
    function UserServiceService(router) {
        this.router = router;
        this.loginStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    UserServiceService.prototype.hasLoginedObs = function () {
        var user = this.loginUser();
        if (user)
            this.loginStatusSubject.next(true);
        return this.loginStatusSubject.asObservable();
    };
    UserServiceService.prototype.setHasLogined = function (hasLogined) {
        this.loginStatusSubject.next(hasLogined);
    };
    UserServiceService.prototype.userRoles = function () {
        return _model_constants__WEBPACK_IMPORTED_MODULE_2__["userRoles"];
    };
    UserServiceService.prototype.loginUser = function () {
        var userStr = this.getCookie("USER");
        if (!userStr)
            return null;
        else
            return JSON.parse(this.getCookie("USER"));
    };
    UserServiceService.prototype.loginUserRole = function () {
        var role;
        var user = JSON.parse(this.getCookie("USER"));
        if (user && user.roles) {
            role = user.roles[0].name;
        }
        return role;
    };
    UserServiceService.prototype.logout = function () {
        this.deleteCookie("USER");
        this.setHasLogined(false);
        this.router.navigate([""]);
    };
    // ===============COOKIES==================
    //set Cookie
    UserServiceService.prototype.setCookie = function (key, value) {
        var d = new Date();
        d.setHours(d.getHours() + 1);
        var expires = "expires=" + d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    };
    UserServiceService.prototype.getCookie = function (key) {
        var name = key + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    UserServiceService.prototype.deleteCookie = function (key) {
        document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; Path=/';
    };
    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserServiceService);
    return UserServiceService;
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

module.exports = __webpack_require__(/*! D:\Practical\github\myschool\myschool-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map