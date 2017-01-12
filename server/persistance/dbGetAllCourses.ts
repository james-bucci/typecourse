import { CourseModel } from '../models/models';

export function dbGetAllCourses() {
    
    return CourseModel.findAll({
       order: ['seqNo']
    });

}