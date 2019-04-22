(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-security-module"],{

/***/ "./src/app/components/user/change-password/change-password.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/user/change-password/change-password.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/change-password/change-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/user/change-password/change-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  change-password works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/user/change-password/change-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/user/change-password/change-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/components/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/user/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/user/role/menu-dialog/menu-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/user/role/menu-dialog/menu-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yb2xlL21lbnUtZGlhbG9nL21lbnUtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/role/menu-dialog/menu-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user/role/menu-dialog/menu-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 500px\">\r\n  <div class=\"dialg-header w-100\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <span class=\"lead\">Menu</span>\r\n      </div>\r\n      <div class=\"col-md-6 text-right\">\r\n        <button class=\"btn btn-cancel mt-2\" (click)=\"cancel()\">\r\n          <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n        </button>\r\n        <button class=\"btn btn-save mt-2\" (click)=\"add()\">\r\n          <mat-icon>add</mat-icon>&nbsp;Add\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row p-4\">\r\n\r\n    <div class=\"col-md-12 p-0\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n          <p style=\"font-weight: bold; font-size: 14px;\">Menu Info</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Menu</mat-label>\r\n            <mat-select placeholder=\"Menu\" [formControl]=\"idFctrl\">\r\n              <mat-option *ngFor=\"let option of menus\" [value]=\"option.id\">\r\n                {{option.title}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"idFctrl.hasError('required')\">\r\n              Menu is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Title</mat-label>\r\n            <input matInput placeholder=\"Title\" [formControl]=\"titleFctrl\">\r\n            <mat-error *ngIf=\"titleFctrl.hasError('required')\">\r\n              Title is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Order</mat-label>\r\n            <input matInput placeholder=\"Order\" [formControl]=\"orderFctrl\">\r\n            <mat-error *ngIf=\"orderFctrl.hasError('required')\">\r\n              Order is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Icon</mat-label>\r\n            <input matInput placeholder=\"Icon\" [formControl]=\"iconFctrl\">\r\n            <mat-error *ngIf=\"iconFctrl.hasError('required')\">\r\n              Icon is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Has Submenu</mat-label>\r\n            <mat-select placeholder=\"Menu\" [formControl]=\"hasSubmenuFctrl\">\r\n              <mat-option *ngFor=\"let option of hasSubMenus\" [value]=\"option.key\">\r\n                {{option.value}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"hasSubmenuFctrl.hasError('required')\">\r\n              Has Submenu is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 shadow-sm table-header mb-5\">\r\n      <div class=\"no-shadow\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Menu</mat-label>\r\n              <mat-select placeholder=\"Menu\" [formControl]=\"subMenuFctrl\" #submenuinput>\r\n                <mat-option *ngFor=\"let option of subMenusSelect\" [value]=\"option\">\r\n                  {{option.title}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"subMenuFctrl.hasError('required')\">\r\n                Menu is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <button class=\"btn btn-save mt-2\" (click)=\"addSubMenu()\">\r\n              <mat-icon>add</mat-icon>&nbsp;Add Submenu\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <table mat-table [dataSource]=\"subMenuDataSource\" matSort class=\"p\">\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"title\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"order\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Order</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.order}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"icon\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Icon</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.icon}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row; let i = index\" class=\"text-right\">\r\n              <mat-icon (click)=\"onDelete(i)\" style=\"color: firebrick\">close</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"subMenuColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: subMenuColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/role/menu-dialog/menu-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/user/role/menu-dialog/menu-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: MenuDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDialogComponent", function() { return MenuDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_service_side_nav_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/side-nav-service.service */ "./src/app/service/side-nav-service.service.ts");





var MenuDialogComponent = /** @class */ (function () {
    function MenuDialogComponent(dialogRef, data, sideNavService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.sideNavService = sideNavService;
        this.actionMode = "CREATE";
        this.subMenuColumns = ["id", "title", "order", "icon", "action"];
        this.subMenus = [];
        this.menus = src_app_service_side_nav_service_service__WEBPACK_IMPORTED_MODULE_4__["allSideNavs"];
        this.subMenusSelect = [];
        this.hasSubMenus = [{ key: true, value: "Yes" }, { key: false, value: "No" }];
        this.idFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.orderFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.pathFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.titleFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.iconFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.hasSubmenuFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.subMenuFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        dialogRef.disableClose = true;
        this.menuForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "orderFctrl": this.orderFctrl,
            "pathFctrl": this.pathFctrl,
            "titleFctrl": this.titleFctrl,
            "iconFctrl": this.iconFctrl,
            "hasSubmenuFctrl": this.hasSubmenuFctrl
        });
        if (data) {
            this.actionMode = "EDIT";
            this.orderFctrl.setValue(data.order);
            this.pathFctrl.setValue(data.path);
            this.titleFctrl.setValue(data.title);
            this.iconFctrl.setValue(data.icon);
            this.hasSubmenuFctrl.setValue(data.hasSubmenu);
            this.subMenus = data.submenu;
            this.subMenuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.subMenus);
        }
        this.idFctrl.valueChanges.subscribe(function (data) {
            _this.subMenus = [];
            _this.subMenuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.subMenus);
            var menu = src_app_service_side_nav_service_service__WEBPACK_IMPORTED_MODULE_4__["allSideNavs"].find(function (menu) { return menu.id == data; });
            _this.orderFctrl.setValue(menu.order);
            _this.pathFctrl.setValue(menu.path);
            _this.titleFctrl.setValue(menu.title);
            _this.iconFctrl.setValue(menu.icon);
            _this.hasSubmenuFctrl.setValue(menu.hasSubmenu);
            _this.subMenusSelect = menu.submenu;
            if (menu.hasSubmenu === false) {
                _this.subMenuFctrl.setValidators(null);
                _this.subMenuFctrl.updateValueAndValidity();
            }
        });
        this.orderFctrl.disable();
        this.pathFctrl.disable();
        this.titleFctrl.disable();
        this.iconFctrl.disable();
        this.hasSubmenuFctrl.disable();
    }
    MenuDialogComponent.prototype.ngOnInit = function () {
    };
    MenuDialogComponent.prototype.add = function () {
        var menu = {
            id: this.idFctrl.value,
            icon: this.iconFctrl.value,
            order: this.orderFctrl.value,
            path: this.pathFctrl.value,
            title: this.titleFctrl.value,
            hasSubmenu: this.hasSubmenuFctrl.value,
            submenu: this.subMenus,
        };
        this.dialogRef.close(menu);
    };
    MenuDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    MenuDialogComponent.prototype.onDelete = function (index) {
        this.subMenusSelect.push(this.subMenus[index]);
        this.subMenus.splice(index, 1);
        this.subMenuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.subMenus);
    };
    MenuDialogComponent.prototype.addSubMenu = function () {
        var subMenu = this.subMenuFctrl.value;
        var index = this.subMenus.findIndex(function (data) { return data.id == subMenu.id; });
        if (index < 0 && subMenu.id) {
            this.subMenus.push(subMenu);
            this.subMenuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.subMenus);
        }
        this.subMenusSelect = this.subMenusSelect.filter(function (data) { return data.id != subMenu.id; });
    };
    MenuDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-dialog',
            template: __webpack_require__(/*! ./menu-dialog.component.html */ "./src/app/components/user/role/menu-dialog/menu-dialog.component.html"),
            styles: [__webpack_require__(/*! ./menu-dialog.component.css */ "./src/app/components/user/role/menu-dialog/menu-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, src_app_service_side_nav_service_service__WEBPACK_IMPORTED_MODULE_4__["SideNavServiceService"]])
    ], MenuDialogComponent);
    return MenuDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yb2xlL21lbnUtdmlldy1kaWFsb2cvbWVudS12aWV3LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 500px\">\r\n  <div class=\"dialg-header w-100\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <span class=\"lead\">Menu</span>\r\n      </div>\r\n      <div class=\"col-md-6 text-right\">\r\n        <button class=\"btn btn-cancel mt-2\" (click)=\"cancel()\">\r\n          <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row p-4\">\r\n\r\n    <div class=\"col-md-12 p-0\">\r\n      <div class=\"row\" *ngIf=\"menu\">\r\n\r\n        <div class=\"col-md-12\">\r\n          <p style=\"font-weight: bold; font-size: 14px;\">Menu Info</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          Title : {{menu.title}}\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          Order : {{menu.order}}\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          Icon : {{menu.icon}}\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          Has Submenu : {{menu.hasSubmenu}}\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 shadow-sm table-header mb-5\">\r\n      <p class=\"p-2\"><b>Sub menus</b></p>\r\n      <div class=\"no-shadow\">\r\n        <table mat-table [dataSource]=\"subMenuDataSource\" matSort class=\"p\">\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"title\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\r\n            <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"order\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Order</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.order}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"icon\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Icon</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.icon}} </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"subMenuColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: subMenuColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MenuViewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuViewDialogComponent", function() { return MenuViewDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MenuViewDialogComponent = /** @class */ (function () {
    function MenuViewDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.subMenuColumns = ["id", "title", "order", "icon"];
        this.subMenus = [];
        this.subMenus = data.submenu;
        this.subMenuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.subMenus);
    }
    MenuViewDialogComponent.prototype.ngOnInit = function () {
    };
    MenuViewDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    MenuViewDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-view-dialog',
            template: __webpack_require__(/*! ./menu-view-dialog.component.html */ "./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.html"),
            styles: [__webpack_require__(/*! ./menu-view-dialog.component.css */ "./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MenuViewDialogComponent);
    return MenuViewDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/user/role/role-create-edit/role-create-edit.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/role/role-create-edit/role-create-edit.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yb2xlL3JvbGUtY3JlYXRlLWVkaXQvcm9sZS1jcmVhdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/role/role-create-edit/role-create-edit.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/user/role/role-create-edit/role-create-edit.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Role</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-cancel\" routerLink=\"/security/roles\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!roleForm.valid'>\r\n        <mat-icon>save_alt</mat-icon>&nbsp;Save Role\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">Role Info</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Name</mat-label>\r\n          <input matInput placeholder=\"Name\" [formControl]=\"nameFormCtl\">\r\n          <mat-error *ngIf=\"nameFormCtl.hasError('required')\">\r\n            Name is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Description</mat-label>\r\n          <input matInput placeholder=\"Description\" [formControl]=\"descFormCtl\">\r\n          <mat-error *ngIf=\"descFormCtl.hasError('required')\">\r\n            Description is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- Menus -->\r\n      <div class=\"col-md-12 table-header mb-5\">\r\n        <div class=\"row p-2\">\r\n          <div class=\"col-md-6\">\r\n            <span style=\"font-weight: bold; font-size: 14px;\">Menus</span>\r\n          </div>\r\n          <div class=\"col-md-6 text-right\">\r\n            <button class=\"btn btn-save\" (click)=\"addMenu()\">\r\n              <mat-icon>add_circle</mat-icon>&nbsp;Add\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <!-- Table -->\r\n        <div class=\"no-shadow\">\r\n          <table mat-table [dataSource]=\"menuDataSource\" matSort class=\"\">\r\n\r\n            <ng-container matColumnDef=\"id\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n              <td mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"title\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"order\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Order</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.order}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"icon\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Icon</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.icon}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"hasSubmenu\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Has Submenu</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.hasSubmenu}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"action\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n              <td mat-cell *matCellDef=\"let row; let i = index\" class=\"text-right\">\r\n                <mat-icon (click)=\"onDelete(i)\" style=\"color: firebrick\">close</mat-icon> &nbsp;\r\n                <mat-icon (click)=\"edit(i,row)\" style=\"color: lightseagreen\">edit</mat-icon>\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"menuColumns;sticky: true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: menuColumns ; let i = index;\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/role/role-create-edit/role-create-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/user/role/role-create-edit/role-create-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RoleCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCreateEditComponent", function() { return RoleCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_dialog_menu_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu-dialog/menu-dialog.component */ "./src/app/components/user/role/menu-dialog/menu-dialog.component.ts");








var RoleCreateEditComponent = /** @class */ (function () {
    function RoleCreateEditComponent(http, router, activatedRoute, dialog) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.menuColumns = ["id", "title", "order", "icon", "hasSubmenu", "action"];
        this.menus = [];
        this.sideNavs = [];
        this.idFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null);
        this.nameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.descFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.roleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nameFormCtl: this.nameFormCtl,
            descFormCtl: this.descFormCtl
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.roleId = params.roleId;
            if (_this.roleId)
                _this.getRoleId();
        });
    }
    RoleCreateEditComponent.prototype.ngOnInit = function () {
    };
    RoleCreateEditComponent.prototype.getRoleId = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ROLES + "/" + this.roleId).subscribe(function (data) {
            _this.role = data["data"];
            _this.menus = _this.role.menus;
            _this.menuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.menus);
            _this.setForm();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    RoleCreateEditComponent.prototype.save = function () {
        var _this = this;
        var rolePayload = {
            id: this.idFormCtl.value,
            name: this.nameFormCtl.value,
            desc: this.descFormCtl.value,
            menus: this.menus
        };
        this.saveOrUpdateHttpObservable(rolePayload).subscribe(function (data) {
            _this.router.navigate(["/security/roles"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    RoleCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (rolePayload) {
        if (this.roleId) {
            return this.http.put(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ROLES + "/" + this.roleId, rolePayload);
        }
        else {
            return this.http.post(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ROLES, rolePayload);
        }
    };
    RoleCreateEditComponent.prototype.setForm = function () {
        this.idFormCtl.setValue(this.role.id);
        this.nameFormCtl.setValue(this.role.name);
        this.descFormCtl.setValue(this.role.desc);
    };
    RoleCreateEditComponent.prototype.addMenu = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_menu_dialog_menu_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MenuDialogComponent"], { width: '60%' })
            .afterClosed().subscribe(function (data) {
            if (data) {
                if (!_this.menus)
                    _this.menus = [];
                _this.menus.push(data);
                _this.menuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.menus);
            }
        });
    };
    RoleCreateEditComponent.prototype.onDelete = function (index) {
        this.menus.splice(index, 1);
        this.menuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.menus);
    };
    RoleCreateEditComponent.prototype.edit = function (index, menu) {
        var _this = this;
        var dialogRef = this.dialog.open(_menu_dialog_menu_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MenuDialogComponent"], { width: '60%', data: menu })
            .afterClosed().subscribe(function (data) {
            if (data) {
                _this.menus[index] = data;
                _this.menuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.menus);
            }
        });
    };
    RoleCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-create-edit',
            template: __webpack_require__(/*! ./role-create-edit.component.html */ "./src/app/components/user/role/role-create-edit/role-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./role-create-edit.component.css */ "./src/app/components/user/role/role-create-edit/role-create-edit.component.css"), __webpack_require__(/*! ../../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], RoleCreateEditComponent);
    return RoleCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/user/role/role-list/role-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user/role/role-list/role-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yb2xlL3JvbGUtbGlzdC9yb2xlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/role/role-list/role-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/role/role-list/role-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Roles</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/security/role-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Role\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"roleDataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.name}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"desc\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.desc}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDeleteRow(row.id)\">\r\n              <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"roleColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: roleColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/role/role-list/role-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/role/role-list/role-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");






var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.roleColumns = ["id", "name", "desc", "action"];
        this.roles = [];
    }
    RoleListComponent.prototype.ngOnInit = function () {
        this.getRoles();
    };
    RoleListComponent.prototype.getRoles = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ROLES).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.roles = resp.data;
                _this.roleDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.roles);
                if (!_this.roles)
                    _this.errorMessage = "No role found";
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
    RoleListComponent.prototype.onClickRow = function (roleId) {
        this.router.navigate(["/security/roles/" + roleId + "/view"]);
    };
    RoleListComponent.prototype.onDeleteRow = function (roleId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ROLES + "/" + roleId).subscribe(function (data) {
            _this.roleDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
            _this.getRoles();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/components/user/role/role-list/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role-list.component.css */ "./src/app/components/user/role/role-list/role-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RoleListComponent);
    return RoleListComponent;
}());



/***/ }),

/***/ "./src/app/components/user/role/role-view/role-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user/role/role-view/role-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yb2xlL3JvbGUtdmlldy9yb2xlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/role/role-view/role-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/role/role-view/role-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Role Details</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" routerLink=\"/security/roles\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>&nbsp;Back\r\n      </button>\r\n      <button class=\"btn btn-cancel\" (click)=\"delete()\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Delete\r\n      </button>\r\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\r\n        <mat-icon>edit</mat-icon>&nbsp;Edit\r\n      </button>\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/security/role-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Role\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\" *ngIf=\"role\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">Role Info</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Name : {{role.name}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Description : {{role.desc}}</p>\r\n      </div>\r\n\r\n      <!-- Menus -->\r\n      <div class=\"col-md-12 table-header mb-5\">\r\n        <div class=\"row p-2\">\r\n          <div class=\"col-md-6\">\r\n            <span style=\"font-weight: bold; font-size: 14px;\">Menus</span>\r\n          </div>\r\n        </div>\r\n        <!-- Table -->\r\n        <div class=\"no-shadow\">\r\n          <table mat-table [dataSource]=\"menuDataSource\" matSort class=\"\">\r\n\r\n            <ng-container matColumnDef=\"id\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n              <td mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"title\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"order\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Order</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.order}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"icon\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Icon</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.icon}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"hasSubmenu\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Has Submenu</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.hasSubmenu}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"menuColumns;sticky: true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: menuColumns ; let i = index;\" (click)=\"onClickRow(row)\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/role/role-view/role-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/role/role-view/role-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleViewComponent", function() { return RoleViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_view_dialog_menu_view_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu-view-dialog/menu-view-dialog.component */ "./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.ts");







var RoleViewComponent = /** @class */ (function () {
    function RoleViewComponent(http, router, activatedRoute, dialog) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.menuColumns = ["id", "title", "order", "icon", "hasSubmenu"];
        this.menus = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.roleId = params.roleId;
        });
    }
    RoleViewComponent.prototype.ngOnInit = function () {
        this.getRole();
    };
    RoleViewComponent.prototype.getRole = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ROLES + "/" + this.roleId).subscribe(function (data) {
            _this.role = data["data"];
            _this.menus = _this.role.menus;
            _this.menuDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.menus);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    RoleViewComponent.prototype.delete = function () {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ROLES + "/" + this.roleId).subscribe(function (data) {
            _this.router.navigate(["/security/roles"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    RoleViewComponent.prototype.edit = function () {
        this.router.navigate(["/security/roles/" + this.roleId + "/edit"]);
    };
    RoleViewComponent.prototype.onClickRow = function (menu) {
        var dialogRef = this.dialog.open(_menu_view_dialog_menu_view_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MenuViewDialogComponent"], { width: '60%', data: menu })
            .afterClosed().subscribe(function (data) {
            if (data) {
            }
        });
    };
    RoleViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-view',
            template: __webpack_require__(/*! ./role-view.component.html */ "./src/app/components/user/role/role-view/role-view.component.html"),
            styles: [__webpack_require__(/*! ./role-view.component.css */ "./src/app/components/user/role/role-view/role-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], RoleViewComponent);
    return RoleViewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-audit/user-audit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/user/user-audit/user-audit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWF1ZGl0L3VzZXItYXVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/user-audit/user-audit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-audit/user-audit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user-audit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-audit/user-audit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-audit/user-audit.component.ts ***!
  \********************************************************************/
/*! exports provided: UserAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuditComponent", function() { return UserAuditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserAuditComponent = /** @class */ (function () {
    function UserAuditComponent() {
    }
    UserAuditComponent.prototype.ngOnInit = function () {
    };
    UserAuditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-audit',
            template: __webpack_require__(/*! ./user-audit.component.html */ "./src/app/components/user/user-audit/user-audit.component.html"),
            styles: [__webpack_require__(/*! ./user-audit.component.css */ "./src/app/components/user/user-audit/user-audit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserAuditComponent);
    return UserAuditComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user/user-create-edit/user-create-edit.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/user/user-create-edit/user-create-edit.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyL3VzZXItY3JlYXRlLWVkaXQvdXNlci1jcmVhdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/user/user-create-edit/user-create-edit.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/user/user/user-create-edit/user-create-edit.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Add User</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-cancel\" routerLink=\"/security/users\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!userForm.valid'>\r\n        <mat-icon>save_alt</mat-icon>&nbsp;Add User\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">User Info</p>\r\n      </div>\r\n      <div class=\"col-md-4\" *ngIf=\"!userId\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Employee</mat-label>\r\n          <mat-select #selectedEmployee placeholder=\"Employee\" [formControl]=\"employeeFormCtl\" (selectionChange)=\"onSelectEmployee(selectedEmployee.value)\">\r\n            <mat-option *ngFor=\"let option of employees\" [value]=\"option.id\">\r\n              {{option.firstName}} {{option.middleName}} {{option.lastName}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"roleFormCtl.hasError('required')\">\r\n            Role is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>User Name</mat-label>\r\n          <input matInput placeholder=\"User Name\" [formControl]=\"userNameFormCtl\">\r\n          <mat-error *ngIf=\"userNameFormCtl.hasError('required')\">\r\n            User Name is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Firt Name</mat-label>\r\n          <input matInput placeholder=\"Firt Name\" [formControl]=\"firstNameFormCtl\" readonly=\"readonly\">\r\n          <mat-error *ngIf=\"firstNameFormCtl.hasError('required')\">\r\n            Firt Name is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Last Name</mat-label>\r\n          <input matInput placeholder=\"Last Name\" [formControl]=\"lastNameFormCtl\" readonly=\"readonly\">\r\n          <mat-error *ngIf=\"lastNameFormCtl.hasError('required')\">\r\n            Last Name is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Email</mat-label>\r\n          <input matInput placeholder=\"Firt Name\" [formControl]=\"emailFormCtl\" readonly=\"readonly\">\r\n          <mat-error *ngIf=\"emailFormCtl.hasError('required')\">\r\n            Email is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Mobile Number</mat-label>\r\n          <input matInput placeholder=\"Mobile Number\" [formControl]=\"mobileFormCtl\" readonly=\"readonly\">\r\n          <mat-error *ngIf=\"mobileFormCtl.hasError('required')\">\r\n            Mobile Number is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select placeholder=\"Status\" [formControl]=\"statusFormCtl\">\r\n            <mat-option *ngFor=\"let option of userStatuses\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"roleFormCtl.hasError('required')\">\r\n            Status is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"p-3\" style=\"border: 1px solid #c6c6c6; border-radius: 5px\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 p-0\">\r\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Roles</mat-label>\r\n                <mat-select placeholder=\"Roles\" [formControl]=\"roleFormCtl\">\r\n                  <mat-option *ngFor=\"let option of roles\" [value]=\"option\">\r\n                    {{option.name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n                <mat-error *ngIf=\"roleFormCtl.hasError('required')\">\r\n                  Role is <strong>required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col-md-1 mt-1 p-0\">\r\n              <button class=\"btn btn-save mt-2 w-100\" (click)=\"addRole()\">\r\n                <mat-icon>add</mat-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <p><b>Selected Roles</b></p>\r\n          <hr>\r\n          <mat-chip-list>\r\n            <mat-chip color=\"primary\" selected *ngFor=\"let addedRole of addedRoles\" [removable]=\"true\" (removed)=\"remove(addedRole)\">{{addedRole.name}}\r\n              <mat-icon matChipRemove>cancel</mat-icon>\r\n            </mat-chip>\r\n          </mat-chip-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/user/user-create-edit/user-create-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/user/user/user-create-edit/user-create-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateEditComponent", function() { return UserCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/security */ "./src/app/model/security.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var UserCreateEditComponent = /** @class */ (function () {
    function UserCreateEditComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userStatuses = src_app_model_security__WEBPACK_IMPORTED_MODULE_2__["UserStatuses"];
        this.addedRoles = [];
        this.roles = [];
        this.employees = [];
        this.idFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null);
        this.userNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.firstNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.lastNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.emailFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.mobileFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.linkedIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.statusFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', null);
        this.roleFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.employeeFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            userNameFormCtl: this.userNameFormCtl,
            firstNameFormCtl: this.firstNameFormCtl,
            lastNameFormCtl: this.lastNameFormCtl,
            emailFormCtl: this.emailFormCtl,
            employeeFormCtl: this.employeeFormCtl
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
            if (_this.userId) {
                _this.getUserId();
            }
        });
    }
    UserCreateEditComponent.prototype.ngOnInit = function () {
        if (!this.userId) {
            this.statusFormCtl.disable();
        }
        this.getEmployees();
        this.getRoles();
    };
    UserCreateEditComponent.prototype.getRoles = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ROLES).subscribe(function (data) {
            _this.roles = data["data"];
        }, function (err) {
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
            console.error(err);
        });
    };
    UserCreateEditComponent.prototype.getUserId = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].USERS + "/" + this.userId).subscribe(function (data) {
            _this.user = data["data"];
            _this.setForm();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    UserCreateEditComponent.prototype.getEmployees = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].EMPLOYEES).subscribe(function (data) {
            _this.employees = data["data"];
            var employee = _this.employees.find(function (elmnt) { return elmnt.id == _this.user.linkedId; });
            _this.employeeFormCtl.setValue(employee.id);
        }, function (err) {
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
            console.error(err);
        });
    };
    UserCreateEditComponent.prototype.save = function () {
        var _this = this;
        var userPayload = {
            id: this.idFormCtl.value,
            email: this.emailFormCtl.value,
            firstName: this.firstNameFormCtl.value,
            lastName: this.lastNameFormCtl.value,
            linkedId: this.linkedIdFormCtl.value,
            mobile: this.mobileFormCtl.value,
            status: this.statusFormCtl.value,
            userName: this.userNameFormCtl.value,
            roles: this.addedRoles,
        };
        this.saveOrUpdateHttpObservable(userPayload).subscribe(function (data) {
            var apiMessage = data["apiMessage"];
            if (apiMessage.error) {
                _this.errorMessage = apiMessage.detail;
                return;
            }
            _this.router.navigate(["/security/users"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    UserCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (userPayload) {
        if (this.userId) {
            return this.http.put(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].USERS + "/" + this.userId, userPayload);
        }
        else {
            return this.http.post(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].USERS, userPayload);
        }
    };
    UserCreateEditComponent.prototype.setForm = function () {
        this.idFormCtl.setValue(this.user.id);
        this.userNameFormCtl.setValue(this.user.userName);
        this.firstNameFormCtl.setValue(this.user.firstName);
        this.lastNameFormCtl.setValue(this.user.lastName);
        this.emailFormCtl.setValue(this.user.email);
        this.mobileFormCtl.setValue(this.user.mobile);
        this.linkedIdFormCtl.setValue(this.user.linkedId);
        this.statusFormCtl.setValue(this.user.status);
        this.addedRoles = this.user.roles;
    };
    UserCreateEditComponent.prototype.onSelectEmployee = function (selectedEmployeeId) {
        var employee = this.employees.find(function (elmnt) { return elmnt.id == selectedEmployeeId; });
        this.firstNameFormCtl.setValue(employee.firstName);
        this.lastNameFormCtl.setValue(employee.lastName);
        this.linkedIdFormCtl.setValue(employee.id);
        this.emailFormCtl.setValue(employee.email);
    };
    UserCreateEditComponent.prototype.addRole = function () {
        var addingRole = this.roleFormCtl.value;
        if (!addingRole)
            return;
        var indx = this.addedRoles.findIndex(function (elmnt) { return elmnt.id == addingRole.id; });
        if (indx >= 0)
            return;
        this.addedRoles.push(this.roleFormCtl.value);
    };
    UserCreateEditComponent.prototype.remove = function (addedRole) {
        var indx = this.addedRoles.findIndex(function (elmnt) { return elmnt.id == addedRole.id; });
        this.addedRoles.splice(indx, 1);
    };
    UserCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create-edit',
            template: __webpack_require__(/*! ./user-create-edit.component.html */ "./src/app/components/user/user/user-create-edit/user-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-create-edit.component.css */ "./src/app/components/user/user/user-create-edit/user-create-edit.component.css"), __webpack_require__(/*! ../../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UserCreateEditComponent);
    return UserCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user/user-list/user-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user/user-list/user-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/user/user-list/user-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/user/user-list/user-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Users</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/security/user-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;Add User\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"userDataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">\r\n              {{row.firstName}} {{row.lastName}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"userName\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>User Name</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.userName}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"mobile\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Mobile</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.mobile}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"email\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.email}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.status}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDeleteRow(row.id)\">\r\n              <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"userColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: userColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/user/user-list/user-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/user/user-list/user-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");






var UserListComponent = /** @class */ (function () {
    function UserListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.userColumns = ["id", "name", "userName", "mobile", "email", "status", "action"];
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].USERS).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.users = resp.data;
                _this.userDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.users);
                if (!_this.users)
                    _this.errorMessage = "No user found";
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
    UserListComponent.prototype.onClickRow = function (userId) {
        this.router.navigate(["/security/users/" + userId + "/view"]);
    };
    UserListComponent.prototype.onDeleteRow = function (userId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].USERS + "/" + userId).subscribe(function (data) {
            _this.userDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
            _this.getUsers();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/components/user/user/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user/user-view/user-view.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user/user-view/user-view.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyL3VzZXItdmlldy91c2VyLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/user/user-view/user-view.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/user/user/user-view/user-view.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">User Details</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" routerLink=\"/security/users\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>&nbsp;Back\r\n      </button>\r\n      <button class=\"btn btn-cancel\" (click)=\"delete()\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Delete\r\n      </button>\r\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\r\n        <mat-icon>edit</mat-icon>&nbsp;Edit\r\n      </button>\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/security/user-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Role\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\" *ngIf=\"user\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">User Info</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Name : {{user.firstName}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Last Name : {{user.lastName}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Email : {{user.email}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Mobile : {{user.mobile}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Status : {{user.status}}</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>User Name : {{user.userName}}</p>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"p-3\" style=\"border: 1px solid #c6c6c6; border-radius: 5px\">\r\n          <p><b>Selected Roles</b></p>\r\n          <hr>\r\n          <mat-chip-list>\r\n            <mat-chip color=\"primary\" selected *ngFor=\"let role of user.roles\">{{role.name}}</mat-chip>\r\n          </mat-chip-list>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/user/user-view/user-view.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/user/user-view/user-view.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");





var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params.uid;
        });
    }
    UserViewComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserViewComponent.prototype.getUser = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].USERS + "/" + this.userId).subscribe(function (data) {
            _this.user = data["data"];
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    UserViewComponent.prototype.delete = function () {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].USERS + "/" + this.userId).subscribe(function (data) {
            _this.router.navigate(["/security/users"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    UserViewComponent.prototype.edit = function () {
        this.router.navigate(["/security/users/" + this.userId + "/edit"]);
    };
    UserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__(/*! ./user-view.component.html */ "./src/app/components/user/user/user-view/user-view.component.html"),
            styles: [__webpack_require__(/*! ./user-view.component.css */ "./src/app/components/user/user/user-view/user-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserViewComponent);
    return UserViewComponent;
}());



/***/ }),

/***/ "./src/app/model/security.ts":
/*!***********************************!*\
  !*** ./src/app/model/security.ts ***!
  \***********************************/
/*! exports provided: UserStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatuses", function() { return UserStatuses; });
var UserStatuses = [
    "Active",
    "Expired",
    "Inactive",
    "First time"
];


/***/ }),

/***/ "./src/app/modules/security.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/security.module.ts ***!
  \********************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/user/change-password/change-password.component */ "./src/app/components/user/change-password/change-password.component.ts");
/* harmony import */ var _components_user_user_audit_user_audit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/user/user-audit/user-audit.component */ "./src/app/components/user/user-audit/user-audit.component.ts");
/* harmony import */ var _components_user_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/user/user/user-list/user-list.component */ "./src/app/components/user/user/user-list/user-list.component.ts");
/* harmony import */ var _components_user_user_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/user/user/user-view/user-view.component */ "./src/app/components/user/user/user-view/user-view.component.ts");
/* harmony import */ var _components_user_user_user_create_edit_user_create_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/user/user/user-create-edit/user-create-edit.component */ "./src/app/components/user/user/user-create-edit/user-create-edit.component.ts");
/* harmony import */ var _components_user_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/user/role/role-list/role-list.component */ "./src/app/components/user/role/role-list/role-list.component.ts");
/* harmony import */ var _components_user_role_role_view_role_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/user/role/role-view/role-view.component */ "./src/app/components/user/role/role-view/role-view.component.ts");
/* harmony import */ var _components_user_role_role_create_edit_role_create_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/user/role/role-create-edit/role-create-edit.component */ "./src/app/components/user/role/role-create-edit/role-create-edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/shared/custom-date/custom-date.module */ "./src/app/components/shared/custom-date/custom-date.module.ts");
/* harmony import */ var _components_user_role_menu_dialog_menu_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/user/role/menu-dialog/menu-dialog.component */ "./src/app/components/user/role/menu-dialog/menu-dialog.component.ts");
/* harmony import */ var _components_user_role_menu_view_dialog_menu_view_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/user/role/menu-view-dialog/menu-view-dialog.component */ "./src/app/components/user/role/menu-view-dialog/menu-view-dialog.component.ts");

















var routes = [
    // Change password
    { path: "change-password", component: _components_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"] },
    // User Audit
    { path: "user-audit", component: _components_user_user_audit_user_audit_component__WEBPACK_IMPORTED_MODULE_3__["UserAuditComponent"] },
    // User 
    { path: "users", component: _components_user_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"] },
    { path: "users/:uid/view", component: _components_user_user_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_5__["UserViewComponent"] },
    { path: "user-create", component: _components_user_user_user_create_edit_user_create_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateEditComponent"] },
    { path: "users/:uid/edit", component: _components_user_user_user_create_edit_user_create_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateEditComponent"] },
    // Role 
    { path: "roles", component: _components_user_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_7__["RoleListComponent"] },
    { path: "roles/:roleId/view", component: _components_user_role_role_view_role_view_component__WEBPACK_IMPORTED_MODULE_8__["RoleViewComponent"] },
    { path: "role-create", component: _components_user_role_role_create_edit_role_create_edit_component__WEBPACK_IMPORTED_MODULE_9__["RoleCreateEditComponent"] },
    { path: "roles/:roleId/edit", component: _components_user_role_role_create_edit_role_create_edit_component__WEBPACK_IMPORTED_MODULE_9__["RoleCreateEditComponent"] },
];
var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _components_shared_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_14__["CustomDateModule"]
            ],
            declarations: [
                _components_user_user_audit_user_audit_component__WEBPACK_IMPORTED_MODULE_3__["UserAuditComponent"],
                _components_user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"],
                _components_user_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"],
                _components_user_user_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_5__["UserViewComponent"],
                _components_user_user_user_create_edit_user_create_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserCreateEditComponent"],
                _components_user_role_role_create_edit_role_create_edit_component__WEBPACK_IMPORTED_MODULE_9__["RoleCreateEditComponent"],
                _components_user_role_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_7__["RoleListComponent"],
                _components_user_role_role_view_role_view_component__WEBPACK_IMPORTED_MODULE_8__["RoleViewComponent"],
                _components_user_role_menu_dialog_menu_dialog_component__WEBPACK_IMPORTED_MODULE_15__["MenuDialogComponent"],
                _components_user_role_menu_view_dialog_menu_view_dialog_component__WEBPACK_IMPORTED_MODULE_16__["MenuViewDialogComponent"],
            ],
            entryComponents: [
                _components_user_role_menu_dialog_menu_dialog_component__WEBPACK_IMPORTED_MODULE_15__["MenuDialogComponent"],
                _components_user_role_menu_view_dialog_menu_view_dialog_component__WEBPACK_IMPORTED_MODULE_16__["MenuViewDialogComponent"]
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-security-module.js.map