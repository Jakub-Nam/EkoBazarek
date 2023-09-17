"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var signal_products_service_1 = require("./signal-products.service");
describe('SignalProductsService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(signal_products_service_1.SignalProductsService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
