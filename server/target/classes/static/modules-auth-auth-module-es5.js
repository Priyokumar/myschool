var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center align-items-start h-100 bg-gold-gradient mt-5\">\n    <div class=\"text-center w-25 d-flex justify-content-end align-items-center p-5\">\n        <div class=\"mat-elevation-z1 w-100 p-5 bg-gold-gradient\">\n            <h2 class=\"font-300\">Sign In</h2>\n            <hr>\n            <br>\n            <br>\n            <form>\n                <p>\n                    <mat-form-field class=\"w-100\">\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Enter your email\" [formControl]=\"email\">\n                        <mat-error *ngIf=\"email.invalid\">Email is required.</mat-error>\n                    </mat-form-field>\n                </p>\n                <p>\n                    <mat-form-field class=\"w-100\">\n                        <input matInput placeholder=\"Enter your password\" [formControl]=\"password\">\n                        <mat-error *ngIf=\"password.invalid\">Password is required.</mat-error>\n                    </mat-form-field>\n                </p>\n                <div class=\"text-right\">\n                    <button class=\"w-100 bg-grey font-white\" type=\"submit\" mat-raised-button\n                        (click)=\"login()\">Login</button>\n                </div>\n            </form>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/auth/auth.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/modules/auth/auth.module.ts ***!
          \*********************************************/
        /*! exports provided: AuthModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function () { return AuthModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/auth/login/login.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/modules/shared/material/material.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var routes = [
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
            ];
            var AuthModule = /** @class */ (function () {
                function AuthModule() {
                }
                return AuthModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/modules/auth/login/login.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/modules/auth/login/login.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".error {\n  height: 50px;\n}\n\n.xl-icon {\n  font-size: 10rem;\n  font-weight: 300;\n  color: darkcyan;\n}\n\n.xl-font {\n  font-size: 4rem;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkbWlucGMvc2Nob29sL215c2Nob29sL2FkbWluLXVpL3NyYy9hcHAvbW9kdWxlcy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3J7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ueGwtaWNvbntcbiAgICBmb250LXNpemU6IDEwcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IGRhcmtjeWFuO1xufVxuXG4ueGwtZm9udHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iLCIuZXJyb3Ige1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi54bC1pY29uIHtcbiAgZm9udC1zaXplOiAxMHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IGRhcmtjeWFuO1xufVxuXG4ueGwtZm9udCB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/auth/login/login.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/modules/auth/login/login.component.ts ***!
          \*******************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, router, snackBar) {
                    this.authService = authService;
                    this.router = router;
                    this.snackBar = snackBar;
                    this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null);
                    this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', null);
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.getUserData();
                };
                LoginComponent.prototype.getUserData = function () {
                    var userData = this.authService.getAuthDataFromCookies();
                    if (userData) {
                        this.router.navigate(['/admin/dashboard']);
                    }
                };
                LoginComponent.prototype.login = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var loginData, resp, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    loginData = {
                                        email: this.email.value,
                                        password: this.password.value
                                    };
                                    if (!loginData.email || !loginData.password) {
                                        return [2 /*return*/];
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, this.authService.login(loginData).toPromise()];
                                case 2:
                                    resp = _a.sent();
                                    this.authService.storeToken(resp.token);
                                    this.router.navigate(['/admin/dashboard']);
                                    this.authService.sendLoginSignal();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _a.sent();
                                    console.error(error_1);
                                    this.errorMessage = 'Invalid credential !';
                                    this.snackBar.open('Invalid credential.', 'Got it!', { duration: 5000 });
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-auth-auth-module-es2015.js.map
//# sourceMappingURL=modules-auth-auth-module-es5.js.map
//# sourceMappingURL=modules-auth-auth-module-es5.js.map