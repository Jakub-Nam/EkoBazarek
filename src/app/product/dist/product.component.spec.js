"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var product_component_1 = require("./product.component");
describe('ProductsComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [product_component_1.ProductComponent]
        });
        fixture = testing_1.TestBed.createComponent(product_component_1.ProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
