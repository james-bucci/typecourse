"use strict";
const _ = require("lodash");
const api_1 = require("../api");
const persistance_1 = require("../persistance");
exports.apiPatchLesson = function (req, res) {
    const lessonId = parseInt(req.params.id);
    persistance_1.dbUpdateLesson(lessonId, req.body)
        .then(_.partial(api_1.apiOnSuccess, res))
        .catch(_.partial(api_1.apiOnDatabaseError, res))
        .catch(_.partial(api_1.apiOnError, res, "Update lesson failed"));
};
//# sourceMappingURL=apiPatchLesson.js.map