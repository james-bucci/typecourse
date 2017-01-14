"use strict";
const models_1 = require("../models/models");
function dbCreateLesson(lesson) {
    return models_1.LessonModel.create(lesson);
}
exports.dbCreateLesson = dbCreateLesson;
//# sourceMappingURL=dbCreateLesson.js.map