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
    function AuthService(http) {
        this.http = http;
        this.emptyUser = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            publicphone: '',
            password: '',
            farmName: '',
            farmDesc: '',
            street: '',
            streetNumber: '',
            flatNumber: '',
            city: '',
            postCode: '',
            country: '',
            voivodeship: '',
            county: '',
            district: ''
        };
        // get token() {
        //     if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
        //         return null;
        //     }
        //     return this._token;
        // }
        //  _token: '',
        //  _tokenExpirationDate: Date | null,
        this.user = new rxjs_1.BehaviorSubject(this.emptyUser);
    }
    AuthService.prototype.login = function (form) {
        var url = 'https://api-eko-bazarek.azurewebsites.net/api/users/login';
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(url, form, httpOptions);
    };
    AuthService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
