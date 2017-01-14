import { LessonModel } from '../models/models';

export function dbDeleteLesson(lessonId: number) {
    
    return LessonModel.destroy({
        where: { id : lessonId }
    });

}