(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-employees-module"],{

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.css":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlLWF0dGVuZGVuY2UvZW1wbG95ZWUtYXR0ZW5kZW5jZS1jcmVhdGUtZWRpdC9lbXBsb3llZS1hdHRlbmRlbmNlLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  employee-attendence-create-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: EmployeeAttendenceCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAttendenceCreateEditComponent", function() { return EmployeeAttendenceCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeeAttendenceCreateEditComponent = /** @class */ (function () {
    function EmployeeAttendenceCreateEditComponent() {
    }
    EmployeeAttendenceCreateEditComponent.prototype.ngOnInit = function () {
    };
    EmployeeAttendenceCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-attendence-create-edit',
            template: __webpack_require__(/*! ./employee-attendence-create-edit.component.html */ "./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-attendence-create-edit.component.css */ "./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeeAttendenceCreateEditComponent);
    return EmployeeAttendenceCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlLWF0dGVuZGVuY2UvZW1wbG95ZWUtYXR0ZW5kZW5jZS1saXN0L2VtcGxveWVlLWF0dGVuZGVuY2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Employee Attendence</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/employee/attendence-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Attendence\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"empAttdDataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.date}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDeleteRow(row.id)\">\r\n              <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"empAttdColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: empAttdColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: EmployeeAttendenceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAttendenceListComponent", function() { return EmployeeAttendenceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var EmployeeAttendenceListComponent = /** @class */ (function () {
    function EmployeeAttendenceListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.empAttdColumns = ["id", "date", "action"];
        this.empAttds = [];
    }
    EmployeeAttendenceListComponent.prototype.ngOnInit = function () {
        this.getEmpAttds();
    };
    EmployeeAttendenceListComponent.prototype.getEmpAttds = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].EMPLOYEE_ATTENDENCES).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.empAttds = resp.data;
                _this.empAttdDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.empAttds);
                if (!_this.empAttds)
                    _this.errorMessage = "No attendence found";
            }
            else {
                _this.errorMessage = resp.apiMessage.detail;
            }
        }, function (err) {
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
            console.error(err);
        });
    };
    EmployeeAttendenceListComponent.prototype.onClickRow = function (empAttdId) {
        this.router.navigate(["/employee/attendences/" + empAttdId + "/view"]);
    };
    EmployeeAttendenceListComponent.prototype.onDeleteRow = function (empAttdId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].EMPLOYEE_ATTENDENCES + "/" + empAttdId).subscribe(function (data) {
            _this.empAttdDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
            _this.getEmpAttds();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    EmployeeAttendenceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-attendence-list',
            template: __webpack_require__(/*! ./employee-attendence-list.component.html */ "./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-attendence-list.component.css */ "./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeeAttendenceListComponent);
    return EmployeeAttendenceListComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlLWF0dGVuZGVuY2UvZW1wbG95ZWUtYXR0ZW5kZW5jZS12aWV3L2VtcGxveWVlLWF0dGVuZGVuY2Utdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: EmployeeAttendenceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAttendenceViewComponent", function() { return EmployeeAttendenceViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");






var EmployeeAttendenceViewComponent = /** @class */ (function () {
    function EmployeeAttendenceViewComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.employeesColumns = ["id", "name", "action"];
        this.employees = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.empAttdId = params.empAttdId;
        });
    }
    EmployeeAttendenceViewComponent.prototype.ngOnInit = function () {
        this.getEmpAttd();
    };
    EmployeeAttendenceViewComponent.prototype.getEmpAttd = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].EMPLOYEE_ATTENDENCES + "/" + this.empAttdId).subscribe(function (data) {
            _this.empAttd = data["data"];
            _this.employees = _this.empAttd.employees;
            _this.employeesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.employees);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    EmployeeAttendenceViewComponent.prototype.delete = function () {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].EMPLOYEE_ATTENDENCES + "/" + this.empAttdId).subscribe(function (data) {
            _this.router.navigate(["/employee/attendences"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    EmployeeAttendenceViewComponent.prototype.edit = function () {
        this.router.navigate(["/employee/attendences/" + this.empAttdId + "/edit"]);
    };
    EmployeeAttendenceViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-attendence-view',
            template: __webpack_require__(/*! ./employee-attendence-view.component.html */ "./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.html"),
            styles: [__webpack_require__(/*! ./employee-attendence-view.component.css */ "./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EmployeeAttendenceViewComponent);
    return EmployeeAttendenceViewComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-appearance-fill .mat-form-field-infix {\r\n  padding: 0 0.75em 0 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZXMvZW1wbG95ZWUvZW1wbG95ZWUtY3JlYXRlLWVkaXQvZW1wbG95ZWUtY3JlYXRlLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLWNyZWF0ZS1lZGl0L2VtcGxveWVlLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAgMC43NWVtIDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Add Employees</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-cancel\" routerLink=\"/employee/list\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!employeeForm.valid'>\r\n        <mat-icon>save_alt</mat-icon>&nbsp;Save Employee\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\">\r\n    <mat-tab-group dynamicHeight mat-align-tabs=\"center\">\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n          <span style=\"font-size: 13px;\">General Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Basic Info</p>\r\n            <hr>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>First name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"firstName\">\r\n              <mat-error *ngIf=\"firstName.hasError('required')\">\r\n                First name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Middle name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"middleName\">\r\n              <mat-error *ngIf=\"middleName.hasError('required')\">\r\n                Middle name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Last name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"lastName\">\r\n              <mat-error *ngIf=\"lastName.hasError('required')\">\r\n                Last name is <strong>required</strong>\r\n              </mat-error>\r\n\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Gender</mat-label>\r\n              <mat-select placeholder=\"Status\" [formControl]=\"genderFormCrtl\">\r\n                <mat-option *ngFor=\"let option of genders\" [value]=\"option.value\">\r\n                  {{option.value}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"employeeType.hasError('required')\">\r\n                Employee Type is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Email</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"email\">\r\n              <mat-error *ngIf=\"email.hasError('required')\">\r\n                Email is <strong>required</strong>\r\n              </mat-error>\r\n              <mat-error *ngIf=\"email.hasError('email') && !email.hasError('required')\">\r\n                Please enter a valid email\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Mobile No</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"mobileNo\">\r\n              <mat-error *ngIf=\"mobileNo.hasError('required')\">\r\n                Mobile No is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Status</mat-label>\r\n              <mat-select placeholder=\"Status\" [formControl]=\"status\">\r\n                <mat-option *ngFor=\"let option of employeeStatuses\" [value]=\"option\">\r\n                  {{option}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"status.hasError('required')\">\r\n                Status is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Date of birth</mat-label>\r\n              <input matInput [matDatepicker]=\"dobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"dob\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dobt\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dobt disabled=\"false\"></mat-datepicker>\r\n              <mat-error *ngIf=\"dob.hasError('required')\">\r\n                Date of birth is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Joining Date</mat-label>\r\n              <input matInput [matDatepicker]=\"joiningDatet\" placeholder=\"mm/dd/yyyy\" [formControl]=\"joiningDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"joiningDatet\"></mat-datepicker-toggle>\r\n              <mat-datepicker #joiningDatet></mat-datepicker>\r\n              <mat-error *ngIf=\"joiningDate.hasError('required')\">\r\n                Joining Date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Employee Type</mat-label>\r\n              <mat-select placeholder=\"Status\" [formControl]=\"employeeType\">\r\n                <mat-option *ngFor=\"let option of employeeTypes\" [value]=\"option\">\r\n                  {{option}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"employeeType.hasError('required')\">\r\n                Employee Type is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Designation</mat-label>\r\n              <mat-select placeholder=\"Status\" [formControl]=\"designation\">\r\n                <mat-option *ngFor=\"let option of designations\" [value]=\"option\">\r\n                  {{option}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"designation.hasError('required')\">\r\n                Designation is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- ============== Personal Info ===================== -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Personal Info</p>\r\n            <hr>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Pan Card</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"panCard\">\r\n              <mat-error *ngIf=\"panCard.hasError('required')\">\r\n                Pan Card is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Aadhaar Number</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"aadharCard\">\r\n              <mat-error *ngIf=\"aadharCard.hasError('required')\">\r\n                Aadhaar Number is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Voter ID</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"voterId\">\r\n              <mat-error *ngIf=\"voterId.hasError('required')\">\r\n                Voter ID is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Driving Licence</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"drivingLicence\">\r\n              <mat-error *ngIf=\"drivingLicence.hasError('required')\">\r\n                Driving Licence is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon>contact_phone</mat-icon>\r\n          <span style=\"font-size: 13px;\">Communication Address</span>\r\n        </ng-template>\r\n\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Correspondent Address</p>\r\n            <hr>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>First line</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"corrFirstLine\">\r\n              <mat-error *ngIf=\"corrFirstLine.hasError('required')\">\r\n                First line is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Second line</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"corrSecondLine\">\r\n              <mat-error *ngIf=\"corrSecondLine.hasError('required')\">\r\n                Second line is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Country</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"corrCountry\">\r\n              <mat-error *ngIf=\"corrCountry.hasError('required')\">\r\n                Country is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>State</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"corrState\">\r\n              <mat-error *ngIf=\"corrState.hasError('required')\">\r\n                State is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>District</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"corrDistrict\">\r\n              <mat-error *ngIf=\"corrDistrict.hasError('required')\">\r\n                District is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Permanent Address</p>\r\n            <hr>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>First line</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"permtFirstLine\">\r\n              <mat-error *ngIf=\"permtFirstLine.hasError('required')\">\r\n                First line is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Second line</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"permtSecondLine\">\r\n              <mat-error *ngIf=\"permtSecondLine.hasError('required')\">\r\n                Second line is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Country</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"permtCountry\">\r\n              <mat-error *ngIf=\"permtCountry.hasError('required')\">\r\n                Country is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>State</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"permtState\">\r\n              <mat-error *ngIf=\"permtState.hasError('required')\">\r\n                State is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>District</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"permtDistrict\">\r\n              <mat-error *ngIf=\"permtDistrict.hasError('required')\">\r\n                District is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon>insert_drive_file</mat-icon>\r\n          <span style=\"font-size: 13px;\">Documents and others</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Highest Qualification</p>\r\n            <hr>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Qualification Name</mat-label>\r\n              <input matInput placeholder=\"Qualification Name\" [formControl]=\"qualificationNameFormCtl\">\r\n              <mat-error *ngIf=\"qualificationNameFormCtl.hasError('required')\">\r\n                Qualification Name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Board / University</mat-label>\r\n              <input matInput placeholder=\"Board / University\" [formControl]=\"boardFormCtl\">\r\n              <mat-error *ngIf=\"boardFormCtl.hasError('required')\">\r\n                Board / University is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Institue / University</mat-label>\r\n              <input matInput placeholder=\"Institue / University\" [formControl]=\"schoolInstitueFormCtl\">\r\n              <mat-error *ngIf=\"schoolInstitueFormCtl.hasError('required')\">\r\n                Institue / University is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Start date</mat-label>\r\n              <input matInput [matDatepicker]=\"startDate\" placeholder=\"mm/dd/yyyy\" [formControl]=\"startYearFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #startDate></mat-datepicker>\r\n              <mat-error *ngIf=\"startYearFormCtl.hasError('required')\">\r\n                Start date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Pass out Date</mat-label>\r\n              <input matInput [matDatepicker]=\"endDate\" placeholder=\"mm/dd/yyyy\" [formControl]=\"passOutYearFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #endDate disabled=\"false\"></mat-datepicker>\r\n              <mat-error *ngIf=\"passOutYearFormCtl.hasError('required')\">\r\n                Pass out Date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Score (Percentage)</mat-label>\r\n              <input matInput placeholder=\"Score (Percentage)\" [formControl]=\"scoreFormCtl\">\r\n              <mat-error *ngIf=\"passOutYearFormCtl.hasError('required')\">\r\n                Score (Percentage) is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Last Employee History</p>\r\n            <hr>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Employer Name </mat-label>\r\n              <input matInput placeholder=\"Employer Name\" [formControl]=\"employerNameFormCtl\">\r\n              <mat-error *ngIf=\"employerNameFormCtl.hasError('required')\">\r\n                Employer Name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Address</mat-label>\r\n              <input matInput placeholder=\"Address\" [formControl]=\"addressFormCtl\">\r\n              <mat-error *ngIf=\"addressFormCtl.hasError('required')\">\r\n                Address is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Start date</mat-label>\r\n              <input matInput [matDatepicker]=\"empStartDate\" placeholder=\"mm/dd/yyyy\" [formControl]=\"startDateFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"empStartDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #empStartDate></mat-datepicker>\r\n              <mat-error *ngIf=\"startDateFormCtl.hasError('required')\">\r\n                Start date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>End Date</mat-label>\r\n              <input matInput [matDatepicker]=\"empEndDate\" placeholder=\"mm/dd/yyyy\" [formControl]=\"endDateFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"empEndDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #empEndDate></mat-datepicker>\r\n              <mat-error *ngIf=\"endDateFormCtl.hasError('required')\">\r\n                End date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Designation</mat-label>\r\n              <input matInput placeholder=\"Designation\" [formControl]=\"empHistDesignationFormCtl\">\r\n              <mat-error *ngIf=\"empHistDesignationFormCtl.hasError('required')\">\r\n                Designation is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EmployeeCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateEditComponent", function() { return EmployeeCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee */ "./src/app/components/employees/employee/employee-create-edit/employee.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");









var EmployeeCreateEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmployeeCreateEditComponent, _super);
    function EmployeeCreateEditComponent(http, router, dialog, activatedRoute) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.router = router;
        _this.dialog = dialog;
        _this.activatedRoute = activatedRoute;
        _this.activatedRoute.params.subscribe(function (params) {
            _this.empId = params.empId;
        });
        return _this;
    }
    EmployeeCreateEditComponent.prototype.ngOnInit = function () {
        if (this.empId)
            this.getEmployee();
    };
    EmployeeCreateEditComponent.prototype.getEmployee = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_8__["ApiEndpoint"].EMPLOYEES + "/" + this.empId).subscribe(function (data) {
            resp = data;
            _this.employee = resp.data;
            _this.setEmployeeForm();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    EmployeeCreateEditComponent.prototype.uploadPhoto = function (file) {
        console.log(file);
    };
    EmployeeCreateEditComponent.prototype.save = function () {
        var _this = this;
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]("en-US");
        var employeePayloadData = {
            id: null,
            firstName: this.firstName.value,
            middleName: this.middleName.value,
            lastName: this.lastName.value,
            gender: this.genderFormCrtl.value,
            email: this.email.value,
            mobileNo: this.mobileNo.value,
            status: this.status.value,
            dob: datePipe.transform(this.dob.value, 'MM/dd/yyyy'),
            joiningDate: datePipe.transform(this.joiningDate.value, 'MM/dd/yyyy'),
            employeeType: this.employeeType.value,
            designation: this.designation.value,
            personalInfo: {
                id: this.pid.value,
                panCard: this.panCard.value,
                aadharCard: this.aadharCard.value,
                voterId: this.voterId.value,
                drivingLicence: this.drivingLicence.value
            },
            correspondentAddress: {
                id: this.corAddId.value,
                firstLine: this.corrFirstLine.value,
                secondLine: this.corrSecondLine.value,
                country: this.corrCountry.value,
                state: this.corrState.value,
                district: this.corrDistrict.value
            },
            permanentAddress: {
                id: this.permAddId.value,
                firstLine: this.permtFirstLine.value,
                secondLine: this.permtSecondLine.value,
                country: this.permtCountry.value,
                state: this.permtState.value,
                district: this.permtDistrict.value
            },
            highestQualification: {
                id: this.acaIdFormCtl.value,
                name: this.qualificationNameFormCtl.value,
                board: this.boardFormCtl.value,
                schoolInstitue: this.schoolInstitueFormCtl.value,
                startYear: datePipe.transform(this.startYearFormCtl.value, 'MM/dd/yyyy'),
                passOutYear: datePipe.transform(this.passOutYearFormCtl.value, 'MM/dd/yyyy'),
                score: this.scoreFormCtl.value,
                highestQualification: null,
            },
            lastEmployeeHistory: {
                id: this.empHistIdFormCtl.value,
                employerName: this.employerNameFormCtl.value,
                address: this.addressFormCtl.value,
                startDate: datePipe.transform(this.startDateFormCtl.value, 'MM/dd/yyyy'),
                endDate: datePipe.transform(this.endDateFormCtl.value, 'MM/dd/yyyy'),
                designation: this.empHistDesignationFormCtl.value,
            }
        };
        if (this.empId) {
            employeePayloadData.id = this.empId;
        }
        this.saveOrUpdateHttpObservable(this.empId, employeePayloadData).subscribe(function (data) {
            _this.hasSubmitted = true;
            _this.router.navigate(["/employee/" + data["actionMessage"] + "/view"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    EmployeeCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (empdId, employeePayloadData) {
        if (this.empId) {
            return this.http.put(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_8__["ApiEndpoint"].EMPLOYEES + "/" + empdId, employeePayloadData);
        }
        else {
            return this.http.post(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_8__["ApiEndpoint"].EMPLOYEES, employeePayloadData);
        }
    };
    EmployeeCreateEditComponent.prototype.setEmployeeForm = function () {
        this.firstName.setValue(this.employee.firstName);
        this.middleName.setValue(this.employee.middleName);
        this.lastName.setValue(this.employee.lastName);
        this.genderFormCrtl.setValue(this.employee.gender);
        this.email.setValue(this.employee.email);
        this.mobileNo.setValue(this.employee.mobileNo);
        this.status.setValue(this.employee.status);
        this.dob.setValue(moment__WEBPACK_IMPORTED_MODULE_7__(this.employee.dob));
        this.joiningDate.setValue(moment__WEBPACK_IMPORTED_MODULE_7__(this.employee.joiningDate));
        this.employeeType.setValue(this.employee.employeeType);
        this.designation.setValue(this.employee.designation);
        var pinfo = this.employee.personalInfo;
        if (pinfo) {
            this.pid.setValue(pinfo.id);
            this.panCard.setValue(pinfo.panCard);
            this.aadharCard.setValue(pinfo.aadharCard);
            this.voterId.setValue(pinfo.voterId);
            this.drivingLicence.setValue(pinfo.drivingLicence);
        }
        var corAddr = this.employee.correspondentAddress;
        if (corAddr) {
            this.corAddId.setValue(corAddr.id);
            this.corrFirstLine.setValue(corAddr.firstLine);
            this.corrSecondLine.setValue(corAddr.secondLine);
            this.corrCountry.setValue(corAddr.country);
            this.corrState.setValue(corAddr.state);
            this.corrDistrict.setValue(corAddr.district);
        }
        var permAddr = this.employee.permanentAddress;
        if (permAddr) {
            this.permAddId.setValue(permAddr.id);
            this.permtFirstLine.setValue(permAddr.firstLine);
            this.permtSecondLine.setValue(permAddr.secondLine);
            this.permtCountry.setValue(permAddr.country);
            this.permtState.setValue(permAddr.state);
            this.permtDistrict.setValue(permAddr.district);
        }
        var highestQualification = this.employee.highestQualification;
        if (highestQualification) {
            this.acaIdFormCtl.setValue(highestQualification.id);
            this.qualificationNameFormCtl.setValue(highestQualification.name);
            this.boardFormCtl.setValue(highestQualification.board);
            this.schoolInstitueFormCtl.setValue(highestQualification.schoolInstitue);
            this.scoreFormCtl.setValue(highestQualification.score);
            this.startYearFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_7__(highestQualification.startYear));
            this.passOutYearFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_7__(highestQualification.passOutYear));
        }
        var lastEmployeeHistory = this.employee.lastEmployeeHistory;
        if (lastEmployeeHistory) {
            this.empHistIdFormCtl.setValue(lastEmployeeHistory.id);
            this.employerNameFormCtl.setValue(lastEmployeeHistory.employerName);
            this.addressFormCtl.setValue(lastEmployeeHistory.address);
            this.startDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_7__(lastEmployeeHistory.startDate));
            this.endDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_7__(lastEmployeeHistory.endDate));
            this.empHistDesignationFormCtl.setValue(lastEmployeeHistory.designation);
        }
    };
    EmployeeCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-create-edit',
            template: __webpack_require__(/*! ./employee-create-edit.component.html */ "./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-create-edit.component.css */ "./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.css"), __webpack_require__(/*! ../../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EmployeeCreateEditComponent);
    return EmployeeCreateEditComponent;
}(_employee__WEBPACK_IMPORTED_MODULE_5__["Employee"]));



/***/ }),

/***/ "./src/app/components/employees/employee/employee-create-edit/employee.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-create-edit/employee.ts ***!
  \********************************************************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/employeeModels */ "./src/app/model/employeeModels.ts");
/* harmony import */ var src_app_model_student_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/student.model */ "./src/app/model/student.model.ts");



var Employee = /** @class */ (function () {
    function Employee() {
        this.hasSubmitted = false;
        this.genders = src_app_model_student_model__WEBPACK_IMPORTED_MODULE_2__["Genders"];
        this.employeeStatuses = [src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["EmployeeStatus"].IN_ACTIVE, src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["EmployeeStatus"].ACTIVE, src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["EmployeeStatus"].EXPIRED];
        this.designations = [src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["Designation"].TEACHING_STAFF, src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["Designation"].FINANCE, src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["Designation"].CLERK, src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["Designation"].PRINCIPAL, src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["Designation"].MANAGING_COMMITEE];
        this.employeeTypes = [src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["EmployeeType"].CONTRACT, src_app_model_employeeModels__WEBPACK_IMPORTED_MODULE_1__["EmployeeType"].PERMANENT];
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.middleName = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.genderFormCrtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]);
        this.mobileNo = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]);
        this.status = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.dob = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.joiningDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.employeeType = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.designation = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        // Personal Info
        this.pid = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.panCard = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.aadharCard = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.voterId = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.drivingLicence = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        // Last Employee History
        this.empHistIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.employerNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.addressFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.startDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.endDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.empHistDesignationFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        // Highest Qualification
        this.acaIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.qualificationNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.boardFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.schoolInstitueFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.startYearFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.passOutYearFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.scoreFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        // Correspondence Address
        this.corAddId = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.corrFirstLine = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.corrSecondLine = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.corrCountry = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.corrState = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.corrDistrict = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        // Permanent Address
        this.permAddId = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.permtFirstLine = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.permtSecondLine = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.permtCountry = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.permtState = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.permtDistrict = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.employeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            firstName: this.firstName,
            middleName: this.middleName,
            lastName: this.lastName,
            email: this.email,
            status: this.status,
            dob: this.dob,
            joiningDate: this.joiningDate,
            employeeType: this.employeeType,
            designation: this.designation,
            // Personal Info
            panCard: this.panCard,
            aadharCard: this.aadharCard,
            voterId: this.voterId,
            drivingLicence: this.drivingLicence,
            // Correspondence Address
            corrFirstLine: this.corrFirstLine,
            corrSecondLine: this.corrSecondLine,
            corrCountry: this.corrCountry,
            corrState: this.corrState,
            corrDistrict: this.corrDistrict,
            // Permanent Address
            permtFirstLine: this.permtFirstLine,
            permtSecondLine: this.permtSecondLine,
            permtCountry: this.permtCountry,
            permtState: this.permtState,
            permtDistrict: this.permtDistrict,
            // Last Employee History
            employerName: this.employerNameFormCtl,
            address: this.addressFormCtl,
            startDate: this.startDateFormCtl,
            endDate: this.endDateFormCtl,
            empHistDesignation: this.empHistDesignationFormCtl,
            // Highest Qualification
            qualificationName: this.qualificationNameFormCtl,
            board: this.boardFormCtl,
            schoolInstitue: this.schoolInstitueFormCtl,
            startYear: this.startYearFormCtl,
            passOutYear: this.passOutYearFormCtl,
            score: this.scoreFormCtl
        });
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/components/employees/employee/employee-list/employee-list.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-list/employee-list.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-card:hover {\r\n  background: paleturquoise;\r\n  cursor: pointer;\r\n}\r\n\r\n.emp-card-header {\r\n  background: #e9e7e7;\r\n  padding: 10px;\r\n}\r\n\r\n.emp-detail {\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.emp-row {\r\n  padding-bottom: 20px !important;\r\n}\r\n\r\n.no-data {\r\n  height: 50vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.name-class:hover {\r\n  color: cornflowerblue;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-fill .mat-form-field-infix {\r\n  padding: 0 0.75em 0 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXBsb3llZXMvZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcC1jYXJkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBwYWxldHVycXVvaXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVtcC1jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2U5ZTdlNztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZW1wLWRldGFpbCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmVtcC1yb3cge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1kYXRhIHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmFtZS1jbGFzczpob3ZlciB7XHJcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAgMC43NWVtIDAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/employees/employee/employee-list/employee-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-list/employee-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-3\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Employees</span>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n      <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n        <mat-icon matSuffix>filter_list</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-4 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/employee/create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;Add Employee\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!-- Employess -->\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n      <!-- Table -->\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"employeesDataSource\" matSort class=\"\">\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.name}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"designation\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Desigination</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.designation}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.status}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDeleteEmployee(row.id)\">\r\n              <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"employeesColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: employeesColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/employee/employee-list/employee-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-list/employee-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.employeesColumns = ["id", "name", "designation", "status", "action"];
        this.employees = [];
        this.basicEmployeeDetails = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeeListComponent.prototype.getEmployees = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].EMPLOYEES).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.employees = resp.data;
                _this.setBasicEmployeeDetails();
                if (!_this.employees)
                    _this.errorMessage = "No Employee found";
            }
            else {
                _this.errorMessage = resp.apiMessage.detail;
            }
        }, function (err) {
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
            console.error(err);
        });
    };
    EmployeeListComponent.prototype.onClickRow = function (empId) {
        this.router.navigate(["/employee/" + empId + "/view"]);
    };
    EmployeeListComponent.prototype.onDeleteEmployee = function (empId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].EMPLOYEES + "/" + empId).subscribe(function (data) {
            _this.employees = [];
            _this.employeesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]([]);
            _this.getEmployees();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    EmployeeListComponent.prototype.setBasicEmployeeDetails = function () {
        var _this = this;
        this.employees.forEach(function (employee) {
            var fname = employee.firstName ? employee.firstName : "";
            var mname = employee.middleName ? employee.middleName : "";
            var lname = employee.lastName ? employee.lastName : "";
            var name = fname + " " + mname + " " + lname;
            var basicEmployeeDetail = {
                designation: employee.designation,
                id: employee.id,
                name: name,
                status: employee.status
            };
            _this.basicEmployeeDetails.push(basicEmployeeDetail);
        });
        this.employeesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.basicEmployeeDetails);
    };
    EmployeeListComponent.prototype.applyFilter = function (filterValue) {
        this.employeesDataSource.filter = filterValue.trim().toLowerCase();
    };
    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/components/employees/employee/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.css */ "./src/app/components/employees/employee/employee-list/employee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/employee/employee-view/employee-view.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-view/employee-view.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlL2VtcGxveWVlLXZpZXcvZW1wbG95ZWUtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/employee/employee-view/employee-view.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-view/employee-view.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Employee Details</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" routerLink=\"/employee/list\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>&nbsp;Back\r\n      </button>\r\n      <button class=\"btn btn-cancel\" (click)=\"delete()\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Delete\r\n      </button>\r\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\r\n        <mat-icon>edit</mat-icon>&nbsp;Edit\r\n      </button>\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/employee/create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;Add New Employee\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\" *ngIf=\"employee\">\r\n    <mat-tab-group>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n          <span style=\"font-size: 13px;\">General Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Basic Info</p>\r\n            <hr>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 pb-2\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <app-file-upload type=\"image\" bgButton=\"#029734\" color=\"white\" width=\"100\" height=\"100\" [imageSrc]=\"profilePicUrl\"\r\n                  (onSelectFile)=\"onSelectFile($event,'PROFILE_PIC')\"></app-file-upload>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <p>First name : {{employee.firstName}}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p>Middle name : {{employee.middleName}}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p>Last name : {{employee.lastName}}</p>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <p>Gender : {{employee.gender}}</p>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <p>Email : {{employee.email}}</p>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <p>Mobile No : {{employee.mobileNo}}</p>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <p>Status : {{employee.status}}</p>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <p>Date of birth : {{employee.dob}}</p>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <p>Joining Date : {{employee.joiningDate}}</p>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <p>Employee Type : {{employee.employeeType}}</p>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-4\">\r\n                    <p>Designation : {{employee.designation}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- ============== Personal Info ===================== -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Personal Info</p>\r\n            <hr>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <p>Pan Card : {{employee.personalInfo?.panCard}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <p>Aadhaar Number : {{employee.personalInfo?.aadharCard}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <p>Voter ID : {{employee.personalInfo?.voterId}}</p>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <p>Driving Licence : {{employee.personalInfo?.drivingLicence}}</p>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon>contact_phone</mat-icon>\r\n          <span style=\"font-size: 13px;\">Communication Address</span>\r\n        </ng-template>\r\n\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Correspondent Address</p>\r\n            <hr>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>First line : {{employee.correspondentAddress?.firstLine}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Second line : {{employee.correspondentAddress?.secondLine}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Country : {{employee.correspondentAddress?.country}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>State : {{employee.correspondentAddress?.state}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>District : {{employee.correspondentAddress?.district}}</p>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Permanent Address</p>\r\n            <hr>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>First line : {{employee.correspondentAddress?.firstLine}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Second line : {{employee.correspondentAddress?.secondLine}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Country : {{employee.correspondentAddress?.country}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>State : {{employee.correspondentAddress?.state}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>District : {{employee.correspondentAddress?.district}}</p>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon>insert_drive_file</mat-icon>\r\n          <span style=\"font-size: 13px;\">Documents and others</span>\r\n        </ng-template>\r\n        <div class=\"row pt-2\">\r\n\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Highest Qualification</p>\r\n            <hr>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Qualification Name : {{employee.highestQualification?.name}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Board / University : {{employee.highestQualification?.board}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Institue / University : {{employee.highestQualification?.schoolInstitue}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Start date : {{employee.highestQualification?.startYear}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Pass out Date : {{employee.highestQualification?.passOutYear}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Score (Percentage) : {{employee.highestQualification?.score}}</p>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Last Employee History</p>\r\n            <hr>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Employer Name : {{employee.lastEmployeeHistory?.employerName}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Address : {{employee.lastEmployeeHistory?.address}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Start date : {{employee.lastEmployeeHistory?.startDate}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>End Date : {{employee.lastEmployeeHistory?.endDate}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Designation : {{employee.lastEmployeeHistory?.designation}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row pt-2\">\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Documents</p>\r\n            <hr>\r\n          </div>\r\n          <!-- Aadhaar Card -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <p class=\"pt-2\">Aadhaar Card</p>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"aadhaarCardUrl\">\r\n                    <span><a [href]=\"aadhaarCardUrl\">Click here to download</a></span>\r\n                    <span>\r\n                      <button mat-icon-button color=\"primary\" (click)=\"editDoc('AADHAAR_CARD')\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-5\" *ngIf=\"!aadhaarCardUrl\">\r\n                    <app-file-upload (onSelectFile)=\"onSelectFile($event,'AADHAAR_CARD')\" *ngIf=\"!aadhaarCardUrl\"\r\n                      bgButton=\"#029734\" color=\"white\"></app-file-upload>\r\n                  </div>\r\n                  <div class=\"col-md-3\" *ngIf=\"!aadhaarCardUrl\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"cancel('AADHAAR_CARD')\">\r\n                      <mat-icon style=\"color:#ee3f64\">cancel</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- Pan card -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <p class=\"pt-2\">Pan Card</p>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"panCardUrl\">\r\n                    <span><a [href]=\"panCardUrl\">Click here to download</a></span>\r\n                    <span>\r\n                      <button mat-icon-button color=\"primary\" (click)=\"editDoc('PAN_CARD')\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-5\" *ngIf=\"!panCardUrl\">\r\n                    <app-file-upload (onSelectFile)=\"onSelectFile($event,'PAN_CARD')\" *ngIf=\"!panCardUrl\" bgButton=\"#029734\"\r\n                      color=\"white\"></app-file-upload>\r\n                  </div>\r\n                  <div class=\"col-md-3\" *ngIf=\"!panCardUrl\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"cancel('PAN_CARD')\">\r\n                      <mat-icon style=\"color:#ee3f64\">cancel</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- Voter Card -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <p class=\"pt-2\">Voter Card</p>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"voterIdUrl\">\r\n                    <span><a [href]=\"voterIdUrl\">Click here to download</a></span>\r\n                    <span>\r\n                      <button mat-icon-button color=\"primary\" (click)=\"editDoc('VOTER_ID')\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-5\" *ngIf=\"!voterIdUrl\">\r\n                    <app-file-upload (onSelectFile)=\"onSelectFile($event,'VOTER_ID')\" *ngIf=\"!voterIdUrl\" bgButton=\"#029734\"\r\n                      color=\"white\"></app-file-upload>\r\n                  </div>\r\n                  <div class=\"col-md-3\" *ngIf=\"!voterIdUrl\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"cancel('VOTER_ID')\">\r\n                      <mat-icon style=\"color:#ee3f64\">cancel</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- Driving License -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <p class=\"pt-2\">Driving License</p>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"drivingLicenseUrl\">\r\n                    <span><a [href]=\"drivingLicenseUrl\">Click here to download</a></span>\r\n                    <span>\r\n                      <button mat-icon-button color=\"primary\" (click)=\"editDoc('DRIVING_LICENSE')\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-5\" *ngIf=\"!drivingLicenseUrl\">\r\n                    <app-file-upload (onSelectFile)=\"onSelectFile($event,'DRIVING_LICENSE')\" *ngIf=\"!drivingLicenseUrl\"\r\n                      bgButton=\"#029734\" color=\"white\"></app-file-upload>\r\n                  </div>\r\n                  <div class=\"col-md-3\" *ngIf=\"!drivingLicenseUrl\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"cancel('DRIVING_LICENSE')\">\r\n                      <mat-icon style=\"color:#ee3f64\">cancel</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- X Certificate -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <p class=\"pt-2\">X Certificate</p>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"xCertUrl\">\r\n                    <span><a [href]=\"xCertUrl\">Click here to download</a></span>\r\n                    <span>\r\n                      <button mat-icon-button color=\"primary\" (click)=\"editDoc('X_CERT')\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-5\" *ngIf=\"!xCertUrl\">\r\n                    <app-file-upload (onSelectFile)=\"onSelectFile($event,'X_CERT')\" *ngIf=\"!xCertUrl\" bgButton=\"#029734\"\r\n                      color=\"white\"></app-file-upload>\r\n                  </div>\r\n                  <div class=\"col-md-3\" *ngIf=\"!xCertUrl\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"cancel('X_CERT')\">\r\n                      <mat-icon style=\"color:#ee3f64\">cancel</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- XII Certificate -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <p class=\"pt-2\">XII Certificate</p>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"xIICertUrl\">\r\n                    <span><a [href]=\"xIICertUrl\">Click here to download</a></span>\r\n                    <span>\r\n                      <button mat-icon-button color=\"primary\" (click)=\"editDoc('XII_CERT')\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-5\" *ngIf=\"!xIICertUrl\">\r\n                    <app-file-upload (onSelectFile)=\"onSelectFile($event,'XII_CERT')\" *ngIf=\"!xIICertUrl\" bgButton=\"#029734\"\r\n                      color=\"white\"></app-file-upload>\r\n                  </div>\r\n                  <div class=\"col-md-3\" *ngIf=\"!xIICertUrl\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"cancel('XII_CERT')\">\r\n                      <mat-icon style=\"color:#ee3f64\">cancel</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- Graduation Certificate -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <p class=\"pt-2\">Graduation Certificate</p>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"graduationCertUrl\">\r\n                    <span><a [href]=\"graduationCertUrl\">Click here to download</a></span>\r\n                    <span>\r\n                      <button mat-icon-button color=\"primary\" (click)=\"editDoc('GRADUATION_CERT')\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-5\" *ngIf=\"!graduationCertUrl\">\r\n                    <app-file-upload (onSelectFile)=\"onSelectFile($event,'GRADUATION_CERT')\" *ngIf=\"!graduationCertUrl\"\r\n                      bgButton=\"#029734\" color=\"white\"></app-file-upload>\r\n                  </div>\r\n                  <div class=\"col-md-3\" *ngIf=\"!graduationCertUrl\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"cancel('GRADUATION_CERT')\">\r\n                      <mat-icon style=\"color:#ee3f64\">cancel</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n          <!-- Post Graduation Certificate -->\r\n          <div class=\"col-md-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <p class=\"pt-2\">Post Graduation Certificate</p>\r\n              </div>\r\n              <div class=\"col-md-10\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\" *ngIf=\"postGraduationCertUrl\">\r\n                    <span><a [href]=\"postGraduationCertUrl\">Click here to download</a></span>\r\n                    <span>\r\n                      <button mat-icon-button color=\"primary\" (click)=\"editDoc('POST_GRADUATION_CERT')\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </button>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-5\" *ngIf=\"!postGraduationCertUrl\">\r\n                    <app-file-upload (onSelectFile)=\"onSelectFile($event,'POST_GRADUATION_CERT')\" *ngIf=\"!postGraduationCertUrl\"\r\n                      bgButton=\"#029734\" color=\"white\"></app-file-upload>\r\n                  </div>\r\n                  <div class=\"col-md-3\" *ngIf=\"!postGraduationCertUrl\">\r\n                    <button mat-icon-button color=\"primary\" (click)=\"cancel('POST_GRADUATION_CERT')\">\r\n                      <mat-icon style=\"color:#ee3f64\">cancel</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n          </div>\r\n\r\n        </div>\r\n      </mat-tab>\r\n\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/employee/employee-view/employee-view.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/employees/employee/employee-view/employee-view.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmployeeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeViewComponent", function() { return EmployeeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_file_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/file-upload.service */ "./src/app/service/file-upload.service.ts");






var EmployeeViewComponent = /** @class */ (function () {
    function EmployeeViewComponent(http, router, activatedRoute, fileUploadService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fileUploadService = fileUploadService;
        this.documentDisplayedColumns = ["id", "name", "type", "documentName"];
        this.documents = [];
        this.profilePicUrl = "/assets/images/avatar.png";
        this.activatedRoute.params.subscribe(function (params) {
            _this.empId = params.empId;
        });
    }
    EmployeeViewComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    EmployeeViewComponent.prototype.getEmployee = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].EMPLOYEES + "/" + this.empId).subscribe(function (data) {
            resp = data;
            _this.employee = resp.data;
            _this.profilePicUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + _this.employee.profilePic.id + "/view";
            var personalInfo = _this.employee.personalInfo;
            if (personalInfo) {
                if (personalInfo.panCardDoc)
                    _this.panCardUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.panCardDoc.id + "/view";
                if (personalInfo.aadharCardDoc)
                    _this.aadhaarCardUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.aadharCardDoc.id + "/view";
                if (personalInfo.voterIdDoc)
                    _this.voterIdUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.voterIdDoc.id + "/view";
                if (personalInfo.drivingLicenceDoc)
                    _this.drivingLicenseUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.drivingLicenceDoc.id + "/view";
                if (personalInfo.xCertDoc)
                    _this.xCertUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.xCertDoc.id + "/view";
                if (personalInfo.xIICertDoc)
                    _this.xIICertUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.xIICertDoc.id + "/view";
                if (personalInfo.graduationCertDoc)
                    _this.graduationCertUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.graduationCertDoc.id + "/view";
                if (personalInfo.postGraduationCertDoc)
                    _this.postGraduationCertUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.postGraduationCertDoc.id + "/view";
            }
            console.log(_this.employee);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    EmployeeViewComponent.prototype.delete = function () {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].EMPLOYEES + "/" + this.empId).subscribe(function (data) {
            _this.router.navigate(["/employee/list"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    EmployeeViewComponent.prototype.edit = function () {
        this.router.navigate(["/employee/" + this.empId + "/edit"]);
    };
    EmployeeViewComponent.prototype.onSelectFile = function (file, type) {
        var _this = this;
        this.fileUploadService.uploadDoc(file, this.empId, "EMPLOYEE", type, type).subscribe(function (event) {
            console.log(event);
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
                _this.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                _this.uploadingFile = false;
                var body = event.body;
                body = JSON.parse(body);
                var docUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + body.actionMessage + "/view";
                _this.setDocUrl(type, docUrl);
                // this.fileUploadService.sendDocUrl(this.docUrl)
                console.log("File has been uploaded");
            }
        }, function (error) {
            console.error(error);
        });
    };
    EmployeeViewComponent.prototype.setDocUrl = function (type, docUrl) {
        if (type === "PROFILE_PIC")
            this.profilePicUrl = docUrl;
        else if (type === "PAN_CARD")
            this.panCardUrl = docUrl;
        else if (type === "AADHAAR_CARD")
            this.aadhaarCardUrl = docUrl;
        else if (type === "VOTER_ID")
            this.voterIdUrl = docUrl;
        else if (type === "DRIVING_LICENSE")
            this.drivingLicenseUrl = docUrl;
        else if (type === "X_CERT")
            this.xCertUrl = docUrl;
        else if (type === "XII_CERT")
            this.xIICertUrl = docUrl;
        else if (type === "GRADUATION_CERT")
            this.graduationCertUrl = docUrl;
        else if (type === "POST_GRADUATION_CERT")
            this.postGraduationCertUrl = docUrl;
    };
    EmployeeViewComponent.prototype.editDoc = function (type) {
        if (type === "PROFILE_PIC")
            this.profilePicUrl = null;
        else if (type === "PAN_CARD")
            this.panCardUrl = null;
        else if (type === "AADHAAR_CARD")
            this.aadhaarCardUrl = null;
        else if (type === "VOTER_ID")
            this.voterIdUrl = null;
        else if (type === "DRIVING_LICENSE")
            this.drivingLicenseUrl = null;
        else if (type === "X_CERT")
            this.xCertUrl = null;
        else if (type === "XII_CERT")
            this.xIICertUrl = null;
        else if (type === "GRADUATION_CERT")
            this.graduationCertUrl = null;
        else if (type === "POST_GRADUATION_CERT")
            this.postGraduationCertUrl = null;
    };
    EmployeeViewComponent.prototype.cancel = function (type) {
        var personalInfo = this.employee.personalInfo;
        if (personalInfo) {
            if (personalInfo.panCardDoc && type === "PAN_CARD")
                this.panCardUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.panCardDoc.id + "/view";
            if (personalInfo.aadharCardDoc && type === "AADHAAR_CARD")
                this.aadhaarCardUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.aadharCardDoc.id + "/view";
            if (personalInfo.voterIdDoc && type === "VOTER_ID")
                this.voterIdUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.voterIdDoc.id + "/view";
            if (personalInfo.drivingLicenceDoc && type === "DRIVING_LICENSE")
                this.drivingLicenseUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.drivingLicenceDoc.id + "/view";
            if (personalInfo.xCertDoc && type === "X_CERT")
                this.xCertUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.xCertDoc.id + "/view";
            if (personalInfo.xIICertDoc && type === "XII_CERT")
                this.xIICertUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.xIICertDoc.id + "/view";
            if (personalInfo.graduationCertDoc && type === "GRADUATION_CERT")
                this.graduationCertUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.graduationCertDoc.id + "/view";
            if (personalInfo.postGraduationCertDoc && type === "POST_GRADUATION_CERT")
                this.postGraduationCertUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].DOCUMENT + "/" + personalInfo.postGraduationCertDoc.id + "/view";
        }
    };
    EmployeeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee-view',
            template: __webpack_require__(/*! ./employee-view.component.html */ "./src/app/components/employees/employee/employee-view/employee-view.component.html"),
            styles: [__webpack_require__(/*! ./employee-view.component.css */ "./src/app/components/employees/employee/employee-view/employee-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_service_file_upload_service__WEBPACK_IMPORTED_MODULE_5__["FileUploadService"]])
    ], EmployeeViewComponent);
    return EmployeeViewComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.css":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3NhbGFyeS1wYXltZW50L3NhbGFyeS1wYXltZW50LWNyZWF0ZS1lZGl0L3NhbGFyeS1wYXltZW50LWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Add Payment</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-cancel\" routerLink=\"/employee/pay-salaries\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!paySalaryForm.valid'>\r\n        <mat-icon>save_alt</mat-icon>&nbsp;Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">Payment Info</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Employee</mat-label>\r\n          <mat-select #selectedEmployee placeholder=\"Employee\" [formControl]=\"employeeFormCtl\" (selectionChange)=\"onSelectEmployee(selectedEmployee.value)\">\r\n            <mat-option *ngFor=\"let option of employees\" [value]=\"option.id\">\r\n              {{option.firstName}} {{option.middleName}} {{option.lastName}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"employeeFormCtl.hasError('required')\">\r\n            Employee is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Salary Amount</mat-label>\r\n          <input matInput placeholder=\"Salary Amount\" [formControl]=\"salaryAmountFormCtl\" readonly=\"readonly\">\r\n          <mat-error *ngIf=\"salaryAmountFormCtl.hasError('required')\">\r\n            Salary Amount is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Paid Amount</mat-label>\r\n          <input matInput placeholder=\"Paid Amount\" [formControl]=\"paidAmountFormCtl\">\r\n          <mat-error *ngIf=\"paidAmountFormCtl.hasError('required')\">\r\n            Paid Amount is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Due Amount</mat-label>\r\n          <input matInput placeholder=\"Due Amount\" [formControl]=\"dueAmountFormCtl\" readonly=\"readonly\">\r\n          <mat-error *ngIf=\"dueAmountFormCtl.hasError('required')\">\r\n            Due Amount is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Payment Date</mat-label>\r\n          <input matInput [matDatepicker]=\"payDate\" placeholder=\"Payment Date\" [formControl]=\"payDateFormCtl\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"payDate\"></mat-datepicker-toggle>\r\n          <mat-datepicker #payDate></mat-datepicker>\r\n          <mat-error *ngIf=\"payDateFormCtl.hasError('required')\">\r\n            Payment Date is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: SalaryPaymentCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryPaymentCreateEditComponent", function() { return SalaryPaymentCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var SalaryPaymentCreateEditComponent = /** @class */ (function () {
    function SalaryPaymentCreateEditComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.employees = [];
        this.idFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null);
        this.nameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.payDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.paidAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.dueAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null);
        this.salaryAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.employeeFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.paySalaryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            employeeFormCtl: this.employeeFormCtl,
            payDateFormCtl: this.payDateFormCtl,
            paidAmountFormCtl: this.paidAmountFormCtl,
            dueAmountFormCtl: this.dueAmountFormCtl,
            salaryAmountFormCtl: this.salaryAmountFormCtl,
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.paySalaryId = params.uid;
            if (_this.paySalaryId) {
                _this.getPaySalary();
            }
        });
        this.paidAmountFormCtl.valueChanges.subscribe(function (paidAmount) {
            var salaryAmount = _this.salaryAmountFormCtl.value;
            _this.dueAmountFormCtl.setValue(salaryAmount - paidAmount);
        });
    }
    SalaryPaymentCreateEditComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    SalaryPaymentCreateEditComponent.prototype.getPaySalary = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].PAY_SALARY + "/" + this.paySalaryId).subscribe(function (data) {
            _this.paySalary = data["data"];
            _this.setForm();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SalaryPaymentCreateEditComponent.prototype.getEmployees = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].EMPLOYEES).subscribe(function (data) {
            _this.employees = data["data"];
        }, function (err) {
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
            console.error(err);
        });
    };
    SalaryPaymentCreateEditComponent.prototype.save = function () {
        var _this = this;
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]("en-US");
        var paySalaryPayload = {
            id: this.idFormCtl.value,
            payDate: datePipe.transform(this.payDateFormCtl.value, 'MM/dd/yyyy'),
            dueAmount: this.dueAmountFormCtl.value,
            employeeSalary: this.selectedEmployeeSalary,
            paidAmount: this.paidAmountFormCtl.value
        };
        this.saveOrUpdateHttpObservable(paySalaryPayload).subscribe(function (data) {
            var apiMessage = data["apiMessage"];
            if (apiMessage.error) {
                _this.errorMessage = apiMessage.detail;
                return;
            }
            _this.router.navigate(["/employee/pay-salaries"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SalaryPaymentCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (paySalaryPayload) {
        if (this.paySalaryId) {
            return this.http.put(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].PAY_SALARY + "/" + this.paySalaryId, paySalaryPayload);
        }
        else {
            return this.http.post(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].PAY_SALARY, paySalaryPayload);
        }
    };
    SalaryPaymentCreateEditComponent.prototype.setForm = function () {
        this.idFormCtl.setValue(this.paySalary.id);
        this.payDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_7__(this.paySalary.payDate));
        this.paidAmountFormCtl.setValue(this.paySalary.paidAmount);
        this.dueAmountFormCtl.setValue(this.paySalary.dueAmount);
        var empSalary = this.paySalary.employeeSalary;
        if (empSalary) {
            this.salaryAmountFormCtl.setValue(empSalary.salaryAmount);
            var emp = empSalary.employee;
            if (emp) {
                var firstName = emp.firstName || "";
                var middleName = emp.middleName || "";
                var lastName = emp.lastName || "";
                this.nameFormCtl.setValue(firstName + " " + middleName + " " + lastName);
                this.employeeFormCtl.setValue(emp.id);
            }
        }
    };
    SalaryPaymentCreateEditComponent.prototype.onSelectEmployee = function (selectedEmployeeId) {
        var employee = this.employees.find(function (elmnt) { return elmnt.id == selectedEmployeeId; });
        var firstName = employee.firstName || "";
        var middleName = employee.middleName || "";
        var lastName = employee.lastName || "";
        this.nameFormCtl.setValue(firstName + " " + middleName + " " + lastName);
        this.getEmployeeSalaryByEmpId(employee.id);
    };
    SalaryPaymentCreateEditComponent.prototype.getEmployeeSalaryByEmpId = function (empId) {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].EMPLOYEE_SALARY + "/" + empId + "/employee").subscribe(function (data) {
            _this.selectedEmployeeSalary = data["data"];
            if (_this.selectedEmployeeSalary)
                _this.salaryAmountFormCtl.setValue(_this.selectedEmployeeSalary.salaryAmount);
        }, function (err) {
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
            console.error(err);
        });
    };
    SalaryPaymentCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-payment-create-edit',
            template: __webpack_require__(/*! ./salary-payment-create-edit.component.html */ "./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./salary-payment-create-edit.component.css */ "./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.css"), __webpack_require__(/*! ../../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SalaryPaymentCreateEditComponent);
    return SalaryPaymentCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3NhbGFyeS1wYXltZW50L3NhbGFyeS1wYXltZW50LWxpc3Qvc2FsYXJ5LXBheW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Salary Payment</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/employee/pay-salary-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;Add Payment\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!-- Employess -->\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n      <!-- Table -->\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"paySalaryDataSource\" matSort class=\"\">\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{getName(row)}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"payDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Pay Date</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.payDate}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"paidAmount\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Paid Amount</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.paidAmount}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"dueAmount\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Due Amount</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.dueAmount}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"salaryAmount\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Salary Amount</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.employeeSalary.salaryAmount}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDelete(row.id)\">\r\n              <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"paySalaryColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: paySalaryColumns ; let i = index;\" (click)=\"onClickRow(row.id)\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SalaryPaymentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryPaymentListComponent", function() { return SalaryPaymentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");






var SalaryPaymentListComponent = /** @class */ (function () {
    function SalaryPaymentListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.paySalaryColumns = ["id", "name", "payDate", "paidAmount", "dueAmount", "salaryAmount", "action"];
        this.paySalaries = [];
    }
    SalaryPaymentListComponent.prototype.ngOnInit = function () {
        this.paySalaryDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
        this.getPaySalaries();
    };
    SalaryPaymentListComponent.prototype.getPaySalaries = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].PAY_SALARY).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.paySalaries = resp.data;
                _this.paySalaryDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.paySalaries);
                if (!_this.paySalaries)
                    _this.errorMessage = "No Employee found";
            }
            else {
                _this.errorMessage = resp.apiMessage.detail;
            }
        }, function (err) {
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
            console.error(err);
        });
    };
    SalaryPaymentListComponent.prototype.onClickRow = function (paySalId) {
        this.router.navigate(["/employee/pay-salaries/" + paySalId + "/view"]);
    };
    SalaryPaymentListComponent.prototype.onDelete = function (paySalId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].EMPLOYEE_SALARY + "/" + paySalId).subscribe(function (data) {
            _this.paySalaries = [];
            _this.paySalaryDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]([]);
            _this.getPaySalaries();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SalaryPaymentListComponent.prototype.getName = function (paySalary) {
        var name = "";
        var emp = paySalary.employeeSalary.employee;
        if (emp) {
            var firstName = emp.firstName || "";
            var middleName = emp.middleName || "";
            var lastName = emp.lastName || "";
            name = firstName + " " + middleName + " " + lastName;
        }
        return name;
    };
    SalaryPaymentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-payment-list',
            template: __webpack_require__(/*! ./salary-payment-list.component.html */ "./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.html"),
            styles: [__webpack_require__(/*! ./salary-payment-list.component.css */ "./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SalaryPaymentListComponent);
    return SalaryPaymentListComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3NhbGFyeS1wYXltZW50L3NhbGFyeS1wYXltZW50LXZpZXcvc2FsYXJ5LXBheW1lbnQtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Pay Salary</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" routerLink=\"/employee/pay-salaries\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>&nbsp;Back\r\n      </button>\r\n      <button class=\"btn btn-cancel\" (click)=\"delete()\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Delete\r\n      </button>\r\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\r\n        <mat-icon>edit</mat-icon>&nbsp;Edit\r\n      </button>\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/employee/pay-salary-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;Add Pay Salary\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\" *ngIf=\"paySalary\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">Pay Salary Info</p>\r\n        <hr>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Salary Amount : {{paySalary.employeeSalary?.salaryAmount}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Paid Amount : {{paySalary.paidAmount}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Due Amount : {{paySalary.dueAmount}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Payment Date : {{paySalary.payDate}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SalaryPaymentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryPaymentViewComponent", function() { return SalaryPaymentViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");





var SalaryPaymentViewComponent = /** @class */ (function () {
    function SalaryPaymentViewComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            _this.paySalaryId = params.paySalId;
        });
    }
    SalaryPaymentViewComponent.prototype.ngOnInit = function () {
        this.getPaySalary();
    };
    SalaryPaymentViewComponent.prototype.getPaySalary = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].PAY_SALARY + "/" + this.paySalaryId).subscribe(function (data) {
            resp = data;
            _this.paySalary = resp.data;
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SalaryPaymentViewComponent.prototype.delete = function () {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].PAY_SALARY + "/" + this.paySalaryId).subscribe(function (data) {
            _this.router.navigate(["/employee/pay-salaries"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SalaryPaymentViewComponent.prototype.edit = function () {
        this.router.navigate(["/employee/pay-salaries/" + this.paySalaryId + "/edit"]);
    };
    SalaryPaymentViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-payment-view',
            template: __webpack_require__(/*! ./salary-payment-view.component.html */ "./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.html"),
            styles: [__webpack_require__(/*! ./salary-payment-view.component.css */ "./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SalaryPaymentViewComponent);
    return SalaryPaymentViewComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3NhbGFyeS9zYWxhcnktY3JlYXRlLWVkaXQvc2FsYXJ5LWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  salary-create-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SalaryCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryCreateEditComponent", function() { return SalaryCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SalaryCreateEditComponent = /** @class */ (function () {
    function SalaryCreateEditComponent() {
    }
    SalaryCreateEditComponent.prototype.ngOnInit = function () {
    };
    SalaryCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-create-edit',
            template: __webpack_require__(/*! ./salary-create-edit.component.html */ "./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./salary-create-edit.component.css */ "./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SalaryCreateEditComponent);
    return SalaryCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/salary/salary-list/salary-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-list/salary-list.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3NhbGFyeS9zYWxhcnktbGlzdC9zYWxhcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/salary/salary-list/salary-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-list/salary-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Employee Salaries</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!-- Employess -->\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n      <!-- Table -->\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"employeeSalaryDataSource\" matSort class=\"\">\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.employee?.firstName}}\r\n              {{row.employee?.middleName}} {{row.employee?.lastName}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"designation\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Desigination</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.employee?.designation}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.employee?.status}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"salary\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Salary</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.salaryAmount}} </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"employeeSalaryColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: employeeSalaryColumns ; let i = index;\" (click)=\"onClickRow(row.id)\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/salary/salary-list/salary-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-list/salary-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SalaryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryListComponent", function() { return SalaryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");






var SalaryListComponent = /** @class */ (function () {
    function SalaryListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.employeeSalaryColumns = ["id", "name", "designation", "status", "salary"];
        this.employeeSalaries = [];
    }
    SalaryListComponent.prototype.ngOnInit = function () {
        this.getEmployeeSalaries();
    };
    SalaryListComponent.prototype.getEmployeeSalaries = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].EMPLOYEE_SALARY).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.employeeSalaries = resp.data;
                _this.employeeSalaryDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.employeeSalaries);
                if (!_this.employeeSalaries)
                    _this.errorMessage = "No Employee found";
            }
            else {
                _this.errorMessage = resp.apiMessage.detail;
            }
        }, function (err) {
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
            console.error(err);
        });
    };
    SalaryListComponent.prototype.onClickRow = function (employeeSalaryId) {
        this.router.navigate(["/employee/salaries/" + employeeSalaryId + "/view"]);
    };
    SalaryListComponent.prototype.onDeleteEmployee = function (employeeSalaryId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].EMPLOYEE_SALARY + "/" + employeeSalaryId).subscribe(function (data) {
            _this.employeeSalaries = [];
            _this.employeeSalaryDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
            _this.getEmployeeSalaries();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SalaryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-list',
            template: __webpack_require__(/*! ./salary-list.component.html */ "./src/app/components/employees/salary/salary-list/salary-list.component.html"),
            styles: [__webpack_require__(/*! ./salary-list.component.css */ "./src/app/components/employees/salary/salary-list/salary-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SalaryListComponent);
    return SalaryListComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/salary/salary-view/salary-view.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-view/salary-view.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3NhbGFyeS9zYWxhcnktdmlldy9zYWxhcnktdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/salary/salary-view/salary-view.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-view/salary-view.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Employee Salary</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" routerLink=\"/employee/salaries\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>&nbsp;Back\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"update()\" *ngIf=\"!updateMode\">\r\n        <mat-icon>add</mat-icon>&nbsp;Update Salary Amount\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"updateSalaryAmount()\" *ngIf=\"updateMode\">\r\n        <mat-icon>add</mat-icon>&nbsp;Update\r\n      </button>\r\n      <button class=\"btn btn-cancel\" (click)=\"cancel()\" *ngIf=\"updateMode\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\" *ngIf=\"empSalary\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">Employee Info</p>\r\n        <hr>\r\n      </div>\r\n      <div class=\"col-md-12 pb-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-2\">\r\n            <img [src]=\"imageUrl\" height=\"150\" width=\"150\" class=\"img-thumbnail\" alt=\"Cinque Terre\">\r\n          </div>\r\n          <div class=\"col-md-10\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4\">\r\n                <p>First Name : {{empSalary.employee?.firstName}}</p>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <p>Middle Name : {{empSalary.employee?.middleName}}</p>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <p>Last Name : {{empSalary.employee?.lastName}}</p>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <p>Status : {{empSalary.employee?.status}}</p>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <p>Designation : {{empSalary.employee?.designation}}</p>\r\n              </div>\r\n\r\n              <div class=\"col-md-12\">\r\n                <p style=\"font-weight: bold; font-size: 14px;\">Salary Info</p>\r\n                <hr>\r\n              </div>\r\n              <div class=\"col-md-4\" *ngIf=\"!updateMode\">\r\n                <p>Salary Amount : {{empSalary.salaryAmount}}</p>\r\n              </div>\r\n              <div class=\"col-md-4\" *ngIf=\"updateMode\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                  <mat-label>Salary Amount</mat-label>\r\n                  <input matInput placeholder=\"Salary Amount\" [formControl]=\"salaryAmountFormCtrl\">\r\n                  <mat-error *ngIf=\"salaryAmountFormCtrl.hasError('required')\">\r\n                    Salary Amount is <strong>required</strong>\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/employees/salary/salary-view/salary-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/employees/salary/salary-view/salary-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SalaryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryViewComponent", function() { return SalaryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SalaryViewComponent = /** @class */ (function () {
    function SalaryViewComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.updateMode = false;
        this.salaryAmountFormCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', null);
        this.activatedRoute.params.subscribe(function (params) {
            _this.empSalaryId = params.salId;
        });
    }
    SalaryViewComponent.prototype.ngOnInit = function () {
        this.getEmployeeSalary();
    };
    SalaryViewComponent.prototype.getEmployeeSalary = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].EMPLOYEE_SALARY + "/" + this.empSalaryId).subscribe(function (data) {
            resp = data;
            _this.empSalary = resp.data;
            _this.imageUrl = src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].DOCUMENT + "/" + _this.empSalary.employee.profilePic.id + "/view";
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SalaryViewComponent.prototype.update = function () {
        this.updateMode = true;
        this.salaryAmountFormCtrl.setValue(this.empSalary.salaryAmount);
    };
    SalaryViewComponent.prototype.cancel = function () {
        this.updateMode = false;
        this.salaryAmountFormCtrl.setValue(null);
        this.errorMessage = null;
    };
    SalaryViewComponent.prototype.updateSalaryAmount = function () {
        var _this = this;
        var employeeSalary = {
            employee: null,
            id: null,
            salaryAmount: this.salaryAmountFormCtrl.value
        };
        this.http.put(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].EMPLOYEE_SALARY + "/" + this.empSalaryId + "/update-salary", employeeSalary).subscribe(function (data) {
            _this.updateMode = false;
            _this.getEmployeeSalary();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SalaryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-view',
            template: __webpack_require__(/*! ./salary-view.component.html */ "./src/app/components/employees/salary/salary-view/salary-view.component.html"),
            styles: [__webpack_require__(/*! ./salary-view.component.css */ "./src/app/components/employees/salary/salary-view/salary-view.component.css"), __webpack_require__(/*! ../../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SalaryViewComponent);
    return SalaryViewComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.css":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3N0YWZmL3RlYWNoaW5nLXN0YWZmL3RlYWNoaW5nLXN0YWZmLWNyZWF0ZS1lZGl0L3RlYWNoaW5nLXN0YWZmLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  teaching-staff-create-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TeachingStaffCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingStaffCreateEditComponent", function() { return TeachingStaffCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeachingStaffCreateEditComponent = /** @class */ (function () {
    function TeachingStaffCreateEditComponent() {
    }
    TeachingStaffCreateEditComponent.prototype.ngOnInit = function () {
    };
    TeachingStaffCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teaching-staff-create-edit',
            template: __webpack_require__(/*! ./teaching-staff-create-edit.component.html */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./teaching-staff-create-edit.component.css */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeachingStaffCreateEditComponent);
    return TeachingStaffCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3N0YWZmL3RlYWNoaW5nLXN0YWZmL3RlYWNoaW5nLXN0YWZmLWxpc3QvdGVhY2hpbmctc3RhZmYtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  teaching-staff-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: TeachingStaffListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingStaffListComponent", function() { return TeachingStaffListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeachingStaffListComponent = /** @class */ (function () {
    function TeachingStaffListComponent() {
    }
    TeachingStaffListComponent.prototype.ngOnInit = function () {
    };
    TeachingStaffListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teaching-staff-list',
            template: __webpack_require__(/*! ./teaching-staff-list.component.html */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.html"),
            styles: [__webpack_require__(/*! ./teaching-staff-list.component.css */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeachingStaffListComponent);
    return TeachingStaffListComponent;
}());



/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wbG95ZWVzL3N0YWZmL3RlYWNoaW5nLXN0YWZmL3RlYWNoaW5nLXN0YWZmLXZpZXcvdGVhY2hpbmctc3RhZmYtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  teaching-staff-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: TeachingStaffViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingStaffViewComponent", function() { return TeachingStaffViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeachingStaffViewComponent = /** @class */ (function () {
    function TeachingStaffViewComponent() {
    }
    TeachingStaffViewComponent.prototype.ngOnInit = function () {
    };
    TeachingStaffViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teaching-staff-view',
            template: __webpack_require__(/*! ./teaching-staff-view.component.html */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.html"),
            styles: [__webpack_require__(/*! ./teaching-staff-view.component.css */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeachingStaffViewComponent);
    return TeachingStaffViewComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/file-upload/file-upload.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/shared/file-upload/file-upload.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon {\r\n  vertical-align: middle !important;\r\n  font-size: 20px;\r\n}\r\n\r\n.btn {\r\n  padding: 0.165rem 0.75rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZmlsZS11cGxvYWQvZmlsZS11cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMC4xNjVyZW0gMC43NXJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/file-upload/file-upload.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/file-upload/file-upload.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div *ngIf=\"type==='image'\" style=\"text-align: center\">\r\n    <img [src]=\"imageSrc\" [height]=\"height\" [width]=\"width\" class=\"img-thumbnail\" alt=\"Cinque Terre\" (click)=\"imagePreview()\"\r\n      style=\"cursor: pointer\">\r\n    <label class=\"btn\" [ngStyle]='{\"background\": bgButton,\"margin-top\":\"5px\",\"color\": color}' *ngIf=\"type==='image'\">\r\n      Upload Photo<input type=\"file\" (change)=\"selectFile($event)\" style=\"display: none;\">\r\n    </label>\r\n  </div>\r\n\r\n  <label class=\"btn\" [ngStyle]='{\"background\": bgButton,\"margin-top\":\"5px\",\"color\": color}' *ngIf=\"type !='image'\">\r\n    <span>Upload <mat-icon>folder_open</mat-icon></span>\r\n    <input type=\"file\" (change)=\"selectFile($event)\" style=\"display: none;\">\r\n  </label>&nbsp;\r\n  <mat-form-field class=\"w-20 mt-2\" *ngIf=\"type !='image'\">\r\n    <mat-label>File</mat-label>\r\n    <input matInput placeholder=\"Placeholder\" [formControl]=\"fileFctrl\" readonly=\"readonly\">\r\n    <mat-error *ngIf=\"fileFctrl.hasError('required')\">\r\n      File is <strong>required</strong>\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/file-upload/file-upload.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/file-upload/file-upload.component.ts ***!
  \************************************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image-preview/image-preview.component */ "./src/app/components/shared/image-preview/image-preview.component.ts");





var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(dialog) {
        this.dialog = dialog;
        this.onSelectFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadedFile = "/assets/images/avatar.png";
        this.fileFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", null);
    }
    FileUploadComponent.prototype.ngOnInit = function () {
    };
    FileUploadComponent.prototype.selectFile = function (event) {
        this.selectedFiles = null;
        this.selectedFiles = event.target.files;
        this.onSelectFile.emit(this.selectedFiles.item(0));
        this.fileFctrl.setValue(this.selectedFiles.item(0).name);
    };
    FileUploadComponent.prototype.imagePreview = function () {
        this.dialog.open(_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_4__["ImagePreviewComponent"], { width: '50%', data: this.imageSrc });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUploadComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUploadComponent.prototype, "imageSrc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FileUploadComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FileUploadComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUploadComponent.prototype, "bgButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FileUploadComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileUploadComponent.prototype, "onSelectFile", void 0);
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/components/shared/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.css */ "./src/app/components/shared/file-upload/file-upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/image-preview/image-preview.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/shared/image-preview/image-preview.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2ltYWdlLXByZXZpZXcvaW1hZ2UtcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shared/image-preview/image-preview.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/image-preview/image-preview.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <img [src]=\"imageUrl\" class=\"img-thumbnail\" alt=\"Cinque Terre\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/image-preview/image-preview.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/image-preview/image-preview.component.ts ***!
  \****************************************************************************/
/*! exports provided: ImagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewComponent", function() { return ImagePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ImagePreviewComponent = /** @class */ (function () {
    function ImagePreviewComponent(dialogRef, imageUrl) {
        this.dialogRef = dialogRef;
        this.imageUrl = imageUrl;
    }
    ImagePreviewComponent.prototype.ngOnInit = function () {
    };
    ImagePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-preview',
            template: __webpack_require__(/*! ./image-preview.component.html */ "./src/app/components/shared/image-preview/image-preview.component.html"),
            styles: [__webpack_require__(/*! ./image-preview.component.css */ "./src/app/components/shared/image-preview/image-preview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            String])
    ], ImagePreviewComponent);
    return ImagePreviewComponent;
}());



/***/ }),

/***/ "./src/app/model/employeeModels.ts":
/*!*****************************************!*\
  !*** ./src/app/model/employeeModels.ts ***!
  \*****************************************/
/*! exports provided: EmployeeStatus, EmployeeType, Designation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeStatus", function() { return EmployeeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeType", function() { return EmployeeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Designation", function() { return Designation; });
var EmployeeStatus = /** @class */ (function () {
    function EmployeeStatus() {
    }
    EmployeeStatus.IN_ACTIVE = "In active";
    EmployeeStatus.ACTIVE = "Active";
    EmployeeStatus.EXPIRED = "Expired";
    return EmployeeStatus;
}());

var EmployeeType = /** @class */ (function () {
    function EmployeeType() {
    }
    EmployeeType.CONTRACT = "Contract";
    EmployeeType.PERMANENT = "Permanent";
    return EmployeeType;
}());

var Designation = /** @class */ (function () {
    function Designation() {
    }
    Designation.TEACHING_STAFF = "Teaching staff";
    Designation.CLERK = "Clerk";
    Designation.FINANCE = "Finance";
    Designation.PRINCIPAL = "Principal";
    Designation.MANAGING_COMMITEE = "Managing Commitee";
    return Designation;
}());



/***/ }),

/***/ "./src/app/modules/employees.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/employees.module.ts ***!
  \*********************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_employees_employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/employees/employee/employee-list/employee-list.component */ "./src/app/components/employees/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _components_employees_employee_employee_view_employee_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/employees/employee/employee-view/employee-view.component */ "./src/app/components/employees/employee/employee-view/employee-view.component.ts");
/* harmony import */ var _components_employees_employee_employee_create_edit_employee_create_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/employees/employee/employee-create-edit/employee-create-edit.component */ "./src/app/components/employees/employee/employee-create-edit/employee-create-edit.component.ts");
/* harmony import */ var _components_employees_employee_attendence_employee_attendence_list_employee_attendence_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component */ "./src/app/components/employees/employee-attendence/employee-attendence-list/employee-attendence-list.component.ts");
/* harmony import */ var _components_employees_salary_salary_list_salary_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/employees/salary/salary-list/salary-list.component */ "./src/app/components/employees/salary/salary-list/salary-list.component.ts");
/* harmony import */ var _components_employees_salary_salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/employees/salary/salary-view/salary-view.component */ "./src/app/components/employees/salary/salary-view/salary-view.component.ts");
/* harmony import */ var _components_employees_salary_salary_create_edit_salary_create_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/employees/salary/salary-create-edit/salary-create-edit.component */ "./src/app/components/employees/salary/salary-create-edit/salary-create-edit.component.ts");
/* harmony import */ var _components_employees_salary_payment_salary_payment_list_salary_payment_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/employees/salary-payment/salary-payment-list/salary-payment-list.component */ "./src/app/components/employees/salary-payment/salary-payment-list/salary-payment-list.component.ts");
/* harmony import */ var _components_employees_salary_payment_salary_payment_view_salary_payment_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/employees/salary-payment/salary-payment-view/salary-payment-view.component */ "./src/app/components/employees/salary-payment/salary-payment-view/salary-payment-view.component.ts");
/* harmony import */ var _components_employees_salary_payment_salary_payment_create_edit_salary_payment_create_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component */ "./src/app/components/employees/salary-payment/salary-payment-create-edit/salary-payment-create-edit.component.ts");
/* harmony import */ var _components_employees_staff_teaching_staff_teaching_staff_list_teaching_staff_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-list/teaching-staff-list.component.ts");
/* harmony import */ var _components_employees_staff_teaching_staff_teaching_staff_view_teaching_staff_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-view/teaching-staff-view.component.ts");
/* harmony import */ var _components_employees_staff_teaching_staff_teaching_staff_create_edit_teaching_staff_create_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component */ "./src/app/components/employees/staff/teaching-staff/teaching-staff-create-edit/teaching-staff-create-edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/shared/custom-date/custom-date.module */ "./src/app/components/shared/custom-date/custom-date.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared.module */ "./src/app/modules/shared.module.ts");
/* harmony import */ var _components_employees_employee_attendence_employee_attendence_create_edit_employee_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component */ "./src/app/components/employees/employee-attendence/employee-attendence-create-edit/employee-attendence-create-edit.component.ts");
/* harmony import */ var _components_employees_employee_attendence_employee_attendence_view_employee_attendence_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component */ "./src/app/components/employees/employee-attendence/employee-attendence-view/employee-attendence-view.component.ts");























var routes = [
    // Employee
    { path: "list", component: _components_employees_employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"] },
    { path: ":empId/view", component: _components_employees_employee_employee_view_employee_view_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeViewComponent"] },
    { path: "create", component: _components_employees_employee_employee_create_edit_employee_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeCreateEditComponent"] },
    { path: ":empId/edit", component: _components_employees_employee_employee_create_edit_employee_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeCreateEditComponent"] },
    // Attendence
    { path: "attendences", component: _components_employees_employee_attendence_employee_attendence_list_employee_attendence_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAttendenceListComponent"] },
    { path: "attendences/:empAttdId/view", component: _components_employees_employee_attendence_employee_attendence_list_employee_attendence_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAttendenceListComponent"] },
    { path: "attendence-create", component: _components_employees_employee_attendence_employee_attendence_list_employee_attendence_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAttendenceListComponent"] },
    { path: "attendences/:empAttdId/edit", component: _components_employees_employee_attendence_employee_attendence_list_employee_attendence_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAttendenceListComponent"] },
    // Salary
    { path: "salaries", component: _components_employees_salary_salary_list_salary_list_component__WEBPACK_IMPORTED_MODULE_6__["SalaryListComponent"] },
    { path: "salaries/:salId/view", component: _components_employees_salary_salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_7__["SalaryViewComponent"] },
    { path: "salary-create", component: _components_employees_salary_salary_create_edit_salary_create_edit_component__WEBPACK_IMPORTED_MODULE_8__["SalaryCreateEditComponent"] },
    { path: "salaries/:salId/edit", component: _components_employees_salary_salary_create_edit_salary_create_edit_component__WEBPACK_IMPORTED_MODULE_8__["SalaryCreateEditComponent"] },
    // Salary payment
    { path: "pay-salaries", component: _components_employees_salary_payment_salary_payment_list_salary_payment_list_component__WEBPACK_IMPORTED_MODULE_9__["SalaryPaymentListComponent"] },
    { path: "pay-salaries/:paySalId/view", component: _components_employees_salary_payment_salary_payment_view_salary_payment_view_component__WEBPACK_IMPORTED_MODULE_10__["SalaryPaymentViewComponent"] },
    { path: "pay-salary-create", component: _components_employees_salary_payment_salary_payment_create_edit_salary_payment_create_edit_component__WEBPACK_IMPORTED_MODULE_11__["SalaryPaymentCreateEditComponent"] },
    { path: "pay-salaries/:paySalId/edit", component: _components_employees_salary_payment_salary_payment_create_edit_salary_payment_create_edit_component__WEBPACK_IMPORTED_MODULE_11__["SalaryPaymentCreateEditComponent"] },
    // Teaching staff
    { path: "teaching-staffs", component: _components_employees_staff_teaching_staff_teaching_staff_list_teaching_staff_list_component__WEBPACK_IMPORTED_MODULE_12__["TeachingStaffListComponent"] },
    { path: ":teachstaffid/teaching-staff-view", component: _components_employees_staff_teaching_staff_teaching_staff_view_teaching_staff_view_component__WEBPACK_IMPORTED_MODULE_13__["TeachingStaffViewComponent"] },
    { path: "teaching-staff-create", component: _components_employees_staff_teaching_staff_teaching_staff_create_edit_teaching_staff_create_edit_component__WEBPACK_IMPORTED_MODULE_14__["TeachingStaffCreateEditComponent"] },
    { path: ":teachstaffid/teaching-staff-edit", component: _components_employees_staff_teaching_staff_teaching_staff_create_edit_teaching_staff_create_edit_component__WEBPACK_IMPORTED_MODULE_14__["TeachingStaffCreateEditComponent"] },
];
var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_15__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _components_shared_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_19__["CustomDateModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_20__["SharedModule"]
            ],
            declarations: [
                _components_employees_employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"],
                _components_employees_employee_employee_view_employee_view_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeViewComponent"],
                _components_employees_employee_employee_create_edit_employee_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeCreateEditComponent"],
                _components_employees_employee_attendence_employee_attendence_create_edit_employee_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeAttendenceCreateEditComponent"],
                _components_employees_employee_attendence_employee_attendence_view_employee_attendence_view_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeAttendenceViewComponent"],
                _components_employees_employee_attendence_employee_attendence_list_employee_attendence_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeAttendenceListComponent"],
                _components_employees_salary_salary_list_salary_list_component__WEBPACK_IMPORTED_MODULE_6__["SalaryListComponent"],
                _components_employees_salary_salary_view_salary_view_component__WEBPACK_IMPORTED_MODULE_7__["SalaryViewComponent"],
                _components_employees_salary_salary_create_edit_salary_create_edit_component__WEBPACK_IMPORTED_MODULE_8__["SalaryCreateEditComponent"],
                _components_employees_salary_payment_salary_payment_list_salary_payment_list_component__WEBPACK_IMPORTED_MODULE_9__["SalaryPaymentListComponent"],
                _components_employees_salary_payment_salary_payment_view_salary_payment_view_component__WEBPACK_IMPORTED_MODULE_10__["SalaryPaymentViewComponent"],
                _components_employees_salary_payment_salary_payment_create_edit_salary_payment_create_edit_component__WEBPACK_IMPORTED_MODULE_11__["SalaryPaymentCreateEditComponent"],
                _components_employees_staff_teaching_staff_teaching_staff_list_teaching_staff_list_component__WEBPACK_IMPORTED_MODULE_12__["TeachingStaffListComponent"],
                _components_employees_staff_teaching_staff_teaching_staff_view_teaching_staff_view_component__WEBPACK_IMPORTED_MODULE_13__["TeachingStaffViewComponent"],
                _components_employees_staff_teaching_staff_teaching_staff_create_edit_teaching_staff_create_edit_component__WEBPACK_IMPORTED_MODULE_14__["TeachingStaffCreateEditComponent"],
            ],
            providers: [],
            entryComponents: []
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/modules/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_shared_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/file-upload/file-upload.component */ "./src/app/components/shared/file-upload/file-upload.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/image-preview/image-preview.component */ "./src/app/components/shared/image-preview/image-preview.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/modules/material.module.ts");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            declarations: [_components_shared_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"], _components_shared_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewComponent"]],
            exports: [_components_shared_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["FileUploadComponent"], _components_shared_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewComponent"]],
            entryComponents: [_components_shared_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/service/file-upload.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/file-upload.service.ts ***!
  \************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");





var FileUploadService = /** @class */ (function () {
    function FileUploadService(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    FileUploadService.prototype.sendDocUrl = function (docUrl) {
        this.subject.next({ docUrl: docUrl });
    };
    FileUploadService.prototype.getDocUrl = function () {
        return this.subject.asObservable();
    };
    FileUploadService.prototype.uploadDoc = function (file, id, docFor, type, name) {
        var formdata = new FormData();
        var documentBody = {
            docFor: docFor,
            name: name,
            type: type
        };
        formdata.append('file', file);
        formdata.append("documentBody", JSON.stringify(documentBody));
        var url = _model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].DOCUMENT + "/" + id + "/upload";
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', url, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    FileUploadService.prototype.getExtension = function (fileName) {
        var splits = fileName.split(".");
        return "." + splits[splits.length - 1];
    };
    FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-employees-module.js.map