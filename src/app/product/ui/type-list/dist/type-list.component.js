"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TypeListComponent = void 0;
var core_1 = require("@angular/core");
var TypeListComponent = /** @class */ (function () {
    function TypeListComponent() {
        this.productTypes = [];
        this.selectedTypeEmit = new core_1.EventEmitter();
        this.checkboxColor = 'primary';
    }
    TypeListComponent.prototype.onSelectionChange = function (event) {
        var selectedOption = event;
        var selectedTypes = selectedOption.source._value;
        this.selectedTypeEmit.emit(selectedTypes);
    };
    __decorate([
        core_1.Input()
    ], TypeListComponent.prototype, "productTypes");
    __decorate([
        core_1.Output()
    ], TypeListComponent.prototype, "selectedTypeEmit");
    TypeListComponent = __decorate([
        core_1.Component({
            selector: 'app-type-list',
            templateUrl: './type-list.component.html',
            styleUrls: ['./type-list.component.scss']
        })
    ], TypeListComponent);
    return TypeListComponent;
}());
exports.TypeListComponent = TypeListComponent;
