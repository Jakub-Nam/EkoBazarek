"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var product_routing_module_1 = require("./product-routing.module");
var product_component_1 = require("./product.component");
var type_list_component_1 = require("./ui/type-list/type-list.component");
var category_list_component_1 = require("./ui/category-list/category-list.component");
var product_list_component_1 = require("./ui/product-list/product-list.component");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var add_product_component_1 = require("./ui/add-product/add-product.component");
var icon_1 = require("@angular/material/icon");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var text_field_1 = require("@angular/cdk/text-field");
var select_1 = require("@angular/material/select");
var materialComponents = [
    icon_1.MatIconModule,
    list_1.MatListModule,
    menu_1.MatMenuModule,
    form_field_1.MatFormFieldModule,
    input_1.MatInputModule,
    text_field_1.TextFieldModule,
    select_1.MatSelectModule
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_component_1.ProductComponent,
                type_list_component_1.TypeListComponent,
                category_list_component_1.CategoryListComponent,
                product_list_component_1.ProductListComponent,
                add_product_component_1.AddProductComponent
            ],
            imports: [
                common_1.CommonModule,
                product_routing_module_1.ProductRoutingModule,
                // ReactiveFormsModule,
                // FormsModule,
                materialComponents
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
