import { LessonModel } from '../models/models';

export function dbCreateLesson(lesson: any) {
    
    return LessonModel.create(lesson);

}