"use strict";
exports.apiGlobalErrorHandler = function (err, req, res, next) {
    console.error('API error handler triggered', err);
    res.status(500).json({
        errorCode: 'ERR-001',
        message: 'Internal Server Error'
    });
};
//# sourceMappingURL=apiGlobalErrorHandler.js.map