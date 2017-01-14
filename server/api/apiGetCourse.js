"use strict";
const _ = require("lodash");
const api_1 = require("../api");
const persistance_1 = require("../persistance");
exports.apiGetCourse = function (req, res) {
    const courseId = parseInt(req.params.id);
    persistance_1.dbGetCourse(courseId)
        .then(_.partial(api_1.apiOnSuccess, res))
        .catch(_.partial(api_1.apiOnDatabaseError, res))
        .catch(_.partial(api_1.apiOnError, res, "Get course failed"));
};
//# sourceMappingURL=apiGetCourse.js.map