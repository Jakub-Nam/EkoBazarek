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
    function LoginComponent() {
        this.activateViewTogglerEvent = new core_1.EventEmitter();
        this.activateLoginEvent = new core_1.EventEmitter();
        this.loginForm = new forms_1.FormGroup({});
    }
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.activateViewToggler = function () {
        this.activateViewTogglerEvent.emit();
    };
    LoginComponent.prototype.onSubmit = function () {
        this.activateLoginEvent.emit();
    };
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "activateViewTogglerEvent");
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "activateLoginEvent");
    __decorate([
        core_1.Input()
    ], LoginComponent.prototype, "loginForm");
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
