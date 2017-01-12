import * as ORM from "Sequelize";
import { Sequelize } from "Sequelize";

export function initLessonModel(sequelize: Sequelize) {
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
};

