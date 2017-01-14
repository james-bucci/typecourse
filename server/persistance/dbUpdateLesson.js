"use strict";
const models_1 = require("../models/models");
function dbUpdateLesson(lessonId, lessonUpdates) {
    return models_1.LessonModel.update(lessonUpdates, {
        where: { id: lessonId }
    });
}
exports.dbUpdateLesson = dbUpdateLesson;
//# sourceMappingURL=dbUpdateLesson.js.map