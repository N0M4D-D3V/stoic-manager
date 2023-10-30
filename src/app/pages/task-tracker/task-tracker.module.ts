import { NgModule } from '@angular/core';
import { TaskTrackerPage } from './task-tracker.page';

import { MatTabsModule } from '@angular/material/tabs';
import { ObjetivesComponent } from './components/objetives/objetives.component';
import { DailiessComponent } from './components/dailies/dailies.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TaskTrackerPage,
    ObjetivesComponent,
    DailiessComponent,
    TasksComponent,
  ],
  exports: [TaskTrackerPage],
  imports: [CommonModule, MatTabsModule, SharedModule],
  providers: [],
  bootstrap: [],
})
export class TaskTrackerModule {}
