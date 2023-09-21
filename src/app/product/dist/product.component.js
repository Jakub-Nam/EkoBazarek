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
var add_product_component_1 = require("../shared/ui/add-product/add-product.component");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(dataAccess, dialog, signalProductsService) {
        this.dataAccess = dataAccess;
        this.dialog = dialog;
        this.signalProductsService = signalProductsService;
        this.isProducts = true;
        this.allSelected = true;
        this.searchTerm = '';
        this.selectedCategory = "CHICKEN";
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredProducts = this.signalProductsService.signalProducts();
        this.dataAccess.getProductTypes.subscribe({
            next: function (productTypes) {
                _this.productTypes = productTypes;
                _this.productFilteredTypes = productTypes;
            }
        });
        this.dataAccess.getProductCategories.subscribe({
            next: function (productCategories) {
                _this.productCategories = productCategories;
                _this.filteredProductCategories = productCategories;
            }
        });
        this.dataAccess.getProductUnits.subscribe({
            next: function (productUnits) {
                _this.productUnits = productUnits;
            }
        });
    };
    ProductComponent.prototype.filterProductsAndCategories = function (selectedType) {
        if (selectedType[0]) {
            this.filterCategoriesByType(selectedType);
            this.filterProductsByType(selectedType);
        }
        else {
            this.filteredProducts = this.signalProductsService.signalProducts();
            this.filteredProductCategories = this.productCategories;
        }
    };
    ProductComponent.prototype.filterProductsByType = function (selectedType) {
        this.filteredProducts = this.signalProductsService.signalProducts().filter(function (product) {
            return selectedType.includes(product.type);
        });
    };
    ProductComponent.prototype.filterCategoriesByType = function (selectedType) {
        this.filteredProductCategories = this.productCategories.filter(function (category) {
            return selectedType.includes(category.type);
        });
    };
    ProductComponent.prototype.filterByCategories = function (selectedCategory) {
        return this.filteredProducts = this.signalProductsService.signalProducts().filter(function (product) {
            if (product.category !== selectedCategory) {
                return false;
            }
            return true;
        });
    };
    ProductComponent.prototype.toggleView = function (boolean) {
        this.isProducts = boolean;
    };
    ProductComponent.prototype.filterProductsByName = function () {
        var _this = this;
        this.filteredProducts = this.signalProductsService.signalProducts().filter(function (category) {
            return category.name.toLowerCase().includes(_this.searchTerm.toLowerCase());
        });
    };
    ProductComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(add_product_component_1.AddProductComponent, {
            data: { name: 'this.name', animal: 'this.animal' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
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
