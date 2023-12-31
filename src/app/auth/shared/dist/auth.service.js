"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AuthService = /** @class */ (function () {
    function AuthService(http, snackBarService) {
        this.http = http;
        this.snackBarService = snackBarService;
    }
    AuthService.prototype.login = function (form) {
        var _this = this;
        var url = 'https://api-eko-bazarek.azurewebsites.net/api/users/login';
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(url, form, httpOptions)
            .pipe(rxjs_1.catchError(function (err) {
            console.error(err);
            _this.snackBarService.openSnackBar("Nieprawidlowy login lub hasło użytkownika.");
            return rxjs_1.EMPTY;
        }));
    };
    AuthService.prototype.postUser = function (reqBody) {
        var _this = this;
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url = 'https://api-eko-bazarek.azurewebsites.net/api/users';
        return this.http.post(url, reqBody, httpOptions)
            .pipe(rxjs_1.catchError(function (err) {
            console.error(err);
            _this.snackBarService.openSnackBar("Nie udało się utworzyć użytkownika.");
            return rxjs_1.EMPTY;
        }));
    };
    AuthService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
