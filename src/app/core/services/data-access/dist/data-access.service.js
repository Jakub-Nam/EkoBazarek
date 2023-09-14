"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataAccessService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var DataAccessService = /** @class */ (function () {
    function DataAccessService(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.getProductTypes$ = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products/types')
            .pipe(rxjs_1.map(function (type) { return type.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.shareReplay(1));
        this.getProductCategories$ = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
            .pipe(rxjs_1.map(function (categories) { return categories.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.shareReplay(1));
        this.getProductUnits$ = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products/units')
            .pipe(rxjs_1.map(function (categories) { return categories.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.shareReplay(1));
        this.getProducts$ = this.http.get('https://api-eko-bazarek.azurewebsites.net/api/products')
            .pipe(rxjs_1.map(function (product) { return product.sort(function (a, b) { return a.name.localeCompare(b.name); }); }), rxjs_1.shareReplay(1));
    }
    DataAccessService.prototype.postSubscription = function (bodyReq, httpOptions) {
        var _this = this;
        return this.http.post('https://api-eko-bazarek.azurewebsites.net/api/subscribe', bodyReq, httpOptions)
            .pipe(rxjs_1.catchError(function (err) {
            _this.openSnackBar("Nie udalo sie zasuksrybować");
            return rxjs_1.throwError(function () { return err; });
        }), rxjs_1.shareReplay(1));
    };
    DataAccessService.prototype.changePassword = function (reqBody, httpOptions) {
        return this.http.post('https://api-eko-bazarek.azurewebsites.net/api/users/change-password', reqBody, httpOptions)
            .pipe(rxjs_1.map(function (data) {
            console.log(data);
            return data;
        }), rxjs_1.catchError(function (err) {
            console.log(err);
            throw err;
        }));
    };
    DataAccessService.prototype.postProduct = function (form, httpOptions) {
        return this.http.post('https://api-eko-bazarek.azurewebsites.net/api/products', form, httpOptions)
            .pipe(rxjs_1.catchError(function (err) {
            console.log(err);
            return rxjs_1.of(null);
        }), rxjs_1.shareReplay(1));
    }; // ANYYYYYYYYYYYYYYYYYYYYYY! tuprzerobie na sigleton
    DataAccessService.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'Zamknij', {
            duration: 3000,
            horizontalPosition: 'start',
            verticalPosition: 'top'
        });
    };
    DataAccessService.prototype.putUser = function (reqBody, httpOptions) {
        var url = 'https://api-eko-bazarek.azurewebsites.net/api/users';
        return this.http.post(url, reqBody, httpOptions)
            .pipe(rxjs_1.map(function (data) {
            return data;
        }), rxjs_1.catchError(function (err) {
            console.log(err);
            throw err;
        }));
    };
    DataAccessService = __decorate([
        core_1.Injectable()
    ], DataAccessService);
    return DataAccessService;
}());
exports.DataAccessService = DataAccessService;
