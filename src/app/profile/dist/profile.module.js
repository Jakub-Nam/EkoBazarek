"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var profile_routing_module_1 = require("./profile-routing.module");
var profile_component_1 = require("./profile.component");
var tabs_1 = require("@angular/material/tabs");
var shared_module_1 = require("../shared/shared.module");
var change_pass_component_1 = require("./ui/change-pass/change-pass.component");
var forms_1 = require("@angular/forms");
var materialComponents = [
    tabs_1.MatTabsModule
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        core_1.NgModule({
            declarations: [
                profile_component_1.ProfileComponent,
                change_pass_component_1.ChangePassComponent,
            ],
            imports: [
                common_1.CommonModule,
                profile_routing_module_1.ProfileRoutingModule,
                forms_1.ReactiveFormsModule,
                materialComponents,
                shared_module_1.SharedModule
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());
exports.ProfileModule = ProfileModule;
