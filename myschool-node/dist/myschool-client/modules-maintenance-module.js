(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-maintenance-module"],{

/***/ "./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.css":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UvYWRtaXNzaW9uLWZlZS1zdHJ1Y3R1cmUvYWRtaXNzaW9uLWZlZS1zdHJ1Y3R1cmUtZGlhbG9nL2FkbWlzc2lvbi1mZWUtc3RydWN0dXJlLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 500px\">\r\n  <div class=\"dialg-header w-100\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 text-left\">\r\n        <span class=\"lead\">Admission Fee Structure</span>\r\n      </div>\r\n      <div class=\"col-md-6 text-right\">\r\n        <button class=\"btn btn-cancel mt-2\" (click)=\"cancel()\">\r\n          <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n        </button>\r\n        <button class=\"btn btn-save mt-2\" (click)=\"add()\">\r\n          <mat-icon>add</mat-icon>&nbsp;Add\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row p-4\">\r\n\r\n    <div class=\"col-md-12 p-0\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-12\">\r\n          <p style=\"font-weight: bold; font-size: 14px;\">Admission Fee Structure Info</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Standard</mat-label>\r\n            <mat-select placeholder=\"Menu\" [formControl]=\"standardFctrl\">\r\n              <mat-option *ngFor=\"let option of standards\" [value]=\"option.value\">\r\n                {{option.value}}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"standardFctrl.hasError('required')\">\r\n              Standard is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Admission Amount</mat-label>\r\n            <input matInput placeholder=\"Title\" [formControl]=\"admissionAmountFctrl\">\r\n            <mat-error *ngIf=\"admissionAmountFctrl.hasError('required')\">\r\n              Admission Amount is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Fee Amount</mat-label>\r\n            <input matInput placeholder=\"Order\" [formControl]=\"feeAmountFctrl\">\r\n            <mat-error *ngIf=\"feeAmountFctrl.hasError('required')\">\r\n              Fee Amount is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: AdmissionFeeStructureDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionFeeStructureDialogComponent", function() { return AdmissionFeeStructureDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_student_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/student.model */ "./src/app/model/student.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AdmissionFeeStructureDialogComponent = /** @class */ (function () {
    function AdmissionFeeStructureDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.idFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.standardFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.feeAmountFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.admissionAmountFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.actionMode = "CREATE";
        this.standards = src_app_model_student_model__WEBPACK_IMPORTED_MODULE_3__["Standards"];
        dialogRef.disableClose = true;
        this.admFeeMaintForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            standardFctrl: this.standardFctrl,
            feeAmountFctrl: this.feeAmountFctrl,
            admissionAmountFctrl: this.admissionAmountFctrl,
        });
        if (data) {
            this.actionMode = "EDIT";
            this.standardFctrl.setValue(data.standard);
            this.feeAmountFctrl.setValue(data.feeAmount);
            this.admissionAmountFctrl.setValue(data.admissionAmount);
        }
    }
    AdmissionFeeStructureDialogComponent.prototype.ngOnInit = function () {
    };
    AdmissionFeeStructureDialogComponent.prototype.add = function () {
        var admFeeMaint = {
            id: this.idFctrl.value,
            admissionAmount: this.admissionAmountFctrl.value,
            feeAmount: this.feeAmountFctrl.value,
            standard: this.standardFctrl.value,
        };
        this.dialogRef.close(admFeeMaint);
    };
    AdmissionFeeStructureDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    AdmissionFeeStructureDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admission-fee-structure-dialog',
            template: __webpack_require__(/*! ./admission-fee-structure-dialog.component.html */ "./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.html"),
            styles: [__webpack_require__(/*! ./admission-fee-structure-dialog.component.css */ "./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], AdmissionFeeStructureDialogComponent);
    return AdmissionFeeStructureDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UvYWRtaXNzaW9uLWZlZS1zdHJ1Y3R1cmUvYWRtaXNzaW9uZmVlLXN0cnVjdHVyZS1jcmVhdGUtZWRpdC9hZG1pc3Npb25mZWUtc3RydWN0dXJlLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Add Admission Fee Structure</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-cancel\" routerLink=\"/maintenance/admission-fees\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!admFeeStructureYearlyForm.valid'>\r\n        <mat-icon>save_alt</mat-icon>&nbsp;Add Admission Fee Structure\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">Year</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n          <mat-label>Year</mat-label>\r\n          <mat-select #selectedEmployee placeholder=\"Year\" [formControl]=\"yearFormCtl\">\r\n            <mat-option *ngFor=\"let option of years\" [value]=\"option\">\r\n              {{option}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"yearFormCtl.hasError('required')\">\r\n            Year is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 table-header mb-5\">\r\n        <div class=\"row p-2\">\r\n          <div class=\"col-md-6\">\r\n            <span style=\"font-weight: bold; font-size: 14px;\">Admission Fee Structure</span>\r\n          </div>\r\n          <div class=\"col-md-6 text-right\">\r\n            <button class=\"btn btn-save\" (click)=\"addAdmFeeStructure()\">\r\n              <mat-icon>add_circle</mat-icon>&nbsp;Add\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"no-shadow w-100\">\r\n          <table mat-table [dataSource]=\"admFeeStructureDataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"id\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n              <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"standard\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Standard</th>\r\n              <td mat-cell *matCellDef=\"let row\" class=\"name-class\">\r\n                {{row.standard}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"feeAmount\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Fee Amount</th>\r\n              <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.feeAmount}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"admissionAmount\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Admission Amount</th>\r\n              <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.admissionAmount}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"action\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n              <td mat-cell *matCellDef=\"let row; let i = index\" class=\"text-right\" (click)=\"onDelete(row.id)\">\r\n                <mat-icon (click)=\"edit(i,row)\" style=\"color: lightseagreen\">edit</mat-icon>\r\n                <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n              </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"admFeeStructureColumns;sticky: true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: admFeeStructureColumns ; let i = index;\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: AdmissionfeeStructureCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionfeeStructureCreateEditComponent", function() { return AdmissionfeeStructureCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admission_fee_structure_dialog_admission_fee_structure_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../admission-fee-structure-dialog/admission-fee-structure-dialog.component */ "./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.ts");









var AdmissionfeeStructureCreateEditComponent = /** @class */ (function () {
    function AdmissionfeeStructureCreateEditComponent(http, router, activatedRoute, commonService, dialog) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.commonService = commonService;
        this.dialog = dialog;
        this.admFeeStructureColumns = ["id", "standard", "feeAmount", "admissionAmount", "action"];
        this.admFeeStructures = [];
        this.years = [];
        this.idFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null);
        this.yearFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.admFeeStructureYearlyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            yearFormCtl: this.yearFormCtl,
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.admFeeStructureYearlId = params.admfeeId;
            if (_this.admFeeStructureYearlId) {
                _this.getAdmFeeStructureYearly();
            }
        });
    }
    AdmissionfeeStructureCreateEditComponent.prototype.ngOnInit = function () {
        this.years = this.commonService.yearsLtCurrentYear(10);
    };
    AdmissionfeeStructureCreateEditComponent.prototype.getAdmFeeStructureYearly = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE + "/" + this.admFeeStructureYearlId).subscribe(function (data) {
            _this.admFeeStructureYearly = data["data"];
            _this.setForm();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionfeeStructureCreateEditComponent.prototype.save = function () {
        var _this = this;
        var admFeeStructureYearlyPayload = {
            id: this.idFormCtl.value,
            year: this.yearFormCtl.value,
            maintenanceAdmissionFees: this.admFeeStructures
        };
        this.saveOrUpdateHttpObservable(admFeeStructureYearlyPayload).subscribe(function (data) {
            var apiMessage = data["apiMessage"];
            if (apiMessage.error) {
                _this.errorMessage = apiMessage.detail;
                return;
            }
            _this.router.navigate(["/maintenance/admission-fees"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionfeeStructureCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (admFeeStructureYearlyPayload) {
        if (this.admFeeStructureYearlId) {
            return this.http.put(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE + "/" + this.admFeeStructureYearlId, admFeeStructureYearlyPayload);
        }
        else {
            return this.http.post(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE, admFeeStructureYearlyPayload);
        }
    };
    AdmissionfeeStructureCreateEditComponent.prototype.setForm = function () {
        this.idFormCtl.setValue(this.admFeeStructureYearly.id);
        this.yearFormCtl.setValue(this.admFeeStructureYearly.year);
        this.admFeeStructures = this.admFeeStructureYearly.maintenanceAdmissionFees;
        this.admFeeStructureDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.admFeeStructures);
    };
    AdmissionfeeStructureCreateEditComponent.prototype.addAdmFeeStructure = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_admission_fee_structure_dialog_admission_fee_structure_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AdmissionFeeStructureDialogComponent"], { width: '60%' })
            .afterClosed().subscribe(function (data) {
            if (data) {
                if (!_this.admFeeStructures)
                    _this.admFeeStructures = [];
                _this.admFeeStructures.push(data);
                _this.admFeeStructureDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.admFeeStructures);
            }
        });
    };
    AdmissionfeeStructureCreateEditComponent.prototype.onDelete = function (index) {
        this.admFeeStructures.splice(index, 1);
        this.admFeeStructureDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.admFeeStructures);
    };
    AdmissionfeeStructureCreateEditComponent.prototype.edit = function (index, admFeeMaint) {
        var _this = this;
        var dialogRef = this.dialog.open(_admission_fee_structure_dialog_admission_fee_structure_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AdmissionFeeStructureDialogComponent"], { width: '60%', data: admFeeMaint })
            .afterClosed().subscribe(function (data) {
            if (data) {
                _this.admFeeStructures[index] = data;
                _this.admFeeStructureDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.admFeeStructures);
            }
        });
    };
    AdmissionfeeStructureCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admissionfee-structure-create-edit',
            template: __webpack_require__(/*! ./admissionfee-structure-create-edit.component.html */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./admissionfee-structure-create-edit.component.css */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.css"), __webpack_require__(/*! ../../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], AdmissionfeeStructureCreateEditComponent);
    return AdmissionfeeStructureCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.css":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UvYWRtaXNzaW9uLWZlZS1zdHJ1Y3R1cmUvYWRtaXNzaW9uZmVlLXN0cnVjdHVyZS1saXN0L2FkbWlzc2lvbmZlZS1zdHJ1Y3R1cmUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Admission Fee Structures</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/maintenance/admission-fee-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;Add Admission Fee Structure\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"admFeeStructureDataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"year\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Year</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">\r\n              {{row.year}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDeleteRow(row.id)\">\r\n              <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"admFeeStructureColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: admFeeStructureColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AdmissionfeeStructureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionfeeStructureListComponent", function() { return AdmissionfeeStructureListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");






var AdmissionfeeStructureListComponent = /** @class */ (function () {
    function AdmissionfeeStructureListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.admFeeStructureColumns = ["id", "year", "action"];
        this.admFeeStructures = [];
    }
    AdmissionfeeStructureListComponent.prototype.ngOnInit = function () {
        this.getAdmFeeStructures();
    };
    AdmissionfeeStructureListComponent.prototype.getAdmFeeStructures = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.admFeeStructures = resp.data;
                _this.admFeeStructureDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.admFeeStructures);
                if (!_this.admFeeStructures)
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
    AdmissionfeeStructureListComponent.prototype.onClickRow = function (admFeeStructureId) {
        this.router.navigate(["/maintenance/admission-fees/" + admFeeStructureId + "/view"]);
    };
    AdmissionfeeStructureListComponent.prototype.onDeleteRow = function (admFeeStructureId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE + "/" + admFeeStructureId).subscribe(function (data) {
            _this.admFeeStructureDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
            _this.getAdmFeeStructures();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionfeeStructureListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admissionfee-structure-list',
            template: __webpack_require__(/*! ./admissionfee-structure-list.component.html */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.html"),
            styles: [__webpack_require__(/*! ./admissionfee-structure-list.component.css */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdmissionfeeStructureListComponent);
    return AdmissionfeeStructureListComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.css":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UvYWRtaXNzaW9uLWZlZS1zdHJ1Y3R1cmUvYWRtaXNzaW9uZmVlLXN0cnVjdHVyZS12aWV3L2FkbWlzc2lvbmZlZS1zdHJ1Y3R1cmUtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Admission Fee Details</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" routerLink=\"/maintenance/admission-fees\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>&nbsp;Back\r\n      </button>\r\n      <button class=\"btn btn-cancel\" (click)=\"delete()\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Delete\r\n      </button>\r\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\r\n        <mat-icon>edit</mat-icon>&nbsp;Edit\r\n      </button>\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/maintenance/admission-fee-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Admission Fee Structure\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\" *ngIf=\"admFeeStructure\">\r\n\r\n    <div class=\"row pt-3\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <p style=\"font-weight: bold; font-size: 14px;\">Admission Fee Structure Info</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <p>Year : {{admFeeStructure.year}}</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 table-header mb-5\">\r\n        <div class=\"row p-2\">\r\n          <div class=\"col-md-6\">\r\n            <span style=\"font-weight: bold; font-size: 14px;\">Admission Fee Structure</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"no-shadow w-100\">\r\n          <table mat-table [dataSource]=\"admFeeStructureDataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"id\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n              <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"standard\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Standard</th>\r\n              <td mat-cell *matCellDef=\"let row\" class=\"name-class\">\r\n                {{row.standard}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"feeAmount\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Fee Amount</th>\r\n              <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.feeAmount}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"admissionAmount\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Admission Amount</th>\r\n              <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.admissionAmount}}</td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"admFeeStructureColumns;sticky: true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: admFeeStructureColumns ; let i = index;\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: AdmissionfeeStructureViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionfeeStructureViewComponent", function() { return AdmissionfeeStructureViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var AdmissionfeeStructureViewComponent = /** @class */ (function () {
    function AdmissionfeeStructureViewComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.admFeeStructureColumns = ["id", "standard", "feeAmount", "admissionAmount"];
        this.admFeeStructures = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.admFeeStructureId = params.admfeeId;
        });
    }
    AdmissionfeeStructureViewComponent.prototype.ngOnInit = function () {
        this.getAdmFeeStructure();
    };
    AdmissionfeeStructureViewComponent.prototype.getAdmFeeStructure = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE + "/" + this.admFeeStructureId).subscribe(function (data) {
            _this.admFeeStructure = data["data"];
            _this.admFeeStructures = _this.admFeeStructure.maintenanceAdmissionFees;
            _this.admFeeStructureDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.admFeeStructures);
            console.log(_this.admFeeStructures);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionfeeStructureViewComponent.prototype.delete = function () {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE + "/" + this.admFeeStructureId).subscribe(function (data) {
            _this.router.navigate(["/maintenance/admission-fees"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionfeeStructureViewComponent.prototype.edit = function () {
        this.router.navigate(["/maintenance/admission-fees/" + this.admFeeStructureId + "/edit"]);
    };
    AdmissionfeeStructureViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admissionfee-structure-view',
            template: __webpack_require__(/*! ./admissionfee-structure-view.component.html */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.html"),
            styles: [__webpack_require__(/*! ./admissionfee-structure-view.component.css */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdmissionfeeStructureViewComponent);
    return AdmissionfeeStructureViewComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UvY2xhc3MvY2xhc3MtY3JlYXRlLWVkaXQvY2xhc3MtY3JlYXRlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  class-create-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ClassCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassCreateEditComponent", function() { return ClassCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClassCreateEditComponent = /** @class */ (function () {
    function ClassCreateEditComponent() {
    }
    ClassCreateEditComponent.prototype.ngOnInit = function () {
    };
    ClassCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-create-edit',
            template: __webpack_require__(/*! ./class-create-edit.component.html */ "./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./class-create-edit.component.css */ "./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClassCreateEditComponent);
    return ClassCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance/class/class-list/class-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-list/class-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UvY2xhc3MvY2xhc3MtbGlzdC9jbGFzcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/maintenance/class/class-list/class-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-list/class-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  class-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/maintenance/class/class-list/class-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-list/class-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClassListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassListComponent", function() { return ClassListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClassListComponent = /** @class */ (function () {
    function ClassListComponent() {
    }
    ClassListComponent.prototype.ngOnInit = function () {
    };
    ClassListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-list',
            template: __webpack_require__(/*! ./class-list.component.html */ "./src/app/components/maintenance/class/class-list/class-list.component.html"),
            styles: [__webpack_require__(/*! ./class-list.component.css */ "./src/app/components/maintenance/class/class-list/class-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClassListComponent);
    return ClassListComponent;
}());



/***/ }),

/***/ "./src/app/components/maintenance/class/class-view/class-view.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-view/class-view.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnRlbmFuY2UvY2xhc3MvY2xhc3Mtdmlldy9jbGFzcy12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/maintenance/class/class-view/class-view.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-view/class-view.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  class-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/maintenance/class/class-view/class-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/maintenance/class/class-view/class-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ClassViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassViewComponent", function() { return ClassViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClassViewComponent = /** @class */ (function () {
    function ClassViewComponent() {
    }
    ClassViewComponent.prototype.ngOnInit = function () {
    };
    ClassViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-class-view',
            template: __webpack_require__(/*! ./class-view.component.html */ "./src/app/components/maintenance/class/class-view/class-view.component.html"),
            styles: [__webpack_require__(/*! ./class-view.component.css */ "./src/app/components/maintenance/class/class-view/class-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClassViewComponent);
    return ClassViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/maintenance.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/maintenance.module.ts ***!
  \***********************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_maintenance_admission_fee_structure_admissionfee_structure_list_admissionfee_structure_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-list/admissionfee-structure-list.component.ts");
/* harmony import */ var _components_maintenance_admission_fee_structure_admissionfee_structure_view_admissionfee_structure_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-view/admissionfee-structure-view.component.ts");
/* harmony import */ var _components_maintenance_admission_fee_structure_admissionfee_structure_create_edit_admissionfee_structure_create_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component */ "./src/app/components/maintenance/admission-fee-structure/admissionfee-structure-create-edit/admissionfee-structure-create-edit.component.ts");
/* harmony import */ var _components_maintenance_class_class_list_class_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/maintenance/class/class-list/class-list.component */ "./src/app/components/maintenance/class/class-list/class-list.component.ts");
/* harmony import */ var _components_maintenance_class_class_view_class_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/maintenance/class/class-view/class-view.component */ "./src/app/components/maintenance/class/class-view/class-view.component.ts");
/* harmony import */ var _components_maintenance_class_class_create_edit_class_create_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/maintenance/class/class-create-edit/class-create-edit.component */ "./src/app/components/maintenance/class/class-create-edit/class-create-edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shared/custom-date/custom-date.module */ "./src/app/components/shared/custom-date/custom-date.module.ts");
/* harmony import */ var _components_maintenance_admission_fee_structure_admission_fee_structure_dialog_admission_fee_structure_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component */ "./src/app/components/maintenance/admission-fee-structure/admission-fee-structure-dialog/admission-fee-structure-dialog.component.ts");














var routes = [
    // Admission fee
    { path: "admission-fees", component: _components_maintenance_admission_fee_structure_admissionfee_structure_list_admissionfee_structure_list_component__WEBPACK_IMPORTED_MODULE_2__["AdmissionfeeStructureListComponent"] },
    { path: "admission-fees/:admfeeId/view", component: _components_maintenance_admission_fee_structure_admissionfee_structure_view_admissionfee_structure_view_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionfeeStructureViewComponent"] },
    { path: "admission-fee-create", component: _components_maintenance_admission_fee_structure_admissionfee_structure_create_edit_admissionfee_structure_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["AdmissionfeeStructureCreateEditComponent"] },
    { path: "admission-fees/:admfeeId/edit", component: _components_maintenance_admission_fee_structure_admissionfee_structure_create_edit_admissionfee_structure_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["AdmissionfeeStructureCreateEditComponent"] },
    // Class
    { path: "classes", component: _components_maintenance_class_class_list_class_list_component__WEBPACK_IMPORTED_MODULE_5__["ClassListComponent"] },
    { path: ":clsid/class-view", component: _components_maintenance_class_class_view_class_view_component__WEBPACK_IMPORTED_MODULE_6__["ClassViewComponent"] },
    { path: "class-create", component: _components_maintenance_class_class_create_edit_class_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["ClassCreateEditComponent"] },
    { path: ":clsid/income-edit", component: _components_maintenance_class_class_create_edit_class_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["ClassCreateEditComponent"] },
];
var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _components_shared_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_12__["CustomDateModule"]
            ],
            declarations: [
                _components_maintenance_class_class_list_class_list_component__WEBPACK_IMPORTED_MODULE_5__["ClassListComponent"],
                _components_maintenance_class_class_view_class_view_component__WEBPACK_IMPORTED_MODULE_6__["ClassViewComponent"],
                _components_maintenance_class_class_create_edit_class_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["ClassCreateEditComponent"],
                _components_maintenance_admission_fee_structure_admissionfee_structure_list_admissionfee_structure_list_component__WEBPACK_IMPORTED_MODULE_2__["AdmissionfeeStructureListComponent"],
                _components_maintenance_admission_fee_structure_admissionfee_structure_view_admissionfee_structure_view_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionfeeStructureViewComponent"],
                _components_maintenance_admission_fee_structure_admissionfee_structure_create_edit_admissionfee_structure_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["AdmissionfeeStructureCreateEditComponent"],
                _components_maintenance_admission_fee_structure_admission_fee_structure_dialog_admission_fee_structure_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AdmissionFeeStructureDialogComponent"],
            ],
            entryComponents: [_components_maintenance_admission_fee_structure_admission_fee_structure_dialog_admission_fee_structure_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AdmissionFeeStructureDialogComponent"]]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    function CommonService() {
    }
    CommonService.prototype.yearsLtCurrentYear = function (count) {
        var currentYear = new Date().getFullYear();
        var years = [];
        for (var i = 0; i < count; i++) {
            if (i != 0)
                currentYear -= 1;
            years.push(currentYear + "");
        }
        return years;
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-maintenance-module.js.map