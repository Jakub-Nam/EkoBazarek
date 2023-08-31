"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, userService, authService) {
        this.fb = fb;
        this.userService = userService;
        this.authService = authService;
        this.loginForm = this.fb.group({
            email: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]]
            // email: ['kubanam1995@gmail.com', [Validators.required]],
            // password: ['Namysl1234!', [Validators.required]]
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        var formValues = this.loginForm.value;
        this.login(formValues);
    };
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        this.authService.login(formValues).subscribe({
            next: function (res) {
                console.log(res);
                _this.userService.updateResponseData(res);
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        });
    };
    LoginComponent.prototype.test = function () {
        this.userService.consoleLog();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
