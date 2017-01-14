"use strict";
const _ = require("lodash");
const api_1 = require("../api");
const persistance_1 = require("../persistance");
exports.apiCreateLesson = function (req, res) {
    persistance_1.dbCreateLesson(req.body)
        .then(_.partial(api_1.apiOnSuccess, res))
        .catch(_.partial(api_1.apiOnDatabaseError, res))
        .catch(_.partial(api_1.apiOnError, res, "Create lesson failed"));
};
//# sourceMappingURL=apiCreateLesson.js.map