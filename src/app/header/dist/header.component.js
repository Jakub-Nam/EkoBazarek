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
    function HeaderComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isUser = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getResponseData().subscribe({
            next: function (res) {
                if (res.user.farmName !== '') {
                    _this.isUser = true;
                }
                else {
                    _this.isUser = false;
                }
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        });
    };
    HeaderComponent.prototype.redicrectToProfile = function () {
        this.router.navigate(['/profile']);
    };
    HeaderComponent.prototype.redicrectToAuth = function () {
        this.router.navigate(['/auth']);
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/home']);
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
