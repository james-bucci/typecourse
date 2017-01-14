"use strict";
const lesson_1 = require("./lesson");
function createCourseDetailFromDbModel({ id, url, description, iconUrl, courseListIcon, seqNo, longDescription, commingSoon, isNew, isOngoing, Lessons }) {
    return {
        id,
        url,
        description,
        iconUrl,
        courseListIcon,
        seqNo,
        longDescription,
        commingSoon,
        isNew,
        isOngoing,
        lessons: Lessons.map(lesson_1.createLessonFromDbModel)
    };
}
exports.createCourseDetailFromDbModel = createCourseDetailFromDbModel;
//# sourceMappingURL=course-detail.js.map