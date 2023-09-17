"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignalProductsService = void 0;
var core_1 = require("@angular/core");
var SignalProductsService = /** @class */ (function () {
    function SignalProductsService() {
        this.choosenProductIndex = -1;
        this.signalProducts = core_1.signal([{
                id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                name: "Marchew Czerwona",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                price: 8,
                type: "VEGETABLE",
                category: "CARROT",
                unit: "kg",
                createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                createDate: 1690093259833
            },
            {
                id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                name: "Jęczmień eko",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                price: 13,
                type: "CEREALS",
                category: "BARLEY",
                unit: "t",
                createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                createDate: 1690093259833
            },
            {
                id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                name: "Skrzydełka",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                price: 21,
                type: "MEAT",
                category: "PORK",
                unit: "t",
                createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
                createDate: 1690093259833
            }
        ]);
    }
    SignalProductsService.prototype.addToSignalProducts = function (product) {
        this.signalProducts.mutate(function (values) { return values.push(product); });
    };
    SignalProductsService.prototype.mutateSignalProdcuts = function (product) {
        var _this = this;
        this.signalProducts.mutate(function (values) { return values[_this.choosenProductIndex] = product; });
    };
    SignalProductsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SignalProductsService);
    return SignalProductsService;
}());
exports.SignalProductsService = SignalProductsService;
