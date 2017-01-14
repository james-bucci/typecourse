import { CourseService } from '../services/course.service';
import { Component, OnInit, Input } from '@angular/core';

import { Course, CourseDetail } from '../../../../shared/model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  @Input() course: Course;
  courseDetail: CourseDetail = null;
  showDetail : boolean = false;

  constructor(private courseService : CourseService) { }

  ngOnInit() {

  }

  onClick() {
      if (!this.courseDetail) {
        this.courseService.loadCourse(this.course.id)
          .subscribe( course => this.courseDetail = course );
      }
      this.showDetail = !this.showDetail;
  }

}
