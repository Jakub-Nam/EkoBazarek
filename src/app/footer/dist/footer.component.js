"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var FooterComponent = /** @class */ (function () {
    function FooterComponent(dataAccess, formBuilder, _snackBar) {
        this.dataAccess = dataAccess;
        this.formBuilder = formBuilder;
        this._snackBar = _snackBar;
        this.emailInput = new forms_1.FormControl('');
        this.subForm = this.formBuilder.group({
            email: ['', forms_2.Validators.required]
        });
    }
    FooterComponent.prototype.postSubscription = function () {
        var _this = this;
        var email = this.subForm.value;
        var headers = new http_1.HttpHeaders;
        headers.set('Content-Type', 'application/json');
        this.dataAccess.postSubscription(email, { headers: headers }).subscribe(({
            next: function (res) {
                _this.openSnackBar("Subskrypcja powiodla się.");
                _this.subForm.reset();
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
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
