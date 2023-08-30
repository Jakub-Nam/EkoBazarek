"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validators_1 = require("./validators/validators");
// import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
// import { Subscription } from 'rxjs';
// import { User } from './user.model';
var AuthComponent = /** @class */ (function () {
    function AuthComponent(fb) {
        this.fb = fb;
        this.registrationView = true;
        this.profileForm = this.fb.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            eMail: ['', [forms_1.Validators.required]],
            phoneNumber: ['', [forms_1.Validators.required]],
            password: ['',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8),
                    validators_1.upperCaseValidator(/[A-Z]/),
                    validators_1.specialCharacterValidator(/[!@#$%^&*(),.?":{}|<>]/)
                ],
            ],
            repeatPassword: ['', [forms_1.Validators.required]],
            farmName: ['', [forms_1.Validators.required]],
            farmDescritpion: ['', [forms_1.Validators.required]],
            street: ['', [forms_1.Validators.required]],
            houseNumber: ['', [forms_1.Validators.required]],
            apartmentNumber: ['', [forms_1.Validators.required]],
            cityVillage: ['', [forms_1.Validators.required]],
            postalCode: ['', [forms_1.Validators.required]],
            voivodeship: ['', [forms_1.Validators.required]],
            poviat: ['', [forms_1.Validators.required]],
            commune: ['', [forms_1.Validators.required]]
        });
    }
    Object.defineProperty(AuthComponent.prototype, "firstName", {
        get: function () { return this.profileForm.get('firstName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "lastName", {
        get: function () { return this.profileForm.get('lastName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "email", {
        get: function () { return this.profileForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "phoneNumber", {
        get: function () { return this.profileForm.get('phoneNumber'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "password", {
        get: function () { return this.profileForm.get('password'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthComponent.prototype, "repeatPassword", {
        get: function () { return this.profileForm.get('repeatPassword'); },
        enumerable: false,
        configurable: true
    });
    AuthComponent.prototype.onSubmit = function () {
        if (this.profileForm.value.password === this.profileForm.value.repeatPassword) {
            console.log(this.profileForm.value);
        }
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
        })
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
