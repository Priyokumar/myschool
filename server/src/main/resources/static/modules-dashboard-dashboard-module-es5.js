(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.html ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>admin-dashboard works!</p>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.scss": 
        /*!**********************************************************************************!*\
          !*** ./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.scss ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
          \********************************************************************************/
        /*! exports provided: AdminDashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () { return AdminDashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AdminDashboardComponent = /** @class */ (function () {
                function AdminDashboardComponent() {
                }
                AdminDashboardComponent.prototype.ngOnInit = function () {
                };
                return AdminDashboardComponent;
            }());
            AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.scss")).default]
                })
            ], AdminDashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/dashboard/dashboard.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
          \*******************************************************/
        /*! exports provided: DashboardModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function () { return DashboardModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/modules/dashboard/admin-dashboard/admin-dashboard.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                { path: '', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"] }
            ];
            var DashboardModule = /** @class */ (function () {
                function DashboardModule() {
                }
                return DashboardModule;
            }());
            DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                    ]
                })
            ], DashboardModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-dashboard-dashboard-module-es2015.js.map
//# sourceMappingURL=modules-dashboard-dashboard-module-es5.js.map
//# sourceMappingURL=modules-dashboard-dashboard-module-es5.js.map