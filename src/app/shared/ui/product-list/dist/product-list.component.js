"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var add_product_component_1 = require("../add-product/add-product.component");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(dialog, signalProductService) {
        this.dialog = dialog;
        this.signalProductService = signalProductService;
        this.viewTogglerEvent = new core_1.EventEmitter();
        this.isAddCard = false;
    }
    ProductListComponent.prototype.viewTogglerEmit = function () {
        this.viewTogglerEvent.emit(false);
    };
    ProductListComponent.prototype.openDialog = function (i) {
        if (i != undefined) {
            this.signalProductService.choosenProductIndex = i;
        }
        var dialogRef = this.dialog.open(add_product_component_1.AddProductComponent);
        dialogRef.afterClosed().subscribe();
    };
    __decorate([
        core_1.Output()
    ], ProductListComponent.prototype, "viewTogglerEvent");
    __decorate([
        core_1.Input()
    ], ProductListComponent.prototype, "isAddCard");
    __decorate([
        core_1.Input()
    ], ProductListComponent.prototype, "filteredProducts");
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.scss']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
