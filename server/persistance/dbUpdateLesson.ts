import { LessonModel } from '../models/models';

export function dbUpdateLesson(lessonId: number, lessonUpdates: any) {
    
    return LessonModel.update(lessonUpdates, {
        where: { id : lessonId }
    });

}