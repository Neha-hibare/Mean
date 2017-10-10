"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            "invalidEmail": true
        };
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email.js.map