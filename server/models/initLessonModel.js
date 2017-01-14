"use strict";
const ORM = require("Sequelize");
function initLessonModel(sequelize) {
    return sequelize.define('Lesson', {
        courseId: ORM.INTEGER,
        description: ORM.STRING,
        url: ORM.STRING,
        duration: ORM.STRING,
        seqNo: ORM.INTEGER,
        pro: ORM.BOOLEAN,
        tags: ORM.STRING,
        gitHubUrl: ORM.STRING
    });
}
exports.initLessonModel = initLessonModel;
;
//# sourceMappingURL=initLessonModel.js.map