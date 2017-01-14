import { Course, CourseDetail } from '../../../../shared/model';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses : Course[];
  
  constructor(private courseService : CourseService) { }

  ngOnInit() {
      this.courseService.loadCourses()
        .subscribe( courses => this.courses = courses );
  }

}
