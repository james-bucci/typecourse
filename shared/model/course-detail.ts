import {Course} from './course';
import {Lesson, createLessonFromDbModel} from './lesson';

export interface CourseDetail extends Course {
    longDescription: string,
    commingSoon?: boolean,
    isNew?: boolean,
    isOngoing?: boolean,
    lessons: Lesson[]
}

export function createCourseDetailFromDbModel(
    {
        id, 
        url, 
        description, 
        iconUrl, 
        courseListIcon, 
        seqNo,
        longDescription,
        commingSoon,
        isNew,
        isOngoing,
        Lessons
    }: any) : CourseDetail {

    return {
        id, 
        url, 
        description, 
        iconUrl, 
        courseListIcon, 
        seqNo,
        longDescription,
        commingSoon,
        isNew,
        isOngoing,
        lessons: Lessons.map(createLessonFromDbModel)
    }

}
