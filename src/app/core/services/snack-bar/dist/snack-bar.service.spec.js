"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var snack_bar_1 = require("./snack-bar");
describe('SnackBarService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(snack_bar_1.SnackBarService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
