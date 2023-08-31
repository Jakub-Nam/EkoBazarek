"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var registration_component_1 = require("./registration/registration.component");
var auth_routing_module_1 = require("./auth-routing.module");
var forms_1 = require("@angular/forms");
var auth_component_1 = require("./auth.component");
var http_1 = require("@angular/common/http");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                registration_component_1.RegistrationComponent,
                auth_component_1.AuthComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                // BrowserModule,
                http_1.HttpClientModule,
                auth_routing_module_1.AuthRoutingModule
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
