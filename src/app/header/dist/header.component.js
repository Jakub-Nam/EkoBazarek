"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(user, router) {
        this.user = user;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(this.user.getResponseData(), 'header onInit');
    };
    HeaderComponent.prototype.showUserState = function () {
        console.log(this.user.getResponseData(), 'header check');
    };
    HeaderComponent.prototype.redicrectToProfile = function () {
        this.router.navigate(['/profile']);
    };
    HeaderComponent.prototype.redicrectToAuth = function () {
        this.router.navigate(['/auth']);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
