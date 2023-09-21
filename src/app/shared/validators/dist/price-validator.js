"use strict";
exports.__esModule = true;
exports.priceValidator = void 0;
function priceValidator() {
    return function (control) {
        var priceValue = control.value;
        if (priceValue <= 0) {
            return { priceInvalid: true, message: 'Cena musi być większa od zera' };
        }
        if (!/^\d+\.\d{2}$/.test(priceValue)) {
            return { priceInvalid: true, message: 'Cena musi mieć dokładnie dwa miejsca po przecinku' };
        }
        return null;
    };
}
exports.priceValidator = priceValidator;
