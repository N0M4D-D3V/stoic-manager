import { NgModule } from '@angular/core';
import { TaskTrackerModule } from './task-tracker/task-tracker.module';
import { ScheduleModule } from './schedule/schedule.module';

@NgModule({
  declarations: [],
  exports: [TaskTrackerModule, ScheduleModule],
  imports: [TaskTrackerModule, ScheduleModule],
  providers: [],
  bootstrap: [],
})
export class PagesModule {}
