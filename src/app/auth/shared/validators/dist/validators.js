"use strict";
exports.__esModule = true;
exports.specialCharacterValidator = exports.upperCaseValidator = void 0;
function upperCaseValidator(nameRe) {
    return function (control) {
        var upperCase = nameRe.test(control.value);
        return !upperCase ? { upperCase: { value: control.value } } : null;
    };
}
exports.upperCaseValidator = upperCaseValidator;
function specialCharacterValidator(nameRe) {
    return function (control) {
        var specialCharacter = nameRe.test(control.value);
        return !specialCharacter ? { specialCharacter: { value: control.value } } : null;
    };
}
exports.specialCharacterValidator = specialCharacterValidator;
