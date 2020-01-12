(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/modules/shared/services/file-upload.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/shared/services/file-upload.service.ts ***!
  \****************************************************************/
/*! exports provided: FileUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadService", function() { return FileUploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/shared.model */ "./src/app/modules/shared/model/shared.model.ts");





let FileUploadService = class FileUploadService {
    constructor(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    sendDocUrl(docUrl) {
        this.subject.next({ docUrl });
    }
    getDocUrl() {
        return this.subject.asObservable();
    }
    uploadDoc(file, id, docFor, type, name) {
        const formdata = new FormData();
        const documentBody = {
            docFor,
            name,
            type
        };
        formdata.append('file', file);
        formdata.append('documentBody', JSON.stringify(documentBody));
        const url = _model_shared_model__WEBPACK_IMPORTED_MODULE_4__["ApiEndpoint"].DOCUMENT + '/' + id + '/upload';
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', url, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    }
    getExtension(fileName) {
        const splits = fileName.split('.');
        return '.' + splits[splits.length - 1];
    }
};
FileUploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FileUploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FileUploadService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map