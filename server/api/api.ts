import * as express from 'express';
import { Application } from 'express';

import { 
    apiGetAllCourses, 
    apiGetCourse,
    apiCreateLesson
} from '../api';

export function initRestApi(app: Application) {

    app.route('/api/courses').get(apiGetAllCourses);

    app.route('/api/courses/:id').get(apiGetCourse);

    app.route('/api/lesson').post(apiCreateLesson);

}