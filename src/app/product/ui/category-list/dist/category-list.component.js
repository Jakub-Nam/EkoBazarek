"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoryListComponent = void 0;
var core_1 = require("@angular/core");
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent() {
        this.selectedCategoryEmit = new core_1.EventEmitter();
    }
    CategoryListComponent.prototype.emitSelectedCategory = function (category) {
        this.selectedCategory = category;
        this.selectedCategoryEmit.emit(this.selectedCategory);
    };
    __decorate([
        core_1.Input()
    ], CategoryListComponent.prototype, "filteredProductCategories");
    __decorate([
        core_1.Output()
    ], CategoryListComponent.prototype, "selectedCategoryEmit");
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: 'app-category-list',
            templateUrl: './category-list.component.html',
            styleUrls: ['./category-list.component.scss']
        })
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
