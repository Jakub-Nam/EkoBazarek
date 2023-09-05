"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var data_access_service_1 = require("./data-access.service");
describe('DataAccessService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(data_access_service_1.DataAccessService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
