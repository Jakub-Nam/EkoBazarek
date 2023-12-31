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
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, userService, dataAccess, snackBarService) {
        var _this = this;
        this.fb = fb;
        this.userService = userService;
        this.dataAccess = dataAccess;
        this.snackBarService = snackBarService;
        this.token = '';
        this.profileForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required]],
            phone: ['', [forms_1.Validators.required]],
            farmName: ['', [forms_1.Validators.required]],
            farmDesc: ['', [forms_1.Validators.required]],
            street: ['', [forms_1.Validators.required]],
            streetNumber: ['', [forms_1.Validators.required]],
            flatNumber: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]],
            postCode: ['', [forms_1.Validators.required]],
            voivodeship: ['', [forms_1.Validators.required]],
            county: ['', [forms_1.Validators.required]],
            district: ['', [forms_1.Validators.required]]
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
            repNewPassword: ['', [forms_1.Validators.required]]
        });
        this.userService.getResponseData$().subscribe({
            next: function (res) {
                if (res.user.farmName !== '') {
                    _this.profileForm.setValue({
                        firstName: res.user.firstName,
                        lastName: res.user.lastName,
                        email: res.user.email,
                        phone: res.user.phone,
                        farmName: res.user.farmName,
                        farmDesc: res.user.farmDesc,
                        street: res.user.street,
                        streetNumber: res.user.streetNumber,
                        flatNumber: res.user.flatNumber,
                        city: res.user.city,
                        postCode: res.user.postCode,
                        voivodeship: res.user.voivodeship,
                        county: res.user.county,
                        district: res.user.district
                    });
                }
            }
        });
    }
    ProfileComponent.prototype.checkOldNewPass = function () {
        var _this = this;
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.token
            })
        };
        if (this.changePassForm.value.newPassword === this.changePassForm.value.repNewPassword) {
            var requestBody = {
                "oldPassword": this.changePassForm.value.oldPassword,
                "newPassword": this.changePassForm.value.newPassword
            };
            this.userService.getResponseData$().subscribe({
                next: function (res) {
                    _this.token = res.token;
                }
            });
            this.dataAccess.changePassword(requestBody, httpOptions).subscribe({
                next: function () {
                    _this.snackBarService.openSnackBar('Pomyślnie zmieniono hasło.');
                }
            });
        }
    };
    ProfileComponent.prototype.updateUserData = function () {
        var _this = this;
        var newDataUser = {
            firstName: this.profileForm.value.firstName,
            lastName: this.profileForm.value.lastName,
            email: this.profileForm.value.email,
            phone: this.profileForm.value.phone,
            farmName: this.profileForm.value.farmName,
            farmDesc: this.profileForm.value.farmDesc,
            street: this.profileForm.value.street,
            streetNumber: this.profileForm.value.streetNumber,
            flatNumber: this.profileForm.value.flatNumber,
            city: this.profileForm.value.city,
            postCode: this.profileForm.value.postCode,
            voivodeship: this.profileForm.value.voivodeship,
            county: this.profileForm.value.county,
            district: this.profileForm.value.district
        };
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.token
            })
        };
        this.dataAccess.putUser(newDataUser, httpOptions).subscribe({
            next: function () {
                _this.snackBarService.openSnackBar('Pomyślnie zmieniono dane uzytkownika.');
            }
        });
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
