"use strict";
const hri = require('human-readable-ids').hri;
function apiOnDatabaseError(res, err) {
    const errorId = hri.random();
    console.error(`Database error occurred, `, errorId, err);
    res.status(500).json({
        errorCode: 'ERR-002',
        message: `An error with code (${errorId}) occurred. Please contact techical support`
    });
}
exports.apiOnDatabaseError = apiOnDatabaseError;
//# sourceMappingURL=apiOnDatabaseError.js.map