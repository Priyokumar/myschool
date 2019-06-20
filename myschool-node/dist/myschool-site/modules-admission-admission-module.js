(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admission-admission-module"],{

/***/ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n  <div class=\"pl-2\">\n  </div>\n  <div>\n    <mat-icon (click)=\"close()\" class=\"cursor-pointer\">close</mat-icon>\n  </div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div class=\"col-md-12 text-center\">\n    <img src=\"../../../assets/images/icons/customer-service.png\" alt=\"\" height=\"30\" width=\"40\"> &nbsp;\n    <h5>Admission Inquiry</h5>\n  </div>\n</div>\n\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n  <div [ngStyle.gt-md]=\"{'width':'100vw'}\">\n    <div class=\"mt-4\">\n      <mat-form-field appearance=\"legacy\" class=\"w-100\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Enter your name\" [formControl]=\"nameFormCntrl\" required>\n        <!-- <mat-icon matSuffix>account_circle</mat-icon> -->\n      </mat-form-field>\n    </div>\n\n    <div class=\"mt-3\">\n      <mat-form-field appearance=\"legacy\" class=\"w-100\">\n        <mat-label>Email / Mobile</mat-label>\n        <input matInput placeholder=\"Enter your name\" [formControl]=\"emailOrMobileFormCntrl\" required>\n        <!-- <mat-icon matSuffix>email</mat-icon> -->\n      </mat-form-field>\n    </div>\n\n    <div class=\"mt-3\">\n      <mat-form-field class=\"w-100\">\n        <mat-label>Admission for</mat-label>\n        <mat-select [formControl]=\"standardFormCntrl\">\n          <mat-option *ngFor=\"let standard of standards\" [value]=\"standard\" required>\n            {{standard}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n\n    <div class=\"mt-3\">\n      <mat-form-field class=\"w-100\">\n        <textarea matInput placeholder=\"Message\" [formControl]=\"descriptionFormCntrl\" required></textarea>\n      </mat-form-field>\n    </div>\n\n    <div class=\"mt-3 text-center\">\n      <button class=\"w-100\" mat-raised-button color=\"primary\" (click)=\"submit()\">Submit</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaXNzaW9uLWVucXVpcnktZGlhbG9nL2FkbWlzc2lvbi1lbnF1aXJ5LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AdmissionEnquiryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionEnquiryDialogComponent", function() { return AdmissionEnquiryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_service_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/loader.service */ "./src/app/service/loader.service.ts");
/* harmony import */ var src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/apiEndpoint */ "./src/app/model/apiEndpoint.ts");








var AdmissionEnquiryDialogComponent = /** @class */ (function () {
    function AdmissionEnquiryDialogComponent(dialogRef, http, loaderService, snackBar) {
        this.dialogRef = dialogRef;
        this.http = http;
        this.loaderService = loaderService;
        this.snackBar = snackBar;
        this.standards = _home_home_component__WEBPACK_IMPORTED_MODULE_4__["standards"];
        this.nameFormCntrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.emailOrMobileFormCntrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.standardFormCntrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.descriptionFormCntrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.admissionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            nameFormCntrl: this.nameFormCntrl,
            emailOrMobileFormCntrl: this.emailOrMobileFormCntrl,
            standardFormCntrl: this.standardFormCntrl,
            descriptionFormCntrl: this.descriptionFormCntrl
        });
    }
    AdmissionEnquiryDialogComponent.prototype.ngOnInit = function () {
    };
    AdmissionEnquiryDialogComponent.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reqBody, resp, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.nameFormCntrl.value || !this.emailOrMobileFormCntrl.value || !this.standardFormCntrl.value || !this.descriptionFormCntrl.value)
                            return [2 /*return*/];
                        reqBody = {
                            name: this.nameFormCntrl.value,
                            emailMobile: this.emailOrMobileFormCntrl.value,
                            standard: this.standardFormCntrl.value,
                            description: this.descriptionFormCntrl.value
                        };
                        console.log(reqBody);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.loaderService.change(true);
                        return [4 /*yield*/, this.http.post(src_app_model_apiEndpoint__WEBPACK_IMPORTED_MODULE_7__["ApiEndpoint"].ADMISSION_ENQUIRY, reqBody).toPromise()];
                    case 2:
                        resp = _a.sent();
                        this.loaderService.change(false);
                        this.admissionForm.reset();
                        this.dialogRef.close();
                        this.snackBar.open("Thanks for contacting us.", "Ok", {
                            duration: 8000,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.loaderService.change(false);
                        console.log(error_1);
                        this.dialogRef.close();
                        this.snackBar.open("Something went wrong ):", "Ok", {
                            duration: 8000,
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdmissionEnquiryDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AdmissionEnquiryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admission-enquiry-dialog',
            template: __webpack_require__(/*! ./admission-enquiry-dialog.component.html */ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.html"),
            styles: [__webpack_require__(/*! ./admission-enquiry-dialog.component.scss */ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_service_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], AdmissionEnquiryDialogComponent);
    return AdmissionEnquiryDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AdmissionEnquiryDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionEnquiryDialogModule", function() { return AdmissionEnquiryDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admission_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admission-enquiry-dialog.component */ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");







var AdmissionEnquiryDialogModule = /** @class */ (function () {
    function AdmissionEnquiryDialogModule() {
    }
    AdmissionEnquiryDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admission_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionEnquiryDialogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"]
            ],
            exports: [_admission_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionEnquiryDialogComponent"]],
            entryComponents: [_admission_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionEnquiryDialogComponent"]]
        })
    ], AdmissionEnquiryDialogModule);
    return AdmissionEnquiryDialogModule;
}());



/***/ }),

/***/ "./src/app/modules/admission/admission.component.html":
/*!************************************************************!*\
  !*** ./src/app/modules/admission/admission.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 mt-1\">\n  <div class=\"p-2\" [ngStyle.lt-md]=\"{'width':'100vw','text-align':'center'}\" [ngStyle.gt-md]=\"{'width':'80vw'}\"\n    style=\"margin-right: auto;margin-left: auto;background-color: #f5821e;color: #ffffff\">\n    <h3>Admission</h3>\n  </div>\n</div>\n<div class=\"mx-auto text-center\">\n  <img src=\"../../../assets/images/admission.JPG\" [ngStyle.gt-md]=\"{'width':'80vw','height': '50vh'}\"\n    [ngStyle.lt-md]=\"{'width':'100vw','height': '50vh'}\" alt=\"\">\n</div>\n<div fxFlexLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div [ngStyle.gt-md]=\"{'width':'80vw'}\" class=\"p-3\">\n    <h3>Admission Overview <span><button mat-raised-button class=\"outline-primary-btn\"\n          (click)=\"openAdmissionEnquiryDialog()\">Admission Enquiry</button></span></h3>\n    <p class=\"text-justify\">\n      Thank you for expressing an interest in The Millennium School. Investing in your children's education is one of\n      the most important decisions you will make in your lifetime and one that requires great thought. These are\n      formative years, and the relationships made, through friendships and interactions with teachers, will shape them\n      for the future. It is critical that those sharing the responsibility for your children's education also share the\n      values that are of primary importance in your home.At The Millennium School we offer a nurturing environment that\n      fosters sharp learning skills, a top-of-the-line curriculum that offers the best in education.\n    </p>\n    <p>\n      The academic year for all classes commences in January and ends in December.\n    </p>\n    <p>\n      Admissions are open throughout the year, but are subject to availability. Your child can start school at any time\n      during the academic year. We advise that you plan and complete the admission\n      of your child in advance to avoid the rush period, as the Admissions Team reviews applications for new admissions\n      from January each year.\n    </p>\n    <p><strong> Feel free to visit our school during the following hours: </strong></p>\n    <p>Monday to Friday: 9am to 3 PM</p>\n    <p>Saturday: 9am to 12.30pm</p>\n    <p>(Closed on Sundays and Public Holidays)</p>\n    <p>Alternatively you can also fill the enquiry form or the registration form online. Once the form is filled, please\n      take a printout of the same, fill in the details and submit the hard copy of the completed form to the school.</p>\n    <h4>Please note:</h4>\n    <p>Registration forms are also available in the school.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/admission/admission.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/admission/admission.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary-btn {\n  background-color: #1c881b;\n  color: #ffffff; }\n\n.success-btn {\n  background-color: #98ac28;\n  color: #ffffff; }\n\n.info-btn {\n  background-color: #2abcc8;\n  color: #ffffff; }\n\n.warning-btn {\n  background-color: #f5821e;\n  color: #ffffff; }\n\n.danger-btn {\n  background-color: #ee3f64;\n  color: #ffffff; }\n\n/* =========== Outline button ========= */\n\n.outline-warning-btn {\n  background-color: transparent;\n  color: #f5821e;\n  border: 3px solid #f5821e;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-primary-btn {\n  background-color: transparent;\n  color: #1c881b;\n  border: 2px solid #1c881b;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-primary-btn:hover {\n  background-color: #1c881b;\n  color: #ffffff;\n  border: 2px solid #1c881b;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-secondary-btn {\n  background-color: transparent;\n  color: #f5821e;\n  border: 3px solid #f5821e;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-white-btn {\n  background-color: transparent;\n  color: #ffffff;\n  border: 3px solid #ffffff;\n  border-radius: 0;\n  font-weight: 600; }\n\n.outline-danger-btn {\n  background-color: transparent;\n  color: #ee3f64;\n  border: 3px solid #ee3f64;\n  border-radius: 0;\n  font-weight: 600; }\n\n/* =========== Outline button ========= */\n\n/* Small outline button */\n\n.outline-warning-sm-btn {\n  background-color: transparent;\n  color: #f5821e;\n  border: 3px solid #f5821e;\n  border-radius: 0;\n  font-weight: 600;\n  height: 27px;\n  line-height: 25px;\n  font-size: 12px; }\n\n.outline-primary-sm-btn {\n  background-color: transparent;\n  color: #00518f;\n  border: 2px solid #00518f;\n  border-radius: 0;\n  height: 27px;\n  line-height: 25px;\n  font-size: 12px; }\n\n.outline-danger-sm-btn {\n  background-color: transparent;\n  color: #ee3f64;\n  border: 2px solid #ee3f64;\n  border-radius: 0;\n  height: 27px;\n  line-height: 25px;\n  font-size: 12px; }\n\n/*  */\n\n.primary-btn:disabled {\n  background-color: #b3f0b2;\n  color: #ffffff; }\n\n.success-btn:disabled {\n  background-color: #b9d037;\n  color: #ffffff; }\n\n.info-btn:disabled {\n  background-color: #4ccfd9;\n  color: #ffffff; }\n\n.warning-btn:disabled {\n  background-color: #f79d4f;\n  color: #ffffff; }\n\n.danger-btn:disabled {\n  background-color: #faccd5;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pc3Npb24vRDpcXFByYWN0aWNhbFxcZ2l0aHViXFxteXNjaG9vbFxcbXlzY2hvb2wtc2l0ZS9zcmNcXGFzc2V0c1xcc2Nzc1xcYnV0dG9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaXNzaW9uL0Q6XFxQcmFjdGljYWxcXGdpdGh1YlxcbXlzY2hvb2xcXG15c2Nob29sLXNpdGUvc3JjXFxhc3NldHNcXHNjc3NcXGNvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkNIcUI7RURJckIsY0NJbUIsRUFBQTs7QUREckI7RUFDRSx5QkNMcUI7RURNckIsY0NEbUIsRUFBQTs7QURJckI7RUFDRSx5QkNUa0I7RURVbEIsY0NObUIsRUFBQTs7QURTckI7RUFDRSx5QkNicUI7RURjckIsY0NYbUIsRUFBQTs7QURjckI7RUFDRSx5QkNqQm9CO0VEa0JwQixjQ2hCbUIsRUFBQTs7QURtQnJCLHlDQUFBOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGNDekJxQjtFRDBCckIseUJDMUJxQjtFRDJCckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDZCQUE2QjtFQUM3QixjQ3RDcUI7RUR1Q3JCLHlCQ3ZDcUI7RUR3Q3JCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx5QkM3Q3FCO0VEOENyQixjQ3RDbUI7RUR1Q25CLHlCQy9DcUI7RURnRHJCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSw2QkFBNkI7RUFDN0IsY0NwRHVCO0VEcUR2Qix5QkNyRHVCO0VEc0R2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsNkJBQTZCO0VBQzdCLGNDckRtQjtFRHNEbkIseUJDdERtQjtFRHVEbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLDZCQUE2QjtFQUM3QixjQy9Eb0I7RURnRXBCLHlCQ2hFb0I7RURpRXBCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEIseUNBQUE7O0FBQ0EseUJBQUE7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsY0MxRXFCO0VEMkVyQix5QkMzRXFCO0VENEVyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw2QkFBNkI7RUFDN0IsY0M5Rm9CO0VEK0ZwQix5QkMvRm9CO0VEZ0dwQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRWpCLEtBQUE7O0FBRUE7RUFDRSx5QkFBOEM7RUFDOUMsY0N2R21CLEVBQUE7O0FEMEdyQjtFQUNFLHlCQUE4QztFQUM5QyxjQzVHbUIsRUFBQTs7QUQrR3JCO0VBQ0UseUJBQTJDO0VBQzNDLGNDakhtQixFQUFBOztBRG9IckI7RUFDRSx5QkFBOEM7RUFDOUMsY0N0SG1CLEVBQUE7O0FEeUhyQjtFQUNFLHlCQUE2QztFQUM3QyxjQzNIbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaXNzaW9uL2FkbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL2NvbG9yLnNjc3NcIjtcclxuXHJcbi5wcmltYXJ5LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuLnN1Y2Nlc3MtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4uaW5mby1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRpbmZvLWNvbG9yO1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbi53YXJuaW5nLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdhcm5pbmctY29sb3I7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuLmRhbmdlci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYW5nZXItY29sb3I7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuLyogPT09PT09PT09PT0gT3V0bGluZSBidXR0b24gPT09PT09PT09ICovXHJcbi5vdXRsaW5lLXdhcm5pbmctYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJHdhcm5pbmctY29sb3I7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJHdhcm5pbmctY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ub3V0bGluZS1wcmltYXJ5LWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm91dGxpbmUtcHJpbWFyeS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yOztcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ub3V0bGluZS1zZWNvbmRhcnktYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm91dGxpbmUtd2hpdGUtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICR3aGl0ZS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5vdXRsaW5lLWRhbmdlci1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAkZGFuZ2VyLWNvbG9yO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICRkYW5nZXItY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PSBPdXRsaW5lIGJ1dHRvbiA9PT09PT09PT0gKi9cclxuLyogU21hbGwgb3V0bGluZSBidXR0b24gKi9cclxuLm91dGxpbmUtd2FybmluZy1zbS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAkd2FybmluZy1jb2xvcjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAkd2FybmluZy1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm91dGxpbmUtcHJpbWFyeS1zbS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAjMDA1MThmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDUxOGY7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ub3V0bGluZS1kYW5nZXItc20tYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogJGRhbmdlci1jb2xvcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkZGFuZ2VyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4vKiAgKi9cclxuXHJcbi5wcmltYXJ5LWJ0bjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeS1jb2xvciwgNTAlKTtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4uc3VjY2Vzcy1idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHN1Y2Nlc3MtY29sb3IsIDEwJSk7XHJcbiAgY29sb3I6ICR3aGl0ZS1jb2xvcjtcclxufVxyXG5cclxuLmluZm8tYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRpbmZvLWNvbG9yLCAxMCUpO1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuXHJcbi53YXJuaW5nLWJ0bjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkd2FybmluZy1jb2xvciwgMTAlKTtcclxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xyXG59XHJcblxyXG4uZGFuZ2VyLWJ0bjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZGFuZ2VyLWNvbG9yLCAzMCUpO1xyXG4gIGNvbG9yOiAkd2hpdGUtY29sb3I7XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICMxYzg4MWI7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmNTgyMWU7XHJcblxyXG4kc3VjY2Vzcy1jb2xvcjogIzk4YWMyODtcclxuJGluZm8tY29sb3I6ICMyYWJjYzg7XHJcbiR3YXJuaW5nLWNvbG9yOiAjZjU4MjFlO1xyXG4kZGFuZ2VyLWNvbG9yOiAjZWUzZjY0O1xyXG5cclxuJHdoaXRlLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwO1xyXG5cclxuJHdoaXRlLWdyZXk6ICNlZmVmZWY7XHJcbiRncmV5OiAjZTJlMmUyO1xyXG4kZGFyay1ncmV5OiAjYzZjNmM2O1xyXG4gIl19 */"

/***/ }),

/***/ "./src/app/modules/admission/admission.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/admission/admission.component.ts ***!
  \**********************************************************/
/*! exports provided: AdmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionComponent", function() { return AdmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admission_enquiry_dialog_admission_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admission-enquiry-dialog/admission-enquiry-dialog.component */ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");





var AdmissionComponent = /** @class */ (function () {
    function AdmissionComponent(dialog, media) {
        var _this = this;
        this.dialog = dialog;
        this.media = media;
        this.media.media$.subscribe(function (change) {
            if (change.mqAlias === "lg" || change.mqAlias === "xl" || change.mqAlias === "gt-md" || change.mqAlias === "gt-lg") {
                _this.width = "30vw";
            }
            else {
                _this.width = "90vw";
            }
        });
    }
    AdmissionComponent.prototype.ngOnInit = function () {
    };
    AdmissionComponent.prototype.openAdmissionEnquiryDialog = function () {
        this.dialog.open(_admission_enquiry_dialog_admission_enquiry_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionEnquiryDialogComponent"], { width: this.width });
    };
    AdmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admission',
            template: __webpack_require__(/*! ./admission.component.html */ "./src/app/modules/admission/admission.component.html"),
            styles: [__webpack_require__(/*! ./admission.component.scss */ "./src/app/modules/admission/admission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]])
    ], AdmissionComponent);
    return AdmissionComponent;
}());



/***/ }),

/***/ "./src/app/modules/admission/admission.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admission/admission.module.ts ***!
  \*******************************************************/
/*! exports provided: AdmissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionModule", function() { return AdmissionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admission.component */ "./src/app/modules/admission/admission.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _admission_enquiry_dialog_admission_enquiry_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../admission-enquiry-dialog/admission-enquiry-dialog.module */ "./src/app/modules/admission-enquiry-dialog/admission-enquiry-dialog.module.ts");









var routes = [
    { path: "", component: _admission_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionComponent"] }
];
var AdmissionModule = /** @class */ (function () {
    function AdmissionModule() {
    }
    AdmissionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admission_component__WEBPACK_IMPORTED_MODULE_3__["AdmissionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _admission_enquiry_dialog_admission_enquiry_dialog_module__WEBPACK_IMPORTED_MODULE_8__["AdmissionEnquiryDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"]
            ]
        })
    ], AdmissionModule);
    return AdmissionModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-admission-admission-module.js.map