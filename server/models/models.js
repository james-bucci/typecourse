"use strict";
const ORM = require("Sequelize");
const initCourseModel_1 = require("./initCourseModel");
const initLessonModel_1 = require("./initLessonModel");
const sequelize = new ORM('complete-typescript-course', 'padmin', 'Allways6-1', {
    host: "bucci-postgres.csu8kazhuyov.us-west-2.rds.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    logging: console.log
});
exports.CourseModel = initCourseModel_1.initCourseModel(sequelize);
exports.LessonModel = initLessonModel_1.initLessonModel(sequelize);
exports.CourseModel.hasMany(exports.LessonModel, { foreignKey: "courseId" });
exports.LessonModel.belongsTo(exports.CourseModel, { foreignKey: "courseId" });
//# sourceMappingURL=models.js.map