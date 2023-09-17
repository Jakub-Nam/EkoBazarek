"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataAccessService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var DataAccessService = /** @class */ (function () {
    // nie zgadza sie typ produktu ze swaggera, z typem ktory otrzymuje
    function DataAccessService(http, snackBarService) {
        var _this = this;
        this.http = http;
        this.snackBarService = snackBarService;
        this.headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json'
        });
        this.getProductTypes = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products/types')
            .pipe(rxjs_1.map(function (type) { return type.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.shareReplay(1), rxjs_1.catchError(function (err) {
            _this.handleError(err);
            return rxjs_1.EMPTY;
        }));
        this.getProductCategories = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
            .pipe(rxjs_1.map(function (categories) { return categories.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.shareReplay(1), rxjs_1.catchError(function (err) {
            _this.handleError(err);
            return rxjs_1.EMPTY;
        }));
        this.getProductCategoriesTop = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products/categories/top')
            .pipe(rxjs_1.map(function (categories) { return categories.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.shareReplay(1), rxjs_1.catchError(function (err) {
            _this.handleError(err);
            return rxjs_1.EMPTY;
        }));
        this.getProductUnits = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products/units')
            .pipe(rxjs_1.map(function (categories) { return categories.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.shareReplay(1), rxjs_1.catchError(function (err) {
            _this.handleError(err);
            return rxjs_1.EMPTY;
        }));
        this.getProducts = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products')
            .pipe(rxjs_1.map(function (product) { return product.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.catchError(function (err) {
            _this.handleError(err);
            return rxjs_1.EMPTY;
        }), rxjs_1.shareReplay(1));
    }
    DataAccessService.prototype.postSubscription = function (bodyReq) {
        var _this = this;
        return this.http.post('https://api-eko-bazarek.azurewebsites.net/api/subscribe', bodyReq, { headers: this.headers })
            .pipe(rxjs_1.catchError(function (err) {
            _this.handleError(err);
            return rxjs_1.EMPTY;
        }), rxjs_1.shareReplay(1));
    };
    DataAccessService.prototype.changePassword = function (reqBody, httpOptions) {
        var _this = this;
        return this.http.post('https://api-eko-bazarek.azurewebsites.net/api/users/change-password', reqBody, httpOptions)
            .pipe(rxjs_1.catchError(function (err) {
            _this.handleError(err);
            return rxjs_1.EMPTY;
        }));
    };
    DataAccessService.prototype.putUser = function (reqBody, httpOptions) {
        var _this = this;
        var url = 'https://api-eko-bazarek.azurewebsites.net/api/users';
        return this.http.post(url, reqBody, httpOptions)
            .pipe(rxjs_1.catchError(function (err) {
            _this.handleError(err);
            return rxjs_1.EMPTY;
        }));
    };
    DataAccessService.prototype.handleError = function (err) {
        var errorMessage = err.error.errors;
        this.snackBarService.openSnackBar(errorMessage);
        return rxjs_1.throwError(function () { return errorMessage; });
    };
    DataAccessService = __decorate([
        core_1.Injectable()
    ], DataAccessService);
    return DataAccessService;
}());
exports.DataAccessService = DataAccessService;
