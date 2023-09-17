"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(dataAccess, formBuilder, _snackBar) {
        this.dataAccess = dataAccess;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.subForm = this.formBuilder.group({
            email: ['', forms_1.Validators.required]
        });
    }
    FooterComponent.prototype.postSubscription = function () {
        var _this = this;
        this.dataAccess.postSubscription(this.subForm.value).subscribe(({
            next: function () {
                _this.openSnackBar("Subskrypcja powiodla się.");
                _this.subForm.reset();
            }
        }));
    };
    FooterComponent.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, 'Zamknij', {
            duration: 3000,
            horizontalPosition: 'start',
            verticalPosition: 'top'
        });
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
