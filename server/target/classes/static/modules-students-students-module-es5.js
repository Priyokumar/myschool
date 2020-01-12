var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-students-students-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shadow form-min-height\">\n  <div class=\"row p-1 bg-gold\">\n    <div class=\"col-md-6\">\n      <span class=\"font-400 font-banner\" style=\"line-height: 35px;\">Admission</span>\n    </div>\n    <div class=\"col-md-6 text-right\">\n      <button class=\"btn btn-cancel\" routerLink=\"/admin/students/admissions\">\n        <mat-icon class=\"white-icon\">clear</mat-icon>&nbsp;Cancel\n      </button>\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!admissionForm.valid'>\n        <mat-icon class=\"white-icon\">save_alt</mat-icon>&nbsp;Save Admission\n      </button>\n    </div>\n  </div>\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\n    <div class=\"col\">\n      <span>{{errorMessage}}</span>\n    </div>\n  </div>\n\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" class=\"bg-white\">\n    <mat-tab-group>\n      <mat-tab>\n        <ng-template mat-tab-label>\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\n          <span style=\"font-size: 13px;\">Admission Info</span>\n        </ng-template>\n\n        <div class=\"row pt-3\">\n\n          <!-- Student Info -->\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Student Info</p>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Search student</mat-label>\n              <mat-icon matSuffix class=\"search-icon\">search</mat-icon>\n              <input matInput placeholder=\"Search student\"  (mousedown)=\"searchStudent()\">\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>First name</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"firstNameFormCtl\" (keydown)=\"searchStudent()\">\n              <mat-error *ngIf=\"firstNameFormCtl.hasError('required')\">\n                First name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Last name</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"lastNameFormCtl\">\n              <mat-error *ngIf=\"lastNameFormCtl.hasError('required')\">\n                Last name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Registration Number</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"registrationNoFormCtl\">\n              <mat-error *ngIf=\"registrationNoFormCtl.hasError('required')\">\n                Registration Number is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Registration Date</mat-label>\n              <input matInput [matDatepicker]=\"regDate\" placeholder=\"mm/dd/yyyy\" [formControl]=\"registrationDateFormCtl\">\n              <mat-datepicker-toggle matSuffix [for]=\"regDate\"></mat-datepicker-toggle>\n              <mat-datepicker #regDate></mat-datepicker>\n              <mat-error *ngIf=\"registrationDateFormCtl.hasError('required')\">\n                Registration Date is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Student Status</mat-label>\n              <mat-select placeholder=\"Status\" [formControl]=\"studentStatusFormCtl\">\n                <mat-option *ngFor=\"let option of studentStatuses\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"studentStatusFormCtl.hasError('required')\">\n                Student Status is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div> \n\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Admission Info</p>\n          </div>\n          <div class=\"col-md-4\" *ngIf=\"admId\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Admission Reference No</mat-label>\n              <input matInput placeholder=\"Admission Reference No\" [formControl]=\"admissionRefNoFormCtl\">\n              <mat-error *ngIf=\"admissionRefNoFormCtl.hasError('required')\">\n                Admission Reference No is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\" *ngIf=\"admId\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Admission Status</mat-label>\n              <mat-select placeholder=\"Status\" [formControl]=\"admissionStatusFormCtl\">\n                <mat-option *ngFor=\"let option of admissionStatuses\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"admissionStatusFormCtl.hasError('required')\">\n                Admission Status is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div> \n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Academic Year</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"academicYearFormCtl\">\n              <mat-error *ngIf=\"academicYearFormCtl.hasError('required')\">\n                Academic Year is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\" *ngIf=\"admId\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Admission Date</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"admissionDateFormCtl\">\n              <mat-error *ngIf=\"admissionDateFormCtl.hasError('required')\">\n                Admission Date is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Admission For</mat-label>\n              <mat-select #standard placeholder=\"Status\" [formControl]=\"standardFormCtl\" (selectionChange)=\"onSelectStandard(standard.value)\">\n                <mat-option *ngFor=\"let option of standards\" [value]=\"option.value\">\n                  {{option.value}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"standardFormCtl.hasError('required')\">\n                Standard is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n         \n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Admission Amount</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"admissionAmountFormCtl\" readonly=\"readonly\">\n              <mat-error *ngIf=\"admissionAmountFormCtl.hasError('required')\">\n                Admission Amount is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Paid Amount</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"paidAmountFormCtl\">\n              <mat-error *ngIf=\"paidAmountFormCtl.hasError('required')\">\n                Paid Amount is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Due Amount</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"dueAmountFormCtl\">\n              <mat-error *ngIf=\"dueAmountFormCtl.hasError('required')\">\n                Due Amount is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Promise To Pay Date</mat-label>\n              <input matInput [matDatepicker]=\"p2pDate\" placeholder=\"mm/dd/yyyy\" [formControl]=\"promiseToPayDateFormCtl\">\n              <mat-datepicker-toggle matSuffix [for]=\"p2pDate\"></mat-datepicker-toggle>\n              <mat-datepicker #p2pDate></mat-datepicker>\n              <mat-error *ngIf=\"promiseToPayDateFormCtl.hasError('required')\">\n                Promise To Pay Date is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-12 pt-4\">\n            <span class=\"font-500 font-title-md\">Fees</span>\n            <hr>\n          </div>\n\n          <div class=\"col-md-12 no-shadow w-100\">\n            <table mat-table [dataSource]=\"feesDataSource\" matSort>\n\n              <ng-container matColumnDef=\"feeRef\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Ref No.</th>\n                <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.feeRefNo}}</td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"amount\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Ammount</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.amount}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"exptdateOfPayment\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Expected Date Of Payment</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.exptdateOfPayment}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"actdateOfPayment\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Actual Date Of Payment</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.actdateOfPayment}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"monthOf\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Month Of</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.monthOf}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"status\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.status}} </td>\n              </ng-container>\n\n              <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef></th>\n                <td mat-cell *matCellDef=\"let row\">\n                <button class=\"btn btn-save\" *ngIf=\"!row.actdateOfPayment && admId\" (click)=\"pay(row.exptdateOfPayment)\">Pay</button>  \n                </td>\n              </ng-container>\n\n              <tr mat-header-row *matHeaderRowDef=\"feeColumns;sticky: true\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: feeColumns ; let i = index;\">\n              </tr>\n            </table>\n          </div>\n\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.html": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.html ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shadow form-min-height\">\n  <div class=\"row p-1 bg-gold\">\n    <div class=\"col-md-4\">\n      <span class=\"font-400 font-banner\" style=\"line-height: 35px;\">Admissions</span>\n    </div>\n    <div class=\"col-md-8 text-right\">\n      <mat-form-field class=\"w-50\">\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        <mat-icon matSuffix>filter_list</mat-icon>\n      </mat-form-field>&nbsp;\n      <button class=\"btn btn-save\" [routerLink]=\"['/admin/students/admissions/add']\">\n        <mat-icon class=\"white-icon\">add</mat-icon>&nbsp;New Admission\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <!-- Employess -->\n    <div class=\"col-md-12 p-0 table-header\">\n      <!-- Table -->\n      <div class=\"no-shadow w-100\">\n        <table mat-table [dataSource]=\"admissionsDataSource\" matSort>\n\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.student?.firstName\n              +\" \"+row.student?.lastName}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"registrationNo\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration No.</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\"> {{row.student?.registrationNo}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"studentStatus\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Student Status</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">\n              <span class=\"pl-2 pr-2 rounded font-white\"\n                [ngClass]=\"{'bg-green': row.student?.status === 'Active','bg-red':row.student?.status === 'Inactive'}\">{{row.student?.status}}</span>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"admissionStatus\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Admission Status</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\"> \n              <span class=\"pl-2 pr-2 rounded font-white\"\n                [ngClass]=\"{'bg-green': row.status === 'Admitted','bg-red':row.status === 'Expired'}\">{{row.status}}</span>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Class\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Class</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\"> {{row.standard}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"Admission Number\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Admission Number</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\"> {{row.admissionRefNo}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\">\n              <mat-icon *ngIf=\"isSuperAdmin\" (click)=\"onDeleteRow(row.id)\" style=\"color: firebrick; cursor: pointer;\">delete</mat-icon> &nbsp;\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"admissionColumns;sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: admissionColumns ; let i = index;\">\n          </tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[12, 20,30,40,50,60,70,80,90,100]\" showFirstLastButtons></mat-paginator>\n        <div class=\"d-flex justify-content-center align-items-center\" style=\"height: 40vh;\"\n          *ngIf=\"admissions.length <= 0\">\n          <div>\n            <h4 class=\"font-grey font-300\">No admission to display.</h4>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.html": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.html ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shadow form-min-height\">\n  <div class=\"row p-1 bg-gold\">\n    <div class=\"col-md-6\">\n      <span class=\"font-400 font-banner\" style=\"line-height: 35px;\">Admission Details</span>\n    </div>\n    <div class=\"col-md-6 text-right\">\n      <button class=\"btn btn-save\" routerLink=\"/admin/students/admissions\">\n        <mat-icon class=\"white-icon\">keyboard_arrow_left</mat-icon>&nbsp;Back\n      </button>\n      <button *ngIf=\"isSuperAdmin\" class=\"btn btn-cancel\" (click)=\"delete()\">\n        <mat-icon class=\"white-icon\">clear</mat-icon>&nbsp;Delete\n      </button>\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\n        <mat-icon class=\"white-icon\">edit</mat-icon>&nbsp;Edit\n      </button>\n      <button class=\"btn btn-save\" [routerLink]=\"['/admin/students/admissions/add']\">\n        <mat-icon class=\"white-icon\">add</mat-icon>&nbsp;New Admission\n      </button>\n    </div>\n  </div>\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\n    <div class=\"col\">\n      <span>{{errorMessage}}</span>\n    </div>\n  </div>\n\n  <div class=\"bg-white 'pr-2','pl-2\" *ngIf=\"admission\">\n    <div class=\"row p-4\">\n      <div class=\"col-md-12\">\n        <div class=\"font-500 font-title-lg\">Student Info</div>\n        <hr>\n      </div>\n      <div class=\"col-md-4\">\n        <p>First name : {{admission.student?.firstName}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Middle name : {{admission.student?.middleName}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Last name : {{admission.student?.lastName}}</p>\n      </div>\n\n      <div class=\"col-md-4\">\n        <p>Registration Number : {{admission.student?.registrationNo}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Registration Date : {{admission.student?.registrationDate}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Student Status : <span class=\"pl-2 pr-2 rounded font-white\"  [ngClass]=\"{'bg-green': admission.student?.status === 'Active','bg-red':admission.student?.status === 'Inactive'}\">{{admission.student?.status}}</span></p>\n      </div>\n      <div class=\"col-md-12\"> \n        <br>\n        <div class=\"font-500 font-title-lg\">Admission Info</div>\n        <hr>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Admission Reference No : {{admission.admissionRefNo}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Admission Status : <span class=\"pl-2 pr-2 rounded font-white\" [ngClass]=\"{'bg-green': admission.status === 'Admitted','bg-red':admission.status === 'Expired'}\">{{admission.status}}</span></p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Academic Year : {{admission.academicYear}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Admission Date : {{admission.admissionDate}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Admission For : {{admission.standard}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Admission Amount : {{admission.admissionAmount}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Paid Amount : {{admission.paidAmount}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Due Amount : {{admission.dueAmount}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <p>Promise To Pay Date : {{admission.promiseToPayDate}}</p>\n      </div>\n      <div class=\"col-md-12 pb-5\">\n        <br>\n        <div class=\"font-500 font-title-lg\">Fees</div>\n        <hr>\n        <div class=\"no-shadow w-100\">\n          <table mat-table [dataSource]=\"feesDataSource\" matSort>\n\n            <ng-container matColumnDef=\"id\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>#</th>\n              <td style=\"padding-left: 25px !important;\" mat-cell *matCellDef=\"let row; let i = index\">{{i+1}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"feeRef\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Ref No.</th>\n              <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row)\">{{row.feeRefNo}}</td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"amount\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Ammount</th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.amount}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"exptdateOfPayment\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Expected Date Of Payment</th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.exptdateOfPayment}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"actdateOfPayment\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Actual Date Of Payment</th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.actdateOfPayment}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"monthOf\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Month Of</th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.monthOf}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.status}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n              <td mat-cell *matCellDef=\"let row\" class=\"text-right\">\n                <button class=\"btn btn-save\" *ngIf=\"row.status !== 'Paid'\" (click)=\"payFee(row)\">Pay</button>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"feeColumns;sticky: true\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: feeColumns ; let i = index;\">\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.html": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.html ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar mode=\"indeterminate\" *ngIf=\"fetchingStudents\"></mat-progress-bar>\n<div class=\"shadow-sm form-min-height\">\n  <div class=\"d-flex justify-content-between align-items-center p-2\" style=\"background-color: #dddddd\">\n    <div>\n      <span class=\"font-banner pl-2\">Students</span>\n    </div>\n    <div class=\"w-30 d-flex justify-content-end\">\n      <mat-form-field class=\"w-100\">\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        <mat-icon matSuffix>filter_list</mat-icon>\n      </mat-form-field>&nbsp;\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 p-0 table-header\">\n      <div class=\"no-shadow w-100\">      \n        <table mat-table [dataSource]=\"studentsDataSource\" matSort>\n\n          <ng-container matColumnDef=\"firstName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.firstName}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"middleName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Middle Name</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.lastName}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"lastName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\">{{row.lastName}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"registrationNo\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration No.</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.registrationNo}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"registrationDate\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration Date</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.registrationDate}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"registrationStatus\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.status}} </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"studentsColumns;sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: studentsColumns\" (click)=\"select(row)\">\n          </tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[10, 20,30,40,50,60,70,80,90,100]\" showFirstLastButtons></mat-paginator>\n        <div class=\"d-flex justify-content-center align-items-center\" style=\"height: 40vh;\"\n          *ngIf=\"students.length <= 0\">\n          <div>\n            <h4 class=\"font-grey font-300\">No student to display.</h4>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.html": 
        /*!***********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.html ***!
          \***********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>\n  student-attendence-create-edit works!\n</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.html": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.html ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>\n  student-attendence-list works!\n</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.html": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.html ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shadow form-min-height\">\n  <div class=\"row p-1 bg-gold\">\n    <div class=\"col-md-6\">\n      <span class=\"font-400 font-banner\"\n        style=\"line-height: 35px;\">{{studId ? 'Update Student':'New Registration'}}</span>\n    </div>\n    <div class=\"col-md-6 text-right\">\n      <button class=\"btn btn-cancel\" routerLink=\"/admin/students\">\n        <mat-icon class=\"white-icon\">clear</mat-icon>&nbsp;Cancel\n      </button>\n      <button class=\"btn btn-save\" (click)=\"save()\" [disabled]='!studentForm.valid'>\n        <mat-icon class=\"white-icon\">save_alt</mat-icon>&nbsp;{{studId ? 'Update':'Save'}}\n      </button>\n    </div>\n  </div>\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\n    <div class=\"col\">\n      <span>{{errorMessage}}</span>\n    </div>\n  </div>\n\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\">\n    <mat-tab-group>\n      <mat-tab>\n        <ng-template mat-tab-label>\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\n          <span style=\"font-size: 13px;\">General Info</span>\n        </ng-template>\n\n        <div class=\"row pt-3\">\n\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Student Info</p>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>First name</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"firstNameFormCtl\">\n              <mat-error *ngIf=\"firstNameFormCtl.hasError('required')\">\n                First name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Middle name</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"middleNameFormCtl\">\n              <mat-error *ngIf=\"middleNameFormCtl.hasError('required')\">\n                Middle name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Last name</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"lastNameFormCtl\">\n              <mat-error *ngIf=\"lastNameFormCtl.hasError('required')\">\n                Last name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\" *ngIf=\"studId\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Registration Number</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"registrationNoFormCtl\">\n              <mat-error *ngIf=\"registrationNoFormCtl.hasError('required')\">\n                Registration Number is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\" *ngIf=\"studId\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Registration Date</mat-label>\n              <input matInput [matDatepicker]=\"regDate\" placeholder=\"mm/dd/yyyy\"\n                [formControl]=\"registrationDateFormCtl\">\n              <mat-datepicker-toggle matSuffix [for]=\"regDate\"></mat-datepicker-toggle>\n              <mat-datepicker #regDate></mat-datepicker>\n              <mat-error *ngIf=\"registrationDateFormCtl.hasError('required')\">\n                Registration Date is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\" *ngIf=\"studId\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Status</mat-label>\n              <mat-select placeholder=\"Status\" [formControl]=\"statusFormCtl\">\n                <mat-option *ngFor=\"let option of statuses\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"statusFormCtl.hasError('required')\">\n                Status is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\" *ngIf=\"studId\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Class</mat-label>\n              <mat-select placeholder=\"Status\" [formControl]=\"standardFormCtl\">\n                <mat-option *ngFor=\"let option of standards\" [value]=\"option.name\">\n                  {{option.name}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"standardFormCtl.hasError('required')\">\n                Status is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Gender</mat-label>\n              <mat-select placeholder=\"Gender\" [formControl]=\"genderFormCtl\">\n                <mat-option *ngFor=\"let option of genders\" [value]=\"option.value\">\n                  {{option.value}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"genderFormCtl.hasError('required')\">\n                Gender is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Blood group</mat-label>\n              <mat-select placeholder=\"Blood group\" [formControl]=\"bloodGroupFormCtl\">\n                <mat-option *ngFor=\"let option of bloodGroups\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"bloodGroupFormCtl.hasError('required')\">\n                Blood group is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Religion</mat-label>\n              <mat-select placeholder=\"Religion\" [formControl]=\"religionFormCtl\">\n                <mat-option *ngFor=\"let option of religions\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"religionFormCtl.hasError('required')\">\n                Religion is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Nationality</mat-label>\n              <input matInput placeholder=\"Nationality\" [formControl]=\"nationalityFormCtl\">\n              <mat-error *ngIf=\"nationalityFormCtl.hasError('required')\">\n                Nationality is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Community</mat-label>\n              <mat-select placeholder=\"Community\" [formControl]=\"communityFormCtl\">\n                <mat-option *ngFor=\"let option of communities\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"communityFormCtl.hasError('required')\">\n                Community is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\" *ngIf=\"studId\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Roll Number</mat-label>\n              <input type=\"number\" matInput placeholder=\"Placeholder\" [formControl]=\"rollNoFormCtl\">\n              <mat-error *ngIf=\"rollNoFormCtl.hasError('required')\">\n                Roll Number is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Date of birth</mat-label>\n              <input matInput [matDatepicker]=\"dobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"dobFormCtl\" readonly>\n              <mat-datepicker-toggle matSuffix [for]=\"dobt\"></mat-datepicker-toggle>\n              <mat-datepicker #dobt></mat-datepicker>\n              <mat-error *ngIf=\"dobFormCtl.hasError('required')\">\n                Date of birth is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Joining Date</mat-label>\n              <input matInput [matDatepicker]=\"joiningDatet\" placeholder=\"mm/dd/yyyy\" [formControl]=\"joiningDateFormCtl\"\n                readonly>\n              <mat-datepicker-toggle matSuffix [for]=\"joiningDatet\"></mat-datepicker-toggle>\n              <mat-datepicker #joiningDatet></mat-datepicker>\n              <mat-error *ngIf=\"joiningDateFormCtl.hasError('required')\">\n                Joining Date is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-tab>\n\n      <mat-tab>\n        <ng-template mat-tab-label>\n          <mat-icon class=\"example-tab-icon\">contact_mail</mat-icon>&nbsp;\n          <span style=\"font-size: 13px;\">Address details</span>\n        </ng-template>\n\n        <div class=\"row pt-3\">\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Correspondent Address</p>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>First line</mat-label>\n              <input matInput placeholder=\"First line\" [formControl]=\"corrFirstLineFormCtl\">\n              <mat-error *ngIf=\"corrFirstLineFormCtl.hasError('required')\">\n                First line is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Second line</mat-label>\n              <input matInput placeholder=\"Second line\" [formControl]=\"corrSecondLineFormCtl\">\n              <mat-error *ngIf=\"corrSecondLineFormCtl.hasError('required')\">\n                Second line is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Country</mat-label>\n              <input matInput placeholder=\"Country\" [formControl]=\"corrCountryFormCtl\">\n              <mat-error *ngIf=\"corrCountryFormCtl.hasError('required')\">\n                Country is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>State</mat-label>\n              <input matInput placeholder=\"State\" [formControl]=\"corrStateFormCtl\">\n              <mat-error *ngIf=\"corrStateFormCtl.hasError('required')\">\n                State is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>District</mat-label>\n              <mat-select placeholder=\"District\" [formControl]=\"corrDistrictFormCtl\">\n                <mat-option *ngFor=\"let option of districts\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-select>\n              <mat-error *ngIf=\"corrDistrictFormCtl.hasError('required')\">\n                District is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-12 pb-2\">\n            <div><label>Same as permanent address</label></div>\n            <mat-radio-group [formControl]=\"sameAsPermAddrFormCtl\">\n              <mat-radio-button *ngFor=\"let option of yesNo\" [value]=\"option.value\">\n                {{option.key}} &nbsp;\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n\n          <div class=\"row\" *ngIf=\"sameAsPermAddrFormCtl.value === false\">\n            <div class=\"col-md-12\">\n              <p style=\"font-weight: bold; font-size: 14px;\">Permanent Address</p>\n            </div>\n            <div class=\"col-md-4\">\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>First line</mat-label>\n                <input matInput placeholder=\"First line\" [formControl]=\"firstLineFormCtl\">\n                <mat-error *ngIf=\"firstLineFormCtl.hasError('required')\">\n                  First line is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <div class=\"col-md-4\">\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Second line</mat-label>\n                <input matInput placeholder=\"Second line\" [formControl]=\"secondLineFormCtl\">\n                <mat-error *ngIf=\"secondLineFormCtl.hasError('required')\">\n                  Second line is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <div class=\"col-md-4\">\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Country</mat-label>\n                <input matInput placeholder=\"Country\" [formControl]=\"countryFormCtl\">\n                <mat-error *ngIf=\"countryFormCtl.hasError('required')\">\n                  Country is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <div class=\"col-md-4\">\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>State</mat-label>\n                <input matInput placeholder=\"State\" [formControl]=\"stateFormCtl\">\n                <mat-error *ngIf=\"stateFormCtl.hasError('required')\">\n                  State is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n\n            <div class=\"col-md-4\">\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>District</mat-label>\n                <mat-select placeholder=\"District\" [formControl]=\"districtFormCtl\">\n                  <mat-option *ngFor=\"let option of districts\" [value]=\"option\">\n                    {{option}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"districtFormCtl.hasError('required')\">\n                  District is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n\n      <mat-tab>\n        <ng-template mat-tab-label>\n          <mat-icon>insert_drive_file</mat-icon>\n          <span style=\"font-size: 13px;\">Parent's and Guardian's Info</span>\n        </ng-template>\n\n        <div class=\"row pt-3\">\n\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Father's details</p>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Father's Name</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"fatherNameFormCtl\">\n              <mat-error *ngIf=\"fatherNameFormCtl.hasError('required')\">\n                Father's Name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Date of birth</mat-label>\n              <input matInput [matDatepicker]=\"fdobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"fatherDobFormCtl\"\n                readonly>\n              <mat-datepicker-toggle matSuffix [for]=\"fdobt\"></mat-datepicker-toggle>\n              <mat-datepicker #fdobt></mat-datepicker>\n              <mat-error *ngIf=\"fatherDobFormCtl.hasError('required')\">\n                Date of birth is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Education Qualification</mat-label>\n              <input matInput placeholder=\"Education Qualification\" [formControl]=\"fatherEduQualiFormCtl\">\n              <mat-error *ngIf=\"fatherEduQualiFormCtl.hasError('required')\">\n                Education Qualification is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Occupation</mat-label>\n              <input matInput placeholder=\"Occupation\" [formControl]=\"fatherOccupationFormCtl\">\n              <mat-error *ngIf=\"fatherOccupationFormCtl.hasError('required')\">\n                Occupation is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Annual Income</mat-label>\n              <input matInput type=\"number\" placeholder=\"Annual Income\" [formControl]=\"fatherAnnualIncomeFormCtl\">\n              <mat-error *ngIf=\"fatherAnnualIncomeFormCtl.hasError('required')\">\n                Annual Income is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <!-- <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Aadhaar No</mat-label>\n              <input matInput placeholder=\"Aadhaar No\" [formControl]=\"fatherAadhaarNoFormCtl\">\n              <mat-error *ngIf=\"fatherAadhaarNoFormCtl.hasError('required')\">\n                Aadhaar No is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div> -->\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Contact No.</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"fatherContactNoFormCtl\">\n              <mat-error *ngIf=\"fatherContactNoFormCtl.hasError('required')\">\n                Contact No. is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n\n          <!-- Mother's details -->\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Mother's details</p>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Mother's Name</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"motherNameFormCtl\">\n              <mat-error *ngIf=\"motherNameFormCtl.hasError('required')\">\n                Mother's Name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Date of birth</mat-label>\n              <input matInput [matDatepicker]=\"mdobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"motherDobFormCtl\"\n                readonly>\n              <mat-datepicker-toggle matSuffix [for]=\"mdobt\"></mat-datepicker-toggle>\n              <mat-datepicker #mdobt></mat-datepicker>\n              <mat-error *ngIf=\"motherDobFormCtl.hasError('required')\">\n                Date of birth is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Education Qualification</mat-label>\n              <input matInput placeholder=\"Education Qualification\" [formControl]=\"motherEduQualiFormCtl\">\n              <mat-error *ngIf=\"motherEduQualiFormCtl.hasError('required')\">\n                Education Qualification is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Occupation</mat-label>\n              <input matInput placeholder=\"Occupation\" [formControl]=\"motherOccupationFormCtl\">\n              <mat-error *ngIf=\"motherOccupationFormCtl.hasError('required')\">\n                Occupation is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Annual Income</mat-label>\n              <input matInput type=\"number\" placeholder=\"Annual Income\" [formControl]=\"motherAnnualIncomeFormCtl\">\n              <mat-error *ngIf=\"motherAnnualIncomeFormCtl.hasError('required')\">\n                Annual Income is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <!--  <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Aadhaar No</mat-label>\n              <input matInput placeholder=\"Aadhaar No\" [formControl]=\"motherAadhaarNoFormCtl\">\n              <mat-error *ngIf=\"motherAadhaarNoFormCtl.hasError('required')\">\n                Aadhaar No is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div> -->\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Contact No.</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"motherContactNoFormCtl\">\n              <mat-error *ngIf=\"motherContactNoFormCtl.hasError('required')\">\n                Contact No. is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <!-- Guardian's details -->\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Guardian's details</p>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Guardian's Name</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"guardianNameFormCtl\">\n              <mat-error *ngIf=\"guardianNameFormCtl.hasError('required')\">\n                Guardian's Name is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Date of birth</mat-label>\n              <input matInput [matDatepicker]=\"gdobt\" placeholder=\"mm/dd/yyyy\" [formControl]=\"guardianDobFormCtl\"\n                readonly>\n              <mat-datepicker-toggle matSuffix [for]=\"gdobt\"></mat-datepicker-toggle>\n              <mat-datepicker #gdobt></mat-datepicker>\n              <mat-error *ngIf=\"guardianDobFormCtl.hasError('required')\">\n                Date of birth is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Education Qualification</mat-label>\n              <input matInput placeholder=\"Education Qualification\" [formControl]=\"guardianEduQualiFormCtl\">\n              <mat-error *ngIf=\"guardianEduQualiFormCtl.hasError('required')\">\n                Education Qualification is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Occupation</mat-label>\n              <input matInput placeholder=\"Occupation\" [formControl]=\"gaurdianOccupationFormCtl\">\n              <mat-error *ngIf=\"gaurdianOccupationFormCtl.hasError('required')\">\n                Occupation is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Annual Income</mat-label>\n              <input type=\"number\" matInput placeholder=\"Annual Income\" [formControl]=\"guardianAnnualIncomeFormCtl\">\n              <mat-error *ngIf=\"guardianAnnualIncomeFormCtl.hasError('required')\">\n                Annual Income is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n          <!--  <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Aadhaar No</mat-label>\n              <input matInput placeholder=\"Aadhaar No\" [formControl]=\"gaurdianAadhaarNoFormCtl\">\n              <mat-error *ngIf=\"gaurdianAadhaarNoFormCtl.hasError('required')\">\n                Aadhaar No is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div> -->\n\n          <div class=\"col-md-4\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Contact No.</mat-label>\n              <input matInput placeholder=\"Placeholder\" [formControl]=\"guardianContactNoFormCtl\">\n              <mat-error *ngIf=\"guardianContactNoFormCtl.hasError('required')\">\n                Contact No. is <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </div>\n        </div>\n      </mat-tab>\n\n    </mat-tab-group>\n  </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-list/student-list.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-list/student-list.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shadow-sm form-min-height\">\n  <div class=\"row p-1 bg-gold\">\n    <div class=\"col-md-4\">\n      <span class=\"font-400 font-banner\" style=\"line-height: 35px;\">Students</span>\n    </div>\n    <div class=\"col-md-8 text-right\">\n      <mat-form-field class=\"w-50\">\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n        <mat-icon matSuffix>filter_list</mat-icon>\n      </mat-form-field>&nbsp;\n      <button class=\"btn btn-save\" [routerLink]=\"['/admin/students/add']\">\n        <mat-icon class=\"white-icon\">add</mat-icon>&nbsp;New Registration\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 p-0 table-header\">\n      <div class=\"no-shadow w-100\">\n        <table mat-table [dataSource]=\"studentsDataSource\" matSort>\n\n          <ng-container matColumnDef=\"firstName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.firstName}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"middleName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Middle Name</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.middleName}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"lastName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.lastName}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"gender\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Gender</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.gender}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"rollNo\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Roll No.</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">\n              {{row.rollNo?row.rollNo:\"NA\"}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"standard\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Class</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\">{{row.standard}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"registrationNo\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registration No.</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\"> {{row.registrationNo}}\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n            <td mat-cell *matCellDef=\"let row\" class=\"name-class\" (click)=\"onClickRow(row.id)\"> {{row.status}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header></th>\n            <td mat-cell *matCellDef=\"let row\" class=\"text-right\">\n              <mat-icon *ngIf=\"isSuperAdmin\" (click)=\"onDeleteRow(row.id)\" style=\"color: firebrick; cursor: pointer;\">\n                delete</mat-icon> &nbsp;\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"studentsColumns;sticky: true\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: studentsColumns\">\n          </tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[12, 20,30,40,50,60,70,80,90,100]\" showFirstLastButtons></mat-paginator>\n        <div class=\"d-flex justify-content-center align-items-center\" style=\"height: 40vh;\"\n          *ngIf=\"students.length <= 0\">\n          <div>\n            <h4 class=\"font-grey font-300\">No student to display.</h4>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-view/student-view.component.html": 
        /*!************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-view/student-view.component.html ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"shadow form-min-height\">\n  <div class=\"row p-1 bg-gold\">\n    <div class=\"col-md-6\">\n      <span class=\"font-400 font-banner\" style=\"line-height: 35px;\">Student Details</span>\n    </div>\n    <div class=\"col-md-6 text-right\">\n      <button class=\"btn btn-save\" routerLink=\"/admin/students\">\n        <mat-icon class=\"white-icon\">keyboard_arrow_left</mat-icon>&nbsp;Back\n      </button>\n      <button class=\"btn btn-cancel\" (click)=\"delete()\" *ngIf=\"isSuperAdmin\">\n        <mat-icon class=\"white-icon\">clear</mat-icon>&nbsp;Delete\n      </button>\n      <button class=\"btn btn-edit\" (click)=\"edit()\">\n        <mat-icon class=\"white-icon\">edit</mat-icon>&nbsp;Edit\n      </button>\n      <button class=\"btn btn-save\" [routerLink]=\"['/admin/students/add']\">\n        <mat-icon class=\"white-icon\">add</mat-icon>&nbsp;New Registration\n      </button>\n    </div>\n  </div>\n  <div class=\"row p-1\" style=\"background-color: #f07a7a;color: #ffffff\" *ngIf=\"errorMessage\">\n    <div class=\"col\">\n      <span>{{errorMessage}}</span>\n    </div>\n  </div>\n\n  <div [ngClass]=\"['pt-1','pr-5','pl-5']\" *ngIf=\"student\">\n    <mat-tab-group>\n      <mat-tab>\n        <ng-template mat-tab-label>\n          <mat-icon class=\"example-tab-icon\">info</mat-icon>\n          <span style=\"font-size: 13px;\">General Info</span>\n        </ng-template>\n\n        <div class=\"row pt-3\">\n\n          <!-- ============== Personal Info ===================== -->\n\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <app-file-upload type=\"image\" bgButton=\"#029734\" color=\"white\" width=\"100\" height=\"100\"\n                [imageSrc]=\"profilePicUrl\" (onSelectFile)=\"onSelectFile($event)\"></app-file-upload>\n            </div>\n            <div class=\"col-md-10\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"font-500 font-title-lg pb-1\">Registration Info</div>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Registration Number : {{student.registrationNo}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Registration Date : {{student.registrationDate}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Status : <span class=\"pl-2 pr-2 rounded font-white\"\n                      [ngClass]=\"{'bg-green': student.status === 'Active','bg-red':student.status === 'Inactive'}\">{{student.status}}</span>\n                  </p>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <br>\n                  <div class=\"font-500 font-title-lg pb-1\">Student Info</div>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>First name : {{student.firstName}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Middle name : {{student.middleName}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Last name : {{student.lastName}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Gender : {{student.gender}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Blood Group : {{student.bloodGroup}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Religion : {{student.religion}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Community : {{student.community}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Nationality : {{student.nationality}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Class : {{student.standard}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Roll Number : {{student.rollNo?student.rollNo:'NA'}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Date of birth : {{student.dob}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <p>Joining Date : {{student.joiningDate}}</p>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <br>\n\n\n\n        </div>\n      </mat-tab>\n\n      <mat-tab>\n        <ng-template mat-tab-label>\n          <mat-icon class=\"example-tab-icon\">contact_phone</mat-icon>&nbsp;\n          <span style=\"font-size: 13px;\">Address details</span>\n        </ng-template>\n        <div class=\"row pt-3\">\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Correspondance Address</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>First line : {{student.correspondentAddress?.firstLine}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Second line : {{student.correspondentAddress?.secondLine}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Country : {{student.correspondentAddress?.country}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>District : {{student.correspondentAddress?.district}}</p>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!this.student.sameAsPermAddr\">\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Permanent Address</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>First line : {{student.permanentAddress?.firstLine}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Second line : {{student.permanentAddress?.secondLine}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Country : {{student.permanentAddress?.country}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>District : {{student.permanentAddress?.district}}</p>\n          </div>\n        </div>\n      </mat-tab>\n\n      <mat-tab>\n        <ng-template mat-tab-label>\n          <mat-icon>wc</mat-icon>\n          <span style=\"font-size: 13px;\">Parent's and Guardian's Info</span>\n        </ng-template>\n\n        <div class=\"row pt-3\">\n\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Father's details</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Father's Name : {{student.fatherInfo?.name}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Date of birth : {{student.fatherInfo?.dob}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Education Qualification : {{student.fatherInfo?.eduQualification}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Occupation : {{student.fatherInfo?.eduQualification}}</p>\n          </div>\n\n          <div class=\"col-md-4\">\n            <p>Annual Income : {{student.fatherInfo?.income  | currency:'INR'}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Contact No. : {{student.fatherInfo?.contactNo}}</p>\n          </div>\n\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Mother's details</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Mother's Name : {{student.motherInfo?.name}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Date of birth : {{student.motherInfo?.dob}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Education Qualification : {{student.motherInfo?.eduQualification}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Occupation : {{student.motherInfo?.eduQualification}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Annual Income : {{student.motherInfo?.income | currency:'INR'}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Contact No. : {{student.motherInfo?.contactNo}}</p>\n          </div>\n\n          <div class=\"col-md-12\">\n            <p style=\"font-weight: bold; font-size: 14px;\">Guardian's details</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Guardian's Name : {{student.guardianInfo?.name}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Date of birth : {{student.guardianInfo?.dob}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Education Qualification : {{student.guardianInfo?.eduQualification}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Occupation : {{student.guardianInfo?.eduQualification}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Annual Income : {{student.guardianInfo?.income | currency:'INR'}}</p>\n          </div>\n          <div class=\"col-md-4\">\n            <p>Contact No. : {{student.guardianInfo?.contactNo}}</p>\n          </div>\n\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.css": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.css ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".search-icon{\n    font-size: 28px !important;\n    color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL2FkbWlzc2lvbi1mZWUvYWRtaXNzaW9uLWZlZS1jcmVhdGUtZWRpdC9hZG1pc3Npb24tZmVlLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL2FkbWlzc2lvbi1mZWUvYWRtaXNzaW9uLWZlZS1jcmVhdGUtZWRpdC9hZG1pc3Npb24tZmVlLWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWljb257XG4gICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGdyYXk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: AdmissionFeeCreateEditComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionFeeCreateEditComponent", function () { return AdmissionFeeCreateEditComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _admission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admission */ "./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../search-student-dialog/search-student-dialog.component */ "./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/shared/model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");
            /* harmony import */ var src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/shared/components/snackbar-info/snackbar-info.component */ "./src/app/modules/shared/components/snackbar-info/snackbar-info.component.ts");
            var AdmissionFeeCreateEditComponent = /** @class */ (function (_super) {
                __extends(AdmissionFeeCreateEditComponent, _super);
                function AdmissionFeeCreateEditComponent(http, router, activatedRoute, matDialog, snackBar) {
                    var _this = _super.call(this) || this;
                    _this.http = http;
                    _this.router = router;
                    _this.activatedRoute = activatedRoute;
                    _this.matDialog = matDialog;
                    _this.snackBar = snackBar;
                    _this.activatedRoute.params.subscribe(function (params) {
                        _this.admId = params.id;
                        if (_this.admId) {
                            _this.getAdmissionFee();
                        }
                    });
                    _this.paidAmountFormCtl.valueChanges.subscribe(function (data) {
                        var admAmout = _this.admissionAmountFormCtl.value;
                        var paidAmount = data;
                        _this.dueAmountFormCtl.setValue(admAmout - paidAmount);
                        _this.promiseToPayDateFormCtl.enable();
                        _this.promiseToPayDateFormCtl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required);
                        _this.promiseToPayDateFormCtl.updateValueAndValidity();
                        if (admAmout >= paidAmount) {
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
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["ApiEndpoint"].ADMISSIONS + '/' + this.admId).subscribe(function (data) {
                        _this.admission = data.data;
                        if (_this.admission) {
                            _this.fees = _this.admission.fees;
                            _this.feesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.fees);
                        }
                        _this.setForm();
                    }, function (err) {
                        console.error(err);
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                    });
                };
                AdmissionFeeCreateEditComponent.prototype.setForm = function () {
                    this.idFormCtl.setValue(this.admission.id);
                    this.admissionRefNoFormCtl.setValue(this.admission.admissionRefNo);
                    this.admissionStatusFormCtl.setValue(this.admission.status);
                    this.academicYearFormCtl.setValue(this.admission.academicYear);
                    this.admissionDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_5__(this.admission.admissionDate));
                    this.standardFormCtl.setValue(this.admission.standard);
                    this.studentStatusFormCtl.setValue(this.admission.student.status);
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
                    }
                    this.fees = this.admission.fees;
                };
                AdmissionFeeCreateEditComponent.prototype.save = function () {
                    var _this = this;
                    var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US');
                    var admissionPayloadData = {
                        id: this.idFormCtl.value,
                        admissionRefNo: this.admissionRefNoFormCtl.value,
                        status: this.admissionStatusFormCtl.value,
                        academicYear: this.academicYearFormCtl.value,
                        admissionDate: datePipe.transform(this.admissionDateFormCtl.value, 'MM/dd/yyyy'),
                        standard: this.standardFormCtl.value,
                        admissionAmount: this.admissionAmountFormCtl.value,
                        paidAmount: this.paidAmountFormCtl.value,
                        dueAmount: this.dueAmountFormCtl.value,
                        promiseToPayDate: this.promiseToPayDateFormCtl.value,
                        student: {
                            correspondentAddress: null,
                            dob: null,
                            fatherInfo: null,
                            firstName: null,
                            gender: null,
                            bloodGroup: null,
                            community: null,
                            nationality: null,
                            physicallyChallenged: null,
                            religion: null,
                            profilePic: null,
                            status: null,
                            aadhaarNo: null,
                            guardianInfo: null,
                            id: this.studIdFormCtl.value,
                            joiningDate: null,
                            lastName: null,
                            middleName: null,
                            motherInfo: null,
                            registrationDate: null,
                            registrationNo: null,
                            rollNo: null,
                            standard: null,
                            permanentAddress: null,
                            sameAsPermAddr: null
                        },
                        fees: this.fees
                    };
                    console.log(admissionPayloadData);
                    this.saveOrUpdateHttpObservable(this.admId, admissionPayloadData).subscribe(function (data) {
                        if (data.apiMessage && data.apiMessage.error) {
                            _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_11__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["SnackBarConfig"].dangerData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["SnackBarConfig"].flashTopDangerSnackBar()));
                            return;
                        }
                        else {
                            _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_11__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["SnackBarConfig"].successData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["SnackBarConfig"].flashTopSuccessSnackBar()));
                        }
                        _this.hasSubmitted = true;
                        _this.router.navigate(['/admin/students/admissions']);
                    }, function (err) {
                        console.error(err);
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                    });
                };
                AdmissionFeeCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (admid, admissionPayloadData) {
                    if (this.admId) {
                        return this.http.put(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["ApiEndpoint"].ADMISSIONS + '/' + admid, admissionPayloadData);
                    }
                    else {
                        return this.http.post(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["ApiEndpoint"].ADMISSIONS, admissionPayloadData);
                    }
                };
                AdmissionFeeCreateEditComponent.prototype.searchStudent = function () {
                    var _this = this;
                    var dialogRef = this.matDialog.open(_search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_8__["SearchStudentDialogComponent"], { width: '70%' })
                        .afterClosed().subscribe(function (data) {
                        if (data) {
                            _this.student = data;
                            _this.registrationDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_5__(_this.student.registrationDate));
                            _this.registrationNoFormCtl.setValue(_this.student.registrationNo);
                            _this.studentStatusFormCtl.setValue(_this.student.status);
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
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["ApiEndpoint"].ADMISSIONS + '/fees/' + standard + '/' + acaYear).subscribe(function (data) {
                        _this.fees = data.data;
                        _this.feesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.fees);
                    }, function (err) {
                        console.error(err);
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                    });
                };
                AdmissionFeeCreateEditComponent.prototype.onSelectStandard = function (standard) {
                    this.paidAmountFormCtl.setValue(null);
                    this.dueAmountFormCtl.setValue(null);
                    this.getAddmissionFeeMaitenance(standard, this.academicYearFormCtl.value);
                    this.generateFees();
                };
                AdmissionFeeCreateEditComponent.prototype.getAddmissionFeeMaitenance = function (standard, academicYear) {
                    var _this = this;
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_10__["ApiEndpoint"].ADDMISSION_FEE_MAINTENANCE + '/' + standard + '/' + academicYear + '/standard-year').subscribe(function (data) {
                        _this.admissionFeeMaintenance = data.data;
                        if (_this.admissionFeeMaintenance) {
                            _this.admissionAmountFormCtl.setValue(_this.admissionFeeMaintenance.admissionAmount);
                        }
                    }, function (err) {
                        console.error(err);
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                    });
                };
                AdmissionFeeCreateEditComponent.prototype.pay = function (exptdateOfPayment) {
                };
                return AdmissionFeeCreateEditComponent;
            }(_admission__WEBPACK_IMPORTED_MODULE_2__["Admission"]));
            AdmissionFeeCreateEditComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
            ]; };
            AdmissionFeeCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admission-fee-create-edit',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admission-fee-create-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admission-fee-create-edit.component.css */ "./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.css")).default]
                })
            ], AdmissionFeeCreateEditComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission.ts ***!
          \**************************************************************************************************/
        /*! exports provided: Admission */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admission", function () { return Admission; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _models_admission_fee_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/admission-fee.model */ "./src/app/modules/students/models/admission-fee.model.ts");
            /* harmony import */ var _models_student_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/student.model */ "./src/app/modules/students/models/student.model.ts");
            var Admission = /** @class */ (function () {
                function Admission() {
                    this.hasSubmitted = false;
                    this.studentStatuses = _models_student_model__WEBPACK_IMPORTED_MODULE_3__["StudentStatuses"];
                    this.admissionStatuses = _models_admission_fee_model__WEBPACK_IMPORTED_MODULE_2__["AdmissionStatuses"];
                    this.standards = _models_student_model__WEBPACK_IMPORTED_MODULE_3__["Standards"];
                    this.feeColumns = [
                        'feeRef',
                        'amount',
                        'exptdateOfPayment',
                        'actdateOfPayment',
                        'monthOf',
                        'status',
                        'action'
                    ];
                    this.fee = [];
                    this.idFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.admissionRefNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.admissionStatusFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.academicYearFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.admissionDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.standardFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.studentStatusFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.admissionAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                    this.paidAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                    this.dueAmountFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.promiseToPayDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.studIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.firstNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.lastNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.rollNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.regIdIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.registrationNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.registrationDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.admissionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        admissionRefNoFormCtl: this.admissionRefNoFormCtl,
                        academicYearFormCtl: this.academicYearFormCtl,
                        admissionDateFormCtl: this.admissionDateFormCtl,
                        standardFormCtl: this.standardFormCtl,
                        statusFormCtl: this.studentStatusFormCtl,
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
                    this.studentStatusFormCtl.disable();
                    this.firstNameFormCtl.disable();
                    this.lastNameFormCtl.disable();
                    this.rollNoFormCtl.disable();
                    this.registrationNoFormCtl.disable();
                    this.registrationDateFormCtl.disable();
                    this.dueAmountFormCtl.disable();
                    this.promiseToPayDateFormCtl.disable();
                }
                return Admission;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.scss": 
        /*!****************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.scss ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".name-class {\n  text-transform: capitalize;\n}\n\n.name-class:hover {\n  color: #0466b6;\n  text-transform: capitalize;\n}\n\ntr:hover {\n  cursor: pointer;\n  background-color: #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWlucGMvc2Nob29sL215c2Nob29sL2FkbWluLXVpL3NyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL2FkbWlzc2lvbi1mZWUvYWRtaXNzaW9uLWZlZS1saXN0L2FkbWlzc2lvbi1mZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL2FkbWlzc2lvbi1mZWUvYWRtaXNzaW9uLWZlZS1saXN0L2FkbWlzc2lvbi1mZWUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL2FkbWlzc2lvbi1mZWUvYWRtaXNzaW9uLWZlZS1saXN0L2FkbWlzc2lvbi1mZWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYW1lLWNsYXNzIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5uYW1lLWNsYXNzOmhvdmVyIHtcbiAgY29sb3I6IHJnYig0LCAxMDIsIDE4Mik7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG50cjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xufVxuIiwiLm5hbWUtY2xhc3Mge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm5hbWUtY2xhc3M6aG92ZXIge1xuICBjb2xvcjogIzA0NjZiNjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnRyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: AdmissionFeeListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionFeeListComponent", function () { return AdmissionFeeListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");
            /* harmony import */ var src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
            /* harmony import */ var src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/components/snackbar-info/snackbar-info.component */ "./src/app/modules/shared/components/snackbar-info/snackbar-info.component.ts");
            /* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
            var AdmissionFeeListComponent = /** @class */ (function () {
                function AdmissionFeeListComponent(http, router, dialog, snackBar, authService) {
                    this.http = http;
                    this.router = router;
                    this.dialog = dialog;
                    this.snackBar = snackBar;
                    this.authService = authService;
                    this.admissionColumns = [
                        'name',
                        'registrationNo',
                        'studentStatus',
                        'admissionStatus',
                        'Class',
                        'Admission Number',
                        'action'
                    ];
                    this.admissions = [];
                    this.isSuperAdmin = false;
                }
                AdmissionFeeListComponent.prototype.ngOnInit = function () {
                    this.isSuperAdmin = this.authService.isSuperAdmin();
                    this.getAdmissions();
                };
                AdmissionFeeListComponent.prototype.getAdmissions = function () {
                    var _this = this;
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADMISSIONS).subscribe(function (data) {
                        _this.admissions = data.data;
                        _this.admissionsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.admissions);
                        _this.admissionsDataSource.paginator = _this.paginator;
                        _this.admissionsDataSource.sort = _this.sort;
                    }, function (err) {
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                        console.error(err);
                    });
                };
                AdmissionFeeListComponent.prototype.applyFilter = function (filterValue) {
                    this.admissionsDataSource.filter = filterValue.trim().toLowerCase();
                };
                AdmissionFeeListComponent.prototype.onClickRow = function (admId) {
                    this.router.navigate(['/admin/students/admissions/' + admId + '/view']);
                };
                AdmissionFeeListComponent.prototype.onDeleteRow = function (admId) {
                    var _this = this;
                    var confirmationData = {
                        title: 'Delete Admission',
                        subtitle: 'Are you really sure to delete this admission?'
                    };
                    this.dialog.open(src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], { width: '26%', data: confirmationData, disableClose: true })
                        .afterClosed().subscribe(function (okData) {
                        if (okData) {
                            _this.http.delete(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].ADMISSIONS + '/' + admId).subscribe(function (data) {
                                if (data.apiMessage && data.apiMessage.error) {
                                    _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].dangerData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].flashTopDangerSnackBar()));
                                    return;
                                }
                                else {
                                    _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].successData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].flashTopSuccessSnackBar()));
                                }
                                _this.admissionsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
                                _this.ngOnInit();
                            }, function (err) {
                                console.error(err);
                                if (err.error && err.error.apiMessage) {
                                    _this.errorMessage = err.error.apiMessage.detail;
                                }
                                else {
                                    _this.errorMessage = err.message;
                                }
                                _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].dangerData(_this.errorMessage) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].flashTopDangerSnackBar()));
                            });
                        }
                    });
                };
                return AdmissionFeeListComponent;
            }());
            AdmissionFeeListComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
            ], AdmissionFeeListComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
            ], AdmissionFeeListComponent.prototype, "sort", void 0);
            AdmissionFeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admission-fee-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admission-fee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admission-fee-list.component.scss */ "./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.scss")).default]
                })
            ], AdmissionFeeListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.css": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.css ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudHMvY29tcG9uZW50cy9hZG1pc3Npb24tZmVlL2FkbWlzc2lvbi1mZWUtdmlldy9hZG1pc3Npb24tZmVlLXZpZXcuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: AdmissionFeeViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionFeeViewComponent", function () { return AdmissionFeeViewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
            /* harmony import */ var src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/components/snackbar-info/snackbar-info.component */ "./src/app/modules/shared/components/snackbar-info/snackbar-info.component.ts");
            /* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
            var AdmissionFeeViewComponent = /** @class */ (function () {
                function AdmissionFeeViewComponent(http, router, activatedRoute, dialog, snackBar, authService) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                    this.dialog = dialog;
                    this.snackBar = snackBar;
                    this.authService = authService;
                    this.feeColumns = [
                        'id',
                        'feeRef',
                        'amount',
                        'exptdateOfPayment',
                        'actdateOfPayment',
                        'monthOf',
                        'status',
                        'action'
                    ];
                    this.fee = [];
                    this.isSuperAdmin = false;
                    this.activatedRoute.params.subscribe(function (params) {
                        _this.admId = params.id;
                    });
                }
                AdmissionFeeViewComponent.prototype.ngOnInit = function () {
                    this.isSuperAdmin = this.authService.isSuperAdmin();
                    this.getAdmission();
                };
                AdmissionFeeViewComponent.prototype.getAdmission = function () {
                    var _this = this;
                    var resp;
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ADMISSIONS + '/' + this.admId).subscribe(function (data) {
                        resp = data;
                        _this.admission = resp.data;
                        if (_this.admission.fees) {
                            _this.feesDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.admission.fees);
                        }
                    }, function (err) {
                        console.error(err);
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                    });
                };
                AdmissionFeeViewComponent.prototype.delete = function () {
                    var _this = this;
                    var confirmationData = {
                        title: 'Delete Admission',
                        subtitle: 'Are you really sure to delete this admission?'
                    };
                    this.dialog.open(src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], { width: '26%', data: confirmationData, disableClose: true })
                        .afterClosed().subscribe(function (okData) {
                        if (okData) {
                            _this.http.delete(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ADMISSIONS + '/' + _this.admId).subscribe(function (data) {
                                if (data.apiMessage && data.apiMessage.error) {
                                    _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].dangerData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].flashTopDangerSnackBar()));
                                    return;
                                }
                                else {
                                    _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].successData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].flashTopSuccessSnackBar()));
                                }
                                _this.router.navigate(['/admin/students/admissions']);
                            }, function (err) {
                                console.error(err);
                                if (err.error && err.error.apiMessage) {
                                    _this.errorMessage = err.error.apiMessage.detail;
                                }
                                else {
                                    _this.errorMessage = err.message;
                                }
                                _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].dangerData(_this.errorMessage) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].flashTopDangerSnackBar()));
                            });
                        }
                    });
                };
                AdmissionFeeViewComponent.prototype.edit = function () {
                    this.router.navigate(['admin/students/admissions/' + this.admId + '/edit']);
                };
                AdmissionFeeViewComponent.prototype.onDeleteFeeRow = function (feeId) {
                };
                AdmissionFeeViewComponent.prototype.onClickRow = function (fee) {
                };
                AdmissionFeeViewComponent.prototype.payFee = function (fee) {
                    var _this = this;
                    this.dialog.open(src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], {
                        width: '26%',
                        data: {
                            title: 'Pay fee',
                            subtitle: 'Click Ok to pay the fee.'
                        },
                        disableClose: true
                    })
                        .afterClosed().subscribe(function (okData) {
                        if (okData) {
                            _this.http.put(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].ADMISSIONS + '/' + _this.admId + '/fee/' + fee.id, {}).subscribe(function (data) {
                                _this.getAdmission();
                                var configSuccess = {
                                    panelClass: 'success-snackbar',
                                    duration: 5000,
                                    horizontalPosition: 'center',
                                    verticalPosition: 'top'
                                };
                                _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: 'Successfully paid the fee.' }, configSuccess));
                            }, function (err) {
                                console.error(err);
                                if (err.error && err.error.apiMessage) {
                                    _this.errorMessage = err.error.apiMessage.detail;
                                }
                                else {
                                    _this.errorMessage = err.message;
                                }
                            });
                        }
                    });
                };
                return AdmissionFeeViewComponent;
            }());
            AdmissionFeeViewComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
                { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
            ]; };
            AdmissionFeeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admission-fee-view',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admission-fee-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admission-fee-view.component.css */ "./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.css")).default]
                })
            ], AdmissionFeeViewComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.css": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.css ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dialg-header{\n    background-image: linear-gradient(to right, #065c37, #09713f, #138747, #229d4c, #33b451);\n    padding: 5px;\n    color: #ffffff;\n    padding-left: 15px;\n}\n\n.table thead th {\n    border-bottom: none !important;\n}\n\n.w-30{\n    width: 30%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL3NlYXJjaC1zdHVkZW50LWRpYWxvZy9zZWFyY2gtc3R1ZGVudC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdGQUF3RjtJQUN4RixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudHMvY29tcG9uZW50cy9zZWFyY2gtc3R1ZGVudC1kaWFsb2cvc2VhcmNoLXN0dWRlbnQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbGctaGVhZGVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA2NWMzNywgIzA5NzEzZiwgIzEzODc0NywgIzIyOWQ0YywgIzMzYjQ1MSk7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnRhYmxlIHRoZWFkIHRoIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53LTMwe1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.ts ***!
          \******************************************************************************************************/
        /*! exports provided: SearchStudentDialogComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStudentDialogComponent", function () { return SearchStudentDialogComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");
            var SearchStudentDialogComponent = /** @class */ (function () {
                function SearchStudentDialogComponent(dialogRef, data, http) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.http = http;
                    // tslint:disable-next-line: max-line-length
                    this.studentsColumns = ['firstName', 'middleName', 'lastName', 'registrationNo', 'registrationDate', 'registrationStatus'];
                    this.students = [];
                    this.fetchingStudents = false;
                }
                SearchStudentDialogComponent.prototype.ngOnInit = function () {
                    this.getStudents();
                };
                SearchStudentDialogComponent.prototype.getStudents = function () {
                    var _this = this;
                    this.fetchingStudents = true;
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].STUDENTS).subscribe(function (data) {
                        _this.students = data.data;
                        _this.studentsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.students);
                        _this.studentsDataSource.paginator = _this.paginator;
                        _this.studentsDataSource.sort = _this.sort;
                        _this.fetchingStudents = false;
                    }, function (err) {
                        _this.fetchingStudents = false;
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                        console.error(err);
                    });
                };
                SearchStudentDialogComponent.prototype.applyFilter = function (filterValue) {
                    this.studentsDataSource.filter = filterValue.trim().toLowerCase();
                };
                SearchStudentDialogComponent.prototype.select = function (student) {
                    this.dialogRef.close(student);
                };
                SearchStudentDialogComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return SearchStudentDialogComponent;
            }());
            SearchStudentDialogComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
            ], SearchStudentDialogComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
            ], SearchStudentDialogComponent.prototype, "sort", void 0);
            SearchStudentDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-student-dialog',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-student-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-student-dialog.component.css */ "./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], SearchStudentDialogComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.css": 
        /*!********************************************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.css ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudHMvY29tcG9uZW50cy9zdHVkZW50LWF0dGVuZGVuY2Uvc3R1ZGVudC1hdHRlbmRlbmNlLWNyZWF0ZS1lZGl0L3N0dWRlbnQtYXR0ZW5kZW5jZS1jcmVhdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.ts": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.ts ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: StudentAttendenceCreateEditComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendenceCreateEditComponent", function () { return StudentAttendenceCreateEditComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var StudentAttendenceCreateEditComponent = /** @class */ (function () {
                function StudentAttendenceCreateEditComponent() {
                }
                StudentAttendenceCreateEditComponent.prototype.ngOnInit = function () {
                };
                return StudentAttendenceCreateEditComponent;
            }());
            StudentAttendenceCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-student-attendence-create-edit',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-attendence-create-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-attendence-create-edit.component.css */ "./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.css")).default]
                })
            ], StudentAttendenceCreateEditComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.css": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.css ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudHMvY29tcG9uZW50cy9zdHVkZW50LWF0dGVuZGVuY2Uvc3R1ZGVudC1hdHRlbmRlbmNlLWxpc3Qvc3R1ZGVudC1hdHRlbmRlbmNlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.ts": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.ts ***!
          \*****************************************************************************************************************************/
        /*! exports provided: StudentAttendenceListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAttendenceListComponent", function () { return StudentAttendenceListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var StudentAttendenceListComponent = /** @class */ (function () {
                function StudentAttendenceListComponent() {
                }
                StudentAttendenceListComponent.prototype.ngOnInit = function () {
                };
                return StudentAttendenceListComponent;
            }());
            StudentAttendenceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-student-attendence-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-attendence-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-attendence-list.component.css */ "./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.css")).default]
                })
            ], StudentAttendenceListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.css": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.css ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0 0.75em 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1jcmVhdGUtZWRpdC9zdHVkZW50LWNyZWF0ZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3N0dWRlbnRzL2NvbXBvbmVudHMvc3R1ZGVudC9zdHVkZW50LWNyZWF0ZS1lZGl0L3N0dWRlbnQtY3JlYXRlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAgMC43NWVtIDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: StudentCreateEditComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCreateEditComponent", function () { return StudentCreateEditComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student */ "./src/app/modules/students/components/student/student-create-edit/student.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");
            /* harmony import */ var src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/components/snackbar-info/snackbar-info.component */ "./src/app/modules/shared/components/snackbar-info/snackbar-info.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var StudentCreateEditComponent = /** @class */ (function (_super) {
                __extends(StudentCreateEditComponent, _super);
                function StudentCreateEditComponent(http, router, activatedRoute, snackBar) {
                    var _this = _super.call(this) || this;
                    _this.http = http;
                    _this.router = router;
                    _this.activatedRoute = activatedRoute;
                    _this.snackBar = snackBar;
                    _this.activatedRoute.params.subscribe(function (params) {
                        _this.studId = params.id;
                        if (_this.studId) {
                            _this.getStudent();
                        }
                    });
                    return _this;
                }
                StudentCreateEditComponent.prototype.ngOnInit = function () {
                    this.getStandards();
                    this.sameAsPermAddrFormCtl.setValue(true);
                    this.nationalityFormCtl.setValue('Indian');
                    this.countryFormCtl.setValue('India');
                    this.stateFormCtl.setValue('Manipur');
                    this.districtFormCtl.setValue('Thoubal');
                    this.countryFormCtl.disable();
                    this.stateFormCtl.disable();
                    this.corrCountryFormCtl.setValue('India');
                    this.corrStateFormCtl.setValue('Manipur');
                    this.corrDistrictFormCtl.setValue('Thoubal');
                    this.corrCountryFormCtl.disable();
                    this.corrStateFormCtl.disable();
                };
                StudentCreateEditComponent.prototype.getStandards = function () {
                    var _this = this;
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["ApiEndpoint"].STANDARD).subscribe(function (data) {
                        _this.standards = data.data;
                    }, function (err) {
                        console.error(err);
                    });
                };
                StudentCreateEditComponent.prototype.getStudent = function () {
                    var _this = this;
                    var resp;
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["ApiEndpoint"].STUDENTS + '/' + this.studId).subscribe(function (data) {
                        resp = data;
                        _this.student = resp.data;
                        _this.setForm();
                    }, function (err) {
                        console.error(err);
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                    });
                };
                StudentCreateEditComponent.prototype.save = function () {
                    var _this = this;
                    var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US');
                    var studentPayloadData = {
                        id: this.idFormCtl.value,
                        registrationNo: this.registrationNoFormCtl.value,
                        registrationDate: datePipe.transform(this.registrationDateFormCtl.value, 'MM/dd/yyyy'),
                        status: this.statusFormCtl.value,
                        firstName: this.firstNameFormCtl.value,
                        middleName: this.middleNameFormCtl.value,
                        lastName: this.lastNameFormCtl.value,
                        gender: this.genderFormCtl.value,
                        aadhaarNo: null,
                        bloodGroup: this.bloodGroupFormCtl.value,
                        community: this.communityFormCtl.value,
                        nationality: this.nationalityFormCtl.value,
                        physicallyChallenged: null,
                        religion: this.religionFormCtl.value,
                        standard: this.standardFormCtl.value,
                        rollNo: this.rollNoFormCtl.value,
                        dob: datePipe.transform(this.dobFormCtl.value, 'MM/dd/yyyy'),
                        joiningDate: datePipe.transform(this.joiningDateFormCtl.value, 'MM/dd/yyyy'),
                        correspondentAddress: {
                            id: this.corrAddIdFormCtl.value,
                            firstLine: this.corrFirstLineFormCtl.value,
                            secondLine: this.corrSecondLineFormCtl.value,
                            country: this.corrCountryFormCtl.value,
                            state: this.corrStateFormCtl.value,
                            district: this.corrDistrictFormCtl.value
                        },
                        permanentAddress: {
                            id: this.addIdFormCtl.value,
                            firstLine: this.firstLineFormCtl.value,
                            secondLine: this.secondLineFormCtl.value,
                            country: this.countryFormCtl.value,
                            state: this.stateFormCtl.value,
                            district: this.districtFormCtl.value
                        },
                        sameAsPermAddr: this.sameAsPermAddrFormCtl.value,
                        fatherInfo: {
                            id: this.fInfoIdFormCtl.value,
                            name: this.fatherNameFormCtl.value,
                            dob: datePipe.transform(this.fatherDobFormCtl.value, 'MM/dd/yyyy'),
                            eduQualification: this.fatherEduQualiFormCtl.value,
                            income: this.fatherAnnualIncomeFormCtl.value,
                            occupation: this.fatherOccupationFormCtl.value,
                            contactNo: this.fatherContactNoFormCtl.value
                        },
                        motherInfo: {
                            id: this.mInfoIdFormCtl.value,
                            name: this.motherNameFormCtl.value,
                            dob: datePipe.transform(this.motherDobFormCtl.value, 'MM/dd/yyyy'),
                            eduQualification: this.motherEduQualiFormCtl.value,
                            income: this.motherAnnualIncomeFormCtl.value,
                            occupation: this.motherOccupationFormCtl.value,
                            contactNo: this.motherContactNoFormCtl.value
                        },
                        guardianInfo: {
                            id: this.gInfoIdFormCtl.value,
                            name: this.guardianNameFormCtl.value,
                            dob: datePipe.transform(this.guardianDobFormCtl.value, 'MM/dd/yyyy'),
                            eduQualification: this.guardianEduQualiFormCtl.value,
                            income: this.guardianAnnualIncomeFormCtl.value,
                            occupation: this.gaurdianOccupationFormCtl.value,
                            contactNo: this.guardianContactNoFormCtl.value
                        }
                    };
                    console.log(studentPayloadData);
                    this.saveOrUpdateHttpObservable(this.studId, studentPayloadData).subscribe(function (data) {
                        if (data.apiMessage && data.apiMessage.error) {
                            _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["SnackBarConfig"].dangerData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["SnackBarConfig"].flashTopDangerSnackBar()));
                            return;
                        }
                        else {
                            _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["SnackBarConfig"].successData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["SnackBarConfig"].flashTopSuccessSnackBar()));
                        }
                        _this.hasSubmitted = true;
                        _this.router.navigate(['/admin/students']);
                    }, function (err) {
                        console.error(err);
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                        _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["SnackBarConfig"].dangerData(_this.errorMessage) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["SnackBarConfig"].flashTopDangerSnackBar()));
                    });
                };
                StudentCreateEditComponent.prototype.saveOrUpdateHttpObservable = function (studRegdId, studentPayloadData) {
                    if (this.studId) {
                        return this.http.put(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["ApiEndpoint"].STUDENTS + '/' + studRegdId, studentPayloadData);
                    }
                    else {
                        return this.http.post(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_7__["ApiEndpoint"].STUDENTS, studentPayloadData);
                    }
                };
                StudentCreateEditComponent.prototype.setForm = function () {
                    this.idFormCtl.setValue(this.student.id);
                    this.registrationNoFormCtl.setValue(this.student.registrationNo);
                    this.registrationDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_5__(this.student.registrationDate));
                    this.statusFormCtl.setValue(this.student.status);
                    this.firstNameFormCtl.setValue(this.student.firstName);
                    this.middleNameFormCtl.setValue(this.student.middleName);
                    this.lastNameFormCtl.setValue(this.student.lastName);
                    this.standardFormCtl.setValue(this.student.standard);
                    this.bloodGroupFormCtl.setValue(this.student.bloodGroup);
                    this.genderFormCtl.setValue(this.student.gender);
                    this.religionFormCtl.setValue(this.student.religion);
                    this.communityFormCtl.setValue(this.student.community);
                    this.nationalityFormCtl.setValue(this.student.nationality);
                    this.rollNoFormCtl.setValue(this.student.rollNo);
                    this.dobFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_5__(this.student.dob));
                    this.joiningDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_5__(this.student.joiningDate));
                    this.sameAsPermAddrFormCtl.setValue(this.student.sameAsPermAddr);
                    var permanentAddress = this.student.permanentAddress;
                    if (permanentAddress) {
                        this.addIdFormCtl.setValue(permanentAddress.id);
                        this.firstLineFormCtl.setValue(permanentAddress.firstLine);
                        this.secondLineFormCtl.setValue(permanentAddress.secondLine);
                        this.countryFormCtl.setValue(permanentAddress.country);
                        this.stateFormCtl.setValue(permanentAddress.state);
                        this.districtFormCtl.setValue(permanentAddress.district);
                    }
                    var correspondentAddress = this.student.correspondentAddress;
                    if (correspondentAddress) {
                        this.corrAddIdFormCtl.setValue(correspondentAddress.id);
                        this.corrFirstLineFormCtl.setValue(correspondentAddress.firstLine);
                        this.corrSecondLineFormCtl.setValue(correspondentAddress.secondLine);
                        this.corrCountryFormCtl.setValue(correspondentAddress.country);
                        this.corrStateFormCtl.setValue(correspondentAddress.state);
                        this.corrDistrictFormCtl.setValue(correspondentAddress.district);
                    }
                    var fatherInfo = this.student.fatherInfo;
                    if (fatherInfo) {
                        this.fInfoIdFormCtl.setValue(fatherInfo.id);
                        this.fatherNameFormCtl.setValue(fatherInfo.name);
                        if (fatherInfo.dob) {
                            this.fatherDobFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_5__(fatherInfo.dob));
                        }
                        this.fatherContactNoFormCtl.setValue(fatherInfo.contactNo);
                        this.fatherAnnualIncomeFormCtl.setValue(fatherInfo.income);
                        this.fatherEduQualiFormCtl.setValue(fatherInfo.eduQualification);
                        this.fatherOccupationFormCtl.setValue(fatherInfo.occupation);
                    }
                    var motherInfo = this.student.motherInfo;
                    if (motherInfo) {
                        this.mInfoIdFormCtl.setValue(motherInfo.id);
                        this.motherNameFormCtl.setValue(motherInfo.name);
                        if (motherInfo.dob) {
                            this.motherNameFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_5__(motherInfo.dob));
                        }
                        this.motherContactNoFormCtl.setValue(motherInfo.contactNo);
                        this.motherAnnualIncomeFormCtl.setValue(motherInfo.income);
                        this.motherEduQualiFormCtl.setValue(motherInfo.eduQualification);
                        this.motherOccupationFormCtl.setValue(motherInfo.occupation);
                    }
                    var guardianInfo = this.student.guardianInfo;
                    if (guardianInfo) {
                        this.gInfoIdFormCtl.setValue(guardianInfo.id);
                        this.guardianNameFormCtl.setValue(guardianInfo.name);
                        if (guardianInfo.dob) {
                            this.guardianDobFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_5__(guardianInfo.dob));
                        }
                        this.guardianContactNoFormCtl.setValue(guardianInfo.contactNo);
                        this.guardianAnnualIncomeFormCtl.setValue(guardianInfo.income);
                        this.guardianEduQualiFormCtl.setValue(guardianInfo.eduQualification);
                        this.gaurdianOccupationFormCtl.setValue(guardianInfo.occupation);
                    }
                };
                return StudentCreateEditComponent;
            }(_student__WEBPACK_IMPORTED_MODULE_2__["Student"]));
            StudentCreateEditComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }
            ]; };
            StudentCreateEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-student-create-edit',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-create-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-create-edit.component.css */ "./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.css")).default]
                })
            ], StudentCreateEditComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student/student-create-edit/student.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/students/components/student/student-create-edit/student.ts ***!
          \************************************************************************************/
        /*! exports provided: Student */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function () { return Student; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _models_student_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/student.model */ "./src/app/modules/students/models/student.model.ts");
            /* harmony import */ var src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");
            var Student = /** @class */ (function () {
                function Student() {
                    this.hasSubmitted = false;
                    this.statuses = _models_student_model__WEBPACK_IMPORTED_MODULE_3__["StudentStatuses"];
                    this.standards = [];
                    this.genders = _models_student_model__WEBPACK_IMPORTED_MODULE_3__["Genders"];
                    this.yesNo = [{ key: 'Yes', value: true }, { key: 'No', value: false }];
                    this.bloodGroups = src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["bloodGroups"];
                    this.religions = src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["religions"];
                    this.communities = src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["communities"];
                    this.districts = src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["districts"];
                    // Registration details
                    this.idFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.registrationNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.registrationDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.statusFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    // Student basic details
                    this.firstNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                    this.middleNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.lastNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                    this.standardFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.rollNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.dobFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
                    this.joiningDateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.genderFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.bloodGroupFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.religionFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.casteFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.nationalityFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.communityFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    // Permanent Address details
                    this.sameAsPermAddrFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.addIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.firstLineFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.secondLineFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.countryFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.stateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.districtFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    // Correspondent Address
                    this.corrAddIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.corrFirstLineFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.corrSecondLineFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.corrCountryFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.corrStateFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.corrDistrictFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    // Student Father details
                    this.fInfoIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.fatherNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.fatherDobFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.fatherContactNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.fatherEduQualiFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.fatherOccupationFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.fatherAnnualIncomeFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.fatherAadhaarNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    // Student Mother details
                    this.mInfoIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.motherNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.motherDobFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.motherContactNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.motherEduQualiFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.motherOccupationFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.motherAnnualIncomeFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.motherAadhaarNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    // Student Guardian details
                    this.gInfoIdFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.guardianNameFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.guardianDobFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.guardianContactNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.guardianEduQualiFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.gaurdianOccupationFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.guardianAnnualIncomeFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.gaurdianAadhaarNoFormCtl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', null);
                    this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                        // Student basic details
                        firstNameFormCtl: this.firstNameFormCtl,
                        middleNameFormCtl: this.middleNameFormCtl,
                        lastNameFormCtl: this.lastNameFormCtl,
                        standardFormCtl: this.standardFormCtl,
                        rollNoFormCtl: this.rollNoFormCtl,
                        dobFormCtl: this.dobFormCtl,
                        joiningDateFormCtl: this.joiningDateFormCtl,
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
                    this.registrationDateFormCtl.setValue(moment__WEBPACK_IMPORTED_MODULE_2__());
                }
                return Student;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student/student-list/student-list.component.scss": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/students/components/student/student-list/student-list.component.scss ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".name-class {\n  text-transform: capitalize;\n}\n\n.name-class:hover {\n  color: #0466b6;\n  text-transform: capitalize;\n}\n\ntr:hover {\n  cursor: pointer;\n  background-color: #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWlucGMvc2Nob29sL215c2Nob29sL2FkbWluLXVpL3NyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDBCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zdHVkZW50cy9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1saXN0L3N0dWRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5hbWUtY2xhc3Mge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm5hbWUtY2xhc3M6aG92ZXIge1xuICBjb2xvcjogcmdiKDQsIDEwMiwgMTgyKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnRyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XG59XG4iLCIubmFtZS1jbGFzcyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubmFtZS1jbGFzczpob3ZlciB7XG4gIGNvbG9yOiAjMDQ2NmI2O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxudHI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student/student-list/student-list.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/students/components/student/student-list/student-list.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: StudentListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function () { return StudentListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");
            /* harmony import */ var src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
            /* harmony import */ var src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/components/snackbar-info/snackbar-info.component */ "./src/app/modules/shared/components/snackbar-info/snackbar-info.component.ts");
            /* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
            var StudentListComponent = /** @class */ (function () {
                function StudentListComponent(http, router, dialog, snackBar, authService) {
                    this.http = http;
                    this.router = router;
                    this.dialog = dialog;
                    this.snackBar = snackBar;
                    this.authService = authService;
                    // tslint:disable-next-line: max-line-length
                    this.studentsColumns = ['firstName', 'middleName', 'lastName', 'gender', 'rollNo', 'standard', 'registrationNo', 'status', 'action'];
                    this.students = [];
                    this.isSuperAdmin = false;
                }
                StudentListComponent.prototype.ngOnInit = function () {
                    this.isSuperAdmin = this.authService.isSuperAdmin();
                    this.getStudents();
                };
                StudentListComponent.prototype.getStudents = function () {
                    var _this = this;
                    var resp;
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].STUDENTS).subscribe(function (data) {
                        resp = data;
                        if (resp && !resp.apiMessage.error) {
                            _this.students = resp.data;
                            _this.studentsDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.students);
                            _this.studentsDataSource.paginator = _this.paginator;
                            _this.studentsDataSource.sort = _this.sort;
                            if (!_this.students) {
                                _this.errorMessage = 'No Student found';
                            }
                        }
                        else {
                            _this.errorMessage = resp.apiMessage.detail;
                        }
                    }, function (err) {
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                        console.error(err);
                    });
                };
                StudentListComponent.prototype.applyFilter = function (filterValue) {
                    this.studentsDataSource.filter = filterValue.trim().toLowerCase();
                };
                StudentListComponent.prototype.onClickRow = function (studId) {
                    this.router.navigate(['/admin/students/' + studId + '/view']);
                };
                StudentListComponent.prototype.onDeleteRow = function (studId) {
                    var _this = this;
                    var confirmationData = {
                        title: 'Delete Student',
                        subtitle: 'Are you really sure to delete this student?'
                    };
                    this.dialog.open(src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], { width: '26%', data: confirmationData, disableClose: true })
                        .afterClosed().subscribe(function (okData) {
                        if (okData) {
                            _this.http.delete(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["ApiEndpoint"].STUDENTS + '/' + studId).subscribe(function (data) {
                                if (data.apiMessage && data.apiMessage.error) {
                                    _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].dangerData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].flashTopDangerSnackBar()));
                                    return;
                                }
                                else {
                                    _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].successData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].flashTopSuccessSnackBar()));
                                }
                                _this.getStudents();
                            }, function (err) {
                                console.error(err);
                                if (err.error && err.error.apiMessage) {
                                    _this.errorMessage = err.error.apiMessage.detail;
                                }
                                else {
                                    _this.errorMessage = err.message;
                                }
                                _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_7__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].dangerData(_this.errorMessage) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_5__["SnackBarConfig"].flashTopDangerSnackBar()));
                            });
                        }
                    });
                };
                return StudentListComponent;
            }());
            StudentListComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
                { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
            ], StudentListComponent.prototype, "paginator", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
            ], StudentListComponent.prototype, "sort", void 0);
            StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-student-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-list/student-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-list.component.scss */ "./src/app/modules/students/components/student/student-list/student-list.component.scss")).default]
                })
            ], StudentListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student/student-view/student-view.component.css": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/modules/students/components/student/student-view/student-view.component.css ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3R1ZGVudHMvY29tcG9uZW50cy9zdHVkZW50L3N0dWRlbnQtdmlldy9zdHVkZW50LXZpZXcuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/students/components/student/student-view/student-view.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/students/components/student/student-view/student-view.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: StudentViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentViewComponent", function () { return StudentViewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component */ "./src/app/modules/shared/components/confirmation-dialog/confirmation-dialog.component.ts");
            /* harmony import */ var src_app_modules_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/file-upload.service */ "./src/app/modules/shared/services/file-upload.service.ts");
            /* harmony import */ var src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/shared/components/snackbar-info/snackbar-info.component */ "./src/app/modules/shared/components/snackbar-info/snackbar-info.component.ts");
            /* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
            var StudentViewComponent = /** @class */ (function () {
                function StudentViewComponent(http, router, activatedRoute, dialog, fileUploadService, snackBar, authService) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                    this.dialog = dialog;
                    this.fileUploadService = fileUploadService;
                    this.snackBar = snackBar;
                    this.authService = authService;
                    this.profilePicUrl = '../../../../../../assets/images/avatar.png';
                    this.isSuperAdmin = false;
                    this.activatedRoute.params.subscribe(function (params) {
                        _this.studId = params.id;
                    });
                }
                StudentViewComponent.prototype.ngOnInit = function () {
                    this.isSuperAdmin = this.authService.isSuperAdmin();
                    this.getStudent();
                };
                StudentViewComponent.prototype.getStudent = function () {
                    var _this = this;
                    var resp;
                    this.http.get(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].STUDENTS + '/' + this.studId).subscribe(function (data) {
                        resp = data;
                        _this.student = resp.data;
                        if (_this.student.profilePic) {
                            _this.profilePicUrl = src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].DOCUMENT + '/' + _this.student.profilePic.id + '/view';
                        }
                    }, function (err) {
                        console.error(err);
                        if (err.error && err.error.apiMessage) {
                            _this.errorMessage = err.error.apiMessage.detail;
                        }
                        else {
                            _this.errorMessage = err.message;
                        }
                    });
                };
                StudentViewComponent.prototype.delete = function () {
                    var _this = this;
                    var confirmationData = {
                        title: 'Delete Student',
                        subtitle: 'Are you really sure to delete this student?'
                    };
                    this.dialog.open(src_app_modules_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationDialogComponent"], { width: '26%', data: confirmationData, disableClose: true })
                        .afterClosed().subscribe(function (okData) {
                        if (okData) {
                            _this.http.delete(src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].STUDENTS + '/' + _this.studId).subscribe(function (data) {
                                if (data.apiMessage && data.apiMessage.error) {
                                    _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].dangerData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].flashTopDangerSnackBar()));
                                    return;
                                }
                                else {
                                    _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].successData(data.apiMessage.detail) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].flashTopSuccessSnackBar()));
                                }
                                _this.router.navigate(['/admin/students']);
                            }, function (err) {
                                console.error(err);
                                if (err.error && err.error.apiMessage) {
                                    _this.errorMessage = err.error.apiMessage.detail;
                                }
                                else {
                                    _this.errorMessage = err.message;
                                }
                                _this.snackBar.openFromComponent(src_app_modules_shared_components_snackbar_info_snackbar_info_component__WEBPACK_IMPORTED_MODULE_8__["SnackbarInfoComponent"], Object.assign({ data: src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].dangerData(_this.errorMessage) }, src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["SnackBarConfig"].flashTopDangerSnackBar()));
                            });
                        }
                    });
                };
                StudentViewComponent.prototype.edit = function () {
                    this.router.navigate(['/admin/students/' + this.studId + '/edit']);
                };
                StudentViewComponent.prototype.onSelectFile = function (file) {
                    var _this = this;
                    this.fileUploadService.uploadDoc(file, this.studId, 'STUDENT', 'PROFILE_PIC', 'PROFILE_PIC').subscribe(function (event) {
                        console.log(event);
                        if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpEventType"].UploadProgress) {
                            _this.percentage = Math.round(100 * event.loaded / event.total);
                        }
                        else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                            _this.uploadingFile = false;
                            var body = event.body;
                            body = JSON.parse(body);
                            var docUrl = src_app_modules_shared_model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].DOCUMENT + '/' + body.actionMessage + '/view';
                            _this.profilePicUrl = docUrl;
                            console.log('File has been uploaded');
                        }
                    }, function (error) {
                        console.error(error);
                    });
                };
                return StudentViewComponent;
            }());
            StudentViewComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_modules_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_7__["FileUploadService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
                { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
            ]; };
            StudentViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-student-view',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/students/components/student/student-view/student-view.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-view.component.css */ "./src/app/modules/students/components/student/student-view/student-view.component.css")).default]
                })
            ], StudentViewComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/students/models/admission-fee.model.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/modules/students/models/admission-fee.model.ts ***!
          \****************************************************************/
        /*! exports provided: AdmissionStatuses */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionStatuses", function () { return AdmissionStatuses; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AdmissionStatuses = ['Admitted', 'Expired'];
            /***/ 
        }),
        /***/ "./src/app/modules/students/models/student.model.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/modules/students/models/student.model.ts ***!
          \**********************************************************/
        /*! exports provided: Standards, StudentStatuses, Genders */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Standards", function () { return Standards; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentStatuses", function () { return StudentStatuses; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genders", function () { return Genders; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Standards = [
                { key: 'NUSSERY', value: 'Nussery' },
                { key: 'KG', value: 'KG' },
                { key: 'CLASS_I', value: 'Class I' },
                { key: 'CLASS_II', value: 'Class II' },
                { key: 'CLASS_III', value: 'Class III' },
                { key: 'CLASS_IV', value: 'Class IV' },
                { key: 'CLASS_V', value: 'Class V' },
                { key: 'CLASS_VI', value: 'Class VI' },
                { key: 'CLASS_VII', value: 'Class VII' },
                { key: 'CLASS_VIII', value: 'Class VIII' },
                { key: 'CLASS_IX', value: 'Class IX' },
                { key: 'CLASS_X', value: 'Class X' }
            ];
            var StudentStatuses = ['Active', 'Inactive'];
            var Genders = [
                { key: 'MALE', value: 'Male' },
                { key: 'FEMALE', value: 'Female' }
            ];
            /***/ 
        }),
        /***/ "./src/app/modules/students/students.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/modules/students/students.module.ts ***!
          \*****************************************************/
        /*! exports provided: StudentsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function () { return StudentsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_admission_fee_admission_fee_create_edit_admission_fee_create_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component */ "./src/app/modules/students/components/admission-fee/admission-fee-create-edit/admission-fee-create-edit.component.ts");
            /* harmony import */ var _components_admission_fee_admission_fee_list_admission_fee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admission-fee/admission-fee-list/admission-fee-list.component */ "./src/app/modules/students/components/admission-fee/admission-fee-list/admission-fee-list.component.ts");
            /* harmony import */ var _components_admission_fee_admission_fee_view_admission_fee_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admission-fee/admission-fee-view/admission-fee-view.component */ "./src/app/modules/students/components/admission-fee/admission-fee-view/admission-fee-view.component.ts");
            /* harmony import */ var _components_search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-student-dialog/search-student-dialog.component */ "./src/app/modules/students/components/search-student-dialog/search-student-dialog.component.ts");
            /* harmony import */ var _components_student_student_create_edit_student_create_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/student/student-create-edit/student-create-edit.component */ "./src/app/modules/students/components/student/student-create-edit/student-create-edit.component.ts");
            /* harmony import */ var _components_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/student/student-list/student-list.component */ "./src/app/modules/students/components/student/student-list/student-list.component.ts");
            /* harmony import */ var _components_student_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/student/student-view/student-view.component */ "./src/app/modules/students/components/student/student-view/student-view.component.ts");
            /* harmony import */ var _components_student_attendence_student_attendence_create_edit_student_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component */ "./src/app/modules/students/components/student-attendence/student-attendence-create-edit/student-attendence-create-edit.component.ts");
            /* harmony import */ var _components_student_attendence_student_attendence_list_student_attendence_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/student-attendence/student-attendence-list/student-attendence-list.component */ "./src/app/modules/students/components/student-attendence/student-attendence-list/student-attendence-list.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/modules/shared/material/material.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _shared_custom_date_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/custom-date.module */ "./src/app/modules/shared/custom-date.module.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
            // tslint:disable-next-line: max-line-length
            var routes = [
                { path: '', component: _components_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_8__["StudentListComponent"] },
                { path: 'add', component: _components_student_student_create_edit_student_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["StudentCreateEditComponent"] },
                { path: ':id/view', component: _components_student_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_9__["StudentViewComponent"] },
                { path: ':id/edit', component: _components_student_student_create_edit_student_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["StudentCreateEditComponent"] },
                { path: 'admissions', component: _components_admission_fee_admission_fee_list_admission_fee_list_component__WEBPACK_IMPORTED_MODULE_4__["AdmissionFeeListComponent"] },
                { path: 'admissions/add', component: _components_admission_fee_admission_fee_create_edit_admission_fee_create_edit_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionFeeCreateEditComponent"] },
                { path: 'admissions/:id/view', component: _components_admission_fee_admission_fee_view_admission_fee_view_component__WEBPACK_IMPORTED_MODULE_5__["AdmissionFeeViewComponent"] },
                { path: 'admissions/:id/edit', component: _components_admission_fee_admission_fee_create_edit_admission_fee_create_edit_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionFeeCreateEditComponent"] },
                { path: 'attendances', component: _components_student_attendence_student_attendence_create_edit_student_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_10__["StudentAttendenceCreateEditComponent"] },
            ];
            var StudentsModule = /** @class */ (function () {
                function StudentsModule() {
                }
                return StudentsModule;
            }());
            StudentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components_admission_fee_admission_fee_create_edit_admission_fee_create_edit_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionFeeCreateEditComponent"],
                        _components_admission_fee_admission_fee_list_admission_fee_list_component__WEBPACK_IMPORTED_MODULE_4__["AdmissionFeeListComponent"],
                        _components_admission_fee_admission_fee_view_admission_fee_view_component__WEBPACK_IMPORTED_MODULE_5__["AdmissionFeeViewComponent"],
                        _components_search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SearchStudentDialogComponent"],
                        _components_student_student_create_edit_student_create_edit_component__WEBPACK_IMPORTED_MODULE_7__["StudentCreateEditComponent"],
                        _components_student_student_list_student_list_component__WEBPACK_IMPORTED_MODULE_8__["StudentListComponent"],
                        _components_student_student_view_student_view_component__WEBPACK_IMPORTED_MODULE_9__["StudentViewComponent"],
                        _components_student_attendence_student_attendence_create_edit_student_attendence_create_edit_component__WEBPACK_IMPORTED_MODULE_10__["StudentAttendenceCreateEditComponent"],
                        _components_student_attendence_student_attendence_list_student_attendence_list_component__WEBPACK_IMPORTED_MODULE_11__["StudentAttendenceListComponent"],
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forChild(routes),
                        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                        _shared_custom_date_module__WEBPACK_IMPORTED_MODULE_15__["CustomDateModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]
                    ],
                    entryComponents: [_components_search_student_dialog_search_student_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SearchStudentDialogComponent"]]
                })
            ], StudentsModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-students-students-module-es2015.js.map
//# sourceMappingURL=modules-students-students-module-es5.js.map
//# sourceMappingURL=modules-students-students-module-es5.js.map