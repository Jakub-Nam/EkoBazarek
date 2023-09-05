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
var validators_1 = require("./shared/validators/validators");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(fb, authService, userService, route) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.registrationView = false;
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]]
        });
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
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.registrationView = false;
    };
    AuthComponent.prototype.viewToggler = function () {
        this.registrationView = !this.registrationView;
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        var formValues = this.loginForm.value;
        this.authService.login(formValues).subscribe({
            next: function (res) {
                _this.userService.updateResponseData(res);
                _this.route.navigateByUrl('/home');
                // pomyslnie zalogowano toast
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        });
    };
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
    AuthComponent.prototype.createAccount = function () {
        var _this = this;
        if (this.profileForm.value.password === this.profileForm.value.repeatPassword) {
            var requestBody = {
                city: this.profileForm.value.city,
                country: "Polska",
                county: this.profileForm.value.county,
                district: this.profileForm.value.district,
                email: this.profileForm.value.email,
                farmDesc: this.profileForm.value.farmDesc,
                farmName: this.profileForm.value.farmName,
                firstName: this.profileForm.value.firstName,
                flatNumber: this.profileForm.value.flatNumber,
                id: '',
                lastName: this.profileForm.value.lastName,
                phone: this.profileForm.value.phone,
                postCode: this.profileForm.value.postCode,
                street: this.profileForm.value.street,
                streetNumber: this.profileForm.value.streetNumber,
                voivodeship: this.profileForm.value.voivodeship,
                password: this.profileForm.value.password
            };
            this.authService.addUser(requestBody)
                .subscribe({
                next: function (res) {
                    console.log(res);
                    _this.viewToggler();
                },
                error: function (err) { return console.error('Observer got an error: ' + err); }
            });
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
