"use strict";
const models_1 = require("../models/models");
const model_1 = require("../../shared//model");
function dbGetAllCourses() {
    return models_1.CourseModel.findAll({
        order: ['seqNo']
    })
        .then(items => items.map(model_1.createCourseFromDbModel));
}
exports.dbGetAllCourses = dbGetAllCourses;
//# sourceMappingURL=dbGetAllCourses.js.map