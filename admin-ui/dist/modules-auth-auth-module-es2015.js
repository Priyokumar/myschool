(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center align-items-start h-100 bg-gold-gradient mt-5\">\n    <div class=\"text-center w-25 d-flex justify-content-end align-items-center p-5\">\n        <div class=\"mat-elevation-z1 w-100 p-5 bg-gold-gradient\">\n            <h2 class=\"font-300\">Sign In</h2>\n            <hr>\n            <br>\n            <br>\n            <form>\n                <p>\n                    <mat-form-field class=\"w-100\">\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Enter your email\" [formControl]=\"email\">\n                        <mat-error *ngIf=\"email.invalid\">Email is required.</mat-error>\n                    </mat-form-field>\n                </p>\n                <p>\n                    <mat-form-field class=\"w-100\">\n                        <input matInput placeholder=\"Enter your password\" [formControl]=\"password\">\n                        <mat-error *ngIf=\"password.invalid\">Password is required.</mat-error>\n                    </mat-form-field>\n                </p>\n                <div class=\"text-right\">\n                    <button class=\"w-100 bg-grey font-white\" type=\"submit\" mat-raised-button\n                        (click)=\"login()\">Login</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/modules/shared/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: []
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/auth/login/login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error {\n  height: 50px;\n}\n\n.xl-icon {\n  font-size: 10rem;\n  font-weight: 300;\n  color: darkcyan;\n}\n\n.xl-font {\n  font-size: 4rem;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWlucGMvc2Nob29sL215c2Nob29sL2FkbWluLXVpL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3J7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ueGwtaWNvbntcbiAgICBmb250LXNpemU6IDEwcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IGRhcmtjeWFuO1xufVxuXG4ueGwtZm9udHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iLCIuZXJyb3Ige1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi54bC1pY29uIHtcbiAgZm9udC1zaXplOiAxMHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IGRhcmtjeWFuO1xufVxuXG4ueGwtZm9udCB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/auth/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let LoginComponent = class LoginComponent {
    constructor(authService, router, snackBar) {
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null);
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        const userData = this.authService.getAuthDataFromCookies();
        if (userData) {
            this.router.navigate(['/admin/dashboard']);
        }
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loginData = {
                email: this.email.value,
                password: this.password.value
            };
            if (!loginData.email || !loginData.password) {
                return;
            }
            try {
                const resp = yield this.authService.login(loginData).toPromise();
                this.authService.storeToken(resp.token);
                this.router.navigate(['/admin/dashboard']);
                this.authService.sendLoginSignal();
            }
            catch (error) {
                console.error(error);
                this.errorMessage = 'Invalid credential !';
                this.snackBar.open('Invalid credential.', 'Got it!', { duration: 5000 });
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module-es2015.js.map