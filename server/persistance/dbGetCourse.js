"use strict";
const models_1 = require("../models/models");
const course_detail_1 = require("../../shared/model/course-detail");
function dbGetCourse(courseId) {
    return models_1.CourseModel.findById(courseId, {
        include: [
            { model: models_1.LessonModel }
        ],
        order: [
            [{ model: models_1.LessonModel }, 'id']
        ]
    })
        .then(course_detail_1.createCourseDetailFromDbModel);
}
exports.dbGetCourse = dbGetCourse;
//# sourceMappingURL=dbGetCourse.js.map