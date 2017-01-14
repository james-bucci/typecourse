import * as Bluebird from "bluebird";

import { CourseModel, LessonModel } from '../models/models';
import { CourseDetail, createCourseDetailFromDbModel } from '../../shared/model/course-detail';

export function dbGetCourse(courseId: number) : Bluebird<CourseDetail>{

    return CourseModel.findById(courseId, {       
        include: [ 
            { model: LessonModel } 
        ],
        order: [ 
            [ { model: LessonModel }, 'id']
        ]
    })
    .then(createCourseDetailFromDbModel);

}