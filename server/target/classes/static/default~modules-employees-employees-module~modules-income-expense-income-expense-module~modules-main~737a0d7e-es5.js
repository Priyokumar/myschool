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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-employees-employees-module~modules-income-expense-income-expense-module~modules-main~737a0d7e"], {
        /***/ "./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js ***!
          \******************************************************************************************/
        /*! exports provided: MomentDateModule, MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateModule", function () { return MomentDateModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMomentDateModule", function () { return MatMomentDateModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY", function () { return MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS", function () { return MAT_MOMENT_DATE_ADAPTER_OPTIONS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDateAdapter", function () { return MomentDateAdapter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_FORMATS", function () { return MAT_MOMENT_DATE_FORMATS; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
            /**
             * @license
             * Copyright Google LLC All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var moment = moment__WEBPACK_IMPORTED_MODULE_2___default.a || moment__WEBPACK_IMPORTED_MODULE_2__;
            /**
             * InjectionToken for moment date adapter to configure options.
             * @type {?}
             */
            var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
                providedIn: 'root',
                factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
            });
            /**
             * \@docs-private
             * @return {?}
             */
            function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
                return {
                    useUtc: false
                };
            }
            /**
             * Creates an array and fills it with values.
             * @template T
             * @param {?} length
             * @param {?} valueFunction
             * @return {?}
             */
            function range(length, valueFunction) {
                /** @type {?} */
                var valuesArray = Array(length);
                for (var i = 0; i < length; i++) {
                    valuesArray[i] = valueFunction(i);
                }
                return valuesArray;
            }
            /**
             * Adapts Moment.js Dates for use with Angular Material.
             */
            var MomentDateAdapter = /** @class */ (function (_super) {
                __extends(MomentDateAdapter, _super);
                /**
                 * @param {?} dateLocale
                 * @param {?=} _options
                 */
                function MomentDateAdapter(dateLocale, _options) {
                    var _this = _super.call(this) || this;
                    _this._options = _options;
                    _this.setLocale(dateLocale || moment.locale());
                    return _this;
                }
                /**
                 * @param {?} locale
                 * @return {?}
                 */
                MomentDateAdapter.prototype.setLocale = function (locale) {
                    var _this = this;
                    _super.prototype.setLocale.call(this, locale);
                    /** @type {?} */
                    var momentLocaleData = moment.localeData(locale);
                    this._localeData = {
                        firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
                        longMonths: momentLocaleData.months(),
                        shortMonths: momentLocaleData.monthsShort(),
                        dates: range(31, ( /**
                         * @param {?} i
                         * @return {?}
                         */function (i) { return _this.createDate(2017, 0, i + 1).format('D'); })),
                        longDaysOfWeek: momentLocaleData.weekdays(),
                        shortDaysOfWeek: momentLocaleData.weekdaysShort(),
                        narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
                    };
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getYear = function (date) {
                    return this.clone(date).year();
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getMonth = function (date) {
                    return this.clone(date).month();
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getDate = function (date) {
                    return this.clone(date).date();
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getDayOfWeek = function (date) {
                    return this.clone(date).day();
                };
                /**
                 * @param {?} style
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getMonthNames = function (style) {
                    // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
                    return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
                };
                /**
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getDateNames = function () {
                    return this._localeData.dates;
                };
                /**
                 * @param {?} style
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getDayOfWeekNames = function (style) {
                    if (style == 'long') {
                        return this._localeData.longDaysOfWeek;
                    }
                    if (style == 'short') {
                        return this._localeData.shortDaysOfWeek;
                    }
                    return this._localeData.narrowDaysOfWeek;
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getYearName = function (date) {
                    return this.clone(date).format('YYYY');
                };
                /**
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getFirstDayOfWeek = function () {
                    return this._localeData.firstDayOfWeek;
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.getNumDaysInMonth = function (date) {
                    return this.clone(date).daysInMonth();
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.clone = function (date) {
                    return date.clone().locale(this.locale);
                };
                /**
                 * @param {?} year
                 * @param {?} month
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.createDate = function (year, month, date) {
                    // Moment.js will create an invalid date if any of the components are out of bounds, but we
                    // explicitly check each case so we can throw more descriptive errors.
                    if (month < 0 || month > 11) {
                        throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
                    }
                    if (date < 1) {
                        throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
                    }
                    /** @type {?} */
                    var result = this._createMoment({ year: year, month: month, date: date }).locale(this.locale);
                    // If the result isn't valid, the date must have been out of bounds for this month.
                    if (!result.isValid()) {
                        throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
                    }
                    return result;
                };
                /**
                 * @return {?}
                 */
                MomentDateAdapter.prototype.today = function () {
                    return this._createMoment().locale(this.locale);
                };
                /**
                 * @param {?} value
                 * @param {?} parseFormat
                 * @return {?}
                 */
                MomentDateAdapter.prototype.parse = function (value, parseFormat) {
                    if (value && typeof value == 'string') {
                        return this._createMoment(value, parseFormat, this.locale);
                    }
                    return value ? this._createMoment(value).locale(this.locale) : null;
                };
                /**
                 * @param {?} date
                 * @param {?} displayFormat
                 * @return {?}
                 */
                MomentDateAdapter.prototype.format = function (date, displayFormat) {
                    date = this.clone(date);
                    if (!this.isValid(date)) {
                        throw Error('MomentDateAdapter: Cannot format invalid date.');
                    }
                    return date.format(displayFormat);
                };
                /**
                 * @param {?} date
                 * @param {?} years
                 * @return {?}
                 */
                MomentDateAdapter.prototype.addCalendarYears = function (date, years) {
                    return this.clone(date).add({ years: years });
                };
                /**
                 * @param {?} date
                 * @param {?} months
                 * @return {?}
                 */
                MomentDateAdapter.prototype.addCalendarMonths = function (date, months) {
                    return this.clone(date).add({ months: months });
                };
                /**
                 * @param {?} date
                 * @param {?} days
                 * @return {?}
                 */
                MomentDateAdapter.prototype.addCalendarDays = function (date, days) {
                    return this.clone(date).add({ days: days });
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.toIso8601 = function (date) {
                    return this.clone(date).format();
                };
                /**
                 * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
                 * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
                 * string into null. Returns an invalid date for all other values.
                 * @param {?} value
                 * @return {?}
                 */
                MomentDateAdapter.prototype.deserialize = function (value) {
                    /** @type {?} */
                    var date;
                    if (value instanceof Date) {
                        date = this._createMoment(value).locale(this.locale);
                    }
                    else if (this.isDateInstance(value)) {
                        // Note: assumes that cloning also sets the correct locale.
                        return this.clone(value);
                    }
                    if (typeof value === 'string') {
                        if (!value) {
                            return null;
                        }
                        date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
                    }
                    if (date && this.isValid(date)) {
                        return this._createMoment(date).locale(this.locale);
                    }
                    return _super.prototype.deserialize.call(this, value);
                };
                /**
                 * @param {?} obj
                 * @return {?}
                 */
                MomentDateAdapter.prototype.isDateInstance = function (obj) {
                    return moment.isMoment(obj);
                };
                /**
                 * @param {?} date
                 * @return {?}
                 */
                MomentDateAdapter.prototype.isValid = function (date) {
                    return this.clone(date).isValid();
                };
                /**
                 * @return {?}
                 */
                MomentDateAdapter.prototype.invalid = function () {
                    return moment.invalid();
                };
                /**
                 * Creates a Moment instance while respecting the current UTC settings.
                 * @private
                 * @param {?} date
                 * @param {?=} format
                 * @param {?=} locale
                 * @return {?}
                 */
                MomentDateAdapter.prototype._createMoment = function (date, format, locale) {
                    var _a = this._options || {}, strict = _a.strict, useUtc = _a.useUtc;
                    return useUtc
                        ? moment.utc(date, format, locale, strict)
                        : moment(date, format, locale, strict);
                };
                return MomentDateAdapter;
            }(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]));
            MomentDateAdapter.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
            ];
            /** @nocollapse */
            MomentDateAdapter.ctorParameters = function () { return [
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"],] }] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS,] }] }
            ]; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var MAT_MOMENT_DATE_FORMATS = {
                parse: {
                    dateInput: 'l',
                },
                display: {
                    dateInput: 'l',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                },
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var MomentDateModule = /** @class */ (function () {
                function MomentDateModule() {
                }
                return MomentDateModule;
            }());
            MomentDateModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            providers: [
                                {
                                    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
                                    useClass: MomentDateAdapter,
                                    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"], MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                                }
                            ],
                        },] },
            ];
            var ɵ0 = MAT_MOMENT_DATE_FORMATS;
            var MatMomentDateModule = /** @class */ (function () {
                function MatMomentDateModule() {
                }
                return MatMomentDateModule;
            }());
            MatMomentDateModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [MomentDateModule],
                            providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: ɵ0 }],
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            //# sourceMappingURL=material-moment-adapter.js.map
            /***/ 
        }),
        /***/ "./src/app/modules/shared/custom-date.module.ts": 
        /*!******************************************************!*\
          !*** ./src/app/modules/shared/custom-date.module.ts ***!
          \******************************************************/
        /*! exports provided: MY_FORMATS, CustomDateModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () { return MY_FORMATS; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateModule", function () { return CustomDateModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm2015/material-moment-adapter.js");
            var MY_FORMATS = {
                parse: {
                    dateInput: 'LL',
                },
                display: {
                    dateInput: 'LL',
                    monthYearLabel: 'MMM YYYY',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                },
            };
            var CustomDateModule = /** @class */ (function () {
                function CustomDateModule() {
                }
                return CustomDateModule;
            }());
            CustomDateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [],
                    providers: [
                        { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MomentDateAdapter"], deps: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"]] },
                        { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                    ],
                })
            ], CustomDateModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~modules-employees-employees-module~modules-income-expense-income-expense-module~modules-main~737a0d7e-es2015.js.map
//# sourceMappingURL=default~modules-employees-employees-module~modules-income-expense-income-expense-module~modules-main~737a0d7e-es5.js.map
//# sourceMappingURL=default~modules-employees-employees-module~modules-income-expense-income-expense-module~modules-main~737a0d7e-es5.js.map