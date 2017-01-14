import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Course, CourseDetail } from '../../../../shared/model';
const apiUrl = 'http://localhost:8090/api'

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  loadCourses() : Observable<Course[]> {
    return this.http.get(`${apiUrl}/courses`)
     .map(result => result.json().payload)
  }

  loadCourse(id: number) : Observable<CourseDetail> {
    return this.http.get(`${apiUrl}/courses/${id}`)
     .map(result => result.json().payload);
  }
}
