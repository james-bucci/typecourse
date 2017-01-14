"use strict";
function createCourseFromDbModel({ id, url, description, iconUrl, courseListIcon, seqNo }) {
    return {
        id,
        url,
        description,
        iconUrl,
        courseListIcon,
        seqNo
    };
}
exports.createCourseFromDbModel = createCourseFromDbModel;
//# sourceMappingURL=course.js.map