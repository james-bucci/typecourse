import * as Bluebird from "bluebird";

import { CourseModel } from '../models/models';
import { Course, createCourseFromDbModel } from '../../shared//model';

export function dbGetAllCourses() : Bluebird<Course[]> {
   
    return CourseModel.findAll({
            order: ['seqNo']
        })
       .then(items => items.map(createCourseFromDbModel) );

}