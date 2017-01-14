"use strict";
function apiOnError(res, message, err) {
    console.error('Promise chain error: ', message, err);
    res.status(500).send();
}
exports.apiOnError = apiOnError;
//# sourceMappingURL=apiOnError.js.map