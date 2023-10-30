import { NgModule } from '@angular/core';
import { TaskTrackerPage } from './task-tracker.page';

import { MatTabsModule } from '@angular/material/tabs';
import { ObjetivesComponent } from './components/objetives/objetives.component';
import { DailiessComponent } from './components/dailies/dailies.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    TaskTrackerPage,
    ObjetivesComponent,
    DailiessComponent,
    TasksComponent,
  ],
  exports: [TaskTrackerPage],
  imports: [MatTabsModule],
  providers: [],
  bootstrap: [],
})
export class TaskTrackerModule {}
