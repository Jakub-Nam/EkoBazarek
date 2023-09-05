"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(data) {
        this.data = data;
        this.productTypes = [];
        this.productCategories = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        // this.http.get<any>('https://api-eko-bazarek.azurewebsites.net/api/products')
        var _this = this;
        this.data.getProductTypes$.subscribe({
            next: function (productTypes) {
                _this.productTypes = productTypes;
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        });
        // this.http.get<ProductCategory[]>('https://api-eko-bazarek.azurewebsites.net/api/products/categories')
        //   .subscribe({
        //     next: (productCategories) => {
        //       console.log(productCategories)
        //       this.productCategories = productCategories
        //     },
        //     error: (err: Error) => console.error('Observer got an error: ' + err),
        //   });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.scss']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
