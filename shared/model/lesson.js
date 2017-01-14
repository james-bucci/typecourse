"use strict";
function createLessonFromDbModel({ id, url, description, duration, seqNo, courseId, pro, tags }) {
    return {
        id,
        url,
        description,
        duration,
        seqNo,
        courseId,
        pro,
        tags
    };
}
exports.createLessonFromDbModel = createLessonFromDbModel;
//# sourceMappingURL=lesson.js.map