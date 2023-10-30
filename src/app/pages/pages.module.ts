import { NgModule } from '@angular/core';
import { TaskTrackerModule } from './task-tracker/task-tracker.module';

@NgModule({
  declarations: [],
  exports: [TaskTrackerModule],
  imports: [TaskTrackerModule],
  providers: [],
  bootstrap: [],
})
export class PagesModule {}
