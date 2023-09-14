"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var animations_1 = require("@angular/platform-browser/animations");
var platform_browser_1 = require("@angular/platform-browser");
var carousel_component_1 = require("./home/ui/carousel/carousel.component");
var angular_1 = require("@coreui/angular");
var category_card_component_1 = require("./home/ui/category-card/category-card.component");
var footer_component_1 = require("./footer/footer.component");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var http_1 = require("@angular/common/http");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var core_1 = require("@angular/core");
var product_module_1 = require("./product/product.module");
var forms_1 = require("@angular/forms");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var auth_module_1 = require("./auth/auth.module");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core/core.module");
var dialog_1 = require("@angular/material/dialog");
var materialComponents = [
    icon_1.MatIconModule,
    menu_1.MatMenuModule,
    form_field_1.MatFormFieldModule,
    input_1.MatInputModule,
    dialog_1.MatDialogModule
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                carousel_component_1.CarouselComponent,
                footer_component_1.FooterComponent,
                category_card_component_1.CategoryCardComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                angular_1.CarouselModule,
                auth_module_1.AuthModule,
                forms_1.FormsModule,
                product_module_1.ProductModule,
                shared_module_1.SharedModule,
                forms_1.ReactiveFormsModule,
                materialComponents,
                app_routing_module_1.AppRoutingModule,
                core_module_1.CoreModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
