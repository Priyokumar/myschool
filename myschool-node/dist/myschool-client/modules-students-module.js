(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-students-module"],{

/***/ "./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvYWRtaXNzaW9uLWZlZS9hZG1pc3Npb24tZmVlLWNyZWF0ZS1lZGl0L2FkbWlzc2lvbi1mZWUtY3JlYXRlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Admission</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-cancel\" routerLink=\"/student/admissions\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!admissionForm.valid'>\r\n        <mat-icon>save_alt</mat-icon>&nbsp;Save Admission\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\">\r\n    <mat-tab-group>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n          <span style=\"font-size: 13px;\">Admission Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <!-- Student Info -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Student Info</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <button class=\"btn btn-edit w-100\" style=\"padding-bottom: 27px; margin-top: 10px;\" (click)=\"searchStudent()\">\r\n              <mat-icon>search</mat-icon>&nbsp;Search Students\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>First name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"firstNameFormCtl\">\r\n              <mat-error *ngIf=\"firstNameFormCtl.hasError('required')\">\r\n                First name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Last name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"lastNameFormCtl\">\r\n              <mat-error *ngIf=\"lastNameFormCtl.hasError('required')\">\r\n                Last name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Registration Number</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"registrationNoFormCtl\">\r\n              <mat-error *ngIf=\"registrationNoFormCtl.hasError('required')\">\r\n                Registration Number is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Registration Date</mat-label>\r\n              <input matInput [matDatepicker]=\"regDate\" placeholder=\"mm/dd/yyyy\" [formControl]=\"registrationDateFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"regDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #regDate></mat-datepicker>\r\n              <mat-error *ngIf=\"registrationDateFormCtl.hasError('required')\">\r\n                Registration Date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Registration Status</mat-label>\r\n              <mat-select placeholder=\"Status\" [formControl]=\"registrationStatusFormCtl\">\r\n                <mat-option *ngFor=\"let option of registrationStatuses\" [value]=\"option.value\">\r\n                  {{option.value}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"registrationStatusFormCtl.hasError('required')\">\r\n                Registration Status is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n\r\n          <!-- Admission Info -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Admission Info</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Admission Reference No</mat-label>\r\n              <input matInput placeholder=\"Admission Reference No\" [formControl]=\"admissionRefNoFormCtl\">\r\n              <mat-error *ngIf=\"admissionRefNoFormCtl.hasError('required')\">\r\n                Admission Reference No is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Academic Year</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"academicYearFormCtl\">\r\n              <mat-error *ngIf=\"academicYearFormCtl.hasError('required')\">\r\n                Academic Year is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Admission Date</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"admissionDateFormCtl\">\r\n              <mat-error *ngIf=\"admissionDateFormCtl.hasError('required')\">\r\n                Admission Date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Admission For</mat-label>\r\n              <mat-select #standard placeholder=\"Status\" [formControl]=\"standardFormCtl\" (selectionChange)=\"onSelectStandard(standard.value)\">\r\n                <mat-option *ngFor=\"let option of standards\" [value]=\"option.value\">\r\n                  {{option.value}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"standardFormCtl.hasError('required')\">\r\n                Standard is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Status</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"statusFormCtl\">\r\n              <mat-error *ngIf=\"statusFormCtl.hasError('required')\">\r\n                Status is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Admission Amount</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"admissionAmountFormCtl\" readonly=\"readonly\">\r\n              <mat-error *ngIf=\"admissionAmountFormCtl.hasError('required')\">\r\n                Admission Amount is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Paid Amount</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"paidAmountFormCtl\">\r\n              <mat-error *ngIf=\"paidAmountFormCtl.hasError('required')\">\r\n                Paid Amount is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Due Amount</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"dueAmountFormCtl\">\r\n              <mat-error *ngIf=\"dueAmountFormCtl.hasError('required')\">\r\n                Due Amount is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Promise To Pay Date</mat-label>\r\n              <input matInput [matDatepicker]=\"p2pDate\" placeholder=\"mm/dd/yyyy\" [formControl]=\"promiseToPayDateFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"p2pDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #p2pDate></mat-datepicker>\r\n              <mat-error *ngIf=\"promiseToPayDateFormCtl.hasError('required')\">\r\n                Promise To Pay Date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon>insert_drive_file</mat-icon>\r\n          <span style=\"font-size: 13px;\">Fees</span>\r\n        </ng-template>\r\n        <div class=\"row pt-3\">\r\n          <div class=\"col-md-12 table-header mb-5\">\r\n            <div class=\"row p-2\">\r\n              <div class=\"col-md-6\">\r\n                <span style=\"font-weight: bold; font-size: 14px;\">Fees</span>\r\n              </div>\r\n              <div class=\"col-md-6 text-right\">\r\n                <button class=\"btn btn-save\" (click)=\"generateFees()\" [disabled]='!admissionForm.valid'>\r\n                  <mat-icon>add_circle</mat-icon>&nbsp;Check Fee structures\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <!-- Table -->\r\n            <div class=\"no-shadow w-100\">\r\n              <table mat-table [dataSource]=\"feesDataSource\" matSort>\r\n\r\n                <ng-container matColumnDef=\"id\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n                  <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"feeRef\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Ref No.</th>\r\n                  <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.feeRefNo}}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"amount\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Ammount</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.amount}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"exptdateOfPayment\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Expected Date Of Payment</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.exptdateOfPayment}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"actdateOfPayment\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Actual Date Of Payment</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.actdateOfPayment}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"monthOf\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Month Of</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.monthOf}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.status}} </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"feeColumns;sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: feeColumns ; let i = index;\">\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: AdmissionFeeCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionFeeCreateEditComponent", function() { return AdmissionFeeCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admission */ "./src/app/components/students/admission-fee/admission-fee-create-edit/admission.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../search-student-dialog/search-student-dialog.component */ "./src/app/components/students/search-student-dialog/search-student-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AdmissionFeeCreateEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AdmissionFeeCreateEditComponent, _super);
    function AdmissionFeeCreateEditComponent(http, router, activatedRoute, matDialog) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.matDialog = matDialog;
        _this.activatedRoute.params.subscribe(function (params) {
            _this.admId = params.admId;
            if (_this.admId)
                _this.getAdmissionFee();
        });
        _this.paidAmountFormCtl.valueChanges.subscribe(function (data) {
            var admAmout = _this.admissionAmountFormCtl.value;
            var paidAmount = data;
            _this.dueAmountFormCtl.setValue(admAmout - paidAmount);
            _this.promiseToPayDateFormCtl.enable();
            _this.promiseToPayDateFormCtl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required);
            _this.promiseToPayDateFormCtl.updateValueAndValidity();
            if (admAmout < paidAmount) {
                _this.promiseToPayDateFormCtl.disable();
                _this.promiseToPayDateFormCtl.setValidators(null);
                _this.promiseToPayDateFormCtl.updateValueAndValidity();
            }
        });
        return _this;
    }
    AdmissionFeeCreateEditComponent.prototype.ngOnInit = function () {
    };
    AdmissionFeeCreateEditComponent.prototype.getAdmissionFee = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADMISSIONS + "/" + this.admId).subscribe(function (data) {
            _this.admission = data["data"];
            if (_this.admission) {
                _this.fees = _this.admission.fees;
                _this.feesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.fees);
            }
            _this.setForm();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionFeeCreateEditComponent.prototype.setForm = function () {
        this.idFormCtl.setValue(this.admission.id);
        this.admissionRefNoFormCtl.setValue(this.admission.admissionRefNo);
        this.academicYearFormCtl.setValue(this.admission.academicYear);
        this.admissionDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_6__(this.admission.admissionDate));
        this.standardFormCtl.setValue(this.admission.standard);
        this.statusFormCtl.setValue(this.admission.status);
        this.admissionAmountFormCtl.setValue(this.admission.admissionAmount);
        this.paidAmountFormCtl.setValue(this.admission.paidAmount);
        this.dueAmountFormCtl.setValue(this.admission.dueAmount);
        this.promiseToPayDateFormCtl.setValue(this.admission.promiseToPayDate);
        var student = this.admission.student;
        if (student) {
            this.studIdFormCtl.setValue(student.id);
            this.firstNameFormCtl.setValue(student.firstName);
            this.lastNameFormCtl.setValue(student.lastName);
            this.rollNoFormCtl.setValue(student.rollNo);
            this.registrationNoFormCtl.setValue(student.registrationNo);
            this.registrationDateFormCtl.setValue(student.registrationDate);
            this.registrationStatusFormCtl.setValue(student.registrationStatus);
        }
        this.fees = this.admission.fees;
    };
    AdmissionFeeCreateEditComponent.prototype.save = function () {
        var _this = this;
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]("en-US");
        var admissionPayloadData = {
            id: this.idFormCtl.value,
            admissionRefNo: this.admissionRefNoFormCtl.value,
            academicYear: this.academicYearFormCtl.value,
            admissionDate: datePipe.transform(this.admissionDateFormCtl.value, 'MM/dd/yyyy'),
            standard: this.standardFormCtl.value,
            status: this.statusFormCtl.value,
            admissionAmount: this.admissionAmountFormCtl.value,
            paidAmount: this.paidAmountFormCtl.value,
            dueAmount: this.dueAmountFormCtl.value,
            promiseToPayDate: this.promiseToPayDateFormCtl.value,
            student: {
                sameAsPermAddr: null,
                permanentAddress: null,
                correspondentAddress: null,
                dob: null,
                fatherInfo: null,
                firstName: null,
                guardianInfo: null,
                id: this.studIdFormCtl.value,
                joiningDate: null,
                lastName: null,
                middleName: null,
                motherInfo: null,
                registrationDate: null,
                registrationNo: null,
                registrationStatus: null,
                rollNo: null,
                standard: null,
                gender: null,
                bloodGroup: null,
                religion: null,
                community: null,
                nationality: null,
                aadhaarNo: null,
                physicallyChallenged: null,
            },
            fees: null
        };
        console.log(admissionPayloadData);
        this.saveOrUpdateHttpObservable(this.admId, admissionPayloadData).subscribe(function (data) {
            _this.hasSubmitted = true;
            _this.router.navigate(["/student/admissions"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionFeeCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (admid, admissionPayloadData) {
        if (this.admId) {
            return this.http.put(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADMISSIONS + "/" + admid, admissionPayloadData);
        }
        else {
            return this.http.post(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADMISSIONS, admissionPayloadData);
        }
    };
    AdmissionFeeCreateEditComponent.prototype.searchStudent = function () {
        var _this = this;
        var dialogRef = this.matDialog.open(_search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_9__["SearchStudentDialogComponent"], { width: '60%' })
            .afterClosed().subscribe(function (data) {
            if (data) {
                _this.student = data;
                _this.registrationDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_6__(_this.student.registrationDate));
                _this.registrationNoFormCtl.setValue(_this.student.registrationNo);
                _this.registrationStatusFormCtl.setValue(_this.student.registrationStatus);
                _this.studIdFormCtl.setValue(_this.student.id);
                _this.firstNameFormCtl.setValue(_this.student.firstName);
                _this.lastNameFormCtl.setValue(_this.student.lastName);
            }
        });
    };
    AdmissionFeeCreateEditComponent.prototype.generateFees = function () {
        var _this = this;
        var acaYear = this.academicYearFormCtl.value;
        var standard = this.standardFormCtl.value;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADMISSIONS + "/fees/" + standard + "/" + acaYear).subscribe(function (data) {
            _this.fees = data["data"];
            _this.feesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](_this.fees);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionFeeCreateEditComponent.prototype.onSelectStandard = function (standard) {
        this.paidAmountFormCtl.setValue(null);
        this.dueAmountFormCtl.setValue(null);
        this.getAddmissionFeeMaitenance(standard, this.academicYearFormCtl.value);
    };
    AdmissionFeeCreateEditComponent.prototype.getAddmissionFeeMaitenance = function (standard, academicYear) {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE + "/" + standard + "/" + academicYear + "/standard-year").subscribe(function (data) {
            _this.admissionFeeMaintenance = data["data"];
            if (_this.admissionFeeMaintenance) {
                _this.admissionAmountFormCtl.setValue(_this.admissionFeeMaintenance.admissionAmount);
            }
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionFeeCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admission-fee-create-edit',
            template: __webpack_require__(/*! ./admission-fee-create-edit.component.html */ "./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./admission-fee-create-edit.component.css */ "./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.css"), __webpack_require__(/*! ../../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], AdmissionFeeCreateEditComponent);
    return AdmissionFeeCreateEditComponent;
}(_admission__WEBPACK_IMPORTED_MODULE_2__["Admission"]));



/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-create-edit/admission.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-create-edit/admission.ts ***!
  \******************************************************************************************/
/*! exports provided: Admission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admission", function() { return Admission; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_student_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/student.model */ "./src/app/model/student.model.ts");
/* harmony import */ var src_app_model_admission_fee_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/admission-fee.model */ "./src/app/model/admission-fee.model.ts");



var Admission = /** @class */ (function () {
    function Admission() {
        this.hasSubmitted = false;
        this.admissionStatuses = src_app_model_admission_fee_model__WEBPACK_IMPORTED_MODULE_2__["AdmissionStatuses"];
        this.registrationStatuses = src_app_model_student_model__WEBPACK_IMPORTED_MODULE_1__["RegistrationStatus"];
        this.standards = src_app_model_student_model__WEBPACK_IMPORTED_MODULE_1__["Standards"];
        this.feeColumns = [
            "id",
            "feeRef",
            "amount",
            "exptdateOfPayment",
            "actdateOfPayment",
            "monthOf",
            "status",
        ];
        this.fee = [];
        this.idFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.admissionRefNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.academicYearFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.admissionDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.standardFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.statusFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.admissionAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.paidAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.dueAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.promiseToPayDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.studIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.firstNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.lastNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.rollNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.regIdIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.registrationNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.registrationDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.registrationStatusFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.admissionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            admissionRefNoFormCtl: this.admissionRefNoFormCtl,
            academicYearFormCtl: this.academicYearFormCtl,
            admissionDateFormCtl: this.admissionDateFormCtl,
            standardFormCtl: this.standardFormCtl,
            statusFormCtl: this.statusFormCtl,
            admissionAmountFormCtl: this.admissionAmountFormCtl,
            paidAmountFormCtl: this.paidAmountFormCtl,
            dueAmountFormCtl: this.dueAmountFormCtl,
            promiseToPayDateFormCtl: this.promiseToPayDateFormCtl,
            firstNameFormCtl: this.firstNameFormCtl,
            lastNameFormCtl: this.lastNameFormCtl,
        });
        this.academicYearFormCtl.setValue(new Date().getFullYear());
        this.academicYearFormCtl.disable();
        this.admissionRefNoFormCtl.disable();
        this.admissionDateFormCtl.disable();
        this.statusFormCtl.disable();
        this.firstNameFormCtl.disable();
        this.lastNameFormCtl.disable();
        this.rollNoFormCtl.disable();
        this.registrationNoFormCtl.disable();
        this.registrationDateFormCtl.disable();
        this.registrationStatusFormCtl.disable();
        this.dueAmountFormCtl.disable();
        this.promiseToPayDateFormCtl.disable();
    }
    return Admission;
}());



/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvYWRtaXNzaW9uLWZlZS9hZG1pc3Npb24tZmVlLWxpc3QvYWRtaXNzaW9uLWZlZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Admissions</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/student/admission-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Admission\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!-- Employess -->\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n      <!-- Table -->\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"admissionsDataSource\" matSort>\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.student?.firstName\r\n              +\" \"+row.student?.lastName}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"registrationNo\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration No.</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.student?.registrationNo}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Class\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Class</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.standard}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"Admission Number\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Admission Number</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.admissionRefNo}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDeleteRow(row.id)\">\r\n              <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"admissionColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: admissionColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AdmissionFeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionFeeListComponent", function() { return AdmissionFeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");






var AdmissionFeeListComponent = /** @class */ (function () {
    function AdmissionFeeListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.admissionColumns = ["id", "name", "registrationNo", "Class", "Admission Number", "action"];
        this.admissions = [];
    }
    AdmissionFeeListComponent.prototype.ngOnInit = function () {
        this.getAdmissions();
    };
    AdmissionFeeListComponent.prototype.getAdmissions = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADMISSIONS).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.admissions = resp.data;
                _this.admissionsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.admissions);
                if (!_this.admissions)
                    _this.errorMessage = "No Admission found";
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
    AdmissionFeeListComponent.prototype.onClickRow = function (admId) {
        this.router.navigate(["/student/" + admId + "/admission-view"]);
    };
    AdmissionFeeListComponent.prototype.onDeleteRow = function (admId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADMISSIONS + "/" + admId).subscribe(function (data) {
            _this.admissionsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
            _this.ngOnInit();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionFeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admission-fee-list',
            template: __webpack_require__(/*! ./admission-fee-list.component.html */ "./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.html"),
            styles: [__webpack_require__(/*! ./admission-fee-list.component.css */ "./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdmissionFeeListComponent);
    return AdmissionFeeListComponent;
}());



/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvYWRtaXNzaW9uLWZlZS9hZG1pc3Npb24tZmVlLXZpZXcvYWRtaXNzaW9uLWZlZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Admission Details</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" routerLink=\"/student/admissions\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>&nbsp;Back\r\n      </button>\r\n      <button class=\"btn btn-cancel\" (click)=\"delete()\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Delete\r\n      </button>\r\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\r\n        <mat-icon>edit</mat-icon>&nbsp;Edit\r\n      </button>\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/student/admission-create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Admission\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\" *ngIf=\"admission\">\r\n    <mat-tab-group>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n          <span style=\"font-size: 13px;\">Admission Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <!-- ============== Student Info ===================== -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Student Info</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>First name : {{admission.student?.firstName}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Middle name : {{admission.student?.middleName}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Last name : {{admission.student?.lastName}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Registration Number : {{admission.student?.registrationNo}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Registration Date : {{admission.student?.registrationDate}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Registration Status : {{admission.student?.registrationStatus}}</p>\r\n          </div>\r\n          <!-- ============== Admission Info ===================== -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Admission Info</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Admission Reference No : {{admission.admissionRefNo}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Academic Year : {{admission.academicYear}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Admission Date : {{admission.admissionDate}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Admission For : {{admission.standard}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Status : {{admission.status}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Admission Amount : {{admission.admissionAmount}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Paid Amount : {{admission.paidAmount}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Due Amount : {{admission.dueAmount}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Promise To Pay Date : {{admission.promiseToPayDate}}</p>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon>contact_phone</mat-icon>\r\n          <span style=\"font-size: 13px;\">Fees Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12 table-header mb-5\">\r\n            <div class=\"row p-2\">\r\n              <div class=\"col-md-6\">\r\n                <span style=\"font-weight: bold; font-size: 14px;\">Fees</span>\r\n              </div>\r\n            </div>\r\n            <!-- Table -->\r\n            <div class=\"no-shadow w-100\">\r\n              <table mat-table [dataSource]=\"feesDataSource\" matSort>\r\n\r\n                <ng-container matColumnDef=\"id\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n                  <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"feeRef\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Ref No.</th>\r\n                  <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row)\">{{row.feeRefNo}}</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"amount\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Ammount</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.amount}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"exptdateOfPayment\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Expected Date Of Payment</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.exptdateOfPayment}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"actdateOfPayment\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Actual Date Of Payment</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.actdateOfPayment}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"monthOf\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Month Of</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.monthOf}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"status\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n                  <td mat-cell *matCellDef=\"let row\"> {{row.status}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"action\">\r\n                  <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n                  <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDeleteFeeRow(row.id)\">\r\n                    <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n                  </td>\r\n                </ng-container>\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"feeColumns;sticky: true\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: feeColumns ; let i = index;\">\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AdmissionFeeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionFeeViewComponent", function() { return AdmissionFeeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var AdmissionFeeViewComponent = /** @class */ (function () {
    function AdmissionFeeViewComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.feeColumns = [
            "id",
            "feeRef",
            "amount",
            "exptdateOfPayment",
            "actdateOfPayment",
            "monthOf",
            "status",
            "action"
        ];
        this.fee = [];
        this.activatedRoute.params.subscribe(function (params) {
            _this.admId = params.admId;
        });
    }
    AdmissionFeeViewComponent.prototype.ngOnInit = function () {
        this.getAdmission();
    };
    AdmissionFeeViewComponent.prototype.getAdmission = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ADMISSIONS + "/" + this.admId).subscribe(function (data) {
            resp = data;
            _this.admission = resp.data;
            if (_this.admission.fees) {
                _this.feesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.admission.fees);
            }
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionFeeViewComponent.prototype.delete = function () {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ADMISSIONS + "/" + this.admId).subscribe(function (data) {
            _this.router.navigate(["/student/admissions"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    AdmissionFeeViewComponent.prototype.edit = function () {
        this.router.navigate(["/student/" + this.admId + "/admission-edit"]);
    };
    AdmissionFeeViewComponent.prototype.onDeleteFeeRow = function (feeId) {
    };
    AdmissionFeeViewComponent.prototype.onClickRow = function (fee) {
    };
    AdmissionFeeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admission-fee-view',
            template: __webpack_require__(/*! ./admission-fee-view.component.html */ "./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.html"),
            styles: [__webpack_require__(/*! ./admission-fee-view.component.css */ "./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdmissionFeeViewComponent);
    return AdmissionFeeViewComponent;
}());



/***/ }),

/***/ "./src/app/components/students/search-student-dialog/search-student-dialog.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/students/search-student-dialog/search-student-dialog.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialg-header{\r\n    background-image: linear-gradient(to right, #065c37, #09713f, #138747, #229d4c, #33b451);\r\n    padding: 5px;\r\n    color: #ffffff;\r\n    padding-left: 15px;\r\n}\r\n\r\n.table thead th {\r\n    border-bottom: none !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50cy9zZWFyY2gtc3R1ZGVudC1kaWFsb2cvc2VhcmNoLXN0dWRlbnQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3RkFBd0Y7SUFDeEYsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0dWRlbnRzL3NlYXJjaC1zdHVkZW50LWRpYWxvZy9zZWFyY2gtc3R1ZGVudC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsZy1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNjVjMzcsICMwOTcxM2YsICMxMzg3NDcsICMyMjlkNGMsICMzM2I0NTEpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/students/search-student-dialog/search-student-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/students/search-student-dialog/search-student-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 450px\">\r\n  <div class=\"dialg-header w-100\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <span class=\"lead\">Search Student</span>\r\n      </div>\r\n      <div class=\"col-md-6 text-right pr-0\">\r\n        <mat-icon style=\"cursor: pointer; font-size: 23px;\" (click)=\"close()\">cancel</mat-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 p-0 shadow-sm table-header mb-5\">\r\n        <div class=\"row p-2\">\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field appearance=\"\" class=\"w-100\">\r\n              <mat-label>First name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"firstNameFormCtl\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field appearance=\"\" class=\"w-100\">\r\n              <mat-label>Last name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"lastNameFormCtl\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <mat-form-field appearance=\"\" class=\"w-100\">\r\n              <mat-label>Registration Number</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"registrationNoFctrl\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <button class=\"btn btn-edit w-100\" style=\"padding-bottom: 27px; margin-top: 10px;\" (click)=\"searchStudent()\">\r\n              <mat-icon>search</mat-icon>&nbsp;Search\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"no-shadow\">\r\n          <table mat-table [dataSource]=\"studentDataSource\" matSort class=\"\">\r\n\r\n            <ng-container matColumnDef=\"id\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n              <td mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"firstName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name </th>\r\n              <td mat-cell *matCellDef=\"let row\">{{row.firstName}}</td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"middleName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Middle Name</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.middleName}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"lastName\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.lastName}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"class\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Class</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.standard}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"registrationNo\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration Number</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.registrationNo}} </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"status\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.registrationStatus}} </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"studentColumns;sticky: true\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: studentColumns ; let i = index;\" (click)=\"select(row)\">\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/students/search-student-dialog/search-student-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/students/search-student-dialog/search-student-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SearchStudentDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStudentDialogComponent", function() { return SearchStudentDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");






var SearchStudentDialogComponent = /** @class */ (function () {
    function SearchStudentDialogComponent(dialogRef, data, http) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.firstNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null);
        this.lastNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null);
        this.registrationNoFctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, null);
        this.students = [];
        this.studentColumns = ["id", "firstName", "middleName", "lastName", "class", "registrationNo", "status"];
    }
    SearchStudentDialogComponent.prototype.ngOnInit = function () {
        this.studentDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.students);
    };
    SearchStudentDialogComponent.prototype.searchStudent = function () {
        var _this = this;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].STUDENTS).subscribe(function (data) {
            _this.students = data["data"];
            _this.studentDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.students);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    SearchStudentDialogComponent.prototype.select = function (student) {
        this.dialogRef.close(student);
    };
    SearchStudentDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], SearchStudentDialogComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], SearchStudentDialogComponent.prototype, "sort", void 0);
    SearchStudentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-student-dialog',
            template: __webpack_require__(/*! ./search-student-dialog.component.html */ "./src/app/components/students/search-student-dialog/search-student-dialog.component.html"),
            styles: [__webpack_require__(/*! ./search-student-dialog.component.css */ "./src/app/components/students/search-student-dialog/search-student-dialog.component.css"), __webpack_require__(/*! ../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SearchStudentDialogComponent);
    return SearchStudentDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.css":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvc3R1ZGVudC1hdHRlbmRlbmNlL3N0dWRlbnQtYXR0ZW5kZW5jZS1jcmVhdGUtZWRpdC9zdHVkZW50LWF0dGVuZGVuY2UtY3JlYXRlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  student-attendence-create-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: StudentAttendenceCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendenceCreateEditComponent", function() { return StudentAttendenceCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentAttendenceCreateEditComponent = /** @class */ (function () {
    function StudentAttendenceCreateEditComponent() {
    }
    StudentAttendenceCreateEditComponent.prototype.ngOnInit = function () {
    };
    StudentAttendenceCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-attendence-create-edit',
            template: __webpack_require__(/*! ./student-attendence-create-edit.component.html */ "./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./student-attendence-create-edit.component.css */ "./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentAttendenceCreateEditComponent);
    return StudentAttendenceCreateEditComponent;
}());



/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvc3R1ZGVudC1hdHRlbmRlbmNlL3N0dWRlbnQtYXR0ZW5kZW5jZS1saXN0L3N0dWRlbnQtYXR0ZW5kZW5jZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  student-attendence-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: StudentAttendenceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendenceListComponent", function() { return StudentAttendenceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentAttendenceListComponent = /** @class */ (function () {
    function StudentAttendenceListComponent() {
    }
    StudentAttendenceListComponent.prototype.ngOnInit = function () {
    };
    StudentAttendenceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-attendence-list',
            template: __webpack_require__(/*! ./student-attendence-list.component.html */ "./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.html"),
            styles: [__webpack_require__(/*! ./student-attendence-list.component.css */ "./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentAttendenceListComponent);
    return StudentAttendenceListComponent;
}());



/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvc3R1ZGVudC1hdHRlbmRlbmNlL3N0dWRlbnQtYXR0ZW5kZW5jZS12aWV3L3N0dWRlbnQtYXR0ZW5kZW5jZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  student-attendence-view works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: StudentAttendenceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendenceViewComponent", function() { return StudentAttendenceViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentAttendenceViewComponent = /** @class */ (function () {
    function StudentAttendenceViewComponent() {
    }
    StudentAttendenceViewComponent.prototype.ngOnInit = function () {
    };
    StudentAttendenceViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-attendence-view',
            template: __webpack_require__(/*! ./student-attendence-view.component.html */ "./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.html"),
            styles: [__webpack_require__(/*! ./student-attendence-view.component.css */ "./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentAttendenceViewComponent);
    return StudentAttendenceViewComponent;
}());



/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvc3R1ZGVudC1hdHRlbmRlbmNlL3N0dWRlbnQtYXR0ZW5kZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  student-attendence works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/students/student-attendence/student-attendence.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/students/student-attendence/student-attendence.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StudentAttendenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendenceComponent", function() { return StudentAttendenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentAttendenceComponent = /** @class */ (function () {
    function StudentAttendenceComponent() {
    }
    StudentAttendenceComponent.prototype.ngOnInit = function () {
    };
    StudentAttendenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-attendence',
            template: __webpack_require__(/*! ./student-attendence.component.html */ "./src/app/components/students/student-attendence/student-attendence.component.html"),
            styles: [__webpack_require__(/*! ./student-attendence.component.css */ "./src/app/components/students/student-attendence/student-attendence.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentAttendenceComponent);
    return StudentAttendenceComponent;
}());



/***/ }),

/***/ "./src/app/components/students/student/student-create-edit/student-create-edit.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/students/student/student-create-edit/student-create-edit.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-form-field-appearance-fill .mat-form-field-infix {\r\n  padding: 0 0.75em 0 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50cy9zdHVkZW50L3N0dWRlbnQtY3JlYXRlLWVkaXQvc3R1ZGVudC1jcmVhdGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50cy9zdHVkZW50L3N0dWRlbnQtY3JlYXRlLWVkaXQvc3R1ZGVudC1jcmVhdGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwIDAuNzVlbSAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/students/student/student-create-edit/student-create-edit.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/students/student/student-create-edit/student-create-edit.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">New Registration</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-cancel\" routerLink=\"/student/registration/list\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Cancel\r\n      </button>\r\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!studentForm.valid'>\r\n        <mat-icon>save_alt</mat-icon>&nbsp;Save Employee\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\">\r\n    <mat-tab-group>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n          <span style=\"font-size: 13px;\">General Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Student Info</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>First name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"firstNameFormCtl\">\r\n              <mat-error *ngIf=\"firstNameFormCtl.hasError('required')\">\r\n                First name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Middle name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"middleNameFormCtl\">\r\n              <mat-error *ngIf=\"middleNameFormCtl.hasError('required')\">\r\n                Middle name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Last name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"lastNameFormCtl\">\r\n              <mat-error *ngIf=\"lastNameFormCtl.hasError('required')\">\r\n                Last name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Gender</mat-label>\r\n              <mat-select [formControl]=\"genderFormCtl\">\r\n                <mat-option *ngFor=\"let option of genders\" [value]=\"option.value\">\r\n                  {{option.value}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"genderFormCtl.hasError('required')\">\r\n                Gender is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Blood group</mat-label>\r\n              <mat-select [formControl]=\"bloodGroupFormCtl\">\r\n                <mat-option *ngFor=\"let option of bloodGroups\" [value]=\"option\">\r\n                  {{option}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"bloodGroupFormCtl.hasError('required')\">\r\n                Blood group is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Religion</mat-label>\r\n              <mat-select [formControl]=\"religionFormCtl\">\r\n                <mat-option *ngFor=\"let option of religions\" [value]=\"option\">\r\n                  {{option}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"religionFormCtl.hasError('required')\">\r\n                Religion is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          \r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Nationality</mat-label>\r\n              <mat-select [formControl]=\"nationalityFormCtl\">\r\n                <mat-option *ngFor=\"let option of nationalities\" [value]=\"option\">\r\n                  {{option}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"nationalityFormCtl.hasError('required')\">\r\n                Nationality is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Community</mat-label>\r\n              <mat-select [formControl]=\"communityFormCtl\">\r\n                <mat-option *ngFor=\"let option of communities\" [value]=\"option\">\r\n                  {{option}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"communityFormCtl.hasError('required')\">\r\n                Community is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Physically Challenged ?</mat-label>\r\n              <mat-select [formControl]=\"physicallyChallengedFormCtl\">\r\n                <mat-option *ngFor=\"let option of yesNo\" [value]=\"option.value\">\r\n                  {{option.key}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"communityFormCtl.hasError('required')\">\r\n                Community is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Standard</mat-label>\r\n              <mat-select placeholder=\"Status\" [formControl]=\"standardFormCtl\">\r\n                <mat-option *ngFor=\"let option of standards\" [value]=\"option.value\">\r\n                  {{option.value}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"standardFormCtl.hasError('required')\">\r\n                Standard is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Date of birth</mat-label>\r\n              <input matInput [matDatepicker]=\"dobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"dobFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dobt\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dobt></mat-datepicker>\r\n              <mat-error *ngIf=\"dobFormCtl.hasError('required')\">\r\n                Date of birth is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Joining Date</mat-label>\r\n              <input matInput [matDatepicker]=\"joiningDatet\" placeholder=\"mm/dd/yyyy\" [formControl]=\"joiningDateFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"joiningDatet\"></mat-datepicker-toggle>\r\n              <mat-datepicker #joiningDatet></mat-datepicker>\r\n              <mat-error *ngIf=\"joiningDateFormCtl.hasError('required')\">\r\n                Joining Date is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Permanent Address</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>First line</mat-label>\r\n              <input matInput placeholder=\"First line\" [formControl]=\"firstLineFormCtl\">\r\n              <mat-error *ngIf=\"firstLineFormCtl.hasError('required')\">\r\n                First line is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Second line</mat-label>\r\n              <input matInput placeholder=\"Second line\" [formControl]=\"secondLineFormCtl\">\r\n              <mat-error *ngIf=\"secondLineFormCtl.hasError('required')\">\r\n                Second line is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Country</mat-label>\r\n              <input matInput placeholder=\"Country\" [formControl]=\"countryFormCtl\">\r\n              <mat-error *ngIf=\"countryFormCtl.hasError('required')\">\r\n                Country is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>State</mat-label>\r\n              <input matInput placeholder=\"State\" [formControl]=\"stateFormCtl\">\r\n              <mat-error *ngIf=\"stateFormCtl.hasError('required')\">\r\n                State is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>District</mat-label>\r\n              <input matInput placeholder=\"District\" [formControl]=\"districtFormCtl\">\r\n              <mat-error *ngIf=\"districtFormCtl.hasError('required')\">\r\n                District is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Correspondent Address</p>\r\n          </div>\r\n          <div class=\"col-md-12 pb-2\">\r\n            <div><label>Same as permanent address</label></div>\r\n            <mat-radio-group [formControl]=\"sameAsPermAddrFormCtl\">\r\n              <mat-radio-button *ngFor=\"let option of yesNo\" [value]=\"option.value\">\r\n                {{option.key}} &nbsp;\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>First line</mat-label>\r\n              <input matInput placeholder=\"First line\" [formControl]=\"corrFirstLineFormCtl\">\r\n              <mat-error *ngIf=\"corrFirstLineFormCtl.hasError('required')\">\r\n                First line is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Second line</mat-label>\r\n              <input matInput placeholder=\"Second line\" [formControl]=\"corrSecondLineFormCtl\">\r\n              <mat-error *ngIf=\"corrSecondLineFormCtl.hasError('required')\">\r\n                Second line is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Country</mat-label>\r\n              <input matInput placeholder=\"Country\" [formControl]=\"corrCountryFormCtl\">\r\n              <mat-error *ngIf=\"corrCountryFormCtl.hasError('required')\">\r\n                Country is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>State</mat-label>\r\n              <input matInput placeholder=\"State\" [formControl]=\"corrStateFormCtl\">\r\n              <mat-error *ngIf=\"corrStateFormCtl.hasError('required')\">\r\n                State is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>District</mat-label>\r\n              <input matInput placeholder=\"District\" [formControl]=\"corrDistrictFormCtl\">\r\n              <mat-error *ngIf=\"corrDistrictFormCtl.hasError('required')\">\r\n                District is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon>insert_drive_file</mat-icon>\r\n          <span style=\"font-size: 13px;\">Parent's and Guardian's Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Father's details</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Father's Name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"fatherNameFormCtl\">\r\n              <mat-error *ngIf=\"fatherNameFormCtl.hasError('required')\">\r\n                Father's Name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Date of birth</mat-label>\r\n              <input matInput [matDatepicker]=\"fdobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"fatherDobFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"fdobt\"></mat-datepicker-toggle>\r\n              <mat-datepicker #fdobt></mat-datepicker>\r\n              <mat-error *ngIf=\"fatherDobFormCtl.hasError('required')\">\r\n                Date of birth is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Education Qualification</mat-label>\r\n              <input matInput placeholder=\"Education Qualification\" [formControl]=\"fatherEduQualiFormCtl\">\r\n              <mat-error *ngIf=\"fatherEduQualiFormCtl.hasError('required')\">\r\n                Education Qualification is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Occupation</mat-label>\r\n              <input matInput placeholder=\"Occupation\" [formControl]=\"fatherOccupationFormCtl\">\r\n              <mat-error *ngIf=\"fatherOccupationFormCtl.hasError('required')\">\r\n                Occupation is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Annual Income</mat-label>\r\n              <input matInput placeholder=\"Annual Income\" [formControl]=\"fatherAnnualIncomeFormCtl\">\r\n              <mat-error *ngIf=\"fatherAnnualIncomeFormCtl.hasError('required')\">\r\n                Annual Income is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field> \r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Aadhaar No</mat-label>\r\n              <input matInput placeholder=\"Aadhaar No\" [formControl]=\"fatherAadhaarNoFormCtl\">\r\n              <mat-error *ngIf=\"fatherAadhaarNoFormCtl.hasError('required')\">\r\n                Aadhaar No is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Contact No.</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"fatherContactNoFormCtl\">\r\n              <mat-error *ngIf=\"fatherContactNoFormCtl.hasError('required')\">\r\n                Contact No. is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n          <!-- Mother's details -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Mother's details</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Mother's Name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"motherNameFormCtl\">\r\n              <mat-error *ngIf=\"motherNameFormCtl.hasError('required')\">\r\n                Mother's Name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Date of birth</mat-label>\r\n              <input matInput [matDatepicker]=\"mdobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"motherDobFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"mdobt\"></mat-datepicker-toggle>\r\n              <mat-datepicker #mdobt></mat-datepicker>\r\n              <mat-error *ngIf=\"motherDobFormCtl.hasError('required')\">\r\n                Date of birth is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Education Qualification</mat-label>\r\n              <input matInput placeholder=\"Education Qualification\" [formControl]=\"motherEduQualiFormCtl\">\r\n              <mat-error *ngIf=\"motherEduQualiFormCtl.hasError('required')\">\r\n                Education Qualification is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Occupation</mat-label>\r\n              <input matInput placeholder=\"Occupation\" [formControl]=\"motherOccupationFormCtl\">\r\n              <mat-error *ngIf=\"motherOccupationFormCtl.hasError('required')\">\r\n                Occupation is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div> \r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Annual Income</mat-label>\r\n              <input matInput placeholder=\"Annual Income\" [formControl]=\"motherAnnualIncomeFormCtl\">\r\n              <mat-error *ngIf=\"motherAnnualIncomeFormCtl.hasError('required')\">\r\n                Annual Income is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Aadhaar No</mat-label>\r\n              <input matInput placeholder=\"Aadhaar No\" [formControl]=\"motherAadhaarNoFormCtl\">\r\n              <mat-error *ngIf=\"motherAadhaarNoFormCtl.hasError('required')\">\r\n                Aadhaar No is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Contact No.</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"motherContactNoFormCtl\">\r\n              <mat-error *ngIf=\"motherContactNoFormCtl.hasError('required')\">\r\n                Contact No. is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- Guardian's details -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Guardian's details</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Guardian's Name</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"guardianNameFormCtl\">\r\n              <mat-error *ngIf=\"guardianNameFormCtl.hasError('required')\">\r\n                Guardian's Name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Date of birth</mat-label>\r\n              <input matInput [matDatepicker]=\"gdobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"guardianDobFormCtl\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"gdobt\"></mat-datepicker-toggle>\r\n              <mat-datepicker #gdobt></mat-datepicker>\r\n              <mat-error *ngIf=\"guardianDobFormCtl.hasError('required')\">\r\n                Date of birth is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Education Qualification</mat-label>\r\n              <input matInput placeholder=\"Education Qualification\" [formControl]=\"guardianEduQualiFormCtl\">\r\n              <mat-error *ngIf=\"guardianEduQualiFormCtl.hasError('required')\">\r\n                Education Qualification is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Occupation</mat-label>\r\n              <input matInput placeholder=\"Occupation\" [formControl]=\"gaurdianOccupationFormCtl\">\r\n              <mat-error *ngIf=\"gaurdianOccupationFormCtl.hasError('required')\">\r\n                Occupation is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Annual Income</mat-label>\r\n              <input matInput placeholder=\"Annual Income\" [formControl]=\"guardianAnnualIncomeFormCtl\">\r\n              <mat-error *ngIf=\"guardianAnnualIncomeFormCtl.hasError('required')\">\r\n                Annual Income is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field> \r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Aadhaar No</mat-label>\r\n              <input matInput placeholder=\"Aadhaar No\" [formControl]=\"gaurdianAadhaarNoFormCtl\">\r\n              <mat-error *ngIf=\"gaurdianAadhaarNoFormCtl.hasError('required')\">\r\n                Aadhaar No is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <mat-form-field appearance=\"fill\" class=\"w-100\">\r\n              <mat-label>Contact No.</mat-label>\r\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"guardianContactNoFormCtl\">\r\n              <mat-error *ngIf=\"guardianContactNoFormCtl.hasError('required')\">\r\n                Contact No. is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/students/student/student-create-edit/student-create-edit.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/students/student/student-create-edit/student-create-edit.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: StudentCreateEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCreateEditComponent", function() { return StudentCreateEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student */ "./src/app/components/students/student/student-create-edit/student.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var StudentCreateEditComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentCreateEditComponent, _super);
    function StudentCreateEditComponent(http, router, activatedRoute) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.activatedRoute.params.subscribe(function (params) {
            _this.studId = params.studId;
            if (_this.studId)
                _this.getStudent();
        });
        return _this;
    }
    StudentCreateEditComponent.prototype.ngOnInit = function () {
        this.sameAsPermAddrFormCtl.setValue(false);
    };
    StudentCreateEditComponent.prototype.getStudent = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].STUDENTS + "/" + this.studId).subscribe(function (data) {
            resp = data;
            _this.student = resp.data;
            _this.setForm();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    StudentCreateEditComponent.prototype.save = function () {
        var _this = this;
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]("en-US");
        var studentPayloadData = {
            id: this.idFormCtl.value,
            registrationNo: this.registrationNoFormCtl.value,
            registrationDate: datePipe.transform(this.registrationDateFormCtl.value, 'MM/dd/yyyy'),
            registrationStatus: this.registrationStatusFormCtl.value,
            firstName: this.firstNameFormCtl.value,
            middleName: this.middleNameFormCtl.value,
            lastName: this.lastNameFormCtl.value,
            standard: this.standardFormCtl.value,
            rollNo: this.rollNoFormCtl.value,
            dob: datePipe.transform(this.dobFormCtl.value, 'MM/dd/yyyy'),
            joiningDate: datePipe.transform(this.joiningDateFormCtl.value, 'MM/dd/yyyy'),
            gender: this.genderFormCtl.value,
            bloodGroup: this.bloodGroupFormCtl.value,
            religion: this.religionFormCtl.value,
            community: this.communityFormCtl.value,
            nationality: this.nationalityFormCtl.value,
            aadhaarNo: this.aadhaarNoFormCtl.value,
            physicallyChallenged: this.physicallyChallengedFormCtl.value,
            sameAsPermAddr: this.sameAsPermAddrFormCtl.value,
            permanentAddress: {
                id: this.addIdFormCtl.value,
                firstLine: this.firstLineFormCtl.value,
                secondLine: this.secondLineFormCtl.value,
                country: this.countryFormCtl.value,
                state: this.stateFormCtl.value,
                district: this.districtFormCtl.value
            },
            correspondentAddress: {
                id: this.corrAddIdFormCtl.value,
                firstLine: this.corrFirstLineFormCtl.value,
                secondLine: this.corrSecondLineFormCtl.value,
                country: this.corrCountryFormCtl.value,
                state: this.corrStateFormCtl.value,
                district: this.corrDistrictFormCtl.value
            },
            fatherInfo: {
                id: this.fInfoIdFormCtl.value,
                name: this.fatherNameFormCtl.value,
                dob: datePipe.transform(this.fatherDobFormCtl.value, 'MM/dd/yyyy'),
                relationship: null,
                contactNo: this.fatherContactNoFormCtl.value
            },
            motherInfo: {
                id: this.mInfoIdFormCtl.value,
                name: this.motherNameFormCtl.value,
                dob: datePipe.transform(this.motherDobFormCtl.value, 'MM/dd/yyyy'),
                relationship: null,
                contactNo: this.motherContactNoFormCtl.value
            },
            guardianInfo: {
                id: this.gInfoIdFormCtl.value,
                name: this.guardianNameFormCtl.value,
                dob: datePipe.transform(this.guardianDobFormCtl.value, 'MM/dd/yyyy'),
                relationship: null,
                contactNo: this.guardianContactNoFormCtl.value
            }
        };
        console.log(studentPayloadData);
        this.saveOrUpdateHttpObservable(this.studId, studentPayloadData).subscribe(function (data) {
            _this.hasSubmitted = true;
            _this.router.navigate(["/student/list"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    StudentCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (studRegdId, studentPayloadData) {
        if (this.studId) {
            return this.http.put(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].STUDENTS + "/" + studRegdId, studentPayloadData);
        }
        else {
            return this.http.post(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].STUDENTS, studentPayloadData);
        }
    };
    StudentCreateEditComponent.prototype.setForm = function () {
        this.idFormCtl.setValue(this.student.id);
        this.registrationNoFormCtl.setValue(this.student.registrationNo);
        this.registrationDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_6__(this.student.registrationDate));
        this.registrationStatusFormCtl.setValue(this.student.registrationStatus);
        this.firstNameFormCtl.setValue(this.student.firstName);
        this.middleNameFormCtl.setValue(this.student.middleName);
        this.lastNameFormCtl.setValue(this.student.lastName);
        this.standardFormCtl.setValue(this.student.standard);
        this.rollNoFormCtl.setValue(this.student.rollNo);
        this.dobFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_6__(this.student.dob));
        this.joiningDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_6__(this.student.joiningDate));
        this.genderFormCtl.setValue(this.student.gender);
        this.bloodGroupFormCtl.setValue(this.student.bloodGroup);
        this.religionFormCtl.setValue(this.student.religion);
        this.nationalityFormCtl.setValue(this.student.nationality);
        this.communityFormCtl.setValue(this.student.community);
        this.aadhaarNoFormCtl.setValue(this.student.aadhaarNo);
        this.physicallyChallengedFormCtl.setValue(this.student.physicallyChallenged);
        var permanentAddress = this.student.permanentAddress;
        if (permanentAddress) {
            this.addIdFormCtl.setValue(permanentAddress.id);
            this.firstLineFormCtl.setValue(permanentAddress.firstLine);
            this.secondLineFormCtl.setValue(permanentAddress.secondLine);
            this.countryFormCtl.setValue(permanentAddress.id);
            this.stateFormCtl.setValue(permanentAddress.country);
            this.districtFormCtl.setValue(permanentAddress.district);
        }
        this.sameAsPermAddrFormCtl.setValue(this.student.sameAsPermAddr);
        var correspondentAddress = this.student.correspondentAddress;
        if (correspondentAddress) {
            this.corrAddIdFormCtl.setValue(correspondentAddress.id);
            this.corrFirstLineFormCtl.setValue(correspondentAddress.firstLine);
            this.corrSecondLineFormCtl.setValue(correspondentAddress.secondLine);
            this.corrCountryFormCtl.setValue(correspondentAddress.id);
            this.corrStateFormCtl.setValue(correspondentAddress.country);
            this.corrDistrictFormCtl.setValue(correspondentAddress.district);
        }
        var fatherInfo = this.student.fatherInfo;
        if (fatherInfo) {
            this.fInfoIdFormCtl.setValue(fatherInfo.id);
            this.fatherNameFormCtl.setValue(fatherInfo.name);
            this.fatherDobFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_6__(fatherInfo.dob));
            this.fatherContactNoFormCtl.setValue(fatherInfo.contactNo);
        }
        var motherInfo = this.student.motherInfo;
        if (motherInfo) {
            this.mInfoIdFormCtl.setValue(motherInfo.id);
            this.motherNameFormCtl.setValue(motherInfo.name);
            this.motherDobFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_6__(motherInfo.dob));
            this.motherContactNoFormCtl.setValue(motherInfo.contactNo);
        }
        var guardianInfo = this.student.guardianInfo;
        if (guardianInfo) {
            this.gInfoIdFormCtl.setValue(guardianInfo.id);
            this.guardianNameFormCtl.setValue(guardianInfo.name);
            this.guardianDobFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_6__(guardianInfo.dob));
            this.guardianContactNoFormCtl.setValue(guardianInfo.contactNo);
        }
    };
    StudentCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-create-edit',
            template: __webpack_require__(/*! ./student-create-edit.component.html */ "./src/app/components/students/student/student-create-edit/student-create-edit.component.html"),
            styles: [__webpack_require__(/*! ./student-create-edit.component.css */ "./src/app/components/students/student/student-create-edit/student-create-edit.component.css"), __webpack_require__(/*! ../../../../../assets/css/form-common.css */ "./src/assets/css/form-common.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], StudentCreateEditComponent);
    return StudentCreateEditComponent;
}(_student__WEBPACK_IMPORTED_MODULE_2__["Student"]));



/***/ }),

/***/ "./src/app/components/students/student/student-create-edit/student.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/students/student/student-create-edit/student.ts ***!
  \****************************************************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_model_student_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/student.model */ "./src/app/model/student.model.ts");
/* harmony import */ var src_app_model_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/constants */ "./src/app/model/constants.ts");




var Student = /** @class */ (function () {
    function Student() {
        var _this = this;
        this.hasSubmitted = false;
        this.registrationStatuses = src_app_model_student_model__WEBPACK_IMPORTED_MODULE_2__["RegistrationStatus"];
        this.standards = src_app_model_student_model__WEBPACK_IMPORTED_MODULE_2__["Standards"];
        this.genders = src_app_model_student_model__WEBPACK_IMPORTED_MODULE_2__["Genders"];
        this.yesNo = [{ key: "Yes", value: true }, { key: "No", value: false }];
        this.bloodGroups = src_app_model_constants__WEBPACK_IMPORTED_MODULE_3__["BloodGroups"];
        this.religions = src_app_model_constants__WEBPACK_IMPORTED_MODULE_3__["Relgions"];
        this.nationalities = src_app_model_constants__WEBPACK_IMPORTED_MODULE_3__["Nationalities"];
        this.communities = src_app_model_constants__WEBPACK_IMPORTED_MODULE_3__["Communities"];
        // Registration details
        this.idFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.registrationNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.registrationDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.registrationStatusFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        // Student basic details
        this.firstNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.middleNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.lastNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.standardFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.rollNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.dobFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.joiningDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.genderFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.bloodGroupFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.religionFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.nationalityFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.communityFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.aadhaarNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.physicallyChallengedFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        // Permanent Address details
        this.sameAsPermAddrFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.addIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.firstLineFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.secondLineFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.countryFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.stateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.districtFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        // Correspondent Address
        this.corrAddIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.corrFirstLineFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.corrSecondLineFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.corrCountryFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.corrStateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.corrDistrictFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        // Student Father details
        this.fInfoIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.fatherNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.fatherDobFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.fatherContactNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.fatherEduQualiFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.fatherOccupationFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.fatherAnnualIncomeFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.fatherAadhaarNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        // Student Mother details
        this.mInfoIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.motherNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.motherDobFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.motherContactNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.motherEduQualiFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.motherOccupationFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.motherAnnualIncomeFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.motherAadhaarNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        // Student Guardian details
        this.gInfoIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.guardianNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.guardianDobFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.guardianContactNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', null);
        this.guardianEduQualiFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.gaurdianOccupationFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.guardianAnnualIncomeFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.gaurdianAadhaarNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            // Student basic details
            firstNameFormCtl: this.firstNameFormCtl,
            middleNameFormCtl: this.middleNameFormCtl,
            lastNameFormCtl: this.lastNameFormCtl,
            standardFormCtl: this.standardFormCtl,
            rollNoFormCtl: this.rollNoFormCtl,
            dobFormCtl: this.dobFormCtl,
            joiningDateFormCtl: this.joiningDateFormCtl,
            genderFormCtl: this.genderFormCtl,
            bloodGroupFormCtl: this.bloodGroupFormCtl,
            religionFormCtl: this.religionFormCtl,
            nationalityFormCtl: this.nationalityFormCtl,
            communityFormCtl: this.communityFormCtl,
            aadhaarNoFormCtl: this.aadhaarNoFormCtl,
            physicallyChallengedFormCtl: this.physicallyChallengedFormCtl,
            // Student Address details
            firstLineFormCtl: this.firstLineFormCtl,
            secondLineFormCtl: this.secondLineFormCtl,
            countryFormCtl: this.countryFormCtl,
            stateFormCtl: this.stateFormCtl,
            districtFormCtl: this.districtFormCtl,
            // Student Father details
            fatherNameFormCtl: this.fatherNameFormCtl,
            fatherDobFormCtl: this.fatherDobFormCtl,
            fatherContactNoFormCtl: this.fatherContactNoFormCtl,
            // Student Mother details
            motherNameFormCtl: this.motherNameFormCtl,
            motherDobFormCtl: this.motherDobFormCtl,
            motherContactNoFormCtl: this.motherContactNoFormCtl,
            // Student Guardian details
            guardianNameFormCtl: this.guardianNameFormCtl,
            guardianDobFormCtl: this.guardianDobFormCtl,
            guardianContactNoFormCtl: this.guardianContactNoFormCtl
        });
        this.registrationNoFormCtl.disable();
        this.registrationDateFormCtl.disable();
        this.registrationDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_1__());
        this.registrationStatusFormCtl.disable();
        this.sameAsPermAddrFormCtl.setValue(false);
        this.sameAsPermAddrFormCtl.valueChanges.subscribe(function (data) {
            if (data === true) {
                _this.corrAddIdFormCtl.setValue(_this.addIdFormCtl.value);
                _this.corrFirstLineFormCtl.setValue(_this.firstLineFormCtl.value);
                _this.corrSecondLineFormCtl.setValue(_this.secondLineFormCtl.value);
                _this.corrCountryFormCtl.setValue(_this.countryFormCtl.value);
                _this.corrStateFormCtl.setValue(_this.stateFormCtl.value);
                _this.corrDistrictFormCtl.setValue(_this.districtFormCtl.value);
            }
        });
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/components/students/student/student-list/student-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/students/student/student-list/student-list.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".name-class:hover {\r\n    color: cornflowerblue;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50cy9zdHVkZW50L3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvc3R1ZGVudC9zdHVkZW50LWxpc3Qvc3R1ZGVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZS1jbGFzczpob3ZlciB7XHJcbiAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/students/student/student-list/student-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/students/student/student-list/student-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Students</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/student/create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Registration\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <!-- Employess -->\r\n    <div class=\"col-md-12 table-header mb-5\">\r\n      <!-- Table -->\r\n      <div class=\"no-shadow w-100\">\r\n        <table mat-table [dataSource]=\"studentsDataSource\" matSort class=\"\">\r\n\r\n          <ng-container matColumnDef=\"id\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\r\n            <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.firstName\r\n              +\" \"+row.lastName}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"registrationNo\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration No.</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.registrationNo}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"registrationDate\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration Date</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.registrationDate}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"registrationStatus\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration Status</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.registrationStatus}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\r\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\" (click)=\"onDeleteRow(row.id)\">\r\n              <mat-icon style=\"color: firebrick; cursor: pointer;\">clear</mat-icon> &nbsp;\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"studentsColumns;sticky: true\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: studentsColumns ; let i = index;\">\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/students/student/student-list/student-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/students/student/student-list/student-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.studentsColumns = ["id", "name", "registrationNo", "registrationDate", "registrationStatus", "action"];
        this.students = [];
    }
    StudentListComponent.prototype.ngOnInit = function () {
        this.getStudents();
    };
    StudentListComponent.prototype.getStudents = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].STUDENTS).subscribe(function (data) {
            resp = data;
            if (resp && !resp.apiMessage.error) {
                _this.students = resp.data;
                _this.studentsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.students);
                if (!_this.students)
                    _this.errorMessage = "No Student found";
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
    StudentListComponent.prototype.onClickRow = function (studId) {
        this.router.navigate(["/student/" + studId + "/view"]);
    };
    StudentListComponent.prototype.onDeleteRow = function (studId) {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].STUDENTS + "/" + studId).subscribe(function (data) {
            _this.getStudents();
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/components/students/student/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/components/students/student/student-list/student-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/components/students/student/student-view/student-view.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/students/student/student-view/student-view.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudHMvc3R1ZGVudC9zdHVkZW50LXZpZXcvc3R1ZGVudC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/students/student/student-view/student-view.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/students/student/student-view/student-view.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow form-min-height ml-3 mr-3 mt-1 pb-5\">\r\n  <div class=\"row p-1\" style=\"background-color: #dddddd\">\r\n    <div class=\"col-md-6\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <span style=\"font-weight: bold; font-size: 14px; line-height: 35px;\">Student Details</span>\r\n    </div>\r\n    <div class=\"col-md-6 text-right\" [ngStyle.lt-md]=\"{'text-align' : 'center'}\">\r\n      <button class=\"btn btn-save\" routerLink=\"/student/list\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>&nbsp;Back\r\n      </button>\r\n      <button class=\"btn btn-cancel\" (click)=\"delete()\">\r\n        <mat-icon>clear</mat-icon>&nbsp;Delete\r\n      </button>\r\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\r\n        <mat-icon>edit</mat-icon>&nbsp;Edit\r\n      </button>\r\n      <button class=\"btn btn-save\" [routerLink]=\"['/student/create']\">\r\n        <mat-icon>add</mat-icon>&nbsp;New Registration\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\r\n    <div class=\"col\">\r\n      <span>{{errorMessage}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" [ngClass.lt-md]=\"['p-0']\" *ngIf=\"student\">\r\n    <mat-tab-group>\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n          <span style=\"font-size: 13px;\">General Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Registration Info</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Registration Number : {{student.registrationNo}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Registration Date : {{student.registrationDate}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Registration Status : {{student.registrationStatus}}</p>\r\n          </div>\r\n          <!-- ============== Personal Info ===================== -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Student Info</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>First name : {{student.firstName}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Middle name : {{student.middleName}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Last name : {{student.lastName}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Standard : {{student.standard}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Date of birth : {{student.dob}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Joining Date : {{student.joiningDate}}</p>\r\n          </div>\r\n\r\n          <!-- ========================================== -->\r\n\r\n          <div class=\"col-md-4\">\r\n            <p>Gender : {{student.gender}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Blood Group : {{student.bloodGroup}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Religion : {{student.religion}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Nationality : {{student.nationality}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Community : {{student.community}}</p>\r\n          </div>\r\n\r\n          <!-- ============== Permanent Address ===================== -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Permanent Address</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>First line : {{student.permanentAddress?.firstLine}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Second line : {{student.permanentAddress?.secondLine}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Country : {{student.permanentAddress?.country}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>State : {{student.permanentAddress?.state}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>District : {{student.permanentAddress?.district}}</p>\r\n          </div>\r\n\r\n          <!-- ============== Correspondense Address ===================== -->\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Correspondense Address</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>First line : {{student.correspondentAddress?.firstLine}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Second line : {{student.correspondentAddress?.secondLine}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Country : {{student.correspondentAddress?.country}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>State : {{student.correspondentAddress?.state}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>District : {{student.correspondentAddress?.district}}</p>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n\r\n      <mat-tab>\r\n        <ng-template mat-tab-label>\r\n          <mat-icon>contact_phone</mat-icon>\r\n          <span style=\"font-size: 13px;\">Parent's and Guardian's Info</span>\r\n        </ng-template>\r\n\r\n        <div class=\"row pt-3\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Father's details</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Father's Name : {{student.fatherInfo?.name}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Date of birth : {{student.fatherInfo?.dob}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Contact No. : {{student.fatherInfo?.contactNo}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Mother's details</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Mother's Name : {{student.motherInfo?.name}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Date of birth : {{student.motherInfo?.dob}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Contact No. : {{student.motherInfo?.contactNo}}</p>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\">\r\n            <p style=\"font-weight: bold; font-size: 14px;\">Guardian's details</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Guardian's Name : {{student.guardianInfo?.name}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Date of birth : {{student.guardianInfo?.dob}}</p>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <p>Contact No. : {{student.guardianInfo?.contactNo}}</p>\r\n          </div>\r\n\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/students/student/student-view/student-view.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/students/student/student-view/student-view.component.ts ***!
  \************************************************************************************/
/*! exports provided: StudentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentViewComponent", function() { return StudentViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var StudentViewComponent = /** @class */ (function () {
    function StudentViewComponent(http, router, activatedRoute) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (params) {
            _this.studId = params.studId;
        });
    }
    StudentViewComponent.prototype.ngOnInit = function () {
        this.getStudent();
    };
    StudentViewComponent.prototype.getStudent = function () {
        var _this = this;
        var resp;
        this.http.get(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].STUDENTS + "/" + this.studId).subscribe(function (data) {
            resp = data;
            _this.student = resp.data;
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    StudentViewComponent.prototype.delete = function () {
        var _this = this;
        this.http.delete(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].STUDENTS + "/" + this.studId).subscribe(function (data) {
            _this.router.navigate(["/student/list"]);
        }, function (err) {
            console.error(err);
            if (err.error && err.error.apiMessage)
                _this.errorMessage = err.error.apiMessage.detail;
            else
                _this.errorMessage = err.message;
        });
    };
    StudentViewComponent.prototype.edit = function () {
        this.router.navigate(["/student/" + this.studId + "/edit"]);
    };
    StudentViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-view',
            template: __webpack_require__(/*! ./student-view.component.html */ "./src/app/components/students/student/student-view/student-view.component.html"),
            styles: [__webpack_require__(/*! ./student-view.component.css */ "./src/app/components/students/student/student-view/student-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StudentViewComponent);
    return StudentViewComponent;
}());



/***/ }),

/***/ "./src/app/model/admission-fee.model.ts":
/*!**********************************************!*\
  !*** ./src/app/model/admission-fee.model.ts ***!
  \**********************************************/
/*! exports provided: AdmissionStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionStatuses", function() { return AdmissionStatuses; });
var AdmissionStatuses = [
    { key: "PAID", value: "Paid" },
    { key: "DUE", value: "Due" },
    { key: "EXPIRED", value: "Expired" }
];


/***/ }),

/***/ "./src/app/modules/students.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/students.module.ts ***!
  \********************************************/
/*! exports provided: StudentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function() { return StudentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_students_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/students/student/student-list/student-list.component */ "./src/app/components/students/student/student-list/student-list.component.ts");
/* harmony import */ var _components_students_student_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/students/student/student-view/student-view.component */ "./src/app/components/students/student/student-view/student-view.component.ts");
/* harmony import */ var _components_students_student_student_create_edit_student_create_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/students/student/student-create-edit/student-create-edit.component */ "./src/app/components/students/student/student-create-edit/student-create-edit.component.ts");
/* harmony import */ var _components_students_admission_fee_admission_fee_list_admission_fee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/students/admission-fee/admission-fee-list/admission-fee-list.component */ "./src/app/components/students/admission-fee/admission-fee-list/admission-fee-list.component.ts");
/* harmony import */ var _components_students_admission_fee_admission_fee_view_admission_fee_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/students/admission-fee/admission-fee-view/admission-fee-view.component */ "./src/app/components/students/admission-fee/admission-fee-view/admission-fee-view.component.ts");
/* harmony import */ var _components_students_admission_fee_admission_fee_create_edit_admission_fee_create_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component */ "./src/app/components/students/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.ts");
/* harmony import */ var _components_students_student_attendence_student_attendence_list_student_attendence_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/students/student-attendence/student-attendence-list/student-attendence-list.component */ "./src/app/components/students/student-attendence/student-attendence-list/student-attendence-list.component.ts");
/* harmony import */ var _components_students_student_attendence_student_attendence_view_student_attendence_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/students/student-attendence/student-attendence-view/student-attendence-view.component */ "./src/app/components/students/student-attendence/student-attendence-view/student-attendence-view.component.ts");
/* harmony import */ var _components_students_student_attendence_student_attendence_create_edit_student_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component */ "./src/app/components/students/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/shared/custom-date/custom-date.module */ "./src/app/components/shared/custom-date/custom-date.module.ts");
/* harmony import */ var _components_students_student_attendence_student_attendence_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/students/student-attendence/student-attendence.component */ "./src/app/components/students/student-attendence/student-attendence.component.ts");
/* harmony import */ var _components_students_search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/students/search-student-dialog/search-student-dialog.component */ "./src/app/components/students/search-student-dialog/search-student-dialog.component.ts");


















var routes = [
    // Student 
    { path: "list", component: _components_students_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__["StudentListComponent"] },
    { path: ":studId/view", component: _components_students_student_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_3__["StudentViewComponent"] },
    { path: "create", component: _components_students_student_student_create_edit_student_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateEditComponent"] },
    { path: ":studId/edit", component: _components_students_student_student_create_edit_student_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateEditComponent"] },
    // Admission Fee 
    { path: "admissions", component: _components_students_admission_fee_admission_fee_list_admission_fee_list_component__WEBPACK_IMPORTED_MODULE_5__["AdmissionFeeListComponent"] },
    { path: ":admId/admission-view", component: _components_students_admission_fee_admission_fee_view_admission_fee_view_component__WEBPACK_IMPORTED_MODULE_6__["AdmissionFeeViewComponent"] },
    { path: "admission-create", component: _components_students_admission_fee_admission_fee_create_edit_admission_fee_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["AdmissionFeeCreateEditComponent"] },
    { path: ":admId/admission-edit", component: _components_students_admission_fee_admission_fee_create_edit_admission_fee_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["AdmissionFeeCreateEditComponent"] },
    // Student Attendence
    { path: "attendences", component: _components_students_student_attendence_student_attendence_list_student_attendence_list_component__WEBPACK_IMPORTED_MODULE_8__["StudentAttendenceListComponent"] },
    { path: ":studattdid/attendence-view", component: _components_students_student_attendence_student_attendence_view_student_attendence_view_component__WEBPACK_IMPORTED_MODULE_9__["StudentAttendenceViewComponent"] },
    { path: "attendence-create", component: _components_students_student_attendence_student_attendence_create_edit_student_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_10__["StudentAttendenceCreateEditComponent"] },
    { path: ":studattdid/attendence-edit", component: _components_students_student_attendence_student_attendence_create_edit_student_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_10__["StudentAttendenceCreateEditComponent"] },
];
var StudentsModule = /** @class */ (function () {
    function StudentsModule() {
    }
    StudentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _components_shared_custom_date_custom_date_module__WEBPACK_IMPORTED_MODULE_15__["CustomDateModule"]
            ],
            declarations: [
                _components_students_student_attendence_student_attendence_component__WEBPACK_IMPORTED_MODULE_16__["StudentAttendenceComponent"],
                _components_students_admission_fee_admission_fee_list_admission_fee_list_component__WEBPACK_IMPORTED_MODULE_5__["AdmissionFeeListComponent"],
                _components_students_admission_fee_admission_fee_view_admission_fee_view_component__WEBPACK_IMPORTED_MODULE_6__["AdmissionFeeViewComponent"],
                _components_students_admission_fee_admission_fee_create_edit_admission_fee_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["AdmissionFeeCreateEditComponent"],
                _components_students_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__["StudentListComponent"],
                _components_students_student_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_3__["StudentViewComponent"],
                _components_students_student_student_create_edit_student_create_edit_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateEditComponent"],
                _components_students_student_attendence_student_attendence_list_student_attendence_list_component__WEBPACK_IMPORTED_MODULE_8__["StudentAttendenceListComponent"],
                _components_students_student_attendence_student_attendence_view_student_attendence_view_component__WEBPACK_IMPORTED_MODULE_9__["StudentAttendenceViewComponent"],
                _components_students_student_attendence_student_attendence_create_edit_student_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_10__["StudentAttendenceCreateEditComponent"],
                _components_students_search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_17__["SearchStudentDialogComponent"]
            ],
            entryComponents: [
                _components_students_search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_17__["SearchStudentDialogComponent"]
            ]
        })
    ], StudentsModule);
    return StudentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-students-module.js.map