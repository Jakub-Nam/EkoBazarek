"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistrationComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
        this.profileForm = new forms_1.FormGroup({});
        this.isHeader = true;
        this.sendingProfileEvent = new core_1.EventEmitter();
        this.password = this.profileForm.value.password;
    }
    // public isHeader: boolean = true;
    RegistrationComponent.prototype.onSubmit = function () {
        this.sendingProfileEvent.emit();
    };
    __decorate([
        core_1.Input()
    ], RegistrationComponent.prototype, "profileForm");
    __decorate([
        core_1.Input()
    ], RegistrationComponent.prototype, "isHeader");
    __decorate([
        core_1.Output()
    ], RegistrationComponent.prototype, "sendingProfileEvent");
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
