"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistrationComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validators_1 = require("../validators/validators");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.profileForm = this.fb.group({
            firstName: ['kuba', forms_1.Validators.required],
            lastName: ['namysl', forms_1.Validators.required],
            email: ['kubanam1995@gmail.com', [forms_1.Validators.required]],
            phone: ['793742209', [forms_1.Validators.required]],
            password: ['Namysl1234!',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8),
                    validators_1.upperCaseValidator(/[A-Z]/),
                    validators_1.specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
                ],
            ],
            repeatPassword: ['Namysl1234!', [forms_1.Validators.required]],
            farmName: ['Farma12', [forms_1.Validators.required]],
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
    }
    Object.defineProperty(RegistrationComponent.prototype, "firstName", {
        get: function () { return this.profileForm.get('firstName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "lastName", {
        get: function () { return this.profileForm.get('lastName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "email", {
        get: function () { return this.profileForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "phoneNumber", {
        get: function () { return this.profileForm.get('phoneNumber'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "password", {
        get: function () { return this.profileForm.get('password'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "repeatPassword", {
        get: function () { return this.profileForm.get('repeatPassword'); },
        enumerable: false,
        configurable: true
    });
    RegistrationComponent.prototype.createAccount = function () {
        if (this.profileForm.value.password === this.profileForm.value.repeatPassword) {
            console.log(this.profileForm.value);
            this.addUser(this.profileForm.value)
                .subscribe({
                next: function (res) {
                    console.log(res);
                },
                error: function (err) { return console.error('Observer got an error: ' + err); }
            });
        }
    };
    RegistrationComponent.prototype.addUser = function (userData) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url = 'https://api-eko-bazarek.azurewebsites.net/api/users';
        return this.http.post(url, userData, httpOptions);
        // .pipe(
        //     catchError(this.handleError('addHero'))
        // );
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            templateUrl: './registration.component.html',
            styleUrls: ['./registration.component.scss']
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
