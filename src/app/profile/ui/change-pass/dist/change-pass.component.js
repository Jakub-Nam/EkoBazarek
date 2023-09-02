"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChangePassComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ChangePassComponent = /** @class */ (function () {
    function ChangePassComponent() {
        this.changePassForm = new forms_1.FormGroup({});
        this.activateChangePassEvent = new core_1.EventEmitter();
        this.password = this.changePassForm.value.newPass;
    }
    ChangePassComponent.prototype.onSubmit = function () {
        this.activateChangePassEvent.emit();
    };
    __decorate([
        core_1.Input()
    ], ChangePassComponent.prototype, "changePassForm");
    __decorate([
        core_1.Output()
    ], ChangePassComponent.prototype, "activateChangePassEvent");
    ChangePassComponent = __decorate([
        core_1.Component({
            selector: 'app-change-pass',
            templateUrl: './change-pass.component.html',
            styleUrls: ['./change-pass.component.scss']
        })
    ], ChangePassComponent);
    return ChangePassComponent;
}());
exports.ChangePassComponent = ChangePassComponent;
