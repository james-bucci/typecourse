
import * as ORM from "Sequelize";
import { Sequelize } from "Sequelize";

import { initCourseModel } from "./initCourseModel";
import { initLessonModel } from "./initLessonModel";

const sequelize:Sequelize = new ORM(
    'complete-typescript-course', 
    'padmin', 
    'Allways6-1', 
    {
        host: "bucci-postgres.csu8kazhuyov.us-west-2.rds.amazonaws.com",
        port: 5432,
        dialect: "postgres",
        logging: console.log
    }
);

export const CourseModel = initCourseModel(sequelize);

export const LessonModel = initLessonModel(sequelize);

CourseModel.hasMany(LessonModel, {foreignKey: "courseId"});

LessonModel.belongsTo(CourseModel, {foreignKey: "courseId"});

