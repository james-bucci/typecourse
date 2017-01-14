"use strict";
const _ = require("lodash");
const api_1 = require("../api");
const persistance_1 = require("../persistance");
exports.apiGetAllCourses = function (req, res) {
    persistance_1.dbGetAllCourses()
        .then(_.partial(api_1.apiOnSuccess, res))
        .catch(_.partial(api_1.apiOnDatabaseError, res))
        .catch(_.partial(api_1.apiOnError, res, "Find all courses failed"));
};
//# sourceMappingURL=apiGetAllCourses.js.map