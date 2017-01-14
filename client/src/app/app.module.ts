import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseService } from './services/course.service';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
