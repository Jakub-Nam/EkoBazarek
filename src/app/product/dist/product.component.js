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
    function ProductComponent(dataAccess, dialog) {
        this.dataAccess = dataAccess;
        this.dialog = dialog;
        this.isProducts = true;
        this.allSelected = true;
        this.searchTerm = '';
        this.products = [
            {
                id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                name: "Jęczmień eko",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis auctor arcu. Vivamus interdum diam turpis, ac rutrum sem facilisis eget. Proin enim odio, egestas eget tellus ut, vestibulum lobortis felis. Nunc tortor felis, dignissim at purus at, auctor vehicula leo. Donec ornare mattis mauris non volutpat. Vestibulum faucibus fermentum tellus, non sagittis tortor ultrices et. Quisque et elementum quam.",
                price: 0,
                type: "CEREALS",
                category: "BARLEY",
                unit: "t",
                createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                createDate: 1690093259833
            },
            {
                id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                name: "Jęczmień eko",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis auctor arcu. Vivamus interdum diam turpis, ac rutrum sem facilisis eget. Proin enim odio, egestas eget tellus ut, vestibulum lobortis felis. Nunc tortor felis, dignissim at purus at, auctor vehicula leo. Donec ornare mattis mauris non volutpat. Vestibulum faucibus fermentum tellus, non sagittis tortor ultrices et. Quisque et elementum quam.",
                price: 0,
                type: "CEREALS",
                category: "RYE",
                unit: "t",
                createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                createDate: 1690093259833
            },
            {
                id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                name: "Skrzydełka",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis auctor arcu. Vivamus interdum diam turpis, ac rutrum sem facilisis eget. Proin enim odio, egestas eget tellus ut, vestibulum lobortis felis. Nunc tortor felis, dignissim at purus at, auctor vehicula leo. Donec ornare mattis mauris non volutpat. Vestibulum faucibus fermentum tellus, non sagittis tortor ultrices et. Quisque et elementum quam.",
                price: 0,
                type: "MEAT",
                category: "PORK",
                unit: "t",
                createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                createDate: 1690093259833
            }
        ];
        this.selectedCategory = "CHICKEN";
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredProducts = this.products;
        this.dataAccess.getProductTypes$.subscribe({
            next: function (productTypes) {
                _this.productTypes = productTypes;
                _this.filteredProducts = _this.products;
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        });
        this.dataAccess.getProductCategories$.subscribe({
            next: function (productCategories) {
                _this.productCategories = productCategories;
                _this.filteredProductCategories = productCategories;
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        });
        this.dataAccess.getProductUnits$.subscribe({
            next: function (productUnits) {
                _this.productUnits = productUnits;
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        });
    };
    ProductComponent.prototype.filterProductsAndCategories = function (selectedType) {
        this.filterCategoriesByType(selectedType);
        this.filterProductsByType(selectedType);
    };
    ProductComponent.prototype.filterProductsByType = function (selectedType) {
        this.filteredProducts = this.products.filter(function (product) {
            return selectedType.includes(product.type);
        });
    };
    ProductComponent.prototype.filterCategoriesByType = function (selectedType) {
        this.filteredProductCategories = this.productCategories.filter(function (category) {
            return selectedType.includes(category.type);
        });
    };
    ProductComponent.prototype.filterByCategories = function (selectedCategory) {
        return this.filteredProducts = this.products.filter(function (product) {
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
        this.filteredProducts = this.products.filter(function (category) {
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
