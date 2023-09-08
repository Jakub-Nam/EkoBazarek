"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validators_1 = require("../auth/shared/validators/validators");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, http, authService, userService) {
        this.fb = fb;
        this.http = http;
        this.authService = authService;
        this.userService = userService;
        this.token = '';
        this.profileForm = this.fb.group({
            firstName: ['Jakub', forms_1.Validators.required],
            lastName: ['Namysl', forms_1.Validators.required],
            email: ['kubanam1995@gmail.com', [forms_1.Validators.required]],
            phone: ['793793793', [forms_1.Validators.required]],
            password: ['Namysl1234!',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8),
                    validators_1.upperCaseValidator(/[A-Z]/),
                    validators_1.specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
                ],
            ],
            repeatPassword: ['Namysl1234!', [forms_1.Validators.required]],
            farmName: ['FarmaZycia', [forms_1.Validators.required]],
            farmDesc: ['lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum', [forms_1.Validators.required]],
            street: ['Farmerska', [forms_1.Validators.required]],
            streetNumber: ['12', [forms_1.Validators.required]],
            flatNumber: ['13', [forms_1.Validators.required]],
            city: ['Glisnica', [forms_1.Validators.required]],
            postCode: ['63-430', [forms_1.Validators.required]],
            voivodeship: ['wielkopolskie', [forms_1.Validators.required]],
            county: ['Ostrów Wielkopolski', [forms_1.Validators.required]],
            district: ['Odolanów', [forms_1.Validators.required]]
        });
        this.changePassForm = this.fb.group({
            oldPassword: ['', [forms_1.Validators.required]],
            newPassword: ['',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8),
                    validators_1.upperCaseValidator(/[A-Z]/),
                    validators_1.specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
                ],
            ],
            repNewPassword: ['Namysl1234!5', [forms_1.Validators.required]]
        });
    }
    ProfileComponent.prototype.checkOldNewPass = function () {
        var _this = this;
        if (this.changePassForm.value.newPassword === this.changePassForm.value.repNewPassword) {
            var requestBody = {
                "oldPassword": this.changePassForm.value.oldPassword,
                "newPassword": this.changePassForm.value.newPassword
            };
            this.userService.getResponseData().subscribe({
                next: function (res) {
                    _this.token = res.token;
                },
                error: function (err) { return console.error('Observer got an error: ' + err); }
            });
            this.changePassword(requestBody)
                .subscribe();
        }
    };
    ProfileComponent.prototype.changePassword = function (reqBody) {
        var url = 'https://api-eko-bazarek.azurewebsites.net/api/users/change-password';
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.token
            })
        };
        return this.http.post(url, reqBody, httpOptions)
            .pipe(rxjs_1.map(function (data) {
            console.log(data);
            return data;
        }), rxjs_1.catchError(function (err) {
            console.log(err);
            throw err;
        }));
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
