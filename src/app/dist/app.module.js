"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var carousel_component_1 = require("./carousel/carousel.component");
var footer_component_1 = require("./footer/footer.component");
var animations_1 = require("@angular/platform-browser/animations");
var angular_1 = require("@coreui/angular");
var categories_component_1 = require("./categories/categories.component");
var http_1 = require("@angular/common/http");
var category_card_component_1 = require("./category-card/category-card.component");
var products_component_1 = require("./products/products.component");
var product_component_1 = require("./product/product.component");
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
                categories_component_1.CategoriesComponent,
                category_card_component_1.CategoryCardComponent,
                products_component_1.ProductsComponent,
                product_component_1.ProductComponent
            ],
            imports: [
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                angular_1.CarouselModule,
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
