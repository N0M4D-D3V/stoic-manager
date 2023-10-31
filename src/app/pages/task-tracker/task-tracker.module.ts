import { NgModule } from '@angular/core';
import { TaskTrackerPage } from './task-tracker.page';

import { MatTabsModule } from '@angular/material/tabs';
import { ObjetivesComponent } from './components/objetives/objetives.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TaskTrackerPage, ObjetivesComponent, DailiesComponent],
  exports: [TaskTrackerPage],
  imports: [CommonModule, MatTabsModule, SharedModule],
  providers: [],
  bootstrap: [],
})
export class TaskTrackerModule {}
