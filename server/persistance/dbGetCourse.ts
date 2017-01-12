import { CourseModel, LessonModel } from '../models/models';

export function dbGetCourse(courseId: number) {

    return CourseModel.findById(courseId, {
        
        include : [ 
            { model: LessonModel, as: "lessons" } 
        ],
        
        order: [ 
            [ { model: LessonModel, as: "lessons"}, 'id']
        ]
    });

}