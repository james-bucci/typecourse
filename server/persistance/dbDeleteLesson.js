"use strict";
const models_1 = require("../models/models");
function dbDeleteLesson(lessonId) {
    return models_1.LessonModel.destroy({
        where: { id: lessonId }
    });
}
exports.dbDeleteLesson = dbDeleteLesson;
//# sourceMappingURL=dbDeleteLesson.js.map